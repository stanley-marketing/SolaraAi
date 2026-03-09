"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Rocket, TrendingUp, Zap, ArrowRight, Layers, Shield } from "lucide-react";

/* ─── Consolidated Personas (Research: 5 → 3) ─── */

interface Persona {
  icon: ReactNode;
  situation: string;
  title: string;
  pain: string;
  outcome: string;
  proof: { metric: string; label: string };
  cta: string;
}

const PERSONAS: Persona[] = [
  {
    icon: <Rocket className="h-5 w-5" />,
    situation: "The founder doing it all",
    title: "Solo Founders & Small Teams",
    pain: "You're the CEO, the marketer, the support team, and the one figuring out Google Ads at midnight.",
    outcome:
      "Solara runs your entire marketing — ads, SEO, social, content — so you can get back to building what matters.",
    proof: { metric: "25+", label: "hours saved per week" },
    cta: "See how founders use Solara",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    situation: "The brand that outgrew DIY",
    title: "Growing Brands",
    pain: "You hired one marketer. You need six. The agency burned through your budget with nothing to show.",
    outcome:
      "6 AI agents give you the output of a full marketing department — without the headcount, the overhead, or the excuses.",
    proof: { metric: "120+", label: "content pieces per month" },
    cta: "See how growing brands use Solara",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    situation: "The business ready to 10x",
    title: "Scaling Businesses",
    pain: "Your product is ready. Your pipeline isn't. Marketing became the bottleneck, not the accelerator.",
    outcome:
      "Scale from 10 campaigns to 100 without adding a single seat. Solara grows as fast as your ambition.",
    proof: { metric: "10x", label: "output, fraction of the cost" },
    cta: "See how scaling businesses use Solara",
  },
];

/* ─── Shared heading ─── */

const HEADING = "You built something real.";
const HEADING_ACCENT = "Now it's time the right people find it.";
const SUBTITLE =
  "Solara AI was made for businesses like yours — ambitious, lean, and ready to grow.";

