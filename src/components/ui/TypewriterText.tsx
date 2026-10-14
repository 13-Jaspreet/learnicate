"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  speed = 45,
  delay = 0,
  className = "",
  cursor = true,
  onComplete,
}: TypewriterTextProps) {
  const reduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduceMotion ? text : "");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(reduceMotion ?? false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(text);
      setDone(true);
      onComplete?.();
      return;
    }

    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay, reduceMotion, text, onComplete]);

  useEffect(() => {
    if (!started || reduceMotion) return;

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, reduceMotion, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {cursor && !done && (
        <span className="ml-0.5 inline-block w-[2px] animate-blink bg-gold" aria-hidden="true">
          &nbsp;
        </span>
      )}
    </span>
  );
}
