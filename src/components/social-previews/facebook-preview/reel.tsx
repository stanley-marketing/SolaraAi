import { Bookmark, Forward, MessageCircle, Play, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaRenderer } from "../media-renderer";
import { FB_FONT } from "./feed-post";
import { FbMore, FbMusic, FbVerified } from "./icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FacebookReelProps {
  username: string;
  avatarUrl?: string;
  verified?: boolean;
  caption?: string;
  mediaUrl?: string;
  audioTitle?: string;
  showFollow?: boolean;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ReelAvatar({ username, avatarUrl }: { username: string; avatarUrl?: string }) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={username}
        className="rounded-full border-2 border-white object-cover"
        style={{ width: 40, height: 40 }}
      />
    );
  }
  return (
    <div
      className="flex items-center justify-center rounded-full border-2 border-white"
      style={{
        width: 40,
        height: 40,
        background: "rgba(255,255,255,0.2)",
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
      }}
    >
      {username.charAt(0).toUpperCase()}
    </div>
  );
}

function SidebarAction({ icon, label }: { icon: React.ReactNode; label?: string }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center gap-1"
      style={{
        color: "#fff",
        filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.5))",
      }}
    >
      {icon}
      {label && <span style={{ fontSize: 13, fontWeight: 600 }}>{label}</span>}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function FacebookReel({
  username,
  avatarUrl,
  verified,
  caption,
  mediaUrl,
  audioTitle,
  showFollow = true,
  className,
}: FacebookReelProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        fontFamily: FB_FONT,
        aspectRatio: "9/16",
        maxWidth: 340,
        background: "#000",
        borderRadius: 12,
      }}
    >
      {/* Media / placeholder */}
      <div className="absolute inset-0">
        {mediaUrl ? (
          <MediaRenderer src={mediaUrl} alt="Reel content" />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: "#1a1a1a" }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 64,
                height: 64,
                background: "rgba(255,255,255,0.1)",
              }}
            >
              <Play size={32} style={{ color: "rgba(255,255,255,0.4)" }} />
            </div>
          </div>
        )}
      </div>

      {/* Right sidebar */}
      <div
        className="absolute flex flex-col items-center"
        style={{ right: 12, bottom: 120, gap: 20 }}
      >
        <SidebarAction icon={<ThumbsUp size={24} />} />
        <SidebarAction icon={<MessageCircle size={24} />} />
        <SidebarAction icon={<Forward size={24} />} />
        <SidebarAction icon={<Bookmark size={24} />} />
        <SidebarAction icon={<FbMore size={24} />} />
      </div>

      {/* Bottom overlay */}
      <div
        className="absolute right-0 bottom-0 left-0 px-4 pb-4"
        style={{
          background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
          paddingTop: 48,
        }}
      >
        {/* Username row */}
        <div className="flex items-center gap-2">
          <ReelAvatar username={username} avatarUrl={avatarUrl} />
          <span className="truncate" style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>
            {username}
          </span>
          {verified && <FbVerified size={12} />}
          {showFollow && (
            <>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.7)" }}>&middot;</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>Follow</span>
            </>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <p
            className="mt-1.5"
            style={{
              fontSize: 14,
              color: "#fff",
              lineHeight: "18px",
              display: "-webkit-box",
              // biome-ignore lint/style/useNamingConvention: vendor prefix
              WebkitLineClamp: 2,
              // biome-ignore lint/style/useNamingConvention: vendor prefix
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {caption}
          </p>
        )}

        {/* Audio row */}
        {audioTitle && (
          <div className="mt-2 flex items-center gap-1.5">
            <FbMusic size={12} style={{ color: "rgba(255,255,255,0.8)" }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {audioTitle}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export type { FacebookReelProps };
export { FacebookReel };
