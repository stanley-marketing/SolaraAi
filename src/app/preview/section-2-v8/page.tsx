"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MagicCard } from "@/components/ui/magic-card";
import {
  BODY,
  DISPLAY,
  HAIRLINE,
  INK,
  INK_FAINT,
  INK_MUTED,
  INK_SOFT,
  PreviewFooter,
  ROSE_DEEP,
  SHELL,
} from "@/components/homepage/teardown-parts";

const TOOL_NAMES = [
  "Buffer",
  "Hootsuite",
  "Canva Pro",
  "Jasper",
  "Runway",
  "Sprout Social",
  "Pictory",
  "Later",
  "Synthesia",
  "Copy.ai",
  "FeedHive",
  "SocialBee",
];

function MarqueeKeys() {
  return (
    <style>{`
      @keyframes marqueeShift {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-50% - 1.5rem)); }
      }
    `}</style>
  );
}

function ToolMarquee() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div
        className="flex items-center gap-6 py-1"
        style={{
          width: "max-content",
          animation: "marqueeShift 38s linear infinite",
        }}
      >
        {[...TOOL_NAMES, ...TOOL_NAMES].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="inline-flex items-center"
            style={{
              fontFamily: BODY,
              fontSize: "0.86rem",
              fontWeight: 500,
              color: INK_MUTED,
              whiteSpace: "nowrap",
            }}
          >
            <span
              className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: INK_FAINT }}
            />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function CardEyebrow({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full"
        style={{
          background: INK,
          color: "#fff",
          fontFamily: BODY,
          fontSize: "0.66rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: BODY,
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: ROSE_DEEP,
          fontWeight: 700,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function PriceA() {
  return (
    <div className="flex items-baseline gap-2">
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(3.5rem, 8vw, 6rem)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 0.92,
          color: INK,
        }}
      >
        $<NumberTicker value={2000} className="tabular-nums" />
      </span>
      <span
        style={{
          fontFamily: BODY,
          fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          fontWeight: 500,
          color: INK_FAINT,
        }}
      >
        /mo
      </span>
    </div>
  );
}

function PriceB() {
  return (
    <div className="flex items-baseline gap-2">
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(3.5rem, 8vw, 6rem)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 0.92,
          color: INK,
        }}
      >
        $150&ndash;<NumberTicker value={600} className="tabular-nums" />
      </span>
      <span
        style={{
          fontFamily: BODY,
          fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          fontWeight: 500,
          color: INK_FAINT,
        }}
      >
        /mo
      </span>
    </div>
  );
}

function ArithmeticLine({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="border-l-2 pl-4"
      style={{ borderColor: ROSE_DEEP }}
    >
      <p
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
          fontWeight: 600,
          letterSpacing: "-0.015em",
          lineHeight: 1.45,
          color: INK,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function BentoCard({
  index,
  number,
  label,
  price,
  caption,
  body,
  visual,
  arithmetic,
  isFeatured = false,
}: {
  index: number;
  number: string;
  label: string;
  price: React.ReactNode;
  caption: string;
  body: string;
  visual: React.ReactNode;
  arithmetic: React.ReactNode;
  isFeatured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 0.61, 0.36, 1],
        delay: index * 0.08,
      }}
      className="relative"
    >
      <MagicCard
        className="h-full"
        gradientColor="rgba(23, 37, 84, 0.10)"
        gradientSize={320}
      >
        <GlowingEffect
          spread={36}
          proximity={70}
          inactiveZone={0.55}
          borderWidth={1}
        />

        {isFeatured && (
          <BorderBeam
            size={120}
            duration={9}
            colorFrom={ROSE_DEEP}
            colorTo="#1e3a8a"
            delay={0.5}
          />
        )}

        <div
          className="flex h-full flex-col"
          style={{ padding: "clamp(28px, 4vw, 44px)" }}
        >
          <CardEyebrow number={number} label={label} />

          <div className="mt-7">{price}</div>

          <h3
            className="mt-3"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.028em",
              lineHeight: 1.1,
            }}
          >
            {caption}
          </h3>

          <p
            className="mt-3"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.95rem, 1.18vw, 1.05rem)",
              lineHeight: 1.6,
              color: INK_MUTED,
              maxWidth: "34ch",
            }}
          >
            {body}
          </p>

          <div className="mt-8 flex-1">{visual}</div>

          <div className="mt-8">{arithmetic}</div>
        </div>
      </MagicCard>
    </motion.div>
  );
}

