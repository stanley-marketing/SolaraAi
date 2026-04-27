"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  PreviewFooter,
  ROSE_DEEP,
  SHELL,
} from "@/components/homepage/teardown-parts";

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

function PriceDisplay({
  amount,
  unit = "/mo",
}: {
  amount: string;
  unit?: string;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.045em",
          lineHeight: 0.95,
          color: INK,
        }}
      >
        {amount}
      </span>
      <span
        style={{
          fontFamily: BODY,
          fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
          fontWeight: 500,
          color: INK_FAINT,
          letterSpacing: "-0.005em",
        }}
      >
        {unit}
      </span>
    </div>
  );
}

function MiniInvoice() {
  const lines = [
    { label: "Tell you what to film", amount: "$500" },
    { label: 'Say "hold it vertical"', amount: "$500" },
    { label: "Take your clips, edit later", amount: "$500" },
    { label: "Caption, schedule, report", amount: "$500" },
  ];

  return (
    <div
      className="rounded-xl"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: "20px 22px",
      }}
    >
      <div
        className="mb-3 flex items-center justify-between"
        style={{
          fontFamily: BODY,
          fontSize: "0.62rem",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span>Invoice · No. 0924</span>
        <span>Monthly retainer</span>
      </div>

      <div
        style={{
          fontFamily: DISPLAY,
          fontSize: "1.08rem",
          fontWeight: 600,
          color: INK,
          letterSpacing: "-0.018em",
          marginBottom: 4,
        }}
      >
        Social media manager
      </div>
      <p
        className="mb-4"
        style={{
          fontFamily: BODY,
          fontSize: "0.78rem",
          color: INK_SOFT,
          lineHeight: 1.4,
        }}
      >
        Briefs you. Takes your clips. Cuts on a laptop later.
      </p>

      <div style={{ borderTop: `1px solid ${HAIRLINE}` }} />

      <ul className="my-3 space-y-2.5">
        {lines.map((line) => (
          <li
            key={line.label}
            className="flex items-baseline justify-between gap-3"
            style={{
              fontFamily: BODY,
              fontSize: "0.84rem",
              color: INK_MUTED,
            }}
          >
            <span>{line.label}</span>
            <span
              className="tabular-nums"
              style={{ color: INK, fontWeight: 500 }}
            >
              {line.amount}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ borderTop: `1px solid ${HAIRLINE_HEAVY}` }} />

      <div className="mt-3 flex items-baseline justify-between">
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.66rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          Monthly total
        </span>
        <span
          className="tabular-nums"
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.5rem",
            fontWeight: 700,
            color: INK,
            letterSpacing: "-0.025em",
          }}
        >
          $2,000
        </span>
      </div>
    </div>
  );
}

function ToolStackVisual() {
  const tools = [
    { name: "Buffer", price: "$15" },
    { name: "Canva Pro", price: "$15" },
    { name: "Hootsuite", price: "$99" },
    { name: "Jasper", price: "$59" },
    { name: "Runway", price: "$76" },
    { name: "Sprout Social", price: "$199" },
    { name: "Pictory", price: "$39" },
    { name: "Later", price: "$25" },
  ];

  return (
    <div
      className="rounded-xl"
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: "20px 22px",
      }}
    >
      <div
        className="mb-3 flex items-center justify-between"
        style={{
          fontFamily: BODY,
          fontSize: "0.62rem",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span>Stack · No. 0924</span>
        <span>Recurring</span>
      </div>

      <div
        style={{
          fontFamily: DISPLAY,
          fontSize: "1.08rem",
          fontWeight: 600,
          color: INK,
          letterSpacing: "-0.018em",
          marginBottom: 4,
        }}
      >
        The toolkit
      </div>
      <p
        className="mb-4"
        style={{
          fontFamily: BODY,
          fontSize: "0.78rem",
          color: INK_SOFT,
          lineHeight: 1.4,
        }}
      >
        Each one solves a slice. None of them know your business.
      </p>

      <div style={{ borderTop: `1px solid ${HAIRLINE}` }} />

      <ul className="my-3 grid grid-cols-2 gap-x-4 gap-y-2">
        {tools.map((tool) => (
          <li
            key={tool.name}
            className="flex items-baseline justify-between gap-2"
            style={{
              fontFamily: BODY,
              fontSize: "0.78rem",
              color: INK_MUTED,
            }}
          >
            <span className="truncate">{tool.name}</span>
            <span
              className="tabular-nums shrink-0"
              style={{ color: INK, fontWeight: 500 }}
            >
              {tool.price}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ borderTop: `1px solid ${HAIRLINE_HEAVY}` }} />

      <div className="mt-3 flex items-baseline justify-between">
        <span
          style={{
            fontFamily: BODY,
            fontSize: "0.66rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: INK_FAINT,
            fontWeight: 700,
          }}
        >
          Monthly total
        </span>
        <span
          className="tabular-nums"
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.5rem",
            fontWeight: 700,
            color: INK,
            letterSpacing: "-0.025em",
          }}
        >
          $527
        </span>
      </div>
    </div>
  );
}

