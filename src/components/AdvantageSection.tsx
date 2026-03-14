"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Activity,
  Bot,
  BrainCircuit,
  Clock3,
  Gauge,
  Sparkles,
  UserRound,
  WandSparkles,
} from "lucide-react";


/* Lazy-load PhotonBeam — code-split Three.js out of main bundle */
const PhotonBeam = dynamic(() => import("@/components/ui/photon-beam"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-white" />,
});

/* ─── Shared data ─── */
const STATS = [
  { val: 90, suffix: "%", label: "Handled by AI", desc: "Scheduling, optimization, reporting — automated.", color: "#7c5cfc" },
  { val: 6, suffix: "", label: "AI agents", desc: "Each specialized. Ads, SEO, social, creative, website, leads.", color: "#3b82f6" },
  { val: 24, suffix: "/7", label: "Always running", desc: "Campaigns adjust in real time. Never stops.", color: "#06b6d4" },
  { val: 10, suffix: "%", label: "Human expertise", desc: "Strategy, creativity, judgment — things AI can't replace.", color: "#a855f7" },
];

const AGENTS = [
  { name: "Ads", color: "#7c5cfc" },
  { name: "SEO", color: "#3b82f6" },
  { name: "Social", color: "#06b6d4" },
  { name: "Creative", color: "#ec4899" },
  { name: "Website", color: "#f59e0b" },
  { name: "Leads", color: "#10b981" },
];

