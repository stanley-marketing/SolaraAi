import { Image as ImageIcon, MessageCircle, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaRenderer } from "../media-renderer";
import { FbFriends, FbGlobe, FbMore, FbShare, FbVerified } from "./icons";

// ─── Facebook constants ───────────────────────────────────────────────────────

const FB_FONT = 'system-ui, -apple-system, "system-ui", ".SFNSText-Regular", sans-serif';

const FB_COLORS = {
  textPrimary: "#080809",
  textSecondary: "#65686c",
  background: "#ffffff",
  pageBg: "#f2f4f7",
  border: "#e4e6eb",
  blue: "#0064d1",
  iconGray: "#65686c",
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────

interface FacebookFeedPostProps {
  username: string;
  avatarUrl?: string;
  verified?: boolean;
  timestamp?: string;
  privacy?: "public" | "friends";
  caption?: string;
  mediaUrl?: string;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function DefaultAvatar({ username }: { username: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 40,
        height: 40,
        background: "#e4e6eb",
        color: "#65686c",
        fontSize: 16,
        fontWeight: 600,
      }}
    >
      {username.charAt(0).toUpperCase()}
    </div>
  );
}

// ─── Sub-components (exported for reuse) ──────────────────────────────────────

function FbPostHeader({
  username,
  avatarUrl,
  verified,
  timestamp,
  privacy = "public",
}: Pick<FacebookFeedPostProps, "username" | "avatarUrl" | "verified" | "timestamp" | "privacy">) {
  return (
    <div className="flex items-start gap-2 px-4 pt-3 pb-3">
      {/* Avatar */}
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={username}
          className="rounded-full object-cover"
          style={{ width: 40, height: 40 }}
        />
      ) : (
        <DefaultAvatar username={username} />
      )}

      {/* Name + meta row */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-1">
          <span
            className="truncate"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: FB_COLORS.textPrimary,
            }}
          >
            {username}
          </span>
          {verified && <FbVerified size={12} />}
        </div>
        <div className="flex items-center gap-1">
          {timestamp && (
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: FB_COLORS.textSecondary,
              }}
            >
              {timestamp}
            </span>
          )}
          {timestamp && (
            <span style={{ fontSize: 13, color: FB_COLORS.textSecondary }}>&middot;</span>
          )}
          {privacy === "friends" ? (
            <FbFriends size={12} style={{ color: FB_COLORS.textSecondary }} />
          ) : (
            <FbGlobe size={12} style={{ color: FB_COLORS.textSecondary }} />
          )}
        </div>
      </div>

      {/* More menu */}
      <button type="button" className="shrink-0 p-1" style={{ color: FB_COLORS.textSecondary }}>
        <FbMore size={20} />
      </button>
    </div>
  );
}

function FbPostCaption({ caption }: Pick<FacebookFeedPostProps, "caption">) {
  if (!caption) {
    return null;
  }

  const shouldTruncate = caption.length > 180;

  return (
    <div
      className="px-4 pb-3"
      style={{ fontSize: 15, lineHeight: "20px", color: FB_COLORS.textPrimary }}
    >
      {shouldTruncate ? (
        <>
          {caption.slice(0, 180)}...{" "}
          <span
            style={{
              fontWeight: 600,
              color: FB_COLORS.textPrimary,
              cursor: "pointer",
            }}
          >
            See more
          </span>
        </>
      ) : (
        caption
      )}
    </div>
  );
}

function FbPostMedia({ mediaUrl, children }: { mediaUrl?: string; children?: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ minHeight: 200 }}>
      {mediaUrl ? (
        <MediaRenderer src={mediaUrl} alt="Post content" className="w-full object-cover" />
      ) : (
        <div
          className="flex w-full items-center justify-center"
          style={{ background: "#f0f2f5", aspectRatio: "4/5" }}
        >
          <ImageIcon size={48} strokeWidth={1.5} style={{ color: "#bcc0c4" }} />
        </div>
      )}
      {children}
    </div>
  );
}

function FbActionBar() {
  return (
    <div
      className="flex items-center justify-between"
      style={{ padding: "2px 4px", height: 44, color: FB_COLORS.iconGray }}
    >
      <ActionButton icon={<ThumbsUp size={20} />} />
      <ActionButton icon={<MessageCircle size={20} />} />
      <ActionButton icon={<FbShare size={20} />} />
    </div>
  );
}

function ActionButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5"
      style={{ color: FB_COLORS.iconGray }}
    >
      {icon}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function FacebookFeedPost({
  username,
  avatarUrl,
  verified,
  timestamp,
  privacy = "public",
  caption,
  mediaUrl,
  className,
}: FacebookFeedPostProps) {
  return (
    <div
      className={cn("w-full overflow-hidden", className)}
      style={{
        fontFamily: FB_FONT,
        maxWidth: 380,
        background: FB_COLORS.background,
        borderRadius: 12,
        border: `1px solid ${FB_COLORS.border}`,
      }}
    >
      <FbPostHeader
        username={username}
        avatarUrl={avatarUrl}
        verified={verified}
        timestamp={timestamp}
        privacy={privacy}
      />
      <FbPostCaption caption={caption} />
      <FbPostMedia mediaUrl={mediaUrl} />
      <FbActionBar />
    </div>
  );
}

export type { FacebookFeedPostProps };
export {
  DefaultAvatar,
  FacebookFeedPost,
  FB_COLORS,
  FB_FONT,
  FbActionBar,
  FbPostCaption,
  FbPostHeader,
  FbPostMedia,
};
