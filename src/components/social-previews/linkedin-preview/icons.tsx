import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/** LinkedIn "in" badge — small blue square with "in" */
function LiLogo({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" role="img" {...props}>
      <title>LinkedIn</title>
      <rect width="16" height="16" rx="2" fill="#0a66c2" />
      <text
        x="8"
        y="12"
        textAnchor="middle"
        fill="#fff"
        fontSize="10"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        in
      </text>
    </svg>
  );
}

/** Connect icon — person silhouette with a "+" at mid-right */
function LiConnect({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" role="img" {...props}>
      <title>Connect</title>
      {/* Head */}
      <circle cx="8.5" cy="4.5" r="4" />
      {/* Body — same width as head diameter (7), tight to head, flat bottom */}
      <path d="M5 10.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5V20H5V10.5Z" />
      {/* Plus — mid-right */}
      <path
        d="M19 9v5M16.5 11.5h5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Globe/public icon for post visibility */
function LiGlobe({ size = 14, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      {...props}
    >
      <title>Public</title>
      <circle cx="8" cy="8" r="6.5" />
      <ellipse cx="8" cy="8" rx="3" ry="6.5" />
      <line x1="1.5" y1="8" x2="14.5" y2="8" />
      <path d="M2.2 4.5h11.6" />
      <path d="M2.2 11.5h11.6" />
    </svg>
  );
}

/** Like / thumbs up icon (outline, LinkedIn style) */
function LiLike({ size = 20, ...props }: IconProps) {
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
      <title>Like</title>
      <path d="M8 21H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4" />
      <path d="M8 21V11l2.5-6.5a1.5 1.5 0 0 1 1.5-1 2 2 0 0 1 2 2V9h5a2 2 0 0 1 2 2.2l-1.2 7A2 2 0 0 1 17.8 20H8Z" />
    </svg>
  );
}

/** Comment / speech bubble icon (outline, LinkedIn style) */
function LiComment({ size = 20, ...props }: IconProps) {
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
      <title>Comment</title>
      <path d="M12 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2v4l5-4h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7Z" />
      <line x1="8" y1="8.5" x2="16" y2="8.5" />
      <line x1="8" y1="12" x2="13" y2="12" />
    </svg>
  );
}

/** Repost icon — two looping arrows (LinkedIn style) */
function LiRepost({ size = 20, ...props }: IconProps) {
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
      <title>Repost</title>
      <path d="M17 2l3 3-3 3" />
      <path d="M3 11V8a3 3 0 0 1 3-3h14" />
      <path d="M7 22l-3-3 3-3" />
      <path d="M21 13v3a3 3 0 0 1-3 3H4" />
    </svg>
  );
}

/** Send / paper plane icon (outline, LinkedIn style) */
function LiSend({ size = 20, ...props }: IconProps) {
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
      <title>Send</title>
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

export type { IconProps };
export { LiComment, LiConnect, LiGlobe, LiLike, LiLogo, LiRepost, LiSend };
