"use client";

import { AgentsSection } from "@/components/AgentsSection";

export default function PreviewPage() {
  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>
      <div className="pt-16 pb-4 text-center">
        <h1
          className="text-2xl font-semibold tracking-tight"
          style={{ color: "#1a1a1a" }}
        >
          Section 3 — The Agents
        </h1>
        <p className="mt-2 text-sm" style={{ color: "#888" }}>
          Sticky Scroll Reveal
        </p>
      </div>
      <AgentsSection />
    </div>
  );
}
