"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import PhotonBeam from "@/components/ui/photon-beam";
import Image from "next/image";

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
    // 90% AI — brand rainbow signals, dense
    colorLine: "#1a1040",
    colorSignal: "#7c5cfc",
    colorSignal2: "#ec4899",
    colorSignal3: "#f59e0b",
    useColor2: true,
    useColor3: true,
    signalCount: 120,
    speedGlobal: 0.4,
    caption: "Tasks flowing through your AI marketing engine",
  },
  {
    // 6 Agents — cool agent colors
    colorLine: "#0a1a35",
    colorSignal: "#3b82f6",
    colorSignal2: "#06b6d4",
    colorSignal3: "#10b981",
    useColor2: true,
    useColor3: true,
    signalCount: 80,
    speedGlobal: 0.35,
    caption: "Six specialized agents, each mastering their domain",
  },
  {
    // 24/7 — fast, always-on cyan
    colorLine: "#0a2030",
    colorSignal: "#06b6d4",
    colorSignal2: "#3b82f6",
    colorSignal3: "#22d3ee",
    useColor2: true,
    useColor3: true,
    signalCount: 100,
    speedGlobal: 0.6,
    caption: "Round-the-clock optimization, even while you sleep",
  },
  {
    // 10% Human — calm, purple/violet
    colorLine: "#150a30",
    colorSignal: "#a855f7",
    colorSignal2: "#7c5cfc",
    colorSignal3: "#c084fc",
    useColor2: true,
    useColor3: true,
    signalCount: 35,
    speedGlobal: 0.2,
    caption: "Your strategic decisions guiding the AI",
  },
];

/* ─── Heading ─── */
function SectionHeading() {
  return (
    <>
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
    </>
  );
}

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
              : "border-transparent opacity-35 hover:opacity-60"
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

/* ─── Preview page ─── */
export default function PreviewPage() {
  const [active, setActive] = useState(0);
  const cfg = BEAM_CONFIGS[active];

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading />
        <StatTabs active={active} onSelect={setActive} />

        {/* Photon Beam — branded for Solara AI */}
        <div
          className="relative mx-auto mt-10 overflow-hidden rounded-2xl"
          style={{ height: 420 }}
        >
          {/* Beam (re-mounts on tab change for new colors) */}
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <PhotonBeam
              colorBg="#08080f"
              colorLine={cfg.colorLine}
              colorSignal={cfg.colorSignal}
              useColor2={cfg.useColor2}
              colorSignal2={cfg.colorSignal2}
              useColor3={cfg.useColor3}
              colorSignal3={cfg.colorSignal3}
              lineCount={60}
              spreadHeight={35}
              signalCount={cfg.signalCount}
              speedGlobal={cfg.speedGlobal}
              trailLength={4}
              bloomStrength={2.5}
              bloomRadius={0.4}
            />
          </motion.div>

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
                    boxShadow: `0 0 6px ${agent.color}80`,
                  }}
                />
                <span className="text-xs font-medium text-white/60">
                  {agent.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Solara icon — right side (convergence) */}
          <div className="pointer-events-none absolute right-8 top-1/2 z-10 -translate-y-1/2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Image
                src="/solara-icon.svg"
                alt="Solara"
                width={20}
                height={20}
                className="opacity-60"
                style={{ filter: "invert(1)" }}
              />
            </div>
          </div>

          {/* Caption — bottom gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#08080f] via-[#08080f]/80 to-transparent px-6 pt-12 pb-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center text-sm text-white/50"
              >
                {cfg.caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
