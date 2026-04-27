import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/** Forward-arrow / share icon */
function FbShare({ size = 20, ...props }: IconProps) {
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
      <title>Share</title>
      <path d="M12.863 3.156A.504.504 0 0 0 12 3.51v4.492a1 1 0 0 1-1 1h-.5c-2.92 0-4.997 1.22-6.376 3.093-1.21 1.644-1.912 3.838-2.083 6.235a8.385 8.385 0 0 1 2.89-2.255c1.514-.722 3.347-1.072 5.569-1.072h.5a1 1 0 0 1 1 1v4.492a.504.504 0 0 0 .863.356l8.637-8.637a.5.5 0 0 0 0-.707l-8.637-8.501Z" />
    </svg>
  );
}

/** Three horizontal dots (more menu) — feed & reel */
function FbMore({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" role="img" {...props}>
      <title>More options</title>
      <circle cx="4" cy="10" r="2" />
      <circle cx="10" cy="10" r="2" />
      <circle cx="16" cy="10" r="2" />
    </svg>
  );
}

/** Blue checkmark badge */
function FbVerified({ size = 12, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" role="img" {...props}>
      <title>Verified account</title>
      <circle cx="6" cy="6" r="6" fill="#0064d1" />
      <path
        d="M8.854 4.354a.5.5 0 0 0-.708-.708L5.5 6.293 3.854 4.646a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l3-3Z"
        fill="#fff"
      />
    </svg>
  );
}

/** Globe icon — "Shared with Public" privacy indicator */
function FbGlobe({ size = 12, ...props }: IconProps) {
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
      <title>Shared with Public</title>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/** Friends privacy icon */
function FbFriends({ size = 12, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" role="img" {...props}>
      <title>Shared with Friends</title>
      <path d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 8a2 2 0 0 0-2 2 3.5 3.5 0 0 0 3.5 3.5h7A3.5 3.5 0 0 0 15 11a2 2 0 0 0-2-2H3Z" />
    </svg>
  );
}

/** Music note icon (Reel audio) */
function FbMusic({ size = 12, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" role="img" {...props}>
      <title>Audio</title>
      <path d="M13.5 1.13a1 1 0 0 0-1.192-.98l-7 1.556A1 1 0 0 0 4.5 2.686V11.5a2.5 2.5 0 1 0 2-2.45V4.847l5-1.111V9.5a2.5 2.5 0 1 0 2-2.45V1.13Z" />
    </svg>
  );
}

export type { IconProps };
export { FbFriends, FbGlobe, FbMore, FbMusic, FbShare, FbVerified };
