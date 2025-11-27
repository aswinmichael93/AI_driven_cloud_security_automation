// src/components/StatusPill.tsx
type Props = { level: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "SUCCESS" | "PENDING" };

const colors: Record<Props["level"], string> = {
  CRITICAL: "bg-[#ff005c]/15 text-[#ff4b7a] border-[#ff005c]/40",
  HIGH: "bg-orange-500/15 text-orange-300 border-orange-400/40",
  MEDIUM: "bg-yellow-400/15 text-yellow-200 border-yellow-300/40",
  LOW: "bg-emerald-500/15 text-emerald-200 border-emerald-400/40",
  SUCCESS: "bg-emerald-500/20 text-emerald-200 border-emerald-400/50",
  PENDING: "bg-slate-500/10 text-slate-200 border-slate-400/30"
};

export default function StatusPill({ level }: Props) {
  return (
    <span
      className={`cspm-chip border ${colors[level]} uppercase tracking-wide`}
    >
      {level}
    </span>
  );
}
