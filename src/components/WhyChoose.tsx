"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  Map,
  Compass,
  GitMerge,
  ClipboardCheck,
  UserCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: Target,
    title: "Certification-Focused Curriculum",
    description:
      "Learning content organized around certification objectives and exam-relevant knowledge areas.",
  },
  {
    icon: Map,
    title: "Structured Preparation Plans",
    description:
      "Clear study roadmaps that break complex syllabi into manageable milestones.",
  },
  {
    icon: Compass,
    title: "Career-Oriented Guidance",
    description:
      "Support aligning your certification choice with your professional direction.",
  },
  {
    icon: GitMerge,
    title: "Multiple Technical and Management Pathways",
    description:
      "Explore options across project management, cloud, networking, security, and ITSM.",
  },
  {
    icon: ClipboardCheck,
    title: "Support Choosing the Right Exam",
    description:
      "Guidance on eligibility, prerequisites, and the certification best suited to your profile.",
  },
  {
    icon: UserCheck,
    title: "Learning Plans Based on Individual Goals",
    description:
      "Preparation approaches tailored to your experience level and available study time.",
  },
];

export function WhyChoose() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="font-display text-3xl font-light text-ivory sm:text-4xl lg:text-5xl">
            Focused Learning.{" "}
            <span className="font-cursive text-gold">Clearer Direction.</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group rounded-xl border border-zinc-800/80 bg-graphite/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,112,0.08)]"
            >
              <feature.icon
                className="mb-4 h-5 w-5 text-gold transition-transform duration-500 group-hover:scale-125"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-base font-medium text-ivory">
                {feature.title}
              </h3>
              <p className="mt-2 font-display text-sm leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
