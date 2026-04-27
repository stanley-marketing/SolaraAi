"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  BODY,
  DISPLAY,
  FlickeringGrid,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  INK_SOFT,
  ROSE_DEEP,
  ScrollReveal,
} from "@/components/homepage/teardown-parts";
import { NumberTicker } from "@/components/magicui/number-ticker";

const NAVY = ROSE_DEEP;

function MicroLabel({
  children,
  color = INK_FAINT,
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        fontFamily: BODY,
        fontSize: "0.66rem",
        fontWeight: 600,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color,
        fontFeatureSettings: '"ss01" 1',
      }}
    >
      {children}
    </span>
  );
}

function FolioBar() {
  return (
    <div
      className="border-b"
      style={{ borderColor: HAIRLINE_HEAVY }}
    >
      <div className="mx-auto flex max-w-[980px] items-baseline justify-between gap-6 px-5 pt-8 pb-4 sm:px-8">
        <div className="flex items-baseline gap-3">
          <span
            style={{
              fontFamily: DISPLAY,
              fontSize: "0.86rem",
              fontWeight: 700,
              color: INK,
              letterSpacing: "-0.01em",
            }}
          >
            §02
          </span>
          <MicroLabel color={INK}>Audit File</MicroLabel>
        </div>
        <div className="hidden items-baseline gap-3 sm:flex">
          <MicroLabel>Filed 26.04.26</MicroLabel>
          <span
            aria-hidden
            className="h-[3px] w-[3px] rounded-full"
            style={{ background: NAVY }}
          />
          <MicroLabel>Folio 02 / 09</MicroLabel>
        </div>
        <div className="sm:hidden">
          <MicroLabel>Folio 02 / 09</MicroLabel>
        </div>
      </div>
    </div>
  );
}

function AuditHeader() {
  return (
    <header className="mx-auto max-w-[980px] px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
      <ScrollReveal>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-px w-7"
            style={{ background: NAVY }}
          />
          <span
            style={{
              fontFamily: BODY,
              fontSize: "0.66rem",
              fontWeight: 700,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: NAVY,
            }}
          >
            The Forensic Audit
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <h2
          className="mt-7 max-w-[18ch]"
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2.6rem, 7.6vw, 5.4rem)",
            fontWeight: 700,
            color: INK,
            letterSpacing: "-0.045em",
            lineHeight: 0.94,
          }}
        >
          Two retainer arrangements every business has tried.{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              color: NAVY,
              letterSpacing: "-0.04em",
            }}
          >
            Both failed.
          </span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.18}>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto_minmax(220px,260px)] lg:items-baseline lg:gap-14">
          <p
            className="max-w-[42ch]"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(1.04rem, 1.4vw, 1.18rem)",
              lineHeight: 1.6,
              color: INK_MUTED,
              fontWeight: 400,
            }}
          >
            The agency that bills you to direct you. The toolkit that
            promises autopilot but cannot decide what to post. We pulled the
            receipts.
          </p>

          <div
            aria-hidden
            className="hidden lg:block"
            style={{
              width: 1,
              height: 56,
              background: HAIRLINE_HEAVY,
            }}
          />

          <div>
            <MicroLabel className="mb-3 block">Sample · Findings</MicroLabel>
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "0.98rem",
                lineHeight: 1.45,
                color: INK,
                fontWeight: 500,
                letterSpacing: "-0.012em",
              }}
            >
              247 owners. Twelve months. One complaint —{" "}
              <span style={{ color: NAVY, fontStyle: "italic", fontWeight: 600 }}>
                everything moves through me, or it stops.
              </span>
            </p>
          </div>
        </div>
      </ScrollReveal>
    </header>
  );
}

function ExhibitMarker({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-5">
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(2.4rem, 4.2vw, 3.4rem)",
          fontWeight: 800,
          color: NAVY,
          letterSpacing: "-0.04em",
          lineHeight: 0.85,
          fontStyle: "italic",
        }}
      >
        §{n}
      </span>
      <MicroLabel color={INK}>Exhibit · {label}</MicroLabel>
    </div>
  );
}

