"use client";

import { CalendarClock, Palette, Sparkles, UserRound } from "lucide-react";
import { WhatsAppMockup } from "@/components/homepage/WhatsAppMockup";
import type { Message } from "@/components/homepage/WhatsAppMockup";
import { WebAppMockup } from "@/components/homepage/WebAppMockup";

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

function ToolCard({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fog">
        {icon}
      </div>
      <span
        className="text-ink-900"
        style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.2 }}
      >
        {name}
      </span>
      <p
        className="text-ink-700/70"
        style={{ fontSize: "0.82rem", lineHeight: 1.5, margin: 0 }}
      >
        {description}
      </p>
    </div>
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
          color: "rgba(98,98,98,0.5)",
          marginBottom: 20,
        }}
      >
        Tools you&apos;ve tried
      </p>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ToolCard
          icon={<Palette size={20} className="text-ink-900" />}
          name="Canva"
          description="Hours on every template. Still looks generic."
        />
        <ToolCard
          icon={<CalendarClock size={20} className="text-ink-900" />}
          name="Buffer"
          description="Only schedules what you already made."
        />
        <ToolCard
          icon={<Sparkles size={20} className="text-ink-900" />}
          name="ChatGPT"
          description="Generic captions. Still a prompt per post."
        />
        <ToolCard
          icon={<UserRound size={20} className="text-ink-900" />}
          name="Fiverr"
          description="Expensive. Flaky. Still needs briefing."
        />
      </div>

      <p
        className="mt-7 text-center italic sm:text-left"
        style={{ fontSize: "0.82rem", color: "rgba(98,98,98,0.45)" }}
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
          style={{ background: "linear-gradient(to bottom, transparent, #e3e3e3)" }}
        >
          <span
            className="absolute rounded-full border border-line bg-white px-2 py-0.5"
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "rgba(98,98,98,0.55)",
            }}
          >
            TAP
          </span>
        </div>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
          <path
            d="M4 1v5M1.5 4l2.5 2.5 2.5-2.5"
            stroke="#c8c8c8"
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
            color: "rgba(98,98,98,0.4)",
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
                background:
                  "linear-gradient(to right, transparent, #e3e3e3 30%, #e3e3e3 70%, transparent)",
              }}
            />
            <span
              className="relative z-10 rounded-full border border-line bg-white px-2.5 py-0.5"
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "rgba(98,98,98,0.55)",
              }}
            >
              TAP
            </span>
          </div>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
            <path
              d="M1 4h5M4 1.5l2.5 2.5L4 6.5"
              stroke="#c8c8c8"
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
            color: "rgba(98,98,98,0.4)",
            whiteSpace: "nowrap",
          }}
        >
          ONE TAP &middot; NO PASSWORD
        </span>
      </div>
    </div>
  );
}

function MagicLinkBridge() {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-4">
      <div className="lg:rotate-[-2deg]">
        <WhatsAppMockup
          phoneWidth={240}
          script={BRIDGE_WA_SCRIPT}
          animateOnMount={false}
        />
      </div>
      <BridgeConnector />
      <div className="lg:rotate-[2deg]">
        <WebAppMockup phoneWidth={320} />
      </div>
    </div>
  );
}

export function NotAToolSection() {
  return (
    <section
      className="relative overflow-x-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:py-32"
      aria-label="The reframe — Solara is not a tool"
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
              color: "rgba(98,98,98,0.5)",
            }}
          >
            01 &middot; THE REFRAME
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

        <div className="mt-24 flex flex-col items-center text-center sm:mt-28 lg:mt-32">
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

        <div className="mt-10 sm:mt-14">
          <MagicLinkBridge />

          <p
            className="mx-auto mt-6 max-w-[420px] text-center"
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.55,
              color: "rgba(98,98,98,0.7)",
            }}
          >
            A message. A tap. The app opens.
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
