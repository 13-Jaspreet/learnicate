"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { useEnquiry } from "@/context/EnquiryContext";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { CreativeButton } from "@/components/ui/CreativeButton";
import { images } from "@/data/images";

const trustIndicators = [
  "Industry-Aligned Learning",
  "Expert-Guided Preparation",
  "Career-Focused Training",
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollToEnquiry } = useEnquiry();

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-near-black">
        <Image
          src={images.hero.main}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-near-black via-near-black/85 to-near-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-near-black/40" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <TypewriterText
              text="Professional Certification Training"
              speed={35}
              className="font-typewriter text-xs uppercase tracking-[0.25em] text-gold"
            />
          </motion.div>

          <h1 className="overflow-visible font-display text-4xl font-light leading-[1.2] text-ivory sm:text-5xl lg:text-6xl">
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block"
            >
              Build Your{" "}
              <span className="inline-block pb-1 font-cursive text-5xl text-gold sm:text-6xl">
                Expertise.
              </span>
            </motion.span>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-2 block"
            >
              Earn{" "}
              <span className="inline-block pb-1 font-cursive text-5xl text-gold sm:text-6xl lg:text-7xl">
                Your Edge.
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-xl font-display text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Advance your career with industry-recognized certification training
            designed for ambitious professionals.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <CreativeButton
              variant="gold"
              onClick={() => scrollToSection("certifications")}
            >
              Explore Certifications
            </CreativeButton>
            <CreativeButton variant="ghost" onClick={() => scrollToEnquiry()}>
              Talk to Advisor
            </CreativeButton>
          </motion.div>

          <motion.ul
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-6"
          >
            {trustIndicators.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-zinc-500"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20 shadow-2xl">
            <Image
              src={images.hero.collaboration}
              alt="Professionals in a certification training session"
              fill
              quality={90}
              sizes="(max-width: 1024px) 50vw, 560px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
