"use client";

import { type ReactNode, useEffect, useRef } from "react";
import {
  type ChatDirection,
  type ChatScriptOptions,
  type ChatTurn,
  useScriptedChat,
} from "./WhatsAppMockupScripted";

const IM_BG = "#FFFFFF";
const IM_BAR_BG = "rgba(247, 247, 247, 0.85)";
const IM_BAR_BORDER = "rgba(0, 0, 0, 0.08)";
const IM_BLUE = "#007AFF";
const IM_BLUE_DARK = "#0A6FE0";
const IM_INCOMING_BG = "#E9E9EB";
const IM_TEXT_DARK = "#000000";
const IM_TEXT_WHITE = "#FFFFFF";
const IM_META = "#8E8E93";
const IM_PLACEHOLDER = "#9A9A9F";

const IOS_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

type IconProps = { size: number; color?: string };

function IconChevronLeft({ size, color = IM_BLUE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
}

function IconVideoCall({ size, color = IM_BLUE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M22 7l-6 5 6 5V7z" />
    </svg>
  );
}

function IconArrowUp({ size }: { size: number }) {
  return (
    <svg
      width={size * 1.35}
      height={size * 1.35}
      viewBox="0 0 28 28"
      aria-hidden
    >
      <circle cx="14" cy="14" r="14" fill={IM_BLUE} />
      <path
        d="M14 8 L14 20 M9 13 L14 8 L19 13"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAppStore({ size, color = IM_BLUE }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 16l3-8 3 8M10.5 13h3" />
    </svg>
  );
}

function SignalBars({ size, color = IM_TEXT_DARK }: IconProps) {
  return (
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 18 12"
      fill={color}
      aria-hidden
    >
      <rect x="0" y="8.5" width="3" height="3.5" rx="0.6" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="0.6" />
      <rect x="10" y="2.5" width="3" height="9.5" rx="0.6" />
      <rect x="15" y="0" width="3" height="12" rx="0.6" />
    </svg>
  );
}

function WifiIcon({ size, color = IM_TEXT_DARK }: IconProps) {
  return (
    <svg
      width={size * 1.4}
      height={size}
      viewBox="0 0 16 12"
      fill={color}
      aria-hidden
    >
      <path d="M8 0C5 0 2.3 1.1 0.3 3 L2.1 4.8 C3.7 3.3 5.7 2.5 8 2.5 S12.3 3.3 13.9 4.8 L15.7 3 C13.7 1.1 11 0 8 0Z" />
      <path d="M8 4.5C6.2 4.5 4.5 5.2 3.3 6.4 L5.1 8.1 C5.9 7.4 6.9 7 8 7 S10.1 7.4 10.9 8.1 L12.7 6.4 C11.5 5.2 9.8 4.5 8 4.5Z" />
      <circle cx="8" cy="10.2" r="1.5" />
    </svg>
  );
}

function BatteryIcon({
  percent,
  size,
  color = IM_TEXT_DARK,
}: {
  percent: number;
  size: number;
  color?: string;
}) {
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
        <div
          style={{
            height: "100%",
            width: `${fillWidth}%`,
            backgroundColor: color,
            borderRadius: radius * 0.5,
          }}
        />
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
    <svg
      width={size}
      height={size}
      viewBox="120 40 175 175"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Solara"
    >
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
        color: IM_TEXT_DARK,
      }}
    >
      <div
        className="font-semibold tabular-nums"
        style={{ fontSize: timeFontSize, fontFamily: IOS_FONT }}
      >
        {time}
      </div>
      <div className="flex items-center" style={{ gap: 5 * scale }}>
        <SignalBars size={iconSize} />
        <WifiIcon size={iconSize} />
        <div
          className="flex items-center tabular-nums"
          style={{ gap: 3 * scale }}
        >
          <span
            className="font-medium"
            style={{ fontSize: batteryPercentFontSize, fontFamily: IOS_FONT }}
          >
            {batteryPercent}
          </span>
          <BatteryIcon percent={batteryPercent} size={iconSize} />
        </div>
      </div>
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
        borderRadius:
          position === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
        backgroundColor: "rgba(17,17,17,0.7)",
      }}
    />
  );
}

