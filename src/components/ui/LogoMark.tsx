/** Inline SVG brand mark — always visible, no external image dependency */

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 52, className = "" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Graduation cap */}
      <path
        d="M18 22L40 12L62 22L40 32L18 22Z"
        fill="#C5A15B"
        stroke="#A8873F"
        strokeWidth="1"
      />
      <path d="M62 22V28L40 38L18 28V22" fill="#B8954F" />
      <line x1="62" y1="22" x2="66" y2="30" stroke="#C5A15B" strokeWidth="2" />
      <circle cx="66" cy="31" r="2" fill="#C5A15B" />

      {/* L vertical stem */}
      <rect x="22" y="28" width="14" height="38" rx="1" fill="#1C1C1C" />

      {/* L horizontal base — book pages */}
      <path
        d="M22 58C22 58 30 52 40 56C50 60 58 54 58 54V66C58 66 50 72 40 68C30 64 22 66 22 66V58Z"
        fill="#C5A15B"
      />
      <path
        d="M22 62C22 62 30 58 40 61C50 64 58 60 58 60V68C58 68 50 72 40 69C30 66 22 68 22 68V62Z"
        fill="#1C1C1C"
      />
      <path
        d="M22 66C22 66 30 64 40 66C50 68 58 66 58 66V72C58 72 50 74 40 72C30 70 22 72 22 72V66Z"
        fill="#C5A15B"
      />
    </svg>
  );
}
