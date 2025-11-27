"use client";

type Props = { checked: boolean; onChange?: (val: boolean) => void };

export default function ToggleSwitch({ checked, onChange }: Props) {
  return (
    <button
      type="button"
      onClick={() => onChange?.(!checked)}
      className={`w-12 h-6 rounded-full p-1 flex items-center transition 
      ${checked ? "bg-cyan-400/80" : "bg-slate-600/70"}`}
    >
      <div
        className={`h-4 w-4 rounded-full bg-white shadow transform transition 
        ${checked ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
}
