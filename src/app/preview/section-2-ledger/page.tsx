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
  ROSE,
  ROSE_DEEP,
  SHELL,
  ScrollReveal,
  SectionHeadline,
  ToolsGrid,
  ToolsMarquee,
  Verdict,
} from "@/components/homepage/teardown-parts";
import { BorderBeam } from "@/components/magicui/border-beam";

function LedgerColumn({
  side,
  label,
  title,
  cost,
  children,
}: {
  side: "A" | "B";
  label: string;
  title: string;
  cost: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Eyebrow color={ROSE_DEEP}>{label}</Eyebrow>
          <h3
            className="mt-2"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              color: INK,
            }}
          >
            {title}
          </h3>
        </div>
        <div
          className="shrink-0 rounded-full px-3 py-1"
          style={{
            background: "#fff",
            border: `1px solid ${HAIRLINE_HEAVY}`,
            fontFamily: BODY,
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: INK_SOFT,
            fontWeight: 600,
          }}
        >
          {cost}
        </div>
      </div>

      <div
        className="mt-4 mb-4 h-px w-full"
        style={{ background: HAIRLINE_HEAVY }}
      />

      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function SectionTwoLedgerPreview() {
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
                "radial-gradient(ellipse at 50% 50%, transparent 10%, rgba(248,247,244,0.9) 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-24 sm:pb-14">
          <SectionHeadline
            eyebrow="02 · The Teardown"
            rotatingWords={["options.", "paths.", "dead ends.", "traps."]}
            subcopy="Both alternatives, inside one case file."
            compact
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16">
          <ScrollReveal margin="-10%">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(6px)",
                border: `1px solid ${HAIRLINE_HEAVY}`,
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.03), 0 20px 50px -18px rgba(0,0,0,0.14)",
              }}
            >
              <BorderBeam
                size={140}
                duration={12}
                colorFrom={ROSE}
                colorTo="#f97316"
                delay={0.5}
              />

              <div
                className="flex items-center justify-between px-6 py-3 sm:px-8"
                style={{
                  background: INK,
                  color: "#fff",
                  fontFamily: BODY,
                  fontSize: "0.58rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                <span>Case file &sect; 0002</span>
                <span className="flex items-center gap-2">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: ROSE }}
                  />
                  Under examination
                </span>
              </div>

              <div className="grid lg:grid-cols-[1fr_1px_1fr]">
                <LedgerColumn
                  side="A"
                  label="Exhibit A · Option 1"
                  title="The $2,000/mo manager."
                  cost="$2K / month"
                >
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: BODY,
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      color: INK_MUTED,
                    }}
                  >
                    They show up with the same iPhone in your pocket. You pay
                    them to stand next to you. The thinking happens later,
                    without you.
                  </p>
                  <InvoiceCard compact />
                </LedgerColumn>

                <div
                  className="hidden lg:block"
                  style={{ background: HAIRLINE_HEAVY }}
                />
                <div
                  className="lg:hidden"
                  style={{
                    height: 1,
                    background: HAIRLINE_HEAVY,
                    margin: "0 24px",
                  }}
                />

                <LedgerColumn
                  side="B"
                  label="Exhibit B · Option 2"
                  title="The tool stack."
                  cost="$30–150 / month"
                >
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: BODY,
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                      color: INK_MUTED,
                    }}
                  >
                    None of this is marketing. A scheduler can&rsquo;t decide
                    what to schedule. A caption tool doesn&rsquo;t know your
                    audience.{" "}
                    <strong style={{ color: INK, fontWeight: 600 }}>
                      Hover for the reality.
                    </strong>
                  </p>
                  <ToolsGrid compact columns={2} />
                </LedgerColumn>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} margin="-10%">
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
        label="Variant 3 · Ledger (one case file, two exhibits)"
        description="Single bordered container with BorderBeam, black 'CASE FILE' header strip, and two halves (A / B) separated by a vertical hairline. Both exhibits live inside one artifact — maximum 'both being examined together' clarity."
      />
    </main>
  );
}
