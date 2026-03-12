"use client";

import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   COPY
   ────────────────────────────────────────────── */

const HEADING = "See if Solara is a fit";
const BODY =
  "If you've read this far, you're already asking the right questions. Let's spend 30 minutes finding out if Solara is the right answer for your team.";
const CTA_TEXT = "Book a Free 30-Minute Call";
const CTA_HREF = "https://calendly.com/ilay-mor-solaraai/30min";

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */

export function AboutCta() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-28">
      {/* Soft top divider — barely-there rule to close the section above */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,0,0,0.07) 28%, rgba(0,0,0,0.07) 72%, transparent)",
        }}
      />

      {/* Ambient glow — a single, still radial gradient anchored to the bottom center.
          Deliberately static (no animation) so it reads as texture, not emphasis. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 110%, rgba(168,85,247,0.05) 0%, rgba(236,72,153,0.025) 45%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-display-playfair)] text-4xl font-bold leading-tight tracking-tight text-ink-900 md:text-5xl"
        >
          {HEADING}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed"
          style={{ color: "#6b7280" }}
        >
          {BODY}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[999px] bg-black px-6 py-3 font-[family-name:var(--font-body)] text-[14px] font-medium tracking-[1px] text-white transition-colors duration-200 hover:bg-gray-700"
          >
            {CTA_TEXT}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
