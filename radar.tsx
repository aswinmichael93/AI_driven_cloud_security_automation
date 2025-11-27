"use client";

import { motion } from "framer-motion";

export default function Radar({ label, value }: { label: string; value: number }) {
  const pct = Math.round(value * 100);

  return (
    <div className="relative rounded-2xl border border-neon1/40 bg-[#0a0f16]/90 p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-neon1">{label}</span>
        <span className="text-xs text-neon4 font-semibold">{pct}%</span>
      </div>
      <div className="relative flex items-center justify-center h-40">
        <div className="h-28 w-28 rounded-full border border-neon1/20" />
        <div className="absolute h-20 w-20 rounded-full border border-neon2/20" />
        <div className="absolute h-12 w-12 rounded-full border border-neon3/20" />
        <motion.div
          className="absolute h-32 w-32 rounded-full border-t-2 border-t-neon1/80"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
