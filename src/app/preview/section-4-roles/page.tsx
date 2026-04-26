"use client";

import {
  Check,
  Dumbbell,
  Laptop,
  Package,
  Scissors,
  Stethoscope,
  Utensils,
} from "lucide-react";
import {
  BODY,
  DISPLAY,
  HAIRLINE,
  HAIRLINE_HEAVY,
  INK,
  INK_FAINT,
  INK_MUTED,
  INK_SOFT,
  PreviewFooter,
  ROSE,
  ROSE_DEEP,
  SHELL,
} from "@/components/homepage/teardown-parts";

const INDUSTRIES = [
  { icon: Utensils, label: "Restaurants" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Package, label: "Ecommerce" },
  { icon: Laptop, label: "SaaS" },
  { icon: Stethoscope, label: "Clinics" },
  { icon: Scissors, label: "Salons" },
];

const YOU_ITEMS = [
  "Be in your own business.",
  "Film the short clips Solara asks for.",
  "Approve posts before they go live.",
];

const SOLARA_ITEMS = [
  "Plan your content calendar.",
  "Write every script.",
  "Direct what to film, how, how long.",
  "Review your takes.",
  "Ask for re-shoots when something's off.",
  "Edit, caption, score music.",
  "Publish on your schedule.",
  "Report on what worked.",
];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div
      className="inline-flex items-center gap-3"
      style={{
        fontFamily: BODY,
        fontSize: "0.66rem",
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: INK_SOFT,
        fontWeight: 600,
      }}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {number} &middot; {label}
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inset-0 animate-ping rounded-full"
          style={{ background: ROSE, opacity: 0.6 }}
        />
        <span
          className="relative h-2 w-2 rounded-full"
          style={{ background: ROSE }}
        />
      </span>
    </div>
  );
}

function TrustBarSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <SectionEyebrow number="02" label="Trusted by" />

        <h2
          className="mt-5 leading-[1.05] tracking-[-0.035em] text-[clamp(1.8rem,3.6vw,2.6rem)]"
          style={{
            fontFamily: DISPLAY,
            fontWeight: 600,
            color: INK,
            maxWidth: "680px",
          }}
        >
          500+ SMBs growing with Solara.
        </h2>

        <div
          className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5"
          style={{ fontFamily: BODY }}
        >
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5"
              style={{
                fontSize: "0.92rem",
                color: INK_MUTED,
                fontWeight: 500,
              }}
            >
              <Icon size={18} strokeWidth={1.6} style={{ color: INK_SOFT }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleColumn({
  header,
  subhead,
  items,
  accent,
  dense,
}: {
  header: string;
  subhead: string;
  items: string[];
  accent: string;
  dense?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="mb-1 inline-flex items-center gap-2"
        style={{
          fontFamily: BODY,
          fontSize: "0.62rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: INK_FAINT,
          fontWeight: 700,
        }}
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ background: accent }}
        />
        {subhead}
      </div>

      <h3
        className="mb-7"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
          fontWeight: 600,
          color: accent,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {header}
      </h3>

      <ul className="flex flex-col">
        {items.map((item, i) => (
          <li
            key={item}
            className={dense ? "py-2.5" : "py-3.5"}
            style={{
              borderTop: i === 0 ? `1px solid ${HAIRLINE_HEAVY}` : "none",
              borderBottom: `1px solid ${HAIRLINE}`,
              fontFamily: BODY,
              fontSize: dense ? "0.96rem" : "1.02rem",
              color: INK,
              lineHeight: 1.45,
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            <Check
              size={15}
              strokeWidth={2.6}
              style={{
                color: accent,
                marginTop: "0.18rem",
                flexShrink: 0,
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoleSplitSection() {
  return (
    <section
      className="relative border-t"
      style={{ borderColor: HAIRLINE_HEAVY }}
    >
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-14 sm:pt-24">
        <SectionEyebrow number="04" label="The honest division of labor" />

        <h2
          className="mt-5 leading-[1.03] tracking-[-0.038em] text-[clamp(2.2rem,4.8vw,3.4rem)]"
          style={{
            fontFamily: DISPLAY,
            fontWeight: 600,
            color: INK,
            maxWidth: "780px",
          }}
        >
          You bring one thing.{" "}
          <span style={{ color: ROSE_DEEP, fontWeight: 600 }}>
            Solara brings everything else.
          </span>
        </h2>

        <p
          className="mt-4"
          style={{
            fontFamily: BODY,
            fontSize: "1.04rem",
            lineHeight: 1.55,
            color: INK_MUTED,
            maxWidth: "600px",
          }}
        >
          Only you can film your actual product, your actual face, your actual
          space. That&rsquo;s the one thing that can&rsquo;t be faked remotely
          &mdash; and it&rsquo;s the only thing Solara asks of you.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div
          className="grid md:grid-cols-[1fr_1px_1.35fr] md:gap-10"
          style={{ alignItems: "stretch" }}
        >
          <RoleColumn
            subhead="You"
            header="Three things."
            items={YOU_ITEMS}
            accent={INK}
          />

          <div
            aria-hidden
            className="hidden md:block"
            style={{ background: HAIRLINE_HEAVY }}
          />

          <RoleColumn
            subhead="Solara"
            header="Everything else."
            items={SOLARA_ITEMS}
            accent={ROSE_DEEP}
            dense
          />
        </div>

        <div
          className="mt-12 rounded-sm px-6 py-5"
          style={{
            background: "#f0efe9",
            border: `1px solid ${HAIRLINE_HEAVY}`,
          }}
        >
          <p
            className="mb-2 inline-flex items-center gap-2"
            style={{
              fontFamily: BODY,
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: ROSE_DEEP,
              fontWeight: 700,
            }}
          >
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: ROSE_DEEP }}
            />
            Not alone with a black box
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "1.02rem",
              lineHeight: 1.6,
              color: INK,
              maxWidth: "780px",
            }}
          >
            A human on our team watches every account. Not every post &mdash;
            but every edge case the AI is unsure about.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function SectionFourRolesPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <TrustBarSection />
      <RoleSplitSection />

      <PreviewFooter
        label="Sections 02 + 04 · Trust bar + Role split"
        description="Bundled preview: §2 trust bar (industry-icon strip + SMB count) and §4 honest division of labor (two-column asymmetric list). Visual asymmetry between YOU (3 items) and SOLARA (8 items) is the argument — the empty space in the YOU column reinforces the ratio. Human-in-loop callout below the split surfaces trust signal that v5 buried in FAQ."
      />
    </main>
  );
}
