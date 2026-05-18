import { json } from "./http.js";

const sessionCookie = "osti_session";
const sessionTtlSeconds = 8 * 60 * 60;

function encoder() {
  return new TextEncoder();
}

function base64UrlEncode(bytes) {
  const binary = String.fromCharCode(...new Uint8Array(bytes));
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function base64UrlDecode(value) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
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

async function importKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    encoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

async function sign(value, secret) {
  const key = await importKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, encoder().encode(value));
  return base64UrlEncode(signature);
}

async function verify(value, signature, secret) {
  const key = await importKey(secret);
  return crypto.subtle.verify("HMAC", key, base64UrlDecode(signature), encoder().encode(value));
}

function getSecret(env) {
  return env.SESSION_SECRET || env.STAFF_PASSWORD;
}

export function getStaffUser(env) {
  return env.STAFF_USER || "admin";
}

function secureAttribute(request) {
  return new URL(request.url).protocol === "https:" ? " Secure;" : "";
}

export function makeExpiredCookie(request) {
  return `${sessionCookie}=; Path=/; HttpOnly;${secureAttribute(request)} SameSite=Lax; Max-Age=0`;
}

export function makeSessionCookie(request, token) {
  return `${sessionCookie}=${encodeURIComponent(token)}; Path=/; HttpOnly;${secureAttribute(request)} SameSite=Lax; Max-Age=${sessionTtlSeconds}`;
}

export async function createSession(env) {
  const secret = getSecret(env);
  if (!secret) throw new Error("SESSION_SECRET or STAFF_PASSWORD is not configured.");

  const payload = base64UrlEncode(
    encoder().encode(
      JSON.stringify({
        user: getStaffUser(env),
        exp: Math.floor(Date.now() / 1000) + sessionTtlSeconds,
      })
    )
  );
  const signature = await sign(payload, secret);
  return `${payload}.${signature}`;
}

export async function getSession(request, env) {
  const secret = getSecret(env);
  if (!secret) return null;

  const token = parseCookies(request.headers.get("Cookie") || "")[sessionCookie];
  if (!token || !token.includes(".")) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const valid = await verify(payload, signature, secret).catch(() => false);
  if (!valid) return null;

  const session = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload)));
  if (!session.exp || session.exp < Math.floor(Date.now() / 1000)) return null;
  return session;
}

export async function requireSession(request, env) {
  const session = await getSession(request, env);
  if (session) return { ok: true, session };
  return { ok: false, response: json({ ok: false, message: "로그인이 필요합니다." }, 401) };
}
