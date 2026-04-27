"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  V2Section,
  V2SectionInner,
  V2HeadlineBlock,
  INK_MUTED,
  INK_FAINT,
  ROSE_DEEP,
  HAIRLINE_HEAVY,
  BODY,
} from "@/components/homepage-v2/primitives";
import { CTA_MAP, TESTIDS } from "@/app/home-v2/content";

function PhoneRawIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="2"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="18.5" r="0.8" fill="rgba(255,255,255,0.22)" />
      <path
        d="M9 8h2M13 8h2M9 11h1M11 11h3M9 14h4M14 14h1"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SolaraPolishedIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"
        stroke={ROSE_DEEP}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="5" r="1" fill={ROSE_DEEP} opacity={0.4} />
      <circle cx="19" cy="19" r="1" fill={ROSE_DEEP} opacity={0.4} />
    </svg>
  );
}

function HandleArrows() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path
        d="M5 7H13M5 7L2 4M5 7L2 10M13 7L16 4M13 7L16 10"
        stroke={INK_MUTED}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BeforeAfterSlider() {
  const [split, setSplit] = useState(50);
  const [handleFocused, setHandleFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSplit = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = ((clientX - left) / width) * 100;
    setSplit(Math.min(95, Math.max(5, pct)));
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) updateSplit(e.clientX);
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [updateSplit]);

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches[0]) updateSplit(e.touches[0].clientX);
    },
    [updateSplit],
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setSplit((s) => Math.max(5, Math.round(s) - 5));
    if (e.key === "ArrowRight") setSplit((s) => Math.min(95, Math.round(s) + 5));
  }, []);

  return (
    <div
      ref={containerRef}
      data-testid={TESTIDS.beforeAfterSlider}
      className="relative overflow-hidden rounded-lg select-none touch-none"
      style={{
        height: "clamp(300px, 46vw, 520px)",
        border: `1px solid ${HAIRLINE_HEAVY}`,
        cursor: "ew-resize",
      }}
      onMouseDown={(e) => {
        isDragging.current = true;
        updateSplit(e.clientX);
      }}
      onTouchStart={(e) => {
        if (e.touches[0]) updateSplit(e.touches[0].clientX);
      }}
      onTouchMove={onTouchMove}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-5"
        style={{
          background: "linear-gradient(160deg, #0f0f0f 0%, #1a1a1a 50%, #111111 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="absolute top-5 left-5"
          style={{
            fontFamily: BODY,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "4px 10px",
            borderRadius: 4,
          }}
        >
          Tuesday 11:47 PM
        </div>
        <PhoneRawIcon />
        <div style={{ textAlign: "center", position: "relative" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            RAW CLIP
          </p>
          <p
            className="mt-3 max-w-[20ch]"
            style={{
              fontFamily: BODY,
              fontSize: 13,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.22)",
            }}
          >
            No captions · Dim lighting · Shaky cut
          </p>
        </div>
      </div>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-5"
        style={{
          background: "linear-gradient(160deg, #ffffff 0%, #faf9f7 60%, #f5f4f0 100%)",
          clipPath: `inset(0 0 0 ${split}%)`,
        }}
      >
        <div
          className="absolute top-5 right-5"
          style={{
            fontFamily: BODY,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: ROSE_DEEP,
            background: "rgba(23,37,84,0.07)",
            border: "1px solid rgba(23,37,84,0.12)",
            padding: "4px 10px",
            borderRadius: 4,
          }}
        >
          Tuesday 6:00 AM
        </div>
        <SolaraPolishedIcon />
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: BODY,
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: ROSE_DEEP,
            }}
          >
            SOLARA
          </p>
          <p
            className="mt-3 max-w-[22ch]"
            style={{
              fontFamily: BODY,
              fontSize: 13,
              lineHeight: 1.7,
              color: INK_MUTED,
            }}
          >
            Color-graded · Animated captions · Music-timed cuts
          </p>
        </div>
      </div>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(split)}
        className="absolute top-0 bottom-0 flex items-center justify-center focus:outline-none"
        style={{
          left: `${split}%`,
          transform: "translateX(-50%)",
          width: 2,
          background: "rgba(200,200,200,0.7)",
          cursor: "ew-resize",
          zIndex: 10,
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => setHandleFocused(true)}
        onBlur={() => setHandleFocused(false)}
        onMouseDown={(e) => {
          e.stopPropagation();
          isDragging.current = true;
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#ffffff",
            border: `1.5px solid ${HAIRLINE_HEAVY}`,
            boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: handleFocused ? `2px solid ${ROSE_DEEP}` : "none",
            outlineOffset: 3,
            transition: "outline 80ms ease",
            flexShrink: 0,
          }}
        >
          <HandleArrows />
        </div>
      </div>
    </div>
  );
}

export function CraftV2() {
  return (
    <V2Section id={TESTIDS.craft}>
      <V2SectionInner>
        <V2HeadlineBlock
          eyebrow="05 · THE CRAFT"
          headline="From your phone to looking like you hired an agency."
          sub="Drag the slider. Same business. Same footage. Two outcomes — what most owners post on a tired Tuesday, and what Solara publishes for them every Tuesday."
        />

        <div className="mt-12">
          <BeforeAfterSlider />
        </div>

        <div className="mt-8 flex flex-col gap-2.5">
          <p
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.78rem, 1.15vw, 0.875rem)",
              color: INK_FAINT,
              lineHeight: 1.6,
            }}
          >
            We don&rsquo;t fake your face. We don&rsquo;t stage your space.
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.78rem, 1.15vw, 0.875rem)",
              color: INK_FAINT,
              lineHeight: 1.6,
            }}
          >
            We don&rsquo;t generate AI avatars. We don&rsquo;t use stock footage.
          </p>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "clamp(0.78rem, 1.15vw, 0.875rem)",
              color: INK_FAINT,
              lineHeight: 1.6,
            }}
          >
            We just direct you, then we do the production work.
          </p>
        </div>

        <div className="mt-10">
          <a
            href={CTA_MAP.beforeAfter}
            style={{
              fontFamily: BODY,
              fontSize: "0.92rem",
              fontWeight: 600,
              color: ROSE_DEEP,
              textDecoration: "none",
              letterSpacing: "0.005em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            See it on your business →
          </a>
        </div>
      </V2SectionInner>
    </V2Section>
  );
}
