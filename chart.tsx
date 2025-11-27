// Simple placeholder chart (text-based). Replace with real chart lib later.
export default function ChartPlaceholder({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-neon2/40 bg-[#050812]/90 p-4 text-xs">
      <p className="text-neon2 mb-2">{title}</p>
      <div className="h-32 border border-dashed border-gray-700 flex items-center justify-center text-[10px] text-gray-400">
        Chart goes here
      </div>
    </div>
  );
}
