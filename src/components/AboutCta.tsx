"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-28">
      {/* Soft top divider — barely-there rule to close the section above */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,0,0,0.07) 28%, rgba(0,0,0,0.07) 72%, transparent)",
        }}
      />

      {/* Atmospheric: fine dot-grid texture (matches hero) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 0.042 }}
      >
        <defs>
          <pattern
            id="about-cta-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#111111" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-cta-dots)" />
      </svg>


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-xl text-center">
        {/* Logomark */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex justify-center"
        >
          <Image
            src="/solara-icon.svg"
            alt="Solara AI"
            width={44}
            height={44}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-display-playfair)] text-4xl font-medium leading-tight tracking-tight text-ink-900 md:text-5xl"
        >
          {HEADING}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed"
          style={{ color: "#6b7280" }}
        >
          {BODY}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
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
