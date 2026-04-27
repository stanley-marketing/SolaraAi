"use client";

import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  BODY,
  DISPLAY,
  FlickeringGrid,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_MUTED,
  ROSE_DEEP,
  ScrollReveal,
} from "@/components/homepage/teardown-parts";

const CHART_COLOR = "#3b82f6";
const CHART_COLOR_SOFT = "rgba(59, 130, 246, 0.5)";

const MOBILE_BREAKPOINT_PX = 1024;

// ─── Data ───────────────────────────────────────────────────────────

type ChartPoint = {
  week: number;
  main: number | null;
  continuation: number | null;
  id?: "w1" | "m3" | "m6";
};

const CHART_DATA: ChartPoint[] = [
  { week: 1, main: 6, continuation: null, id: "w1" },
  { week: 4, main: 10, continuation: null },
  { week: 8, main: 16, continuation: null },
  { week: 12, main: 28, continuation: null, id: "m3" },
  { week: 16, main: 46, continuation: null },
  { week: 20, main: 76, continuation: null },
  { week: 22, main: 96, continuation: null },
  { week: 24, main: 122, continuation: 122, id: "m6" },
  { week: 28, main: null, continuation: 138 },
  { week: 30, main: null, continuation: 144 },
];

type Milestone = {
  eyebrow: string;
  line: string;
  accent?: boolean;
};

const MILESTONES: Record<string, Milestone> = {
  w1: { eyebrow: "Week 1", line: "Starting from zero" },
  m3: { eyebrow: "Month 3", line: "Feed feels organized" },
  m6: { eyebrow: "Month 6", line: "Competitors notice", accent: true },
};

// ─── Animation ──────────────────────────────────────────────────────
const CURVE_DURATION_MS = 1050;
const CONTINUATION_BEGIN_MS = 950;
const CONTINUATION_DURATION_MS = 600;

