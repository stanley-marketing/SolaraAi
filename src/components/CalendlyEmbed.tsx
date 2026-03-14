"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onCalendlyReady = (e: MessageEvent) => {
      if (
        typeof e.data === "object" &&
        e.data?.event?.startsWith("calendly.")
      ) {
        setLoaded(true);
      }
    };

    window.addEventListener("message", onCalendlyReady);
    const timeout = setTimeout(() => setLoaded(true), 10000);

    return () => {
      window.removeEventListener("message", onCalendlyReady);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        className="absolute inset-0 z-10 bg-white px-6 py-8"
        style={{
          opacity: loaded ? 0 : 1,
          pointerEvents: loaded ? "none" : "auto",
          transition: "opacity 0.5s ease",
        }}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="h-5 w-32 rounded bg-gray-100" />
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-100" />
            <div className="h-8 w-8 rounded-full bg-gray-100" />
          </div>
        </div>

        <div className="mb-3 grid grid-cols-7 gap-1">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div
              key={i}
              className="flex h-8 items-center justify-center text-xs font-medium text-gray-300"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="flex h-10 items-center justify-center">
              <div
                className="h-9 w-9 rounded-full"
                style={{
                  background:
                    i >= 2 && i <= 30 ? "#f3f4f6" : "transparent",
                  animation:
                    i >= 2 && i <= 30
                      ? `cal-skel-pulse 1.8s ease-in-out ${(i % 7) * 0.1}s infinite`
                      : "none",
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-11 w-full rounded-lg bg-gray-100"
              style={{
                animation: `cal-skel-pulse 1.8s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes cal-skel-pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.7; }
          }
        `}} />
      </div>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ilay-mor-solaraai/45-minute-meeting-full-stack-marketing-manageme-clone"
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
