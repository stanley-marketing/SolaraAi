"use client";

import { cn } from "@/lib/utils";

interface OrbitingCirclesProps {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  delay?: number;
  className?: string;
}

export function OrbitingCircles({
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  delay = 0,
  className,
}: OrbitingCirclesProps) {
  return (
    <div
      className={cn(
        "absolute flex items-center justify-center rounded-full border bg-white/80 shadow-sm backdrop-blur-sm",
        className
      )}
      style={
        {
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
          animationDelay: `${-delay}s`,
        } as React.CSSProperties
      }
    >
      <div
        style={{
          animationDelay: `${-delay}s`,
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: `${duration}s`,
        }}
        className="animate-orbit"
      >
        {children}
      </div>
    </div>
  );
}
