"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PLATFORM_CONTENT } from "./content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const VIEW_ONCE = { once: true, margin: "-60px" };

const { proof } = PLATFORM_CONTENT;

export function PlatformProof() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-10" style={{ background: "#040404" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 100%, rgba(16,185,129,0.14) 0%, transparent 65%), radial-gradient(ellipse 55% 40% at 15% 20%, rgba(56,96,255,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.04,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-400/70">
            {proof.badge}
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "var(--font-display-playfair)",
              fontSize: "clamp(1.9rem, 4vw, 3.25rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            {proof.headline}
          </h2>
        </motion.div>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {proof.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={noMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW_ONCE}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: EASE }}
              className="rounded-2xl p-6 text-center"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(150deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 60%, rgba(16,185,129,0.08) 100%)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-bold leading-tight text-white"
                style={{ letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mx-auto max-w-2xl rounded-2xl p-7 sm:p-9"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="mb-5 flex items-center gap-4">
            <Image
              src="/images/omer.webp"
              alt="Omer — Maison Remodeling"
              width={48}
              height={48}
              className="rounded-full"
              style={{ border: "2px solid rgba(52,211,153,0.3)" }}
            />
            <div>
              <p className="text-[0.9rem] font-medium text-white">Omer</p>
              <span
                className="inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300"
                style={{ border: "1px solid rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.08)" }}
              >
                {proof.client}
              </span>
            </div>
          </div>
          <p className="mb-4 text-[0.95rem] leading-relaxed text-white/80">
            {proof.body1}
          </p>
          <p className="text-[0.9rem] leading-relaxed text-white/55">
            {proof.body2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
