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

/* ─── Shared tab bar (reused by all card variants) ─── */

function TabBar({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <div className="relative mt-16 flex justify-center gap-2">
      {PERSONAS.map((persona, i) => (
        <button
          key={persona.title}
          onClick={() => setActive(i)}
          className={cn(
            "relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
            active === i
              ? "bg-black text-white shadow-lg"
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
  );
}

/* ─── Shared proof + CTA row ─── */

function ProofRow({ p }: { p: Persona }) {
  return (
    <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold tracking-tight text-gray-900">
          {p.proof.metric}
        </span>
        <span className="text-sm text-gray-400">{p.proof.label}</span>
      </div>
      <button className="group flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-purple-600">
        {p.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION L — Soft Gradient Card
   Radial gradient glow in corner for visual warmth
   ═══════════════════════════════════════════════════════════ */

function OptionL() {
  const [active, setActive] = useState(0);
  const p = PERSONAS[active];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading />
        <TabBar active={active} setActive={setActive} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="relative mt-12 overflow-hidden rounded-2xl p-10 sm:p-14"
            style={{ border: "1px solid #eaecf0" }}
          >
            {/* Gradient glow */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(236,72,153,0.2) 40%, transparent 70%)",
              }}
            />

            <p className="relative text-xs font-semibold tracking-widest text-gray-500 uppercase">
              {p.situation}
            </p>
            <p className="relative mt-6 text-2xl leading-snug text-gray-600 italic sm:text-3xl">
              &ldquo;{p.pain}&rdquo;
            </p>
            <div className="my-8 h-px w-16 bg-gray-200" />
            <p className="relative max-w-2xl text-xl font-medium leading-relaxed text-gray-900">
              {p.outcome}
            </p>
            <ProofRow p={p} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION M — Large Watermark Icon
   Oversized persona icon as subtle background element
   ═══════════════════════════════════════════════════════════ */

const PERSONA_LARGE_ICONS = [
  <Rocket className="h-full w-full" />,
  <TrendingUp className="h-full w-full" />,
  <Zap className="h-full w-full" />,
];

function OptionM() {
  const [active, setActive] = useState(0);
  const p = PERSONAS[active];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading />
        <TabBar active={active} setActive={setActive} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="relative mt-12 overflow-hidden rounded-2xl bg-gray-50/60 p-10 sm:p-14"
            style={{ border: "1px solid #eaecf0" }}
          >
            {/* Large watermark icon */}
            <div className="pointer-events-none absolute -bottom-8 right-8 h-48 w-48 text-gray-100 sm:h-56 sm:w-56">
              {PERSONA_LARGE_ICONS[active]}
            </div>

            <p className="relative text-xs font-semibold tracking-widest text-gray-500 uppercase">
              {p.situation}
            </p>
            <p className="relative mt-6 text-2xl leading-snug text-gray-600 italic sm:text-3xl">
              &ldquo;{p.pain}&rdquo;
            </p>
            <div className="my-8 h-px w-16 bg-gray-200" />
            <p className="relative max-w-2xl text-xl font-medium leading-relaxed text-gray-900">
              {p.outcome}
            </p>
            <ProofRow p={p} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION N — Two-Column Split
   Text left, proof metric + CTA right
   ═══════════════════════════════════════════════════════════ */

function OptionN() {
  const [active, setActive] = useState(0);
  const p = PERSONAS[active];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading />
        <TabBar active={active} setActive={setActive} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid grid-cols-1 gap-10 rounded-2xl bg-gray-50/60 p-10 sm:p-14 md:grid-cols-[1fr_240px]"
            style={{ border: "1px solid #eaecf0" }}
          >
            {/* Left — text */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                {p.situation}
              </p>
              <p className="mt-6 text-2xl leading-snug text-gray-600 italic sm:text-3xl">
                &ldquo;{p.pain}&rdquo;
              </p>
              <div className="my-8 h-px w-16 bg-gray-200" />
              <p className="max-w-xl text-xl font-medium leading-relaxed text-gray-900">
                {p.outcome}
              </p>
            </div>

            {/* Right — proof + CTA */}
            <div className="flex flex-col items-start justify-center gap-6 md:items-end md:text-right">
              <div>
                <span className="text-6xl font-bold tracking-tight text-gray-900">
                  {p.proof.metric}
                </span>
                <p className="mt-1 text-sm text-gray-400">{p.proof.label}</p>
              </div>
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
   OPTION O — Left Accent Bar
   Gradient left border for visual punch
   ═══════════════════════════════════════════════════════════ */

function OptionO() {
  const [active, setActive] = useState(0);
  const p = PERSONAS[active];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading />
        <TabBar active={active} setActive={setActive} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="relative mt-12 overflow-hidden rounded-2xl bg-white p-10 sm:p-14"
            style={{ border: "1px solid #eaecf0" }}
          >
            {/* Gradient left accent bar */}
            <div
              className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
              style={{
                background: "linear-gradient(to bottom, #a855f7, #ec4899, #f97316)",
              }}
            />

            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              {p.situation}
            </p>
            <p className="mt-6 text-2xl leading-snug text-gray-600 italic sm:text-3xl">
              &ldquo;{p.pain}&rdquo;
            </p>
            <div className="my-8 h-px w-16 bg-gray-200" />
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-gray-900">
              {p.outcome}
            </p>
            <ProofRow p={p} />
          </motion.div>
        </AnimatePresence>
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
          Section 5 — Card Style Variations
        </h1>
        <p className="mt-2 text-center text-lg text-gray-400">
          4 card treatments — scroll to compare
        </p>
      </div>

      <OptionDivider label="Option L — Soft Gradient Glow" />
      <OptionL />

      <OptionDivider label="Option M — Large Watermark Icon" />
      <OptionM />

      <OptionDivider label="Option N — Two-Column Split" />
      <OptionN />

      <OptionDivider label="Option O — Left Accent Bar" />
      <OptionO />
    </div>
  );
}
