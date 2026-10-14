"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/data/faqs";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faqs" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Answers to Common Questions"
          align="center"
          className="mb-12"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-zinc-800/80 bg-graphite/40 backdrop-blur-sm transition-colors hover:border-gold/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-medium text-ivory sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-zinc-800 px-5 py-4">
                        <p className="font-display text-sm leading-relaxed text-zinc-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
