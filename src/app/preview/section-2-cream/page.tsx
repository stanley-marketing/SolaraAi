import { WhatYouGetSection } from "@/components/homepage/WhatYouGetSection";

export default function Section2CreamPreview() {
  return (
    <main className="min-h-screen bg-white">
      <WhatYouGetSection variant="cream" />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variant B &middot; Soft cream single-tone
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          Unified cream (#fbf6ea) on every cell, black icons and labels.
          Warmer than pure white, still minimal and cohesive &mdash; picks up
          the ambient warmth from the hero and Section 3 amber glows.
        </p>
      </div>
    </main>
  );
}
