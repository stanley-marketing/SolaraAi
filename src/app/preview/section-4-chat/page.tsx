"use client";

import { Camera, Check, ImageIcon, Video } from "lucide-react";
import {
  BODY,
  DISPLAY,
  FlickeringGrid,
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

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: 360,
        padding: 6,
        borderRadius: 44,
        background: "linear-gradient(145deg, #1a1a1a, #0a0a0a)",
        boxShadow:
          "0 30px 60px -30px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(0,0,0,0.2)",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 38,
          background: "#fff",
          aspectRatio: "9 / 19.5",
        }}
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-2 z-20 -translate-x-1/2"
          style={{
            width: 110,
            height: 28,
            borderRadius: 18,
            background: "#0a0a0a",
          }}
        />
        {children}
      </div>
    </div>
  );
}

function PhoneHeader() {
  return (
    <div
      className="flex items-center gap-3 border-b px-4 pb-3 pt-12"
      style={{ borderColor: HAIRLINE }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full"
        style={{
          background: `linear-gradient(145deg, ${ROSE}, ${ROSE_DEEP})`,
          color: "#fff",
          fontFamily: DISPLAY,
          fontSize: "0.9rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        S
      </div>
      <div className="flex-1">
        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.92rem",
            fontWeight: 600,
            color: INK,
            lineHeight: 1.1,
          }}
        >
          Solara
        </p>
        <p
          className="mt-0.5 flex items-center gap-1.5"
          style={{
            fontFamily: BODY,
            fontSize: "0.7rem",
            color: INK_FAINT,
            lineHeight: 1,
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#22c55e" }}
          />
          directing · 2m
        </p>
      </div>
    </div>
  );
}

function ReferenceCard() {
  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{
        background: "#f4f2ee",
        border: `1px solid ${HAIRLINE}`,
        aspectRatio: "4 / 5",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, #fff7cc 0%, #f4c77a 45%, #b86d2a 90%)",
          opacity: 0.85,
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-[38%] -translate-x-1/2"
        style={{
          width: "62%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 30%, #fff3b5 0%, #e7a85a 30%, #a2542c 60%, #6b3116 100%)",
          boxShadow: "0 8px 22px -6px rgba(107,49,22,0.5)",
        }}
      />
      <svg
        aria-hidden
        className="absolute bottom-3 right-3 h-5 w-5 opacity-70"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      >
        <title>pin</title>
        <path d="M12 2 L12 22 M5 9 L19 9 M5 15 L19 15" />
      </svg>
      <div
        className="absolute left-3 top-3 flex items-center gap-1 rounded-full px-2 py-0.5"
        style={{
          background: "rgba(10,10,10,0.75)",
          backdropFilter: "blur(4px)",
          color: "#fff",
          fontFamily: BODY,
          fontSize: "0.58rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        <ImageIcon size={10} strokeWidth={2.2} />
        Reference
      </div>
    </div>
  );
}

function DirectingBubble() {
  return (
    <div className="flex flex-col gap-2 px-4 py-4">
      <div className="flex items-end gap-2">
        <div
          className="max-w-[86%] rounded-2xl rounded-bl-md px-3.5 py-3"
          style={{
            background: "#f3f2ee",
            border: `1px solid ${HAIRLINE}`,
          }}
        >
          <p
            style={{
              fontFamily: BODY,
              fontSize: "0.82rem",
              color: INK,
              lineHeight: 1.45,
              fontWeight: 500,
            }}
          >
            Quick ask for tonight&rsquo;s pizza.
          </p>
        </div>
      </div>

      <div className="flex items-end gap-2">
        <div
          className="max-w-[92%] rounded-2xl rounded-bl-md"
          style={{
            background: "#f3f2ee",
            border: `1px solid ${HAIRLINE}`,
            padding: 10,
          }}
        >
          <ReferenceCard />
          <div className="mt-2.5 flex flex-col gap-1.5">
            <p
              style={{
                fontFamily: BODY,
                fontSize: "0.78rem",
                color: INK,
                lineHeight: 1.5,
              }}
            >
              Stand <strong>right of the oven, 1m back</strong>. Phone{" "}
              <strong>vertical, chest height</strong>. On my count, tilt
              down slowly to show the pizza coming out.
            </p>
            <p
              style={{
                fontFamily: BODY,
                fontSize: "0.72rem",
                color: INK_SOFT,
                lineHeight: 1.5,
                letterSpacing: "0.02em",
              }}
            >
              5 seconds. One take is usually enough.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-1 flex items-end gap-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full px-4 py-2.5 transition-transform active:scale-95"
          style={{
            background: INK,
            color: "#fff",
            fontFamily: BODY,
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          <Camera size={14} strokeWidth={2} />
          Tap when ready
        </button>
        <p
          style={{
            fontFamily: BODY,
            fontSize: "0.66rem",
            color: INK_FAINT,
            marginBottom: 4,
          }}
        >
          2:12 PM
        </p>
      </div>
    </div>
  );
}

function SideAnnotation({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: "1.35rem",
          fontWeight: 500,
          color: ROSE_DEEP,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          minWidth: 34,
        }}
      >
        {number}
      </span>
      <div className="flex-1">
        <h3
          style={{
            fontFamily: DISPLAY,
            fontSize: "1.15rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: INK,
          }}
        >
          {title}
        </h3>
        <p
          className="mt-1.5"
          style={{
            fontFamily: BODY,
            fontSize: "0.92rem",
            lineHeight: 1.6,
            color: INK_MUTED,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export default function SectionFourChatPreview() {
  return (
    <main style={{ background: SHELL, color: INK }}>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, transparent 15%, rgba(248,247,244,0.92) 75%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 sm:pt-24 sm:pb-20">
          <div className="mb-10 sm:mb-12">
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
              04 &middot; The Directing
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

            <h1
              className="mt-5 leading-[1.02] tracking-[-0.04em] text-[clamp(2.4rem,5.6vw,4rem)]"
              style={{
                fontFamily: DISPLAY,
                fontWeight: 600,
                color: INK,
                maxWidth: "840px",
              }}
            >
              Solara directs. You press record.
            </h1>

            <p
              className="mt-4"
              style={{
                fontFamily: BODY,
                fontSize: "1.06rem",
                lineHeight: 1.55,
                color: INK_MUTED,
                maxWidth: "620px",
              }}
            >
              You never decide where to stand, what angle, or whether the
              light is right. Solara already knows &mdash; and tells you,
              one shot at a time.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div className="order-2 flex flex-col gap-8 lg:order-1">
              <SideAnnotation
                number="01"
                title="The ask arrives."
                body="One message. Short. Specific. No long brief, no creative brainstorm. It tells you exactly what shot it needs tonight."
              />
              <SideAnnotation
                number="02"
                title="It knows your shop."
                body="Because onboarding walked it through your space. It knows where the oven is, where the light comes from, and which counter makes the dough look best. That context is inside every direction."
              />
              <SideAnnotation
                number="03"
                title="A reference, every time."
                body="Solara always sends what the shot should roughly look like. You're not guessing. You're matching."
              />
              <SideAnnotation
                number="04"
                title="You press record."
                body="Five seconds. One take, usually. Solara reviews it, either ships it or asks for one more. You're out in under a minute."
              />
            </div>

            <div className="order-1 lg:order-2">
              <PhoneFrame>
                <PhoneHeader />
                <DirectingBubble />
              </PhoneFrame>
            </div>
          </div>

          <div
            className="mx-auto mt-20 max-w-3xl border-t pt-10 text-center"
            style={{ borderColor: HAIRLINE_HEAVY }}
          >
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: "clamp(1.3rem, 2.6vw, 1.85rem)",
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: INK,
              }}
            >
              You bring: <span style={{ color: INK_FAINT }}>pressing a button.</span>
              <br />
              Solara brings:{" "}
              <span
                className="relative inline-block"
                style={{ color: ROSE_DEEP, fontWeight: 600 }}
              >
                everything else.
              </span>
            </p>
          </div>
        </div>
      </section>

      <PreviewFooter
        label="Variant 1 · Chat (centered phone, side annotations)"
        description="The directing moment shown as a real product artifact: Solara sends a short ask with a visual reference and exact positioning. Four numbered annotations to the left explain what just happened. Cream aesthetic, Geist Sans, navy accent — consistent with Section 2."
      />
    </main>
  );
}
