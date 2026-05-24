const http = require("http");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataFile = process.env.DATA_FILE || path.join(root, "tasks.json");
let port = Number(process.env.PORT || 4173);
const staffUser = process.env.STAFF_USER || "admin";
const staffPassword = process.env.STAFF_PASSWORD || "osti2026";
const sessionCookie = "osti_session";
const sessionTtlMs = 8 * 60 * 60 * 1000;
const sessions = new Map();

if (process.env.NODE_ENV === "production" && !process.env.STAFF_PASSWORD) {
  console.error("STAFF_PASSWORD must be set in production.");
  process.exit(1);
}

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

function send(response, status, body, type = "text/plain; charset=utf-8", headers = {}) {
  response.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store",
    ...headers,
  });
  response.end(body);
}

function json(response, status, payload, headers = {}) {
  send(response, status, JSON.stringify(payload), "application/json; charset=utf-8", headers);
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

function parseCookies(header = "") {
  return Object.fromEntries(
    header
      .split(";")
      .map((part) => part.trim().split("="))
      .filter(([key, value]) => key && value)
      .map(([key, value]) => [key, decodeURIComponent(value)])
  );
}

function cookieHeader(request, token, maxAge) {
  const secure = request.headers["x-forwarded-proto"] === "https" || request.socket.encrypted;
  return [
    `${sessionCookie}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAge}`,
    secure ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");
}

function getSession(request) {
  const token = parseCookies(request.headers.cookie)[sessionCookie];
  if (!token) return null;

  const session = sessions.get(token);
  if (!session) return null;

  if (session.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }

  session.expiresAt = Date.now() + sessionTtlMs;
  return { token, session };
}

function requireSession(request, response) {
  if (getSession(request)) return true;
  json(response, 401, { ok: false, message: "로그인이 필요합니다." });
  return false;
}

async function handleLogin(request, response) {
  if (request.method !== "POST") {
    send(response, 405, "Method not allowed");
    return true;
  }

  try {
    const body = await readBody(request);
    const credentials = JSON.parse(body);
    const userOk = credentials.user === staffUser;
    const passwordOk = credentials.password === staffPassword;

    if (!userOk || !passwordOk) {
      json(response, 401, { ok: false, message: "직원 ID와 비밀번호를 확인하세요." });
      return true;
    }

    const token = crypto.randomBytes(32).toString("base64url");
    sessions.set(token, {
      user: staffUser,
      expiresAt: Date.now() + sessionTtlMs,
    });
    json(response, 200, { ok: true, user: staffUser }, { "Set-Cookie": cookieHeader(request, token, sessionTtlMs / 1000) });
  } catch (error) {
    json(response, 400, { ok: false, message: `로그인 요청을 처리하지 못했습니다: ${error.message}` });
  }

  return true;
}

function handleLogout(request, response) {
  const current = getSession(request);
  if (current) sessions.delete(current.token);
  json(response, 200, { ok: true }, { "Set-Cookie": cookieHeader(request, "", 0) });
  return true;
}

function handleSession(request, response) {
  const current = getSession(request);
  json(response, 200, { authenticated: Boolean(current), user: current?.session.user || "" });
  return true;
}

async function handleApi(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname === "/api/login") return handleLogin(request, response);
  if (url.pathname === "/api/logout") return handleLogout(request, response);
  if (url.pathname === "/api/session") return handleSession(request, response);
  if (url.pathname !== "/api/items") return false;

  if (request.method === "GET") {
    try {
      const data = await fs.promises.readFile(dataFile, "utf8");
      send(response, 200, data, "application/json; charset=utf-8");
    } catch (error) {
      if (error.code === "ENOENT") {
        send(response, 200, "[]", "application/json; charset=utf-8");
        return true;
      }
      send(response, 500, "데이터 파일을 읽지 못했습니다.");
    }
    return true;
  }

  if (request.method === "POST") {
    if (!requireSession(request, response)) return true;

    try {
      const body = await readBody(request);
      const parsed = JSON.parse(body);
      if (!Array.isArray(parsed)) {
        send(response, 400, "업무 데이터는 배열이어야 합니다.");
        return true;
      }
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

function startServer() {
  server.listen(port, () => {
    console.log(`OSTI task board server: http://localhost:${port}`);
    console.log(`Data file: ${dataFile}`);
  });
}

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    port += 1;
    startServer();
    return;
  }
  throw error;
});

startServer();
