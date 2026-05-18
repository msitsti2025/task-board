import { createSession, getStaffUser, makeSessionCookie } from "../_lib/auth.js";
import { json } from "../_lib/http.js";

export async function onRequestPost({ request, env }) {
  try {
    const credentials = await request.json();
    const userOk = credentials.user === getStaffUser(env);
    const passwordOk = credentials.password === env.STAFF_PASSWORD;

    if (!env.STAFF_PASSWORD) {
      return json({ ok: false, message: "서버 비밀번호가 설정되지 않았습니다." }, 500);
    }

    if (!userOk || !passwordOk) {
      return json({ ok: false, message: "직원 ID와 비밀번호를 확인하세요." }, 401);
    }

    const token = await createSession(env);
    return json(
      { ok: true, user: getStaffUser(env) },
      200,
      { "Set-Cookie": makeSessionCookie(request, token) }
    );
  } catch (error) {
    return json({ ok: false, message: `로그인 요청을 처리하지 못했습니다: ${error.message}` }, 400);
  }
}
