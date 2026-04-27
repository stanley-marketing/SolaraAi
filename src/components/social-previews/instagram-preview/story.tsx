import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaRenderer } from "../media-renderer";
import { IG_FONT } from "./feed-post";
import { IgHeart, IgMore, IgMute, IgPause, IgShare, IgVerified } from "./icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface InstagramStoryProps {
  username: string;
  avatarUrl?: string;
  verified?: boolean;
  timestamp?: string;
  mediaUrl?: string;
  storyCount?: number;
  currentStory?: number;
  className?: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBars({ count, current }: { count: number; current: number }) {
  return (
    <div className="flex w-full gap-1 px-2 pt-2">
      {Array.from({ length: count }).map((_, i) => {
        const key = `bar-${i}`;
        return (
          <div
            key={key}
            className="h-0.5 flex-1 rounded-full"
            style={{
              background: i <= current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
            }}
          />
        );
      })}
    </div>
  );
}

function StoryHeader({
  username,
  avatarUrl,
  verified,
  timestamp,
}: Pick<InstagramStoryProps, "username" | "avatarUrl" | "verified" | "timestamp">) {
  return (
    <div className="flex items-center gap-2 px-3 pt-2">
      {/* Avatar */}
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={username}
          className="rounded-full border border-white/30 object-cover"
          style={{ width: 28, height: 28 }}
        />
      ) : (
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: 28,
            height: 28,
            background: "rgba(255,255,255,0.2)",
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          {username.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Username + timestamp */}
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
        <span className="truncate" style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>
          {username}
        </span>
        {verified && <IgVerified size={12} />}
        {timestamp && (
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{timestamp}</span>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3" style={{ color: "#fff" }}>
        <button type="button">
          <IgMute size={16} />
        </button>
        <button type="button">
          <IgPause size={16} />
        </button>
        <button type="button">
          <IgMore size={20} />
        </button>
      </div>
    </div>
  );
}

function StoryReplyBar({ username }: { username: string }) {
  return (
    <div className="flex items-center gap-3 px-3 pb-5">
      <div
        className="flex h-10 flex-1 items-center rounded-full px-4"
        style={{ border: "1px solid rgba(255,255,255,0.4)" }}
      >
        <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Reply to {username}...</span>
      </div>
      <button type="button" style={{ color: "#fff" }}>
        <IgHeart size={24} />
      </button>
      <button type="button" style={{ color: "#fff" }}>
        <IgShare size={24} />
      </button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function InstagramStory({
  username,
  avatarUrl,
  verified,
  timestamp,
  mediaUrl,
  storyCount = 1,
  currentStory = 0,
  className,
}: InstagramStoryProps) {
  return (
    <div
      className={cn("relative flex flex-col overflow-hidden", className)}
      style={{
        fontFamily: IG_FONT,
        aspectRatio: "9/16",
        maxWidth: 340,
        background: "#000",
        borderRadius: 12,
        border: "1px solid #dbdbdb",
      }}
    >
      {/* Media / Placeholder (absolute behind overlays) */}
      <div className="absolute inset-0">
        {mediaUrl ? (
          <MediaRenderer src={mediaUrl} alt="Story content" />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: "#262626" }}
          >
            <ImageIcon size={48} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.2)" }} />
          </div>
        )}
      </div>

      {/* Top gradient for readability */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: 100,
          background: "linear-gradient(rgba(0,0,0,0.3), transparent)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Progress bars */}
        <ProgressBars count={storyCount} current={currentStory} />

        {/* Header */}
        <StoryHeader
          username={username}
          avatarUrl={avatarUrl}
          verified={verified}
          timestamp={timestamp}
        />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Reply bar at bottom */}
        <StoryReplyBar username={username} />
      </div>
    </div>
  );
}

export type { InstagramStoryProps };
export { InstagramStory };
