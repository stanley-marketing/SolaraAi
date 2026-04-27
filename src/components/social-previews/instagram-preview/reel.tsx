import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { MediaRenderer } from "../media-renderer";
import { IG_FONT } from "./feed-post";
import { IgBookmark, IgComment, IgHeart, IgMore, IgShare, IgVerified } from "./icons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface InstagramReelProps {
  username: string;
  avatarUrl?: string;
  verified?: boolean;
  caption?: string;
  mediaUrl?: string;
  audioTitle?: string;
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
        style={{ width: 32, height: 32 }}
      />
    );
  }
  return (
    <div
      className="flex items-center justify-center rounded-full border-2 border-white"
      style={{
        width: 32,
        height: 32,
        background: "rgba(255,255,255,0.2)",
        color: "#fff",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      {username.charAt(0).toUpperCase()}
    </div>
  );
}

function SidebarButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center"
      style={{
        color: "#fff",
        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))",
      }}
    >
      {children}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function InstagramReel({
  username,
  avatarUrl,
  verified,
  caption,
  mediaUrl,
  audioTitle,
  className,
}: InstagramReelProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        fontFamily: IG_FONT,
        width: "100%",
        height: "100%",
        background: "#000",
      }}
    >
      {/* Media / Placeholder (absolute fill) */}
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

      {/* Right sidebar actions */}
      <div
        className="absolute flex flex-col items-center"
        style={{ right: 12, bottom: 100, gap: 20 }}
      >
        <SidebarButton>
          <IgHeart size={28} />
        </SidebarButton>
        <SidebarButton>
          <IgComment size={28} />
        </SidebarButton>
        <SidebarButton>
          <IgShare size={28} />
        </SidebarButton>
        <SidebarButton>
          <IgBookmark size={28} />
        </SidebarButton>
        <SidebarButton>
          <IgMore size={28} />
        </SidebarButton>
      </div>

      {/* Bottom overlay: username + caption */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 pb-5"
        style={{
          background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
          paddingTop: 40,
        }}
      >
        <div className="flex items-center gap-2">
          <ReelAvatar username={username} avatarUrl={avatarUrl} />
          <span className="truncate" style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
            {username}
          </span>
          {verified && <IgVerified size={12} />}
        </div>
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
        {audioTitle && (
          <div className="mt-2 flex items-center gap-1.5">
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{audioTitle}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export type { InstagramReelProps };
export { InstagramReel };
