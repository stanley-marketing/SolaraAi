"use client";

import {
  BODY,
  Bridge,
  DISPLAY,
  FlickeringGrid,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  INK_SOFT,
  InvoiceCard,
  MarqueeKeyframes,
  PreviewFooter,
  ROSE,
  ROSE_DEEP,
  SHELL,
  Verdict,
} from "@/components/homepage/teardown-parts";

const FAILURES = [
  "Schedulers with no plan",
  "AI junk on your feed",
  "Hours burned every week",
  "0 engagement",
  "Still invisible",
];

function FailureItem({ label, index }: { label: string; index: number }) {
  return (
    <div
      className="flex items-center gap-4 py-3"
      style={{
        borderBottom:
          index < FAILURES.length - 1 ? `1px dashed ${HAIRLINE}` : "none",
      }}
    >
      <span
        className="flex shrink-0 items-center justify-center rounded-full"
        style={{
          width: 28,
          height: 28,
          background: ROSE,
          color: "#fff",
          fontFamily: BODY,
          fontSize: "1.05rem",
          fontWeight: 700,
          lineHeight: 1,
          boxShadow: "0 1px 2px rgba(236,72,153,0.3)",
        }}
        aria-hidden
      >
        &times;
      </span>
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: "1.2rem",
          fontWeight: 500,
          color: INK,
          letterSpacing: "-0.015em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function FailureList() {
  return (
    <div className="flex flex-col">
      {FAILURES.map((f, i) => (
        <FailureItem key={f} label={f} index={i} />
      ))}
    </div>
  );
}

function LedgerColumn({
  label,
  title,
  cost,
  children,
}: {
  label: string;
  title: string;
  cost: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col p-7 sm:p-9">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            style={{
              fontFamily: BODY,
              fontSize: "0.74rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: ROSE_DEEP,
              fontWeight: 600,
            }}
          >
            {label}
          </span>
          <h3
            className="mt-3"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
              color: INK,
            }}
          >
            {title}
          </h3>
        </div>
        <div
          className="shrink-0 rounded-full px-4 py-1.5"
          style={{
            background: "#fff",
            border: `1px solid ${HAIRLINE_HEAVY}`,
            fontFamily: BODY,
            fontSize: "0.76rem",
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
        className="mt-5 mb-5 h-px w-full"
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
                "radial-gradient(ellipse at 50% 40%, transparent 15%, rgba(248,247,244,0.9) 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 sm:pt-24 sm:pb-20">
          <div className="mb-8 sm:mb-10">
            <div
              className="inline-flex items-center gap-3"
              style={{
                fontFamily: BODY,
                fontSize: "0.66rem",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: INK_SOFT,
                fontWeight: 600,
              }}
            >
              <span className="h-px w-6 bg-current opacity-60" />
              02 &middot; The Teardown
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inset-0 animate-ping rounded-full"
                  style={{ background: ROSE, opacity: 0.6 }}
                />
                <span
                  className="relative h-2 w-2 rounded-full"
                  style={{ background: ROSE }}
                />
              </span>
            </div>

            <h1
              className="mt-5 leading-[1.02] tracking-[-0.04em] text-[clamp(2.4rem,5.6vw,4rem)]"
              style={{
                fontFamily: DISPLAY,
                fontWeight: 600,
                color: INK,
                maxWidth: "820px",
              }}
            >
              There are only two ways. Neither one works.
            </h1>

            <p
              className="mt-4"
              style={{
                fontFamily: BODY,
                fontSize: "1.05rem",
                lineHeight: 1.55,
                color: INK_MUTED,
                maxWidth: "560px",
              }}
            >
              And AI hasn&rsquo;t changed a thing.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(6px)",
              border: `1px solid ${HAIRLINE_HEAVY}`,
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.03), 0 20px 50px -18px rgba(0,0,0,0.14)",
            }}
          >
            <div className="grid lg:grid-cols-[1fr_1px_1fr]">
              <LedgerColumn
                label="Exhibit A"
                title="The $2,000/mo manager."
                cost="$2K / month"
              >
                <p
                  className="mb-5"
                  style={{
                    fontFamily: BODY,
                    fontSize: "1.02rem",
                    lineHeight: 1.65,
                    color: INK_MUTED,
                  }}
                >
                  They show up with the same iPhone in your pocket. You pay
                  them to stand next to you. The thinking happens later, on
                  a laptop, without you.
                </p>
                <InvoiceCard large noBeam staticLines />
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
                label="Exhibit B"
                title="The $150/mo tool stack."
                cost="$150–600 / month"
              >
                <p
                  className="mb-6"
                  style={{
                    fontFamily: BODY,
                    fontSize: "1.02rem",
                    lineHeight: 1.65,
                    color: INK_MUTED,
                  }}
                >
                  None of this is marketing. Here&rsquo;s what $150&ndash;600/month
                  actually delivers:
                </p>

                <FailureList />

                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: `1px solid ${HAIRLINE_HEAVY}` }}
                >
                  <p
                    className="text-right"
                    style={{
                      fontFamily: BODY,
                      fontSize: "0.88rem",
                      fontStyle: "italic",
                      color: INK_MUTED,
                    }}
                  >
                    &mdash; and nobody walks in.
                  </p>
                </div>
              </LedgerColumn>
            </div>
          </div>
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
        label="Variant 3 · Ledger (one container, two exhibits)"
        description="Headline sits directly above the card. Both exhibits live inside one artifact. Exhibit A shows the $2,000/mo invoice, Exhibit B lists the symptoms of the tool stack with red-X markers. No scroll reveals — content visible immediately."
      />
    </main>
  );
}