// ─── Hooks ──────────────────────────────────────────────────────────

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`,
    );
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return isMobile;
}

// ─── Custom dot + callout renderer ──────────────────────────────────

type DotPosition = {
  dx: number;
  dy: number;
  anchor: "start" | "middle" | "end";
};

type DotPositions = Record<"w1" | "m3" | "m6", DotPosition>;

const MOBILE_POSITIONS: DotPositions = {
  w1: { dx: 2, dy: 18, anchor: "start" },
  m3: { dx: 0, dy: -14, anchor: "middle" },
  m6: { dx: -2, dy: -14, anchor: "end" },
};

const DESKTOP_POSITIONS: DotPositions = {
  w1: { dx: 16, dy: 32, anchor: "start" },
  m3: { dx: 0, dy: -34, anchor: "middle" },
  m6: { dx: 0, dy: -34, anchor: "middle" },
};

type MilestoneDotProps = {
  cx?: number;
  cy?: number;
  payload?: ChartPoint;
  isMobile: boolean;
};

function MilestoneDot({ cx, cy, payload, isMobile }: MilestoneDotProps) {
  if (cx == null || cy == null || !payload?.id) return null;
  const m = MILESTONES[payload.id];
  if (!m) return null;

  const r = isMobile ? 5 : 6;
  const positions = isMobile ? MOBILE_POSITIONS : DESKTOP_POSITIONS;
  const pos = positions[payload.id];

  const labelSize = isMobile ? 12 : 13;
  const labelY = cy + pos.dy;
  const labelX = cx + pos.dx;

  return (
    <g style={{ pointerEvents: "none" }}>
      <text
        x={labelX}
        y={labelY}
        textAnchor={pos.anchor}
        fontFamily={DISPLAY}
        fontSize={labelSize}
        fontWeight={500}
        fill={INK}
        letterSpacing="-0.005em"
      >
        {m.eyebrow}
      </text>

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={CHART_COLOR}
        stroke="#ffffff"
        strokeWidth={2}
      />
    </g>
  );
}

// ─── Compounding Chart ──────────────────────────────────────────────

function CompoundingChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-15% 0px" });
  const isMobile = useIsMobile();

  const margin = isMobile
    ? { top: 60, right: 14, bottom: 44, left: 6 }
    : { top: 72, right: 40, bottom: 56, left: 16 };
  const chartHeight = isMobile ? 320 : 460;

  const renderDot = (props: Record<string, unknown>) => (
    <MilestoneDot
      cx={props.cx as number}
      cy={props.cy as number}
      payload={props.payload as ChartPoint}
      isMobile={isMobile}
    />
  );

  return (
    <motion.figure
      ref={containerRef}
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "#ffffff",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        borderRadius: 14,
        padding: isMobile ? 20 : 32,
        boxShadow:
          "0 1px 2px rgba(10,10,10,0.025), 0 8px 24px -12px rgba(10,10,10,0.06)",
      }}
    >
      <header className="mb-5 sm:mb-7">
        <h3
          style={{
            fontFamily: DISPLAY,
            fontSize: isMobile ? "1.25rem" : "1.4rem",
            fontWeight: 600,
            color: INK,
            letterSpacing: "-0.015em",
            lineHeight: 1.2,
          }}
        >
          Compounding growth
        </h3>
        <p
          className="mt-1.5"
          style={{
            fontFamily: BODY,
            fontSize: isMobile ? "0.875rem" : "0.95rem",
            color: INK_MUTED,
            lineHeight: 1.5,
          }}
        >
          Week one to month six — and beyond.
        </p>
      </header>

      <div style={{ height: chartHeight }} className="w-full">
        {inView && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CHART_DATA} margin={margin}>
              <CartesianGrid
                vertical={false}
                horizontal
                stroke={HAIRLINE}
                strokeDasharray="0"
              />
              <XAxis
                dataKey="week"
                type="number"
                domain={[1, 30]}
                hide
              />
              <YAxis
                dataKey="main"
                hide
                domain={[0, 150]}
                ticks={[0, 30, 60, 90, 120, 150]}
              />

              <Line
                dataKey="main"
                type="monotone"
                stroke={CHART_COLOR}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                dot={renderDot}
                activeDot={false}
                connectNulls={false}
                isAnimationActive
                animationDuration={CURVE_DURATION_MS}
                animationEasing="ease-out"
              />

              <Line
                dataKey="continuation"
                type="monotone"
                stroke={CHART_COLOR_SOFT}
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="3 7"
                dot={false}
                activeDot={false}
                connectNulls={false}
                isAnimationActive
                animationBegin={CONTINUATION_BEGIN_MS}
                animationDuration={CONTINUATION_DURATION_MS}
                animationEasing="ease-out"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      <footer className="mt-5 flex flex-col gap-1.5 sm:mt-7">
        <div
          className="flex items-center gap-1.5"
          style={{
            fontFamily: DISPLAY,
            fontSize: isMobile ? "0.9rem" : "1rem",
            fontWeight: 600,
            color: INK,
            lineHeight: 1.3,
          }}
        >
          <span>Trending up by month 6</span>
          <TrendingUp
            size={isMobile ? 14 : 16}
            strokeWidth={2.25}
            style={{ color: CHART_COLOR }}
          />
        </div>
        <p
          style={{
            fontFamily: BODY,
            fontSize: isMobile ? "0.82rem" : "0.9rem",
            color: INK_MUTED,
            lineHeight: 1.4,
          }}
        >
          The line keeps climbing past month six.
        </p>
      </footer>
    </motion.figure>
  );
}

// ─── Page ───────────────────────────────────────────────────────────

export default function SectionFourGrowthLoopPreview() {
  return (
    <main style={{ background: "#ffffff", color: INK }}>
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
                "radial-gradient(ellipse at 50% 35%, transparent 15%, rgba(255,255,255,0.96) 70%)",
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-20 pb-8 sm:px-8 sm:pt-32 sm:pb-12">
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
            className="mt-6 max-w-[58ch]"
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

      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <CompoundingChart />
      </div>
    </main>
  );
}
