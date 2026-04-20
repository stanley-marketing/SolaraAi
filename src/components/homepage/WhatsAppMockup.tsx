"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const WA_BAR_BG = "#F5F5F5";
const WA_CHAT_BG = "#ECE5DD";
const WA_IOS_BLUE = "#0A7CFF";
const WA_ONLINE_GREEN = "#0FA75C";
const WA_META = "#8E8E93";
const WA_TEXT = "#111111";
const WA_INCOMING_BG = "#FFFFFF";
const WA_OUTGOING_BG = "#D9FDD3";
const WA_TIMESTAMP = "#8696A0";
const WA_READ_BLUE = "#53BDEB";

// Override the website's body font here so the chat content renders in iOS
// system font (SF Pro on Apple, Helvetica Neue elsewhere) for visual authenticity.
const IOS_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

export type Message =
  | {
      id: string;
      direction: "incoming" | "outgoing";
      kind?: "text";
      text: string;
      time: string;
      /** Override read-receipt visibility for outgoing messages. Default true */
      read?: boolean;
    }
  | {
      id: string;
      direction: "incoming" | "outgoing";
      kind: "post-preview";
      /** Caption shown beneath the post mockup, inside the same bubble */
      caption: string;
      /** Preview card title text */
      postTitle: string;
      /** Optional handle/byline rendered at the bottom of the preview card */
      postHandle?: string;
      time: string;
    }
  | {
      id: string;
      kind: "day-separator";
      label: string;
    };

type WhatsAppMockupProps = {
  /** Device width in pixels. Height is derived (~2.05x). Default 280 */
  phoneWidth?: number;
  /** Conversation to render. Each item is one bubble */
  script: Message[];
  /** Time shown in the iOS status bar. Default "9:41" */
  statusTime?: string;
  /** Battery percentage (0–100). Default 87 */
  batteryPercent?: number;
  /** Animate bubbles on mount (subtle stagger fade-up). Default true */
  animateOnMount?: boolean;
  /** Extra wrapper className */
  className?: string;
};

type IconProps = { size: number; color?: string };

