"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  Ruler,
  Shield,
  Link,
  BarChart3,
  Zap,
} from "lucide-react";
import { AD_GEN_CONTENT } from "./content";

const { quality } = AD_GEN_CONTENT;

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Ruler,
  Shield,
  Link,
  BarChart3,
  Zap,
};

const CARD_ACCENTS = [
  "rgba(244,114,182,0.12)",
  "rgba(167,139,250,0.12)",
  "rgba(251,146,60,0.12)",
  "rgba(52,211,153,0.12)",
  "rgba(96,165,250,0.12)",
  "rgba(251,191,36,0.12)",
] as const;

const CARD_BORDERS = [
  "rgba(244,114,182,0.2)",
  "rgba(167,139,250,0.2)",
  "rgba(251,146,60,0.2)",
  "rgba(52,211,153,0.2)",
  "rgba(96,165,250,0.2)",
  "rgba(251,191,36,0.2)",
] as const;

export function AdGenQuality() {
  const prefersReduced = useReducedMotion();
  const noMotion = prefersReduced === true;

  return (
    <section
      className="relative overflow-hidden px-6 py-28 sm:px-10"
      style={{
        background:
          "linear-gradient(170deg, #0d1017 0%, #0f0d1a 40%, #130d14 70%, #0d1017 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 30% 0%, rgba(167,139,250,0.15) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 75% 100%, rgba(244,114,182,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.04,
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
            {quality.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            {quality.headline}
          </h2>
          <p
            className="mt-4 text-base leading-relaxed text-white/60"
            style={{ maxWidth: "52ch" }}
          >
            {quality.subheadline}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quality.features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={noMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className="group relative rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(145deg, ${CARD_ACCENTS[i]} 0%, rgba(255,255,255,0.03) 100%)`,
                border: `1px solid ${CARD_BORDERS[i]}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(145deg, ${CARD_ACCENTS[i].replace("0.12", "0.2")} 0%, transparent 60%)`,
                }}
              />
              <div className="relative">
                 <div className="mb-4 block">
                   {(() => {
                     const IconComponent = ICON_MAP[feature.icon];
                     return IconComponent ? (
                       <IconComponent className="h-8 w-8 text-white" />
                     ) : null;
                   })()}
                 </div>
                 <h3 className="mb-2 text-[0.95rem] font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>
                   {feature.title}
                 </h3>
                 <p className="text-[0.875rem] leading-relaxed text-white/60">
                   {feature.description}
                 </p>
               </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
