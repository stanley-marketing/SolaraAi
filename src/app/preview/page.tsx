"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

/* ─── Animated Counter ─── */
function Counter({
  target,
  className = "",
  style,
}: {
  target: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) animate(motionVal, target, { duration: 1.5 });
  }, [isInView, motionVal, target]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsub;
  }, [rounded]);

  return <span ref={ref} className={className} style={style}>0</span>;
}

/* ─── Stat item type ─── */
const STATS = [
  { val: 90, suffix: "%", label: "Handled by AI", color: "#7c5cfc" },
  { val: 6, suffix: "", label: "AI agents", color: "#3b82f6" },
  { val: 24, suffix: "/7", label: "Always running", color: "#06b6d4" },
  { val: 10, suffix: "%", label: "Human expertise", color: "#8b5cf6" },
];

/* ─── Shared Heading ─── */
function SectionHeading() {
  return (
    <>
      <h2
        className="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        90% of what made great marketing expensive
        <br className="hidden sm:block" /> was never skill.{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          It was time.
        </span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-center text-lg text-gray-500">
        AI handles the heavy lifting. Humans steer the ship.
      </p>
    </>
  );
}

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Section 4 — The Math Changed
        </h1>
        <p className="mb-20 text-center text-lg text-gray-500">
          Final version — clean stats only.
        </p>

        {/* ===== Clean stats only, no quote ===== */}
        <section className="rounded-3xl bg-gradient-to-b from-gray-50/80 to-white px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading />

            {/* Stats row */}
            <div className="mt-16 border-t border-gray-200 pt-14">
              <div className="grid grid-cols-4 divide-x divide-gray-200 text-center">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-baseline justify-center">
                      <Counter
                        target={s.val}
                        className="text-5xl font-light tracking-tight text-gray-900 sm:text-6xl"
                      />
                      <span className="text-3xl font-light text-gray-400 sm:text-4xl">
                        {s.suffix}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-gray-900">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
