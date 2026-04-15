"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

const CAPABILITIES = [
  "Reads your business from your website",
  "Builds a content strategy around your goals",
  "Writes scripts and directs content creation",
  "Handles editing, captions, sound, thumbnails",
  "Publishes on your schedule",
  "Learns and improves every month",
];

export default function WhatSolaraIsSection() {
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
            What&apos;s different
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
              maxWidth: 820,
            }}
          >
            Solara is not a content tool. It is the strategic and operational
            brain behind your social media.
          </h2>
        </BlurFade>

        <div className="mt-16 grid gap-16 sm:grid-cols-[1fr_320px] sm:gap-20">
          <BlurFade delay={0.16}>
            <div
              className="space-y-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                fontWeight: 300,
                lineHeight: 1.78,
                color: "#626262",
              }}
            >
              <p>
                Solara reads your business from your website, understands your
                brand and market, builds a content strategy around your goals,
                and executes it every week.
              </p>
              <p>
                Every week it decides what to create. It writes the scripts. It
                tells you exactly what it needs from you — usually a short
                recording, sometimes a product photo, sometimes nothing at all.
                It handles the editing, the captions, the sound, the thumbnails,
                the timing. It publishes. It learns.
              </p>
              <p>
                Over time, it builds a performance model specific to your brand
                — and gets measurably better every month.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.24}>
            <div
              className="rounded-2xl border border-[#e3e3e3] bg-[#fafafa] p-7"
            >
              <ul className="space-y-4">
                {CAPABILITIES.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3"
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        display: "block",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#111111",
                        marginTop: 8,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        lineHeight: 1.6,
                        color: "#111111",
                      }}
                    >
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.36}>
          <div
            className="mt-16 border-t border-[#e3e3e3] pt-12"
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 300,
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
                color: "#111111",
                maxWidth: 620,
                marginBottom: 28,
              }}
            >
              This is what it feels like to have a real social media manager.
              For{" "}
              <span style={{ fontWeight: 500 }}>$69 a month.</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[999px] bg-black px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white transition-opacity duration-200 hover:opacity-75"
            >
              Start free — $69/month after 7 days
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
