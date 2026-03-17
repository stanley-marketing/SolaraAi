"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { SOLARA_PLUS_CONTENT } from "./content";

const { hero } = SOLARA_PLUS_CONTENT;

const SERVICE_CHIPS = [
  "Paid Ads",
  "Content Strategy",
  "Campaign Management",
  "AI Optimisation",
  "Monthly Reporting",
] as const;

export function SolaraPlusHero() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -8%, rgba(130,100,240,0.055) 0%, rgba(180,140,255,0.03) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
        >
          <div
            className="shimmer-pill"
            style={{
              position: "relative",
              overflow: "hidden",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "13px",
              fontWeight: 500,
              color: "#374151",
              borderRadius: 999,
              padding: "7px 16px",
              background: "rgba(255,255,255,0.72)",
              border: "1px solid #e5e7eb",
            }}
          >
            Managed for you
          </div>
        </motion.div>

        <motion.h1
          className="text-ink-900"
          initial={noMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.07,
            marginBottom: "1.5rem",
            maxWidth: "18ch",
          }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          className="text-neutral-500"
          initial={noMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.20, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            lineHeight: 1.72,
            maxWidth: "52ch",
            marginBottom: "2.5rem",
          }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Link
            href={hero.cta.href}
            className="group inline-flex items-center gap-2 rounded-[999px] bg-[#040404] px-6 py-3 text-[14px] font-medium tracking-[1px] text-white transition-all duration-200 hover:bg-[#1a1a1a] hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#040404]"
          >
            {hero.cta.label}
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

        <motion.div
          initial={noMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mb-20 flex items-center gap-2 text-[13px] text-neutral-400"
        >
           {hero.proofTags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="select-none text-neutral-300">
                  ·
                </span>
              )}
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="w-full"
          initial={noMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              background: "#fafafa",
              border: "1px solid #efefef",
              padding: "28px 32px",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                opacity: 0.4,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, #fafafa 100%)",
              }}
            />

            <p className="relative mb-4 text-left text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
              What we manage
            </p>

            <div className="relative flex flex-wrap gap-2">
              {SERVICE_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full bg-white text-[13px] font-medium text-ink-900 transition-all duration-200 hover:scale-[1.04] hover:shadow-md"
                  style={{
                    border: "1px solid #e5e7eb",
                    padding: "6px 14px",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    cursor: "default",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
