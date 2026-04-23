import { WhatYouGetSection } from "@/components/homepage/WhatYouGetSection";

export default function Section2StaticPreview() {
  return (
    <main className="min-h-screen bg-white">
      <WhatYouGetSection variant="static" />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variant C &middot; Static grid with scattered highlights
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          Static 6-column grid on a pink &rarr; white &rarr; mint pastel
          gradient. Most cells muted (gray icon + label, no background).
          Five scattered &ldquo;featured&rdquo; cells in pale blue &mdash;
          Content strategy, Video editing, Multi-platform, Brand voice,
          Repurposing &mdash; chosen on narrative weight. No animation, no
          stripes.
        </p>
      </div>
    </main>
  );
}
