"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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

const IOS_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif';

export type ChatDirection = "incoming" | "outgoing";

export type ChatTurn = {
  /** Stable React key. Falls back to the array index if omitted. */
  id?: string;
  direction: ChatDirection;
  /** Final bubble content. Any React node (text, image, card, ...). */
  content: ReactNode;
  /**
   * Outgoing only — the string typewritten into the input bar.
   * Falls back to `content` when `content` is a string; otherwise required.
   */
  typedText?: string;
  /** Incoming only — override typing-indicator duration (ms). */
  typingDurationMs?: number;
  /** Outgoing only — override per-character typewriter speed (ms/char). */
  typewriterSpeedMs?: number;
  /** Outgoing only — cap total typewriter duration for long messages (ms). */
  typewriterMaxDurationMs?: number;
  /** Delay before this turn begins (ms). */
  preDelayMs?: number;
  /** Delay after this turn finishes before advancing (ms). */
  postDelayMs?: number;
  /** Timestamp inside the bubble, e.g. "9:38". */
  time?: string;
};

export type ChatScriptOptions = {
  autoStart?: boolean;
  defaultTypingDurationMs?: number;
  typingDurationJitterMs?: number;
  defaultTypewriterSpeedMs?: number;
  typewriterSpeedJitterPct?: number;
  defaultTypewriterMaxDurationMs?: number;
  defaultPostDelayMs?: number;
  sendPauseMs?: number;
  defaultPreDelayMs?: number;
  loop?: boolean;
  loopDelayMs?: number;
  /** Maximum number of loop cycles (only used when loop=true). Default Infinity. */
  maxLoops?: number;
  defaultTime?: string;
  onComplete?: () => void;
};

type RenderedTurn = {
  key: string;
  direction: ChatDirection;
  content: ReactNode;
  time: string;
};

type ScriptedChatState = {
  messages: RenderedTurn[];
  isIncomingTyping: boolean;
  inputValue: string;
  isPlaying: boolean;
  isComplete: boolean;
  currentTurnIndex: number | null;
};

type ResolvedOptions = Required<Omit<ChatScriptOptions, "onComplete">> & {
  onComplete?: () => void;
};

const DEFAULTS: ResolvedOptions = {
  autoStart: true,
  defaultTypingDurationMs: 1100,
  typingDurationJitterMs: 350,
  defaultTypewriterSpeedMs: 70,
  typewriterSpeedJitterPct: 40,
  defaultTypewriterMaxDurationMs: 3500,
  defaultPostDelayMs: 600,
  sendPauseMs: 260,
  defaultPreDelayMs: 350,
  loop: false,
  loopDelayMs: 1600,
  maxLoops: Number.POSITIVE_INFINITY,
  defaultTime: "9:41",
};

const INITIAL_STATE: ScriptedChatState = {
  messages: [],
  isIncomingTyping: false,
  inputValue: "",
  isPlaying: false,
  isComplete: false,
  currentTurnIndex: null,
};

function wait(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("aborted", "AbortError"));
      return;
    }
    const id = window.setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    function onAbort() {
      window.clearTimeout(id);
      reject(new DOMException("aborted", "AbortError"));
    }
    signal.addEventListener("abort", onAbort, { once: true });
  });
}

function jitter(base: number, amount: number): number {
  return Math.max(0, Math.round(base + (Math.random() * 2 - 1) * amount));
}

function jitterPct(base: number, pct: number): number {
  const factor = 1 + (Math.random() * 2 - 1) * (pct / 100);
  return Math.max(5, Math.round(base * factor));
}

function resolveTypedText(turn: ChatTurn): string {
  if (turn.typedText != null) return turn.typedText;
  if (typeof turn.content === "string") return turn.content;
  return "";
}

function computeSpeed(base: number, length: number, max: number): number {
  if (length === 0) return base;
  const projected = base * length;
  if (projected <= max) return base;
  return Math.max(5, Math.floor(max / length));
}

async function play(
  script: ChatTurn[],
  opts: ResolvedOptions,
  setState: Dispatch<SetStateAction<ScriptedChatState>>,
  signal: AbortSignal,
): Promise<void> {
  let loopCount = 0;
  while (true) {
    await playOnce(script, opts, setState, signal);
    loopCount++;
    if (!opts.loop || loopCount >= opts.maxLoops) break;
    await wait(opts.loopDelayMs, signal);
    setState({ ...INITIAL_STATE, isPlaying: true });
  }

  setState((s) => ({ ...s, isPlaying: false, isComplete: true, currentTurnIndex: null }));
  opts.onComplete?.();
}

