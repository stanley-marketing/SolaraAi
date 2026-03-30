"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

function getCalendlyMonth(): string {
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const daysLeft = lastDay - now.getDate();
  // If 3 or fewer days left in the month, show next month
  // (matches the 4-day scheduling window — slots will be in the next month)
  if (daysLeft <= 3) {
    const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
  }
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const month = getCalendlyMonth();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

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
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="relative">
      <div
        className="absolute inset-0 z-10 flex bg-white"
        style={{
          opacity: loaded ? 0 : 1,
          pointerEvents: loaded ? "none" : "auto",
          transition: "opacity 0.5s ease",
          width: "800px",
          maxWidth: "100%",
          height: "700px",
          margin: "0 auto",
        }}
      >
        {/* Left panel */}
        <div className="flex w-[240px] shrink-0 flex-col border-r px-6 py-8" style={{ borderColor: "#e5e7eb" }}>
          <div className="mb-4 h-5 w-28 rounded bg-gray-100" style={{ animation: "cal-skel-pulse 1.8s ease-in-out infinite" }} />
          <div className="mb-2 h-4 w-36 rounded bg-gray-100" style={{ animation: "cal-skel-pulse 1.8s ease-in-out 0.1s infinite" }} />
          <div className="mb-6 h-3 w-20 rounded bg-gray-50" style={{ animation: "cal-skel-pulse 1.8s ease-in-out 0.2s infinite" }} />
          <div className="space-y-2">
            <div className="h-3 w-full rounded bg-gray-100" style={{ animation: "cal-skel-pulse 1.8s ease-in-out 0.3s infinite" }} />
            <div className="h-3 w-3/4 rounded bg-gray-100" style={{ animation: "cal-skel-pulse 1.8s ease-in-out 0.4s infinite" }} />
            <div className="h-3 w-5/6 rounded bg-gray-100" style={{ animation: "cal-skel-pulse 1.8s ease-in-out 0.5s infinite" }} />
          </div>
        </div>

        {/* Right panel */}
        <div className="flex flex-1 flex-col px-6 py-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-5 w-32 rounded bg-gray-100" />
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-100" />
              <div className="h-8 w-8 rounded-full bg-gray-100" />
            </div>
          </div>

          <div className="mb-3 grid grid-cols-7 gap-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={`day-${d}-${i}`} className="flex h-6 items-center justify-center text-xs font-medium text-gray-300">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={`cell-${i}`} className="flex h-8 items-center justify-center">
                <div
                  className="h-7 w-7 rounded-full"
                  style={{
                    background: i >= 2 && i <= 30 ? "#f3f4f6" : "transparent",
                    animation: i >= 2 && i <= 30
                      ? `cal-skel-pulse 1.8s ease-in-out ${(i % 7) * 0.1}s infinite`
                      : "none",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 h-3 w-24 rounded bg-gray-50" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cal-skel-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `}} />

      <div
        className="calendly-inline-widget"
        data-url={`https://calendly.com/ilay-mor-solaraai/45-minute-meeting-full-stack-marketing-manageme-clone?month=${month}`}
        style={{ minWidth: "320px", width: "100%", height: "700px" }}
      />
      {shouldLoad && (
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      )}
    </div>
  );
}
