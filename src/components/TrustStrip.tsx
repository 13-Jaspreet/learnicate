"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe, Layers, Cpu, Compass } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Globally Recognized Certification Pathways",
    description:
      "Prepare for certifications valued across industries and geographies.",
  },
  {
    icon: Layers,
    title: "Structured Learning Support",
    description:
      "Follow organized study roadmaps aligned with certification objectives.",
  },
  {
    icon: Cpu,
    title: "Technology & Leadership Tracks",
    description:
      "Explore pathways across technical, management, and governance domains.",
  },
  {
    icon: Compass,
    title: "Personalized Course Guidance",
    description:
      "Receive support choosing the certification that fits your goals.",
  },
];

export function TrustStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-gold/10 bg-graphite">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              className={`flex flex-col gap-3 transition-transform ${
                i < values.length - 1
                  ? "lg:border-r lg:border-gold/10 lg:pr-8"
                  : ""
              }`}
            >
              <item.icon
                className="h-5 w-5 text-gold transition-transform duration-300 hover:rotate-12"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-sm font-medium text-ivory">
                {item.title}
              </h3>
              <p className="font-display text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
