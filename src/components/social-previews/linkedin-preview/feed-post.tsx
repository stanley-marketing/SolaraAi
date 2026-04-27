import { Image as ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MediaRenderer } from "../media-renderer";
import { LiComment, LiConnect, LiGlobe, LiLike, LiRepost, LiSend } from "./icons";

// ─── Constants ────────────────────────────────────────────────────────────────

const LI_FONT = '-apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const LI_COLORS = {
  bg: "#ffffff",
  text: "#191919",
  textSecondary: "#666666",
  border: "#e0e0e0",
  blue: "#0a66c2",
  actionText: "#666666",
  actionHover: "#f3f6f8",
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface LinkedInFeedPostProps {
  /** Display name of the poster */
  name: string;
  /** Headline / subtitle (job title, etc.) */
  headline?: string;
  /** Connection degree (e.g. "2nd", "3rd") */
  degree?: string;
  /** Timestamp (e.g. "1w", "2d", "3h") */
  timestamp?: string;
  /** Optional avatar image URL */
  avatarUrl?: string;
  /** Post caption / body text */
  caption?: string;
  /** Number of visible caption lines before truncation (default 3) */
  captionLines?: number;
  /** Whether to show "Show translation" link */
  showTranslation?: boolean;
  /** Media URL (image or video) */
  mediaUrl?: string;
  /** Aspect ratio for placeholder when no mediaUrl (default "landscape") */
  aspectRatio?: "landscape" | "square" | "portrait";
  /** Additional class name */
  className?: string;
}

// ─── Aspect map ───────────────────────────────────────────────────────────────

const ASPECT_MAP: Record<string, string> = {
  landscape: "1.91/1",
  square: "1/1",
  portrait: "4/5",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function PostAvatar({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        className="rounded-full object-cover"
        style={{ width: 48, height: 48 }}
      />
    );
  }
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 48,
        height: 48,
        background: LI_COLORS.blue,
        color: "#fff",
        fontSize: 18,
        fontWeight: 700,
      }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function PostHeader({
  name,
  headline,
  degree,
  timestamp,
  avatarUrl,
}: Pick<LinkedInFeedPostProps, "name" | "headline" | "degree" | "timestamp" | "avatarUrl">) {
  return (
    <div className="flex items-start gap-2 px-4 pt-3 pb-3">
      <PostAvatar name={name} avatarUrl={avatarUrl} />

      <div className="min-w-0 flex-1">
        {/* Name row */}
        <div className="flex items-center gap-1.5">
          <span
            className="truncate"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: LI_COLORS.text,
              lineHeight: "20px",
            }}
          >
            {name}
          </span>
          {degree && (
            <span style={{ fontSize: 14, color: LI_COLORS.textSecondary }}>&middot; {degree}</span>
          )}
        </div>

        {/* Headline */}
        {headline && (
          <p
            style={{
              fontSize: 12,
              color: LI_COLORS.textSecondary,
              lineHeight: "16px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {headline}
          </p>
        )}

        {/* Timestamp + globe */}
        <div className="flex items-center gap-1">
          {timestamp && (
            <span style={{ fontSize: 12, color: LI_COLORS.textSecondary }}>{timestamp}</span>
          )}
          {timestamp && (
            <span style={{ fontSize: 12, color: LI_COLORS.textSecondary }}>&middot;</span>
          )}
          <LiGlobe size={12} style={{ color: LI_COLORS.textSecondary }} />
        </div>
      </div>

      {/* Connect button */}
      <button
        type="button"
        className="flex items-center gap-1 rounded-full px-3 py-1"
        style={{
          color: LI_COLORS.blue,
          fontSize: 14,
          fontWeight: 600,
          border: "none",
          background: "transparent",
        }}
      >
        <LiConnect size={18} style={{ color: LI_COLORS.blue }} />
        <span>Connect</span>
      </button>
    </div>
  );
}

