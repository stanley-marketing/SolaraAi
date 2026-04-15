"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const TRUTH_CARDS = [
  {
    number: "01",
    text: "Your competitors don't need to be better than you. They just need to look more alive online.",
  },
  {
    number: "02",
    text: "A dead feed makes people assume a dead brand.",
  },
  {
    number: "03",
    text: "Consistent, useful content builds trust before you ever speak to a customer.",
  },
];

export default function RealCostSection() {
  return (
    <section className="w-full bg-white px-6 py-24 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <BlurFade delay={0}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: 28,
            }}
          >
            The part no one says out loud
          </p>
        </BlurFade>

        <BlurFade delay={0.08}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#111111",
              maxWidth: 780,
            }}
          >
            A good business with dead social media loses before the conversation
            even starts.
          </h2>
        </BlurFade>

        <BlurFade delay={0.16}>
          <div
            className="mt-14 space-y-7"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#626262",
              maxWidth: 680,
            }}
          >
            <p>
              People judge a brand before they call. Before they visit. Before
              they trust.
            </p>
            <p>They check Instagram. They scroll TikTok. They look at LinkedIn.</p>
            <p>
              And if what they find is three posts from eight months ago, a logo,
              and a phone number — they leave. Quietly. Without telling you why.
            </p>
            <p>
              You didn&apos;t lose them to a better business. You lost them to one
              that looked more alive.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.24}>
          <p
            className="mt-12 max-w-[580px]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              fontWeight: 400,
              lineHeight: 1.65,
              color: "#111111",
            }}
          >
            Social silence isn&apos;t neutral. It&apos;s a signal. And it&apos;s not the one
            you want to send.
          </p>
        </BlurFade>

        <div className="mt-20 grid gap-px border border-[#e3e3e3] sm:grid-cols-3">
          {TRUTH_CARDS.map((card, i) => (
            <BlurFade key={card.number} delay={0.32 + i * 0.1}>
              <div
                className="h-full bg-white p-8 sm:p-10"
                style={{ borderRight: i < 2 ? "1px solid #e3e3e3" : "none" }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    color: "#c8c8c8",
                    marginBottom: 16,
                  }}
                >
                  {card.number}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: "#111111",
                  }}
                >
                  {card.text}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
