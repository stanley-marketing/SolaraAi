"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function WhyNowSectionC() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headlineRef, { once: true, margin: "-15% 0px -15% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  /* Staggered word animation for "That era is ending." */
  const headlineWords = ["That", "era", "is", "ending."];
  const wordVariants = {
    hidden: { opacity: 0, y: 35, rotateX: 45 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0d0b08]">
      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Ambient glow behind headline */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[30%] h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[100px]" />
      </motion.div>

      {/* Top transition: gradient from white to black */}
      <div className="h-32 bg-gradient-to-b from-white to-[#0d0b08] sm:h-48" />

      <div className="relative z-10 px-6 pb-36 pt-16 sm:px-10 sm:pb-52 sm:pt-24">
        {/* Headline: "That era is ending." */}
        <div ref={headlineRef} className="mx-auto max-w-5xl text-center" style={{ perspective: "600px" }}>
          <h2 className="text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.035em]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`mr-[0.22em] inline-block ${
                  i === 3 ? "italic text-white/90" : "text-white"
                }`}
                style={{
                  fontFamily: "var(--font-display-playfair)",
                  transformOrigin: "bottom center",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Decorative thin line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 h-px w-16 origin-center bg-white/[0.08] sm:mt-16"
        />

        {/* Solara pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-xl text-center sm:mt-16"
        >
          {/* "Solara AI" with subtle luminous treatment */}
          <p className="text-[clamp(1.2rem,2.2vw,1.5rem)] leading-[1.55] text-white/40 font-[family-name:var(--font-body)] font-light">
            <span
              className="relative inline-block font-normal text-white/90"
              style={{ fontFamily: "var(--font-display-playfair)" }}
            >
              Solara AI
              {/* Soft glow behind the name */}
              <span
                className="pointer-events-none absolute -inset-x-4 -inset-y-1 -z-10 rounded-full opacity-20 blur-xl"
                style={{
                  background: "radial-gradient(ellipse at center, #d8ad67 0%, transparent 70%)",
                }}
              />
            </span>
            &ensp;&mdash;&ensp;the AI for marketing.
          </p>

          <p className="mt-7 text-[clamp(0.95rem,1.6vw,1.1rem)] leading-[1.7] text-white/30 font-[family-name:var(--font-body)] font-light">
            Stop burying yourself in endless tasks, wasting time, money, and your sanity trying to figure out marketing&nbsp;&mdash; and start watching it actually work for you.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 flex flex-col items-center gap-5 sm:mt-18"
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-4 text-[0.92rem] font-semibold text-[#0d0b08] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.12)] font-[family-name:var(--font-body)]"
          >
            Get started free
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <span className="text-[0.68rem] font-medium tracking-[0.08em] text-white/15 font-[family-name:var(--font-body)]">
            No credit card &middot; 2 min setup
          </span>
        </motion.div>

        {/* Bottom decorative detail */}
        <div className="mx-auto mt-28 flex items-center justify-center gap-3 sm:mt-40">
          <div className="h-px w-6 bg-white/[0.04]" />
          <div className="h-1 w-1 rounded-full bg-white/[0.06]" />
          <div className="h-px w-6 bg-white/[0.04]" />
        </div>
      </div>
    </section>
  );
}