function AgencyVisual() {
  return (
    <div className="relative">
      <div
        className="rounded-lg p-5"
        style={{
          background: "rgba(10,10,10,0.025)",
          border: `1px dashed ${HAIRLINE}`,
        }}
      >
        <p
          className="mb-3"
          style={{
            fontFamily: BODY,
            fontSize: "0.62rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          What you get for $2,000/mo
        </p>

        <ul className="space-y-2.5">
          {[
            "Tell you what to film",
            'Say "hold it vertical"',
            "Take your clips, edit later",
            "Caption, schedule, report back",
          ].map((line) => (
            <li
              key={line}
              className="flex items-baseline gap-3"
              style={{
                fontFamily: BODY,
                fontSize: "0.92rem",
                color: INK_MUTED,
                lineHeight: 1.45,
              }}
            >
              <span
                className="inline-block shrink-0"
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 2,
                  background: INK_SOFT,
                  transform: "translateY(-2px)",
                }}
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ToolkitVisual() {
  return (
    <div className="relative">
      <div
        className="rounded-lg p-5"
        style={{
          background: "rgba(10,10,10,0.025)",
          border: `1px dashed ${HAIRLINE}`,
        }}
      >
        <p
          className="mb-4"
          style={{
            fontFamily: BODY,
            fontSize: "0.62rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          A subset of what's on the market
        </p>

        <ToolMarquee />

        <p
          className="mt-4"
          style={{
            fontFamily: BODY,
            fontSize: "0.85rem",
            color: INK_SOFT,
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          Each does one thing. None of them know your business.
        </p>
      </div>
    </div>
  );
}

export default function SectionTwoV8Preview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <MarqueeKeys />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-24 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
          <p
            className="mb-8"
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: ROSE_DEEP,
            }}
          >
            02 &middot; The teardown
          </p>

          <h2
            className="leading-[0.96] tracking-[-0.04em]"
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.2rem, 6vw, 4.4rem)",
              fontWeight: 700,
              color: INK,
              maxWidth: "20ch",
            }}
          >
            You&rsquo;ve tried both.{" "}
            <span className="block sm:inline">
              Both make you{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: ROSE_DEEP,
                }}
              >
                the bottleneck.
              </span>
            </span>
          </h2>

          <p
            className="mt-6 max-w-[58ch]"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(1rem, 1.35vw, 1.15rem)",
              lineHeight: 1.6,
              color: INK_MUTED,
            }}
          >
            Two paths the entire industry sells you. Here&rsquo;s what each
            actually is.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            <BentoCard
              index={0}
              number="01"
              label="The agency"
              price={<PriceA />}
              caption="For instructions."
              body="On-site or on Zoom, they hand you a list of things to film this week. You bring the clips. They process everything later — without you."
              visual={<AgencyVisual />}
              arithmetic={
                <>$24,000 a year. For someone to hand you a shot list.</>
              }
            />

            <BentoCard
              index={1}
              number="02"
              label="The toolkit"
              price={<PriceB />}
              caption="For auto-complete."
              body="A scheduler doesn't know what to schedule. A caption tool doesn't know your customer. None of them know your business."
              visual={<ToolkitVisual />}
              arithmetic={
                <>5+ subscriptions. 3 logins. Still no posts.</>
              }
            />
          </div>
        </div>

        <div
          className="border-t"
          style={{ borderColor: HAIRLINE, borderTopWidth: 1 }}
        >
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
            <p
              className="mb-6"
              style={{
                fontFamily: BODY,
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: INK_FAINT,
              }}
            >
              The finding
            </p>

            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.4rem, 2.6vw, 2rem)",
                fontWeight: 500,
                color: INK,
                letterSpacing: "-0.025em",
                lineHeight: 1.3,
              }}
            >
              Option A is a phone-holder with a twelve-month contract.
              <br className="hidden sm:block" />{" "}
              Option B is a blank page with auto-complete.
            </p>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: HAIRLINE }}>
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(2rem, 5vw, 3.6rem)",
                fontWeight: 700,
                color: INK,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              That&rsquo;s the gap{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: ROSE_DEEP,
                }}
              >
                Solara
              </span>{" "}
              was built for.
            </p>
          </div>
        </div>
      </section>

      <PreviewFooter
        label="Section 02 (v8) · The teardown — Magic UI cards"
        description="Clean SHELL background (no FlickeringGrid). Two MagicCard components side-by-side with navy-tinted spotlight that follows the cursor and GlowingEffect for cursor-tracked border glow. NumberTicker animates the prices in. Big display-scale prices ($2,000 and $150–600) anchor each card. Card A visual: simple list of what $2,000/mo actually delivers (4 line items in a dashed-border card). Card B visual: infinite-scroll marquee of real tool names (Buffer, Hootsuite, Canva, Jasper, Runway, Sprout, Pictory, Later, Synthesia, Copy.ai, FeedHive, SocialBee) with edge-fade mask, plus 'each does one thing, none know your business' caption. Both cards use white background with subtle hover glow — no more cream-on-cream hideousness. Verdict + Bridge close beats kept clean with hairline dividers. Two italic-navy accents total ('the bottleneck' + 'Solara was built for')."
      />
    </main>
  );
}
