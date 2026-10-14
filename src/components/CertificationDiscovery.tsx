"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { careerPathways } from "@/data/pathways";
import { useEnquiry } from "@/context/EnquiryContext";
import { CreativeButton } from "@/components/ui/CreativeButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TypewriterText } from "@/components/ui/TypewriterText";

export function CertificationDiscovery() {
  const reduceMotion = useReducedMotion();
  const { scrollToEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,112,0.12)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <TypewriterText
            text="Find Your Path"
            className="font-typewriter text-xs uppercase tracking-[0.35em] text-gold"
          />
          <h2 className="mt-4 font-display text-3xl font-light text-ivory sm:text-4xl lg:text-5xl">
            Not Sure Which Certification{" "}
            <span className="font-cursive text-gold">Fits You?</span>
          </h2>
          <p className="mt-6 font-display text-base leading-relaxed text-zinc-400 sm:text-lg">
            The ideal certification depends on your career goals, existing
            experience, interests, and target roles. Explore common pathways
            below, or speak with our team for personalized guidance.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {careerPathways.map((pathway, i) => (
            <motion.div
              key={pathway.role}
              initial={reduceMotion ? false : { opacity: 0, y: 20, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
              className="rounded-xl border border-zinc-800/80 bg-graphite/60 p-5 text-center backdrop-blur-sm transition-colors hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,112,0.1)]"
            >
              <p className="font-display text-sm font-medium text-ivory">
                {pathway.role}
              </p>
              <div className="my-3 flex items-center justify-center gap-2 text-gold">
                <ArrowRight className="h-3 w-3" />
              </div>
              <p className="font-typewriter text-xs text-zinc-500">
                {pathway.certifications}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CreativeButton
            variant="gold"
            onClick={() => scrollToEnquiry("Help Me Choose")}
          >
            Get My Personalized Recommendation
            <ArrowRight className="ml-1 inline h-4 w-4" />
          </CreativeButton>
        </div>
      </div>
    </section>
  );
}
