"use client";

import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   EXACT COPY — do not change a single word
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
   PARTICLES
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

/* Option A — drift upward (30-50 dots) */
const PARTICLES_A: ParticleData[] = Array.from({ length: 45 }, (_, i): ParticleData => {
  const dur = 16 + ((i * 7 + (i % 4)) % 15);
  return {
    id: i,
    pos: Math.round((i * 61.8) % 100 * 100) / 100,
    size: 1.5 + (i % 3) * 1.2,
    opacity: 0.14 + (i % 5) * 0.08,
    duration: dur,
    delay: -Math.round((i / 45) * dur * 100) / 100,
    color:
      i % 3 === 0
        ? "rgba(168,85,247,0.85)"
        : i % 3 === 1
        ? "rgba(236,72,153,0.7)"
        : "rgba(255,255,255,0.55)",
  };
});

/* Option E — drift sideways (50 dots) */
const PARTICLES_E: ParticleData[] = Array.from({ length: 52 }, (_, i): ParticleData => {
  const dur = 18 + ((i * 9 + (i % 5)) % 16);
  return {
    id: i,
    pos: Math.round((i * 47.3) % 100 * 100) / 100,
    size: 1.4 + (i % 4) * 0.9,
    opacity: 0.1 + (i % 6) * 0.07,
    duration: dur,
    delay: -Math.round((i / 52) * dur * 100) / 100,
    color:
      i % 4 === 0
        ? "rgba(168,85,247,0.8)"
        : i % 4 === 1
        ? "rgba(236,72,153,0.7)"
        : i % 4 === 2
        ? "rgba(251,146,60,0.6)"
        : "rgba(255,255,255,0.45)",
  };
});

/* ──────────────────────────────────────────────
   CSS KEYFRAMES (inline <style> tag)
   ────────────────────────────────────────────── */

const KEYFRAMES = `
  /* ═══ A — aurora glows + upward particles ═══ */
  @keyframes oa-blob1 {
    0%   { transform: translate(-30px, -20px) scale(1.00); }
    25%  { transform: translate(55px,   28px) scale(1.08); }
    50%  { transform: translate(18px,   72px) scale(0.95); }
    75%  { transform: translate(-42px,  26px) scale(1.04); }
    100% { transform: translate(-30px, -20px) scale(1.00); }
  }
  @keyframes oa-blob2 {
    0%   { transform: translate(22px,  32px) scale(1.00); }
    33%  { transform: translate(-58px, 48px) scale(1.07); }
    66%  { transform: translate(34px, -28px) scale(0.96); }
    100% { transform: translate(22px,  32px) scale(1.00); }
  }
  @keyframes oa-particle-rise {
    from { transform: translateY(0px); }
    to   { transform: translateY(-110vh); }
  }
  @keyframes oa-glow-breathe {
    0%,100% { opacity: 0.18; }
    50%     { opacity: 0.35; }
  }

  /* ═══ B — grain shimmer ═══ */
  @keyframes ob-grain {
    0%,100% { transform: translate(0,0); }
    10%     { transform: translate(-2%, -3%); }
    30%     { transform: translate(3%, -1%); }
    50%     { transform: translate(-1%, 2%); }
    70%     { transform: translate(2%, 3%); }
    90%     { transform: translate(-3%, 1%); }
  }

  /* ═══ C — dot grid breathe + card float ═══ */
  @keyframes oc-dot-pulse {
    0%,100% { opacity: 0.04; }
    50%     { opacity: 0.11; }
  }
  @keyframes oc-card-float {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-7px); }
  }

  /* ═══ D — no extra keyframes needed ═══ */

  /* ═══ E — cinematic blobs + sideways particles ═══ */
  @keyframes oe-blob1 {
    0%,100% { transform: translate(0px,   0px); }
    33%     { transform: translate(68px,  52px); }
    66%     { transform: translate(-38px, 88px); }
  }
  @keyframes oe-blob2 {
    0%   { transform: translate(0px,   0px)  scale(1.00); }
    25%  { transform: translate(-58px, 42px) scale(1.10); }
    50%  { transform: translate(28px,  78px) scale(0.90); }
    75%  { transform: translate(68px, -32px) scale(1.05); }
    100% { transform: translate(0px,   0px)  scale(1.00); }
  }
  @keyframes oe-blob3 {
    0%,100% { transform: scale(0.85) rotate(0deg);   }
    50%     { transform: scale(1.14) rotate(180deg); }
  }
  @keyframes oe-breathe {
    0%,100% { opacity: 0.13; }
    50%     { opacity: 0.26; }
  }
  @keyframes oe-particle-sideways {
    from { transform: translateX(0px); }
    to   { transform: translateX(110vw); }
  }
`;

