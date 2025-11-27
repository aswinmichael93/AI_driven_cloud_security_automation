// src/components/Gauge.tsx
"use client";

import { useMemo } from "react";

export default function Gauge({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, value));
  const rotation = useMemo(() => (clamped / 100) * 180 - 90, [clamped]);

  return (
    <div className="relative flex items-center justify-center w-64 h-64 mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl" />
      <div className="relative w-56 h-56 rounded-full border border-cyan-400/40 flex items-center justify-center bg-[#020818]/80">
        <div className="w-40 h-40 rounded-full border border-cyan-400/30 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#020818] flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            <span className="text-4xl font-bold text-amber-300">{clamped}</span>
          </div>
        </div>

        {/* needle */}
        <div
          className="absolute origin-center w-24 h-0.5 bg-cyan-300"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <div className="absolute bottom-8 text-xs text-slate-300">
          Risk Level
        </div>
      </div>
    </div>
  );
}