function BentoCard({
  index,
  number,
  label,
  price,
  priceUnit,
  caption,
  body,
  visual,
  arithmetic,
}: {
  index: number;
  number: string;
  label: string;
  price: string;
  priceUnit?: string;
  caption: string;
  body: string;
  visual: React.ReactNode;
  arithmetic: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
        delay: index * 0.08,
      }}
      className="flex flex-col rounded-2xl"
      style={{
        background: "#f4eee2",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        padding: "clamp(28px, 4vw, 40px)",
      }}
    >
      <CardEyebrow number={number} label={label} />

      <div className="mt-7">
        <PriceDisplay amount={price} unit={priceUnit ?? "/mo"} />
      </div>

      <h3
        className="mt-3"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
          fontWeight: 600,
          color: INK,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
        }}
      >
        {caption}
      </h3>

      <p
        className="mt-3"
        style={{
          fontFamily: BODY,
          fontSize: "clamp(0.92rem, 1.15vw, 1rem)",
          lineHeight: 1.6,
          color: INK_MUTED,
          maxWidth: "32ch",
        }}
      >
        {body}
      </p>

      <div className="mt-7">{visual}</div>

      <div
        className="mt-7 border-l-2 pl-4"
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
          {arithmetic}
        </p>
      </div>
    </motion.article>
  );
}

export default function SectionTwoV7Preview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, transparent 15%, rgba(248,247,244,0.92) 75%)",
            }}
          />
        </div>

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
              maxWidth: "18ch",
            }}
          >
            You&rsquo;ve tried both.
            <br />
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
            Two paths the entire industry sells you. Here&rsquo;s what each one
            actually is, side by side.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            <BentoCard
              index={0}
              number="01"
              label="The agency"
              price="$2,000"
              caption="For instructions."
              body="On-site or on Zoom, they hand you a list of things to film this week. You bring the clips. They process everything later — without you."
              visual={<MiniInvoice />}
              arithmetic="$24,000 a year. For someone to hand you a shot list."
            />

            <BentoCard
              index={1}
              number="02"
              label="The toolkit"
              price="$150–600"
              caption="For auto-complete."
              body="A scheduler doesn't know what to schedule. A caption tool doesn't know your customer. None of them know your business."
              visual={<ToolStackVisual />}
              arithmetic="5+ subscriptions. 3 logins. Still no posts."
            />
          </div>
        </div>

        <div
          className="border-t"
          style={{ borderColor: HAIRLINE, borderTopWidth: 2 }}
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
        label="Section 02 (v7) · The teardown — bento split"
        description="Modern bento split: two equal-weight cards side-by-side (mobile stacks). Each card is self-contained with eyebrow + numbered marker + display-scale price + 1-line caption + tight body + visual artifact (mini invoice / tool-stack receipt) + navy-bordered arithmetic moment. Cards use cream #f4eee2 background to differentiate from the SHELL canvas. Verdict appears below in centered editorial format with 2px ink top border. Bridge close uses display-scale type with italic-navy 'Solara' accent. Two italic-navy accents total ('the bottleneck' in headline + 'Solara' in close). Replaces the stacked ExhibitRow pattern of v6 — eliminates the awkward whitespace gap between exhibits, gives both villains equal visual weight, scannable at a glance, faster value conveying."
      />
    </main>
  );
}
