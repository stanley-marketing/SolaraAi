"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";

/* Lazy-load PhotonBeam — code-split Three.js out of main bundle */
const PhotonBeam = dynamic(() => import("@/components/ui/photon-beam"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-white" />,
});

/* ─── Shared data ─── */
const STATS = [
  { val: 90, suffix: "%", label: "Handled by AI", desc: "Scheduling, optimization, reporting — automated.", color: "#7c5cfc" },
  { val: 6, suffix: "", label: "AI agents", desc: "Each specialized. Ads, SEO, social, creative, CMS, leads.", color: "#3b82f6" },
  { val: 24, suffix: "/7", label: "Always running", desc: "Campaigns adjust in real time. Never stops.", color: "#06b6d4" },
  { val: 10, suffix: "%", label: "Human expertise", desc: "Strategy, creativity, judgment — things AI can't replace.", color: "#a855f7" },
];

const AGENTS = [
  { name: "Ads", icon: "📊", color: "#7c5cfc" },
  { name: "SEO", icon: "🔍", color: "#3b82f6" },
  { name: "Social", icon: "💬", color: "#06b6d4" },
  { name: "Creative", icon: "🎨", color: "#ec4899" },
  { name: "CMS", icon: "📝", color: "#f59e0b" },
  { name: "Leads", icon: "👥", color: "#10b981" },
];

/* Per-stat beam configuration */
const BEAM_CONFIGS = [
  {
    // 90% AI — dense rainbow flood, wide fan, heavy bloom
    colorLine: "#1a1040",
    colorSignal: "#7c5cfc",
    colorSignal2: "#ec4899",
    colorSignal3: "#f59e0b",
    useColor2: true,
    useColor3: true,
    lineCount: 80,
    spreadHeight: 45,
    signalCount: 140,
    speedGlobal: 0.4,
    trailLength: 5,
    bloomStrength: 3.2,
    bloomRadius: 0.5,
    waveHeight: 1.5,
    waveSpeed: 1,
    curvePower: 2,
    caption: "Tasks flowing through your AI marketing engine",
  },
  {
    // 6 Agents — fewer lines, wide spread, distinct streams
    colorLine: "#0a1a35",
    colorSignal: "#3b82f6",
    colorSignal2: "#06b6d4",
    colorSignal3: "#10b981",
    useColor2: true,
    useColor3: true,
    lineCount: 30,
    spreadHeight: 55,
    signalCount: 60,
    speedGlobal: 0.3,
    trailLength: 3,
    bloomStrength: 2,
    bloomRadius: 0.3,
    waveHeight: 0.5,
    waveSpeed: 0.5,
    curvePower: 3,
    caption: "Six specialized agents, each mastering their domain",
  },
  {
    // 24/7 — fast, tight, long trails, energetic
    colorLine: "#0a2030",
    colorSignal: "#06b6d4",
    colorSignal2: "#3b82f6",
    colorSignal3: "#22d3ee",
    useColor2: true,
    useColor3: true,
    lineCount: 60,
    spreadHeight: 25,
    signalCount: 120,
    speedGlobal: 0.7,
    trailLength: 7,
    bloomStrength: 2.8,
    bloomRadius: 0.4,
    waveHeight: 2,
    waveSpeed: 2,
    curvePower: 1.5,
    caption: "Round-the-clock optimization, even while you sleep",
  },
  {
    // 10% Human — sparse, calm, narrow, subtle glow
    colorLine: "#150a30",
    colorSignal: "#a855f7",
    colorSignal2: "#7c5cfc",
    colorSignal3: "#c084fc",
    useColor2: true,
    useColor3: true,
    lineCount: 18,
    spreadHeight: 12,
    signalCount: 20,
    speedGlobal: 0.18,
    trailLength: 2,
    bloomStrength: 1.5,
    bloomRadius: 0.3,
    waveHeight: 0.3,
    waveSpeed: 0.3,
    curvePower: 4,
    caption: "Your strategic decisions guiding the AI",
  },
];

