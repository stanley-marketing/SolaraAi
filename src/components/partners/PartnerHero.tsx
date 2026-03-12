"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────────────────────
   PartnerHero
   Two variants:
     useGlobe=false (default) — clean light split-layout hero
     useGlobe=true            — split layout with animated CSS
                                globe on the right; no external
                                globe packages required.
   Motion: load-time fade-up / fade-in only (no whileInView).
   Globe: pure SVG + CSS radial gradients — premium, no deps.
   ────────────────────────────────────────────────────────────── */

interface CtaButton {
  label: string;
  href: string;
}

interface PartnerHeroProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: CtaButton;
  secondaryCta?: CtaButton;
  useGlobe?: boolean;
}

/* ── Computed globe geometry ───────────────────────────────────
   Latitude ellipses: perspective-projected rings at regular
   intervals along the globe's vertical axis.
   Meridian ellipses: vertical great-circles at varying angles
   from the viewpoint, clipped to the sphere.                  */

const R = 152; // globe radius in SVG units
const CX = 200;
const CY = 200;
const PERSP = 0.30; // vertical squish factor — simulates downward viewing angle

// Normalised vertical positions for latitude rings
const LAT_T = [-0.72, -0.48, -0.22, 0.05, 0.32, 0.58];
const latRings = LAT_T.map((t) => ({
  cy: CY + t * R,
  rx: Math.round(Math.sqrt(1 - t * t) * R),
  ry: Math.round(Math.sqrt(1 - t * t) * R * PERSP),
}));

// Meridians represented as vertical ellipses of varying widths
// (rx = sin(θ) × R where θ is angle from front axis)
const MERID_RX = [38, 78, 112, 140, 152];

/* ── CssGlobe ──────────────────────────────────────────────── */
function CssGlobe() {
  return (
    <div
      style={{
        position: "relative",
        width: 400,
        height: 400,
        flexShrink: 0,
      }}
    >
      {/* Dot-particle field — large, extends past globe edge */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -48,
          width: "calc(100% + 96px)",
          height: "calc(100% + 96px)",
          opacity: 0.42,
          pointerEvents: "none",
        }}
      >
        <defs>
          <pattern
            id="globe-dot-field"
            x="0"
            y="0"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#111827" />
          </pattern>
          {/* Radial mask so dots fade toward edges */}
          <radialGradient id="dot-mask-grad" cx="50%" cy="50%" r="50%">
            <stop offset="10%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dot-mask">
            <rect width="100%" height="100%" fill="url(#dot-mask-grad)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#globe-dot-field)"
          mask="url(#dot-mask)"
        />
      </svg>

      {/* Outer glow ring */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 8,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.13) 0%, rgba(236,72,153,0.07) 50%, transparent 75%)",
          filter: "blur(28px)",
        }}
      />

      {/* Globe SVG */}
      <svg
        viewBox="0 0 400 400"
        width="400"
        height="400"
        style={{ position: "relative", zIndex: 1 }}
        aria-hidden="true"
      >
        <defs>
          {/* Sphere surface gradient — light from top-left */}
          <radialGradient id="sphere-fill" cx="36%" cy="28%" r="72%">
            <stop offset="0%" stopColor="#faf8ff" />
            <stop offset="38%" stopColor="#ede8fd" />
            <stop offset="78%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#a78bfa" />
          </radialGradient>

          {/* Edge-darkening vignette for depth */}
          <radialGradient id="sphere-edge" cx="50%" cy="50%" r="50%">
            <stop offset="68%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(88, 28, 235, 0.20)" />
          </radialGradient>

          {/* Clip path — everything on globe surface */}
          <clipPath id="globe-clip">
            <circle cx={CX} cy={CY} r={R} />
          </clipPath>
        </defs>

        {/* 1. Base sphere fill */}
        <circle cx={CX} cy={CY} r={R} fill="url(#sphere-fill)" />

        {/* 2. Grid lines clipped to sphere */}
        <g clipPath="url(#globe-clip)" opacity="0.22">
          {/* Latitude rings */}
          {latRings.map((ring, i) => (
            <ellipse
              key={`lat-${i}`}
              cx={CX}
              cy={ring.cy}
              rx={ring.rx}
              ry={ring.ry}
              fill="none"
              stroke="#6d28d9"
              strokeWidth="0.9"
            />
          ))}

          {/* Meridian arcs */}
          {MERID_RX.map((rx, i) => (
            <ellipse
              key={`mer-${i}`}
              cx={CX}
              cy={CY}
              rx={rx}
              ry={R}
              fill="none"
              stroke="#6d28d9"
              strokeWidth="0.9"
            />
          ))}

          {/* Central vertical meridian (great circle facing viewer) */}
          <line
            x1={CX}
            y1={CY - R}
            x2={CX}
            y2={CY + R}
            stroke="#6d28d9"
            strokeWidth="0.9"
          />
        </g>

        {/* 3. Edge vignette overlay */}
        <circle cx={CX} cy={CY} r={R} fill="url(#sphere-edge)" />

        {/* 4. Top-left specular highlight */}
        <ellipse
          cx={CX - 52}
          cy={CY - 56}
          rx={52}
          ry={36}
          fill="white"
          opacity="0.16"
        />

        {/* 5. Thin border ring */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="rgba(109,40,217,0.18)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/* ── PartnerHero ───────────────────────────────────────────── */
export function PartnerHero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  useGlobe = false,
}: PartnerHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-36 sm:px-10 sm:pt-44">
      {/* Atmospheric background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% -10%, rgba(168,85,247,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* ── Left: copy ─────────────────────────────────────── */}
        <div className="flex flex-col">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-purple-600"
            style={{ border: "1px solid #e9d5ff" }}
          >
            {eyebrow}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-ink-900"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              marginBottom: "1.25rem",
            }}
          >
            {headline}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="text-neutral-500"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              lineHeight: 1.65,
              maxWidth: "46ch",
              marginBottom: "2.5rem",
            }}
          >
            {subhead}
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center bg-ink-900 text-white transition-opacity hover:opacity-80"
              style={{
                borderRadius: "999px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {primaryCta.label}
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center text-ink-900 transition-opacity hover:opacity-60"
                style={{
                  borderRadius: "999px",
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  border: "1px solid #e5e7eb",
                }}
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </div>

        {/* ── Right: visual panel ─────────────────────────────── */}
        <div className="relative flex items-center justify-center">
          {useGlobe ? (
            /* ── Globe variant ─────────────────────────────────
               Entrance: fade in from right.
               Float: continuous gentle vertical oscillation.   */
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CssGlobe />
              </motion.div>
            </motion.div>
          ) : (
            /* ── Static graphic panel ───────────────────────── */
            <motion.div
              className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-3xl"
              style={{ border: "1px solid #eaecf0", background: "#fafafa" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Inner accent grid */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Centered gradient orb */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(236,72,153,0.10) 50%, transparent 80%)",
                  filter: "blur(32px)",
                }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
