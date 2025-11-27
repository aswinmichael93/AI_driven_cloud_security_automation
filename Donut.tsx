// src/components/Donut.tsx
"use client";

type Props = {
  critical: number;
  high: number;
  medium: number;
  low: number;
};

export default function Donut({ critical, high, medium, low }: Props) {
  const total = critical + high + medium + low || 1;
  const segments = [
    { label: "Critical", value: critical, color: "#ff005c" },
    { label: "High", value: high, color: "#ff9f1c" },
    { label: "Medium", value: medium, color: "#f7ff00" },
    { label: "Low", value: low, color: "#00ff9f" }
  ];
  const circumference = 2 * Math.PI * 40;

  let offset = 0;

  return (
    <div className="flex gap-6 items-center">
      <svg width="140" height="140" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#020816"
          strokeWidth="10"
          fill="none"
        />
        {segments.map((s, idx) => {
          const length = (s.value / total) * circumference;
          const circle = (
            <circle
              key={s.label}
              cx="50"
              cy="50"
              r="40"
              stroke={s.color}
              strokeWidth="10"
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={-offset}
              fill="none"
              strokeLinecap="round"
            />
          );
          offset += length;
          return circle;
        })}
      </svg>
      <div className="space-y-1 text-xs">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-slate-300">
              {s.label}: <span className="font-semibold">{s.value}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
