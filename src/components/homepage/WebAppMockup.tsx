"use client";

import type { ReactNode } from "react";
import { ChevronLeft, X } from "lucide-react";

const IOS_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

function SignalBars({ size }: { size: number }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 18 12" fill="#111111" aria-hidden>
      <rect x="0" y="8.5" width="3" height="3.5" rx="0.6" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="0.6" />
      <rect x="10" y="2.5" width="3" height="9.5" rx="0.6" />
      <rect x="15" y="0" width="3" height="12" rx="0.6" />
    </svg>
  );
}

function WifiIcon({ size }: { size: number }) {
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 16 12" fill="#111111" aria-hidden>
      <path d="M8 0C5 0 2.3 1.1 0.3 3L2.1 4.8C3.7 3.3 5.7 2.5 8 2.5S12.3 3.3 13.9 4.8L15.7 3C13.7 1.1 11 0 8 0Z" />
      <path d="M8 4.5C6.2 4.5 4.5 5.2 3.3 6.4L5.1 8.1C5.9 7.4 6.9 7 8 7S10.1 7.4 10.9 8.1L12.7 6.4C11.5 5.2 9.8 4.5 8 4.5Z" />
      <circle cx="8" cy="10.2" r="1.5" />
    </svg>
  );
}

function BatteryIcon({ percent, size }: { percent: number; size: number }) {
  const bw = size * 2;
  const bh = size;
  const r = size * 0.25;
  const pad = size * 0.12;
  const nubW = size * 0.12;
  const nubH = size * 0.4;
  const fill = Math.max(0, Math.min(100, percent));
  return (
    <div className="inline-flex items-center" style={{ color: "#111111" }}>
      <div
        className="relative flex items-center"
        style={{ width: bw, height: bh, borderRadius: r, border: "1px solid #111111", padding: pad }}
      >
        <div
          style={{ height: "100%", width: `${fill}%`, backgroundColor: "#111111", borderRadius: r * 0.5 }}
        />
      </div>
      <div
        style={{
          width: nubW,
          height: nubH,
          marginLeft: 1,
          backgroundColor: "#111111",
          borderTopRightRadius: nubW,
          borderBottomRightRadius: nubW,
        }}
      />
    </div>
  );
}

function SideButton({
  position,
  topPct,
  height,
}: {
  position: "left" | "right";
  topPct: number;
  height: number;
}) {
  return (
    <span
      aria-hidden
      className="absolute"
      style={{
        [position]: -2,
        top: `${topPct}%`,
        height,
        width: 3,
        borderRadius: position === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
        backgroundColor: "rgba(17,17,17,0.7)",
      }}
    />
  );
}

function DynamicIsland({ top, width, height }: { top: number; width: number; height: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full"
      style={{ top, width, height, backgroundColor: "#111111" }}
    />
  );
}

function HomeIndicator({ bottom, width, height }: { bottom: number; width: number; height: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full"
      style={{ bottom, width, height, backgroundColor: "#111111" }}
    />
  );
}

export function PhoneFrame({ width, children }: { width: number; children: ReactNode }) {
  const height = Math.round(width * 2.05);
  const frameRadius = Math.round(width * 0.13);
  const frameInset = Math.round(width * 0.035);
  const screenRadius = frameRadius - frameInset;
  const islandWidth = Math.round(width * 0.33);
  const islandHeight = Math.round(width * 0.09);
  const islandTop = Math.round(width * 0.035);
  const hiWidth = Math.round(width * 0.4);
  const hiHeight = Math.max(3, Math.round(width * 0.018));
  const hiBottom = Math.round(width * 0.028);

  return (
    <div
      className="relative shrink-0"
      style={{
        width,
        height,
        borderRadius: frameRadius,
        padding: frameInset,
        backgroundColor: "#111111",
        boxShadow:
          "0 30px 60px -20px rgba(17,17,17,0.35), 0 18px 36px -18px rgba(17,17,17,0.25)",
      }}
    >
      <SideButton position="left" topPct={18} height={32} />
      <SideButton position="left" topPct={30} height={48} />
      <SideButton position="right" topPct={26} height={56} />
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ borderRadius: screenRadius, backgroundColor: "#ffffff" }}
      >
        {children}
        <DynamicIsland top={islandTop} width={islandWidth} height={islandHeight} />
        <HomeIndicator bottom={hiBottom} width={hiWidth} height={hiHeight} />
      </div>
    </div>
  );
}

function StatusBar({
  phoneWidth,
  time,
  batteryPercent,
}: {
  phoneWidth: number;
  time: string;
  batteryPercent: number;
}) {
  const scale = phoneWidth / 240;
  const islandHeight = Math.round(phoneWidth * 0.09);
  const barHeight = islandHeight + 20 * scale;
  const sidePad = 16 * scale;
  const timeFz = 14 * scale;
  const iconSz = 10 * scale;
  const pctFz = 9 * scale;

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between"
      style={{ height: barHeight, paddingLeft: sidePad, paddingRight: sidePad, color: "#111111" }}
    >
      <div className="font-semibold tabular-nums" style={{ fontSize: timeFz, fontFamily: IOS_FONT }}>
        {time}
      </div>
      <div className="flex items-center" style={{ gap: 5 * scale }}>
        <SignalBars size={iconSz} />
        <WifiIcon size={iconSz} />
        <div className="flex items-center tabular-nums" style={{ gap: 3 * scale }}>
          <span className="font-medium" style={{ fontSize: pctFz, fontFamily: IOS_FONT }}>
            {batteryPercent}
          </span>
          <BatteryIcon percent={batteryPercent} size={iconSz} />
        </div>
      </div>
    </div>
  );
}

