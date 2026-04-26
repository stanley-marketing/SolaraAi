"use client";

import { ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import {
  BODY,
  DISPLAY,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  INK_SOFT,
  PreviewFooter,
  ROSE,
  ROSE_DEEP,
  SHELL,
} from "@/components/homepage/teardown-parts";

type Faq = {
  q: string;
  a: string;
};

const FAQS: Faq[] = [
  {
    q: "I'm terrible on camera.",
    a: "Most of your content isn't you on camera — it's your product, your space, your process, your customers. When you do appear, it's one short sentence at a time with a teleprompter. Too nervous to speak? Use gesture mode — stand there, gesture, smile. Solara lip-syncs your voice clone to the script.",
  },
  {
    q: "I don't know how to film.",
    a: "You don't need to. Every ask comes with a short reference — a framing guide, a teleprompter, sometimes an animated preview of the shot. Your only job is pressing record on what Solara shows you. If the take is off, Solara asks for one more.",
  },
  {
    q: "What if Solara posts something I hate?",
    a: "Nothing posts without your tap. Ever. Every draft waits in your queue until you approve it.",
  },
  {
    q: "Is a real person watching any of this?",
    a: "Yes. Our team is in the loop on every account — not touching every post, but catching edge cases the AI might miss. You're not alone with a black box.",
  },
  {
    q: "How is this possible for $99?",
    a: "Solara isn't a tool and isn't a person — it's a workflow. It runs your content through the best AI models on the market, backed by a human team. The expensive part of hiring a human was paying them to think, produce, and edit. Software does that now. You bring the one thing only you can: being in your own business.",
  },
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
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
      {number} &middot; {label}
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
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      style={{
        borderTop: index === 0 ? `1px solid ${HAIRLINE_HEAVY}` : "none",
        borderBottom: `1px solid ${HAIRLINE}`,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 py-5 text-left transition-colors hover:bg-black/[0.015]"
      >
        <span
          className="shrink-0 pt-1"
          style={{
            fontFamily: BODY,
            fontSize: "0.7rem",
            letterSpacing: "0.16em",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="flex-1"
          style={{
            fontFamily: DISPLAY,
            fontSize: "clamp(1.05rem, 1.7vw, 1.2rem)",
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.015em",
            lineHeight: 1.35,
          }}
        >
          {faq.q}
        </span>

        <span
          className="shrink-0 pt-0.5"
          style={{ color: isOpen ? ROSE_DEEP : INK_SOFT }}
        >
          {isOpen ? (
            <Minus size={18} strokeWidth={2} />
          ) : (
            <Plus size={18} strokeWidth={2} />
          )}
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "600px" : 0,
          overflow: "hidden",
          transition: "max-height 340ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        }}
      >
        <p
          className="pb-6 pl-12 pr-10"
          style={{
            fontFamily: BODY,
            fontSize: "1rem",
            lineHeight: 1.62,
            color: INK_MUTED,
            maxWidth: "680px",
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div>
      {FAQS.map((faq, i) => (
        <FaqItem
          key={faq.q}
          faq={faq}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function CalendarPreview() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const scheduled = new Set([0, 2, 4]);

  return (
    <div
      className="relative rounded-sm p-5"
      style={{
        background: "#fdfcf8",
        border: `1px solid ${HAIRLINE_HEAVY}`,
      }}
    >
      <p
        className="mb-4 inline-flex items-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.58rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ background: ROSE_DEEP }}
        />
        Your week, already planned
      </p>

      <div className="grid grid-cols-7 gap-1.5">
        {days.map((d, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1.5 py-1.5"
          >
            <span
              style={{
                fontFamily: BODY,
                fontSize: "0.64rem",
                letterSpacing: "0.1em",
                color: INK_FAINT,
                fontWeight: 700,
              }}
            >
              {d}
            </span>
            <div
              className="flex h-10 w-full items-center justify-center rounded-sm"
              style={{
                background: scheduled.has(i) ? ROSE_DEEP : "#f0efe9",
                border: `1px solid ${scheduled.has(i) ? ROSE_DEEP : HAIRLINE}`,
                color: scheduled.has(i) ? "#fff" : INK_FAINT,
                fontFamily: BODY,
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              {scheduled.has(i) ? (
                <div className="flex flex-col items-center leading-tight">
                  <span>POST</span>
                </div>
              ) : (
                <span>&middot;</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-4 flex items-center justify-between gap-3"
        style={{
          fontFamily: BODY,
          fontSize: "0.78rem",
          color: INK_SOFT,
        }}
      >
        <span>3 pieces this week</span>
        <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
          Auto-scheduled
        </span>
      </div>
    </div>
  );
}

function SectionNine() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-10 sm:pt-28">
        <SectionEyebrow number="09" label="Last questions" />

        <h2
          className="mt-5 leading-[1.03] tracking-[-0.038em] text-[clamp(2.2rem,4.8vw,3.4rem)]"
          style={{
            fontFamily: DISPLAY,
            fontWeight: 600,
            color: INK,
            maxWidth: "820px",
          }}
        >
          The five things everyone asks.{" "}
          <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
            Answered.
          </span>
        </h2>

        <p
          className="mt-4"
          style={{
            fontFamily: BODY,
            fontSize: "1.04rem",
            lineHeight: 1.55,
            color: INK_MUTED,
            maxWidth: "580px",
          }}
        >
          If you&rsquo;re still asking something not on this list, your free
          strategy call is the place for it.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-16">
        <FaqAccordion />
      </div>

      <div
        className="relative border-t"
        style={{ borderColor: HAIRLINE_HEAVY }}
      >
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <p
                className="mb-3 inline-flex items-center gap-2"
                style={{
                  fontFamily: BODY,
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: ROSE_DEEP,
                  fontWeight: 700,
                }}
              >
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ background: ROSE_DEEP }}
                />
                Ready in 10 minutes
              </p>

              <h3
                className="leading-[1.05] tracking-[-0.035em] text-[clamp(2rem,4vw,2.8rem)]"
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 600,
                  color: INK,
                  maxWidth: "540px",
                }}
              >
                Your strategy is free.{" "}
                <span style={{ color: INK_FAINT }}>
                  Seeing what Solara builds for you is free.
                </span>
              </h3>

              <p
                className="mt-4"
                style={{
                  fontFamily: BODY,
                  fontSize: "1.02rem",
                  lineHeight: 1.55,
                  color: INK_MUTED,
                  maxWidth: "480px",
                }}
              >
                Scan your website, your Instagram, or your brand profile. See
                what Solara builds for you. Decide after.
              </p>

              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5"
                  style={{
                    background: INK,
                    color: "#fff",
                    fontFamily: BODY,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  See your free strategy
                  <ArrowRight size={16} strokeWidth={2.2} />
                </button>
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: "0.78rem",
                    color: INK_FAINT,
                  }}
                >
                  No credit card &middot; 10-minute setup
                </span>
              </div>
            </div>

            <CalendarPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SectionNineFaqPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <SectionNine />

      <PreviewFooter
        label="Section 09 · FAQ + final CTA"
        description="Trimmed FAQ (5 hardest objections only — down from v5's 7) as a click-to-expand accordion with first item open by default. Below: final CTA paired with a 7-day calendar preview showing 3 auto-scheduled posts in navy tiles. Calendar reinforces 'ongoing managed output' rather than one-shot tool, per research recommendation. No phone, no device chrome."
      />
    </main>
  );
}
