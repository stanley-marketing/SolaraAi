"use client";

import {
  Bridge,
  Eyebrow,
  FlickeringGrid,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_MUTED,
  INK_SOFT,
  InvoiceCard,
  MarqueeKeyframes,
  PreviewFooter,
  ROSE_DEEP,
  SHELL,
  ScrollReveal,
  SectionHeadline,
  ToolsGrid,
  ToolsMarquee,
  Verdict,
  BODY,
  DISPLAY,
} from "@/components/homepage/teardown-parts";

function ExhibitColumn({
  label,
  title,
  cost,
  children,
  index,
}: {
  label: string;
  title: string;
  cost: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <ScrollReveal delay={0.1 + index * 0.1} margin="-15%">
      <div className="flex flex-col">
        <div className="mb-5 flex items-baseline justify-between gap-3 border-b pb-3" style={{ borderColor: HAIRLINE_HEAVY }}>
          <div>
            <Eyebrow color={ROSE_DEEP}>{label}</Eyebrow>
            <h3
              className="mt-1"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: INK,
              }}
            >
              {title}
            </h3>
          </div>
          <span
            className="shrink-0"
            style={{
              fontFamily: BODY,
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: INK_SOFT,
              fontWeight: 600,
            }}
          >
            {cost}
          </span>
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </ScrollReveal>
  );
}

export default function SectionTwoSplitPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <MarqueeKeyframes />

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 15%, rgba(248,247,244,0.9) 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-24 sm:pb-14">
          <SectionHeadline
            eyebrow="02 · The Teardown"
            rotatingWords={["options.", "paths.", "dead ends.", "traps."]}
            subcopy="You know you need to post. You've priced the alternatives. Here's what's actually inside each one."
            compact
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <ExhibitColumn
              label="Exhibit A · Option 1"
              title="The $2,000/mo manager."
              cost="$2K/mo"
              index={0}
            >
              <p
                className="mb-5"
                style={{
                  fontFamily: BODY,
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: INK_MUTED,
                }}
              >
                They show up with the same iPhone in your pocket. You pay them
                to stand there, tell you where to stand, and press record. The
                thinking happens later, on a laptop, without you.
              </p>
              <InvoiceCard compact />
            </ExhibitColumn>

            <ExhibitColumn
              label="Exhibit B · Option 2"
              title="The tool stack."
              cost="$150–600/mo"
              index={1}
            >
              <p
                className="mb-5"
                style={{
                  fontFamily: BODY,
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: INK_MUTED,
                }}
              >
                None of this is marketing. A scheduler doesn't decide what to
                schedule. A caption tool doesn't know your audience. You end up
                doing all the thinking yourself.{" "}
                <strong style={{ color: INK, fontWeight: 600 }}>
                  Hover each tool for the reality.
                </strong>
              </p>
              <ToolsGrid compact columns={2} />
            </ExhibitColumn>
          </div>

          <ScrollReveal delay={0.2} margin="-10%">
            <div className="mt-10">
              <ToolsMarquee />
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
            <Verdict compact />
          </div>
        </div>

        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
            <Bridge compact />
          </div>
        </div>
      </section>

      <PreviewFooter
        label="Variant 1 · Split (side-by-side parallel)"
        description="Shared header, exhibits side-by-side on desktop, stacking on mobile. Tool marquee below spans full width. Verdict + bridge underneath. Scroll-tied invoice line reveals, card-by-card tool fade-in, path-drawing SVG underlines."
      />
    </main>
  );
}
