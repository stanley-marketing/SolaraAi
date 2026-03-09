"use client";

import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   COPY
   ────────────────────────────────────────────── */

const LABEL = "Why We Built This";
const HEADLINE = "We raised our hand.";
const HEADLINE_WORDS = ["We", "raised", "our", "hand."];

const MANIFESTO_LINES: Array<{ text: string; group: number }> = [
  { text: "We looked at how far marketing hadn\u2019t come", group: 0 },
  { text: "for small businesses and decided to fix it.", group: 0 },
  { text: "", group: -1 },
  { text: "No AI buzzwords.", group: 1 },
  { text: "No overwhelming stacks.", group: 1 },
  { text: "No agency markup on work AI does better.", group: 1 },
  { text: "", group: -1 },
  { text: "The best of cutting-edge technology", group: 2 },
  { text: "and human expertise \u2014", group: 2 },
  { text: "built into one system \u2014", group: 2 },
  { text: "finally within reach.", group: 2 },
];

/* ──────────────────────────────────────────────
   PRECOMPUTED DELAY ARRAYS (avoids mutation in render)
   ────────────────────────────────────────────── */

const G_LINE_DELAYS: Array<number | null> = (() => {
  let idx = 0;
  return MANIFESTO_LINES.map((line) => {
    if (line.group === -1) return null;
    return (idx++) * 0.08;
  });
})();

const I_LINE_DELAYS: Array<number | null> = (() => {
  let idx = 0;
  return MANIFESTO_LINES.map((line) => {
    if (line.group === -1) return null;
    return 1.1 + (idx++) * 0.1;
  });
})();

/* ──────────────────────────────────────────────
   PARTICLES (Option I) — deterministic golden-ratio spread
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
    size: 1 + (i % 3),
    opacity: 0.08 + (i % 5) * 0.055,
    duration,
    delay: -Math.round((i / 200) * duration * 100) / 100,
    color: i % 3 === 0 ? "rgba(168,85,247,0.85)" : "rgba(255,255,255,0.85)",
  };
});

/* ──────────────────────────────────────────────
   CSS KEYFRAMES (injected via <style> tag)
   ────────────────────────────────────────────── */

