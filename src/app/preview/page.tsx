"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ——— Shared data ——— */

interface Persona {
  icon: ReactNode;
  title: string;
  situation: string;
  pain: string;
  outcome: string;
  proof: { metric: string; label: string };
  cta: string;
}

const PERSONAS: Persona[] = [
  {
    icon: <Rocket className="h-4 w-4" />,
    title: "Solo Founders & Small Teams",
    situation: "The founder doing it all",
    pain: "You\u2019re wearing every hat \u2014 CEO, marketer, support team. Marketing keeps falling to the bottom of the list.",
    outcome:
      "Solara runs your entire marketing \u2014 ads, SEO, social, content \u2014 so you can get back to building what matters.",
    proof: { metric: "25+", label: "hours saved per week" },
    cta: "See how founders use Solara",
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    title: "Growing Brands",
    situation: "The brand that outgrew DIY",
    pain: "You hired one marketer but need six. The last agency burned through your budget with nothing to show for it.",
    outcome:
      "Get the output of an entire marketing team \u2014 without the headcount, the overhead, or the agency runaround.",
    proof: { metric: "120+", label: "content pieces per month" },
    cta: "See how growing brands use Solara",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    title: "Scaling Businesses",
    situation: "The business ready to 10x",
    pain: "Your product is ready. Your pipeline isn\u2019t. Marketing became the bottleneck, not the accelerator.",
    outcome:
      "Scale from 10 campaigns to 100 without adding a single seat. Solara grows as fast as your ambition.",
    proof: { metric: "10x", label: "output, fraction of the cost" },
    cta: "See how scaling businesses use Solara",
  },
];

/* ——— Shared components ——— */

function SectionHeading() {
  return (
    <div className="text-center">
      <p className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
        Built for you
      </p>
      <h2
        className="mt-5 text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        You built something real.
        <br className="hidden sm:block" />
        Now it&apos;s time the right people find it.
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
        Solara AI was made for businesses like yours &mdash; ambitious, lean,
        and ready to grow.
      </p>
    </div>
  );
}

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

function OptionDivider({ label }: { label: string }) {
  return (
    <div className="mx-auto my-12 max-w-5xl border-t border-dashed border-gray-200 pt-8 text-center">
      <span className="text-sm font-medium tracking-wide text-gray-400 uppercase">
        {label}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   OPTION Q — Labeled Sections
   Clear "Your situation" / "With Solara" labels
   ═══════════════════════════════════════════════════════════ */

function OptionQ() {
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

            {/* YOUR SITUATION */}
            <p className="relative text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
              Your situation
            </p>
            <p className="relative mt-4 text-xl leading-relaxed text-gray-700 sm:text-2xl sm:leading-relaxed">
              {p.pain}
            </p>

            <div className="my-8 h-px w-full bg-gray-100" />

            {/* WITH SOLARA */}
            <p className="relative text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
              With Solara
            </p>
            <p className="relative mt-4 max-w-2xl text-xl font-medium leading-relaxed text-gray-900 sm:text-2xl sm:leading-relaxed">
              {p.outcome}
            </p>

            {/* Proof + CTA */}
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {p.proof.metric}
                </span>
                <span className="text-sm text-gray-400">
                  {p.proof.label}
                </span>
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
   OPTION R — Two-Column Card
   Problem left, solution right
   ═══════════════════════════════════════════════════════════ */

function OptionR() {
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
            className="relative mt-12 grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2"
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

            {/* Left — the problem */}
            <div className="relative p-10 sm:p-12">
              <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                Your situation
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 sm:text-xl sm:leading-relaxed">
                {p.pain}
              </p>
            </div>

            {/* Right — the solution */}
            <div className="relative border-t border-gray-100 bg-gray-50/50 p-10 sm:p-12 md:border-l md:border-t-0">
              <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
                With Solara
              </p>
              <p className="mt-4 text-lg font-medium leading-relaxed text-gray-900 sm:text-xl sm:leading-relaxed">
                {p.outcome}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">
                    {p.proof.metric}
                  </span>
                  <span className="text-sm text-gray-400">
                    {p.proof.label}
                  </span>
                </div>
                <button className="group flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-purple-600">
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
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
          Section 5 — Card Interior Variations
        </h1>
        <p className="mt-2 text-center text-lg text-gray-400">
          2 options — same tabs, different card layouts
        </p>
      </div>

      <OptionDivider label="Option Q — Labeled Sections (Your Situation / With Solara)" />
      <OptionQ />

      <OptionDivider label="Option R — Two-Column Split (Problem left, Solution right)" />
      <OptionR />
    </div>
  );
}
