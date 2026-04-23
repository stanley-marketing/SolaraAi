import { WhatYouGetSection } from "@/components/homepage/WhatYouGetSection";

export default function Section2MonoPreview() {
  return (
    <main className="min-h-screen bg-white">
      <WhatYouGetSection variant="monochrome" />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variant A &middot; Pure monochrome
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          White cells, subtle line borders, black icons and labels. The
          motion and density of capabilities carry the "we do all this"
          message without relying on color.
        </p>
      </div>
    </main>
  );
}