function PhoneFrame({
  width,
  children,
}: {
  width: number;
  children: ReactNode;
}) {
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

      <div
        className="relative h-full w-full overflow-hidden"
        style={{ borderRadius: screenRadius, backgroundColor: IM_BG }}
      >
        {children}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full"
          style={{
            top: islandTop,
            width: islandWidth,
            height: islandHeight,
            backgroundColor: "#111111",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full"
          style={{
            bottom: homeIndicatorBottom,
            width: homeIndicatorWidth,
            height: homeIndicatorHeight,
            backgroundColor: "#111111",
          }}
        />
      </div>
    </div>
  );
}

function MessagesHeader({ phoneWidth }: { phoneWidth: number }) {
  const scale = phoneWidth / 240;
  const height = 52 * scale;
  const paddingH = 10 * scale;
  const avatarSize = 30 * scale;
  const iconSize = 17 * scale;
  const chevronSize = 22 * scale;
  const nameSize = 10.5 * scale;
  const caretSize = 8 * scale;

  return (
    <div
      className="relative flex shrink-0 items-center justify-between"
      style={{
        height,
        paddingLeft: paddingH,
        paddingRight: paddingH,
        borderBottom: `0.5px solid ${IM_BAR_BORDER}`,
      }}
    >
      <div className="flex shrink-0 items-center" style={{ gap: 2 * scale }}>
        <IconChevronLeft size={chevronSize} />
        <span
          style={{
            fontSize: 11 * scale,
            color: IM_BLUE,
            fontFamily: IOS_FONT,
            fontWeight: 400,
            marginLeft: -2 * scale,
          }}
        >
          12
        </span>
      </div>

      <div
        className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center"
        style={{ gap: 2 * scale }}
      >
        <div
          className="overflow-hidden rounded-full"
          style={{ width: avatarSize, height: avatarSize }}
        >
          <SolaraAvatar size={avatarSize} />
        </div>
        <div
          className="flex items-center"
          style={{ gap: 2 * scale, marginTop: 1 * scale }}
        >
          <span
            className="font-medium"
            style={{
              fontSize: nameSize,
              color: IM_TEXT_DARK,
              fontFamily: IOS_FONT,
              lineHeight: 1,
            }}
          >
            Solara
          </span>
          <svg
            width={caretSize}
            height={caretSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke={IM_META}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      </div>

      <div className="flex shrink-0 items-center" style={{ gap: 8 * scale }}>
        <IconVideoCall size={iconSize} />
      </div>
    </div>
  );
}

const TYPING_DOTS_CSS = `
@keyframes im-typing-dot {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
  30% { transform: translateY(-3px); opacity: 1; }
}
`;

function TypingBubble({ phoneWidth }: { phoneWidth: number }) {
  const scale = phoneWidth / 240;
  const paddingX = 12 * scale;
  const paddingY = 10 * scale;
  const radius = 18 * scale;
  const dotSize = 5 * scale;
  const gap = 3 * scale;

  return (
    <div className="relative flex w-full" style={{ justifyContent: "flex-start" }}>
      <style>{TYPING_DOTS_CSS}</style>
      <div
        className="relative flex items-center"
        style={{
          backgroundColor: IM_INCOMING_BG,
          borderRadius: radius,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          gap,
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            aria-hidden
            style={{
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              backgroundColor: "#8E8E93",
              display: "inline-block",
              animation: "im-typing-dot 1.2s infinite ease-in-out",
              animationDelay: `${i * 0.18}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({
  phoneWidth,
  direction,
  children,
  isLast,
  showDelivered,
}: {
  phoneWidth: number;
  direction: ChatDirection;
  children: ReactNode;
  isLast: boolean;
  showDelivered: boolean;
}) {
  const scale = phoneWidth / 240;
  const isUser = direction === "outgoing";
  const maxWidth = phoneWidth * 0.74;
  const textSize = 12 * scale;
  const paddingX = 11 * scale;
  const paddingY = 7 * scale;
  const radius = 18 * scale;
  const tightCorner = 5 * scale;

  return (
    <div className="flex w-full flex-col" style={{ gap: 2 * scale }}>
      <div
        className="relative flex w-full"
        style={{ justifyContent: isUser ? "flex-end" : "flex-start" }}
      >
        <div
          className="relative"
          style={{
            maxWidth,
            background: isUser
              ? `linear-gradient(180deg, ${IM_BLUE} 0%, ${IM_BLUE_DARK} 100%)`
              : IM_INCOMING_BG,
            color: isUser ? IM_TEXT_WHITE : IM_TEXT_DARK,
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
            borderBottomLeftRadius: !isUser && isLast ? tightCorner : radius,
            borderBottomRightRadius: isUser && isLast ? tightCorner : radius,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            paddingTop: paddingY,
            paddingBottom: paddingY,
          }}
        >
          <div
            style={{
              fontSize: textSize,
              lineHeight: 1.35,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontFamily: IOS_FONT,
            }}
          >
            {children}
          </div>
        </div>
      </div>
      {isUser && isLast && showDelivered && (
        <div className="flex w-full justify-end" style={{ paddingRight: 2 * scale }}>
          <span
            style={{
              fontSize: 8 * scale,
              color: IM_META,
              fontFamily: IOS_FONT,
              letterSpacing: "0.01em",
            }}
          >
            Delivered
          </span>
        </div>
      )}
    </div>
  );
}

function DateSeparator({
  phoneWidth,
  label,
}: {
  phoneWidth: number;
  label: string;
}) {
  const scale = phoneWidth / 240;
  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ paddingTop: 6 * scale, paddingBottom: 6 * scale }}
    >
      <span
        style={{
          fontSize: 8.5 * scale,
          color: IM_META,
          fontFamily: IOS_FONT,
          fontWeight: 500,
        }}
      >
        <span style={{ fontWeight: 700 }}>{label.split(" ")[0]}</span>
        {label.includes(" ") && ` ${label.split(" ").slice(1).join(" ")}`}
      </span>
    </div>
  );
}

type RenderedMessage = {
  key: string;
  direction: ChatDirection;
  content: ReactNode;
};

function ScriptedThread({
  phoneWidth,
  messages,
  isIncomingTyping,
  dateLabel,
}: {
  phoneWidth: number;
  messages: RenderedMessage[];
  isIncomingTyping: boolean;
  dateLabel: string;
}) {
  const scale = phoneWidth / 240;
  const gap = 3 * scale;
  const paddingX = 10 * scale;
  const paddingY = 8 * scale;
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll triggers
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length, isIncomingTyping]);

  return (
    <div
      ref={scrollerRef}
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
      <DateSeparator phoneWidth={phoneWidth} label={dateLabel} />
      {messages.map((m, i) => {
        const next = messages[i + 1];
        const isLastInGroup = !next || next.direction !== m.direction;
        return (
          <MessageBubble
            key={m.key}
            phoneWidth={phoneWidth}
            direction={m.direction}
            isLast={isLastInGroup}
            showDelivered={i === messages.length - 1 && !isIncomingTyping}
          >
            {m.content}
          </MessageBubble>
        );
      })}
      {isIncomingTyping && (
        <TypingBubble key={`typing-${messages.length}`} phoneWidth={phoneWidth} />
      )}
    </div>
  );
}

function MessagesInputBar({
  phoneWidth,
  inputValue,
}: {
  phoneWidth: number;
  inputValue: string;
}) {
  const scale = phoneWidth / 240;
  const height = 44 * scale;
  const paddingH = 10 * scale;
  const gap = 8 * scale;
  const iconSize = 22 * scale;
  const fontSize = 12 * scale;
  const inputHeight = 30 * scale;
  const inputPaddingX = 12 * scale;
  const hasValue = inputValue.length > 0;

  return (
    <div
      className="flex shrink-0 items-center"
      style={{
        height,
        paddingLeft: paddingH,
        paddingRight: paddingH,
        gap,
        borderTop: `0.5px solid ${IM_BAR_BORDER}`,
        backgroundColor: IM_BAR_BG,
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="shrink-0">
        <IconAppStore size={iconSize} />
      </div>
      <div
        className="flex min-w-0 flex-1 items-center justify-between"
        style={{
          height: inputHeight,
          borderRadius: inputHeight / 2,
          backgroundColor: "#FFFFFF",
          border: `0.5px solid ${IM_BAR_BORDER}`,
          paddingLeft: inputPaddingX,
          paddingRight: 4 * scale,
        }}
      >
        <span
          className="flex min-w-0 flex-1 items-center overflow-hidden"
          style={{
            fontSize,
            color: hasValue ? IM_TEXT_DARK : IM_PLACEHOLDER,
            lineHeight: 1,
            whiteSpace: "nowrap",
            fontFamily: IOS_FONT,
          }}
        >
          {hasValue ? inputValue : "iMessage"}
        </span>
        {hasValue ? (
          <IconArrowUp size={iconSize * 0.8} />
        ) : (
          <span
            style={{
              fontSize: 9 * scale,
              color: IM_BLUE,
              fontWeight: 600,
              fontFamily: IOS_FONT,
              letterSpacing: "0.04em",
              paddingRight: 6 * scale,
            }}
          >
            audio
          </span>
        )}
      </div>
    </div>
  );
}

type MessagesScriptedMockupProps = {
  phoneWidth?: number;
  script: ChatTurn[];
  options?: ChatScriptOptions;
  statusTime?: string;
  batteryPercent?: number;
  dateLabel?: string;
  className?: string;
};

export function MessagesScriptedMockup({
  phoneWidth = 280,
  script,
  options,
  statusTime = "9:41",
  batteryPercent = 87,
  dateLabel = "Today 9:00 AM",
  className,
}: MessagesScriptedMockupProps) {
  const scale = phoneWidth / 240;
  const statusBarPad = Math.round(phoneWidth * 0.09) + Math.round(20 * scale);
  const homeIndicatorPad = Math.round(22 * scale);
  const renderedMessages: RenderedMessage[] = [];
  const { messages, isIncomingTyping, inputValue } = useScriptedChat(
    script,
    options,
  );
  for (const m of messages) {
    renderedMessages.push({
      key: m.key,
      direction: m.direction,
      content: m.content,
    });
  }

  return (
    <div className={className}>
      <PhoneFrame width={phoneWidth}>
        <StatusBar
          phoneWidth={phoneWidth}
          time={statusTime}
          batteryPercent={batteryPercent}
        />
        <div className="flex h-full w-full flex-col">
          <div
            className="shrink-0"
            style={{
              backgroundColor: IM_BAR_BG,
              backdropFilter: "blur(20px)",
              paddingTop: statusBarPad,
            }}
          >
            <MessagesHeader phoneWidth={phoneWidth} />
          </div>
          <div
            className="min-h-0 flex-1 overflow-hidden"
            style={{ backgroundColor: IM_BG }}
          >
            <ScriptedThread
              phoneWidth={phoneWidth}
              messages={renderedMessages}
              isIncomingTyping={isIncomingTyping}
              dateLabel={dateLabel}
            />
          </div>
          <div
            className="shrink-0"
            style={{ paddingBottom: homeIndicatorPad }}
          >
            <MessagesInputBar
              phoneWidth={phoneWidth}
              inputValue={inputValue}
            />
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

const HERO_SCRIPTED_SCRIPT: ChatTurn[] = [
  {
    id: "h1",
    direction: "incoming",
    content:
      "Morning! \u2615 Need 5 seconds today \u2014 film your espresso machine while it's running",
    time: "9:02",
  },
  {
    id: "h2",
    direction: "outgoing",
    content: "Done \uD83C\uDFA5",
    time: "9:14",
  },
  {
    id: "h3",
    direction: "incoming",
    content: "Edited! Approve to post at 6 PM today?",
    time: "10:31",
    typingDurationMs: 1300,
  },
  {
    id: "h4",
    direction: "outgoing",
    content: "Send it \u2705",
    time: "10:32",
  },
];

export function MessagesScriptedHeroMockup(
  props: Omit<MessagesScriptedMockupProps, "script"> & { script?: ChatTurn[] },
) {
  const { script = HERO_SCRIPTED_SCRIPT, options, ...rest } = props;
  return (
    <MessagesScriptedMockup
      {...rest}
      script={script}
      options={{
        loop: true,
        loopDelayMs: 2400,
        maxLoops: 3,
        defaultPostDelayMs: 700,
        ...options,
      }}
    />
  );
}
