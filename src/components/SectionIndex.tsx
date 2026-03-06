"use client";

import { useEffect, useState, useRef } from "react";

const items = [
  { id: "01", label: "Signal Map", sectionId: "section-01" },
  { id: "02", label: "Creative Engine", sectionId: "section-02" },
  { id: "03", label: "Channel Flow", sectionId: "section-03" },
  { id: "04", label: "Offer Match", sectionId: "section-04" },
  { id: "05", label: "AI Operations", sectionId: "section-05" },
  { id: "06", label: "Reporting", sectionId: "section-06" },
];

export function SectionIndex() {
  const [active, setActive] = useState("section-01");
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const endRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    items.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Progress: from start of first section to end of last section
  useEffect(() => {
    function measure() {
      const first = document.getElementById("section-01");
      const last = document.getElementById("section-06");
      if (!first || !last) return;
      startRef.current = first.getBoundingClientRect().top + window.scrollY;
      endRef.current = last.getBoundingClientRect().bottom + window.scrollY;
    }

    function onScroll() {
      if (startRef.current === null || endRef.current === null) measure();
      const start = startRef.current ?? 0;
      const end = endRef.current ?? document.body.scrollHeight;
      const scrolled = window.scrollY + window.innerHeight / 2 - start;
      const total = end - start;
      setProgress(Math.min(100, Math.max(0, Math.round((scrolled / total) * 100))));
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="rounded-2xl border border-line bg-white/80 px-5 py-4 shadow-[0_2px_16px_-4px_rgba(17,17,17,0.08)] backdrop-blur-md w-52">
      <p className="mb-3 text-[0.55rem] uppercase tracking-[0.22em] text-ink-700/40">
        On This Page
      </p>

      <div className="flex flex-col">
        {items.map((item) => {
          const isActive = active === item.sectionId;
          return (
            <a
              key={item.id}
              href={`#${item.sectionId}`}
              className="group relative flex items-center gap-4 border-t border-line py-3 first:border-t-0"
            >
              {/* left bar indicator */}
              <span className="absolute left-0 top-0 w-px overflow-hidden" style={{ height: "100%" }}>
                <span
                  className="block w-full transition-all duration-300"
                  style={{
                    height: isActive ? "100%" : "0%",
                    backgroundColor: isActive ? "var(--color-ink-900)" : "var(--color-line)",
                  }}
                />
              </span>

              <span
                className={`pl-2 text-[0.62rem] tabular-nums tracking-[0.16em] transition-colors duration-150 ${
                  isActive ? "text-ink-900 font-medium" : "text-ink-700/40"
                }`}
              >
                {item.id}
              </span>
              <span
                className={`text-[0.68rem] uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-150 ${
                  isActive ? "text-ink-900 font-semibold" : "text-ink-700/50 group-hover:text-ink-700/80"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Progress */}
      <div className="mt-5 border-t border-line pt-4">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[0.52rem] uppercase tracking-[0.22em] text-ink-700/40">
            Progress
          </span>
          <span className="text-[0.52rem] tabular-nums text-ink-700/40">
            {progress}%
          </span>
        </div>
        <div className="h-px w-full bg-line">
          <div
            className="h-px bg-ink-900 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
