"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  INK,
  INK_MUTED,
  INK_SOFT,
  INK_FAINT,
  SHELL,
  ROSE,
  ROSE_DEEP,
  HAIRLINE,
  HAIRLINE_HEAVY,
  DISPLAY,
  BODY,
  FlickeringGrid,
  ScrollReveal,
  Eyebrow,
  WordRotate,
} from "@/components/homepage/teardown-parts";

export {
  INK,
  INK_MUTED,
  INK_SOFT,
  INK_FAINT,
  SHELL,
  ROSE,
  ROSE_DEEP,
  HAIRLINE,
  HAIRLINE_HEAVY,
  DISPLAY,
  BODY,
  FlickeringGrid,
  ScrollReveal,
  Eyebrow,
  WordRotate,
};

export function V2Section({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      data-testid={id}
      className={cn("px-5 py-20 sm:px-8 sm:py-28", className)}
      style={{ background: SHELL }}
    >
      {children}
    </section>
  );
}

export function V2SectionInner({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-5xl">{children}</div>;
}

export function V2Eyebrow({ children }: { children: ReactNode }) {
  return (
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
      {children}
    </p>
  );
}

export function V2HeadlineBlock({
  eyebrow,
  headline,
  sub,
}: {
  eyebrow: ReactNode;
  headline: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <ScrollReveal>
      <V2Eyebrow>{eyebrow}</V2Eyebrow>

      <h2
        className="mt-6"
        style={{
          fontFamily: DISPLAY,
          fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          color: INK,
        }}
      >
        {headline}
      </h2>

      {sub && (
        <p
          className="mt-5 max-w-[60ch]"
          style={{
            fontFamily: BODY,
            fontSize: "clamp(0.96rem, 1.4vw, 1.1rem)",
            lineHeight: 1.65,
            color: INK_MUTED,
          }}
        >
          {sub}
        </p>
      )}
    </ScrollReveal>
  );
}
