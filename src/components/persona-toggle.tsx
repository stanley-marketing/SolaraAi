"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PersonaContent {
  id: string;
  label: string;
  tagline: string;
  quote: string;
  points: { title: string; description: string }[];
}

const personas: PersonaContent[] = [
  {
    id: "owner",
    label: "Business Owner",
    tagline: "The One Steering the Ship",
    quote:
      "The constant mental load of 'Did we post today? Is the ad wasting money? What should we say next?' is gone.",
    points: [
      {
        title: "Calm Confidence",
        description:
          "Your brand is out in the world — telling your story exactly the way you want it told. Fresh content lands overnight, and people are engaging.",
      },
      {
        title: "Budget Intelligence",
        description:
          "Your ads work smarter than you ever could alone. Budget isn't vanishing into guesswork — it's directed toward people who actually need what you offer.",
      },
      {
        title: "Autopilot Growth",
        description:
          "Real numbers moving in the right direction — leads, bookings, sales — without you spending hours in dashboards.",
      },
      {
        title: "Focus on What Matters",
        description:
          "You're the leader who gets to focus on growing the team, serving customers better, dreaming up the next offer — while marketing runs like a trusted partner.",
      },
    ],
  },
  {
    id: "marketer",
    label: "Marketer",
    tagline: "Your AI Wingman in the Arena",
    quote:
      "That shift — from 'I have to do everything' to 'We're in this together and it's working' — is what Solara delivers.",
    points: [
      {
        title: "No Blank-Page Panic",
        description:
          "The content machine is already turning: posts scheduled, repurposed smartly across platforms, each one rooted in real research about what resonates.",
      },
      {
        title: "Real-Time Campaigns",
        description:
          "Your AI wingman spotted what was working overnight, shifted resources, killed what wasn't pulling weight, and quietly launched new variations.",
      },
      {
        title: "Creative Headspace",
        description:
          "Metrics are climbing, stakeholders are nodding, and you actually have headspace for the creative thinking that got you into this role in the first place.",
      },
      {
        title: "Relentless Partner",
        description:
          "Like you finally have a partner who gets your style, learns fast, protects your budget, and amplifies your best work. No more flying solo at 2 a.m.",
      },
    ],
  },
];

export function PersonaToggle() {
  const [activeId, setActiveId] = useState(personas[0].id);
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <div className="surface-card p-6 md:p-8">
      {/* Toggle */}
      <div className="inline-flex items-center rounded-full border border-border p-1 mb-12">
        {personas.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className="relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors"
            type="button"
          >
            {p.id === activeId && (
              <motion.div
                className="absolute inset-0 bg-bg-inverse rounded-full"
                layoutId="persona-toggle"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                p.id === activeId ? "text-text-inverse" : "text-text-secondary"
              }`}
            >
              I&apos;m a {p.label}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label mb-3">{active.tagline}</p>

          {/* Quote */}
          <blockquote className="font-display text-2xl md:text-3xl leading-snug mb-10 max-w-3xl italic text-text-secondary">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          {/* Value Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {active.points.map((point, i) => (
              <div key={point.title} className="group surface-card p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-text-tertiary mt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-2">
                      {point.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
