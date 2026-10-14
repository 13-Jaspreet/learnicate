"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Cloud,
  Network,
  Shield,
  GitBranch,
  Server,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CreativeButton } from "@/components/ui/CreativeButton";
import { courses } from "@/data/courses";
import { useEnquiry } from "@/context/EnquiryContext";
import type { Certification } from "@/data/courses";

const iconMap: Record<string, LucideIcon> = {
  pmp: Briefcase,
  aws: Cloud,
  ccna: Network,
  cism: Shield,
  prince2: GitBranch,
  itil: Server,
};

export function Certifications() {
  const reduceMotion = useReducedMotion();
  const { scrollToEnquiry } = useEnquiry();

  const handleExplore = (cert: Certification) => {
    scrollToEnquiry(cert);
  };

  return (
    <section id="certifications" className="bg-near-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="EXPLORE OUR PROGRAMS"
          title="Choose Your Next Certification"
          description="Explore professional development pathways across project management, cloud computing, networking, cybersecurity, and IT service management."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => {
            const Icon = iconMap[course.id] ?? Briefcase;
            return (
              <motion.article
                key={course.id}
                id={`course-${course.id}`}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="group flex flex-col rounded-xl border border-zinc-800/80 bg-graphite/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_8px_40px_rgba(212,175,112,0.12)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-typewriter text-[10px] uppercase tracking-[0.2em] text-gold">
                    {course.label}
                  </span>
                  <Icon
                    className="h-5 w-5 text-gold/60 transition-colors group-hover:text-gold"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-display text-xl font-medium text-ivory">
                  {course.fullName}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                  {course.description}
                </p>

                {course.id === "aws" && (
                  <p className="mt-2 text-xs italic text-zinc-600">
                    Target certification selection discussed during counselling.
                  </p>
                )}
                {course.id === "cism" && (
                  <p className="mt-2 text-xs italic text-zinc-600">
                    Confirm eligibility requirements with our team.
                  </p>
                )}

                <ul className="mt-5 space-y-2 border-t border-zinc-800 pt-5">
                  {course.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-xs text-zinc-400"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <CreativeButton
                  variant="shimmer"
                  onClick={() => handleExplore(course.certification)}
                  className="mt-6 w-full !rounded-xl !py-2.5 !text-xs"
                >
                  {course.cta}
                </CreativeButton>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
