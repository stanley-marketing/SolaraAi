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
  { val: 6, suffix: "", label: "AI agents", desc: "Each specialized. Ads, SEO, social, creative, website, leads.", color: "#3b82f6" },
  { val: 24, suffix: "/7", label: "Always running", desc: "Campaigns adjust in real time. Never stops.", color: "#06b6d4" },
  { val: 10, suffix: "%", label: "Human expertise", desc: "Strategy, creativity, judgment — things AI can't replace.", color: "#a855f7" },
];

const AGENTS = [
  { name: "Ads", icon: "📊", color: "#7c5cfc" },
  { name: "SEO", icon: "🔍", color: "#3b82f6" },
  { name: "Social", icon: "💬", color: "#06b6d4" },
  { name: "Creative", icon: "🎨", color: "#ec4899" },
  { name: "Website", icon: "📝", color: "#f59e0b" },
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

        {/* Mobile: per-tab visual modes — each tab looks dramatically different */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative mx-auto mt-10 overflow-hidden rounded-2xl border border-gray-100 sm:hidden"
            style={{ height: 280 }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes adv-pulse-bright {
                0%, 100% { transform: scale(1); opacity: 0.5; }
                50% { transform: scale(1.5); opacity: 1; }
              }
              @keyframes adv-glow-strong {
                0%, 100% { box-shadow: 0 0 0 0 transparent; }
                50% { box-shadow: 0 0 32px 12px ${STATS[active].color}30; }
              }
              @keyframes adv-agent-pop {
                0% { transform: scale(0); opacity: 0; }
                70% { transform: scale(1.15); opacity: 1; }
                100% { transform: scale(1); opacity: 1; }
              }
              @keyframes adv-line-grow {
                from { clip-path: inset(-1px 100% -1px 0); }
                to { clip-path: inset(-1px 0% -1px 0); }
              }
              @keyframes adv-data-travel {
                0% { left: 0; opacity: 0; }
                12% { opacity: 1; }
                88% { opacity: 1; left: calc(100% - 5px); }
                100% { left: calc(100% - 5px); opacity: 0; }
              }
              @keyframes adv-hub-ring {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.35; }
                100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
              }
              @keyframes adv-orbit {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg); }
              }
              @keyframes adv-trail {
                0%, 100% { opacity: 0.6; box-shadow: 0 0 6px currentColor; }
                50% { opacity: 1; box-shadow: 0 0 14px 4px currentColor; }
              }
            `}} />

            {active === 0 && (
              /* 90% AI — all dots large, bright, strong glows, active feel */
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f5f0ff, #fdf2f8)" }}>
                <div className="relative h-full w-full">
                  {AGENTS.map((agent, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const r = 80;
                    return (
                      <div key={agent.name} className="absolute flex flex-col items-center gap-1" style={{ left: `calc(50% + ${Math.round(Math.cos(angle) * r)}px)`, top: `calc(42% + ${Math.round(Math.sin(angle) * r)}px)`, transform: "translate(-50%, -50%)" }}>
                        <div className="h-4 w-4 rounded-full" style={{ backgroundColor: agent.color, animation: "adv-pulse-bright 2s infinite ease-in-out", animationDelay: `${i * 0.3}s`, boxShadow: `0 0 16px 4px ${agent.color}50` }} />
                        <span className="whitespace-nowrap text-[10px] font-semibold" style={{ color: agent.color }}>{agent.name}</span>
                      </div>
                    );
                  })}
                  {AGENTS.map((agent, i) => (
                    <div key={`line-${i}`} className="absolute" style={{ left: "50%", top: "42%", width: 80, height: 2, background: `linear-gradient(90deg, ${STATS[0].color}25, ${agent.color}50)`, transformOrigin: "0% 50%", transform: `rotate(${i * 60 - 90}deg)` }} />
                  ))}
                  <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-white" style={{ left: "50%", top: "42%", transform: "translate(-50%, -50%)", animation: "adv-glow-strong 2.5s infinite ease-in-out", border: `2px solid ${STATS[0].color}30` }}>
                    <Image src="/solara-icon.svg" alt="Solara" width={32} height={32} />
                  </div>
                </div>
              </div>
            )}

            {active === 1 && (
              /* 6 Agents — staggered boot-up with network connections and data pulses */
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #eff6ff, #f0fdf4)" }}>
                <div className="relative h-full w-full">
                  {/* Expanding hub rings */}
                  {[0, 1].map((ring) => (
                    <div key={`ring-${ring}`} className="absolute rounded-full" style={{ left: "50%", top: "42%", width: 40, height: 40, border: `1.5px solid ${STATS[1].color}25`, animation: "adv-hub-ring 3s ease-out infinite", animationDelay: `${ring * 1.5}s` }} />
                  ))}
                  {/* Connecting lines with traveling data pulses */}
                  {AGENTS.map((agent, i) => (
                    <div key={`conn-${i}`} className="absolute" style={{ left: "50%", top: "42%", width: 90, height: 2, transformOrigin: "0% 50%", transform: `rotate(${i * 60 - 90}deg)`, background: `linear-gradient(90deg, ${STATS[1].color}20, ${agent.color}45)`, animation: "adv-line-grow 0.4s ease-out both", animationDelay: `${0.7 + i * 0.08}s`, position: "absolute" }}>
                      <div className="absolute rounded-full" style={{ width: 5, height: 5, top: -1.5, backgroundColor: agent.color, boxShadow: `0 0 8px 2px ${agent.color}50`, animation: "adv-data-travel 2.2s ease-in-out infinite", animationDelay: `${1.4 + i * 0.35}s` }} />
                    </div>
                  ))}
                  {/* Agent badges — staggered pop-in */}
                  {AGENTS.map((agent, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const r = 90;
                    return (
                      <div key={agent.name} className="absolute" style={{ left: `calc(50% + ${Math.round(Math.cos(angle) * r)}px)`, top: `calc(42% + ${Math.round(Math.sin(angle) * r)}px)`, transform: "translate(-50%, -50%)" }}>
                        <div className="flex flex-col items-center gap-1" style={{ animation: "adv-agent-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both", animationDelay: `${i * 0.12}s` }}>
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white" style={{ border: `2px solid ${agent.color}`, boxShadow: `0 2px 8px ${agent.color}18` }}>
                            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: agent.color }} />
                          </div>
                          <span className="whitespace-nowrap text-[10px] font-bold tracking-wide" style={{ color: agent.color }}>{agent.name}</span>
                        </div>
                      </div>
                    );
                  })}
                  {/* Center hub */}
                  <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg" style={{ left: "50%", top: "42%", transform: "translate(-50%, -50%)", border: `2px solid ${STATS[1].color}35`, boxShadow: `0 0 16px 4px ${STATS[1].color}12` }}>
                    <Image src="/solara-icon.svg" alt="Solara" width={28} height={28} />
                  </div>
                </div>
              </div>
            )}

            {active === 2 && (
              /* 24/7 — orbital rotation, dots circling the center continuously */
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #ecfeff, #eff6ff)" }}>
                <div className="relative h-full w-full">
                  <div className="absolute" style={{ left: "50%", top: "42%", width: 160, height: 160, transform: "translate(-50%, -50%)" }}>
                    <div className="absolute inset-0 rounded-full" style={{ border: "1px dashed #06b6d430" }} />
                  </div>
                  <div className="absolute" style={{ left: "50%", top: "42%", animation: "adv-orbit 8s linear infinite" }}>
                    {AGENTS.map((agent, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const r = 80;
                      return (
                        <div key={agent.name} className="absolute flex flex-col items-center gap-1" style={{ left: `${Math.round(Math.cos(angle) * r)}px`, top: `${Math.round(Math.sin(angle) * r)}px`, transform: "translate(-50%, -50%)" }}>
                          <div className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: agent.color, color: agent.color, animation: "adv-trail 1.2s infinite ease-in-out", animationDelay: `${i * 0.2}s` }} />
                          <span className="whitespace-nowrap text-[10px] font-medium text-gray-500">{agent.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white" style={{ left: "50%", top: "42%", transform: "translate(-50%, -50%)", border: "2px solid #06b6d440", boxShadow: "0 0 20px 6px #06b6d415" }}>
                    <Image src="/solara-icon.svg" alt="Solara" width={28} height={28} />
                  </div>
                </div>
              </div>
            )}

            {active === 3 && (
              /* 10% Human — dots dimmed and tiny, center prominent with warm glow */
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #faf5ff, #fdf4ff)" }}>
                <div className="relative h-full w-full">
                  {AGENTS.map((agent, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const r = 85;
                    return (
                      <div key={agent.name} className="absolute flex flex-col items-center gap-1" style={{ left: `calc(50% + ${Math.round(Math.cos(angle) * r)}px)`, top: `calc(42% + ${Math.round(Math.sin(angle) * r)}px)`, transform: "translate(-50%, -50%)" }}>
                        <div className="h-2 w-2 rounded-full bg-gray-300" style={{ opacity: 0.4 }} />
                        <span className="whitespace-nowrap text-[10px] text-gray-300">{agent.name}</span>
                      </div>
                    );
                  })}
                  {AGENTS.map((_, i) => (
                    <div key={`line-dim-${i}`} className="absolute" style={{ left: "50%", top: "42%", width: 85, height: 1, background: "linear-gradient(90deg, #a855f710, #d4d4d415)", transformOrigin: "0% 50%", transform: `rotate(${i * 60 - 90}deg)` }} />
                  ))}
                  <div className="absolute flex h-20 w-20 items-center justify-center rounded-full" style={{ left: "50%", top: "42%", transform: "translate(-50%, -50%)", background: "linear-gradient(135deg, #f5f0ff, #fdf2f8)", border: "2px solid #a855f730", boxShadow: "0 0 40px 16px #a855f720" }}>
                    <Image src="/solara-icon.svg" alt="Solara" width={40} height={40} />
                  </div>
                  <div className="absolute text-center" style={{ left: "50%", top: "calc(42% + 56px)", transform: "translateX(-50%)" }}>
                    <span className="text-xs font-semibold text-purple-400">You</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent px-6 pt-8 pb-4">
              <p className="text-center text-sm text-gray-400">{cfg.caption}</p>
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
