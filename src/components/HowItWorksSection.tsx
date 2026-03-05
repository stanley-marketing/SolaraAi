"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Connect",
    detail: "Link your ad accounts, analytics, and brand assets. Solara ingests everything in under two minutes.",
  },
  {
    num: "02",
    title: "Learn",
    detail: "The AI studies your audience, past performance, and competitive landscape to build a strategy unique to you.",
  },
  {
    num: "03",
    title: "Launch",
    detail: "Campaigns go live across channels — paid, organic, email, social — all coordinated, all on-brand.",
  },
  {
    num: "04",
    title: "Evolve",
    detail: "Every signal feeds back. Budgets shift, creative iterates, targeting sharpens. Continuously, autonomously.",
  },
];

function StepRow({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-0">
      {/* Left content (shows on even steps, empty on odd for lg) */}
      <div className={`${isEven ? "lg:text-right lg:pr-16" : "lg:order-3 lg:pl-16"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Large watermark number */}
          <span
            className="block text-[clamp(5rem,12vw,9rem)] font-[200] leading-[0.85] tracking-[-0.04em] text-black/[0.05]"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            {step.num}
          </span>

          <h3
            className="mt-2 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1] tracking-[-0.03em] text-black"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            {step.title}
          </h3>

          <p className="mt-4 max-w-md text-[0.95rem] leading-[1.65] text-black/50 font-[family-name:var(--font-body)]"
             style={isEven ? { marginLeft: "auto" } : {}}
          >
            {step.detail}
          </p>
        </motion.div>
      </div>

      {/* Center dot + line */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:order-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex h-4 w-4 items-center justify-center"
        >
          <span className="absolute h-4 w-4 rounded-full bg-black/[0.07]" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
        </motion.div>
      </div>

      {/* Right side spacer for even, content for odd */}
      <div className={`hidden lg:block ${isEven ? "lg:order-3" : "lg:order-1 lg:text-right lg:pr-16"}`}>
        {!isEven && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="block text-[clamp(5rem,12vw,9rem)] font-[200] leading-[0.85] tracking-[-0.04em] text-black/[0.05]"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              {step.num}
            </span>

            <h3
              className="mt-2 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1] tracking-[-0.03em] text-black"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              {step.title}
            </h3>

            <p className="mt-4 ml-auto max-w-md text-[0.95rem] leading-[1.65] text-black/50 font-[family-name:var(--font-body)]">
              {step.detail}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-36 sm:py-48">
      {/* Section label + heading */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-center">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-black/40">
            How it works
          </span>
          <h2
            className="mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-[-0.025em] text-black"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            From zero to autonomous<br />in four steps
          </h2>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-24 max-w-5xl px-6 sm:mt-32 sm:px-10">
        {/* Vertical connecting line (desktop only) */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 lg:block">
          <div className="h-full w-full bg-black/[0.06]" />
          <motion.div
            className="absolute inset-x-0 top-0 w-full origin-top bg-black/20"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
          {steps.map((step, i) => (
            <StepRow key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom flourish */}
      <div className="mx-auto mt-28 max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-black/25">
          <div className="h-px w-16 bg-black/[0.08]" />
          <span>Then it never stops improving</span>
          <div className="h-px w-16 bg-black/[0.08]" />
        </div>
      </div>
    </section>
  );
}