function SectionHeading() {
  return (
    <>
      <h2
        className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {HEADING}
        <br className="hidden sm:block" />{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          {HEADING_ACCENT}
        </span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-500">
        {SUBTITLE}
      </p>
    </>
  );
}

/* ─── Divider between options ─── */

function OptionDivider({ label }: { label: string }) {
  return (
    <div className="mx-auto max-w-5xl border-t border-dashed border-gray-200 px-6 py-12">
      <p className="text-center text-sm font-semibold tracking-widest text-gray-300 uppercase">
        {label}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION H — Situation Switcher (Interactive Tabs)
   Monday.com-style — 3 tabs, content adapts per selection
   ═══════════════════════════════════════════════════════════ */

function OptionH() {
  const [active, setActive] = useState(0);
  const p = PERSONAS[active];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading />

        {/* Tab bar */}
        <div className="relative mt-16 flex justify-center gap-2">
          {PERSONAS.map((persona, i) => (
            <button
              key={persona.title}
              onClick={() => setActive(i)}
              className={cn(
                "relative rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
                active === i
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                {persona.icon}
                <span className="hidden sm:inline">{persona.title}</span>
                <span className="sm:hidden">{persona.title.split(" ")[0]}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-12 rounded-2xl bg-gray-50/60 p-10 sm:p-14"
            style={{ border: "1px solid #eaecf0" }}
          >
            <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
              {p.situation}
            </p>

            <p className="mt-6 text-2xl leading-relaxed text-gray-400 italic sm:text-3xl">
              &ldquo;{p.pain}&rdquo;
            </p>

            <div className="my-8 h-px w-16 bg-gray-200" />

            <p className="max-w-2xl text-lg leading-relaxed text-gray-700">
              {p.outcome}
            </p>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Proof metric */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {p.proof.metric}
                </span>
                <span className="text-sm text-gray-400">{p.proof.label}</span>
              </div>

              {/* CTA */}
              <button className="group flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-purple-600">
                {p.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION I — Pain → Outcome Cards (Typography-Driven)
   Stripe/HubSpot-style — 3 cards, specific pain + result
   ═══════════════════════════════════════════════════════════ */

function OptionI() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PERSONAS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl bg-white p-8 transition-shadow hover:shadow-lg"
              style={{ border: "1px solid #eaecf0" }}
            >
              {/* Icon + Situation */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600"
                >
                  {p.icon}
                </div>
                <p className="text-sm font-medium text-gray-400">
                  {p.situation}
                </p>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                {p.title}
              </h3>

              {/* Pain */}
              <p className="mt-4 flex-1 text-base leading-relaxed text-gray-400 italic">
                &ldquo;{p.pain}&rdquo;
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-100" />

              {/* Outcome */}
              <p className="text-base leading-relaxed text-gray-600">
                {p.outcome}
              </p>

              {/* Proof + CTA */}
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <span className="text-3xl font-bold tracking-tight text-gray-900">
                    {p.proof.metric}
                  </span>
                  <p className="mt-1 text-xs text-gray-400">{p.proof.label}</p>
                </div>
                <button className="group/cta flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION J — Proof-First Editorial (Stacked Rows)
   Large metrics lead, text follows — alternating layout
   ═══════════════════════════════════════════════════════════ */

function OptionJ() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading />

        <div className="mt-20 space-y-20">
          {PERSONAS.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "flex flex-col gap-10 md:flex-row md:items-center md:gap-20",
                  !isEven && "md:flex-row-reverse"
                )}
              >
                {/* Metric side */}
                <div className="flex flex-col items-center md:w-1/3">
                  <span
                    className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-7xl font-bold tracking-tighter text-transparent sm:text-8xl"
                  >
                    {p.proof.metric}
                  </span>
                  <p className="mt-2 text-center text-sm text-gray-400">
                    {p.proof.label}
                  </p>
                </div>

                {/* Content side */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                      {p.icon}
                    </div>
                    <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                      {p.situation}
                    </p>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                    {p.title}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-gray-400 italic">
                    &ldquo;{p.pain}&rdquo;
                  </p>

                  <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600">
                    {p.outcome}
                  </p>

                  <button className="group mt-6 flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-purple-600">
                    {p.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION K — Proof Grid (2×2, Creatify-style)
   Metric-driven cards for self-identification
   ═══════════════════════════════════════════════════════════ */

const ADVANTAGES: {
  icon: ReactNode;
  metric: string;
  label: string;
  title: string;
  description: string;
}[] = [
  {
    icon: <Rocket className="h-5 w-5" />,
    metric: "25+",
    label: "HOURS BACK EVERY WEEK",
    title: "Built for founders doing it all",
    description:
      "You're the CEO, marketer, and support team. Solara takes marketing off your plate entirely \u2014 so you can get back to building.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    metric: "120+",
    label: "CONTENT PIECES / MONTH",
    title: "Built for brands that outgrew DIY",
    description:
      "You hired one marketer but need six. Solara delivers a full department's output \u2014 without the headcount or the overhead.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    metric: "100%",
    label: "HUMAN-REVIEWED",
    title: "Built for brands burned by agencies",
    description:
      "No more junior coordinators or recycled strategies. Every deliverable is reviewed by a senior strategist who actually knows your brand.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    metric: "10x",
    label: "OUTPUT MULTIPLIER",
    title: "Built for businesses ready to scale",
    description:
      "Your product is ready. Scale from 10 campaigns to 100 overnight \u2014 without growing your payroll.",
  },
];

function OptionK() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Label */}
        <p className="text-center text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
          Built for you
        </p>

        {/* Headline */}
        <h2
          className="mt-5 text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            You built something real.
          </span>{" "}
          Now it&apos;s time the right people find it.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-500">
          Whether you&apos;re a solo founder or a scaling brand, Solara fits your
          world &mdash; not the other way around.
        </p>

        {/* 2×2 Grid */}
        <div className="mx-auto mt-16 grid grid-cols-1 gap-5 md:grid-cols-2" style={{ maxWidth: 1264 }}>
          {ADVANTAGES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white p-8 sm:p-10"
              style={{ border: "1px solid #eaecf0", height: 301, maxWidth: 620 }}
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                {a.icon}
              </div>

              {/* Metric + Label */}
              <p className="mt-5 text-4xl font-bold tracking-tight text-gray-900">
                {a.metric}
              </p>
              <p className="mt-1 text-xs font-medium tracking-widest text-gray-400 uppercase">
                {a.label}
              </p>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {a.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PREVIEW PAGE
   ═══════════════════════════════════════════════════════════ */

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 pt-16">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Section 5 — Built For You
        </h1>
        <p className="mt-2 text-center text-lg text-gray-400">
          4 options — scroll to compare
        </p>
      </div>

      <OptionDivider label="Option H — Situation Switcher (Interactive Tabs)" />
      <OptionH />

      <OptionDivider label="Option I — Pain → Outcome Cards (Typography)" />
      <OptionI />

      <OptionDivider label="Option J — Proof-First Editorial (Stacked)" />
      <OptionJ />

      <OptionDivider label="Option K — Proof Grid (2×2 Metric Cards)" />
      <OptionK />
    </div>
  );
}
