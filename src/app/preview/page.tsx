"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

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

/* ─── Progress Ring ─── */
function ProgressRing({ value }: { value: number }) {
  const ref = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const r = 90;
  const circ = 2 * Math.PI * r;

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.style.transition = "stroke-dashoffset 1.5s ease-out";
      ref.current.style.strokeDashoffset = String(
        circ - (value / 100) * circ
      );
    }
  }, [isInView, circ, value]);

  return (
    <div ref={containerRef} className="relative flex h-56 w-56 flex-shrink-0 items-center justify-center">
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="#f3f4f6" strokeWidth="8" />
        <circle
          ref={ref}
          cx="100" cy="100" r={r} fill="none"
          stroke="url(#grad)" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={circ}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <div className="flex items-baseline">
          <Counter target={value} className="text-5xl font-bold tracking-tighter text-gray-900" />
          <span className="text-2xl font-bold text-gray-300">%</span>
        </div>
        <span className="text-xs font-medium uppercase tracking-widest text-gray-400">AI-powered</span>
      </div>
    </div>
  );
}

/* ─── Ford Quote Block (reusable, small) ─── */
function FordQuote() {
  return (
    <motion.blockquote
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-start gap-3 rounded-xl bg-gray-50 px-5 py-4"
      style={{ border: "1px solid #eaecf0" }}
    >
      <span className="mt-0.5 text-lg text-gray-300">&ldquo;</span>
      <div>
        <p className="text-sm leading-relaxed text-gray-500">
          If you always do what you&apos;ve always done, you&apos;ll always get what you&apos;ve always got.
        </p>
        <footer className="mt-1 text-xs text-gray-400">— Henry Ford</footer>
      </div>
    </motion.blockquote>
  );
}

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Section 4 — The Math Changed
        </h1>
        <p className="mb-20 text-center text-lg text-gray-500">
          5 options. Scroll to compare.
        </p>

        {/* ===== OPTION A — Stripe Stats Row ===== */}
        <div className="mb-40">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-purple-600">
            Option A — Stats Row (Stripe-inspired)
          </h2>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
              <h2
                className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                90% of what made great marketing expensive
                <br className="hidden sm:block" /> was never skill.{" "}
                <span className="text-gray-400">It was time.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-500">
                AI handles the heavy lifting. Humans steer the ship.
              </p>

              <div className="mt-16 border-t border-gray-200 pt-14">
                <div className="grid grid-cols-4 divide-x divide-gray-300 text-center">
                  {[
                    { val: 90, suffix: "%", label: "Handled by AI", sub: "execution, speed, and scale" },
                    { val: 6, suffix: "", label: "AI agents", sub: "working for you around the clock" },
                    { val: 24, suffix: "/7", label: "Always running", sub: "no delays, no bottlenecks" },
                    { val: 10, suffix: "%", label: "Human expertise", sub: "strategy, direction, growth" },
                  ].map((s, i) => (
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

              <div className="mx-auto mt-16 max-w-md">
                <FordQuote />
              </div>
            </div>
          </section>
        </div>

        {/* ===== OPTION B — Progress Ring + Icon Cards ===== */}
        <div className="mb-40">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-purple-600">
            Option B — Progress Ring + Icon Cards
          </h2>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
              <h2
                className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                90% of what made great marketing expensive
                <br className="hidden sm:block" /> was never skill.{" "}
                <span className="text-gray-400">It was time.</span>
              </h2>

              <div className="mt-20 flex items-center justify-center gap-20">
                <ProgressRing value={90} />

                <div className="max-w-sm space-y-5">
                  {[
                    { label: "Execution", desc: "Campaigns launched automatically", icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )},
                    { label: "Speed", desc: "24/7, no delays, no bottlenecks", icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" strokeLinecap="round" />
                      </svg>
                    )},
                    { label: "Automation", desc: "Every channel, every platform", icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )},
                    { label: "Scale", desc: "Unlimited capacity on demand", icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 16l4-8 4 4 5-9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )},
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-500" style={{ border: "1px solid #eaecf0" }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}

                  <div className="border-t border-gray-100 pt-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500">
                        The remaining <span className="font-semibold text-gray-900">10%</span> —
                        strategy, direction, and growth ownership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-16 max-w-md">
                <FordQuote />
              </div>
            </div>
          </section>
        </div>

        {/* ===== OPTION C — Before/After + Quote ===== */}
        <div className="mb-40">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-purple-600">
            Option C — Before/After Cards
          </h2>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
              <h2
                className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                90% of what made great marketing expensive
                <br className="hidden sm:block" /> was never skill.{" "}
                <span className="text-gray-400">It was time.</span>
              </h2>

              <div className="mx-auto mt-10 max-w-md">
                <FordQuote />
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                {/* Before */}
                <div className="rounded-2xl bg-gray-50 p-8" style={{ border: "1px solid #eaecf0" }}>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">What you&apos;ve always done</p>
                  <div className="mt-6 space-y-4">
                    {[
                      "Marketing agency — $5,000/mo",
                      "Freelance designer — $2,500/mo",
                      "SEO consultant — $3,000/mo",
                      "Social media manager — $3,500/mo",
                      "Ad specialist — $2,000/mo",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-50">
                          <span className="text-xs text-red-400">✕</span>
                        </div>
                        <span className="text-sm text-gray-400 line-through">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-gray-400">Total</span>
                      <span className="text-xl font-bold text-gray-300 line-through">$16,000/mo</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="rounded-2xl bg-gray-950 p-8">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-500">What you get with Solara</p>
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
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                          <span className="text-xs text-green-400">✓</span>
                        </div>
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-gray-800 pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-xl font-bold text-white">$299/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ===== OPTION D — Animated Bars + Quote ===== */}
        <div className="mb-40">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-purple-600">
            Option D — Animated Capability Bars
          </h2>
          <section className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
              <h2
                className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                90% of what made great marketing expensive
                <br className="hidden sm:block" /> was never skill.{" "}
                <span className="text-gray-400">It was time.</span>
              </h2>

              <div className="mt-14 grid grid-cols-[1fr_auto] items-start gap-16">
                {/* AI bars */}
                <div>
                  <div className="mb-6 flex items-baseline gap-2">
                    <Counter target={90} className="text-5xl font-bold tracking-tighter text-gray-900" />
                    <span className="text-xl font-bold text-gray-300">%</span>
                    <span className="ml-2 text-sm font-medium text-gray-400">AI-powered</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Ad Campaigns", width: "95%", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7 16l4-8 4 4 5-9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )},
                      { name: "Content Creation", width: "92%", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 20h9" strokeLinecap="round" />
                          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                      )},
                      { name: "SEO Optimization", width: "88%", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                        </svg>
                      )},
                      { name: "Social Media", width: "90%", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )},
                      { name: "Lead Capture", width: "85%", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" />
                        </svg>
                      )},
                      { name: "Analytics", width: "94%", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M18 20V10" strokeLinecap="round" />
                          <path d="M12 20V4" strokeLinecap="round" />
                          <path d="M6 20v-6" strokeLinecap="round" />
                        </svg>
                      )},
                    ].map((bar, i) => (
                      <div key={bar.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">{bar.icon}</span>
                            <span className="text-sm font-medium text-gray-700">{bar.name}</span>
                          </div>
                          <span className="text-xs text-gray-400">{bar.width}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: bar.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <FordQuote />
                  </div>
                </div>

                {/* Human side */}
                <div className="w-48 rounded-2xl bg-gray-50 p-5" style={{ border: "1px solid #eaecf0" }}>
                  <div className="flex items-baseline gap-1">
                    <Counter target={10} className="text-3xl font-bold tracking-tighter text-gray-900" />
                    <span className="text-lg font-bold text-gray-300">%</span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400">Human</p>
                  <div className="mt-5 space-y-3">
                    {[
                      { name: "Strategy", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8l4 4-4 4-4-4 4-4z" />
                        </svg>
                      )},
                      { name: "Direction", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )},
                      { name: "Growth", icon: (
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )},
                    ].map((t) => (
                      <div key={t.name} className="flex items-center gap-2.5">
                        <span className="text-gray-400">{t.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ===== OPTION E — Dark Cinematic ===== */}
        <div className="mb-40">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-purple-600">
            Option E — Dark Cinematic
          </h2>
          <section className="rounded-3xl bg-gray-950 px-6 py-24">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl tracking-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.15]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                90% of what made great marketing expensive
                <br className="hidden sm:block" /> was never skill.{" "}
                <span className="text-gray-500">It was time.</span>
              </motion.h2>

              <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-8">
                {[
                  { val: 90, suffix: "%", label: "AI execution", desc: "Speed, automation, scale", icon: (
                    <svg viewBox="0 0 24 24" className="mx-auto mb-3 h-7 w-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )},
                  { val: 6, suffix: "", label: "AI agents", desc: "Running 24/7 for you", icon: (
                    <svg viewBox="0 0 24 24" className="mx-auto mb-3 h-7 w-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )},
                  { val: 10, suffix: "%", label: "Human expertise", desc: "Strategy & direction", icon: (
                    <svg viewBox="0 0 24 24" className="mx-auto mb-3 h-7 w-7 text-orange-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )},
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    {s.icon}
                    <div className="flex items-baseline justify-center">
                      <Counter target={s.val} className="text-4xl font-bold tracking-tight text-white" />
                      <span className="text-xl font-bold text-gray-600">{s.suffix}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-400">{s.label}</p>
                    <p className="text-xs text-gray-600">{s.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mx-auto mt-16 max-w-lg rounded-xl border border-gray-800 bg-gray-900/50 px-5 py-4"
              >
                <p className="text-sm leading-relaxed text-gray-400">
                  &ldquo;If you always do what you&apos;ve always done, you&apos;ll always get what you&apos;ve always got.&rdquo;
                </p>
                <footer className="mt-1 text-xs text-gray-600">— Henry Ford</footer>
              </motion.blockquote>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
