"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type Variant = "gold" | "ghost" | "shimmer";

interface CreativeButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function CreativeButton({
  children,
  onClick,
  variant = "gold",
  className = "",
  type = "button",
  disabled = false,
}: CreativeButtonProps) {
  const reduceMotion = useReducedMotion();

  const base =
    "group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-medium tracking-widest uppercase transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-50";

  const variants: Record<Variant, string> = {
    gold:
      "border border-gold/60 bg-gradient-to-r from-gold/90 via-gold to-gold-muted text-charcoal shadow-[0_0_30px_rgba(212,175,112,0.2)] hover:shadow-[0_0_50px_rgba(212,175,112,0.45)] hover:scale-[1.03]",
    ghost:
      "border border-gold/30 bg-transparent font-display text-gold backdrop-blur-sm hover:border-gold hover:bg-gold/5 hover:shadow-[inset_0_0_20px_rgba(212,175,112,0.1)]",
    shimmer:
      "border border-zinc-700 bg-graphite/80 text-ivory hover:border-gold/50",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {variant === "gold" && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden="true"
        />
      )}
      {variant === "shimmer" && (
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        >
          <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </span>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2 font-display">
        {children}
      </span>
    </motion.button>
  );
}
