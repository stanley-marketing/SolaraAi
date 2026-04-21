"use client";

import type { ReactNode } from "react";

type SideBySidePhonesProps = {
  primary: { label: string; mockup: ReactNode; accent: string };
  secondary: { label: string; mockup: ReactNode; accent: string };
};

export function SideBySidePhones({
  primary,
  secondary,
}: SideBySidePhonesProps) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex w-full items-center justify-center">
        <div
          className="origin-bottom-right transition-transform duration-300"
          style={{
            transform: "rotate(-3deg) translateX(8px)",
            zIndex: 1,
          }}
        >
          {primary.mockup}
        </div>

        <div
          className="-ml-12 origin-bottom-left transition-transform duration-300"
          style={{
            transform: "rotate(3deg) translateX(-8px)",
            zIndex: 0,
          }}
        >
          {secondary.mockup}
        </div>
      </div>

      <div
        className="mt-8 flex items-center gap-5"
        role="presentation"
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: primary.accent,
              boxShadow: `0 0 0 3px ${primary.accent}22`,
            }}
          />
          <span
            className="text-[0.72rem] font-semibold tracking-[0.04em]"
            style={{ color: "#1c1c1e" }}
          >
            {primary.label}
          </span>
        </div>

        <span
          aria-hidden="true"
          className="h-px w-6"
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
        />

        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: secondary.accent,
              boxShadow: `0 0 0 3px ${secondary.accent}22`,
            }}
          />
          <span
            className="text-[0.72rem] font-semibold tracking-[0.04em]"
            style={{ color: "#1c1c1e" }}
          >
            {secondary.label}
          </span>
        </div>
      </div>
    </div>
  );
}
