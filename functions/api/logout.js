import { makeExpiredCookie } from "../_lib/auth.js";
import { json } from "../_lib/http.js";

export function onRequestPost({ request }) {
  return json({ ok: true }, 200, { "Set-Cookie": makeExpiredCookie(request) });
}
