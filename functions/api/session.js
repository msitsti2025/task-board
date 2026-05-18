import { getSession } from "../_lib/auth.js";
import { json } from "../_lib/http.js";

export async function onRequestGet({ request, env }) {
  const session = await getSession(request, env);
  return json({
    authenticated: Boolean(session),
    user: session?.user || "",
  });
}
