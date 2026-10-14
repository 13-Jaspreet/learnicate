"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  cursiveTitle?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  cursiveTitle = false,
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  const alignClass =
    align === "center" ? "text-center mx-auto items-center" : "text-left";

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-3xl flex-col gap-4 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <TypewriterText
          text={eyebrow}
          speed={30}
          className="font-typewriter text-xs uppercase tracking-[0.3em] text-gold"
        />
      )}
      <h2
        className={`text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl ${
          cursiveTitle
            ? "font-cursive text-gold"
            : "font-display font-light"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="font-display text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
      <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
    </motion.div>
  );
}
