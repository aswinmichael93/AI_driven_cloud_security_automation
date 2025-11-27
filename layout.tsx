// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "CSPM – AI Cloud Security Command Center",
  description: "AI-driven cloud security posture management platform"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cspm-bg text-slate-100">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 px-8 py-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
