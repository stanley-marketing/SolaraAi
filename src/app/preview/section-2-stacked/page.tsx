"use client";

import {
  BODY,
  Bridge,
  DISPLAY,
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
} from "@/components/homepage/teardown-parts";

function NumberedMarker({ number }: { number: string }) {
  return (
    <div
      className="inline-flex h-8 w-8 items-center justify-center rounded-full"
      style={{
        background: INK,
        color: "#fff",
        fontFamily: BODY,
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
      }}
    >
      {number}
    </div>
  );
}

function ExhibitRow({
  number,
  label,
  title,
  prose,
  children,
  flip = false,
}: {
  number: string;
  label: string;
  title: string;
  prose: React.ReactNode;
  children: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <ScrollReveal margin="-15%">
      <div className="grid gap-8 py-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        <div className={flip ? "lg:order-2" : undefined}>
          <div className="flex items-center gap-4">
            <NumberedMarker number={number} />
            <Eyebrow color={ROSE_DEEP}>{label}</Eyebrow>
          </div>
          <h3
            className="mt-4 max-w-[440px]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
              color: INK,
            }}
          >
            {title}
          </h3>
          <div
            className="mt-4 max-w-[440px]"
            style={{
              fontFamily: BODY,
              fontSize: "0.96rem",
              lineHeight: 1.7,
              color: INK_MUTED,
            }}
          >
            {prose}
          </div>
        </div>

        <div className={flip ? "lg:order-1" : undefined}>{children}</div>
      </div>
    </ScrollReveal>
  );
}

export default function SectionTwoStackedPreview() {
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
                "radial-gradient(ellipse at 50% 50%, transparent 15%, rgba(248,247,244,0.88) 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-6 pt-20 pb-6 sm:pt-24 sm:pb-8">
          <SectionHeadline
            eyebrow="02 · The Teardown"
            rotatingWords={["options.", "paths.", "dead ends.", "traps."]}
            subcopy="Two alternatives the entire industry sells you. Both fail."
            compact
          />
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-16">
          <div
            className="relative"
            style={{
              borderLeft: `1px solid ${HAIRLINE_HEAVY}`,
              paddingLeft: "clamp(20px, 4vw, 40px)",
            }}
          >
            <ExhibitRow
              number="01"
              label="Exhibit A · The manager"
              title="$2,000/month for a phone-holder."
              prose={
                <>
                  They arrive with the same iPhone in your pocket. You pay
                  them to stand there, tell you where to stand, and press
                  record. Everything that requires thought happens later, on
                  a laptop, without you.
                </>
              }
            >
              <InvoiceCard compact />
            </ExhibitRow>

            <div
              className="my-4"
              style={{ borderTop: `1px dashed ${HAIRLINE}` }}
            />

            <ExhibitRow
              number="02"
              label="Exhibit B · The tool stack"
              title="$150–600/month for auto-complete."
              flip
              prose={
                <>
                  A scheduler can&rsquo;t decide what to schedule. A caption
                  tool doesn&rsquo;t know your audience. Tools replace the
                  blank page you were going to stare at anyway.{" "}
                  <strong style={{ color: INK, fontWeight: 600 }}>
                    Hover each for the reality.
                  </strong>
                </>
              }
            >
              <ToolsGrid compact columns={2} />
            </ExhibitRow>
          </div>

          <ScrollReveal delay={0.15} margin="-10%">
            <div className="mt-10">
              <ToolsMarquee />
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
            <Verdict compact />
          </div>
        </div>

        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
            <Bridge compact />
          </div>
        </div>
      </section>

      <PreviewFooter
        label="Variant 2 · Stacked (numbered case file)"
        description="Numbered 01 / 02 markers, continuous left-rule threading both exhibits together, alternating prose left / artifact right arrangement per exhibit. Reads like a case file where both pieces of evidence live inside one investigation."
      />
    </main>
  );
}
