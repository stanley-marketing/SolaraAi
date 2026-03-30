"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PLATFORM_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const VIEW_ONCE = { once: true, margin: "-60px" };

const { cta } = PLATFORM_CONTENT;

export function PlatformCta() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="relative overflow-hidden bg-[#040404] px-6 py-28 text-white sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 15%, rgba(56,96,255,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={noMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-400/70"
        >
          Ready to start
        </motion.p>

        <motion.h2
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
          className="mb-6 text-white"
          style={{
            fontFamily: "var(--font-display-playfair)",
            fontSize: "clamp(1.9rem, 4vw, 3.25rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
          }}
        >
          {cta.headline}
        </motion.h2>

        <motion.p
          initial={noMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="mx-auto mb-10 max-w-lg text-white/65"
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.72 }}
        >
          {cta.sub}
        </motion.p>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href={cta.primary.href}
            aria-label="Get started with the platform"
            className="group inline-flex items-center gap-2 rounded-[999px] bg-white px-7 py-3.5 text-[14px] font-medium tracking-[0.5px] text-[#040404] transition-all duration-200 hover:bg-white/90 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {cta.primary.label}
            <svg
              className="h-3.5 w-0 opacity-0 transition-all duration-200 group-hover:w-3.5 group-hover:opacity-100"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7h12m0 0L8.5 2.5M13 7l-4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href={cta.secondary.href}
            className="inline-flex items-center rounded-[999px] border border-white/20 px-7 py-3.5 text-[14px] font-medium text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            {cta.secondary.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
