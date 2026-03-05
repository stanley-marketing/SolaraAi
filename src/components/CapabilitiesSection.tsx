"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Autonomous\ncampaigns",
    body: "Solara plans, launches, and optimizes full campaigns across every channel — no hand-holding required.",
  },
  {
    num: "02",
    title: "Content\nat scale",
    body: "Generates copy, visuals, and video variants tuned to each audience segment and platform.",
  },
  {
    num: "03",
    title: "Real-time\noptimization",
    body: "Continuously reallocates budget and creative based on live performance signals.",
  },
  {
    num: "04",
    title: "Unified\nanalytics",
    body: "One view across paid, organic, email, and social — no more stitching dashboards together.",
  },
  {
    num: "05",
    title: "Brand\nintelligence",
    body: "Learns your voice, enforces your guidelines, and gets sharper with every interaction.",
  },
];

function CapabilityCard({
  item,
  index,
  progress,
}: {
  item: (typeof capabilities)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const cardStart = index / capabilities.length;
  const cardEnd = (index + 1) / capabilities.length;

  const y = useTransform(progress, [cardStart, cardEnd], [60, 0]);
  const opacity = useTransform(progress, [cardStart, cardStart + 0.15], [0, 1]);
  const rotate = useTransform(
    progress,
    [cardStart, cardEnd],
    [2.5 * (index % 2 === 0 ? 1 : -1), 0]
  );

  return (
    <motion.div
      style={{ y, opacity, rotate }}
      className="group relative flex min-h-[420px] w-[340px] shrink-0 flex-col justify-between rounded-[2.2rem] border border-black/[0.08] bg-gradient-to-b from-white to-[#faf9f6] p-10 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-500 hover:shadow-[0_8px_60px_-12px_rgba(0,0,0,0.14)] sm:w-[380px]"
    >
      {/* Large number watermark */}
      <span className="pointer-events-none absolute right-8 top-6 text-[7rem] font-[200] leading-none tracking-tighter text-black/[0.04]" style={{ fontFamily: "var(--font-display-playfair)" }}>
        {item.num}
      </span>

      <div>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-black/40">
          {item.num}
        </span>

        <h3
          className="mt-6 whitespace-pre-line text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.05] tracking-[-0.015em] text-black"
          style={{ fontFamily: "var(--font-display-playfair)" }}
        >
          {item.title}
        </h3>
      </div>

      <p className="mt-auto pt-8 text-[0.95rem] leading-[1.65] text-black/55 font-[family-name:var(--font-body)]">
        {item.body}
      </p>

      {/* Bottom accent line */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-black/10 via-black/5 to-transparent" />
    </motion.div>
  );
}

export function CapabilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white py-32 sm:py-40">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-black/45">
              Capabilities
            </span>
            <h2
              className="mt-3 text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[0.92] tracking-[-0.025em] text-black"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              Five things Solara<br />does on day one
            </h2>
          </div>
          <p className="max-w-sm text-[0.92rem] leading-[1.6] text-black/50 font-[family-name:var(--font-body)] sm:text-right">
            Not features on a roadmap.<br />
            Capabilities that ship the moment you connect.
          </p>
        </div>
      </div>

      {/* Cards strip */}
      <div className="mt-20 sm:mt-28">
        <div className="flex gap-6 overflow-x-auto px-6 pb-8 sm:gap-8 sm:px-10 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {/* Left spacer for large screens */}
          <div className="hidden shrink-0 lg:block" style={{ width: "calc((100vw - 80rem) / 2)" }} />

          {capabilities.map((item, index) => (
            <CapabilityCard
              key={item.num}
              item={item}
              index={index}
              progress={scrollYProgress}
            />
          ))}

          {/* Right spacer */}
          <div className="shrink-0 w-6 sm:w-10" />
        </div>
      </div>

      {/* Bottom detail line */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:px-10">
        <div className="flex items-center gap-4 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-black/30">
          <div className="h-px flex-1 bg-black/8" />
          <span>Scroll to explore</span>
          <div className="h-px flex-1 bg-black/8" />
        </div>
      </div>
    </section>
  );
}
