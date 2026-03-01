"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useSpring, useTransform } from "framer-motion";

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v.toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [display, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

export function RoiCalculator() {
  const [spend, setSpend] = useState(5000);
  const [hours, setHours] = useState(40);
  const [leads, setLeads] = useState(100);

  const hoursSaved = Math.round(hours * 0.6);
  const additionalLeads = Math.round(leads * 0.67);
  const monthlySavings = Math.round(hoursSaved * 75 + spend * 0.26);
  const roi = Math.round(((additionalLeads * 150 + monthlySavings) / 179) * 10) / 10;

  return (
    <div className="surface-card p-6 md:p-8">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="roi-spend" className="text-sm font-medium text-text-secondary">
              Monthly marketing spend
            </label>
            <motion.span
              key={spend}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-heading font-bold text-text-primary"
            >
              ${spend.toLocaleString()}
            </motion.span>
          </div>
          <input
            id="roi-spend"
            type="range"
            min={1000}
            max={50000}
            step={1000}
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="slider-input"
          />
          <div className="flex justify-between mt-1.5 text-xs text-text-tertiary">
            <span>$1K</span>
            <span>$50K</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="roi-hours" className="text-sm font-medium text-text-secondary">
              Team hours on marketing / week
            </label>
            <motion.span
              key={hours}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-heading font-bold text-text-primary"
            >
              {hours} hrs
            </motion.span>
          </div>
          <input
            id="roi-hours"
            type="range"
            min={5}
            max={100}
            step={5}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="slider-input"
          />
          <div className="flex justify-between mt-1.5 text-xs text-text-tertiary">
            <span>5 hrs</span>
            <span>100 hrs</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="roi-leads" className="text-sm font-medium text-text-secondary">
              Current monthly leads
            </label>
            <motion.span
              key={leads}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-heading font-bold text-text-primary"
            >
              {leads}
            </motion.span>
          </div>
          <input
            id="roi-leads"
            type="range"
            min={10}
            max={1000}
            step={10}
            value={leads}
            onChange={(e) => setLeads(Number(e.target.value))}
            className="slider-input"
          />
          <div className="flex justify-between mt-1.5 text-xs text-text-tertiary">
            <span>10</span>
            <span>1,000</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Hours saved / week", value: hoursSaved, suffix: " hrs" },
          { label: "Additional leads / mo", value: additionalLeads, prefix: "+" },
          { label: "Monthly savings", value: monthlySavings, prefix: "$" },
          { label: "Projected ROI", value: roi, suffix: "x" },
        ].map((r) => (
          <div key={r.label} className="p-5 rounded-2xl bg-bg-secondary border border-border text-center">
            <AnimatedNumber
              value={r.value}
              prefix={r.prefix}
              suffix={r.suffix}
              className="font-heading font-bold text-3xl md:text-5xl text-text-primary block"
            />
            <p className="text-xs text-text-tertiary mt-2">{r.label}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-text-secondary text-sm mb-4">
          Based on the Premium plan at $179/mo. Results vary by industry.
        </p>
        <Link href="/contact" className="btn-primary !h-12 !px-8 !text-base">
          Start Your Free Trial
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