function PostCaption({
  caption,
  captionLines,
  showTranslation,
}: Pick<LinkedInFeedPostProps, "caption" | "captionLines" | "showTranslation">) {
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-measure when caption text changes
  useEffect(() => {
    const el = textRef.current;
    if (el && !expanded) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [expanded, caption]);

  if (!caption) {
    return null;
  }

  const lines = captionLines ?? 3;

  return (
    <div className="px-4 pt-2 pb-3">
      <div className="relative">
        <div
          ref={textRef}
          style={{
            fontSize: 14,
            color: LI_COLORS.text,
            lineHeight: "20px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            ...(expanded
              ? {}
              : {
                  display: "-webkit-box",
                  // biome-ignore lint/style/useNamingConvention: vendor prefix
                  WebkitLineClamp: lines,
                  // biome-ignore lint/style/useNamingConvention: vendor prefix
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }),
          }}
        >
          {caption}
        </div>

        {/* "...more" button overlaid at end of clamped text */}
        {!expanded && isClamped && (
          <button
            type="button"
            onClick={() => {
              setExpanded(true);
            }}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              background: `linear-gradient(to right, transparent, ${LI_COLORS.bg} 30%)`,
              paddingLeft: 24,
              fontSize: 14,
              fontWeight: 600,
              color: LI_COLORS.textSecondary,
              lineHeight: "20px",
              cursor: "pointer",
            }}
          >
            ...more
          </button>
        )}
      </div>

      {showTranslation && (
        <button
          type="button"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: LI_COLORS.blue,
            marginTop: 4,
            cursor: "pointer",
          }}
        >
          Show translation
        </button>
      )}
    </div>
  );
}

function PostMedia({
  mediaUrl,
  aspectRatio = "landscape",
}: Pick<LinkedInFeedPostProps, "mediaUrl" | "aspectRatio">) {
  return (
    <div className="w-full">
      {mediaUrl ? (
        <MediaRenderer src={mediaUrl} alt="Post content" className="w-full object-cover" />
      ) : (
        <div
          className="flex w-full items-center justify-center"
          style={{
            background: "#f3f6f8",
            aspectRatio: ASPECT_MAP[aspectRatio],
          }}
        >
          <ImageIcon size={48} strokeWidth={1.5} style={{ color: "#bcc0c4" }} />
        </div>
      )}
    </div>
  );
}

function ActionBar() {
  return (
    <div
      className="flex items-center justify-around border-t px-2 py-1.5"
      style={{ borderColor: LI_COLORS.border }}
    >
      <ActionButton icon={<LiLike size={22} />} label="Like" />
      <ActionButton icon={<LiComment size={22} />} label="Comment" />
      <ActionButton icon={<LiRepost size={22} />} label="Repost" />
      <ActionButton icon={<LiSend size={22} />} label="Send" />
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center gap-0.5 rounded px-4 py-2"
      style={{ color: LI_COLORS.actionText, fontSize: 13, fontWeight: 700 }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function LinkedInFeedPost({
  name,
  headline,
  degree,
  timestamp,
  avatarUrl,
  caption,
  captionLines,
  showTranslation = false,
  mediaUrl,
  aspectRatio = "landscape",
  className,
}: LinkedInFeedPostProps) {
  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        fontFamily: LI_FONT,
        maxWidth: 380,
        background: LI_COLORS.bg,
        border: `1px solid ${LI_COLORS.border}`,
        borderRadius: 8,
      }}
    >
      {/* Header */}
      <PostHeader
        name={name}
        headline={headline}
        degree={degree}
        timestamp={timestamp}
        avatarUrl={avatarUrl}
      />

      {/* Caption */}
      <PostCaption
        caption={caption}
        captionLines={captionLines}
        showTranslation={showTranslation}
      />

      {/* Media */}
      <PostMedia mediaUrl={mediaUrl} aspectRatio={aspectRatio} />

      {/* Action bar */}
      <ActionBar />
    </div>
  );
}

export type { LinkedInFeedPostProps };
export { ActionBar, LI_COLORS, LI_FONT, LinkedInFeedPost, PostAvatar, PostCaption, PostHeader };
