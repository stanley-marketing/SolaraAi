"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { AGENCY_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const { cta } = AGENCY_CONTENT;

export function AgencyCta() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="relative overflow-hidden bg-[#0a0e0c] px-6 py-28 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.14) 0%, transparent 68%), radial-gradient(ellipse 60% 50% at 15% 90%, rgba(5,150,105,0.12) 0%, transparent 65%)",
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

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={noMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: "rgba(16,185,129,0.7)" }}
        >
          Ready to grow?
        </motion.p>

        <motion.h2
          initial={noMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          style={{
            fontFamily: "var(--font-display-playfair), Georgia, serif",
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.08,
            color: "white",
            marginBottom: "1.25rem",
          }}
        >
          {cta.headline}
        </motion.h2>

        <motion.p
          initial={noMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
          className="mx-auto mb-10 max-w-[52ch] text-[1.0625rem] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {cta.sub}
        </motion.p>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href={cta.cta.href}
            aria-label="Book a strategy call"
            className="group inline-flex items-center gap-2 rounded-[999px] bg-white px-6 py-3 text-[14px] font-medium tracking-[0.5px] text-[#0a0e0c] transition-all duration-200 hover:bg-white/90 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {cta.cta.label}
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
            className="inline-flex items-center rounded-[999px] border border-white/20 px-6 py-3 text-[14px] font-medium text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            {cta.secondary.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
