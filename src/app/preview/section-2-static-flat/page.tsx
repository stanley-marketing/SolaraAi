import { WhatYouGetSection } from "@/components/homepage/WhatYouGetSection";

export default function Section2StaticFlatPreview() {
  return (
    <main className="min-h-screen bg-white">
      <WhatYouGetSection variant="static" featuredLabels={[]} />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Option C &middot; Uniform, no highlights
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          All 17 cells equally muted. The pastel gradient background and
          grid density carry the &ldquo;abundance&rdquo; message. No
          hierarchy, no featured cells &mdash; every capability is shown
          with equal emphasis.
        </p>
      </div>
    </main>
  );
}
