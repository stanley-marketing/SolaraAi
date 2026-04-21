"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type PixelData = {
  x: number;
  y: number;
  r: number;
  color: string;
};

type PlaceholdersAndVanishInputProps = {
  placeholders: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  ariaLabel?: string;
  cycleIntervalMs?: number;
  disabled?: boolean;
};

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
  className,
  inputClassName,
  buttonClassName,
  ariaLabel,
  cycleIntervalMs = 3000,
  disabled = false,
}: PlaceholdersAndVanishInputProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAnimation = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, cycleIntervalMs);
  }, [placeholders.length, cycleIntervalMs]);

  useEffect(() => {
    startAnimation();

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else {
        startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [startAnimation]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<PixelData[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const pixels: PixelData[] = [];

    for (let t = 0; t < 800; t++) {
      const rowStart = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        const idx = rowStart + 4 * n;
        if (
          pixelData[idx] !== 0 &&
          pixelData[idx + 1] !== 0 &&
          pixelData[idx + 2] !== 0
        ) {
          pixels.push({
            x: n,
            y: t,
            r: 1,
            color: `rgba(${pixelData[idx]}, ${pixelData[idx + 1]}, ${pixelData[idx + 2]}, ${pixelData[idx + 3]})`,
          });
        }
      }
    }

    newDataRef.current = pixels;
  }, [value]);

  useEffect(() => {
    draw();
  }, [draw]);

  const animate = useCallback(
    (start: number) => {
      const animateFrame = (pos = 0) => {
        requestAnimationFrame(() => {
          const nextPixels: PixelData[] = [];
          for (let i = 0; i < newDataRef.current.length; i++) {
            const current = newDataRef.current[i];
            if (!current) continue;
            if (current.x < pos) {
              nextPixels.push(current);
            } else {
              if (current.r <= 0) {
                current.r = 0;
                continue;
              }
              current.x += Math.random() > 0.5 ? 1 : -1;
              current.y += Math.random() > 0.5 ? 1 : -1;
              current.r -= 0.05 * Math.random();
              nextPixels.push(current);
            }
          }
          newDataRef.current = nextPixels;
          const ctx = canvasRef.current?.getContext("2d");
          if (ctx) {
            ctx.clearRect(pos, 0, 800, 800);
            for (const p of newDataRef.current) {
              if (p.x > pos) {
                ctx.beginPath();
                ctx.rect(p.x, p.y, p.r, p.r);
                ctx.fillStyle = p.color;
                ctx.strokeStyle = p.color;
                ctx.stroke();
              }
            }
          }
          if (newDataRef.current.length > 0) {
            animateFrame(pos - 8);
          } else {
            setValue("");
            setAnimating(false);
          }
        });
      };
      animateFrame(start);
    },
    [],
  );

  const vanishAndSubmit = useCallback(() => {
    const inputValue = inputRef.current?.value ?? "";
    if (!inputValue || !inputRef.current) return;
    setAnimating(true);
    draw();
    const maxX = newDataRef.current.reduce(
      (prev, current) => (current.x > prev ? current.x : prev),
      0,
    );
    animate(maxX);
  }, [draw, animate]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating && !disabled) {
      vanishAndSubmit();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disabled) return;
    vanishAndSubmit();
    onSubmit?.(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={[
        "relative mx-auto flex h-14 w-full max-w-[520px] items-center overflow-hidden rounded-full border border-line bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] transition-colors",
        value ? "bg-[#fafafa]" : "",
        className ?? "",
      ].join(" ")}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={[
          "pointer-events-none absolute left-4 top-[20%] origin-top-left scale-50 transform pr-20 text-base",
          "filter invert-[1]",
          animating ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
      <input
        ref={inputRef}
        type="url"
        value={value}
        aria-label={ariaLabel ?? "Your website URL"}
        autoComplete="url"
        inputMode="url"
        disabled={disabled}
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange?.(e);
          }
        }}
        onKeyDown={handleKeyDown}
        className={[
          "relative z-10 h-full w-full min-w-0 flex-1 border-none bg-transparent pl-5 pr-28 text-sm text-ink-900 focus:outline-none focus:ring-0 sm:pl-6 sm:pr-48 sm:text-[0.95rem]",
          animating ? "text-transparent" : "",
          inputClassName ?? "",
        ].join(" ")}
        style={{ fontFamily: "var(--font-body)" }}
      />

      <button
        type="submit"
        disabled={disabled}
        aria-label="Scan my website"
        className={[
          "absolute right-1.5 top-1/2 z-10 inline-flex h-11 -translate-y-1/2 items-center gap-2 rounded-full bg-ink-900 px-4 text-sm font-medium tracking-[0.02em] text-white transition-colors hover:bg-gray-700 sm:px-5",
          buttonClassName ?? "",
        ].join(" ")}
      >
        <span className="hidden sm:inline">Scan my website</span>
        <span className="sm:hidden">Scan</span>
        <ArrowRight size={16} aria-hidden="true" />
      </button>

      <div className="pointer-events-none absolute inset-0 flex items-center rounded-full">
        <AnimatePresence mode="wait">
          {!value && !animating && (
            <motion.p
              key={`current-placeholder-${currentPlaceholder}`}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="w-[calc(100%-7rem)] truncate pl-5 text-left text-sm text-ink-700/50 sm:w-[calc(100%-12rem)] sm:pl-6 sm:text-[0.95rem]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {placeholders[currentPlaceholder] ?? ""}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