/* ─── Mobile fallback gradients (per-stat themed) ─── */
const MOBILE_GRADIENTS = [
  "radial-gradient(ellipse at 25% 40%, #7c5cfc18 0%, transparent 50%), radial-gradient(ellipse at 75% 60%, #ec489918 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, #f59e0b10 0%, transparent 60%), #fafafa",
  "radial-gradient(ellipse at 20% 35%, #3b82f618 0%, transparent 50%), radial-gradient(ellipse at 80% 65%, #06b6d418 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, #10b98110 0%, transparent 60%), #fafafa",
  "radial-gradient(ellipse at 30% 45%, #06b6d418 0%, transparent 50%), radial-gradient(ellipse at 70% 55%, #3b82f618 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, #22d3ee10 0%, transparent 60%), #fafafa",
  "radial-gradient(ellipse at 25% 40%, #a855f718 0%, transparent 50%), radial-gradient(ellipse at 75% 60%, #7c5cfc18 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, #c084fc10 0%, transparent 60%), #fafafa",
];

/* ─── Stat tabs ─── */
function StatTabs({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mt-16 grid grid-cols-4">
      {STATS.map((s, i) => (
        <button
          key={s.label}
          onClick={() => onSelect(i)}
          className={cn(
            "cursor-pointer border-t-2 px-4 pt-6 pb-4 text-center transition-all duration-500",
            active === i
              ? "opacity-100"
              : "border-transparent opacity-35 hover:opacity-60",
          )}
          style={active === i ? { borderColor: s.color } : undefined}
        >
          <div className="flex items-baseline justify-center">
            <span
              className="text-5xl font-light tracking-tight transition-colors duration-500 sm:text-6xl"
              style={{ color: active === i ? s.color : "#111827" }}
            >
              {s.val}
            </span>
            <span className="text-3xl font-light text-gray-400 sm:text-4xl">
              {s.suffix}
            </span>
          </div>
          <p className="mt-2 text-sm font-semibold text-gray-900">{s.label}</p>
          <p className="mt-1 text-xs text-gray-500">{s.desc}</p>
        </button>
      ))}
    </div>
  );
}

/* ─── Main section ─── */
export function AdvantageSection() {
  const [active, setActive] = useState(0);
  const cfg = BEAM_CONFIGS[active];

  /* Viewport detection — only mount WebGL when visible */
  const beamRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = beamRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Mobile detection — skip WebGL on small screens */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Auto-rotate stats */
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h2
          className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          90% of what made great marketing expensive
          <br className="hidden sm:block" /> was never skill.{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            It was time.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-500">
          AI handles the heavy lifting. Humans steer the ship.
        </p>

        {/* Stat tabs */}
        <StatTabs active={active} onSelect={setActive} />

        {/* Photon Beam — branded for Solara AI */}
        <div
          ref={beamRef}
          className="relative mx-auto mt-10 overflow-hidden rounded-2xl border border-gray-100"
          style={{ height: isMobile ? 280 : 420 }}
        >
          {/* Desktop: WebGL beam | Mobile: themed gradient */}
          {isMobile ? (
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
              style={{ background: MOBILE_GRADIENTS[active] }}
            />
          ) : isVisible ? (
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
              style={{ filter: "invert(1) hue-rotate(180deg)" }}
            >
              <PhotonBeam
                colorBg="#000000"
                colorLine={cfg.colorLine}
                colorSignal={cfg.colorSignal}
                useColor2={cfg.useColor2}
                colorSignal2={cfg.colorSignal2}
                useColor3={cfg.useColor3}
                colorSignal3={cfg.colorSignal3}
                lineCount={cfg.lineCount}
                spreadHeight={cfg.spreadHeight}
                signalCount={cfg.signalCount}
                speedGlobal={cfg.speedGlobal}
                trailLength={cfg.trailLength}
                bloomStrength={cfg.bloomStrength}
                bloomRadius={cfg.bloomRadius}
                waveHeight={cfg.waveHeight}
                waveSpeed={cfg.waveSpeed}
                curvePower={cfg.curvePower}
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 bg-white" />
          )}

          {/* Agent labels — left side (fan-out) */}
          <div className="pointer-events-none absolute left-6 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4">
            {AGENTS.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active === 1 ? 0.9 : 0.5 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: agent.color,
                    boxShadow: `0 0 4px ${agent.color}60`,
                  }}
                />
                <span className="text-xs font-medium text-gray-500">
                  {agent.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Solara icon — right side (convergence) */}
          <div className="pointer-events-none absolute right-8 top-1/2 z-10 -translate-y-1/2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Image
                src="/solara-icon.svg"
                alt="Solara"
                width={22}
                height={22}
                className="opacity-70"
              />
            </div>
          </div>

          {/* Caption — bottom gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-white via-white/80 to-transparent px-6 pt-12 pb-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center text-sm text-gray-400"
              >
                {cfg.caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
