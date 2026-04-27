"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import {
  V2Section,
  V2SectionInner,
  V2HeadlineBlock,
  INK,
  INK_MUTED,
  HAIRLINE,
  BODY,
} from "@/components/homepage-v2/primitives";
import { CTA_MAP, TESTIDS } from "@/app/home-v2/content";

const FAQS = [
  {
    q: "How is this different from ChatGPT or Canva?",
    a: "ChatGPT writes captions. Canva designs templates. Neither tells you what to film, neither edits your video, neither publishes for you. Solara is the system that connects all of it — strategy → brief → directing → editing → publishing → reporting → adjusting next week.",
  },
  {
    q: 'Will my posts look "AI-generated"?',
    a: "No, because they're not. Your face is real. Your business is real. Your voice is real. Solara never generates AI avatars, never uses stock footage, never writes generic captions. Solara directs YOUR content; it doesn't fake content for you.",
  },
  {
    q: "What if I'm camera-shy?",
    a: "Most weeks, fewer than half the scenes need your face. Hands, your product, your shop, your customers (with consent), b-roll of your work — Solara writes briefs around what you're comfortable filming.",
  },
  {
    q: "How long does setup take?",
    a: "10 minutes. Tell us about your business — what you sell, who buys it, your voice, your offer, your story. Connect your social accounts. Solara writes your first brief that same day. Your first post can go live this week.",
  },
  {
    q: "What if I miss a week of filming?",
    a: "We pause. No penalties, no missed posts that look fake. When you're ready, we pick up where you left off. You can also batch-film 4 weeks of content in one session if you prefer.",
  },
  {
    q: "Can I cancel?",
    a: "Anytime. No contract, no cancellation fee, no \"we'll keep posting for 30 more days.\" You own your accounts and your content. Solara is a service you use because it works, not because you're locked in.",
  },
];

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
    <div style={{ borderBottom: `1px solid ${HAIRLINE}` }}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        style={{ transition: "color 150ms ease" }}
        aria-expanded={isOpen}
      >
        <span
          style={{
            fontFamily: BODY,
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            fontWeight: 500,
            lineHeight: 1.4,
            color: INK,
            paddingRight: 24,
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={18} strokeWidth={1.5} style={{ color: INK_MUTED }} />
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
              style={{
                fontFamily: BODY,
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: INK_MUTED,
                paddingBottom: 20,
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

export function FaqV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <V2Section id={TESTIDS.faq}>
      <V2SectionInner>
        <V2HeadlineBlock
          eyebrow="08 · QUESTIONS"
          headline="The 6 questions every owner asks."
          sub="If you're still unsure, the answer is probably here."
        />

        <div className="mt-12" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <div className="mt-10">
          <p style={{ fontFamily: BODY, fontSize: "0.9375rem", color: INK_MUTED }}>
            Still unsure?{" "}
            <a
              href={CTA_MAP.faqHuman}
              style={{
                color: INK,
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Talk to a real human →
            </a>
          </p>
        </div>
      </V2SectionInner>
    </V2Section>
  );
}
