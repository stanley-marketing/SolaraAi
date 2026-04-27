"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  V2Section,
  V2SectionInner,
  V2HeadlineBlock,
  ScrollReveal,
  INK,
  INK_MUTED,
  INK_SOFT,
  INK_FAINT,
  SHELL,
  ROSE_DEEP,
  HAIRLINE,
  HAIRLINE_HEAVY,
  DISPLAY,
  BODY,
} from "@/components/homepage-v2/primitives";
import { TESTIDS, SAMPLE_DISCLAIMER, CTA_MAP } from "@/app/home-v2/content";

type Scene = {
  num: string;
  duration: string;
  description: string;
};

type IndustryBrief = {
  id: string;
  label: string;
  week: string;
  theme: string;
  scenes: Scene[];
  filmingTime: string;
};

const INDUSTRIES: IndustryBrief[] = [
  {
    id: "pizza-shop",
    label: "Pizza Shop",
    week: "Week of April 27",
    theme: "Saturday-night family-style",
    scenes: [
      {
        num: "01",
        duration: "8s",
        description: 'Speaking next to oven — "My grandfather taught me this in 1987."',
      },
      { num: "02", duration: "30s", description: "Hands on the dough" },
      { num: "03", duration: "Photo", description: "Pizza out of oven (you upload)" },
      { num: "04", duration: "30s", description: "Walk through the shop with a box, smile" },
      { num: "05", duration: "8s", description: '"Come taste the difference."' },
    ],
    filmingTime: "~12 minutes",
  },
  {
    id: "salon",
    label: "Salon",
    week: "Week of April 27",
    theme: "Spring refresh — before & after transformations",
    scenes: [
      {
        num: "01",
        duration: "8s",
        description: 'Chair reveal, fresh color — "She walked in nervous. She left glowing."',
      },
      { num: "02", duration: "30s", description: "Hands working through hair, foil highlights process" },
      { num: "03", duration: "Photo", description: "Final blowout result — client smiling (you upload)" },
      { num: "04", duration: "30s", description: "Products used lined up, stylist explains why" },
      { num: "05", duration: "8s", description: '"Book your transformation this week."' },
    ],
    filmingTime: "~10 minutes",
  },
  {
    id: "gym",
    label: "Gym",
    week: "Week of April 27",
    theme: "Monday motivation — member milestone",
    scenes: [
      {
        num: "01",
        duration: "8s",
        description: 'Coach on the floor, arms crossed — "Results don\'t lie."',
      },
      { num: "02", duration: "30s", description: "Member mid-workout, form close-up, coach cues" },
      { num: "03", duration: "Photo", description: "Progress photo side-by-side (you upload)" },
      { num: "04", duration: "30s", description: "Tour the facility, quick tempo reel" },
      { num: "05", duration: "8s", description: '"Your first class is on us."' },
    ],
    filmingTime: "~15 minutes",
  },
  {
    id: "coffee-shop",
    label: "Coffee Shop",
    week: "Week of April 27",
    theme: "Midweek ritual — the regular's order",
    scenes: [
      {
        num: "01",
        duration: "8s",
        description: 'Barista at machine — "This one takes three and a half minutes. Worth it."',
      },
      { num: "02", duration: "30s", description: "Pour-over process, close-up on bloom, steam rising" },
      { num: "03", duration: "Photo", description: "Finished drink on the counter, latte art detail (you upload)" },
      { num: "04", duration: "30s", description: "Quick tour — tables, vibe, daylight through windows" },
      { num: "05", duration: "8s", description: '"Come find your corner."' },
    ],
    filmingTime: "~10 minutes",
  },
  {
    id: "dental",
    label: "Dental",
    week: "Week of April 27",
    theme: "New patient welcome — comfort-first practice",
    scenes: [
      {
        num: "01",
        duration: "8s",
        description:
          'Dentist at reception — "Nobody likes coming in. We know. That\'s why we changed things."',
      },
      { num: "02", duration: "30s", description: "Walk through treatment room, calm narration, natural light" },
      { num: "03", duration: "Photo", description: "Smile result — patient consented (you upload)" },
      { num: "04", duration: "30s", description: "Team introducing themselves, first names only" },
      { num: "05", duration: "8s", description: '"New patients welcome. Book online in 60 seconds."' },
    ],
    filmingTime: "~12 minutes",
  },
  {
    id: "realtor",
    label: "Realtor",
    week: "Week of April 27",
    theme: "New listing — neighborhood story",
    scenes: [
      {
        num: "01",
        duration: "8s",
        description: 'Agent outside the property — "This block has been on my radar for two years."',
      },
      { num: "02", duration: "30s", description: "Walk through the home, room by room narration" },
      { num: "03", duration: "Photo", description: "Hero shot — kitchen or outdoor space (you upload)" },
      { num: "04", duration: "30s", description: "Neighborhood walk — café, school, park" },
      { num: "05", duration: "8s", description: '"DM me for a private showing."' },
    ],
    filmingTime: "~20 minutes",
  },
];

