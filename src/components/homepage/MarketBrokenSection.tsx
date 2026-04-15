"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const BROKEN_OPTIONS = [
  {
    label: "The Freelancer",
    body: "A freelancer holds a camera, asks an AI for a script, cuts a few clips, and charges more than the output is worth. They post something. They go quiet. You chase. The quality is forgettable. The strategy is nonexistent.",
  },
  {
    label: "The AI Content Tool",
    body: "An AI content tool gives you a caption. Maybe a script. Then it stops — the rest is still your problem.",
  },
  {
    label: "The Agency",
    body: "An agency needs three briefing calls to understand your brand and still gets the tone wrong.",
  },
];

export default function MarketBrokenSection() {
  return (
    <section className="w-full bg-[#fafafa] px-6 py-24 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <BlurFade delay={0}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#111111",
              maxWidth: 720,
              marginBottom: 56,
            }}
          >
            The options you&apos;ve tried don&apos;t actually solve it.
          </h2>
        </BlurFade>

        <div className="space-y-0 border-t border-[#e3e3e3]">
          {BROKEN_OPTIONS.map((option, i) => (
            <BlurFade key={option.label} delay={0.1 + i * 0.12}>
              <div className="border-b border-[#e3e3e3] py-10 sm:grid sm:grid-cols-[220px_1fr] sm:gap-12">
                <p
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    fontWeight: 500,
                    paddingTop: 3,
                    marginBottom: 12,
                  }}
                >
                  {option.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "#626262",
                  }}
                >
                  {option.body}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.48}>
          <div className="mt-16 max-w-[640px] space-y-5">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#626262",
              }}
            >
              None of these are actually managing your social media. They&apos;re
              creating individual pieces and calling it a presence.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#626262",
              }}
            >
              What makes brands grow is not one good post. It&apos;s the brain behind
              a consistent, strategic, on-brand social presence — running week
              after week without falling apart.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
