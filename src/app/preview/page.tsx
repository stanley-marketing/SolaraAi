"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import { cn } from "@/lib/utils";

/* ─── Animated Counter ─── */
function Counter({
  target,
  className = "",
}: {
  target: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) animate(motionVal, target, { duration: 1.5 });
  }, [isInView, motionVal, target]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsub;
  }, [rounded]);

  return <span ref={ref} className={className}>0</span>;
}

/* ─── Shared Heading ─── */
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

/* ─── Stat data ─── */
const STATS_SIMPLE = [
  { val: 90, suffix: "%", label: "Handled by AI" },
  { val: 6, suffix: "", label: "AI agents" },
  { val: 24, suffix: "/7", label: "Always running" },
  { val: 10, suffix: "%", label: "Human expertise" },
];

const STATS_WITH_DESC = [
  { val: 90, suffix: "%", label: "Handled by AI", desc: "Scheduling, optimization, reporting — automated end to end." },
  { val: 6, suffix: "", label: "AI agents", desc: "Each one specialized. Ads, SEO, social, creative, CMS, leads." },
  { val: 24, suffix: "/7", label: "Always running", desc: "Campaigns adjust in real time. Never stops, never sleeps." },
  { val: 10, suffix: "%", label: "Human expertise", desc: "Strategy, creativity, and judgment — things AI can't replace." },
];

const INTERACTIVE_STATS = [
  { val: 90, suffix: "%", label: "Handled by AI", desc: "Scheduling, optimization, reporting — automated.", color: "#7c5cfc" },
  { val: 6, suffix: "", label: "AI agents", desc: "Each specialized. Ads, SEO, social, creative, CMS, leads.", color: "#3b82f6" },
  { val: 24, suffix: "/7", label: "Always running", desc: "Campaigns adjust in real time. Never stops.", color: "#06b6d4" },
  { val: 10, suffix: "%", label: "Human expertise", desc: "Strategy, creativity, judgment — things AI can't replace.", color: "#a855f7" },
];

function generateLines(count: number) {
  const lines: { x2: number; y2: number; opacity: number }[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * (i + 0.5)) / count;
    const length = 180 + Math.sin(i * 0.3) * 80 + Math.cos(i * 0.7) * 40;
    lines.push({
      x2: 500 + Math.cos(angle) * length,
      y2: 350 - Math.sin(angle) * length,
      opacity: 0.08 + ((Math.sin(i * 0.5) + 1) / 2) * 0.35,
    });
  }
  return lines;
}

function InteractiveStatsSection() {
  const [active, setActive] = useState(0);
  const lines = useMemo(() => generateLines(120), []);
  const color = INTERACTIVE_STATS[active].color;

  /* Auto-advance every 4s */
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading />

        {/* Interactive stat tabs */}
        <div className="mt-16 grid grid-cols-4">
          {INTERACTIVE_STATS.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={cn(
                "cursor-pointer border-t-2 px-4 pt-6 pb-4 text-center transition-all duration-500",
                active === i ? "opacity-100" : "border-transparent opacity-35 hover:opacity-60"
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
                <span className="text-3xl font-light text-gray-400 sm:text-4xl">{s.suffix}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-900">{s.label}</p>
              <p className="mt-1 text-xs text-gray-500">{s.desc}</p>
            </button>
          ))}
        </div>

        {/* Radial starburst */}
        <div className="relative mx-auto h-[320px] w-full overflow-hidden">
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-3xl transition-colors duration-700"
            style={{ backgroundColor: color }}
          />
          <svg
            viewBox="0 0 1000 350"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMax meet"
          >
            {lines.map((l, i) => (
              <line
                key={i}
                x1={500}
                y1={350}
                x2={l.x2}
                y2={l.y2}
                stroke={color}
                strokeWidth={1}
                opacity={l.opacity}
                style={{ transition: "stroke 0.7s ease" }}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

const STATS_WITH_ICONS = [
  { val: 90, suffix: "%", label: "Handled by AI", icon: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>
  )},
  { val: 6, suffix: "", label: "AI agents", icon: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" /></svg>
  )},
  { val: 24, suffix: "/7", label: "Always running", icon: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
  )},
  { val: 10, suffix: "%", label: "Human expertise", icon: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
  )},
];

