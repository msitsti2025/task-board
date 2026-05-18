const stateKey = "dashboard-items";

export async function readItems(db) {
  const row = await db
    .prepare("SELECT value FROM app_state WHERE key = ?")
    .bind(stateKey)
    .first();

  if (!row?.value) return [];

  const parsed = JSON.parse(row.value);
  return Array.isArray(parsed) ? parsed : [];
}

export async function writeItems(db, items) {
  await db
    .prepare(
      "INSERT INTO app_state (key, value, updated_at) VALUES (?, ?, datetime('now')) " +
        "ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at"
    )
    .bind(stateKey, JSON.stringify(items))
    .run();
}
