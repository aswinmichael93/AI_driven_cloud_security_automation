// src/app/page.tsx
import Gauge from "../components/Gauge";
import Donut from "../components/Donut";

async function fetchRiskSummary() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/risk-summary",
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error();
    return res.json();
  } catch {
    // fallback demo data
    return {
      global_risk_score: 0.67,
      vm: { high: 3, medium: 6, low: 10 },
      storage: { high: 2, medium: 5, low: 8 },
      iam: { high: 1, medium: 4, low: 7 },
      database: { high: 2, medium: 3, low: 5 }
    };
  }
}

export default async function DashboardPage() {
  const summary = await fetchRiskSummary();
  const riskPercent = Math.round((summary.global_risk_score || 0) * 100);

  const critical = summary.database.high + summary.storage.high + summary.vm.high;
  const high = summary.iam.high;
  const medium =
    summary.vm.medium + summary.storage.medium + summary.database.medium;
  const low =
    summary.vm.low + summary.storage.low + summary.iam.low + summary.database.low;

  const totalResources = 1247; // static demo, replace with real aggregation

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-cyan-300 mb-2">
        Cloud Risk Overview
      </h1>

      {/* Top row */}
      <div className="grid lg:grid-cols-[2fr,1.6fr] gap-6">
        <section className="cspm-card p-6">
          <h2 className="text-lg text-cyan-200 mb-2">Cloud Risk Score</h2>
          <Gauge value={riskPercent} />
        </section>

        <section className="cspm-card p-6 space-y-6">
          <h2 className="text-lg text-cyan-200">Resource Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-cyan-500/10 border border-cyan-400/40 p-4">
              <p className="text-xs text-cyan-200 mb-1">Total Resources</p>
              <p className="text-3xl font-bold text-cyan-100">{totalResources}</p>
            </div>
            <div className="rounded-2xl bg-[#ff005c]/10 border border-[#ff005c]/50 p-4">
              <p className="text-xs text-[#ff9fbf] mb-1">Critical Issues</p>
              <p className="text-3xl font-bold text-[#ff4b7a]">{critical}</p>
            </div>
          </div>

          <div className="mt-4">
            <Donut critical={critical} high={high} medium={medium} low={low} />
          </div>
        </section>
      </div>
    </div>
  );
}
