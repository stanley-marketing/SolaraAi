import { WhatYouGetSection } from "@/components/homepage/WhatYouGetSection";

export default function Section2StaticPlusPreview() {
  return (
    <main className="min-h-screen bg-white">
      <WhatYouGetSection
        variant="static"
        featuredLabels={[
          "Content strategy",
          "Scripts",
          "Video editing",
          "Brand voice",
          "Analytics",
        ]}
      />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Option B &middot; 4 human roles + Analytics
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          Same 4 human roles as Option A, plus Analytics &mdash; the weekly
          intelligence loop that no human team can deliver. Narrative:
          &ldquo;Solara replaces all 4 human roles, and adds a 5th that
          only AI can do.&rdquo;
        </p>
      </div>
    </main>
  );
}
