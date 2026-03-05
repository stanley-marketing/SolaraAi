"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ClosingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const titleY = useTransform(scrollYProgress, [0.15, 0.6], [60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.4, 0.55], [24, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0d0b08] py-40 sm:py-56"
    >
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Faint radial glow at center */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-10">
        {/* Small overline */}
        <motion.span
          style={{ opacity: subtitleOpacity }}
          className="inline-block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/25"
        >
          The future is already running
        </motion.span>

        {/* Dramatic headline */}
        <motion.h2
          style={{ y: titleY, opacity: titleOpacity }}
          className="mx-auto mt-8 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] leading-[0.92] tracking-[-0.03em] text-white"
        >
          <span style={{ fontFamily: "var(--font-display-playfair)" }}>
            Stop managing<br />marketing.
          </span>
        </motion.h2>

        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="mx-auto mt-8 max-w-lg text-[clamp(1rem,1.8vw,1.2rem)] leading-[1.6] text-white/40 font-[family-name:var(--font-body)]"
        >
          Let Solara run it for you — smarter, faster, and at a fraction of the cost.
        </motion.p>

        {/* CTA */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-10 py-4.5 text-[0.95rem] font-semibold text-[#0d0b08] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] font-[family-name:var(--font-body)]"
          >
            Start your free trial
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

          <span className="text-[0.72rem] font-medium tracking-[0.06em] text-white/20 font-[family-name:var(--font-body)]">
            No credit card required &middot; Setup in 2 minutes
          </span>
        </motion.div>

        {/* Decorative bottom line */}
        <div className="mx-auto mt-32 h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
