// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard", icon: "📊" },
  { href: "/ai-prediction", label: "AI Prediction", icon: "🤖" },
  { href: "/auto-fix", label: "Auto-Fix", icon: "🛠️" },
  { href: "/gamification", label: "Gamification", icon: "🎮" },
  { href: "/genetic-ai", label: "Genetic AI", icon: "🧬" },
  { href: "/quantum-twins", label: "Quantum Twins", icon: "⚛️" },
  { href: "/bounty", label: "Bounty", icon: "💰" },
  { href: "/settings", label: "Settings", icon: "⚙️" }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#020613] border-r border-cyan-500/10 flex flex-col">
      <div className="px-6 py-6 flex items-center gap-3 border-b border-cyan-500/10">
        <div className="h-9 w-9 rounded-xl bg-cyan-400/10 border border-cyan-400/50 flex items-center justify-center">
          <span className="text-cyan-300 text-lg">🛡️</span>
        </div>
        <div>
          <div className="text-cyan-300 font-semibold tracking-wide text-sm">
            CSPM
          </div>
          <div className="text-[11px] text-slate-400">
            AI Cloud Security Center
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm transition
              ${
                active
                  ? "bg-gradient-to-r from-cyan-500/40 to-cyan-400/10 text-white shadow-[0_0_30px_rgba(34,211,238,0.45)] border border-cyan-300/60"
                  : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 pb-5 text-[11px] text-slate-500">
        © {new Date().getFullYear()} CSPM AI
      </div>
    </aside>
  );
}
