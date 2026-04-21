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
  Sparkles,
  UserRound,
} from "lucide-react";

const PhotonBeam = dynamic(() => import("@/components/ui/photon-beam"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-white" />,
});

const STATS = [
  { val: 95, suffix: "%", label: "Handled by Solara", desc: "Strategy, scripts, editing, publishing — fully autonomous.", color: "#7c5cfc" },
  { val: 5, suffix: "%", label: "Your input", desc: "A few minutes a week — record a clip, approve a post.", color: "#a855f7" },
];

const CHANNELS = [
  { name: "Strategy", color: "#059669" },
  { name: "Scripts", color: "#10b981" },
  { name: "Recording", color: "#06b6d4" },
  { name: "Editing", color: "#3b82f6" },
  { name: "Publishing", color: "#8b5cf6" },
  { name: "Learning", color: "#ec4899" },
];

const MOBILE_PANEL_COPY = [
  {
    eyebrow: "Full automation",
    title: "One engine runs your entire social presence",
    icon: Sparkles,
  },
  {
    eyebrow: "Parallel workflows",
    title: "Strategy, scripts, editing — all at once",
    icon: Bot,
  },
  {
    eyebrow: "Always improving",
    title: "Learns what works for your audience every month",
    icon: Clock3,
  },
  {
    eyebrow: "You stay in control",
    title: "Approve via WhatsApp — one tap, done",
    icon: UserRound,
  },
];

const BEAM_CONFIGS = [
  {
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
    caption: "Your social media engine — running autonomously every week",
  },
  {
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
    caption: "Your quick approvals keeping everything on-brand",
  },
];

function StatTabs({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mx-auto mt-16 grid max-w-xl grid-cols-2 gap-y-4">
      {STATS.map((s, i) => (
        <button
          type="button"
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

export function AdvantageSection() {
  const [active, setActive] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const cfg = BEAM_CONFIGS[active];

  const beamRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = beamRef.current;
    if (!el) return;
    let timerId: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timerId = setTimeout(() => setIsVisible(true), 2000);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(timerId); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % STATS.length), 30000);
    return () => clearInterval(t);
  }, [resetKey]);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          95% of running your social media
          <br className="hidden sm:block" /> was never creativity.{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            It was time.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-500">
          Solara handles the heavy lifting. You approve with one tap.
        </p>

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
            <div
              className="absolute inset-0 p-4"
              style={{
                background:
                  active === 0
                    ? "linear-gradient(135deg, #ecfdf5, #f0fdfa)"
                    : "linear-gradient(135deg, #f9fafb, #f3f4f6)",
              }}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                    {MOBILE_PANEL_COPY[active]?.eyebrow ?? MOBILE_PANEL_COPY[0].eyebrow}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {MOBILE_PANEL_COPY[active]?.title ?? MOBILE_PANEL_COPY[0].title}
                  </p>
                </div>
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90"
                  style={{ border: `1px solid ${STATS[active].color}35` }}
                >
                  {(() => {
                    const Icon = MOBILE_PANEL_COPY[active]?.icon ?? MOBILE_PANEL_COPY[0].icon;
                    return <Icon size={16} style={{ color: STATS[active].color }} />;
                  })()}
                </div>
              </div>

              {active === 0 && (
                <div className="space-y-2">
                  {[
                    { label: "Strategy + Scripts", color: "#059669" },
                    { label: "Editing + B-roll", color: "#06b6d4" },
                    { label: "Publishing + Learning", color: "#8b5cf6" },
                  ].map((lane, i) => (
                    <div
                      key={lane.label}
                      className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2.5"
                      style={{ border: `1.5px solid ${lane.color}25` }}
                    >
                      <div
                        className="h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: lane.color }}
                      />
                      <span className="text-xs font-semibold text-gray-800">{lane.label}</span>
                      <div className="ml-auto flex items-center gap-1">
                        <Activity size={10} style={{ color: lane.color }} />
                        <span className="text-[10px] font-medium" style={{ color: lane.color }}>Active</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-2 rounded-xl border border-white/80 bg-white/80 p-3">
                    <p className="text-xs font-medium text-gray-500">Autonomous workload</p>
                    <p className="mt-1 text-3xl font-light text-emerald-600">95%</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-emerald-100">
                      <motion.div
                        className="h-full rounded-full bg-emerald-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "95%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {active === 1 && (
                <div className="space-y-3">
                  <div className="rounded-xl border border-white/80 bg-white/80 p-3">
                    <p className="text-xs font-medium text-gray-500">Your weekly involvement</p>
                    <p className="mt-1 text-3xl font-light text-gray-900">~5 min</p>
                    <p className="mt-1 text-xs text-gray-400">Record a clip, approve a post — done</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-white/90 p-3 text-center">
                      <p className="text-2xl font-light text-gray-700">1 tap</p>
                      <p className="mt-1 text-[10px] font-medium text-gray-500">to approve</p>
                    </div>
                    <div className="rounded-xl bg-white/90 p-3 text-center">
                      <p className="text-2xl font-light text-gray-700">3 min</p>
                      <p className="mt-1 text-[10px] font-medium text-gray-500">to record</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-1 text-xs text-gray-500">
                    <BrainCircuit size={13} />
                    <span className="font-medium">Solara handles everything else</span>
                  </div>
                </div>
              )}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent px-5 pt-8 pb-4">
              <p className="text-center text-xs text-gray-500">{cfg.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          ref={beamRef}
          className="relative mx-auto mt-10 hidden overflow-hidden rounded-2xl border border-gray-100 sm:block"
          style={{ height: 420, background: "#ffffff" }}
        >
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: isVisible ? 0 : 1, pointerEvents: "none" }}
          >
            {[0.18, 0.32, 0.44, 0.56, 0.68, 0.82].map((y, i) => (
              <div
                key={`skel-${y}`}
                className="absolute overflow-hidden"
                style={{ left: "12%", right: "12%", top: `${y * 100}%`, height: 2 }}
              >
                <div
                  className="absolute inset-0 rounded-full bg-gray-200 animate-pulse"
                />
              </div>
            ))}
            <div
              className="absolute right-[5%] top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-gray-100 animate-pulse"
            />
          </div>

          {isVisible && (
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
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
          )}

          <div className="pointer-events-none absolute left-6 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4">
            {CHANNELS.map((channel, i) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active === 0 ? 0.9 : 0.5 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: channel.color,
                    boxShadow: `0 0 4px ${channel.color}60`,
                  }}
                />
                <span className="text-xs font-medium text-gray-500">
                  {channel.name}
                </span>
              </motion.div>
            ))}
          </div>

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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-white via-white/80 to-transparent px-6 pt-12 pb-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center text-sm text-gray-500"
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
