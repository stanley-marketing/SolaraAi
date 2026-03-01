"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  className?: string;
}

export function Faq({ items, className = "" }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`divide-y divide-border ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="flex w-full items-center justify-between text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-heading font-semibold text-base md:text-lg pr-8 group-hover:text-text-secondary transition-colors">
              {item.question}
            </span>
            <motion.span
              className="shrink-0 text-text-tertiary text-xl leading-none"
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.2, delay: 0.1 },
                }}
                className="overflow-hidden"
              >
                <p className="pt-3 pb-1 text-text-secondary text-[15px] leading-relaxed max-w-2xl">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
