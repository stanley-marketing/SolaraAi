import { WhatYouGetSection } from "@/components/homepage/WhatYouGetSection";

export default function Section2StaticRolesPreview() {
  return (
    <main className="min-h-screen bg-white">
      <WhatYouGetSection
        variant="static"
        featuredLabels={[
          "Content strategy",
          "Scripts",
          "Video editing",
          "Brand voice",
        ]}
      />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Option A &middot; 4 highlights = the 4 human roles
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          The subhead names four roles a human team fills: content
          strategist, scriptwriter, video editor, creative director. The
          grid highlights exactly those four capabilities &mdash; Content
          strategy, Scripts, Video editing, Brand voice. Reader sees the
          copy, then sees the mapping in the grid.
        </p>
      </div>
    </main>
  );
}
