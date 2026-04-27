import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaRenderer } from "../media-renderer";
import { IgBookmark, IgComment, IgHeart, IgMore, IgShare, IgVerified } from "./icons";

// ─── Instagram color constants ────────────────────────────────────────────────

const IG_FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

// ─── Types ────────────────────────────────────────────────────────────────────

interface InstagramFeedPostProps {
  username: string;
  avatarUrl?: string;
  verified?: boolean;
  location?: string;
  timestamp?: string;
  caption?: string;
  mediaUrl?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ASPECT_MAP = {
  square: "1/1",
  portrait: "4/5",
  landscape: "1.91/1",
} as const;

function DefaultAvatar({ username }: { username: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 32,
        height: 32,
        background: "#dbdbdb",
        color: "#737373",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      {username.charAt(0).toUpperCase()}
    </div>
  );
}

// ─── Sub-components (exported for Carousel reuse) ─────────────────────────────

function PostHeader({
  username,
  avatarUrl,
  verified,
  location,
  timestamp,
}: Pick<InstagramFeedPostProps, "username" | "avatarUrl" | "verified" | "location" | "timestamp">) {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5">
      {/* Avatar */}
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={username}
          className="rounded-full object-cover"
          style={{ width: 32, height: 32 }}
        />
      ) : (
        <DefaultAvatar username={username} />
      )}

      {/* Username + meta */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-1">
          <span className="truncate" style={{ fontSize: 14, fontWeight: 600, color: "#000" }}>
            {username}
          </span>
          {verified && <IgVerified size={12} />}
          {timestamp && (
            <>
              <span style={{ color: "#737373", fontSize: 14 }}>&middot;</span>
              <span style={{ color: "#737373", fontSize: 14 }}>{timestamp}</span>
            </>
          )}
        </div>
        {location && (
          <span style={{ fontSize: 12, color: "#000", lineHeight: "16px" }}>{location}</span>
        )}
      </div>

      {/* More menu */}
      <button type="button" className="shrink-0" style={{ color: "#000" }}>
        <IgMore size={24} />
      </button>
    </div>
  );
}

function PostMedia({
  mediaUrl,
  aspectRatio = "portrait",
  children,
}: {
  mediaUrl?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-full" style={{ aspectRatio: ASPECT_MAP[aspectRatio] }}>
      {mediaUrl ? (
        <MediaRenderer src={mediaUrl} alt="Post content" />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ background: "#efefef" }}
        >
          <ImageIcon size={48} strokeWidth={1.5} style={{ color: "#c7c7c7" }} />
        </div>
      )}
      {children}
    </div>
  );
}

function PostActions() {
  return (
    <div className="flex items-center px-3 py-2" style={{ gap: 16 }}>
      <button type="button" style={{ color: "#000" }}>
        <IgHeart size={24} />
      </button>
      <button type="button" style={{ color: "#000" }}>
        <IgComment size={24} />
      </button>
      <button type="button" style={{ color: "#000" }}>
        <IgShare size={24} />
      </button>
      <button type="button" className="ml-auto" style={{ color: "#000" }}>
        <IgBookmark size={24} />
      </button>
    </div>
  );
}

function PostCaption({
  username,
  verified,
  caption,
}: Pick<InstagramFeedPostProps, "username" | "verified" | "caption">) {
  if (!caption) {
    return null;
  }
  return (
    <div className="px-3 pb-4" style={{ fontSize: 14, lineHeight: "18px", color: "#000" }}>
      <span style={{ fontWeight: 600 }}>{username}</span>
      {verified && (
        <span className="ml-1 inline-flex -translate-y-px align-middle">
          <IgVerified size={12} />
        </span>
      )}
      <span className="ml-1">{caption}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function InstagramFeedPost({
  username,
  avatarUrl,
  verified,
  location,
  timestamp,
  caption,
  mediaUrl,
  aspectRatio = "portrait",
  className,
}: InstagramFeedPostProps) {
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
      <PostMedia mediaUrl={mediaUrl} aspectRatio={aspectRatio} />
      <PostActions />
      <PostCaption username={username} verified={verified} caption={caption} />
    </div>
  );
}

export type { InstagramFeedPostProps };
export { ASPECT_MAP, IG_FONT, InstagramFeedPost, PostActions, PostCaption, PostHeader, PostMedia };
