"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Be found.",
    body: "Your invisible brand becomes the one people search for. Across every platform, every day, on brand.",
  },
  {
    num: "02",
    title: "Spend smarter.",
    body: "Every dollar watched, every campaign optimized. What bleeds gets killed. What converts gets scaled. Automatically.",
  },
  {
    num: "03",
    title: "Do less.",
    body: "One person, operating like a team of ten. Less effort, more output, total clarity on what\u2019s driving results.",
  },
];

function PillarCard({ pillar, index }: { pillar: (typeof pillars)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-18% 0px -18% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.85,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-black/[0.06] bg-gradient-to-b from-[#faf9f6] to-[#f5f3ef] p-10 sm:p-12"
      style={{ minHeight: "clamp(400px, 50vh, 560px)" }}
    >
      {/* Large faded number watermark */}
      <span
        className="pointer-events-none absolute -right-4 -top-8 text-[clamp(8rem,18vw,14rem)] font-[200] leading-none tracking-[-0.05em] text-black/[0.03]"
        style={{ fontFamily: "var(--font-display-playfair)" }}
      >
        {pillar.num}
      </span>

      {/* Top: number label */}
      <div>
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/30 font-[family-name:var(--font-body)]">
          {pillar.num}
        </span>
      </div>

      {/* Bottom: title + body */}
      <div>
        <h3
          className="text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.02em] text-black"
          style={{ fontFamily: "var(--font-display-playfair)" }}
        >
          {pillar.title}
        </h3>

        <p className="mt-5 max-w-sm text-[0.88rem] leading-[1.7] text-black/45 font-[family-name:var(--font-body)] font-light">
          {pillar.body}
        </p>
      </div>

      {/* Subtle bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          duration: 1,
          delay: 0.3 + index * 0.15,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="absolute bottom-0 left-10 right-10 h-px origin-left bg-black/[0.06]"
      />
    </motion.div>
  );
}

export function WhatChangesSectionA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(sectionRef, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section header */}
        <div className="mb-20 max-w-2xl sm:mb-28">
          <motion.span
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/30 font-[family-name:var(--font-body)]"
          >
            What changes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1] tracking-[-0.025em] text-black"
            style={{ fontFamily: "var(--font-display-playfair)" }}
          >
            Everything you struggle with,
            <br />
            <span className="italic text-black/40">solved.</span>
          </motion.h2>
        </div>

        {/* Triptych cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.num} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
