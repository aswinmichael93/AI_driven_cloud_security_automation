// frontend/src/lib/api.ts
const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

async function fetchJson(path: string) {
  const res = await fetch(`${BASE}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export function getRiskSummary() {
  return fetchJson("/risk-summary");
}

export function getVM() {
  return fetchJson("/vm");
}

export function getStorage() {
  return fetchJson("/storage");
}

export function getIAM() {
  return fetchJson("/iam");
}

export function getDatabase() {
  return fetchJson("/database");
}

export async function applyFix(resource_id: string, plan: string[]) {
  const res = await fetch(`${BASE}/applyFix`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ resource_id, plan })
  });
  if (!res.ok) throw new Error("Failed to apply fix");
  return res.json();
}