function LedgerLine({
  label,
  amount,
  emphasize = false,
}: {
  label: string;
  amount: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-3 py-2.5">
      <span
        style={{
          fontFamily: BODY,
          fontSize: emphasize ? "1.02rem" : "0.94rem",
          fontWeight: emphasize ? 700 : 400,
          color: emphasize ? INK : INK_MUTED,
          letterSpacing: "-0.005em",
        }}
      >
        {label}
      </span>
      <span
        aria-hidden
        className="flex-1"
        style={{
          height: 1,
          background: emphasize
            ? "transparent"
            : `repeating-linear-gradient(to right, ${HAIRLINE} 0, ${HAIRLINE} 2px, transparent 2px, transparent 6px)`,
          alignSelf: "end",
          marginBottom: 4,
        }}
      />
      <span
        className="tabular-nums"
        style={{
          fontFamily: DISPLAY,
          fontSize: emphasize ? "1.05rem" : "0.96rem",
          fontWeight: emphasize ? 700 : 500,
          color: INK,
          fontFeatureSettings: '"tnum" 1, "lnum" 1',
          letterSpacing: "-0.01em",
        }}
      >
        {amount}
      </span>
    </div>
  );
}

function PhoneHolderStamp({ delay = 0.6 }: { delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 1.25, rotate: -16 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className="relative inline-flex items-center justify-center"
      style={{
        fontFamily: BODY,
        fontSize: "0.74rem",
        fontWeight: 800,
        color: NAVY,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        padding: "10px 18px",
        border: `2px solid ${NAVY}`,
        borderRadius: 2,
        background: "transparent",
        whiteSpace: "nowrap",
        boxShadow: `inset 0 0 0 1px rgba(23,37,84,0.18), 0 1px 0 rgba(255,255,255,0.6) inset`,
      }}
    >
      <span
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: 0.12,
          background: `repeating-linear-gradient(-12deg, transparent 0, transparent 5px, ${NAVY} 5px, ${NAVY} 5.5px)`,
          mixBlendMode: "multiply",
          borderRadius: 2,
        }}
      />
      <span className="relative">Phone-holder</span>
    </motion.span>
  );
}

function ArithmeticCenterpiece() {
  return (
    <div
      className="relative border-t pt-9"
      style={{ borderColor: HAIRLINE_HEAVY }}
    >
      <MicroLabel className="mb-5 block">Annual Exposure</MicroLabel>

      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3">
        <span
          className="tabular-nums"
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.025em",
            fontFeatureSettings: '"tnum" 1, "lnum" 1',
          }}
        >
          $2,000
        </span>

        <span
          aria-hidden
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 300,
            color: INK_FAINT,
            letterSpacing: "-0.02em",
          }}
        >
          ×
        </span>

        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.025em",
          }}
        >
          12 months
        </span>

        <span
          aria-hidden
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 300,
            color: INK_FAINT,
            letterSpacing: "-0.02em",
          }}
        >
          =
        </span>

        <span
          className="tabular-nums"
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(2.8rem, 6.2vw, 4.6rem)",
            fontWeight: 800,
            color: NAVY,
            letterSpacing: "-0.045em",
            lineHeight: 0.9,
            fontFeatureSettings: '"tnum" 1, "lnum" 1',
          }}
        >
          $
          <NumberTicker
            value={24000}
            startValue={2000}
            delay={0.4}
            decimalPlaces={0}
          />
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <p
          className="max-w-[40ch]"
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.04rem, 1.5vw, 1.22rem)",
            color: INK_MUTED,
            fontWeight: 500,
            letterSpacing: "-0.012em",
            lineHeight: 1.45,
          }}
        >
          a year, paid in advance, for the privilege of —
        </p>
        <PhoneHolderStamp delay={0.95} />
      </div>
    </div>
  );
}

