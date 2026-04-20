"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarClock, Palette, Sparkles, UserRound } from "lucide-react";
import { WhatsAppMockup } from "@/components/homepage/WhatsAppMockup";
import type { Message } from "@/components/homepage/WhatsAppMockup";
import { WebAppMockup } from "@/components/homepage/WebAppMockup";

function useInView<T extends Element = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const REVEAL_BASE =
  "transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:!transition-none motion-reduce:!opacity-100 motion-reduce:!translate-y-0 motion-reduce:!translate-x-0";

const HIDDEN_Y = "opacity-0 translate-y-5";
const VISIBLE = "opacity-100 translate-y-0 translate-x-0";

const MUTED_LABEL = "#626262";
const MUTED_LABEL_SOFT = "rgba(98,98,98,0.85)";
const MUTED_BODY = "#4a4a4a";
const MUTED_WHISPER = "rgba(98,98,98,0.75)";
const LINE_COLOR = "#e3e3e3";
const LINE_COLOR_SOFT = "#bcbcbc";

const BRIDGE_WA_SCRIPT: Message[] = [
  {
    id: "b1",
    direction: "incoming",
    text: "Quick favor \u2014 film your espresso machine for 5 seconds \u2615",
    time: "9:02",
  },
  {
    id: "b2",
    direction: "incoming",
    text: "Tap here to start: solara.ai/rec/xT4p",
    time: "9:02",
  },
];

const TOOLS = [
  { icon: Palette, name: "Design apps", description: "Hours on every template. Still looks generic." },
  { icon: CalendarClock, name: "Schedulers", description: "They only post what you already made." },
  { icon: Sparkles, name: "AI writers", description: "Generic captions. You still come up with the ideas." },
  { icon: UserRound, name: "Freelancers", description: "Expensive. Unreliable. You still explain everything." },
] as const;

function ToolsList() {
  const { ref, visible } = useInView<HTMLUListElement>(0.2);
  return (
    <ul ref={ref} className="flex w-full flex-col divide-y divide-line border-y border-line">
      {TOOLS.map((tool, i) => {
        const Icon = tool.icon;
        return (
          <li
            key={tool.name}
            className={`flex items-start gap-4 py-4 sm:items-center sm:gap-6 sm:py-5 ${REVEAL_BASE} ${visible ? VISIBLE : HIDDEN_Y}`}
            style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-fog">
              <Icon size={18} className="text-ink-900" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
              <span
                className="shrink-0 text-ink-900"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  minWidth: "120px",
                }}
              >
                {tool.name}
              </span>
              <span
                className="text-ink-700"
                style={{ fontSize: "0.88rem", lineHeight: 1.5 }}
              >
                {tool.description}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function AbandonedToolsRow() {
  return (
    <div className="flex w-full flex-col">
      <p
        className="text-center sm:text-left"
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.26em",
          textTransform: "uppercase" as const,
          color: MUTED_LABEL,
          marginBottom: 20,
        }}
      >
        Tools you&apos;ve tried
      </p>

      <ToolsList />

      <p
        className="mt-7 text-center italic sm:text-left"
        style={{ fontSize: "0.82rem", color: MUTED_WHISPER }}
      >
        &hellip;none of it stuck.
      </p>
    </div>
  );
}

function BridgeConnector() {
  return (
    <div aria-hidden="true" className="flex shrink-0 flex-col items-center gap-2 lg:gap-0">
      <div className="flex flex-col items-center gap-1 lg:hidden">
        <div
          className="relative flex h-10 w-px items-center justify-center"
          style={{ background: `linear-gradient(to bottom, transparent, ${LINE_COLOR})` }}
        >
          <span
            className="absolute rounded-full border border-line bg-white px-2 py-0.5"
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: MUTED_LABEL,
            }}
          >
            TAP
          </span>
        </div>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
          <path
            d="M4 1v5M1.5 4l2.5 2.5 2.5-2.5"
            stroke={LINE_COLOR_SOFT}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="mt-0.5 text-center"
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: MUTED_LABEL_SOFT,
          }}
        >
          ONE TAP &middot; NO PASSWORD
        </span>
      </div>

      <div className="hidden flex-col items-center gap-2 lg:flex">
        <div className="flex items-center">
          <div
            className="relative flex h-6 items-center justify-center"
            style={{ width: 120 }}
          >
            <div
              className="absolute h-px w-full"
              style={{
                background: `linear-gradient(to right, transparent, ${LINE_COLOR} 30%, ${LINE_COLOR} 70%, transparent)`,
              }}
            />
            <span
              className="relative z-10 rounded-full border border-line bg-white px-2.5 py-0.5"
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: MUTED_LABEL,
              }}
            >
              TAP
            </span>
          </div>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
            <path
              d="M1 4h5M4 1.5l2.5 2.5L4 6.5"
              stroke={LINE_COLOR_SOFT}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: MUTED_LABEL_SOFT,
            whiteSpace: "nowrap",
          }}
        >
          ONE TAP &middot; NO PASSWORD
        </span>
      </div>
    </div>
  );
}

