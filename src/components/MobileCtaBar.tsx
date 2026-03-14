"use client";

import { useEffect, useState } from "react";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 16;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
      setVisible(scrolled && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-5 pt-3 flex gap-2.5 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <a
        href="/contact"
        className="flex-1 inline-flex items-center justify-center rounded-xl border border-line bg-white px-4 py-3.5 text-[0.82rem] font-medium tracking-[0.08em] text-ink-900 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] transition-all duration-200 active:scale-[0.97]"
      >
        Book a call
      </a>
      <a
        href="/contact"
        className="flex-1 inline-flex items-center justify-center rounded-xl bg-ink-900 px-4 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.28)] transition-all duration-200 active:scale-[0.97]"
      >
        Start free trial
      </a>
    </div>
  );
}