/* ──────────────────────────────────────────────
   SHARED: OPTION DIVIDER
   ────────────────────────────────────────────── */

function OptionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center py-5" style={{ background: "#0e0e0e" }}>
      <div className="flex w-full max-w-6xl items-center gap-5 px-6">
        <div style={{ flex: 1, height: "1px", background: "#1e1e1e" }} />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: "#444", whiteSpace: "nowrap" }}
        >
          {label}
        </span>
        <div style={{ flex: 1, height: "1px", background: "#1e1e1e" }} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   OPTION A — "Gradient Glow"
   Dark (#0a0a0a) · Aurora blobs drift slowly · 45 rising
   particles · Headline white · "You need Solara." in brand
   gradient · White pill CTA · Neutral border secondary CTA
   ══════════════════════════════════════════════════════════ */

function OptionA() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-28"
      style={{ background: "#0a0a0a" }}
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
            "radial-gradient(ellipse, rgba(168,85,247,0.26) 0%, rgba(236,72,153,0.14) 50%, transparent 72%)",
          filter: "blur(105px)",
          animation: "oa-blob1 21s ease-in-out infinite",
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
            "radial-gradient(ellipse, rgba(251,146,60,0.2) 0%, rgba(236,72,153,0.12) 50%, transparent 72%)",
          filter: "blur(115px)",
          animation: "oa-blob2 19s ease-in-out infinite",
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
            "radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, rgba(236,72,153,0.07) 55%, transparent 78%)",
          filter: "blur(65px)",
          animation: "oa-glow-breathe 6s ease-in-out infinite",
        }}
      />

      {/* Particles rising upward */}
      {PARTICLES_A.map((p) => (
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
            animation: `oa-particle-rise ${p.duration}s linear ${p.delay}s infinite`,
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
          style={{ color: "#ffffff" }}
        >
          {HEADLINE}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed"
          style={{ color: "#737373" }}
        >
          {BODY_1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-2xl text-xl font-semibold leading-relaxed"
          style={{ color: "#e5e5e5" }}
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
          style={{ color: "#525252" }}
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
              background: "#ffffff",
              color: "#0a0a0a",
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
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-200 hover:bg-white/8"
            style={{
              background: "transparent",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.28)",
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
          style={{ color: "#525252" }}
        >
          {REASSURANCE}
        </motion.p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   OPTION B — "Split Contrast"
   Left dark (#0a0a0a) · Right white (#fafafa) · Vertical
   2px brand gradient split line · Grain texture on both ·
   Left slides from left, right from right on mount ·
   Mobile stacks vertically (dark top, light bottom)
   ══════════════════════════════════════════════════════════ */

function OptionB() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden md:flex-row">
      {/* Grain overlay — both halves */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          animation: "ob-grain 9s steps(2) infinite",
        }}
      />

      {/* LEFT half — dark */}
      <motion.div
        initial={{ x: -70, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-1 flex-col justify-center px-8 py-24 md:px-16"
        style={{ background: "#0a0a0a" }}
      >
        <div className="mx-auto w-full max-w-lg">
          <h2
            className="text-5xl font-bold leading-tight tracking-tight md:text-[3.5rem]"
            style={{ color: "#ffffff" }}
          >
            {HEADLINE}
          </h2>

          <div
            className="mt-5"
            style={{
              width: "50px",
              height: "2px",
              background:
                "linear-gradient(to right, #a855f7, #ec4899, #fb923c)",
              borderRadius: "2px",
            }}
          />

          <p
            className="mt-8 text-lg leading-relaxed"
            style={{ color: "#6b6b6b" }}
          >
            {BODY_1}
          </p>

          <p
            className="mt-4 text-xl font-semibold leading-relaxed"
            style={{ color: "#d4d4d4" }}
          >
            You don&apos;t need a department anymore.{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              You need Solara.
            </span>
          </p>

          <p
            className="mt-5 text-sm uppercase"
            style={{
              color: "#3a3a3a",
              letterSpacing: "0.18em",
            }}
          >
            {SUBLINE}
          </p>
        </div>
      </motion.div>

      {/* Brand gradient split line — desktop only */}
      <div
        className="relative z-30 hidden md:block"
        style={{
          width: "2px",
          flexShrink: 0,
          background:
            "linear-gradient(to bottom, transparent 5%, #a855f7 22%, #ec4899 50%, #fb923c 78%, transparent 95%)",
        }}
      />

      {/* RIGHT half — light */}
      <motion.div
        initial={{ x: 70, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center justify-center px-8 py-24 md:w-[42%] md:flex-none md:px-14"
        style={{ background: "#fafafa" }}
      >
        <div className="w-full max-w-xs">
          <p
            className="mb-8 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: "#b0b0b0" }}
          >
            Ready to start?
          </p>

          <a
            href={CTA_PRIMARY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center px-8 py-4 text-base font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
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
            className="mt-3 flex w-full items-center justify-center px-8 py-4 text-base font-medium transition-all duration-200 hover:bg-black/5"
            style={{
              background: "transparent",
              color: "#0a0a0a",
              border: "1.5px solid #222",
              borderRadius: "999px",
            }}
          >
            {CTA_SECONDARY_TEXT}
          </a>

          <p
            className="mt-9 text-center text-sm leading-relaxed"
            style={{ color: "#a3a3a3" }}
          >
            {REASSURANCE}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   OPTION C — "Elevated Card"
   Off-white bg (#fafafa) · Breathing dot grid · Content
   floats inside a large card (white, soft shadow) with a
   1-2px brand gradient border · Card slowly bobs · Inner
   elements stagger in on enter
   ══════════════════════════════════════════════════════════ */

function OptionC() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{ background: "#fafafa" }}
    >
      {/* Breathing dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          animation: "oc-dot-pulse 6s ease-in-out infinite",
        }}
      />

      {/* Gradient border wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-4xl"
        style={{
          padding: "2px",
          background:
            "linear-gradient(135deg, rgba(168,85,247,0.65) 0%, rgba(236,72,153,0.55) 45%, rgba(251,146,60,0.45) 100%)",
          borderRadius: "20px",
          animation: "oc-card-float 7s ease-in-out infinite",
          boxShadow:
            "0 32px 90px rgba(0,0,0,0.07), 0 6px 24px rgba(168,85,247,0.1)",
        }}
      >
        {/* Inner white card */}
        <div
          className="w-full p-12 md:p-16"
          style={{
            background: "#ffffff",
            borderRadius: "18px",
          }}
        >
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.11, delayChildren: 0.25 },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-5xl font-bold leading-tight tracking-tight md:text-6xl"
              style={{ color: "#111111" }}
            >
              {HEADLINE}
            </motion.h2>

            <motion.div
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mx-auto mt-6"
              style={{ transformOrigin: "center" }}
            >
              <div
                style={{
                  width: "54px",
                  height: "2px",
                  margin: "0 auto",
                  background:
                    "linear-gradient(to right, #a855f7, #ec4899, #fb923c)",
                  borderRadius: "2px",
                }}
              />
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed"
              style={{ color: "#737373" }}
            >
              {BODY_1}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              className="mx-auto mt-4 max-w-xl text-xl font-semibold leading-relaxed"
              style={{ color: "#111111" }}
            >
              You don&apos;t need a department anymore.{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                You need Solara.
              </span>
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } },
              }}
              className="mt-5 text-sm uppercase tracking-[0.2em]"
              style={{ color: "#b0b0b0" }}
            >
              {SUBLINE}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <a
                href={CTA_PRIMARY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
                style={{
                  background: "#111111",
                  color: "#ffffff",
                  borderRadius: "999px",
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
                  color: "#111111",
                  border: "1.5px solid #e0e0e0",
                  borderRadius: "999px",
                }}
              >
                {CTA_SECONDARY_TEXT}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Reassurance below card */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 mt-8 text-center text-sm"
        style={{ color: "#b0b0b0" }}
      >
        {REASSURANCE}
      </motion.p>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   OPTION D — "Bold Typography"
   White/off-white · Headline text-8xl/9xl, black, bold ·
   60px brand gradient accent line below it · Two editorial
   columns for body copy · "You need Solara." in gradient ·
   Headline scales in 0.97→1, columns stagger in
   ══════════════════════════════════════════════════════════ */

function OptionD() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-28"
      style={{ background: "#fafafa" }}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* MASSIVE headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl font-black leading-[0.93] tracking-tighter md:text-8xl lg:text-9xl"
          style={{ color: "#111111" }}
        >
          {HEADLINE}
        </motion.h2>

        {/* Brand gradient accent line — draws left to right */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
          style={{
            transformOrigin: "left center",
            width: "72px",
            height: "3px",
            background:
              "linear-gradient(to right, #a855f7, #ec4899, #fb923c)",
            borderRadius: "3px",
          }}
        />

        {/* Two-column editorial body */}
        <motion.div
          className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16, delayChildren: 0.7 },
            },
          }}
        >
          {/* Column 1 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
            className="text-xl leading-relaxed"
            style={{ color: "#737373" }}
          >
            {BODY_1}
          </motion.p>

          {/* Column 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <p
              className="text-xl font-semibold leading-relaxed"
              style={{ color: "#111111" }}
            >
              You don&apos;t need a department anymore.{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text font-bold text-transparent">
                You need Solara.
              </span>
            </p>
            <p
              className="mt-4 text-sm uppercase"
              style={{ color: "#b0b0b0", letterSpacing: "0.18em" }}
            >
              {SUBLINE}
            </p>
          </motion.div>
        </motion.div>

        {/* CTAs + reassurance row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={CTA_PRIMARY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 text-base font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
            style={{
              background: "#111111",
              color: "#ffffff",
              borderRadius: "999px",
            }}
          >
            {CTA_PRIMARY_TEXT}
          </a>
          <a
            href={CTA_SECONDARY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 text-base font-medium transition-all duration-200 hover:bg-black/5"
            style={{
              background: "transparent",
              color: "#111111",
              border: "1.5px solid #d0d0d0",
              borderRadius: "999px",
            }}
          >
            {CTA_SECONDARY_TEXT}
          </a>
          <span
            className="hidden text-sm sm:block"
            style={{ color: "#b0b0b0" }}
          >
            {REASSURANCE}
          </span>
        </motion.div>

        {/* Reassurance — mobile only */}
        <p
          className="mt-5 text-sm sm:hidden"
          style={{ color: "#b0b0b0" }}
        >
          {REASSURANCE}
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   OPTION E — "Cinematic Close"
   Near-black (#050508) · 3 drifting aurora blobs (brand
   palette, 12-18% opacity) · 52 particles drifting sideways
   · Center breathing glow · "Solara" glows with text-shadow
   · Primary CTA = brand gradient pill · Most dramatic option
   ══════════════════════════════════════════════════════════ */

function OptionE() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 md:py-40"
      style={{ background: "#050508" }}
    >
      {/* Aurora blob 1 — purple, upper-left */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-6%",
          left: "-7%",
          width: "540px",
          height: "540px",
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.16) 0%, transparent 65%)",
          filter: "blur(120px)",
          animation: "oe-blob1 21s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 2 — pink, lower-right */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "-12%",
          right: "-6%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(236,72,153,0.14) 0%, transparent 65%)",
          filter: "blur(115px)",
          animation: "oe-blob2 26s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 3 — orange, mid-right */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "38%",
          right: "10%",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(ellipse, rgba(251,146,60,0.12) 0%, transparent 65%)",
          filter: "blur(100px)",
          animation: "oe-blob3 19s ease-in-out infinite",
        }}
      />

      {/* Center breathing glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "760px",
          height: "360px",
          background:
            "radial-gradient(ellipse at center, rgba(168,85,247,0.1) 0%, transparent 72%)",
          filter: "blur(70px)",
          animation: "oe-breathe 7s ease-in-out infinite",
        }}
      />

      {/* Particles drifting sideways */}
      {PARTICLES_E.map((p) => (
        <div
          key={p.id}
          className="pointer-events-none absolute"
          style={{
            top: `${p.pos}%`,
            left: "-12px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `oe-particle-sideways ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-bold leading-tight tracking-tight md:text-6xl"
          style={{ color: "#ffffff" }}
        >
          {HEADLINE}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed"
          style={{ color: "#6b6b6b" }}
        >
          {BODY_1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.52, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-xl text-xl font-semibold leading-relaxed"
          style={{ color: "#d4d4d4" }}
        >
          You don&apos;t need a department anymore. You need{" "}
          <span
            style={{
              color: "#e2d4ff",
              fontWeight: 700,
              textShadow:
                "0 0 28px rgba(168,85,247,0.45), 0 0 58px rgba(168,85,247,0.2)",
            }}
          >
            Solara.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.68 }}
          className="mt-5 text-sm uppercase tracking-[0.22em]"
          style={{ color: "#3a3a3a" }}
        >
          {SUBLINE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={CTA_PRIMARY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 text-base font-bold transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.97]"
            style={{
              background:
                "linear-gradient(to right, #a855f7, #ec4899, #fb923c)",
              color: "#ffffff",
              borderRadius: "999px",
            }}
          >
            {CTA_PRIMARY_TEXT}
          </a>
          <a
            href={CTA_SECONDARY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 text-base font-medium transition-all duration-200 hover:bg-white/8"
            style={{
              background: "transparent",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.22)",
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
          style={{ color: "#3a3a3a" }}
        >
          {REASSURANCE}
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
        style={{ background: "#111111", borderBottom: "1px solid #1e1e1e" }}
      >
        <h1
          className="text-2xl font-semibold tracking-tight"
          style={{ color: "#e5e5e5" }}
        >
          Final CTA Section — 5 Options
        </h1>
        <p className="mt-2 text-sm" style={{ color: "#555" }}>
          5 visual options — scroll to compare
        </p>
      </div>

      <OptionDivider label="Option A — Gradient Glow (Dark + Aurora Blobs + Rising Particles)" />
      <OptionA />

      <OptionDivider label="Option B — Split Contrast (Two-tone + Grain Texture + Slide Entrance)" />
      <OptionB />

      <OptionDivider label="Option C — Elevated Card (Dot Grid + Gradient Border + Floating Card)" />
      <OptionC />

      <OptionDivider label="Option D — Bold Typography (Statement Headline + Editorial Two-column)" />
      <OptionD />

      <OptionDivider label="Option E — Cinematic Close (Dark + Multi-blob + Sideways Particles + Solara Glow)" />
      <OptionE />
    </div>
  );
}
