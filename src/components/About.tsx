"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Lightbulb, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CreativeButton } from "@/components/ui/CreativeButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useEnquiry } from "@/context/EnquiryContext";
import { images } from "@/data/images";

const features = [
  {
    icon: BookOpen,
    title: "Structured Preparation",
    description:
      "Organize your learning around certification objectives and a clear study roadmap.",
  },
  {
    icon: Lightbulb,
    title: "Practical Understanding",
    description:
      "Focus on concepts, scenarios, and the application of knowledge.",
  },
  {
    icon: Users,
    title: "Personalized Guidance",
    description:
      "Get support choosing the right certification based on your experience and ambitions.",
  },
];

const galleryImages = [
  { src: images.about.main, alt: "Professionals collaborating in a learning environment" },
  { src: images.about.mentor, alt: "Professional mentorship session" },
  { src: images.about.study, alt: "Focused certification preparation" },
];

export function About() {
  const reduceMotion = useReducedMotion();
  const { scrollToEnquiry } = useEnquiry();

  return (
    <section id="about" className="bg-charcoal py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-gold/10">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -right-4 top-6 w-40 overflow-hidden rounded-lg border border-gold/20 shadow-xl sm:-right-6 sm:w-48">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-40 overflow-hidden rounded-lg border border-gold/15 shadow-lg sm:-left-6 sm:w-48">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    fill
                    quality={85}
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <SectionHeader
              eyebrow="ABOUT LEARNICATE"
              title="Knowledge That Moves Your Career Forward"
            />
            <p className="mt-5 font-display text-base leading-relaxed text-zinc-500">
              Learnicate Academy is built for professionals who want more than
              generic training — structured certification pathways, practical
              understanding, and guidance that respects where you are today and
              where you want to go next.
            </p>
            <div className="mt-5 space-y-4 font-display text-base leading-relaxed text-zinc-400">
              <p>
                At Learnicate Academy, we help aspiring and experienced
                professionals navigate the world of professional certifications.
                Our learning pathways are designed to make complex concepts more
                approachable through structured preparation, practical
                understanding, and focused guidance.
              </p>
              <p>
                Whether you are developing project management expertise,
                strengthening your cloud skills, exploring networking, or
                advancing in cybersecurity and IT service management, we help
                you identify a certification pathway that aligns with your
                professional goals.
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="flex gap-4 rounded-lg border border-zinc-800/80 bg-graphite/40 p-4 transition-colors hover:border-gold/25"
                >
                  <feature.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-display text-sm font-medium text-ivory">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <CreativeButton
                variant="ghost"
                onClick={() => scrollToEnquiry("Help Me Choose")}
              >
                Find Your Learning Path
              </CreativeButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
