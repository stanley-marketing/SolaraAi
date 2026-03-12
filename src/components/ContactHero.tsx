"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

/* ──────────────────────────────────────────────
   ANIMATION HELPERS
   ────────────────────────────────────────────── */

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   CONTACT HERO
   ────────────────────────────────────────────── */

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-28">

      {/* Atmospheric: fine dot-grid texture */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 0.042 }}
      >
        <defs>
          <pattern
            id="contact-hero-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#111111" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-hero-dots)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left column: copy */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <FadeUp delay={0}>
              <p
                className="text-xs font-semibold uppercase tracking-[0.28em]"
                style={{ color: "#9ca3af" }}
              >
                Get in touch
              </p>
            </FadeUp>

            {/* H1 */}
            <FadeUp delay={0.08}>
              <h1
                className="mt-5 max-w-[560px] leading-[1.05] tracking-[-0.02em] text-ink-900"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontFamily: "var(--font-display-playfair)",
                  fontWeight: 400,
                }}
              >
                Book a free strategy call
              </h1>
            </FadeUp>

            {/* Brand accent line */}
            <FadeUp delay={0.16}>
              <div
                className="mt-8"
                style={{
                  width: "60px",
                  height: "2px",
                  background:
                    "linear-gradient(to right, rgba(168,85,247,0.9), rgba(236,72,153,0.7), rgba(251,146,60,0.5))",
                  borderRadius: "2px",
                }}
              />
            </FadeUp>

            {/* Body */}
            <FadeUp delay={0.25}>
              <p
                className="mt-8 max-w-lg text-ink-700/70"
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                  lineHeight: 1.65,
                  fontFamily: "var(--font-body)",
                }}
              >
                Tell us where your marketing stands today. In 45 minutes,
                we&apos;ll map out what Solara can do for your business — no
                pitch, no pressure.
              </p>
            </FadeUp>

            {/* Email fallback */}
            <FadeUp delay={0.33}>
              <p
                className="mt-6"
                style={{
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-body)",
                  color: "#9ca3af",
                }}
              >
                Prefer email?{" "}
                <a
                  href="mailto:contact@solaraai.com"
                  className="underline underline-offset-2 transition-colors duration-150 hover:text-ink-900"
                >
                  contact@solaraai.com
                </a>
              </p>
            </FadeUp>

          </div>

          {/* Right column: Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
          >
            <CalendlyEmbed />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
