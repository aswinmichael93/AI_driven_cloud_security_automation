export default function RiskBadge({ severity }: { severity: string }) {
  const map: Record<string, string> = {
    LOW: "bg-emerald-700/40 text-emerald-200",
    MEDIUM: "bg-yellow-600/40 text-yellow-100",
    HIGH: "bg-orange-600/40 text-orange-100",
    CRITICAL: "bg-red-700/60 text-red-100"
  };
  const cls = map[severity] ?? "bg-gray-700 text-gray-100";

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${cls}`}>
      {severity}
    </span>
  );
}
