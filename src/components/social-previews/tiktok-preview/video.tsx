import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MediaRenderer } from "../media-renderer";
import {
  TkBookmark,
  TkComment,
  TkCreate,
  TkFriends,
  TkHeart,
  TkHome,
  TkInbox,
  TkLive,
  TkMusic,
  TkPlay,
  TkProfile,
  TkSearch,
  TkShare,
} from "./icons";

// ─── Constants ────────────────────────────────────────────────────────────────

const TK_FONT =
  'Proxima Nova, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TikTokVideoProps {
  /** Username displayed at the bottom left */
  username: string;
  /** Optional avatar image URL */
  avatarUrl?: string;
  /** Video caption text */
  caption?: string;
  /** Audio/music title shown at the bottom */
  audioTitle?: string;
  /** URL for the media placeholder / cover image */
  mediaUrl?: string;
  /** URL for the spinning music disc album art */
  musicDiscUrl?: string;
  /** Whether to show the "See original" translation link */
  showSeeOriginal?: boolean;
  /** Which top tab is active */
  activeTab?: "explore" | "following" | "foryou";
  /** Whether the "Following" tab has a notification dot */
  followingNotification?: boolean;
  /** Number for inbox badge (0 = no badge) */
  inboxBadge?: number;
  /** Start in paused state */
  defaultPaused?: boolean;
  /** Progress bar position (0–1) */
  progress?: number;
  /** Additional class name */
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function VideoAvatar({ username, avatarUrl }: { username: string; avatarUrl?: string }) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={username}
        className="rounded-full border-2 border-white object-cover"
        style={{ width: 46, height: 46 }}
      />
    );
  }
  return (
    <div
      className="flex items-center justify-center rounded-full border-2 border-white"
      style={{
        width: 46,
        height: 46,
        background: "rgba(255,255,255,0.15)",
        color: "#fff",
        fontSize: 18,
        fontWeight: 700,
      }}
    >
      {username.charAt(0).toUpperCase()}
    </div>
  );
}

function SidebarAction({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center"
      style={{
        color: "#fff",
        filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.6))",
      }}
    >
      {icon}
    </button>
  );
}

function MusicDisc({ musicDiscUrl }: { musicDiscUrl?: string }) {
  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-full"
      style={{
        width: 36,
        height: 36,
        background: musicDiscUrl ? "transparent" : "#333",
        animation: "spin 4s linear infinite",
      }}
    >
      {musicDiscUrl ? (
        <img
          src={musicDiscUrl}
          alt="Album art"
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <div
          className="rounded-full"
          style={{
            width: 12,
            height: 12,
            background: "#666",
            border: "2px solid #1a1a1a",
          }}
        />
      )}
    </div>
  );
}

function TopNavBar({
  activeTab,
  followingNotification,
}: {
  activeTab: "explore" | "following" | "foryou";
  followingNotification: boolean;
}) {
  return (
    <div
      className="absolute top-0 right-0 left-0 z-10 flex items-center justify-between px-3"
      style={{
        paddingTop: 12,
        paddingBottom: 8,
      }}
    >
      {/* LIVE icon */}
      <TkLive size={28} style={{ color: "#fff" }} />

      {/* Center tabs */}
      <div className="flex items-center" style={{ gap: 20 }}>
        <button
          type="button"
          style={{
            fontSize: 16.5,
            fontWeight: activeTab === "explore" ? 700 : 400,
            color: activeTab === "explore" ? "#fff" : "rgba(255,255,255,0.7)",
            position: "relative",
          }}
        >
          Explore
          {activeTab === "explore" && (
            <div
              style={{
                position: "absolute",
                bottom: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 24,
                height: 2.5,
                background: "#fff",
                borderRadius: 2,
              }}
            />
          )}
        </button>
        <button
          type="button"
          style={{
            fontSize: 16.5,
            fontWeight: activeTab === "following" ? 700 : 400,
            color: activeTab === "following" ? "#fff" : "rgba(255,255,255,0.7)",
            position: "relative",
          }}
        >
          Following
          {followingNotification && (
            <div
              style={{
                position: "absolute",
                top: -2,
                right: -7,
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#FE2C55",
              }}
            />
          )}
          {activeTab === "following" && (
            <div
              style={{
                position: "absolute",
                bottom: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 24,
                height: 2.5,
                background: "#fff",
                borderRadius: 2,
              }}
            />
          )}
        </button>
        <button
          type="button"
          style={{
            fontSize: 16.5,
            fontWeight: activeTab === "foryou" ? 700 : 400,
            color: activeTab === "foryou" ? "#fff" : "rgba(255,255,255,0.7)",
            position: "relative",
          }}
        >
          For You
          {activeTab === "foryou" && (
            <div
              style={{
                position: "absolute",
                bottom: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 24,
                height: 2.5,
                background: "#fff",
                borderRadius: 2,
              }}
            />
          )}
        </button>
      </div>

      {/* Search icon */}
      <TkSearch size={24} style={{ color: "#fff" }} />
    </div>
  );
}