async function playOnce(
  script: ChatTurn[],
  opts: ResolvedOptions,
  setState: Dispatch<SetStateAction<ScriptedChatState>>,
  signal: AbortSignal,
): Promise<void> {
  for (let i = 0; i < script.length; i++) {
    const turn = script[i];
    if (!turn) continue;
    setState((s) => ({ ...s, currentTurnIndex: i, isPlaying: true, isComplete: false }));
    await playTurn(turn, i, opts, setState, signal);
  }
}

async function playTurn(
  turn: ChatTurn,
  index: number,
  opts: ResolvedOptions,
  setState: Dispatch<SetStateAction<ScriptedChatState>>,
  signal: AbortSignal,
): Promise<void> {
  const preDelay = turn.preDelayMs ?? opts.defaultPreDelayMs;
  if (preDelay > 0) await wait(preDelay, signal);
  if (turn.direction === "incoming") {
    await playIncoming(turn, opts, setState, signal, index);
  } else {
    await playOutgoing(turn, opts, setState, signal, index);
  }
  const postDelay = turn.postDelayMs ?? opts.defaultPostDelayMs;
  if (postDelay > 0) await wait(postDelay, signal);
}

async function playIncoming(
  turn: ChatTurn,
  opts: ResolvedOptions,
  setState: Dispatch<SetStateAction<ScriptedChatState>>,
  signal: AbortSignal,
  index: number,
): Promise<void> {
  setState((s) => ({ ...s, isIncomingTyping: true }));
  const duration = jitter(
    turn.typingDurationMs ?? opts.defaultTypingDurationMs,
    opts.typingDurationJitterMs,
  );
  await wait(duration, signal);
  const rendered: RenderedTurn = {
    key: turn.id ?? `turn-${index}`,
    direction: "incoming",
    content: turn.content,
    time: turn.time ?? opts.defaultTime,
  };
  setState((s) => ({ ...s, isIncomingTyping: false, messages: [...s.messages, rendered] }));
}

async function playOutgoing(
  turn: ChatTurn,
  opts: ResolvedOptions,
  setState: Dispatch<SetStateAction<ScriptedChatState>>,
  signal: AbortSignal,
  index: number,
): Promise<void> {
  const typed = resolveTypedText(turn);
  const speed = computeSpeed(
    turn.typewriterSpeedMs ?? opts.defaultTypewriterSpeedMs,
    typed.length,
    turn.typewriterMaxDurationMs ?? opts.defaultTypewriterMaxDurationMs,
  );

  for (let i = 0; i < typed.length; i++) {
    await wait(jitterPct(speed, opts.typewriterSpeedJitterPct), signal);
    const nextValue = typed.slice(0, i + 1);
    setState((s) => ({ ...s, inputValue: nextValue }));
  }

  await wait(opts.sendPauseMs, signal);

  const rendered: RenderedTurn = {
    key: turn.id ?? `turn-${index}`,
    direction: "outgoing",
    content: turn.content,
    time: turn.time ?? opts.defaultTime,
  };
  setState((s) => ({ ...s, inputValue: "", messages: [...s.messages, rendered] }));
}

export function useScriptedChat(script: ChatTurn[], options: ChatScriptOptions = {}) {
  const [state, setState] = useState<ScriptedChatState>(INITIAL_STATE);
  const controllerRef = useRef<AbortController | null>(null);
  const optsRef = useRef<ResolvedOptions>({ ...DEFAULTS, ...options });
  const scriptRef = useRef<ChatTurn[]>(script);

  optsRef.current = { ...DEFAULTS, ...options };
  scriptRef.current = script;

  const start = useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setState({ ...INITIAL_STATE, isPlaying: true });
    play(scriptRef.current, optsRef.current, setState, controller.signal).catch((err) => {
      if ((err as DOMException)?.name === "AbortError") return;
      throw err;
    });
  }, []);

  const stop = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setState((s) => ({ ...s, isPlaying: false }));
  }, []);

  const reset = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
    setState(INITIAL_STATE);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: autostart on mount only
  useEffect(() => {
    const shouldAutoStart = optsRef.current.autoStart;
    if (!shouldAutoStart) {
      return () => {
        controllerRef.current?.abort();
        controllerRef.current = null;
      };
    }

    // Defer the animation start so initial paint isn't blocked by setTimeout
    // chains + React re-renders from the engine. requestIdleCallback yields
    // until the browser has finished critical work; the 1000ms timeout guards
    // against browsers where idle never fires (e.g. busy tabs).
    let idleHandle: number | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;
    if (typeof window !== "undefined" && typeof window.requestIdleCallback === "function") {
      idleHandle = window.requestIdleCallback(() => start(), { timeout: 1000 });
    } else if (typeof window !== "undefined") {
      timeoutHandle = setTimeout(() => start(), 120);
    }

    return () => {
      controllerRef.current?.abort();
      controllerRef.current = null;
      if (idleHandle !== null && typeof window !== "undefined" && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) {
        clearTimeout(timeoutHandle);
      }
    };
  }, [start]);

  return { ...state, start, stop, reset };
}

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

