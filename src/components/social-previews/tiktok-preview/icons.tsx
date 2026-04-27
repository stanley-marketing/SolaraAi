import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/** TikTok heart icon — rounded filled heart */
function TkHeart({ size = 28, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <title>Like</title>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

/** TikTok comment bubble — filled with three dots inside */
function TkComment({ size = 28, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <title>Comments</title>
      <path d="M12 2C6.477 2 2 5.823 2 10.5c0 2.592 1.34 4.923 3.448 6.558L4.2 21.6a.75.75 0 0 0 1.134.643l4.053-2.43A11.375 11.375 0 0 0 12 20c5.523 0 10-3.823 10-8.5S17.523 2 12 2Z" />
      <circle cx="8" cy="10.5" r="1.25" fill="#000" />
      <circle cx="12" cy="10.5" r="1.25" fill="#000" />
      <circle cx="16" cy="10.5" r="1.25" fill="#000" />
    </svg>
  );
}

/** TikTok bookmark — flag/ribbon shape */
function TkBookmark({ size = 28, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <title>Save</title>
      <path d="M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v18.382a.5.5 0 0 1-.776.416L12 17.882l-6.224 3.916A.5.5 0 0 1 5 21.382V3Z" />
    </svg>
  );
}

/** TikTok share — curved forward arrow */
function TkShare({ size = 28, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <title>Share</title>
      <path d="M13.513 3.096a.75.75 0 0 0-1.263.546v4.37C6.625 8.24 2.5 11.712 2.5 17.5a.75.75 0 0 0 1.37.422c1.476-2.163 3.882-3.583 8.38-3.907v4.127a.75.75 0 0 0 1.263.546l8.25-7.5a.75.75 0 0 0 0-1.092l-8.25-7Z" />
    </svg>
  );
}

/** TikTok music note — for audio label */
function TkMusic({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" role="img" {...props}>
      <title>Audio</title>
      <path d="M13.5 1.13a1 1 0 0 0-1.192-.98l-7 1.556A1 1 0 0 0 4.5 2.686V11.5a2.5 2.5 0 1 0 2-2.45V4.847l5-1.111V9.5a2.5 2.5 0 1 0 2-2.45V1.13Z" />
    </svg>
  );
}

/** LIVE badge icon — TV/camera with "LIVE" text */
function TkLive({ size = 28, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" role="img" {...props}>
      <title>LIVE</title>
      {/* Rounded TV body */}
      <rect
        x="3"
        y="9"
        width="26"
        height="19"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Rabbit-ear antenna splaying outward from center */}
      <path d="M13 9L9 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M19 9L23 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        LIVE
      </text>
    </svg>
  );
}

/** Search magnifying glass */
function TkSearch({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      {...props}
    >
      <title>Search</title>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

/** TikTok + create button (the distinctive split-color button) */
function TkCreate({ size = 36, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={(size * 30) / 52}
      viewBox="0 0 52 30"
      fill="none"
      role="img"
      {...props}
    >
      <title>Create</title>
      {/* Cyan background layer (right-shifted) */}
      <rect x="8" y="0" width="42" height="30" rx="8" fill="#25F4EE" />
      {/* Pink background layer (left-shifted) */}
      <rect x="2" y="0" width="42" height="30" rx="8" fill="#FE2C55" />
      {/* White center rectangle */}
      <rect x="6" y="0" width="40" height="30" rx="8" fill="#fff" />
      {/* Plus sign */}
      <path d="M26 10v10M21 15h10" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Home icon (filled) for tab bar */
function TkHome({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <title>Home</title>
      <path d="M12.496 3.13a.75.75 0 0 0-.992 0l-8.25 7.25A.75.75 0 0 0 3.75 11.5h1.5v8.25c0 .414.336.75.75.75h3.75a.75.75 0 0 0 .75-.75v-4.5h3v4.5c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75V11.5h1.5a.75.75 0 0 0 .496-1.12l-8.25-7.25Z" />
    </svg>
  );
}

/** Friends icon (two people) for tab bar */
function TkFriends({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      {...props}
    >
      <title>Friends</title>
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2 19.5c0-3.314 3.134-6 7-6s7 2.686 7 6" />
      <circle cx="17.5" cy="7.5" r="2.5" />
      <path d="M18 13.5c2.761 0 5 2.239 5 5" />
    </svg>
  );
}

/** Inbox/chat icon for tab bar — TikTok-style square speech bubble with bottom notch and dash */
function TkInbox({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      role="img"
      {...props}
    >
      <title>Inbox</title>
      {/* Square bubble with pointed bottom-center notch */}
      <path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5l-3 3.5L9 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      {/* Single horizontal dash inside */}
      <line x1="9" y1="10" x2="15" y2="10" strokeLinecap="round" />
    </svg>
  );
}

/** Profile/person icon for tab bar */
function TkProfile({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      {...props}
    >
      <title>Profile</title>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" />
    </svg>
  );
}

/** Play triangle (center overlay when paused) */
function TkPlay({ size = 72, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="currentColor" role="img" {...props}>
      <title>Play</title>
      <path d="M26 16.608v38.784a2 2 0 0 0 3.04 1.708l30.16-19.392a2 2 0 0 0 0-3.416L29.04 14.9A2 2 0 0 0 26 16.608Z" />
    </svg>
  );
}

export type { IconProps };
export {
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
};
