import { json, text } from "../_lib/http.js";
import { requireSession } from "../_lib/auth.js";
import { readItems, writeItems } from "../_lib/items.js";

export async function onRequestGet({ env }) {
  try {
    return json(await readItems(env.DB));
  } catch (error) {
    return text(`데이터를 읽지 못했습니다: ${error.message}`, 500);
  }
}

export async function onRequestPost({ request, env }) {
  const auth = await requireSession(request, env);
  if (!auth.ok) return auth.response;

  try {
    const items = await request.json();
    if (!Array.isArray(items)) {
      return json({ ok: false, message: "업무 데이터는 배열이어야 합니다." }, 400);
    }

    await writeItems(env.DB, items);
    return json({ ok: true });
  } catch (error) {
    return text(`데이터를 저장하지 못했습니다: ${error.message}`, 500);
  }
}

export function onRequestOptions() {
  return new Response(null, { status: 204 });
}