function AgencyLedger() {
  return (
    <div
      className="relative w-full"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.6) inset, 0 24px 60px -28px rgba(10,10,10,0.18), 0 2px 8px -2px rgba(10,10,10,0.06)",
        padding: "26px 26px 22px 26px",
        borderRadius: 4,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: 4,
          background: NAVY,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      />

      <div className="flex items-baseline justify-between">
        <MicroLabel>Retainer Ledger</MicroLabel>
        <MicroLabel>No. 0924</MicroLabel>
      </div>

      <h4
        className="mt-3"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.5rem, 2.3vw, 1.8rem)",
          fontWeight: 700,
          color: INK,
          letterSpacing: "-0.026em",
          lineHeight: 1.05,
        }}
      >
        Social media manager
      </h4>
      <p
        className="mt-1.5"
        style={{
          fontFamily: BODY,
          fontSize: "0.9rem",
          color: INK_SOFT,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.45,
        }}
      >
        Briefs you. Takes your clips. Edits later, without you.
      </p>

      <div
        className="mt-5"
        style={{ height: 1, background: HAIRLINE_HEAVY }}
      />

      <div className="mt-2 mb-2">
        <LedgerLine label="Tell you what to film" amount="$500.00" />
        <LedgerLine label='Say "hold it vertical"' amount="$500.00" />
        <LedgerLine label="Take your clips, edit later" amount="$500.00" />
        <LedgerLine label="Caption, schedule, report back" amount="$500.00" />
      </div>

      <div style={{ height: 1, background: HAIRLINE_HEAVY }} />
      <div
        className="mt-1"
        style={{ height: 1, background: HAIRLINE_HEAVY }}
      />

      <LedgerLine label="Monthly subtotal" amount="$2,000.00" emphasize />
    </div>
  );
}

function ExhibitOne() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[980px] px-5 pb-20 sm:px-8 sm:pb-24">
        <ScrollReveal>
          <ExhibitMarker n="01" label="The agency" />
        </ScrollReveal>

        <div className="mt-9 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ScrollReveal delay={0.1}>
            <h3
              className="max-w-[16ch]"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
                fontWeight: 700,
                color: INK,
                letterSpacing: "-0.035em",
                lineHeight: 1.02,
              }}
            >
              Two thousand dollars a month for{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: NAVY,
                }}
              >
                instructions.
              </span>
            </h3>

            <p
              className="mt-5 max-w-[44ch]"
              style={{
                fontFamily: BODY,
                fontSize: "1.02rem",
                fontWeight: 400,
                color: INK_MUTED,
                lineHeight: 1.62,
              }}
            >
              On-site or on Zoom, they arrive with one thing: a list of clips
              to film this week. You bring the footage. They process the rest
              later, on a laptop, without you — captions, edits, schedule,
              report.
            </p>

            <figure className="mt-8">
              <span
                aria-hidden
                className="block"
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(3.2rem, 5vw, 4.4rem)",
                  fontWeight: 800,
                  color: NAVY,
                  lineHeight: 0.4,
                  letterSpacing: "-0.04em",
                  marginLeft: -4,
                }}
              >
                &ldquo;
              </span>
              <blockquote
                className="mt-2 border-l-2 pl-5"
                style={{ borderColor: NAVY }}
              >
                <p
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(1.04rem, 1.5vw, 1.18rem)",
                    fontWeight: 500,
                    color: INK,
                    lineHeight: 1.5,
                    letterSpacing: "-0.012em",
                  }}
                >
                  She came in on Tuesday, told me to film fifteen things, and
                  I never heard from her again until the report.
                </p>
                <figcaption className="mt-3">
                  <MicroLabel>
                    — Salon owner, Chicago · respondent #043
                  </MicroLabel>
                </figcaption>
              </blockquote>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <AgencyLedger />
          </ScrollReveal>
        </div>

        <div className="mt-14">
          <ScrollReveal delay={0.1}>
            <ArithmeticCenterpiece />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const TOOL_FAILURES: { tool: string; promise: string; reality: string }[] = [
  {
    tool: "Scheduler",
    promise: "Posts at the right time.",
    reality: "Cannot decide what to post.",
  },
  {
    tool: "Caption generator",
    promise: "Captions in seconds.",
    reality: "Has never met your customer.",
  },
  {
    tool: "Image generator",
    promise: "On-brand visuals.",
    reality: "Generates a sixth wedding cake.",
  },
  {
    tool: "Trend feed",
    promise: "Tells you what's working.",
    reality: "Tells everyone the same thing.",
  },
  {
    tool: "AI video maker",
    promise: "Videos in one click.",
    reality: "Slop your customer scrolls past.",
  },
];

