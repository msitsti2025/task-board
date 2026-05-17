const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataDir = path.join(root, "data");
const dataFile = path.join(dataDir, "dashboard-items.json");
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
  });
  response.end(body);
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 5_000_000) {
        request.destroy();
        reject(new Error("Request body is too large."));
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function handleApi(request, response) {
  if (request.url !== "/api/items") return false;

  if (request.method === "GET") {
    try {
      const json = await fs.promises.readFile(dataFile, "utf8");
      send(response, 200, json, "application/json; charset=utf-8");
    } catch (error) {
      if (error.code === "ENOENT") {
        send(response, 404, "[]", "application/json; charset=utf-8");
        return true;
      }
      send(response, 500, "데이터 파일을 읽지 못했습니다.");
    }
    return true;
  }

  if (request.method === "POST") {
    try {
      const body = await readBody(request);
      const parsed = JSON.parse(body);
      if (!Array.isArray(parsed)) {
        send(response, 400, "업무 데이터는 배열이어야 합니다.");
        return true;
      }
      await fs.promises.mkdir(dataDir, { recursive: true });
      await fs.promises.writeFile(dataFile, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");
      send(response, 200, JSON.stringify({ ok: true }), "application/json; charset=utf-8");
    } catch (error) {
      send(response, 500, `데이터 파일을 저장하지 못했습니다: ${error.message}`);
    }
    return true;
  }

  send(response, 405, "Method not allowed");
  return true;
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.normalize(path.join(root, requestPath));

  if (!filePath.startsWith(root)) {
    send(response, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      send(response, error.code === "ENOENT" ? 404 : 500, "Not found");
      return;
    }
    send(response, 200, content, contentTypes[path.extname(filePath)] || "application/octet-stream");
  });
}

const server = http.createServer(async (request, response) => {
  if (await handleApi(request, response)) return;
  serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`OSTI dashboard server: http://localhost:${port}`);
  console.log(`Data file: ${dataFile}`);
});