function BottomTabBar({ inboxBadge }: { inboxBadge: number }) {
  return (
    <div
      className="absolute right-0 bottom-0 left-0 z-10 grid items-center"
      style={{
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        background: "#000",
        paddingTop: 8,
        paddingBottom: 14,
        borderTop: "0.5px solid rgba(255,255,255,0.15)",
      }}
    >
      <div className="flex flex-col items-center" style={{ gap: 2 }}>
        <TkHome size={22} style={{ color: "#fff" }} />
        <span style={{ fontSize: 10, color: "#fff", fontWeight: 600 }}>Home</span>
      </div>
      <div className="flex flex-col items-center" style={{ gap: 2 }}>
        <TkFriends size={22} style={{ color: "rgba(255,255,255,0.55)" }} />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>Friends</span>
      </div>
      <div className="flex flex-col items-center">
        <TkCreate size={38} />
      </div>
      <div className="flex flex-col items-center" style={{ gap: 2 }}>
        <div className="relative">
          <TkInbox size={22} style={{ color: "rgba(255,255,255,0.55)" }} />
          {inboxBadge > 0 && (
            <div
              className="absolute flex items-center justify-center"
              style={{
                top: -5,
                right: -10,
                minWidth: 16,
                height: 16,
                borderRadius: 8,
                background: "#FE2C55",
                fontSize: 9.5,
                fontWeight: 700,
                color: "#fff",
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              {inboxBadge}
            </div>
          )}
        </div>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>Inbox</span>
      </div>
      <div className="flex flex-col items-center" style={{ gap: 2 }}>
        <TkProfile size={22} style={{ color: "rgba(255,255,255,0.55)" }} />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>Profile</span>
      </div>
    </div>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div
      className="absolute right-0 left-0 z-10"
      style={{ bottom: 50, height: 2, background: "rgba(255,255,255,0.2)" }}
    >
      <div
        style={{
          height: "100%",
          width: `${Math.min(100, Math.max(0, progress * 100))}%`,
          background: "#fff",
          borderRadius: 1,
          position: "relative",
        }}
      >
        {/* Thumb knob */}
        <div
          style={{
            position: "absolute",
            right: -4,
            top: "50%",
            transform: "translateY(-50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#fff",
          }}
        />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function TikTokVideo({
  username,
  avatarUrl,
  caption,
  audioTitle,
  mediaUrl,
  musicDiscUrl,
  showSeeOriginal = false,
  activeTab = "foryou",
  followingNotification = true,
  inboxBadge = 19,
  defaultPaused = false,
  progress = 0.35,
  className,
}: TikTokVideoProps) {
  const [paused, setPaused] = useState(defaultPaused);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTap = useCallback(() => {
    setPaused((prev) => !prev);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        fontFamily: TK_FONT,
        width: "100%",
        height: "100%",
        background: "#000",
        userSelect: "none",
      }}
    >
      {/* Media / placeholder */}
      <div className="absolute inset-0">
        {mediaUrl ? (
          <MediaRenderer src={mediaUrl} alt="Video content" paused={paused} videoRef={videoRef} />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: "#1a1a1a" }}
          />
        )}
      </div>

      {/* Tap overlay to toggle pause/play */}
      <button
        type="button"
        className="absolute inset-0 z-[1] cursor-pointer"
        style={{ background: "transparent", border: "none", outline: "none" }}
        onClick={handleTap}
        aria-label={paused ? "Play" : "Pause"}
      />

      {/* Pause overlay — large semi-transparent play icon */}
      {paused && (
        <div
          className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center"
          aria-hidden="true"
        >
          <TkPlay size={72} style={{ color: "rgba(255,255,255,0.6)" }} />
        </div>
      )}

      {/* Top nav */}
      <div className="z-[5]">
        <TopNavBar activeTab={activeTab} followingNotification={followingNotification} />
      </div>

      {/* Right sidebar */}
      <div
        className="absolute z-[5] flex flex-col items-center"
        style={{ right: 10, bottom: 68, gap: 18 }}
      >
        {/* Avatar with follow badge */}
        <div className="relative mb-2">
          <VideoAvatar username={username} avatarUrl={avatarUrl} />
          <div
            className="absolute flex items-center justify-center rounded-full"
            style={{
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 20,
              height: 20,
              background: "#FE2C55",
              border: "none",
            }}
          >
            <svg width={12} height={12} viewBox="0 0 12 12" fill="#fff" role="img">
              <title>Follow</title>
              <path d="M6 1v10M1 6h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <SidebarAction icon={<TkHeart size={32} />} />
        <SidebarAction icon={<TkComment size={32} />} />
        <SidebarAction icon={<TkBookmark size={32} />} />
        <SidebarAction icon={<TkShare size={32} />} />

        {/* Music disc */}
        <MusicDisc musicDiscUrl={musicDiscUrl} />
      </div>

      {/* Bottom left overlay: username + caption + audio */}
      <div
        className="absolute bottom-0 left-0 z-[5] px-4"
        style={{
          paddingBottom: 68,
          paddingRight: 64,
        }}
      >
        {/* Username */}
        <p
          className="truncate"
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#fff",
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            marginBottom: 4,
          }}
        >
          {username}
        </p>

        {/* Caption */}
        {caption && (
          <p
            style={{
              fontSize: 14,
              color: "#fff",
              lineHeight: "19px",
              textShadow: "0 1px 2px rgba(0,0,0,0.4)",
              display: "-webkit-box",
              // biome-ignore lint/style/useNamingConvention: vendor prefix
              WebkitLineClamp: 2,
              // biome-ignore lint/style/useNamingConvention: vendor prefix
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              marginBottom: 4,
            }}
          >
            {caption}
          </p>
        )}

        {/* See original */}
        {showSeeOriginal && (
          <p
            style={{
              fontSize: 13.5,
              color: "#fff",
              fontWeight: 500,
              textShadow: "0 1px 2px rgba(0,0,0,0.4)",
              marginBottom: 6,
            }}
          >
            See original
          </p>
        )}

        {/* Audio row */}
        {audioTitle && (
          <div className="flex items-center gap-1.5">
            <TkMusic size={12} style={{ color: "#fff" }} />
            <p
              style={{
                fontSize: 13,
                color: "#fff",
                fontWeight: 400,
                textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {audioTitle}
            </p>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <ProgressBar progress={progress} />

      {/* Bottom tab bar */}
      <BottomTabBar inboxBadge={inboxBadge} />
    </div>
  );
}

export type { TikTokVideoProps };
export { TikTokVideo, TK_FONT };