function RecordingScreen({ phoneWidth }: { phoneWidth: number }) {
  const s = phoneWidth / 240;
  const hPad = 16 * s;
  const vPad = 14 * s;

  return (
    <div className="flex h-full w-full flex-col" style={{ backgroundColor: "#ffffff" }}>
      <div
        className="flex shrink-0 items-center justify-between"
        style={{
          height: 48 * s,
          paddingLeft: hPad,
          paddingRight: hPad,
          borderBottom: "1px solid #e5e5e5",
          backgroundColor: "#ffffff",
        }}
      >
        <ChevronLeft size={18 * s} color="#111111" aria-hidden />
        <div className="flex flex-col items-center" style={{ gap: 1 }}>
          <span
            style={{
              fontSize: 10 * s,
              fontWeight: 600,
              color: "#111111",
              lineHeight: 1.2,
              fontFamily: IOS_FONT,
            }}
          >
            Scene 2 of 5
          </span>
          <span
            style={{
              fontSize: 7.5 * s,
              color: "rgba(98,98,98,0.6)",
              lineHeight: 1.2,
              fontFamily: IOS_FONT,
            }}
          >
            Espresso shot
          </span>
        </div>
        <X size={18 * s} color="#111111" aria-hidden />
      </div>

      <div
        className="shrink-0"
        style={{
          margin: `${vPad}px ${hPad}px 0`,
          padding: `${12 * s}px ${14 * s}px`,
          backgroundColor: "#fafafa",
          borderRadius: 10 * s,
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: 7 * s,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "rgba(98,98,98,0.6)",
            fontFamily: IOS_FONT,
            marginBottom: 5 * s,
          }}
        >
          🎬 FILM
        </span>
        <span
          style={{
            display: "block",
            fontSize: 10.5 * s,
            fontWeight: 500,
            color: "#111111",
            lineHeight: 1.45,
            fontFamily: IOS_FONT,
          }}
        >
          Your espresso machine pulling a shot &mdash; get close, show the crema.
        </span>
      </div>

      <div
        className="shrink-0"
        style={{
          margin: `${10 * s}px ${hPad}px 0`,
          padding: `${10 * s}px ${14 * s}px`,
          backgroundColor: "#ffffff",
          border: "1px solid #f0f0f0",
          borderRadius: 10 * s,
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: 6.5 * s,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "rgba(98,98,98,0.6)",
            fontFamily: IOS_FONT,
            marginBottom: 4 * s,
          }}
        >
          SCRIPT
        </span>
        <span
          style={{
            display: "block",
            fontSize: 9 * s,
            color: "rgba(98,98,98,0.9)",
            lineHeight: 1.5,
            fontFamily: IOS_FONT,
          }}
        >
          About 5 seconds. Phone horizontal works best. One take is fine.
        </span>
      </div>

      <div
        className="flex flex-1 flex-col items-center justify-center"
        style={{ gap: 10 * s }}
      >
        <div
          role="img"
          aria-label="Record scene 2 of 5"
          className="flex items-center justify-center rounded-full"
          style={{ width: 72 * s, height: 72 * s, border: "3px solid #e5e5e5" }}
        >
          <div
            className="rounded-full"
            style={{
              width: 58 * s,
              height: 58 * s,
              backgroundColor: "#ef4444",
              boxShadow: "0 4px 16px -4px rgba(239,68,68,0.35)",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 7.5 * s,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "rgba(98,98,98,0.6)",
            fontFamily: IOS_FONT,
          }}
        >
          TAP TO RECORD
        </span>
        <div className="flex items-center" style={{ gap: 5 * s }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: 5 * s,
                height: 5 * s,
                backgroundColor: i === 1 ? "#111111" : "#e3e3e3",
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="flex shrink-0 items-center justify-between"
        style={{
          paddingLeft: hPad,
          paddingRight: hPad,
          paddingBottom: vPad,
          paddingTop: 8 * s,
          backgroundColor: "#fafafa",
        }}
      >
        <span style={{ fontSize: 8 * s, color: "rgba(98,98,98,0.5)", fontFamily: IOS_FONT }}>
          Previous scene
        </span>
        <span style={{ fontSize: 8 * s, color: "rgba(98,98,98,0.5)", fontFamily: IOS_FONT }}>
          Skip
        </span>
      </div>
    </div>
  );
}

export function WebAppMockup({ phoneWidth = 320 }: { phoneWidth?: number }) {
  const scale = phoneWidth / 240;
  const statusBarPad = Math.round(phoneWidth * 0.09) + Math.round(20 * scale);

  return (
    <PhoneFrame width={phoneWidth}>
      <StatusBar phoneWidth={phoneWidth} time="9:03" batteryPercent={84} />
      <div className="flex h-full w-full flex-col" style={{ paddingTop: statusBarPad }}>
        <RecordingScreen phoneWidth={phoneWidth} />
      </div>
    </PhoneFrame>
  );
}
