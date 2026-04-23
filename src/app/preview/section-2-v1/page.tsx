"use client";

import {
  Award,
  BarChart3,
  Clock,
  FileText,
  Film,
  Hash,
  Image as ImageIcon,
  Layers,
  type LucideIcon,
  Mic,
  Music,
  Palette,
  RefreshCw,
  Search,
  Share2,
  Target,
  Video,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";

const MUTED_LABEL = "#626262";
const MUTED_BODY = "#4a4a4a";

const MAX_INFLUENCE_DISTANCE = 260;
const MAX_LIFT = 4;
const MAX_TILT = 5;
const SPRING_STIFFNESS = 0.16;

type Capability = {
  icon: LucideIcon;
  label: string;
  comingSoon?: boolean;
};

const CAPABILITIES: Capability[] = [
  { icon: Target, label: "Content strategy" },
  { icon: FileText, label: "Scripts" },
  { icon: Film, label: "Video editing" },
  { icon: Palette, label: "Color grading" },
  { icon: Music, label: "Sound design" },
  { icon: Zap, label: "Viral hooks" },
  { icon: ImageIcon, label: "Thumbnails" },
  { icon: Hash, label: "Captions & hashtags" },
  { icon: Share2, label: "Multi-platform" },
  { icon: Clock, label: "Optimal timing" },
  { icon: BarChart3, label: "Analytics", comingSoon: true },
  { icon: RefreshCw, label: "Weekly strategy" },
  { icon: Video, label: "Camera coaching" },
  { icon: Mic, label: "Brand voice" },
  { icon: Award, label: "Authority" },
  { icon: Search, label: "Social SEO" },
  { icon: Layers, label: "Repurposing" },
];

function TileCard({
  capability,
  setRef,
}: {
  capability: Capability;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const Icon = capability.icon;
  return (
    <div
      ref={setRef}
      className="tile-card group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border bg-white p-5"
      style={{
        borderColor: "rgba(0,0,0,0.07)",
        boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div
        aria-hidden="true"
        className="tile-glow-fill pointer-events-none absolute inset-0 rounded-2xl"
      />
      <div
        aria-hidden="true"
        className="tile-glow-border pointer-events-none absolute inset-0 rounded-2xl"
      />
      <Icon
        size={26}
        strokeWidth={1.5}
        style={{
          color: "#2a2a2a",
          position: "relative",
          zIndex: 1,
        }}
      />
      <span
        className="text-center"
        style={{
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "-0.005em",
          color: "#1c1c1e",
          lineHeight: 1.3,
          position: "relative",
          zIndex: 1,
        }}
      >
        {capability.label}
        {capability.comingSoon && (
          <span
            style={{
              display: "block",
              fontSize: "0.6rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#a0a0a5",
              letterSpacing: "0.01em",
              marginTop: "2px",
            }}
          >
            (soon)
          </span>
        )}
      </span>
    </div>
  );
}

function SpotlightGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (prefersReducedMotion || !supportsHover) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let active = false;
    let rafId = 0;
    let cachedRects: DOMRect[] = [];
    let isVisible = true;

    const updateRects = () => {
      cachedRects = tileRefs.current.map(
        (tile) => tile?.getBoundingClientRect() ?? new DOMRect(),
      );
    };

    const handleMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const padding = 120;
      if (
        relX >= -padding &&
        relX <= rect.width + padding &&
        relY >= -padding &&
        relY <= rect.height + padding
      ) {
        targetX = e.clientX;
        targetY = e.clientY;
        active = true;
      } else {
        active = false;
      }
    };

    const handleLeave = () => {
      active = false;
    };

    const tick = () => {
      if (!isVisible) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      currentX += (targetX - currentX) * SPRING_STIFFNESS;
      currentY += (targetY - currentY) * SPRING_STIFFNESS;

      for (let i = 0; i < tileRefs.current.length; i++) {
        const tile = tileRefs.current[i];
        if (!tile) continue;
        const rect = cachedRects[i];
        if (!rect || rect.width === 0) continue;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = currentX - centerX;
        const dy = currentY - centerY;
        const distance = Math.hypot(dx, dy);
        const rawInfluence = active
          ? Math.max(0, 1 - distance / MAX_INFLUENCE_DISTANCE)
          : 0;
        const influence = rawInfluence * rawInfluence;

        const lift = -influence * MAX_LIFT;

        const isInside =
          Math.abs(dx) < rect.width / 2 && Math.abs(dy) < rect.height / 2;
        const tiltMultiplier = isInside ? 1 : influence * 0.35;
        const tiltX =
          -(dy / (rect.height / 2)) * MAX_TILT * tiltMultiplier;
        const tiltY = (dx / (rect.width / 2)) * MAX_TILT * tiltMultiplier;

        const glowXPercent = ((currentX - rect.left) / rect.width) * 100;
        const glowYPercent = ((currentY - rect.top) / rect.height) * 100;

        tile.style.transform = `translateY(${lift.toFixed(2)}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
        tile.style.setProperty("--glow-x", `${glowXPercent.toFixed(1)}%`);
        tile.style.setProperty("--glow-y", `${glowYPercent.toFixed(1)}%`);
        tile.style.setProperty("--glow", influence.toFixed(3));

        const borderIntensity = influence * 0.65;
        tile.style.setProperty(
          "--border-glow",
          borderIntensity.toFixed(3),
        );
      }

      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible = entry.isIntersecting;
        }
      },
      { threshold: 0 },
    );
    observer.observe(grid);

    updateRects();
    window.addEventListener("mousemove", handleMove, { passive: true });
    grid.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", updateRects);
    window.addEventListener("scroll", updateRects, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMove);
      grid.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", updateRects);
      window.removeEventListener("scroll", updateRects);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <div
        className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6"
        style={{ transformStyle: "preserve-3d" }}
      >
        {CAPABILITIES.map((cap, i) => (
          <TileCard
            key={cap.label}
            capability={cap}
            setRef={(el) => {
              tileRefs.current[i] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Section2V1Preview() {
  return (
    <main className="min-h-screen bg-white">
      <style>{`
        .tile-card {
          --glow: 0;
          --glow-x: 50%;
          --glow-y: 50%;
          --border-glow: 0;
        }
        .tile-glow-fill {
          background: radial-gradient(
            circle 220px at var(--glow-x) var(--glow-y),
            rgba(236, 72, 153, 0.26),
            rgba(236, 72, 153, 0) 70%
          );
          opacity: var(--glow);
          transition: opacity 180ms ease-out;
          mix-blend-mode: multiply;
        }
        .tile-glow-border {
          padding: 1px;
          background: radial-gradient(
            circle 260px at var(--glow-x) var(--glow-y),
            rgba(219, 39, 119, 0.95),
            rgba(219, 39, 119, 0) 65%
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask-composite: exclude;
          opacity: var(--border-glow);
          transition: opacity 200ms ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .tile-card:hover .tile-glow-fill {
            opacity: 0.6;
          }
          .tile-card:hover {
            transform: translateY(-2px);
            transition: transform 200ms ease-out;
          }
        }
      `}</style>

      <section
        className="relative overflow-x-hidden bg-white px-6 py-20 sm:px-10 sm:py-28 lg:py-32"
        aria-label="What you actually get with Solara"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl">
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase" as const,
                color: MUTED_LABEL,
              }}
            >
              02 &middot; What you get
            </p>

            <h2
              className="mt-4 max-w-[760px] leading-[1.08] tracking-[-0.02em] text-ink-900"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 600,
              }}
            >
              A full creative production team. In your pocket.
            </h2>

            <p
              className="mt-6 max-w-[640px]"
              style={{
                fontSize: "clamp(0.98rem, 1.2vw, 1.08rem)",
                color: MUTED_BODY,
                lineHeight: 1.6,
              }}
            >
              A human team costs $2,000+ a month: a content strategist, a
              scriptwriter, a video editor, a creative director. Solara does
              all of it. Autonomously.
            </p>
          </div>

          <div className="mt-14 sm:mt-20">
            <SpotlightGrid />
          </div>

          <p
            className="mx-auto mt-12 max-w-md text-center italic sm:mt-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: MUTED_BODY,
              fontWeight: 400,
            }}
          >
            &hellip; and everything else a creative team does.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.26em] text-ink-700/50"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Variation 1 &middot; Bordered Tiles + Magnetic Spotlight
        </p>
        <p className="mt-3 text-sm text-ink-700/70">
          Move your cursor across the grid. Each tile reacts to proximity:
          subtle lift, 3D tilt toward the cursor, rose-pink radial glow
          from the point of pointer contact, and a faint pink border light
          on the edge facing the cursor. Spring-lerp tracking at 60fps.
          Falls back to a gentle hover-lift for reduced-motion and touch
          users.
        </p>
      </div>
    </main>
  );
}