function ToolFailureRow({
  tool,
  promise,
  reality,
  index,
}: {
  tool: string;
  promise: string;
  reality: string;
  index: number;
}) {
  return (
    <div
      className="grid gap-3 border-t py-5 sm:grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)] sm:items-baseline sm:gap-8"
      style={{ borderColor: HAIRLINE }}
    >
      <div className="flex items-baseline gap-3">
        <span
          className="tabular-nums"
          style={{
            fontFamily: DISPLAY,
            fontSize: "0.78rem",
            color: INK_FAINT,
            letterSpacing: "0.06em",
            fontWeight: 600,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.04rem",
            fontWeight: 700,
            color: INK,
            letterSpacing: "-0.014em",
          }}
        >
          {tool}
        </span>
      </div>

      <p
        style={{
          fontFamily: BODY,
          fontSize: "0.94rem",
          fontWeight: 400,
          color: INK_SOFT,
          lineHeight: 1.5,
        }}
      >
        Promised: {promise}
      </p>

      <div className="flex items-baseline gap-3">
        <span
          aria-hidden
          style={{
            fontFamily: DISPLAY,
            fontSize: "1rem",
            color: NAVY,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          ✗
        </span>
        <p
          style={{
            fontFamily: DISPLAY,
            fontSize: "0.96rem",
            fontWeight: 600,
            color: NAVY,
            letterSpacing: "-0.012em",
            lineHeight: 1.5,
          }}
        >
          {reality}
        </p>
      </div>
    </div>
  );
}

function ExhibitTwo() {
  return (
    <section
      className="relative border-t"
      style={{ borderColor: HAIRLINE_HEAVY, borderTopWidth: 1 }}
    >
      <div className="mx-auto max-w-[980px] px-5 py-20 sm:px-8 sm:py-24">
        <ScrollReveal>
          <ExhibitMarker n="02" label="The toolkit" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h3
            className="mt-9 max-w-[18ch]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.85rem, 3.6vw, 2.85rem)",
              fontWeight: 700,
              color: INK,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
            }}
          >
            <span className="tabular-nums">$150&ndash;600</span>/month for{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 500,
                color: NAVY,
              }}
            >
              autocomplete.
            </span>
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p
            className="mt-5 max-w-[46ch]"
            style={{
              fontFamily: BODY,
              fontSize: "1.02rem",
              fontWeight: 400,
              color: INK_MUTED,
              lineHeight: 1.62,
            }}
          >
            A scheduler with no judgment. A caption tool with no customer. A
            trend feed with no context. Five subscriptions stitched together,
            three logins on three browsers, and your phone still face-down
            beside the register.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.22}>
          <div className="mt-12">
            <div className="mb-4 flex items-baseline justify-between">
              <MicroLabel color={INK}>Tab. 02 · Promise vs. Reality</MicroLabel>
              <MicroLabel>n = 5 categories</MicroLabel>
            </div>

            <div
              style={{
                borderTop: `1px solid ${HAIRLINE_HEAVY}`,
                borderBottom: `1px solid ${HAIRLINE_HEAVY}`,
              }}
            >
              {TOOL_FAILURES.map((row, index) => (
                <ToolFailureRow key={row.tool} {...row} index={index} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ClosingFinding() {
  return (
    <section
      className="relative overflow-hidden border-t border-b"
      style={{
        borderColor: HAIRLINE_HEAVY,
        borderTopWidth: 1,
        background: "#fafafa",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.5]">
        <FlickeringGrid
          squareSize={3}
          gridGap={8}
          flickerChance={0.12}
          color="rgb(10,10,10)"
          maxOpacity={0.05}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, transparent 20%, #fafafa 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[980px] px-5 py-24 sm:px-8 sm:py-32">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-px w-8"
              style={{ background: NAVY }}
            />
            <span
              style={{
                fontFamily: BODY,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: NAVY,
              }}
            >
              The Finding
            </span>
            <span
              aria-hidden
              className="h-px w-8"
              style={{ background: NAVY }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="mt-12 max-w-[28ch]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.55rem, 3.4vw, 2.4rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.03em",
              lineHeight: 1.18,
            }}
          >
            Option A is a phone-holder with a twelve-month contract.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p
            className="mt-3 max-w-[28ch]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.55rem, 3.4vw, 2.4rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.03em",
              lineHeight: 1.18,
            }}
          >
            Option B is a blank page with autocomplete.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-12 max-w-md"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            height: 1,
            background: HAIRLINE_HEAVY,
            transformOrigin: "left",
          }}
        />

        <ScrollReveal delay={0.28}>
          <p
            className="mt-12 max-w-[14ch]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.6rem, 7.6vw, 5.4rem)",
              fontWeight: 800,
              color: INK,
              letterSpacing: "-0.045em",
              lineHeight: 0.94,
            }}
          >
            Neither is the bottleneck.{" "}
            <span
              className="relative inline-block"
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: NAVY,
              }}
            >
              You are.
              <motion.span
                aria-hidden
                className="absolute inset-x-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, delay: 0.55 }}
                style={{
                  bottom: "0.05em",
                  height: 4,
                  background: NAVY,
                  transformOrigin: "left",
                }}
              />
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p
            className="mt-10 max-w-[58ch]"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(1.02rem, 1.4vw, 1.16rem)",
              fontWeight: 400,
              color: INK_MUTED,
              lineHeight: 1.6,
            }}
          >
            Neither product wakes up at six to film the bread, walks the
            dining room with the camera, or sits with you while you record
            the line. That gap — between the brief and the post — is the
            one thing nobody is building for.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-14 flex items-center gap-4">
            <span
              aria-hidden
              className="h-px w-9"
              style={{ background: NAVY }}
            />
            <span
              style={{
                fontFamily: BODY,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: NAVY,
              }}
            >
              §03 · Continued overleaf
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ForensicFooter({
  label,
  description,
}: {
  label: string;
  description: ReactNode;
}) {
  return (
    <footer
      className="border-t px-5 py-12 text-center sm:px-8"
      style={{
        borderColor: HAIRLINE,
        background: "#ffffff",
      }}
    >
      <MicroLabel color={NAVY}>{label}</MicroLabel>
      <p
        className="mx-auto mt-3 max-w-2xl"
        style={{
          fontFamily: BODY,
          fontSize: "0.84rem",
          fontWeight: 400,
          color: INK_MUTED,
          lineHeight: 1.65,
        }}
      >
        {description}
      </p>
    </footer>
  );
}

