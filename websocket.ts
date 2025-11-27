export function createAlertSocket(): WebSocket {
  const base = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000";
  return new WebSocket(`${base}/live-alerts`);
}