function IconChevronLeft({ size, color = WA_IOS_BLUE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
}

function IconVideoCall({ size, color = WA_IOS_BLUE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M22 7l-6 5 6 5V7z" />
    </svg>
  );
}

function IconPhoneCall({ size, color = WA_IOS_BLUE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 9.5a16 16 0 0 0 6 6l1.17-1.17a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconPlus({ size, color = WA_TEXT }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconCamera({ size, color = WA_TEXT }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function IconMic({ size, color = WA_TEXT }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

function IconDoubleCheck({ size, color = WA_READ_BLUE }: IconProps) {
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 18 12" fill="none" stroke={color}
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="1 6 5 10 12 2" />
      <polyline points="6 10 7 9" />
      <polyline points="8 6 12 10 17 2" />
    </svg>
  );
}

function SignalBars({ size, color = WA_TEXT }: IconProps) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 18 12" fill={color} aria-hidden>
      <rect x="0" y="8.5" width="3" height="3.5" rx="0.6" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="0.6" />
      <rect x="10" y="2.5" width="3" height="9.5" rx="0.6" />
      <rect x="15" y="0" width="3" height="12" rx="0.6" />
    </svg>
  );
}

function WifiIcon({ size, color = WA_TEXT }: IconProps) {
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 16 12" fill={color} aria-hidden>
      <path d="M8 0C5 0 2.3 1.1 0.3 3 L2.1 4.8 C3.7 3.3 5.7 2.5 8 2.5 S12.3 3.3 13.9 4.8 L15.7 3 C13.7 1.1 11 0 8 0Z" />
      <path d="M8 4.5C6.2 4.5 4.5 5.2 3.3 6.4 L5.1 8.1 C5.9 7.4 6.9 7 8 7 S10.1 7.4 10.9 8.1 L12.7 6.4 C11.5 5.2 9.8 4.5 8 4.5Z" />
      <circle cx="8" cy="10.2" r="1.5" />
    </svg>
  );
}

function BatteryIcon({ percent, size, color = WA_TEXT }: { percent: number; size: number; color?: string }) {
  const bodyWidth = size * 2;
  const bodyHeight = size;
  const radius = size * 0.25;
  const nubHeight = size * 0.4;
  const nubWidth = size * 0.12;
  const padding = size * 0.12;
  const fillWidth = Math.max(0, Math.min(100, percent));
  return (
    <div className="inline-flex items-center" style={{ color }}>
      <div
        className="relative flex items-center"
        style={{
          width: bodyWidth,
          height: bodyHeight,
          borderRadius: radius,
          border: `1px solid ${color}`,
          padding,
        }}
      >
        <div style={{ height: "100%", width: `${fillWidth}%`, backgroundColor: color, borderRadius: radius * 0.5 }} />
      </div>
      <div
        style={{
          width: nubWidth,
          height: nubHeight,
          marginLeft: 1,
          backgroundColor: color,
          borderTopRightRadius: nubWidth,
          borderBottomRightRadius: nubWidth,
        }}
      />
    </div>
  );
}

function SolaraAvatar({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="120 40 175 175" xmlns="http://www.w3.org/2000/svg" aria-label="Solara">
      <rect x="120" y="40" width="175" height="175" rx="87.5" fill="#111111" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M217.165 49.7852C254.13 49.7852 284.097 79.7534 284.097 116.72C284.097 126.194 282.127 135.207 278.576 143.375L278.587 143.378C278.567 143.423 274.499 152.616 268.897 163.14C257.183 187.05 232.609 203.514 204.189 203.514C164.415 203.514 132.17 171.268 132.17 131.491C132.17 108.119 143.302 87.3481 160.553 74.1905C160.551 74.1864 160.549 74.1823 160.546 74.1782C160.703 74.0651 160.86 73.9534 161.016 73.841C162.068 73.0513 163.143 72.2896 164.239 71.5572C169.166 68.1228 173.896 65.063 177.509 62.7941C188.608 54.6175 202.322 49.7852 217.165 49.7852ZM204.189 59.4694C197.736 59.4694 191.48 60.3194 185.528 61.9118L185.53 61.9178C174.079 65.9873 171.539 66.4951 162.997 77.3968C154.969 88.4368 150.234 102.025 150.234 116.72C150.234 153.687 180.2 183.654 217.165 183.655C238.246 183.655 257.048 173.906 269.317 158.673C272.704 154.087 273.391 150.457 275.264 142.373L275.385 142.409C275.926 138.848 276.208 135.203 276.208 131.491C276.208 91.7147 243.964 59.4695 204.189 59.4694Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function StatusBar({ phoneWidth, time, batteryPercent }: { phoneWidth: number; time: string; batteryPercent: number }) {
  const scale = phoneWidth / 240;
  const islandHeight = Math.round(phoneWidth * 0.09);
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
        color: WA_TEXT,
      }}
    >
      <div className="font-semibold tabular-nums" style={{ fontSize: timeFontSize, fontFamily: IOS_FONT }}>
        {time}
      </div>
      <div className="flex items-center" style={{ gap: 5 * scale }}>
        <SignalBars size={iconSize} />
        <WifiIcon size={iconSize} />
        <div className="flex items-center tabular-nums" style={{ gap: 3 * scale }}>
          <span className="font-medium" style={{ fontSize: batteryPercentFontSize, fontFamily: IOS_FONT }}>
            {batteryPercent}
          </span>
          <BatteryIcon percent={batteryPercent} size={iconSize} />
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ width, children }: { width: number; children: ReactNode }) {
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

      <div className="relative h-full w-full overflow-hidden" style={{ borderRadius: screenRadius, backgroundColor: "#ffffff" }}>
        {children}
        <DynamicIsland top={islandTop} width={islandWidth} height={islandHeight} />
        <HomeIndicator bottom={homeIndicatorBottom} width={homeIndicatorWidth} height={homeIndicatorHeight} />
      </div>
    </div>
  );
}

