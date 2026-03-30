"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AD_GEN_CONTENT } from "./content";

const { cta } = AD_GEN_CONTENT;

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AdGenCta() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      className="relative overflow-hidden px-6 py-28 sm:px-10"
      style={{
        background:
          "linear-gradient(135deg, #fce7f3 0%, #ede9fe 30%, #dbeafe 60%, #d1fae5 85%, #fef3c7 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.08,
          mixBlendMode: "multiply",
        }}
      />

      {!noMotion && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              width: 320,
              height: 320,
              borderRadius: "50%",
              left: "-80px",
              bottom: "-80px",
              background:
                "radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              right: "-60px",
              top: "-60px",
              background:
                "radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              right: "20%",
              bottom: "-40px",
              background:
                "radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={noMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.028em",
            lineHeight: 1.08,
            color: "#111111",
            marginBottom: "1.25rem",
          }}
        >
          {cta.headline}
        </motion.h2>

        <motion.p
          initial={noMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
          className="mx-auto mb-10 max-w-[52ch] text-base leading-relaxed"
          style={{ color: "rgba(17,17,17,0.7)" }}
        >
          {cta.subheadline}
        </motion.p>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.22, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href={cta.cta.href}
            aria-label="Start generating AI ads"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-medium tracking-[0.5px] text-white transition-all duration-200 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            style={{
              background: "linear-gradient(120deg, #111111, #333333)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
            }}
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
            href={cta.secondaryCta.href}
            className="inline-flex items-center rounded-full px-6 py-3.5 text-[14px] font-medium transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
            style={{
              border: "1.5px solid rgba(17,17,17,0.2)",
              color: "#111111",
            }}
          >
            {cta.secondaryCta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
