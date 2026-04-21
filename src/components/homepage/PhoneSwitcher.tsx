"use client";

import {
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type PhoneSwitcherProps = {
  channels: ReadonlyArray<{
    key: string;
    label: string;
    accent: string;
    mockup: ReactNode;
  }>;
  intervalMs?: number;
  pauseOnHover?: boolean;
};

export function PhoneSwitcher({
  channels,
  intervalMs = 6500,
  pauseOnHover = true,
}: PhoneSwitcherProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const labelGroupId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (channels.length <= 1) return;
    if (pauseOnHover && isHovered) return;
    const timer = window.setTimeout(() => {
      setActiveIdx((i) => (i + 1) % channels.length);
    }, intervalMs);
    return () => window.clearTimeout(timer);
  }, [activeIdx, channels.length, intervalMs, isHovered, pauseOnHover]);

  if (channels.length === 0) return null;
  const safeActive = Math.min(activeIdx, channels.length - 1);
  const active = channels[safeActive];
  if (!active) return null;

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div className="relative">
        {channels.map((channel, idx) => {
          const isActive = idx === safeActive;
          return (
            <div
              key={channel.key}
              aria-hidden={!isActive}
              className="transition-opacity duration-700 ease-out motion-reduce:!transition-none"
              style={{
                position: idx === 0 ? "relative" : "absolute",
                inset: idx === 0 ? undefined : 0,
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {channel.mockup}
            </div>
          );
        })}
      </div>

      <div
        className="mt-6 flex items-center gap-3"
        role="tablist"
        aria-label="Switch messaging channel"
      >
        {channels.map((channel, idx) => {
          const isActive = idx === safeActive;
          return (
            <button
              key={channel.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${labelGroupId}-panel-${idx}`}
              onClick={() => setActiveIdx(idx)}
              className="group flex items-center gap-2 rounded-full border bg-white/85 px-3 py-1.5 backdrop-blur transition-all duration-300 ease-out hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2"
              style={{
                borderColor: isActive
                  ? "rgba(17,17,17,0.85)"
                  : "rgba(0,0,0,0.08)",
                boxShadow: isActive
                  ? "0 1px 2px rgba(0,0,0,0.06), 0 6px 12px -4px rgba(0,0,0,0.08)"
                  : "none",
              }}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isActive ? channel.accent : "#cccccc",
                  boxShadow: isActive
                    ? `0 0 0 3px ${channel.accent}22`
                    : undefined,
                }}
              />
              <span
                className="text-[0.72rem] tracking-[0.04em]"
                style={{
                  color: isActive ? "#1c1c1e" : "#8a8a8e",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {channel.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