function SideButton({ position, topPct, height }: { position: "left" | "right"; topPct: number; height: number }) {
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

function WhatsAppHeader({ phoneWidth }: { phoneWidth: number }) {
  const scale = phoneWidth / 240;
  const height = 36 * scale;
  const paddingH = 10 * scale;
  const avatarSize = 22 * scale;
  const iconSize = 17 * scale;
  const chevronSize = 18 * scale;
  const nameSize = 12.5 * scale;
  const metaSize = 9 * scale;

  return (
    <div className="flex shrink-0 items-center justify-between" style={{ height, paddingLeft: paddingH, paddingRight: paddingH }}>
      <div className="flex min-w-0 items-center" style={{ gap: 4 * scale }}>
        <IconChevronLeft size={chevronSize} />
        <div className="shrink-0 overflow-hidden rounded-full" style={{ width: avatarSize, height: avatarSize, marginLeft: 2 * scale }}>
          <SolaraAvatar size={avatarSize} />
        </div>
        <div className="flex min-w-0 flex-col justify-center" style={{ marginLeft: 6 * scale }}>
          <span className="truncate font-semibold" style={{ fontSize: nameSize, color: WA_TEXT, lineHeight: 1.1, fontFamily: IOS_FONT }}>
            Solara
          </span>
          <span style={{ fontSize: metaSize, color: WA_ONLINE_GREEN, lineHeight: 1.2, fontFamily: IOS_FONT }}>
            online
          </span>
        </div>
      </div>
      <div className="flex shrink-0 items-center" style={{ gap: 10 * scale }}>
        <IconVideoCall size={iconSize} />
        <IconPhoneCall size={iconSize} />
      </div>
    </div>
  );
}

function WhatsAppInputBar({ phoneWidth }: { phoneWidth: number }) {
  const scale = phoneWidth / 240;
  const height = 40 * scale;
  const paddingH = 8 * scale;
  const gap = 7 * scale;
  const plusSize = 20 * scale;
  const iconSize = 18 * scale;
  const placeholderSize = 11.5 * scale;
  const inputHeight = 26 * scale;
  const inputPaddingX = 10 * scale;

  return (
    <div className="flex shrink-0 items-center" style={{ height, paddingLeft: paddingH, paddingRight: paddingH, gap }}>
      <div className="shrink-0">
        <IconPlus size={plusSize} />
      </div>
      <div
        className="flex min-w-0 flex-1 items-center"
        style={{
          height: inputHeight,
          borderRadius: inputHeight / 2,
          backgroundColor: "#FFFFFF",
          paddingLeft: inputPaddingX,
          paddingRight: inputPaddingX,
        }}
      >
        <span className="flex-1 truncate" style={{ fontSize: placeholderSize, color: WA_META, fontFamily: IOS_FONT }}>
          Message
        </span>
      </div>
      <div className="flex shrink-0 items-center" style={{ gap: 8 * scale }}>
        <IconCamera size={iconSize} />
        <IconMic size={iconSize} />
      </div>
    </div>
  );
}

type BubbleAuthor = "incoming" | "outgoing";

function MessageBubble({
  phoneWidth,
  direction,
  text,
  time,
  tail = true,
  read = true,
}: {
  phoneWidth: number;
  direction: BubbleAuthor;
  text: string;
  time: string;
  tail?: boolean;
  read?: boolean;
}) {
  const scale = phoneWidth / 240;
  const isUser = direction === "outgoing";
  const maxWidth = phoneWidth * 0.78;
  const textSize = 11.5 * scale;
  const timeSize = 8.5 * scale;
  const paddingX = 8 * scale;
  const paddingY = 5 * scale;
  const radius = 7 * scale;
  const tailSize = 7 * scale;
  const bubbleColor = isUser ? WA_OUTGOING_BG : WA_INCOMING_BG;

  return (
    <div
      className="relative flex w-full"
      style={{
        justifyContent: isUser ? "flex-end" : "flex-start",
        paddingLeft: isUser ? 0 : tailSize,
        paddingRight: isUser ? tailSize : 0,
      }}
    >
      {tail && (
        <span
          aria-hidden
          className="absolute top-0"
          style={{
            [isUser ? "right" : "left"]: 0.5,
            width: tailSize,
            height: tailSize,
            backgroundColor: bubbleColor,
            clipPath: isUser ? "polygon(0 0, 100% 0, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%)",
          }}
        />
      )}
      <div
        className="relative"
        style={{
          maxWidth,
          backgroundColor: bubbleColor,
          borderTopLeftRadius: tail && !isUser ? 0 : radius,
          borderTopRightRadius: tail && isUser ? 0 : radius,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
        }}
      >
        <div
          style={{
            fontSize: textSize,
            color: WA_TEXT,
            lineHeight: 1.35,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontFamily: IOS_FONT,
          }}
        >
          {text}
          <span aria-hidden style={{ display: "inline-block", width: (isUser ? 44 : 28) * scale }} />
        </div>
        <div
          className="absolute flex items-center"
          style={{ right: paddingX, bottom: paddingY - 1 * scale, gap: 3 * scale }}
        >
          <span style={{ fontSize: timeSize, color: WA_TIMESTAMP, lineHeight: 1, fontFamily: IOS_FONT }}>{time}</span>
          {isUser && read && <IconDoubleCheck size={8 * scale} />}
        </div>
      </div>
    </div>
  );
}

function PostPreviewCard({
  phoneWidth,
  postTitle,
  postHandle = "@solara",
}: {
  phoneWidth: number;
  postTitle: string;
  postHandle?: string;
}) {
  const scale = phoneWidth / 240;
  const cardWidth = phoneWidth * 0.42;
  const cardHeight = cardWidth * 1.15;
  const titleSize = 7 * scale;
  return (
    <div
      className="relative flex flex-col items-center"
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        backgroundColor: "#EFEAE1",
        paddingTop: 14 * scale,
        paddingBottom: 8 * scale,
      }}
    >
      <div
        className="flex flex-col"
        style={{
          width: cardWidth,
          height: cardHeight,
          backgroundColor: "#111111",
          borderRadius: 4 * scale,
          padding: 7 * scale,
          boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
          gap: 4 * scale,
        }}
      >
        <div className="flex items-center" style={{ gap: 3 * scale }}>
          <div style={{ width: 6 * scale, height: 6 * scale, borderRadius: "50%", backgroundColor: "#FFFFFF", opacity: 0.9 }} />
          <span style={{ fontSize: 4.5 * scale, color: "#9CA3AF", letterSpacing: "0.02em", fontFamily: IOS_FONT }}>
            social post preview
          </span>
        </div>
        <div
          style={{
            fontSize: titleSize,
            color: "#FFFFFF",
            lineHeight: 1.25,
            fontWeight: 500,
            marginTop: 2 * scale,
            fontFamily: IOS_FONT,
          }}
        >
          {postTitle}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ height: 1, width: "38%", backgroundColor: "#4B5563" }} />
        <span style={{ fontSize: 5 * scale, color: "#9CA3AF", fontFamily: IOS_FONT }}>{postHandle}</span>
      </div>
      <div className="flex flex-1 items-end" style={{ paddingTop: 6 * scale }}>
        <span style={{ fontSize: 5.5 * scale, color: "#6B7280", letterSpacing: "0.02em", fontFamily: IOS_FONT }}>
          tap to preview
        </span>
      </div>
    </div>
  );
}