const KEYFRAMES = `
  /* ═══ Option G — dot grid + blob ═══ */
  @keyframes og-dot-pulse {
    0%,100% { opacity: 0.07; }
    50%     { opacity: 0.18; }
  }
  @keyframes og-blob-drift {
    0%   { transform: translate(-40px, -30px) scale(1.00); }
    25%  { transform: translate(70px,  20px)  scale(1.06); }
    50%  { transform: translate(15px,  85px)  scale(0.96); }
    75%  { transform: translate(-50px, 40px)  scale(1.03); }
    100% { transform: translate(-40px, -30px) scale(1.00); }
  }

  /* ═══ Option H — morphing aurora ═══ */
  @keyframes oh-blob1 {
    0%,100% { transform: translate(0px, 0px); }
    33%     { transform: translate(80px, 65px); }
    66%     { transform: translate(-45px, 110px); }
  }
  @keyframes oh-blob2 {
    0%   { transform: translate(0px, 0px); }
    25%  { transform: translate(-70px, 55px); }
    50%  { transform: translate(40px,  95px); }
    75%  { transform: translate(85px, -40px); }
    100% { transform: translate(0px,  0px); }
  }
  @keyframes oh-blob3 {
    0%,100% { transform: scale(0.82); }
    50%     { transform: scale(1.18); }
  }

  /* ═══ Option I — particles + glow ═══ */
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
   OPTION DIVIDER
   ────────────────────────────────────────────── */

function OptionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center py-5" style={{ background: "#111111" }}>
      <div className="flex w-full max-w-5xl items-center gap-5 px-6">
        <div style={{ flex: 1, height: "1px", background: "#232323" }} />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.25em]"
          style={{ color: "#555", whiteSpace: "nowrap" }}
        >
          {label}
        </span>
        <div style={{ flex: 1, height: "1px", background: "#232323" }} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   OPTION G — "Living Manifesto"
   Left-aligned layout. Breathing dot grid. Slowly drifting
   gradient blob. Each manifesto line scroll-reveals with
   a staggered cascade as you read down the section.
   ══════════════════════════════════════════════════════════ */

function OptionG() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24"
      style={{ background: "#080808" }}
    >
      {/* Breathing dot grid — low opacity, subtle texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "og-dot-pulse 5s ease-in-out infinite",
        }}
      />

      {/* Large gradient blob — slowly traces a gentle loop */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "10%",
          left: "35%",
          width: "580px",
          height: "520px",
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.20) 0%, rgba(236,72,153,0.11) 45%, transparent 70%)",
          filter: "blur(90px)",
          animation: "og-blob-drift 22s ease-in-out infinite",
        }}
      />

      {/* Content — left aligned */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 md:px-10">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-[0.28em]"
          style={{ color: "#525252" }}
        >
          {LABEL}
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-6xl font-bold leading-none tracking-tight md:text-7xl"
          style={{ color: "#ffffff" }}
        >
          {HEADLINE}
        </motion.h2>

        {/* Manifesto lines — each reveals as the section enters view */}
        <div className="mt-14">
          {MANIFESTO_LINES.map((line, i) => {
            if (line.group === -1) return <div key={i} style={{ height: "1.75rem" }} />;
            const delay = G_LINE_DELAYS[i] ?? 0;
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl leading-snug md:text-2xl"
                style={{ color: "#d4d4d4", lineHeight: 1.55 }}
              >
                {line.text}
              </motion.p>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   OPTION H — "Cinematic Split"
   Asymmetric two-column layout. Three large aurora blobs
   drift behind at different speeds & paths. Headline words
   appear one-by-one. Body text fades in after headline completes.
   ══════════════════════════════════════════════════════════ */

function OptionH() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{ background: "#050508" }}
    >
      {/* Aurora blob 1 — diagonal drift, upper-left */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.17) 0%, transparent 65%)",
          filter: "blur(120px)",
          animation: "oh-blob1 19s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 2 — slow circular path, lower-right */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "-14%",
          right: "-8%",
          width: "440px",
          height: "440px",
          background:
            "radial-gradient(ellipse, rgba(236,72,153,0.15) 0%, transparent 65%)",
          filter: "blur(110px)",
          animation: "oh-blob2 25s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 3 — scales in & out, center-right */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "28%",
          right: "16%",
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 65%)",
          filter: "blur(100px)",
          animation: "oh-blob3 21s ease-in-out infinite",
        }}
      />

      {/* Two-column grid */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-14 md:flex-row md:items-center md:gap-0">

          {/* LEFT — label + word-by-word headline */}
          <div className="flex flex-col justify-center md:w-[45%] md:pr-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "#525252" }}
            >
              {LABEL}
            </motion.p>

            <motion.h2
              className="mt-6 text-7xl font-bold leading-none tracking-tight md:text-[5.25rem]"
              style={{ color: "#ffffff" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.16, delayChildren: 0.2 },
                },
              }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Vertical gradient divider — hidden on mobile */}
          <div
            className="hidden md:block md:self-stretch"
            style={{
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent 0%, #2c2c2c 20%, #2c2c2c 80%, transparent 100%)",
              flexShrink: 0,
            }}
          />

          {/* RIGHT — body manifesto, fades in after headline lands */}
          <motion.div
            className="flex flex-col justify-center md:w-[55%] md:pl-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
          >
            {MANIFESTO_LINES.map((line, i) => {
              if (line.group === -1) return <div key={i} style={{ height: "0.75rem" }} />;
              return (
                <p
                  key={i}
                  className="text-lg leading-relaxed"
                  style={{ color: "#a3a3a3", lineHeight: 1.75 }}
                >
                  {line.text}
                </p>
              );
            })}
          </motion.div>

        </div>

        {/* Brand gradient rule — punctuation below the columns */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20"
          style={{ transformOrigin: "left center" }}
        >
          <div
            style={{
              width: "55%",
              height: "1px",
              background:
                "linear-gradient(to right, rgba(168,85,247,0.8), rgba(236,72,153,0.6), rgba(251,146,60,0.4), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   OPTION I — "Immersive Billboard"
   Centered, billboard-scale headline. 35 particles drift
   upward continuously. Pulsing radial glow breathes behind
   the headline. Words appear with blur-to-sharp generation.
   Manifesto lines stagger in below.
   ══════════════════════════════════════════════════════════ */

function OptionI() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{ background: "#040406" }}
    >
      {/* 35 particles — drifting upward with golden-ratio left distribution */}
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

      {/* Pulsing radial glow — centered behind headline, slowly breathing */}
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

      {/* Content — centered, billboard scale */}
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-[0.28em]"
          style={{ color: "#525252" }}
        >
          {LABEL}
        </motion.p>

        {/* Headline — blur-to-sharp word generate */}
        <motion.h2
          className="mt-8 text-8xl font-bold leading-none tracking-tight md:text-9xl"
          style={{ color: "#ffffff" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>

        {/* Body — single flowing paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 max-w-2xl text-xl leading-relaxed"
          style={{ color: "#737373" }}
        >
          We looked at how far marketing hadn&apos;t come for small businesses and decided to fix it. No AI buzzwords. No overwhelming stacks. No agency markup on work AI does better. The best of cutting-edge technology and human expertise &mdash; built into one system &mdash; finally within reach.
        </motion.p>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PREVIEW PAGE
   ══════════════════════════════════════════════ */

export default function PreviewPage() {
  return (
    <div style={{ background: "#0a0a0a" }}>
      <style>{KEYFRAMES}</style>

      {/* Page header */}
      <div
        className="px-6 py-14 text-center"
        style={{ background: "#111111", borderBottom: "1px solid #1f1f1f" }}
      >
        <h1
          className="text-2xl font-semibold tracking-tight"
          style={{ color: "#e5e5e5" }}
        >
          Section 6 — &ldquo;Why We Built This&rdquo;
        </h1>
        <p className="mt-2 text-sm" style={{ color: "#555" }}>
          3 visual options — scroll to compare
        </p>
      </div>

      <OptionDivider label="Option G — Living Manifesto (Dot Grid + Drifting Blob + Scroll Reveal)" />
      <OptionG />

      <OptionDivider label="Option H — Cinematic Split (Two-column + Morphing Aurora + Word Reveal)" />
      <OptionH />

      <OptionDivider label="Option I — Immersive Billboard (Particles + Pulsing Glow + Text Generate)" />
      <OptionI />
    </div>
  );
}
