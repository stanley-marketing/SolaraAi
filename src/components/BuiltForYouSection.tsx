"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Rocket, TrendingUp, Zap, ArrowRight } from "lucide-react";

/* ─── Personas (3 consolidated from research) ─── */

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
    pain: "You\u2019re the CEO, the marketer, the support team, and the one figuring out Google Ads at midnight.",
    outcome:
      "Solara runs your entire marketing \u2014 ads, SEO, social, content \u2014 so you can get back to building what matters.",
    proof: { metric: "25+", label: "hours saved per week" },
    cta: "See how founders use Solara",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    situation: "The brand that outgrew DIY",
    title: "Growing Brands",
    pain: "You hired one marketer. You need six. The agency burned through your budget with nothing to show.",
    outcome:
      "6 AI agents give you the output of a full marketing department \u2014 without the headcount, the overhead, or the excuses.",
    proof: { metric: "120+", label: "content pieces per month" },
    cta: "See how growing brands use Solara",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    situation: "The business ready to 10x",
    title: "Scaling Businesses",
    pain: "Your product is ready. Your pipeline isn\u2019t. Marketing became the bottleneck, not the accelerator.",
    outcome:
      "Scale from 10 campaigns to 100 without adding a single seat. Solara grows as fast as your ambition.",
    proof: { metric: "10x", label: "output, fraction of the cost" },
    cta: "See how scaling businesses use Solara",
  },
];

/* ─── Heading ─── */

const HEADING = "You built something real.";
const HEADING_ACCENT = "Now it\u2019s time the right people find it.";
const SUBTITLE =
  "Solara AI was made for businesses like yours \u2014 ambitious, lean, and ready to grow.";

export default function BuiltForYouSection() {
  const [active, setActive] = useState(0);
  const p = PERSONAS[active];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
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
