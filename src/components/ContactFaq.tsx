"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const FAQS = [
  {
    q: "What does Solara actually do?",
    a: "Solara runs your marketing end-to-end — paid ads, content, SEO, social — using AI-native execution with human strategic oversight. You get a full marketing team without hiring one.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on scope. Most clients start between $2,000–5,000/month. We'll discuss specifics on the call based on your goals and channels.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see measurable traction within 30–60 days. We set expectations during onboarding based on your industry and starting position.",
  },
  {
    q: "Do I need to provide content or assets?",
    a: "No. We handle everything — copy, creative, campaign setup, optimization. You approve what goes live, but you don't need to produce anything.",
  },
  {
    q: "What if it doesn't work?",
    a: "There are no long-term contracts. If we're not delivering value, you can pause or cancel anytime. Every asset we create belongs to you.",
  },
];

/* ──────────────────────────────────────────────
   ACCORDION ITEM
   ────────────────────────────────────────────── */

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span
          className="pr-6 text-ink-900"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={18}
            strokeWidth={1.5}
            style={{ color: "#9ca3af" }}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-5 text-ink-700/70"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.65,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ──────────────────────────────────────────────
   CONTACT FAQ
   ────────────────────────────────────────────── */

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white px-6 py-24 sm:px-10 sm:py-28" style={{ fontFamily: "var(--font-blog)" }}>
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-ink-900"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontFamily: "var(--font-blog)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Common questions
        </motion.h2>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 border-t border-gray-100"
        >
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