export default function SectionTwoForensicPreview() {
  return (
    <main
      style={{
        background: "#ffffff",
        color: INK,
      }}
    >
      <FolioBar />
      <AuditHeader />
      <div
        className="mx-auto max-w-[980px] px-5 sm:px-8"
        style={{ borderTop: `1px solid ${HAIRLINE_HEAVY}` }}
      />
      <ExhibitOne />
      <ExhibitTwo />
      <ClosingFinding />
      <ForensicFooter
        label="Section 02 (forensic) · The audit aesthetic"
        description={
          <>
            Geist Sans throughout, navy (#172554) as the only accent, pure
            white ground. Folio masthead, bold sans display headline with an
            italic-navy &ldquo;Both failed.&rdquo; accent. Exhibit §01 pairs
            prose, a pulled quote with an oversized navy quotation mark, and
            a clean ledger card capped with a navy edge. The arithmetic
            centerpiece animates $2,000 × 12 → $24,000 with a tabular
            number-ticker and lands on a navy &ldquo;Phone-holder&rdquo;
            stamp. Exhibit §02 is a five-row promise-vs-reality table; navy
            ✗ markers carry the indictment. The closing finding lands on a
            massive &ldquo;Neither is the bottleneck. You are.&rdquo; with a
            navy 4px underline draw-in and a §03 / continued-overleaf marker
            as the bridge to the next section. Drama comes from type scale,
            weight contrast, italic moments, and asymmetric grid — not warm
            color or serifs.
          </>
        }
      />
    </main>
  );
}