const MOBILE_PANEL_COPY = [
  {
    eyebrow: "Automation throughput",
    title: "Tasks stream into one AI core",
    icon: Sparkles,
  },
  {
    eyebrow: "Parallel specialists",
    title: "Six agents working at the same time",
    icon: Bot,
  },
  {
    eyebrow: "Live optimization",
    title: "Monitoring and tuning every minute",
    icon: Clock3,
  },
  {
    eyebrow: "Human in command",
    title: "You steer strategy while AI executes",
    icon: UserRound,
  },
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
    lineCount: 60,
    spreadHeight: 55,
    signalCount: 100,
    speedGlobal: 0.38,
    trailLength: 5,
    bloomStrength: 3.2,
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
    lineCount: 44,
    spreadHeight: 18,
    signalCount: 70,
    speedGlobal: 0.38,
    trailLength: 5,
    bloomStrength: 3.6,
    bloomRadius: 0.3,
    waveHeight: 0.3,
    waveSpeed: 0.3,
    curvePower: 4,
    caption: "Your strategic decisions guiding the AI",
  },
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
    <div className="mt-16 grid grid-cols-2 gap-y-4 sm:grid-cols-4 sm:gap-y-0">
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
  const [resetKey, setResetKey] = useState(0);
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


  /* Auto-rotate stats */
  /* Auto-rotate stats — resets when user clicks a tab */
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 30000);
    return () => clearInterval(t);
  }, [resetKey]);

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
        <StatTabs active={active} onSelect={(i) => { setActive(i); setResetKey((k) => k + 1); }} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative mx-auto mt-10 overflow-hidden rounded-2xl border border-gray-100 sm:hidden"
            style={{ height: 320 }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  @keyframes adv-lane-flow {
                    0% { left: 0; opacity: 0; }
                    12% { opacity: 1; }
                    88% { opacity: 1; }
                    100% { left: calc(100% - 8px); opacity: 0; }
                  }
                  @keyframes adv-tile-rise {
                    0% { transform: translateY(10px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                  }
                  @keyframes adv-monitor-sweep {
                    0% { left: -22%; }
                    100% { left: 100%; }
                  }
                  @keyframes adv-dot-pulse {
                    0%, 100% { transform: scale(1); opacity: 0.45; }
                    50% { transform: scale(1.25); opacity: 1; }
                  }
                  @keyframes adv-human-glow {
                    0%, 100% { box-shadow: 0 0 12px 4px #a855f71f; }
                    50% { box-shadow: 0 0 24px 10px #a855f738; }
                  }
                `,
              }}
            />

            <div
              className="absolute inset-0 p-4"
              style={{
                background:
                  active === 0
                    ? "linear-gradient(135deg, #f7f2ff, #fdf5fb)"
                    : active === 1
                      ? "linear-gradient(135deg, #f0f6ff, #f4fbf8)"
                      : active === 2
                        ? "linear-gradient(135deg, #ecfeff, #eff6ff)"
                        : "linear-gradient(135deg, #f8f4ff, #fdf5ff)",
              }}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                    {MOBILE_PANEL_COPY[active].eyebrow}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {MOBILE_PANEL_COPY[active].title}
                  </p>
                </div>
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90"
                  style={{ border: `1px solid ${STATS[active].color}35` }}
                >
                  {(() => {
                    const Icon = MOBILE_PANEL_COPY[active].icon;
                    return <Icon size={16} style={{ color: STATS[active].color }} />;
                  })()}
                </div>
              </div>

              {active === 0 && (
                <div className="space-y-3">
                  {[
                    { label: "Ads + SEO", delay: "0s" },
                    { label: "Social + Creative", delay: "0.35s" },
                    { label: "Website + Leads", delay: "0.7s" },
                  ].map((lane) => (
                    <div
                      key={lane.label}
                      className="grid grid-cols-[104px_1fr_68px] items-center gap-2"
                    >
                      <div className="rounded-full border border-white/80 bg-white/80 px-2 py-1 text-[10px] font-semibold text-gray-700">
                        {lane.label}
                      </div>
                      <div className="relative h-[2px] overflow-hidden rounded-full bg-violet-200/60">
                        <div
                          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-500"
                          style={{
                            boxShadow: "0 0 8px 2px #7c5cfc55",
                            animation: "adv-lane-flow 1.9s ease-in-out infinite",
                            animationDelay: lane.delay,
                          }}
                        />
                      </div>
                      <div className="rounded-lg border border-violet-300/60 bg-white px-2 py-1 text-center text-[10px] font-semibold text-violet-600">
                        Core
                      </div>
                    </div>
                  ))}

                  <div className="mt-3 rounded-xl border border-white/80 bg-white/80 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-gray-500">Automated workload</p>
                      <Gauge size={14} className="text-violet-500" />
                    </div>
                    <p className="mt-1 text-3xl font-light text-violet-600">90%</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-violet-100">
                      <motion.div
                        className="h-full rounded-full bg-violet-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {active === 1 && (
                <div className="space-y-2">
                  {[
                    [AGENTS[0], AGENTS[1]],
                    [AGENTS[2], AGENTS[3]],
                    [AGENTS[4], AGENTS[5]],
                  ].map((pair, rowIdx) => (
                    <div key={rowIdx} className="grid grid-cols-2 gap-2">
                      {pair.map((agent, colIdx) => {
                        const idx = rowIdx * 2 + colIdx;
                        return (
                          <motion.div
                            key={agent.name}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.08, duration: 0.35 }}
                            className="flex items-center gap-2.5 rounded-xl bg-white/90 px-3 py-2.5"
                            style={{ border: `1.5px solid ${agent.color}25` }}
                          >
                            <div className="relative flex-shrink-0">
                              <div
                                className="h-8 w-8 rounded-full"
                                style={{
                                  backgroundColor: `${agent.color}12`,
                                  border: `2px solid ${agent.color}`,
                                }}
                              />
                              <div
                                className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                style={{
                                  backgroundColor: agent.color,
                                  animation: `adv-dot-pulse 2s ease-in-out ${idx * 0.3}s infinite`,
                                }}
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-800">{agent.name}</p>
                              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: agent.color }}
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={{
                                    duration: 1.8 + idx * 0.3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                    delay: idx * 0.15,
                                  }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  ))}
                  <div className="flex items-center justify-center gap-2 pt-1 text-xs text-blue-600">
                    <BrainCircuit size={13} />
                    <span className="font-medium">All running in parallel</span>
                  </div>
                </div>
              )}

              {active === 2 && (
                <div className="rounded-xl border border-white/80 bg-white/82 p-3">
                  <div className="mb-2 flex items-center justify-between text-[11px] font-semibold text-cyan-700">
                    <span className="inline-flex items-center gap-1">
                      <Activity size={12} />
                      Live cycle
                    </span>
                    <span>24/7</span>
                  </div>

                  <div className="relative overflow-hidden rounded-lg border border-cyan-100 bg-white p-2">
                    <div className="grid grid-cols-12 items-end gap-1">
                      {[18, 40, 26, 58, 34, 44, 22, 62, 31, 54, 37, 48].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="rounded-sm bg-cyan-200"
                            style={{
                              height: `${h}%`,
                              minHeight: 8,
                              animation: "adv-dot-pulse 1.8s ease-in-out infinite",
                              animationDelay: `${i * 0.08}s`,
                            }}
                          />
                        ),
                      )}
                    </div>
                    <div
                      className="pointer-events-none absolute inset-y-0 w-1/5"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, #06b6d435 50%, transparent 100%)",
                        animation: "adv-monitor-sweep 2.8s linear infinite",
                      }}
                    />
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-[11px]">
                    {["Monitoring", "Optimizing", "Adjusting"].map((label, i) => (
                      <div
                        key={label}
                        className="inline-flex items-center gap-1 rounded-full border border-cyan-100 bg-white px-2.5 py-1 text-cyan-700"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-cyan-500"
                          style={{
                            animation: "adv-dot-pulse 1.2s ease-in-out infinite",
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === 3 && (
                <div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/80 bg-white/80 p-3">
                      <Bot size={14} className="text-gray-500" />
                      <p className="mt-2 text-xs font-medium text-gray-500">AI execution</p>
                      <p className="mt-1 text-2xl font-light text-gray-700">90%</p>
                    </div>
                    <div
                      className="rounded-xl border border-purple-200/80 bg-white p-3"
                      style={{ animation: "adv-human-glow 2.4s ease-in-out infinite" }}
                    >
                      <WandSparkles size={14} className="text-purple-500" />
                      <p className="mt-2 text-xs font-medium text-purple-500">Human strategy</p>
                      <p className="mt-1 text-2xl font-light text-purple-600">10%</p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border border-white/80 bg-white/80 p-3">
                    <div className="mb-2 flex items-center justify-between text-[11px] font-semibold">
                      <span className="text-gray-500">Execution balance</span>
                      <span className="text-purple-500">Human-guided</span>
                    </div>
                    <div className="relative h-2 rounded-full bg-gray-200">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-gray-500/60" style={{ width: "90%" }} />
                      <motion.div
                        className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-purple-300 bg-white"
                        style={{ left: "calc(90% - 8px)", boxShadow: "0 0 10px 1px #a855f744" }}
                        animate={{ x: [0, 2, 0, -2, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent px-5 pt-8 pb-4">
              <p className="text-center text-xs text-gray-500">{cfg.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Desktop: PhotonBeam (Three.js WebGL) */}
        <div
          ref={beamRef}
          className="relative mx-auto mt-10 hidden overflow-hidden rounded-2xl border border-gray-100 sm:block"
          style={{ height: 420, background: "#ffffff" }}
        >
          {isVisible ? (
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
          <div className="pointer-events-none absolute top-1/2 z-10 -translate-y-1/2" style={{ right: "5%" }}>
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
