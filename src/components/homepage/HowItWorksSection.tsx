"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

const STEPS = [
  {
    number: "1",
    title: "Solara reads your business",
    body: "Point it at your website. It extracts your brand identity, visual style, tone, audience, services, and competitors. No long intake forms. No calls. Just your URL.",
  },
  {
    number: "2",
    title: "Solara builds your strategy",
    body: "Topics, formats, funnel balance, posting frequency — a complete 4-week rolling plan. You review and approve. Then it starts.",
  },
  {
    number: "3",
    title: "Solara tells you exactly what it needs",
    body: "Sometimes a 3-minute recording with a teleprompter. Sometimes a photo of your product. Sometimes a clip of your environment. When nothing is needed, it handles the piece autonomously. You're never asked for something you can't provide.",
  },
  {
    number: "4",
    title: "Content goes out. You stay in control.",
    body: "Before anything publishes, you receive a preview via WhatsApp or SMS: Approve, Give Notes, or Delete. One tap. Solara handles the rest.",
  },
  {
    number: "5",
    title: "Solara learns. The plan gets sharper.",
    body: "Every published piece is tracked. What earns views, saves, and inbound attention gets fed back into the strategy. Month after month, Solara gets smarter about your brand.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#fafafa] px-6 py-24 sm:px-10 sm:py-36"
    >
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
            How it works
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
              maxWidth: 640,
              marginBottom: 64,
            }}
          >
            Give Solara your website. Then let it run.
          </h2>
        </BlurFade>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[18px] top-3 hidden w-px sm:block"
            style={{
              height: "calc(100% - 56px)",
              background:
                "linear-gradient(to bottom, #e3e3e3 0%, #e3e3e3 85%, transparent 100%)",
            }}
          />

          <ol className="space-y-0">
            {STEPS.map((step, i) => (
              <BlurFade key={step.number} delay={0.16 + i * 0.1}>
                <li className="relative flex gap-8 pb-12 sm:gap-10">
                  <div
                    className="relative z-10 flex-shrink-0"
                    style={{ paddingTop: 2 }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "1px solid #e3e3e3",
                        background: "#ffffff",
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        color: "#111111",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div style={{ paddingTop: 6 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                        fontWeight: 400,
                        lineHeight: 1.3,
                        color: "#111111",
                        letterSpacing: "-0.01em",
                        marginBottom: 12,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
                        fontWeight: 300,
                        lineHeight: 1.75,
                        color: "#626262",
                        maxWidth: 560,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </li>
              </BlurFade>
            ))}
          </ol>
        </div>

        <BlurFade delay={0.72}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[999px] bg-black px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white transition-opacity duration-200 hover:opacity-75"
            >
              Start free — $69/month after 7 days
            </Link>
            <a
              href="#real-cost"
              className="inline-flex items-center rounded-[999px] border border-[#e3e3e3] bg-white px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#111111] transition-colors duration-200 hover:border-[#111111]"
            >
              Read the details
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