function IconSend({ size }: { size: number }) {
  return (
    <svg width={size * 1.35} height={size * 1.35} viewBox="0 0 28 28" aria-hidden>
      <circle cx="14" cy="14" r="14" fill={WA_ONLINE_GREEN} />
      <path d="M8.5 14.2L13.2 18.4 20 9.8" fill="none" stroke="#FFFFFF" strokeWidth="2.4"
        strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="relative flex items-center"
        style={{ width: bodyWidth, height: bodyHeight, borderRadius: radius, border: `1px solid ${color}`, padding }}>
        <div style={{ height: "100%", width: `${fillWidth}%`, backgroundColor: color, borderRadius: radius * 0.5 }} />
      </div>
      <div style={{
        width: nubWidth, height: nubHeight, marginLeft: 1, backgroundColor: color,
        borderTopRightRadius: nubWidth, borderBottomRightRadius: nubWidth,
      }} />
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
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between"
      style={{ height: barHeight, paddingLeft: sidePadding, paddingRight: sidePadding, color: WA_TEXT }}>
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

function SideButton({ position, topPct, height }: { position: "left" | "right"; topPct: number; height: number }) {
  return (
    <span aria-hidden className="absolute" style={{
      [position]: -2, top: `${topPct}%`, height, width: 3,
      borderRadius: position === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
      backgroundColor: "rgba(17,17,17,0.7)",
    }} />
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
    <div className="relative shrink-0" style={{
      width, height, borderRadius: frameRadius, padding: frameInset, backgroundColor: "#111111",
      boxShadow: "0 30px 60px -20px rgba(17,17,17,0.35), 0 18px 36px -18px rgba(17,17,17,0.25)",
    }}>
      <SideButton position="left" topPct={18} height={32} />
      <SideButton position="left" topPct={30} height={48} />
      <SideButton position="right" topPct={26} height={56} />

      <div className="relative h-full w-full overflow-hidden" style={{ borderRadius: screenRadius, backgroundColor: "#ffffff" }}>
        {children}
        <div aria-hidden className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full"
          style={{ top: islandTop, width: islandWidth, height: islandHeight, backgroundColor: "#111111" }} />
        <div aria-hidden className="pointer-events-none absolute left-1/2 z-30 -translate-x-1/2 rounded-full"
          style={{ bottom: homeIndicatorBottom, width: homeIndicatorWidth, height: homeIndicatorHeight, backgroundColor: "#111111" }} />
      </div>
    </div>
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

const CARET_CSS = `@keyframes wa-caret-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }`;

function Caret({ heightPx }: { heightPx: number }) {
  return (
    <span aria-hidden style={{
      display: "inline-block", width: 1.5, height: heightPx, marginLeft: 1.5,
      backgroundColor: WA_ONLINE_GREEN, animation: "wa-caret-blink 1s steps(1) infinite",
      verticalAlign: "middle",
    }}>
      <style>{CARET_CSS}</style>
    </span>
  );
}

function ScriptedInputBar({ phoneWidth, inputValue }: { phoneWidth: number; inputValue: string }) {
  const scale = phoneWidth / 240;
  const height = 40 * scale;
  const paddingH = 8 * scale;
  const gap = 7 * scale;
  const plusSize = 20 * scale;
  const iconSize = 18 * scale;
  const fontSize = 11.5 * scale;
  const inputHeight = 26 * scale;
  const inputPaddingX = 10 * scale;
  const hasValue = inputValue.length > 0;

  return (
    <div className="flex shrink-0 items-center" style={{ height, paddingLeft: paddingH, paddingRight: paddingH, gap }}>
      <div className="shrink-0">
        <IconPlus size={plusSize} />
      </div>
      <div className="flex min-w-0 flex-1 items-center" style={{
        height: inputHeight, borderRadius: inputHeight / 2, backgroundColor: "#FFFFFF",
        paddingLeft: inputPaddingX, paddingRight: inputPaddingX,
      }}>
        <span className="flex min-w-0 flex-1 items-center overflow-hidden" style={{
          fontSize, color: hasValue ? WA_TEXT : WA_META, lineHeight: 1, whiteSpace: "nowrap",
          fontFamily: IOS_FONT,
        }}>
          {hasValue ? inputValue : "Message"}
          {hasValue && <Caret heightPx={fontSize * 1.1} />}
        </span>
      </div>
      <div className="flex shrink-0 items-center" style={{ gap: 8 * scale }}>
        {hasValue ? (
          <IconSend size={iconSize} />
        ) : (
          <>
            <IconCamera size={iconSize} />
            <IconMic size={iconSize} />
          </>
        )}
      </div>
    </div>
  );
}

const TYPING_DOTS_CSS = `
@keyframes wa-typing-dot {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
  30% { transform: translateY(-3px); opacity: 1; }
}
`;

function TypingBubble({ phoneWidth }: { phoneWidth: number }) {
  const scale = phoneWidth / 240;
  const paddingX = 10 * scale;
  const paddingY = 8 * scale;
  const radius = 7 * scale;
  const tailSize = 7 * scale;
  const dotSize = 5 * scale;
  const gap = 3 * scale;

  return (
    <div className="relative flex w-full" style={{ justifyContent: "flex-start", paddingLeft: tailSize }}>
      <style>{TYPING_DOTS_CSS}</style>
      <span aria-hidden className="absolute top-0" style={{
        left: 0.5, width: tailSize, height: tailSize, backgroundColor: WA_INCOMING_BG,
        clipPath: "polygon(0 0, 100% 0, 100% 100%)",
      }} />
      <div className="relative flex items-center" style={{
        backgroundColor: WA_INCOMING_BG,
        borderTopLeftRadius: 0, borderTopRightRadius: radius,
        borderBottomLeftRadius: radius, borderBottomRightRadius: radius,
        paddingLeft: paddingX, paddingRight: paddingX, paddingTop: paddingY, paddingBottom: paddingY,
        gap, boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
      }}>
        {[0, 1, 2].map((i) => (
          <span key={i} aria-hidden style={{
            width: dotSize, height: dotSize, borderRadius: "50%", backgroundColor: "#8696A0",
            display: "inline-block", animation: "wa-typing-dot 1.2s infinite ease-in-out",
            animationDelay: `${i * 0.18}s`,
          }} />
        ))}
      </div>
    </div>
  );
}

function ScriptedBubble({
  phoneWidth, direction, children, time, tail = true, read = true,
}: {
  phoneWidth: number;
  direction: ChatDirection;
  children: ReactNode;
  time: string;
  tail?: boolean;
  read?: boolean;
}) {
  const scale = phoneWidth / 240;
  const isUser = direction === "outgoing";
  const tailSize = 7 * scale;
  const bubbleColor = isUser ? WA_OUTGOING_BG : WA_INCOMING_BG;
  const maxWidth = phoneWidth * 0.78;
  const textSize = 11.5 * scale;
  const timeSize = 8.5 * scale;
  const paddingX = 8 * scale;
  const paddingY = 5 * scale;
  const radius = 7 * scale;
  const isString = typeof children === "string";

  return (
    <div className="relative flex w-full" style={{
      justifyContent: isUser ? "flex-end" : "flex-start",
      paddingLeft: isUser ? 0 : tailSize, paddingRight: isUser ? tailSize : 0,
    }}>
      {tail && (
        <span aria-hidden className="absolute top-0" style={{
          [isUser ? "right" : "left"]: 0.5, width: tailSize, height: tailSize, backgroundColor: bubbleColor,
          clipPath: isUser ? "polygon(0 0, 100% 0, 0 100%)" : "polygon(0 0, 100% 0, 100% 100%)",
        }} />
      )}
      <div className="relative" style={{
        maxWidth, backgroundColor: bubbleColor,
        borderTopLeftRadius: tail && !isUser ? 0 : radius,
        borderTopRightRadius: tail && isUser ? 0 : radius,
        borderBottomLeftRadius: radius, borderBottomRightRadius: radius,
        paddingLeft: paddingX, paddingRight: paddingX,
        paddingTop: paddingY, paddingBottom: paddingY,
        boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
      }}>
        <div style={{
          fontSize: textSize, color: WA_TEXT, lineHeight: 1.35,
          whiteSpace: isString ? "pre-wrap" : "normal", wordBreak: "break-word",
          fontFamily: IOS_FONT,
        }}>
          {children}
          {isString && (
            <span aria-hidden style={{ display: "inline-block", width: (isUser ? 44 : 28) * scale }} />
          )}
        </div>
        {isString ? (
          <div className="absolute flex items-center" style={{
            right: paddingX, bottom: paddingY - 1 * scale, gap: 3 * scale,
          }}>
            <span style={{ fontSize: timeSize, color: WA_TIMESTAMP, lineHeight: 1, fontFamily: IOS_FONT }}>{time}</span>
            {isUser && read && <IconDoubleCheck size={8 * scale} />}
          </div>
        ) : (
          <div className="flex items-center justify-end" style={{ gap: 3 * scale, marginTop: 3 * scale }}>
            <span style={{ fontSize: timeSize, color: WA_TIMESTAMP, lineHeight: 1, fontFamily: IOS_FONT }}>{time}</span>
            {isUser && read && <IconDoubleCheck size={8 * scale} />}
          </div>
        )}
      </div>
    </div>
  );
}

function ScriptedThread({
  phoneWidth, messages, isIncomingTyping,
}: {
  phoneWidth: number;
  messages: RenderedTurn[];
  isIncomingTyping: boolean;
}) {
  const scale = phoneWidth / 240;
  const gap = 4 * scale;
  const paddingX = 6 * scale;
  const paddingY = 8 * scale;
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll triggers
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length, isIncomingTyping]);

  return (
    <div ref={scrollerRef} className="flex h-full w-full flex-col overflow-y-auto"
      style={{
        paddingLeft: paddingX, paddingRight: paddingX,
        paddingTop: paddingY, paddingBottom: paddingY,
        gap, scrollbarWidth: "none",
      }}>
      {messages.map((m, i) => {
        const prev = messages[i - 1];
        const sameGroup = prev?.direction === m.direction;
        return (
          <ScriptedBubble key={m.key} phoneWidth={phoneWidth} direction={m.direction}
            time={m.time} tail={!sameGroup}>
            {m.content}
          </ScriptedBubble>
        );
      })}
      {isIncomingTyping && <TypingBubble key={`typing-${messages.length}`} phoneWidth={phoneWidth} />}
    </div>
  );
}

type WhatsAppScriptedMockupProps = {
  phoneWidth?: number;
  script: ChatTurn[];
  options?: ChatScriptOptions;
  statusTime?: string;
  batteryPercent?: number;
  className?: string;
};

export function WhatsAppScriptedMockup({
  phoneWidth = 280, script, options, statusTime = "9:41", batteryPercent = 87, className,
}: WhatsAppScriptedMockupProps) {
  const scale = phoneWidth / 240;
  const statusBarPad = Math.round(phoneWidth * 0.09) + Math.round(20 * scale);
  const homeIndicatorPad = Math.round(22 * scale);
  const { messages, isIncomingTyping, inputValue } = useScriptedChat(script, options);

  return (
    <div className={className}>
      <PhoneFrame width={phoneWidth}>
        <StatusBar phoneWidth={phoneWidth} time={statusTime} batteryPercent={batteryPercent} />
        <div className="flex h-full w-full flex-col">
          <div className="shrink-0" style={{ backgroundColor: WA_BAR_BG, paddingTop: statusBarPad }}>
            <WhatsAppHeader phoneWidth={phoneWidth} />
          </div>
          <div className="min-h-0 flex-1 overflow-hidden" style={{
            backgroundColor: WA_CHAT_BG,
            backgroundImage: "url(/images/whatsapp-doodle.webp)",
            backgroundSize: "140% 140%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",
          }}>
            <ScriptedThread phoneWidth={phoneWidth} messages={messages} isIncomingTyping={isIncomingTyping} />
          </div>
          <div className="shrink-0" style={{ backgroundColor: WA_BAR_BG, paddingBottom: homeIndicatorPad }}>
            <ScriptedInputBar phoneWidth={phoneWidth} inputValue={inputValue} />
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

// HERO_SCRIPTED_SCRIPT mirrors the storybook "Text Only" canonical flow but
// uses the new positioning's content: morning request, user reply, preview
// arrives, user approves. Shows the entire 5-min/day loop with realistic
// typing dynamics — Solara types, sends, you type back, send, Solara types
// again. The loop replays so the visual stays alive in the hero.
const HERO_SCRIPTED_SCRIPT: ChatTurn[] = [
  {
    id: "h1",
    direction: "incoming",
    content: "Morning! \u2615 Need 5 seconds today \u2014 film your espresso machine while it's running",
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

export function WhatsAppScriptedHeroMockup(
  props: Omit<WhatsAppScriptedMockupProps, "script"> & { script?: ChatTurn[] },
) {
  const { script = HERO_SCRIPTED_SCRIPT, options, ...rest } = props;
  return (
    <WhatsAppScriptedMockup
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
