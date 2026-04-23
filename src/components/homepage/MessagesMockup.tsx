"use client";

import { type ReactNode, useEffect, useRef } from "react";
import {
  type ChatDirection,
  type ChatScriptOptions,
  type ChatTurn,
  useScriptedChat,
} from "./WhatsAppMockupScripted";

const SMS_BG = "#FFFFFF";
const SMS_GREEN = "#34C759";
const SMS_INCOMING_BG = "#E9E9EB";
const SMS_TEXT_DARK = "#000000";
const SMS_TEXT_WHITE = "#FFFFFF";
const SMS_META = "#8E8E93";
const SMS_PLACEHOLDER = "#A1A1A6";
const SMS_PILL_BG = "#FFFFFF";
const SMS_PILL_BORDER = "rgba(0,0,0,0.06)";
const SMS_BADGE_BG = "#1C1C1E";
const SMS_KEY_DARK = "#1C1C1E";

const IOS_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

const PILL_SHADOW =
  "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px -2px rgba(0,0,0,0.08)";

type IconProps = { size: number; color?: string };

function IconChevronLeft({ size, color = SMS_KEY_DARK }: IconProps) {
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

function IconCaretRight({ size, color = SMS_KEY_DARK }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function IconPlus({ size, color = SMS_KEY_DARK }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconMic({ size, color = SMS_META }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="9" y1="22" x2="15" y2="22" />
    </svg>
  );
}

function IconArrowUp({ size }: { size: number }) {
  return (
    <svg
      width={size * 1.45}
      height={size * 1.45}
      viewBox="0 0 28 28"
      aria-hidden
    >
      <circle cx="14" cy="14" r="14" fill={SMS_GREEN} />
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

function SignalBars({ size, color = SMS_TEXT_DARK }: IconProps) {
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

function WifiIcon({ size, color = SMS_TEXT_DARK }: IconProps) {
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
  color = SMS_TEXT_DARK,
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
        color: SMS_TEXT_DARK,
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
        style={{ borderRadius: screenRadius, backgroundColor: SMS_BG }}
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

function MessagesHeader({
  phoneWidth,
  unreadBadge,
}: {
  phoneWidth: number;
  unreadBadge?: string;
}) {
  const scale = phoneWidth / 240;
  const height = 66 * scale;
  const paddingH = 12 * scale;
  const avatarSize = 38 * scale;
  const chevronSize = 18 * scale;
  const namePillFontSize = 11 * scale;
  const badgeFontSize = 9.5 * scale;
  const namePillPadX = 8 * scale;
  const namePillPadY = 3 * scale;
  const caretSize = 9 * scale;

  return (
    <div
      className="relative flex shrink-0 items-start"
      style={{
        height,
        paddingLeft: paddingH,
        paddingRight: paddingH,
        paddingTop: 4 * scale,
      }}
    >
      <div
        className="flex shrink-0 items-center"
        style={{
          gap: 4 * scale,
          padding: `${4 * scale}px ${6 * scale}px`,
          background: SMS_PILL_BG,
          borderRadius: 999,
          boxShadow: PILL_SHADOW,
        }}
      >
        <IconChevronLeft size={chevronSize} />
        {unreadBadge ? (
          <span
            className="flex items-center justify-center font-semibold tabular-nums"
            style={{
              minWidth: 20 * scale,
              height: 16 * scale,
              padding: `0 ${5 * scale}px`,
              borderRadius: 999,
              backgroundColor: SMS_BADGE_BG,
              color: "#FFFFFF",
              fontSize: badgeFontSize,
              fontFamily: IOS_FONT,
            }}
          >
            {unreadBadge}
          </span>
        ) : null}
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ gap: 4 * scale, top: 4 * scale }}
      >
        <div
          className="overflow-hidden rounded-full"
          style={{
            width: avatarSize,
            height: avatarSize,
            boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
          }}
        >
          <SolaraAvatar size={avatarSize} />
        </div>
        <div
          className="flex items-center"
          style={{
            gap: 3 * scale,
            padding: `${namePillPadY}px ${namePillPadX}px`,
            background: SMS_PILL_BG,
            borderRadius: 999,
            boxShadow: PILL_SHADOW,
          }}
        >
          <span
            className="font-semibold"
            style={{
              fontSize: namePillFontSize,
              color: SMS_TEXT_DARK,
              fontFamily: IOS_FONT,
              lineHeight: 1,
              letterSpacing: "-0.005em",
            }}
          >
            Solara
          </span>
          <IconCaretRight size={caretSize} color={SMS_META} />
        </div>
      </div>
    </div>
  );
}

function ConversationLabel({
  phoneWidth,
  dateLabel,
}: {
  phoneWidth: number;
  dateLabel: string;
}) {
  const scale = phoneWidth / 240;
  const datePieces = dateLabel.split(" ");
  const dateLeading = datePieces[0] ?? "";
  const dateTrailing = datePieces.slice(1).join(" ");

  return (
    <div
      className="flex w-full flex-col items-center"
      style={{
        paddingTop: 0,
        paddingBottom: 8 * scale,
        gap: 1 * scale,
        fontFamily: IOS_FONT,
      }}
    >
      <div
        className="flex items-center"
        style={{ gap: 5 * scale }}
      >
        <span
          style={{
            fontSize: 8 * scale,
            color: SMS_META,
            letterSpacing: "-0.005em",
          }}
        >
          Text Message
        </span>
        <span
          aria-hidden
          style={{
            color: SMS_META,
            fontSize: 8 * scale,
            lineHeight: 1,
          }}
        >
          &middot;
        </span>
        <span
          style={{
            fontSize: 8 * scale,
            color: SMS_META,
            letterSpacing: "-0.005em",
          }}
        >
          SMS
        </span>
      </div>
      <div
        style={{
          fontSize: 7 * scale,
          color: SMS_META,
          letterSpacing: "0.01em",
        }}
      >
        <span style={{ color: SMS_META }}>{dateLeading}</span>
        {dateTrailing ? <span> {dateTrailing}</span> : null}
      </div>
    </div>
  );
}

const TYPING_DOTS_CSS = `
@keyframes sms-typing-dot {
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
          backgroundColor: SMS_INCOMING_BG,
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
              backgroundColor: SMS_META,
              display: "inline-block",
              animation: "sms-typing-dot 1.2s infinite ease-in-out",
              animationDelay: `${i * 0.18}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function BubbleTail({
  isUser,
  bubbleColor,
  pageColor,
  scale,
}: {
  isUser: boolean;
  bubbleColor: string;
  pageColor: string;
  scale: number;
}) {
  const sideKey = isUser ? "right" : "left";
  const borderSideKey = isUser ? "borderRight" : "borderLeft";
  const innerRadiusKey = isUser
    ? "borderBottomLeftRadius"
    : "borderBottomRightRadius";

  return (
    <>
      <span
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          [sideKey]: -5.6 * scale,
          height: 16 * scale,
          [innerRadiusKey]: `${12.8 * scale}px ${11.2 * scale}px`,
          [borderSideKey]: `${16 * scale}px solid ${bubbleColor}`,
          transform: `translate(0, ${-1.6 * scale}px)`,
          zIndex: 1,
        }}
      />
      <span
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          [sideKey]: -40 * scale,
          width: 10 * scale,
          height: 16 * scale,
          background: pageColor,
          [innerRadiusKey]: `${8 * scale}px`,
          transform: `translate(${(isUser ? -30 : 30) * scale}px, ${-2 * scale}px)`,
          zIndex: 2,
        }}
      />
    </>
  );
}

