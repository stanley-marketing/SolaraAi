"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FeatureTab {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const tabs: FeatureTab[] = [
  {
    id: "content",
    label: "Content Creation",
    title: "Content that sounds like you, scaled to the places your audience lives.",
    description:
      "AI-powered content engine that creates, repurposes, and publishes across every platform — while keeping your authentic voice intact.",
    features: [
      "Multi-platform content generation",
      "Brand voice learning & consistency",
      "Smart repurposing (1 piece → 12 formats)",
      "Visual content & video scripts",
    ],
    image: "/images/post-1.jpg",
  },
  {
    id: "ads",
    label: "Ad Management",
    title: "Every dollar works harder. Every campaign gets smarter.",
    description:
      "Autonomous ad optimization across Meta, Google, and TikTok. Real-time budget shifting, creative testing, and audience refinement.",
    features: [
      "Cross-platform campaign management",
      "Dynamic budget allocation",
      "50+ creative variant testing",
      "Real-time ROAS optimization",
    ],
    image: "/images/post-3.jpg",
  },
  {
    id: "seo",
    label: "SEO Engine",
    title: "Organic traffic that compounds while you sleep.",
    description:
      "Continuous keyword monitoring, content gap analysis, technical audits, and optimized content briefs — all running autonomously.",
    features: [
      "Automated keyword gap analysis",
      "Technical SEO monitoring",
      "Content brief generation",
      "Rank tracking & reporting",
    ],
    image: "/images/post-4.jpg",
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Clarity, not complexity. The metrics that actually move the needle.",
    description:
      "Unified dashboard that cuts through vanity metrics to show what's working, what's not, and exactly where to focus next.",
    features: [
      "Cross-channel attribution",
      "Revenue-focused reporting",
      "Predictive performance modeling",
      "Automated weekly insights",
    ],
    image: "/images/post-6.jpg",
  },
];

export function FeatureTabs() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div className="surface-card p-6 md:p-8">
      {/* Tab Bar */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className="relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors border border-transparent hover:border-border"
            type="button"
          >
            {tab.id === activeId && (
              <motion.div
                className="absolute inset-0 bg-bg-inverse rounded-full"
                layoutId="feature-tab"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                tab.id === activeId ? "text-text-inverse" : "text-text-secondary"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 leading-tight">
              {active.title}
            </h3>
            <p className="text-text-secondary text-base mb-6 leading-relaxed">
              {active.description}
            </p>
            <ul className="space-y-3">
              {active.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-text-primary shrink-0" />
                  <span className="text-text-primary">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-secondary border border-border">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
