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

      {/* Content — stacked layout for landscape Calendly */}
      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading block */}
        <div className="mb-10 text-center">
          <FadeUp delay={0}>
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: "#6b7280" }}
            >
              Get in touch
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1
              className="mt-5 leading-[1.05] tracking-[-0.02em] text-ink-900"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontFamily: "var(--font-display-playfair)",
                fontWeight: 400,
              }}
            >
              Book a free strategy call
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <div
              className="mx-auto mt-8"
              style={{
                width: "60px",
                height: "2px",
                background:
                  "linear-gradient(to right, rgba(168,85,247,0.9), rgba(236,72,153,0.7), rgba(251,146,60,0.5))",
                borderRadius: "2px",
              }}
            />
          </FadeUp>
        </div>

        {/* Calendly embed — full width for landscape */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="w-full overflow-hidden rounded-2xl"
          style={{ border: "1px solid #eaecf0" }}
        >
          <CalendlyEmbed />
        </motion.div>

        {/* Description + email below */}
        <div className="mt-10 text-center">
          <FadeUp delay={0.25}>
            <p
              className="mx-auto max-w-lg text-ink-700/70"
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

          <FadeUp delay={0.33}>
            <p
              className="mt-6"
              style={{
                fontSize: "0.875rem",
                fontFamily: "var(--font-body)",
                color: "#6b7280",
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

      </div>
    </section>
  );
}