const OUTPUT_CARDS: Array<{
  label: string;
  detail1: string;
  detail2: string;
  icon: string;
}> = [
  { label: "Instagram Reel", detail1: "25 seconds", detail2: "Captions burned in", icon: "▶" },
  { label: "IG/FB Story", detail1: "Vertical · 9:16", detail2: "Tap-through", icon: "◻" },
  { label: "Carousel (IG/FB/LinkedIn)", detail1: "5 slides", detail2: "Swipeable", icon: "⊟" },
  { label: "Google Business Post", detail1: "Local SEO", detail2: "Auto-published", icon: "⊕" },
];

function SceneRow({ scene }: { scene: Scene }) {
  return (
    <div
      className="flex items-start gap-3 py-3"
      style={{ borderBottom: `1px solid ${HAIRLINE}` }}
    >
      <span
        style={{
          fontFamily: BODY,
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.10em",
          color: ROSE_DEEP,
          whiteSpace: "nowrap",
          paddingTop: 2,
          minWidth: 52,
        }}
      >
        Scene {scene.num}
      </span>
      <span
        style={{
          fontFamily: BODY,
          fontSize: "0.72rem",
          fontWeight: 500,
          color: INK_SOFT,
          whiteSpace: "nowrap",
          paddingTop: 2,
          minWidth: 44,
        }}
      >
        ({scene.duration})
      </span>
      <span
        style={{
          fontFamily: BODY,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          color: INK_MUTED,
        }}
      >
        {scene.description}
      </span>
    </div>
  );
}

function BriefCard({ industry }: { industry: IndustryBrief }) {
  return (
    <div
      className="rounded-lg p-5 sm:p-7"
      style={{ background: "#fff", border: `1.5px solid ${HAIRLINE_HEAVY}` }}
    >
      <p
        style={{
          fontFamily: BODY,
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: ROSE_DEEP,
        }}
      >
        The Brief
      </p>
      <div className="mb-4 mt-2" style={{ height: 1, background: HAIRLINE }} />

      <p
        style={{
          fontFamily: DISPLAY,
          fontSize: "1.05rem",
          fontWeight: 600,
          color: INK,
          marginBottom: 4,
        }}
      >
        {industry.label} · {industry.week}
      </p>

      <p
        style={{
          fontFamily: BODY,
          fontSize: "0.875rem",
          color: INK_MUTED,
          marginBottom: 20,
        }}
      >
        Theme: {industry.theme}
      </p>

      <div>
        {industry.scenes.map((scene) => (
          <SceneRow key={scene.num} scene={scene} />
        ))}
      </div>

      <p
        className="mt-4"
        style={{
          fontFamily: BODY,
          fontSize: "0.8125rem",
          color: INK_SOFT,
          fontStyle: "italic",
        }}
      >
        → Filming time: {industry.filmingTime}
      </p>
    </div>
  );
}

