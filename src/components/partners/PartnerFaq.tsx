"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ──────────────────────────────────────────────
   ACCORDION ITEM
   ────────────────────────────────────────────── */

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span
          className="pr-6 text-ink-900"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={18}
            strokeWidth={1.5}
            style={{ color: "#6b7280" }}
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
              className="pb-5 text-neutral-600"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                fontFamily: "var(--font-body)",
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ──────────────────────────────────────────────
   PARTNER FAQ
   ────────────────────────────────────────────── */

interface PartnerFaqProps {
  items: Array<{ question: string; answer: string }>;
}

export function PartnerFaq({ items }: PartnerFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-ink-900"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Common questions
        </h2>

        <div className="mt-10 border-t border-gray-100">
          {items.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
