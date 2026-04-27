import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MediaRenderer } from "../media-renderer";
import {
  ASPECT_MAP,
  IG_FONT,
  type InstagramFeedPostProps,
  PostActions,
  PostCaption,
  PostHeader,
} from "./feed-post";
import { IgChevronLeft, IgChevronRight } from "./icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface InstagramCarouselProps extends InstagramFeedPostProps {
  /** Number of slides in the carousel */
  slideCount?: number;
  /** Currently active slide (0-indexed) */
  currentSlide?: number;
  /** Called when user navigates slides */
  onSlideChange?: (index: number) => void;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function DotIndicators({ count, current }: { count: number; current: number }) {
  return (
    <div className="flex items-center justify-center gap-1 py-2">
      {Array.from({ length: count }).map((_, i) => {
        const key = `dot-${i}`;
        return (
          <div
            key={key}
            className="rounded-full transition-colors"
            style={{
              width: 6,
              height: 6,
              background: i === current ? "#0095f6" : "#a8a8a8",
            }}
          />
        );
      })}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function InstagramCarousel({
  username,
  avatarUrl,
  verified,
  location,
  timestamp,
  caption,
  mediaUrl,
  aspectRatio = "portrait",
  slideCount = 3,
  currentSlide: controlledSlide,
  onSlideChange,
  className,
}: InstagramCarouselProps) {
  const [internalSlide, setInternalSlide] = useState(0);
  const current = controlledSlide ?? internalSlide;
  const total = Math.max(1, slideCount);

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setInternalSlide(clamped);
    onSlideChange?.(clamped);
  }

  return (
    <div
      className={cn("w-full overflow-hidden", className)}
      style={{
        fontFamily: IG_FONT,
        maxWidth: 380,
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #dbdbdb",
      }}
    >
      <PostHeader
        username={username}
        avatarUrl={avatarUrl}
        verified={verified}
        location={location}
        timestamp={timestamp}
      />

      {/* Carousel media area */}
      <div className="group relative w-full" style={{ aspectRatio: ASPECT_MAP[aspectRatio] }}>
        {mediaUrl ? (
          <MediaRenderer src={mediaUrl} alt="Carousel content" />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: "#efefef" }}
          >
            <ImageIcon size={48} strokeWidth={1.5} style={{ color: "#c7c7c7" }} />
          </div>
        )}

        {/* Slide counter badge */}
        <div
          className="absolute rounded-full px-2 py-1"
          style={{
            top: 12,
            right: 12,
            background: "rgba(26,26,26,0.8)",
            color: "#fff",
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          {current + 1}/{total}
        </div>

        {/* Left chevron */}
        {current > 0 && (
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="absolute left-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              width: 30,
              height: 30,
              background: "rgba(255,255,255,0.85)",
              color: "#000",
            }}
          >
            <IgChevronLeft size={16} />
          </button>
        )}

        {/* Right chevron */}
        {current < total - 1 && (
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              width: 30,
              height: 30,
              background: "rgba(255,255,255,0.85)",
              color: "#000",
            }}
          >
            <IgChevronRight size={16} />
          </button>
        )}
      </div>

      <PostActions />

      {/* Dot indicators */}
      <DotIndicators count={total} current={current} />

      <PostCaption username={username} verified={verified} caption={caption} />
    </div>
  );
}

export type { InstagramCarouselProps };
export { InstagramCarousel };