/* ════════════════════════════════════════ */
export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Section 4 — Enhancement Options
        </h1>
        <p className="mb-20 text-center text-lg text-gray-500">
          4 options. Scroll to compare.
        </p>

        {/* ===== OPTION A — Add descriptions under each stat ===== */}
        <p className="mb-10 text-sm font-bold tracking-widest text-green-600 uppercase">
          Option A — Stats with descriptions
        </p>
        <section className="mb-32 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading />
            <div className="mt-16 border-t border-gray-200 pt-14">
              <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
                {STATS_WITH_DESC.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-baseline justify-center">
                      <Counter target={s.val} className="text-5xl font-light tracking-tight text-gray-900 sm:text-6xl" />
                      <span className="text-3xl font-light text-gray-400 sm:text-4xl">{s.suffix}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-900">{s.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== OPTION B — Icons above numbers ===== */}
        <p className="mb-10 text-sm font-bold tracking-widest text-green-600 uppercase">
          Option B — Icons + descriptions
        </p>
        <section className="mb-32 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading />
            <div className="mt-16 border-t border-gray-200 pt-14">
              <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
                {STATS_WITH_ICONS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="mb-5 flex justify-center text-gray-400">{s.icon}</div>
                    <div className="flex items-baseline justify-center">
                      <Counter target={s.val} className="text-5xl font-light tracking-tight text-gray-900 sm:text-6xl" />
                      <span className="text-3xl font-light text-gray-400 sm:text-4xl">{s.suffix}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-900">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== OPTION C — Before / After comparison above stats ===== */}
        <p className="mb-10 text-sm font-bold tracking-widest text-green-600 uppercase">
          Option C — Before / After comparison + stats
        </p>
        <section className="mb-32 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading />

            {/* Comparison row */}
            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6">
              {/* Before */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">Traditional agency</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✕</span>
                    $5k–$15k / month retainer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✕</span>
                    2–4 week turnaround per campaign
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✕</span>
                    Office hours only
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✕</span>
                    One-size-fits-all playbook
                  </li>
                </ul>
              </div>
              {/* After */}
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-50/60 to-pink-50/40 p-6">
                <p className="mb-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">With Solara AI</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    Fraction of the cost
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    Campaigns live in hours, not weeks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    24/7 — never stops optimizing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-500">✓</span>
                    Custom strategy for your business
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats below */}
            <div className="mt-16 border-t border-gray-200 pt-14">
              <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
                {STATS_SIMPLE.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-baseline justify-center">
                      <Counter target={s.val} className="text-5xl font-light tracking-tight text-gray-900 sm:text-6xl" />
                      <span className="text-3xl font-light text-gray-400 sm:text-4xl">{s.suffix}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-900">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== OPTION D — Full treatment: bg band + icons + descriptions ===== */}
        <p className="mb-10 text-sm font-bold tracking-widest text-green-600 uppercase">
          Option D — Full treatment (bg + icons + descriptions)
        </p>
        <section className="mb-32 rounded-3xl bg-gray-50 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading />
            <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {STATS_WITH_DESC.map((s, i) => {
                const icon = STATS_WITH_ICONS[i].icon;
                return (
                  <motion.div
                    key={s.label}
                    className="rounded-2xl border border-gray-200 bg-white p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="mb-4 flex justify-center text-gray-400">{icon}</div>
                    <div className="flex items-baseline justify-center">
                      <Counter target={s.val} className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl" />
                      <span className="text-2xl font-light text-gray-400 sm:text-3xl">{s.suffix}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-900">{s.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-500">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== OPTION E — Interactive Stats + Radial Animation (Stripe-style) ===== */}
        <div className="mb-6 mt-32">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-600">
            Option E — Interactive Stats + Radial Burst (Stripe-style)
          </p>
        </div>

        <InteractiveStatsSection />

      </div>
    </div>
  );
}
