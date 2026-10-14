"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  parallax?: boolean;
  parallaxOffset?: number;
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  parallax = false,
  parallaxOffset = 50,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax && !reduceMotion ? [parallaxOffset, -parallaxOffset] : [0, 0],
  );

  const initial = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  };

  return (
    <motion.div
      ref={ref}
      style={parallax ? { y } : undefined}
      initial={reduceMotion ? false : initial[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
