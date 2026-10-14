import { LogoMark } from "@/components/ui/LogoMark";

interface LogoProps {
  variant?: "full" | "icon";
  theme?: "light" | "dark";
  size?: "default" | "lg";
  className?: string;
}

export function Logo({
  variant = "full",
  theme = "light",
  size = "default",
  className = "",
}: LogoProps) {
  const textColor = theme === "light" ? "text-[#1a1a1a]" : "text-ivory";
  const subColor = theme === "light" ? "text-[#555]" : "text-zinc-400";
  const iconSize = size === "lg" ? 56 : 48;
  const markSize = size === "lg" ? 52 : 44;
  const titleClass = size === "lg" ? "text-xl sm:text-2xl" : "text-lg";
  const subClass = size === "lg" ? "text-[10px] sm:text-xs" : "text-[9px]";
  const gap = size === "lg" ? "gap-4" : "gap-3";
  const pad = size === "lg" ? "p-2.5" : "p-2";

  if (variant === "icon") {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-gold/25 bg-gradient-to-br from-[#faf7f2] to-white p-1.5 shadow-sm ${className}`}
      >
        <LogoMark size={iconSize} />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gradient-to-br from-[#faf7f2] to-white ${pad} shadow-sm`}
      >
        <LogoMark size={markSize} />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-[0.18em] ${titleClass} ${textColor}`}
        >
          LEARNICATE
        </span>
        <span className="mt-1.5 flex items-center gap-2">
          <span className="h-px w-3 bg-gold sm:w-4" />
          <span
            className={`font-medium tracking-[0.35em] ${subClass} ${subColor}`}
          >
            ACADEMY
          </span>
          <span className="h-px w-3 bg-gold sm:w-4" />
        </span>
      </div>
    </div>
  );
}
