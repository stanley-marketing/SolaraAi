"use client";

import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   COPY
   ────────────────────────────────────────────── */

const HEADLINE = "More marketing. More growth. Less cost.";
const BODY_1 =
  "The largest companies in the world are doubling down on marketing right now. They have entire departments for it.";
const SUBLINE = "One flat investment. Fully managed. Built to grow with you.";
const CTA_PRIMARY_TEXT = "Let's Start Growing";
const CTA_PRIMARY_HREF = "https://app.solaraai.com/auth/signup";
const CTA_SECONDARY_TEXT = "Talk To Us First";
const CTA_SECONDARY_HREF = "https://calendly.com/ilay-mor-solaraai/30min";
const REASSURANCE = "No long-term lock-ins. No confusing contracts. Just growth.";

/* ──────────────────────────────────────────────
   PARTICLES — 45 dots rising upward
   ────────────────────────────────────────────── */

interface ParticleData {
  id: number;
  pos: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const PARTICLES: ParticleData[] = Array.from({ length: 45 }, (_, i): ParticleData => {
  const dur = 16 + ((i * 7 + (i % 4)) % 15);
  return {
    id: i,
    pos: Math.round(((i * 61.8) % 100) * 100) / 100,
    size: 1.5 + (i % 3) * 1.2,
    opacity: 0.14 + (i % 5) * 0.08,
    duration: dur,
    delay: -Math.round((i / 45) * dur * 100) / 100,
    color:
      i % 3 === 0
        ? "rgba(168,85,247,0.18)"
        : i % 3 === 1
          ? "rgba(200,180,220,0.14)"
          : "rgba(0,0,0,0.06)",
  };
});

/* ──────────────────────────────────────────────
   KEYFRAMES
   ────────────────────────────────────────────── */

const KEYFRAMES = `
  @keyframes cta-blob1 {
    0%   { transform: translate(-30px, -20px) scale(1.00); }
    25%  { transform: translate(55px,   28px) scale(1.08); }
    50%  { transform: translate(18px,   72px) scale(0.95); }
    75%  { transform: translate(-42px,  26px) scale(1.04); }
    100% { transform: translate(-30px, -20px) scale(1.00); }
  }
  @keyframes cta-blob2 {
    0%   { transform: translate(22px,  32px) scale(1.00); }
    33%  { transform: translate(-58px, 48px) scale(1.07); }
    66%  { transform: translate(34px, -28px) scale(0.96); }
    100% { transform: translate(22px,  32px) scale(1.00); }
  }
  @keyframes cta-particle-rise {
    from { transform: translateY(0px); }
    to   { transform: translateY(-110vh); }
  }
  @keyframes cta-glow-breathe {
    0%,100% { opacity: 0.18; }
    50%     { opacity: 0.35; }
  }
`;

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */

export function CtaSection() {
  return (
    <>
      <style>{KEYFRAMES}</style>
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-28"
        style={{ background: "#fafafa" }}
      >
        {/* Aurora blob 1 — purple, drifts upper-center */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: "-8%",
            left: "25%",
            width: "620px",
            height: "520px",
            background:
              "radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, rgba(236,72,153,0.03) 50%, transparent 72%)",
            filter: "blur(105px)",
            animation: "cta-blob1 21s ease-in-out infinite",
          }}
        />

        {/* Aurora blob 2 — orange/pink, drifts lower-right */}
        <div
          className="pointer-events-none absolute"
          style={{
            bottom: "0%",
            right: "15%",
            width: "520px",
            height: "430px",
            background:
              "radial-gradient(ellipse, rgba(251,146,60,0.05) 0%, rgba(236,72,153,0.025) 50%, transparent 72%)",
            filter: "blur(115px)",
            animation: "cta-blob2 19s ease-in-out infinite",
          }}
        />

        {/* Center breathing glow */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "820px",
            height: "380px",
            background:
              "radial-gradient(ellipse at center, rgba(168,85,247,0.04) 0%, rgba(236,72,153,0.02) 55%, transparent 78%)",
            filter: "blur(65px)",
            animation: "cta-glow-breathe 6s ease-in-out infinite",
          }}
        />

        {/* Particles rising upward */}
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="pointer-events-none absolute"
            style={{
              left: `${p.pos}%`,
              bottom: 0,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              backgroundColor: p.color,
              opacity: p.opacity,
              animation: `cta-particle-rise ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-bold leading-tight tracking-tight md:text-6xl"
            style={{ color: "#0a0a0a" }}
          >
            {HEADLINE}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            {BODY_1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-2xl text-xl font-semibold leading-relaxed"
            style={{ color: "#1a1a1a" }}
          >
            You don&apos;t need a department anymore.{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              You need Solara.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="mt-5 text-sm font-medium uppercase tracking-[0.22em]"
            style={{ color: "#6b7280" }}
          >
            {SUBLINE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={CTA_PRIMARY_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: "#0a0a0a",
                color: "#ffffff",
                borderRadius: "999px",
                letterSpacing: "0.01em",
              }}
            >
              {CTA_PRIMARY_TEXT}
            </a>
            <a
              href={CTA_SECONDARY_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-200 hover:bg-black/5"
              style={{
                background: "transparent",
                color: "#0a0a0a",
                border: "1.5px solid rgba(0,0,0,0.2)",
                borderRadius: "999px",
              }}
            >
              {CTA_SECONDARY_TEXT}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-8 text-sm"
            style={{ color: "#9ca3af" }}
          >
            {REASSURANCE}
          </motion.p>
        </div>
      </section>
    </>
  );
}
