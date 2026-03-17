"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import createGlobe from "cobe";
import { useEffect, useRef, useCallback } from "react";

/* ──────────────────────────────────────────────────────────────
   PartnerHero
   Two variants:
     useGlobe=false (default) — clean light split-layout hero
     useGlobe=true            — split layout with cobe 3D rotating
                                WebGL globe on the right.
   Motion: load-time fade-up / fade-in only (no whileInView).
   Globe: cobe WebGL globe — smooth 3D rotation with drag support.
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

/* ── CobeGlobe ─────────────────────────────────────────────── */
function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const widthRef = useRef(400);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  const updatePointerInteraction = useCallback(
    (value: number | null) => {
      pointerInteracting.current = value;
      if (canvasRef.current) {
        canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
      }
    },
    [],
  );

  const updateMovement = useCallback(
    (clientX: number) => {
      if (pointerInteracting.current !== null) {
        const delta = clientX - pointerInteractionMovement.current;
        pointerInteractionMovement.current = clientX;
        r.set(r.get() + delta / 200);
      }
    },
    [r],
  );

  useEffect(() => {
    let globe: { destroy: () => void } | null = null;

    const onResize = () => {
      if (containerRef.current) {
        widthRef.current = containerRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
        phi: 0,
        theta: 0.3,
        dark: 0,
        diffuse: 0.4,
        mapSamples: 16000,
        mapBrightness: 1.2,
        baseColor: [1, 1, 1],
        markerColor: [0.6, 0.3, 1.0],
        glowColor: [0.85, 0.7, 1.0],
        markers: [
          { location: [40.7128, -74.006], size: 0.05 },
          { location: [51.5074, -0.1278], size: 0.04 },
          { location: [35.6762, 139.6503], size: 0.04 },
          { location: [-33.8688, 151.2093], size: 0.03 },
          { location: [48.8566, 2.3522], size: 0.03 },
          { location: [1.3521, 103.8198], size: 0.03 },
        ],
        onRender: (state) => {
          if (pointerInteracting.current === null) {
            phiRef.current += 0.005;
          }
          state.phi = phiRef.current + rs.get();
          state.width = widthRef.current * 2;
          state.height = widthRef.current * 2;
        },
      });

      // Fade in canvas after globe initialises
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      }, 0);
    }

    return () => {
      globe?.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs]);

  return (
    <div
      ref={containerRef}
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

      {/* Cobe WebGL globe canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 0.8s ease",
          position: "relative",
          zIndex: 1,
        }}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => {
          if (e.touches[0]) updateMovement(e.touches[0].clientX);
        }}
      />
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
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-purple-600"
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
            className="text-neutral-600"
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
            className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
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
               Cobe WebGL globe handles all rotation animation.   */
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <CobeGlobe />
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