function MessageBubble({
  phoneWidth,
  direction,
  children,
  showTail,
}: {
  phoneWidth: number;
  direction: ChatDirection;
  children: ReactNode;
  showTail: boolean;
}) {
  const scale = phoneWidth / 240;
  const isUser = direction === "outgoing";
  const maxWidth = phoneWidth * 0.74;
  const textSize = 12 * scale;
  const paddingX = 12 * scale;
  const paddingY = 7 * scale;
  const radius = 19 * scale;
  const bubbleColor = isUser ? SMS_GREEN : SMS_INCOMING_BG;

  return (
    <div
      className="relative flex w-full"
      style={{ justifyContent: isUser ? "flex-end" : "flex-start" }}
    >
      <div
        className="relative"
        style={{
          maxWidth,
          background: bubbleColor,
          color: isUser ? SMS_TEXT_WHITE : SMS_TEXT_DARK,
          borderRadius: radius,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          isolation: "isolate",
        }}
      >
        <div
          style={{
            fontSize: textSize,
            lineHeight: 1.35,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontFamily: IOS_FONT,
            position: "relative",
            zIndex: 3,
          }}
        >
          {children}
        </div>
        {showTail && (
          <BubbleTail
            isUser={isUser}
            bubbleColor={bubbleColor}
            pageColor={SMS_BG}
            scale={scale}
          />
        )}
      </div>
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
  const paddingX = 14 * scale;
  const paddingY = 4 * scale;
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
      <ConversationLabel phoneWidth={phoneWidth} dateLabel={dateLabel} />
      {messages.map((m, i) => {
        const next = messages[i + 1];
        const isLastInGroup = !next || next.direction !== m.direction;
        return (
          <MessageBubble
            key={m.key}
            phoneWidth={phoneWidth}
            direction={m.direction}
            showTail={isLastInGroup}
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
  const height = 52 * scale;
  const paddingH = 10 * scale;
  const gap = 8 * scale;
  const plusButtonSize = 32 * scale;
  const plusIconSize = 16 * scale;
  const fontSize = 12 * scale;
  const inputHeight = 32 * scale;
  const inputPaddingX = 14 * scale;
  const sendSize = 22 * scale;
  const micSize = 17 * scale;
  const hasValue = inputValue.length > 0;

  return (
    <div
      className="flex shrink-0 items-center"
      style={{
        height,
        paddingLeft: paddingH,
        paddingRight: paddingH,
        gap,
        backgroundColor: SMS_BG,
      }}
    >
      <div
        className="flex shrink-0 items-center justify-center"
        style={{
          width: plusButtonSize,
          height: plusButtonSize,
          borderRadius: "50%",
          backgroundColor: SMS_PILL_BG,
          boxShadow: PILL_SHADOW,
        }}
      >
        <IconPlus size={plusIconSize} />
      </div>

      <div
        className="flex min-w-0 flex-1 items-center justify-between"
        style={{
          height: inputHeight,
          borderRadius: inputHeight / 2,
          backgroundColor: SMS_PILL_BG,
          border: `0.5px solid ${SMS_PILL_BORDER}`,
          paddingLeft: inputPaddingX,
          paddingRight: 4 * scale,
          boxShadow: PILL_SHADOW,
        }}
      >
        <span
          className="flex min-w-0 flex-1 items-center overflow-hidden"
          style={{
            fontSize,
            color: hasValue ? SMS_TEXT_DARK : SMS_PLACEHOLDER,
            lineHeight: 1,
            whiteSpace: "nowrap",
            fontFamily: IOS_FONT,
          }}
        >
          {hasValue ? (
            inputValue
          ) : (
            <span className="flex items-center" style={{ gap: 5 * scale }}>
              <span>Text Message</span>
              <span aria-hidden style={{ color: SMS_META }}>
                &middot;
              </span>
              <span>SMS</span>
            </span>
          )}
        </span>
        <div className="shrink-0" style={{ paddingRight: hasValue ? 0 : 6 * scale }}>
          {hasValue ? (
            <IconArrowUp size={sendSize} />
          ) : (
            <IconMic size={micSize} />
          )}
        </div>
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
  unreadBadge?: string;
  className?: string;
};

export function MessagesScriptedMockup({
  phoneWidth = 280,
  script,
  options,
  statusTime = "9:41",
  batteryPercent = 87,
  dateLabel = "Today 9:02",
  unreadBadge = "12",
  className,
}: MessagesScriptedMockupProps) {
  const scale = phoneWidth / 240;
  const statusBarPad = Math.round(phoneWidth * 0.09) + Math.round(20 * scale);
  const homeIndicatorPad = Math.round(22 * scale);
  const { messages, isIncomingTyping, inputValue } = useScriptedChat(
    script,
    options,
  );
  const renderedMessages: RenderedMessage[] = messages.map((m) => ({
    key: m.key,
    direction: m.direction,
    content: m.content,
  }));

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
              backgroundColor: SMS_BG,
              paddingTop: statusBarPad,
            }}
          >
            <MessagesHeader
              phoneWidth={phoneWidth}
              unreadBadge={unreadBadge}
            />
          </div>
          <div
            className="min-h-0 flex-1 overflow-hidden"
            style={{ backgroundColor: SMS_BG }}
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
        defaultPostDelayMs: 700,
        ...options,
      }}
    />
  );
}
