"use client";

import {
  INK,
  ROSE_DEEP,
  DISPLAY,
  BODY,
  ScrollReveal,
} from "@/components/homepage-v2/primitives";
import { CTA_MAP, TESTIDS } from "@/app/home-v2/content";

export function CloseV2() {
  return (
    <section
      id={TESTIDS.close}
      data-testid={TESTIDS.close}
      className="px-5 py-20 sm:px-8 sm:py-28"
      style={{ background: INK }}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "#ffffff",
            }}
          >
            Your first scene starts now.
          </h2>

          <p
            className="mt-6 max-w-[52ch]"
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.96rem, 1.4vw, 1.1rem)",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            10-minute setup. Same-day brief. First post live this week. Cancel anytime. No credit card.
          </p>

          <div className="mt-10">
            <a
              href={CTA_MAP.close}
              className="inline-flex items-center justify-center rounded-lg px-8 py-4"
              style={{
                fontFamily: BODY,
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
                color: "#ffffff",
                border: `2px solid ${ROSE_DEEP}`,
                textDecoration: "none",
                transition: "background 150ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = ROSE_DEEP;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Start the 10-minute setup →
            </a>
          </div>

          <p
            className="mt-8"
            style={{
              fontFamily: BODY,
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.8,
            }}
          >
            $99/mo · or $69/mo annual (save 30%) · 14-day free trial · No credit card required · Cancel anytime
          </p>

          <p
            className="mt-14 text-center"
            style={{
              fontFamily: BODY,
              fontSize: "0.875rem",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            &ldquo;You already have everything except the part Solara replaces.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
