import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  width?: number;
  children?: ReactNode;
  statusBar?: boolean;
  showTime?: boolean;
  showSignal?: boolean;
  showWifi?: boolean;
  showBattery?: boolean;
  time?: string;
  batteryPercent?: number;
  homeIndicator?: boolean;
  dynamicIsland?: boolean;
  screenClassName?: string;
  className?: string;
};

function SignalBars({ size }: { size: number }) {
  const height = size;
  const width = size * 1.5;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 12"
      fill="currentColor"
      aria-hidden="true"
    >
      <title>Signal</title>
      <rect x="0" y="8.5" width="3" height="3.5" rx="0.6" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="0.6" />
      <rect x="10" y="2.5" width="3" height="9.5" rx="0.6" />
      <rect x="15" y="0" width="3" height="12" rx="0.6" />
    </svg>
  );
}

function WifiIcon({ size }: { size: number }) {
  const height = size;
  const width = size * 1.4;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="currentColor"
      aria-hidden="true"
    >
      <title>Wi-Fi</title>
      <path d="M8 0C5 0 2.3 1.1 0.3 3 L2.1 4.8 C3.7 3.3 5.7 2.5 8 2.5 S12.3 3.3 13.9 4.8 L15.7 3 C13.7 1.1 11 0 8 0Z" />
      <path d="M8 4.5C6.2 4.5 4.5 5.2 3.3 6.4 L5.1 8.1 C5.9 7.4 6.9 7 8 7 S10.1 7.4 10.9 8.1 L12.7 6.4 C11.5 5.2 9.8 4.5 8 4.5Z" />
      <circle cx="8" cy="10.2" r="1.5" />
    </svg>
  );
}

function BatteryIcon({ percent, size }: { percent: number; size: number }) {
  const bodyWidth = size * 2;
  const bodyHeight = size;
  const radius = size * 0.25;
  const nubHeight = size * 0.4;
  const nubWidth = size * 0.12;
  const padding = size * 0.12;
  const fillWidth = Math.max(0, Math.min(100, percent));

  return (
    <div
      role="img"
      aria-label={`Battery ${percent}%`}
      className="inline-flex items-center"
    >
      <div
        className="relative flex items-center"
        style={{
          width: bodyWidth,
          height: bodyHeight,
          borderRadius: radius,
          border: "1px solid currentColor",
          padding,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${fillWidth}%`,
            backgroundColor: "currentColor",
            borderRadius: radius * 0.5,
          }}
        />
      </div>
      <div
        style={{
          width: nubWidth,
          height: nubHeight,
          marginLeft: 1,
          backgroundColor: "currentColor",
          borderTopRightRadius: nubWidth,
          borderBottomRightRadius: nubWidth,
        }}
      />
    </div>
  );
}

type StatusBarProps = {
  width: number;
  islandHeight: number;
  time: string;
  showTime: boolean;
  showSignal: boolean;
  showWifi: boolean;
  showBattery: boolean;
  batteryPercent: number;
};

function StatusBar({
  width,
  islandHeight,
  time,
  showTime,
  showSignal,
  showWifi,
  showBattery,
  batteryPercent,
}: StatusBarProps) {
  const scale = width / 240;
  const barHeight = islandHeight + 20 * scale;
  const sidePadding = 16 * scale;
  const timeFontSize = 14 * scale;
  const iconSize = 10 * scale;
  const batteryPercentFontSize = 9 * scale;

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between"
      style={{
        height: barHeight,
        paddingLeft: sidePadding,
        paddingRight: sidePadding,
        color: "#0a0a0a",
      }}
    >
      <div
        className="font-semibold tabular-nums"
        style={{
          fontSize: timeFontSize,
          visibility: showTime ? "visible" : "hidden",
        }}
      >
        {time}
      </div>

      <div
        className="flex items-center"
        style={{ gap: 5 * scale }}
      >
        {showSignal && <SignalBars size={iconSize} />}
        {showWifi && <WifiIcon size={iconSize} />}
        {showBattery && (
          <div
            className="flex items-center tabular-nums"
            style={{ gap: 3 * scale }}
          >
            <span
              className="font-medium"
              style={{ fontSize: batteryPercentFontSize }}
            >
              {batteryPercent}
            </span>
            <BatteryIcon percent={batteryPercent} size={iconSize} />
          </div>
        )}
      </div>
    </div>
  );
}

export function PhoneMockup({
  width = 240,
  children,
  statusBar = true,
  showTime = true,
  showSignal = false,
  showWifi = false,
  showBattery = true,
  time = "9:41",
  batteryPercent = 87,
  homeIndicator = true,
  dynamicIsland = true,
  screenClassName,
  className,
}: PhoneMockupProps) {
  const height = Math.round(width * 2.05);
  const frameRadius = Math.round(width * 0.13);
  const frameInset = Math.round(width * 0.035);
  const screenRadius = frameRadius - frameInset;
  const islandWidth = Math.round(width * 0.33);
  const islandHeight = Math.round(width * 0.09);
  const islandTop = Math.round(width * 0.035);
  const homeIndicatorWidth = Math.round(width * 0.4);
  const homeIndicatorHeight = Math.max(3, Math.round(width * 0.018));
  const homeIndicatorBottom = Math.round(width * 0.028);

  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{
        width,
        height,
        borderRadius: frameRadius,
        padding: frameInset,
        backgroundColor: "#0a0a0a",
        boxShadow:
          "0 30px 60px -20px rgba(10,10,10,0.35), 0 18px 36px -18px rgba(10,10,10,0.25)",
      }}
    >
      <span
        aria-hidden
        className="absolute left-[-2px] top-[18%] h-8 w-[3px] rounded-l-sm"
        style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
      />
      <span
        aria-hidden
        className="absolute left-[-2px] top-[30%] h-12 w-[3px] rounded-l-sm"
        style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
      />
      <span
        aria-hidden
        className="absolute right-[-2px] top-[26%] h-14 w-[3px] rounded-r-sm"
        style={{ backgroundColor: "rgba(10,10,10,0.7)" }}
      />

      <div
        className={cn("relative h-full w-full overflow-hidden", screenClassName)}
        style={{
          borderRadius: screenRadius,
          backgroundColor: "#ffffff",
        }}
      >
        {statusBar && (
          <StatusBar
            width={width}
            islandHeight={islandHeight}
            time={time}
            showTime={showTime}
            showSignal={showSignal}
            showWifi={showWifi}
            showBattery={showBattery}
            batteryPercent={batteryPercent}
          />
        )}

        {dynamicIsland && (
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full"
            style={{
              top: islandTop,
              width: islandWidth,
              height: islandHeight,
              backgroundColor: "#0a0a0a",
            }}
          />
        )}

        <div className="relative z-10 h-full w-full">{children}</div>

        {homeIndicator && (
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full"
            style={{
              bottom: homeIndicatorBottom,
              width: homeIndicatorWidth,
              height: homeIndicatorHeight,
              backgroundColor: "#0a0a0a",
            }}
          />
        )}
      </div>
    </div>
  );
}

export type { PhoneMockupProps };
