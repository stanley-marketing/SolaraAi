"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BODY,
  DISPLAY,
  FlickeringGrid,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  INK_SOFT,
  ROSE_DEEP,
  ScrollReveal,
  SHELL,
} from "@/components/homepage/teardown-parts";

const INTER =
  "var(--font-blog), system-ui, -apple-system, sans-serif";

const VIEWBOX_W = 1000;
const VIEWBOX_H = 440;

const CURVE_PATH =
  "M 100 380 C 130 365, 170 360, 200 355 C 250 340, 350 320, 460 290 C 510 280, 560 250, 620 220 C 680 195, 770 150, 860 110";

const CONTINUATION_PATH =
  "M 860 110 C 890 95, 930 78, 970 60";

type Marker = {
  x: number;
  y: number;
  time: string;
  line: string;
  position: "above" | "below";
  accent?: boolean;
  delay: number;
};

const MARKERS: Marker[] = [
  {
    x: 100,
    y: 380,
    time: "Week 1",
    line: "Starting from zero",
    position: "below",
    delay: 0.4,
  },
  {
    x: 460,
    y: 290,
    time: "Month 3",
    line: "Feed feels organized",
    position: "above",
    delay: 1.1,
  },
  {
    x: 860,
    y: 110,
    time: "Month 6",
    line: "Competitors notice",
    position: "above",
    accent: true,
    delay: 2.0,
  },
];

const CURVE_DURATION = 2.0;
const MARKER_DURATION = 0.5;
const CONTINUATION_DELAY = 2.4;
const CONTINUATION_DURATION = 0.8;
const EASING = [0.22, 0.61, 0.36, 1] as const;

function CurveMarkerLabel({
  marker,
  inView,
}: {
  marker: Marker;
  inView: boolean;
}) {
  const xPct = (marker.x / VIEWBOX_W) * 100;
  const yPct = (marker.y / VIEWBOX_H) * 100;
  const above = marker.position === "above";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute flex flex-col items-center"
      style={{
        left: `${xPct}%`,
        top: `${yPct}%`,
        transform: above
          ? "translate(-50%, calc(-100% - 14px))"
          : "translate(-50%, 14px)",
      }}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: MARKER_DURATION,
        delay: marker.delay,
        ease: EASING,
      }}
    >
      <p
        className="mb-1.5"
        style={{
          fontFamily: INTER,
          fontSize: "clamp(0.6rem, 0.8vw, 0.7rem)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          fontWeight: 600,
          color: INK_FAINT,
        }}
      >
        {marker.time}
      </p>
      <p
        className="whitespace-nowrap text-center"
        style={{
          fontFamily: DISPLAY,
          fontSize: marker.accent
            ? "clamp(1.05rem, 1.7vw, 1.35rem)"
            : "clamp(0.9rem, 1.4vw, 1.1rem)",
          fontWeight: marker.accent ? 500 : 600,
          fontStyle: marker.accent ? "italic" : "normal",
          color: marker.accent ? ROSE_DEEP : INK,
          letterSpacing: "-0.015em",
          lineHeight: 1.2,
        }}
      >
        {marker.line}
      </p>
    </motion.div>
  );
}

function CompoundingCurve() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="relative w-full">
      <div className="relative w-full">
        <svg
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          preserveAspectRatio="xMidYMid meet"
          className="block h-auto w-full"
          style={{ overflow: "visible" }}
          aria-hidden
        >
          <title>Compounding growth curve from Week 1 to Month 6</title>
          <defs>
            <linearGradient
              id="continuationFade"
              x1="0"
              x2="1"
              y1="0"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor={INK_SOFT}
                stopOpacity="0.7"
              />
              <stop
                offset="100%"
                stopColor={INK_SOFT}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <line
            x1="80"
            x2="80"
            y1="60"
            y2="395"
            stroke={HAIRLINE_HEAVY}
            strokeWidth="1"
          />
          <line
            x1="80"
            x2="920"
            y1="395"
            y2="395"
            stroke={HAIRLINE_HEAVY}
            strokeWidth="1"
          />

          <motion.path
            d={CURVE_PATH}
            fill="none"
            stroke={INK}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: CURVE_DURATION, ease: EASING }}
          />

          <motion.path
            d={CONTINUATION_PATH}
            fill="none"
            stroke="url(#continuationFade)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 7"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: CONTINUATION_DURATION,
              delay: CONTINUATION_DELAY,
              ease: "easeOut",
            }}
          />

          {MARKERS.map((m) => (
            <motion.g
              key={m.time}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: MARKER_DURATION,
                delay: m.delay,
                ease: EASING,
              }}
            >
              <circle
                cx={m.x}
                cy={m.y}
                r={m.accent ? 18 : 14}
                fill={ROSE_DEEP}
                opacity={m.accent ? 0.16 : 0.12}
              />
              <circle
                cx={m.x}
                cy={m.y}
                r={m.accent ? 11 : 9}
                fill="#ffffff"
              />
              <circle
                cx={m.x}
                cy={m.y}
                r={m.accent ? 6 : 5}
                fill={ROSE_DEEP}
              />
            </motion.g>
          ))}
        </svg>

        {MARKERS.map((m) => (
          <CurveMarkerLabel key={m.time} marker={m} inView={inView} />
        ))}
      </div>
    </div>
  );
}

export default function SectionFourGrowthLoopPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="relative h-full w-full">
          <FlickeringGrid />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 35%, transparent 15%, rgba(248,247,244,0.94) 70%)",
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-24 pb-14 sm:px-8 sm:pt-36 sm:pb-20">
        <ScrollReveal>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.8rem]"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 700,
              color: INK,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            <span className="block pb-3">Every week sharper.</span>
            <span className="block">Every month bigger.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p
            className="mt-8 max-w-[58ch]"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              lineHeight: 1.65,
              color: INK_MUTED,
            }}
          >
            Your brand stops starting from zero.{" "}
            <em
              style={{
                fontStyle: "italic",
                color: ROSE_DEEP,
                fontWeight: 600,
              }}
            >
              It compounds.
            </em>
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-12 pb-32 sm:px-8 sm:pt-16 sm:pb-40">
        <CompoundingCurve />
      </div>
    </main>
  );
}