function RuptureReveal() {
  const { ref, visible } = useInView(0.3);
  return (
    <div
      ref={ref}
      className={`mt-24 flex flex-col items-center text-center sm:mt-28 lg:mt-32 ${REVEAL_BASE} ${visible ? VISIBLE : HIDDEN_Y}`}
      style={{ transitionDuration: "800ms" }}
    >
      <div className="h-px w-12 bg-line" />
      <p
        className="mt-5 max-w-md text-ink-900"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          fontWeight: 600,
          lineHeight: 1.18,
          letterSpacing: "-0.015em",
        }}
      >
        Solara is nothing like that.
      </p>
    </div>
  );
}

function MagicLinkBridge() {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
      <div className="origin-center scale-[0.82] sm:scale-90 lg:scale-100 lg:rotate-[-2deg]">
        <WhatsAppMockup
          phoneWidth={300}
          script={BRIDGE_WA_SCRIPT}
          animateOnMount={false}
        />
      </div>
      <BridgeConnector />
      <div className="origin-center scale-[0.82] sm:scale-90 lg:scale-100 lg:rotate-[2deg]">
        <WebAppMockup phoneWidth={300} />
      </div>
    </div>
  );
}

export function NotAToolSection() {
  return (
    <section
      className="relative overflow-x-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:py-32"
      aria-label="The difference — what makes Solara different from other tools"
    >
      <div className="mx-auto max-w-5xl">

        <div>
          <div className="h-px bg-line" />

          <p
            className="mt-6"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase" as const,
              color: MUTED_LABEL,
            }}
          >
            01 &middot; THE DIFFERENCE
          </p>

          <h2
            className="mt-4 max-w-[760px] leading-[1.08] tracking-[-0.02em] text-ink-900"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
            }}
          >
            Not a dashboard. Not a scheduler. Not another app you&apos;ll
            forget about.
          </h2>

          <div className="mt-10 sm:mt-12">
            <AbandonedToolsRow />
          </div>
        </div>

        <RuptureReveal />

        <div className="mt-10 sm:mt-14">
          <MagicLinkBridge />

          <p
            className="mx-auto mt-6 max-w-[420px] text-center"
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.55,
              color: MUTED_BODY,
            }}
          >
            A message. A tap. Solara opens.
          </p>
        </div>

        <div className="mt-16 max-w-[620px] border-t border-line pt-8 sm:mt-20">
          <p
            className="text-ink-900"
            style={{
              fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
              lineHeight: 1.55,
              fontWeight: 500,
              fontFamily: "var(--font-display)",
            }}
          >
            Every tool asked you to become a marketer. Solara asks you to be
            what you already are &mdash; the business owner.
          </p>
        </div>

      </div>
    </section>
  );
}
