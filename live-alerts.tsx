"use client";

import { useEffect, useState } from "react";
import { createAlertSocket } from "../lib/websocket";
import RiskBadge from "./risk-badge";

type Alert = {
  id: string;
  type: string;
  message: string;
  severity: string;
  timestamp: string;
};

export default function LiveAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const ws = createAlertSocket();

    ws.onmessage = (ev) => {
      try {
        const payload = JSON.parse(ev.data);
        setAlerts((prev) => [payload as Alert, ...prev].slice(0, 50));
      } catch (e) {
        console.error("Alert parse failed:", e);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="rounded-2xl border border-neon3/40 bg-[#050812]/90 p-4 text-xs">
      <p className="text-neon3 mb-2">Live Alerts</p>

      <div className="max-h-64 overflow-auto space-y-1">
        {alerts.map((a) => (
          <div
            key={a.id}
            className="flex items-center justify-between border-b border-gray-800/60 pb-1 last:border-0"
          >
            <div className="flex flex-col">
              <span className="text-gray-100">
                [{a.type.toUpperCase()}] {a.message}
              </span>
              <span className="text-[10px] text-gray-500">{a.timestamp}</span>
            </div>
            <RiskBadge severity={a.severity} />
          </div>
        ))}

        {alerts.length === 0 && (
          <p className="text-gray-500 text-[11px]">No alerts yet.</p>
        )}
      </div>
    </div>
  );
}