function ImageMessageBubble({
  phoneWidth,
  caption,
  time,
  postTitle,
  postHandle,
  tail = true,
}: {
  phoneWidth: number;
  caption: string;
  time: string;
  postTitle: string;
  postHandle?: string;
  tail?: boolean;
}) {
  const scale = phoneWidth / 240;
  const maxWidth = phoneWidth * 0.78;
  const textSize = 11.5 * scale;
  const timeSize = 8.5 * scale;
  const captionPaddingX = 8 * scale;
  const captionPaddingY = 6 * scale;
  const radius = 7 * scale;
  const tailSize = 6 * scale;

  return (
    <div className="relative flex w-full" style={{ paddingLeft: tailSize, maxWidth: "100%" }}>
      {tail && (
        <span
          aria-hidden
          className="absolute top-0"
          style={{
            left: 0.5,
            width: tailSize,
            height: tailSize,
            backgroundColor: WA_INCOMING_BG,
            clipPath: "polygon(0 0, 100% 0, 100% 100%)",
          }}
        />
      )}
      <div
        className="relative"
        style={{
          maxWidth,
          backgroundColor: WA_INCOMING_BG,
          borderTopLeftRadius: tail ? 0 : radius,
          borderTopRightRadius: radius,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          overflow: "hidden",
          boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
        }}
      >
        <PostPreviewCard phoneWidth={phoneWidth} postTitle={postTitle} postHandle={postHandle} />
        <div
          className="relative"
          style={{
            paddingLeft: captionPaddingX,
            paddingRight: captionPaddingX,
            paddingTop: captionPaddingY,
            paddingBottom: captionPaddingY,
          }}
        >
          <div style={{ fontSize: textSize, color: WA_TEXT, lineHeight: 1.35, fontFamily: IOS_FONT }}>
            {caption}
            <span aria-hidden style={{ display: "inline-block", width: 28 * scale }} />
          </div>
          <div className="absolute flex items-center" style={{ right: captionPaddingX, bottom: captionPaddingY - 1 * scale }}>
            <span style={{ fontSize: timeSize, color: WA_TIMESTAMP, lineHeight: 1, fontFamily: IOS_FONT }}>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DaySeparator({ phoneWidth, label }: { phoneWidth: number; label: string }) {
  const scale = phoneWidth / 240;
  return (
    <div
      role="separator"
      aria-label={label}
      className="flex justify-center"
      style={{ paddingTop: 10 * scale, paddingBottom: 10 * scale }}
    >
      <div
        style={{
          backgroundColor: "rgba(225, 231, 238, 0.9)",
          borderRadius: 10 * scale,
          paddingTop: 3 * scale,
          paddingBottom: 3 * scale,
          paddingLeft: 10 * scale,
          paddingRight: 10 * scale,
          fontSize: 10 * scale,
          color: "#667781",
          fontFamily: IOS_FONT,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          lineHeight: 1.2,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function WhatsAppThread({
  phoneWidth,
  script,
  animateOnMount,
}: {
  phoneWidth: number;
  script: Message[];
  animateOnMount: boolean;
}) {
  const scale = phoneWidth / 240;
  const gap = 4 * scale;
  const groupGap = 8 * scale;
  const paddingX = 6 * scale;
  const paddingY = 8 * scale;

  return (
    <div
      className="flex h-full w-full flex-col overflow-y-auto"
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        gap,
        scrollbarWidth: "none",
      }}
    >
      {script.map((m, i) => {
        if (m.kind === "day-separator") {
          const sep = <DaySeparator phoneWidth={phoneWidth} label={m.label} />;
          if (!animateOnMount) {
            return <div key={`row-${m.id}`}>{sep}</div>;
          }
          return (
            <motion.div
              key={`row-${m.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {sep}
            </motion.div>
          );
        }

        const prev = script[i - 1];
        const prevDirection =
          prev !== undefined && prev.kind !== "day-separator" ? prev.direction : undefined;
        const sameGroup = prevDirection === m.direction;
        const tail = !sameGroup;
        const groupSpacer =
          i > 0 && !sameGroup && prev?.kind !== "day-separator" ? (
            <div key={`spacer-${m.id}`} style={{ height: groupGap - gap }} />
          ) : null;

        const bubble =
          m.kind === "post-preview" ? (
            <ImageMessageBubble
              key={m.id}
              phoneWidth={phoneWidth}
              caption={m.caption}
              time={m.time}
              postTitle={m.postTitle}
              postHandle={m.postHandle}
              tail={tail}
            />
          ) : (
            <MessageBubble
              key={m.id}
              phoneWidth={phoneWidth}
              direction={m.direction}
              text={m.text}
              time={m.time}
              tail={tail}
              read={m.read}
            />
          );

        if (!animateOnMount) {
          return (
            <div key={`row-${m.id}`}>
              {groupSpacer}
              {bubble}
            </div>
          );
        }

        return (
          <motion.div
            key={`row-${m.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {groupSpacer}
            {bubble}
          </motion.div>
        );
      })}
    </div>
  );
}

export function WhatsAppMockup({
  phoneWidth = 280,
  script,
  statusTime = "9:41",
  batteryPercent = 87,
  animateOnMount = true,
  className,
}: WhatsAppMockupProps) {
  const scale = phoneWidth / 240;
  const statusBarPad = Math.round(phoneWidth * 0.09) + Math.round(20 * scale);
  const homeIndicatorPad = Math.round(22 * scale);

  return (
    <div className={className}>
      <PhoneFrame width={phoneWidth}>
        <StatusBar phoneWidth={phoneWidth} time={statusTime} batteryPercent={batteryPercent} />
        <div className="flex h-full w-full flex-col">
          <div className="shrink-0" style={{ backgroundColor: WA_BAR_BG, paddingTop: statusBarPad }}>
            <WhatsAppHeader phoneWidth={phoneWidth} />
          </div>
          <div
            className="min-h-0 flex-1 overflow-hidden"
            style={{
              backgroundColor: WA_CHAT_BG,
              backgroundImage: "url(/images/whatsapp-doodle.webp)",
              backgroundSize: "140% 140%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
            }}
          >
            <WhatsAppThread phoneWidth={phoneWidth} script={script} animateOnMount={animateOnMount} />
          </div>
          <div className="shrink-0" style={{ backgroundColor: WA_BAR_BG, paddingBottom: homeIndicatorPad }}>
            <WhatsAppInputBar phoneWidth={phoneWidth} />
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

// HERO_SCRIPT demonstrates the entire "5 minutes a day" promise from the site
// copy in 4 bubbles: request → user action → preview → approval. Each bubble
// is intentionally chosen to map to the new positioning.
const HERO_SCRIPT: Message[] = [
  {
    id: "1",
    direction: "incoming",
    text: "Morning! \u2615 Need 5 seconds today \u2014 film your espresso machine while it's running",
    time: "9:02",
  },
  {
    id: "2",
    direction: "outgoing",
    text: "Done \uD83C\uDFA5",
    time: "9:14",
  },
  {
    id: "3",
    direction: "incoming",
    kind: "post-preview",
    caption: "Edited! Approve to post at 6 PM today?",
    postTitle: "How we pull every espresso \u2014 48hr cold brew, single origin, 25 sec extraction",
    postHandle: "@your_cafe",
    time: "10:31",
  },
  {
    id: "4",
    direction: "outgoing",
    text: "Send it \u2705",
    time: "10:32",
  },
];

export function WhatsAppHeroMockup(
  props: Omit<WhatsAppMockupProps, "script"> & { script?: Message[] },
) {
  const { script = HERO_SCRIPT, ...rest } = props;
  return <WhatsAppMockup {...rest} script={script} />;
}
