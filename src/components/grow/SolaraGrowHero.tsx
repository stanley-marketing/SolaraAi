"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { GROW_CONTENT } from "./content";

const { hero } = GROW_CONTENT;

const HERO_STATS = [
  { value: "Expert-managed", label: "Dedicated operators" },
  { value: "AI-powered", label: "Continuous optimization" },
  { value: "Always-on", label: "Ongoing execution" },
] as const;

export function SolaraGrowHero() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;
  const headlineParts = hero.headline.split("Managed by AI");

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#040404] px-6 pb-24 pt-36 text-white sm:px-10 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/grow/hero-constellation.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.4,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 6%, rgba(23,233,193,0.2) 0%, rgba(64,114,255,0.13) 30%, rgba(4,4,4,0.9) 72%), linear-gradient(180deg, rgba(10,10,16,0.56) 0%, rgba(4,4,4,0.95) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.06,
        }}
      />

      {!noMotion && (
        <>
          <span className="absolute left-[14%] top-36 h-2 w-2 animate-ping rounded-full bg-emerald-200/80" />
          <span
            className="absolute right-[12%] top-56 h-1.5 w-1.5 animate-ping rounded-full bg-cyan-200/75"
            style={{ animationDelay: "0.8s" }}
          />
          <span
            className="absolute left-[24%] top-[24rem] h-1.5 w-1.5 animate-ping rounded-full bg-white/80"
            style={{ animationDelay: "1.3s" }}
          />
        </>
      )}

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
              color: "#e6edf7",
              borderRadius: 999,
              padding: "7px 16px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.24)",
              backdropFilter: "blur(8px)",
            }}
          >
            Managed for you
          </div>
        </motion.div>

        <motion.h1
          className="text-white"
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
            textWrap: "balance",
          }}
        >
          {headlineParts.length > 1 ? (
            <>
              {headlineParts[0]}
              <em style={{ fontStyle: "italic", color: "#9ae6ff" }}>Managed by AI</em>
              {headlineParts[1]}
            </>
          ) : (
            hero.headline
          )}
        </motion.h1>

        <motion.p
          className="text-white/75"
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
            className="group inline-flex items-center gap-2 rounded-[999px] bg-white px-6 py-3 text-[14px] font-medium tracking-[1px] text-[#040404] transition-all duration-200 hover:bg-white/90 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
          initial={noMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {HERO_STATS.map((item) => (
            <div
              key={item.value}
              className="rounded-2xl p-5 text-center"
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                background:
                  "linear-gradient(150deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 55%, rgba(16,185,129,0.09) 100%)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-[clamp(1rem,2.3vw,1.3rem)] font-semibold leading-tight text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                {item.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/60">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
