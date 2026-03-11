"use client";

import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GE_CSS = `
.ge-inner::after {
  content: "";
  border-radius: inherit;
  position: absolute;
  inset: calc(-1 * var(--ge-bw, 1px));
  border: var(--ge-bw, 1px) solid transparent;
  background: var(--ge-gradient);
  background-attachment: fixed;
  opacity: var(--ge-active, 0);
  transition: opacity 0.3s;
  mask-clip: padding-box, border-box;
  -webkit-mask-clip: padding-box, border-box;
  mask-composite: intersect;
  -webkit-mask-composite: xor;
  mask-image: linear-gradient(#0000, #0000),
    conic-gradient(
      from calc((var(--ge-start, 0) - var(--ge-spread, 20)) * 1deg),
      #00000000 0deg,
      #fff,
      #00000000 calc(var(--ge-spread, 20) * 2deg)
    );
  -webkit-mask-image: linear-gradient(#0000, #0000),
    conic-gradient(
      from calc((var(--ge-start, 0) - var(--ge-spread, 20)) * 1deg),
      #00000000 0deg,
      #fff,
      #00000000 calc(var(--ge-spread, 20) * 2deg)
    );
}
`;

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  movementDuration?: number;
  borderWidth?: number;
  disabled?: boolean;
}

export function GlowingEffect({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = "default",
  glow = false,
  className,
  movementDuration = 2,
  borderWidth = 1,
  disabled = false,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  const gradient =
    variant === "white"
      ? `radial-gradient(circle, #ffffff 10%, #000000 50%, #9E7AFF 100%)`
      : `radial-gradient(circle, #9E7AFF 10%, #FE8BBB 50%, #FFBE7B 100%)`;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--ge-gradient", gradient);
    el.style.setProperty("--ge-spread", String(spread));
    el.style.setProperty("--ge-bw", `${borderWidth}px`);
    el.style.setProperty("--ge-active", disabled ? "0" : "0");
  }, [gradient, spread, borderWidth, disabled]);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (disabled) return;
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        const isInside =
          x >= -proximity &&
          x <= rect.width + proximity &&
          y >= -proximity &&
          y <= rect.height + proximity;

        const inactiveR =
          Math.sqrt(centerX ** 2 + centerY ** 2) * inactiveZone;

        if (!isInside || distFromCenter < inactiveR) {
          el.style.setProperty("--ge-active", "0");
          return;
        }

        const angle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI + 90;
        lastPosition.current = { x, y };

        el.style.setProperty("--ge-start", String(angle));
        el.style.setProperty("--ge-active", "1");
      });
    },
    [disabled, proximity, inactiveZone, movementDuration]
  );

  useEffect(() => {
    document.body.addEventListener("pointermove", handlePointerMove);
    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [handlePointerMove]);

  return (
    <>
      <style>{GE_CSS}</style>
      <div
        ref={containerRef}
        style={{ filter: blur ? `blur(${blur}px)` : undefined }}
        className={cn("ge-inner pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      />
    </>
  );
}
