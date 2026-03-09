"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "framer-motion";

/* ─── Animated Counter ─── */
function Counter({
  target,
  className,
  prefix = "",
  suffix = "",
}: {
  target: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const ctrl = animate(count, target, { duration: 2, ease: "easeOut" });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => {
        ctrl.stop();
        unsub();
      };
    }
  }, [inView, target, count, rounded]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

/* ─── Circular Progress Ring ─── */
function ProgressRing({
  value,
  size = 200,
  strokeWidth = 12,
  label,
  sublabel,
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = useSpring(0, { stiffness: 40, damping: 15 });
  const strokeDashoffset = useTransform(
    progress,
    (v) => circumference - (v / 100) * circumference
  );

  useEffect(() => {
    if (inView) progress.set(value);
  }, [inView, value, progress]);

  return (
    <div ref={ref} className="relative flex flex-col items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#ring-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
        <defs>
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-baseline">
          <Counter target={value} className="text-5xl font-bold tracking-tighter text-gray-900" />
          <span className="text-2xl font-bold text-gray-300">%</span>
        </div>
        {label && <p className="mt-1 text-sm font-medium text-gray-500">{label}</p>}
      </div>
    </div>
  );
}

/* ─── Animated Bar ─── */
function AnimatedBar({ width, delay = 0 }: { width: string; delay?: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-gray-100">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
      />
    </div>
  );
}

/* ─── Section Label ─── */
function OptionLabel({ label }: { label: string }) {
  return (
    <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-purple-600">
      {label}
    </h2>
  );
}

const HEADLINE = (
  <h2
    className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
    style={{ fontFamily: "var(--font-display)" }}
  >
    90% of what made great marketing expensive
    <br className="hidden sm:block" /> was never skill.{" "}
    <span className="text-gray-400">It was time.</span>
  </h2>
);

export default function PreviewPage() {
  const [hoveredOld, setHoveredOld] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Section 4 — The Math Changed
        </h1>
        <p className="mb-24 text-center text-lg text-gray-500">
          5 options. Scroll to compare.
        </p>

        {/* ====== OPTION A — Stripe Stats Row ====== */}
        <div className="mb-48">
          <OptionLabel label="Option A — Stripe Stats Row" />
          <section className="py-24">
            <div className="mx-auto max-w-5xl">
              {HEADLINE}

              <div className="mt-20 grid grid-cols-4 gap-8 border-t border-gray-100 pt-16">
                {[
                  { value: 90, suffix: "%", label: "AI-powered", sub: "Execution, speed, and scale" },
                  { value: 6, suffix: "", label: "AI managers", sub: "Working 24/7 for you" },
                  { value: 24, suffix: "/7", label: "Always on", sub: "No delays, no bottlenecks" },
                  { value: 10, suffix: "%", label: "Human expertise", sub: "Strategy, direction, judgment" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="text-center"
                  >
                    <div className="flex items-baseline justify-center">
                      <Counter
                        target={stat.value}
                        suffix={stat.suffix}
                        className="text-5xl font-bold tracking-tighter text-gray-900"
                      />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-900">{stat.label}</p>
                    <p className="mt-1 text-sm text-gray-500">{stat.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* ====== OPTION B — Bento Grid ====== */}
        <div className="mb-48">
          <OptionLabel label="Option B — Bento Grid" />
          <section className="py-24">
            <div className="mx-auto max-w-5xl">
              {HEADLINE}

              <div className="mt-16 grid grid-cols-3 grid-rows-2 gap-4">
                {/* Big card: 90% ring */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="col-span-2 row-span-2 flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-10"
                  style={{ border: "1px solid #eaecf0" }}
                >
                  <ProgressRing value={90} size={220} label="AI-powered" />
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {["Ads", "SEO", "Content", "Social", "CMS", "Leads"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600"
                        style={{ border: "1px solid #eaecf0" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Speed card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col justify-center rounded-2xl bg-gray-900 p-6 text-white"
                >
                  <svg viewBox="0 0 24 24" className="mb-3 h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="mt-1 text-sm text-gray-400">No delays, no bottlenecks, no timezone limits</p>
                </motion.div>

                {/* Human card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col justify-center rounded-2xl bg-gray-50 p-6"
                  style={{ border: "1px solid #eaecf0" }}
                >
                  <div className="flex items-baseline gap-1">
                    <Counter target={10} className="text-3xl font-bold tracking-tighter text-gray-900" />
                    <span className="text-lg font-bold text-gray-300">%</span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400">Human expertise</p>
                  <p className="mt-3 text-sm text-gray-500">Strategy, direction, and growth ownership</p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* ====== OPTION C — Cost Comparison ====== */}
        <div className="mb-48">
          <OptionLabel label="Option C — Cost Comparison" />
          <section className="py-24">
            <div className="mx-auto max-w-4xl">
              {HEADLINE}
              <p className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-500">
                See what changes when AI handles the heavy lifting.
              </p>

              <div className="mt-16 grid grid-cols-2 gap-6">
                {/* Old way */}
                <div className="rounded-2xl bg-gray-50 p-8" style={{ border: "1px solid #eaecf0" }}>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">The old way</p>
                  <div className="mt-6 space-y-4">
                    {[
                      { label: "Marketing agency", cost: "$8,000/mo" },
                      { label: "2 freelancers", cost: "$4,000/mo" },
                      { label: "Ad management tool", cost: "$500/mo" },
                      { label: "SEO tool", cost: "$300/mo" },
                      { label: "Social scheduler", cost: "$200/mo" },
                      { label: "CMS platform", cost: "$100/mo" },
                    ].map((item, i) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-red-400">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                            </svg>
                          </span>
                          <span className="text-sm text-gray-500 line-through decoration-gray-300">{item.label}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-400 line-through decoration-gray-300">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-500">Total</span>
                      <span className="text-lg font-bold text-gray-400 line-through decoration-gray-300">$13,100/mo</span>
                    </div>
                  </div>
                </div>

                {/* New way */}
                <div className="rounded-2xl bg-gray-900 p-8 text-white">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">With Solara</p>
                  <div className="mt-6 space-y-4">
                    {[
                      "AI Ads Manager",
                      "AI Creative Manager",
                      "AI SEO & Search",
                      "AI CMS Manager",
                      "AI Social Media Manager",
                      "AI Leads Manager",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="text-emerald-400">
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-400">Starting at</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-white">$299</span>
                        <span className="text-sm text-gray-400">/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ====== OPTION D — Animated Bars + Human Card ====== */}
        <div className="mb-48">
          <OptionLabel label="Option D — Animated Capability Bars" />
          <section className="py-24">
            <div className="mx-auto max-w-4xl">
              {HEADLINE}

              <div className="mt-16 grid grid-cols-[1fr_220px] items-start gap-12">
                {/* AI bars */}
                <div>
                  <div className="mb-8 flex items-baseline gap-2">
                    <Counter target={90} className="text-5xl font-bold tracking-tighter text-gray-900" />
                    <span className="text-xl font-bold text-gray-300">%</span>
                    <span className="ml-2 text-sm font-medium text-gray-400">AI-powered</span>
                  </div>
                  <div className="space-y-5">
                    {[
                      { name: "Ad Campaigns", width: "95%", icon: "📊" },
                      { name: "Content Creation", width: "92%", icon: "✏️" },
                      { name: "SEO Optimization", width: "88%", icon: "🔍" },
                      { name: "Social Media", width: "90%", icon: "💬" },
                      { name: "Lead Capture", width: "85%", icon: "👥" },
                      { name: "Analytics & Reports", width: "94%", icon: "📈" },
                    ].map((bar, i) => (
                      <div key={bar.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-700">
                            <span className="text-base">{bar.icon}</span>
                            <span className="text-sm font-medium">{bar.name}</span>
                          </div>
                          <span className="text-xs text-gray-400">{bar.width}</span>
                        </div>
                        <AnimatedBar width={bar.width} delay={0.1 + i * 0.1} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Human card */}
                <div className="rounded-2xl bg-gray-50 p-6" style={{ border: "1px solid #eaecf0" }}>
                  <div className="flex items-baseline gap-1">
                    <Counter target={10} className="text-4xl font-bold tracking-tighter text-gray-900" />
                    <span className="text-xl font-bold text-gray-300">%</span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400">
                    Human expertise
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      { name: "Strategy", icon: "🎯" },
                      { name: "Direction", icon: "🧭" },
                      { name: "Growth ownership", icon: "🚀" },
                    ].map((t) => (
                      <div key={t.name} className="flex items-center gap-2.5">
                        <span>{t.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ====== OPTION E — Ring + Stat Cards Combo ====== */}
        <div className="mb-48">
          <OptionLabel label="Option E — Ring + Stat Cards" />
          <section className="py-24">
            <div className="mx-auto max-w-5xl">
              {HEADLINE}

              <div className="mt-20 flex items-center justify-center gap-16">
                {/* Ring */}
                <ProgressRing value={90} size={240} strokeWidth={14} label="AI-powered" />

                {/* Divider */}
                <div className="h-64 w-px bg-gray-100" />

                {/* Stat cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Execution",
                      desc: "Campaigns launch automatically",
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" strokeLinecap="round" />
                        </svg>
                      ),
                      title: "Speed",
                      desc: "24/7, no bottlenecks",
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Automation",
                      desc: "Every channel covered",
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7 16l4-8 4 4 5-9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      title: "Scale",
                      desc: "Unlimited capacity",
                    },
                  ].map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="rounded-xl bg-gray-50 p-5"
                      style={{ border: "1px solid #eaecf0" }}
                    >
                      <div className="mb-2 text-gray-400">{card.icon}</div>
                      <p className="text-sm font-semibold text-gray-900">{card.title}</p>
                      <p className="mt-0.5 text-xs text-gray-500">{card.desc}</p>
                    </motion.div>
                  ))}

                  {/* Human row spanning 2 cols */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="col-span-2 flex items-center gap-4 rounded-xl bg-gray-900 p-5 text-white"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">10% — Human expertise</p>
                      <p className="text-xs text-gray-400">Strategy, direction, and growth ownership</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
