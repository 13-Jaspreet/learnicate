"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "Understand Your Goals",
    description:
      "Identify the certification and learning pathway aligned with your current skills and career direction.",
  },
  {
    num: "02",
    title: "Follow a Structured Roadmap",
    description:
      "Organize preparation into manageable topics, study milestones, and revision objectives.",
  },
  {
    num: "03",
    title: "Learn the Concepts",
    description:
      "Focus on subject understanding, practical scenarios, and certification-relevant knowledge.",
  },
  {
    num: "04",
    title: "Prepare With Confidence",
    description:
      "Use practice and revision activities appropriate to your selected certification and exam objectives.",
  },
];

export function LearningExperience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="learning-experience" className="bg-near-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="THE LEARNICATE APPROACH"
          title="Designed Around Your Next Milestone"
          align="center"
          className="mb-16"
        />

        <div className="grid gap-0 lg:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={reduceMotion ? false : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group border-b border-zinc-800/80 p-8 transition-all duration-500 hover:bg-graphite/20 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:[&:nth-child(2)]:border-r-0"
            >
              <div className="flex items-start gap-6">
                <span className="font-cursive text-5xl text-gold/50 transition-all duration-500 group-hover:text-gold lg:text-6xl">
                  {step.num}
                </span>
                <div className="flex-1">
                  <div className="mb-4 h-px w-12 bg-gradient-to-r from-gold/50 to-transparent transition-all group-hover:w-20" />
                  <h3 className="font-display text-xl font-medium text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-display text-sm leading-relaxed text-zinc-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center font-typewriter text-xs text-zinc-600">
          Specific training formats — such as live classes, recorded sessions, or
          practice activities — can be discussed during your counselling session.
        </p>
      </div>
    </section>
  );
}