function OutputCard({
  label,
  detail1,
  detail2,
  icon,
}: {
  label: string;
  detail1: string;
  detail2: string;
  icon: string;
}) {
  return (
    <div
      className="flex flex-col rounded-lg p-4 sm:p-5"
      style={{
        background: "#fff",
        border: `1.5px solid ${HAIRLINE_HEAVY}`,
        minHeight: 130,
      }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-md"
        style={{ background: SHELL, fontSize: "1.1rem", color: INK_SOFT }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="mt-auto pt-4">
        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: INK,
            marginBottom: 3,
          }}
        >
          {label}
        </p>
        <p style={{ fontFamily: BODY, fontSize: "0.75rem", color: INK_SOFT, lineHeight: 1.5 }}>
          {detail1} · {detail2}
        </p>
      </div>
    </div>
  );
}

export function ShowcaseV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const count = INDUSTRIES.length;
      switch (e.key) {
        case "ArrowRight": {
          e.preventDefault();
          const next = (activeIndex + 1) % count;
          setActiveIndex(next);
          tabRefs.current[next]?.focus();
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          const prev = (activeIndex - 1 + count) % count;
          setActiveIndex(prev);
          tabRefs.current[prev]?.focus();
          break;
        }
        case "Home": {
          e.preventDefault();
          setActiveIndex(0);
          tabRefs.current[0]?.focus();
          break;
        }
        case "End": {
          e.preventDefault();
          const last = count - 1;
          setActiveIndex(last);
          tabRefs.current[last]?.focus();
          break;
        }
        default:
          break;
      }
    },
    [activeIndex],
  );

  const activeIndustry = INDUSTRIES[activeIndex];

  return (
    <V2Section id={TESTIDS.showcase}>
      <V2SectionInner>
        <V2HeadlineBlock
          eyebrow="03 · THE SHOWCASE"
          headline="See what Solara creates for businesses like yours."
          sub="Pick your industry. We'll show you a sample brief, the 5 scenes Solara would have you film, and the finished posts ready to publish across every platform."
        />

        <div className="mt-12">
          <div
            role="tablist"
            aria-label="Industry showcase tabs"
            data-testid={TESTIDS.showcaseTabs}
            onKeyDown={handleKeyDown}
            className="flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {INDUSTRIES.map((industry, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={industry.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`showcase-tab-${industry.id}`}
                  aria-selected={isActive}
                  aria-controls={`showcase-panel-${industry.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(i)}
                  className="shrink-0 cursor-pointer rounded-full px-4 py-2 transition-colors duration-150"
                  style={{
                    fontFamily: BODY,
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.01em",
                    background: isActive ? INK : "transparent",
                    color: isActive ? "#fff" : INK_MUTED,
                    border: `1.5px solid ${isActive ? INK : HAIRLINE_HEAVY}`,
                    outline: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {industry.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`showcase-panel-${activeIndustry.id}`}
          aria-labelledby={`showcase-tab-${activeIndustry.id}`}
          tabIndex={0}
          className="mt-8 focus:outline-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <BriefCard industry={activeIndustry} />

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {OUTPUT_CARDS.map((card) => (
                  <OutputCard key={card.label} {...card} />
                ))}
              </div>

              <p
                className="mt-6"
                style={{
                  fontFamily: BODY,
                  fontSize: "0.8125rem",
                  lineHeight: 1.65,
                  color: INK_FAINT,
                  fontStyle: "italic",
                }}
              >
                {SAMPLE_DISCLAIMER}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <ScrollReveal>
          <div className="mt-14 text-center">
            <a
              href={CTA_MAP.showcase}
              style={{
                fontFamily: BODY,
                fontSize: "1rem",
                fontWeight: 600,
                color: INK,
                textDecoration: "none",
                borderBottom: `2px solid ${INK}`,
                paddingBottom: 3,
                letterSpacing: "0.01em",
              }}
            >
              See your industry&apos;s sample →
            </a>
          </div>
        </ScrollReveal>
      </V2SectionInner>
    </V2Section>
  );
}
