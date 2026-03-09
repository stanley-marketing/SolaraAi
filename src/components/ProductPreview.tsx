"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Metric = {
  value: string;
  label: string;
  trend: "up" | "down";
  percent: string;
  good?: boolean; // true = emerald even when trend is "down" (e.g. lower CPA is good)
};

type Activity = {
  status: "done" | "running";
  text: string;
  time: string;
};

type TabData = {
  metrics: Metric[];
  bars: number[]; // 7 values 0–100 (Mon–Sun)
  feed: Activity[];
  color: string; // hex for bar chart
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const BAR_MAX_PX = 56;

const DATA: Record<string, TabData> = {
  Ads: {
    color: "#3b82f6",
    metrics: [
      { value: "$4.2K", label: "Ad Spend", trend: "up", percent: "12%" },
      { value: "2,847", label: "Clicks", trend: "up", percent: "8%" },
      { value: "3.2%", label: "CTR", trend: "up", percent: "0.4%" },
      { value: "$18.40", label: "CPA", trend: "down", percent: "15%", good: true },
    ],
    bars: [45, 60, 75, 55, 80, 70, 65],
    feed: [
      { status: "done", text: "Campaign optimized — CPA reduced 18%", time: "4m ago" },
      { status: "done", text: "New ad set launched: Summer Promo", time: "22m ago" },
      { status: "done", text: "Budget redistributed: Meta → Google", time: "1h ago" },
      { status: "running", text: "A/B test winner being selected...", time: "Now" },
    ],
  },
  SEO: {
    color: "#10b981",
    metrics: [
      { value: "847", label: "Rankings", trend: "up", percent: "+23" },
      { value: "12.4K", label: "Traffic", trend: "up", percent: "18%" },
      { value: "234", label: "Keywords", trend: "up", percent: "+12" },
      { value: "42", label: "Domain Auth", trend: "up", percent: "+3" },
    ],
    bars: [40, 48, 55, 60, 68, 72, 80],
    feed: [
      { status: "done", text: "Ranking #4 → #2 for 'family lawyer austin'", time: "8m ago" },
      { status: "done", text: "Published: 'Best Dentist in Miami'", time: "45m ago" },
      { status: "done", text: "Page speed improved: 2.1s → 0.8s", time: "2h ago" },
      { status: "running", text: "Running technical audit...", time: "Now" },
    ],
  },
  Content: {
    color: "#8b5cf6",
    metrics: [
      { value: "24", label: "Published", trend: "up", percent: "+6" },
      { value: "8.7K", label: "Engagement", trend: "up", percent: "34%" },
      { value: "342", label: "Shares", trend: "up", percent: "21%" },
      { value: "$18K", label: "Pipeline", trend: "up", percent: "28%" },
    ],
    bars: [30, 45, 50, 65, 55, 70, 60],
    feed: [
      { status: "done", text: "Blog post scheduled: '5 Ways to...'", time: "12m ago" },
      { status: "done", text: "3 social creatives generated", time: "1h ago" },
      { status: "done", text: "Email newsletter sent — 42% open rate", time: "3h ago" },
      { status: "running", text: "Generating weekly report...", time: "Now" },
    ],
  },
  Social: {
    color: "#f43f5e",
    metrics: [
      { value: "5.2K", label: "Followers", trend: "up", percent: "+340" },
      { value: "4.8%", label: "Engagement", trend: "up", percent: "+0.6%" },
      { value: "18", label: "Posts", trend: "up", percent: "+2" },
      { value: "24K", label: "Reach", trend: "up", percent: "42%" },
    ],
    bars: [50, 55, 45, 70, 65, 80, 75],
    feed: [
      { status: "done", text: "Posted to Instagram, Facebook, LinkedIn", time: "15m ago" },
      { status: "done", text: "Responded to 4 reviews", time: "1h ago" },
      { status: "done", text: "Engagement up 23% this week", time: "3h ago" },
      { status: "running", text: "Scheduling next week's content...", time: "Now" },
    ],
  },
  Leads: {
    color: "#f59e0b",
    metrics: [
      { value: "47", label: "New Leads", trend: "up", percent: "18%" },
      { value: "23", label: "Qualified", trend: "up", percent: "12%" },
      { value: "$32K", label: "Pipeline", trend: "up", percent: "24%" },
      { value: "2m", label: "Response", trend: "down", percent: "40%", good: true },
    ],
    bars: [35, 50, 45, 65, 60, 75, 70],
    feed: [
      { status: "done", text: "New lead: John M. — followed up in 2min", time: "4m ago" },
      { status: "done", text: "3 leads moved to qualified", time: "15m ago" },
      { status: "done", text: "Pipeline value: $32,400", time: "30m ago" },
      { status: "running", text: "Nurturing 8 warm prospects...", time: "Now" },
    ],
  },
};

const TABS = Object.keys(DATA);

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5s, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const tabKey = TABS[activeTab] ?? TABS[0]!;
  const { metrics, bars, feed, color } = DATA[tabKey]!;

  return (
    <motion.div
      className="relative z-10 mx-auto mt-16 w-full max-w-4xl px-4 text-left"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Browser chrome frame */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-2xl">
        {/* Chrome top bar */}
        <div className="flex items-center gap-3 px-4 py-2.5">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          {/* Address bar */}
          <div className="flex flex-1 justify-center">
            <div className="rounded-md border border-gray-200 bg-white/90 px-6 py-1 text-xs text-gray-400">
              app.solaraai.com
            </div>
          </div>
          {/* Spacer to balance the traffic lights */}
          <div className="w-[54px]" />
        </div>

        {/* Dashboard */}
        <div className="bg-white">
          {/* Tab navigation */}
          <div className="flex border-b border-gray-100 px-4 sm:px-5">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "px-2.5 py-2.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm",
                  i === activeTab
                    ? "border-b-2 border-black text-black"
                    : "text-gray-400 hover:text-gray-600"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Animated tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tabKey}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-3 p-4 sm:space-y-4 sm:p-6"
            >
              {/* Metrics grid: 2 cols on mobile, 4 on sm+ */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                {metrics.map((m) => {
                  const isGreen = m.good ?? m.trend === "up";
                  return (
                    <div key={m.label} className="rounded-lg bg-gray-50 p-2.5 sm:p-3">
                      <div className="mb-1 text-[0.58rem] font-medium uppercase tracking-wider text-gray-400 sm:text-[0.63rem]">
                        {m.label}
                      </div>
                      <div className="text-base font-semibold text-gray-900 sm:text-xl">
                        {m.value}
                      </div>
                      <div
                        className={cn(
                          "mt-0.5 flex items-center gap-0.5 text-[0.7rem] font-medium sm:text-xs",
                          isGreen ? "text-emerald-600" : "text-red-500"
                        )}
                      >
                        {m.trend === "up" ? "↑" : "↓"} {m.percent}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bar chart — pure CSS div bars, no library */}
              <div className="rounded-lg bg-gray-50 p-3 sm:p-4">
                <div className="mb-2 text-[0.58rem] font-medium uppercase tracking-wider text-gray-400 sm:text-[0.63rem]">
                  Weekly Performance
                </div>
                {/* Bars */}
                <div
                  className="flex items-end gap-1 sm:gap-1.5"
                  style={{ height: `${BAR_MAX_PX}px` }}
                >
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${(h / 100) * BAR_MAX_PX}px`,
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </div>
                {/* Day labels */}
                <div className="mt-1.5 flex gap-1 sm:gap-1.5">
                  {DAYS.map((d) => (
                    <div
                      key={d}
                      className="flex-1 text-center text-[0.48rem] text-gray-400 sm:text-[0.55rem]"
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div>
                <div className="mb-2 text-[0.58rem] font-medium uppercase tracking-wider text-gray-400 sm:text-[0.63rem]">
                  Recent Activity
                </div>
                <div className="space-y-0.5">
                  {feed.map((entry, i) => (
                    <div key={i} className="flex items-start gap-2.5 rounded-md px-1 py-1.5 sm:gap-3">
                      {/* Status icon */}
                      {entry.status === "done" ? (
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                          <svg
                            className="h-2.5 w-2.5 text-emerald-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                        </span>
                      )}
                      {/* Text */}
                      <span
                        className={cn(
                          "flex-1 text-xs leading-snug sm:text-sm",
                          entry.status === "running" ? "text-gray-400" : "text-gray-700"
                        )}
                      >
                        {entry.text}
                      </span>
                      {/* Time */}
                      <span className="shrink-0 text-[0.58rem] text-gray-400 sm:text-xs">
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
