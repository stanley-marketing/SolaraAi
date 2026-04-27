"use client";

import type { ReactNode } from "react";

import {
  V2Section,
  V2SectionInner,
  V2HeadlineBlock,
  INK,
  INK_MUTED,
  ROSE_DEEP,
  HAIRLINE,
  HAIRLINE_HEAVY,
  DISPLAY,
  BODY,
} from "@/components/homepage-v2/primitives";
import { CTA_MAP, TESTIDS, LOCKED_COPY } from "@/app/home-v2/content";

const INCLUDED = [
  "Weekly content brief, written by Solara for your business",
  "Scene-by-scene filming guidance (5 scenes, ~10 minutes/week)",
  "Full production: cuts, color, captions, music, thumbnails",
  "Auto-publishing across IG, TikTok, FB, YouTube Shorts, Google Business",
  "Weekly performance report + automatic playbook adjustment",
  "Human review on every piece — bad takes rejected, re-shoots requested",
  "Setup done for you in 10 minutes",
  "No credit card to start. Cancel anytime.",
];

function CtaButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="mt-auto inline-flex w-full items-center justify-center rounded-lg px-6 py-3"
      style={{
        fontFamily: BODY,
        background: INK,
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "0.9rem",
        fontWeight: 600,
        letterSpacing: "0.01em",
        transition: "opacity 150ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.opacity = "0.85";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.opacity = "1";
      }}
    >
      {children}
    </a>
  );
}

export function PricingV2() {
  return (
    <V2Section id={TESTIDS.pricing}>
      <V2SectionInner>
        <V2HeadlineBlock
          eyebrow="07 · PRICING"
          headline="One plan. One price. No surprises."
          sub="Solara is a complete system, so we don't tier features. You get everything, on day one. Pay monthly. Save 30% on annual."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div
            className="flex flex-col rounded-lg p-7"
            style={{ border: `1px solid ${HAIRLINE_HEAVY}` }}
          >
            <p
              style={{
                fontFamily: BODY,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: INK_MUTED,
              }}
            >
              MONTHLY
            </p>

            <p
              className="mt-4"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(2.8rem, 6vw, 3.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: INK,
              }}
            >
              {LOCKED_COPY.monthlyPrice}
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: INK_MUTED,
                  letterSpacing: "0",
                }}
              >
                {" "}
                /month
              </span>
            </p>

            <p
              className="mt-2"
              style={{ fontFamily: BODY, fontSize: "0.875rem", color: INK_MUTED }}
            >
              Billed monthly
            </p>

            <p
              className="mt-6 mb-8 flex-1"
              style={{ fontFamily: BODY, fontSize: "0.875rem", color: INK_MUTED }}
            >
              Same product. Same support.
            </p>

            <CtaButton href={CTA_MAP.pricing}>Start free trial</CtaButton>
          </div>

          <div
            className="flex flex-col rounded-lg p-7"
            style={{ border: `2px solid ${ROSE_DEEP}` }}
          >
            <p
              style={{
                fontFamily: BODY,
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: ROSE_DEEP,
              }}
            >
              ANNUAL ★
            </p>

            <p
              className="mt-4"
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(2.8rem, 6vw, 3.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: INK,
              }}
            >
              {LOCKED_COPY.annualMonthlyPrice}
              <span
                style={{
                  fontFamily: BODY,
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: INK_MUTED,
                  letterSpacing: "0",
                }}
              >
                {" "}
                /month
              </span>
            </p>

            <p
              className="mt-2"
              style={{ fontFamily: BODY, fontSize: "0.875rem", color: INK_MUTED }}
            >
              Billed annually ({LOCKED_COPY.annualPrice})
            </p>

            <div
              className="mt-3"
              style={{ borderTop: `1px solid ${HAIRLINE}`, paddingTop: 12 }}
            >
              <p
                style={{
                  fontFamily: BODY,
                  fontSize: "0.875rem",
                  color: ROSE_DEEP,
                  fontWeight: 500,
                }}
              >
                Save {LOCKED_COPY.annualDiscount} — equals {LOCKED_COPY.annualSavings}.
              </p>
            </div>

            <p
              className="mt-4 mb-8 flex-1"
              style={{ fontFamily: BODY, fontSize: "0.875rem", color: INK_MUTED }}
            >
              Same product. Same support.
            </p>

            <CtaButton href={CTA_MAP.pricing}>Start free trial</CtaButton>
          </div>
        </div>

        <div className="mt-14">
          <p
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: INK_MUTED,
              marginBottom: 16,
            }}
          >
            What&rsquo;s included
          </p>
          <ul className="flex flex-col gap-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  style={{
                    color: ROSE_DEEP,
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: 1,
                    fontFamily: BODY,
                    fontSize: "0.9375rem",
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: "0.9375rem",
                    lineHeight: 1.55,
                    color: INK_MUTED,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p
          className="mt-10"
          style={{
            fontFamily: BODY,
            fontSize: "0.8125rem",
            color: INK_MUTED,
            borderTop: `1px solid ${HAIRLINE}`,
            paddingTop: 20,
            lineHeight: 1.8,
          }}
        >
          14-day free trial · No credit card required · Cancel anytime, no questions · Your content, your accounts — you own everything
        </p>

        <p
          className="mt-8"
          style={{
            fontFamily: BODY,
            fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
            lineHeight: 1.7,
            color: INK_MUTED,
          }}
        >
          The closest thing on the market is $2,000/month and still makes you film it yourself.
        </p>
      </V2SectionInner>
    </V2Section>
  );
}
