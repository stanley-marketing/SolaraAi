"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { SOLARA_PLUS_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SolaraPlusClosingCta() {
  const { headline, sub, cta } = SOLARA_PLUS_CONTENT.closingCta;
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="relative overflow-hidden bg-[#040404] px-6 py-28 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.035,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(130,100,240,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={noMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.08,
            color: "white",
            marginBottom: "1.25rem",
          }}
        >
          {headline}
        </motion.h2>

        <motion.p
          initial={noMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          className="mx-auto mb-10 max-w-[52ch] text-[1.0625rem] leading-relaxed text-white/70"
        >
          {sub}
        </motion.p>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
        >
          <Link
            href={cta.href}
            className="group inline-flex items-center gap-2 rounded-[999px] bg-white px-6 py-3 text-[14px] font-medium tracking-[1px] text-[#040404] transition-all duration-200 hover:bg-gray-100 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {cta.label}
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
        </motion.div>
      </div>
    </section>
  );
}
