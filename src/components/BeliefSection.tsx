"use client";

import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   COPY
   ────────────────────────────────────────────── */

const LABEL = "Why We Built This";
const HEADLINE_WORDS = ["We", "raised", "our", "hand."];

/* ──────────────────────────────────────────────
   PARTICLES — deterministic golden-ratio spread
   ────────────────────────────────────────────── */

interface ParticleData {
  id: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

const PARTICLES: ParticleData[] = Array.from({ length: 200 }, (_, i): ParticleData => {
  const duration = 16 + ((i * 7 + i % 4) % 15);
  return {
    id: i,
    left: Math.round((i * 61.8) % 100 * 100) / 100,
    size: 1.5 + (i % 3) * 1.2,
    opacity: 0.15 + (i % 5) * 0.09,
    duration,
    delay: -Math.round((i / 200) * duration * 100) / 100,
    color: i % 3 === 0 ? "rgba(168,85,247,0.85)" : "rgba(255,255,255,0.85)",
  };
});

/* ──────────────────────────────────────────────
   CSS KEYFRAMES
   ────────────────────────────────────────────── */

const KEYFRAMES = `
  @keyframes oi-particle-rise {
    from { transform: translateY(0); }
    to   { transform: translateY(-110vh); }
  }
  @keyframes oi-glow-pulse {
    0%,100% { opacity: 0.25; }
    50%     { opacity: 0.45; }
  }
`;

/* ──────────────────────────────────────────────
   BELIEF SECTION (Option I — Immersive Billboard)
   ────────────────────────────────────────────── */

export function BeliefSection() {
  return (
    <section
      id="section-06"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{ background: "#040406" }}
    >
      <style>{KEYFRAMES}</style>

      {/* Particles — drifting upward */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none absolute"
          style={{
            left: `${p.left}%`,
            bottom: 0,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `oi-particle-rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Pulsing radial glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(168,85,247,0.22) 0%, rgba(236,72,153,0.12) 50%, transparent 75%)",
          filter: "blur(80px)",
          animation: "oi-glow-pulse 5s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">

        {/* Label */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.28em]"
          style={{ color: "#525252" }}
        >
          {LABEL}
        </motion.p>

        {/* Headline — word-by-word reveal */}
        <motion.h2
          className="mt-8 text-8xl font-bold leading-none tracking-tight md:text-9xl"
          style={{ color: "#ffffff" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13, delayChildren: 0.2 },
            },
          }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              style={{ display: "inline-block", marginRight: "0.32em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Brand accent line */}
        <div
          className="mx-auto mt-10"
          style={{ transformOrigin: "center" }}
        >
          <div
            style={{
              width: "70px",
              height: "2px",
              margin: "0 auto",
              background:
                "linear-gradient(to right, rgba(168,85,247,0.9), rgba(236,72,153,0.7), rgba(251,146,60,0.5))",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Body */}
        <motion.p
          className="mx-auto mt-16 max-w-2xl text-xl leading-relaxed"
          style={{ color: "hwb(0deg 72.97% 27.03%)" }}
        >
          We looked at how far marketing hadn&apos;t come for small businesses and decided to fix it. No AI buzzwords. No overwhelming stacks. No agency markup on work AI does better. The best of cutting-edge technology and human expertise &mdash; built into one system &mdash; finally within reach.
        </motion.p>

      </div>
    </section>
  );
}
