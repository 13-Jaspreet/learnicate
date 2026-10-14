"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { images } from "@/data/images";

const showcaseImages = images.showcase.items.slice(0, 5);

export function ImageShowcase() {
  return (
    <section className="relative overflow-hidden bg-near-black py-24 lg:py-28">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={images.showcase.bg}
          alt=""
          fill
          quality={75}
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-near-black/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <p className="font-typewriter text-xs uppercase tracking-[0.3em] text-gold">
            Visual Journey
          </p>
          <h2 className="mt-3 font-display text-3xl font-light text-ivory sm:text-4xl lg:text-5xl">
            Where Ambition Meets{" "}
            <span className="font-cursive text-gold">Excellence</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-display text-sm text-zinc-500 sm:text-base">
            Structured learning, focused preparation, and career-defining
            certifications.
          </p>
        </ScrollReveal>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:auto-rows-[240px]">
          {showcaseImages.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={i * 0.06}
              direction="up"
              className={`group relative overflow-hidden rounded-lg border border-zinc-800/80 ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={90}
                sizes={
                  img.span.includes("col-span-2")
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/50 via-transparent to-transparent" />
            </ScrollReveal>
          ))}

          <ScrollReveal
            delay={0.35}
            direction="up"
            className="col-span-2 flex flex-col justify-center rounded-lg border border-gold/20 bg-gradient-to-br from-graphite to-charcoal p-6 sm:p-8"
          >
            <p className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-gold">
              The Learnicate Experience
            </p>
            <p className="mt-3 font-display text-sm leading-relaxed text-zinc-400 sm:text-base">
              Every certification journey begins with clarity. From your first
              counselling conversation to structured preparation and exam
              readiness, we help ambitious professionals build confidence at
              every step — with guidance shaped around your goals, experience,
              and career direction.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
