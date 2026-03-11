"use client";

import React from "react";
import { cn } from "@/lib/utils";

const ORBIT_CSS = `
@keyframes oc-orbit {
  from {
    transform: rotate(calc(var(--oc-angle) * 1deg))
               translateX(calc(var(--oc-radius) * 1px))
               rotate(calc(var(--oc-angle) * -1deg));
  }
  to {
    transform: rotate(calc(360deg + var(--oc-angle) * 1deg))
               translateX(calc(var(--oc-radius) * 1px))
               rotate(calc(-360deg + var(--oc-angle) * -1deg));
  }
}
.oc-item {
  animation: oc-orbit calc(var(--oc-duration) * 1s) linear infinite;
  will-change: transform;
}
`;

export function OrbitingCircles({
  children,
  reverse = false,
  duration = 20,
  radius = 80,
  path = true,
  iconSize = 30,
  speed = 1,
  className,
}: {
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  className?: string;
}) {
  const calcDuration = duration / speed;

  return (
    <>
      <style>{ORBIT_CSS}</style>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            style={{ stroke: "rgba(0,0,0,0.06)" }}
            strokeWidth={1}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const total = React.Children.count(children);
        const angle = (360 / total) * index;
        return (
          <div
            style={
              {
                "--oc-duration": calcDuration,
                "--oc-radius": radius,
                "--oc-angle": angle,
                width: iconSize,
                height: iconSize,
                animationDirection: reverse ? "reverse" : "normal",
              } as React.CSSProperties
            }
            className={cn(
              "oc-item absolute flex items-center justify-center rounded-full",
              className,
            )}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
