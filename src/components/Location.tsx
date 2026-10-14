"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";
import { CreativeButton } from "@/components/ui/CreativeButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { contact } from "@/data/contact";

export function Location() {
  const reduceMotion = useReducedMotion();
  const { scrollToEnquiry } = useEnquiry();

  return (
    <section className="bg-near-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-light text-ivory sm:text-4xl">
            Connect With{" "}
            <span className="font-cursive text-gold">Learnicate Academy</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/15 shadow-[0_0_40px_rgba(212,175,112,0.08)]"
          >
            <iframe
              title="Approximate location — Nagpur, Maharashtra"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.95%2C21.10%2C79.15%2C21.20&layer=mapnik&marker=21.1458%2C79.0882"
              className="absolute inset-0 h-full w-full grayscale opacity-70"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-near-black/20" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-gold/20 bg-charcoal/90 p-3 backdrop-blur-sm">
              <p className="font-display text-xs text-zinc-500">
                <span className="text-gold">Location:</span> Dharampeth,
                Nagpur, Maharashtra 440010, India
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-typewriter text-xs uppercase tracking-wider text-gold">
                  Location
                </p>
                <p className="mt-1 font-display text-sm text-zinc-500">
                  Nagpur, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-typewriter text-xs uppercase tracking-wider text-gold">
                  Phone
                </p>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="mt-1 block font-display text-sm text-zinc-500 transition-colors hover:text-gold"
                >
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-typewriter text-xs uppercase tracking-wider text-gold">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block font-display text-sm text-zinc-500 transition-colors hover:text-gold"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-typewriter text-xs uppercase tracking-wider text-gold">
                  WhatsApp
                </p>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-display text-sm text-zinc-500 transition-colors hover:text-gold"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-typewriter text-xs uppercase tracking-wider text-gold">
                  Business Hours
                </p>
                <p className="mt-1 font-display text-sm text-zinc-500">
                  Contact us to confirm current timings
                </p>
              </div>
            </div>

            <CreativeButton
              variant="ghost"
              onClick={() => scrollToEnquiry()}
              className="mt-4 w-fit"
            >
              Get in Touch
            </CreativeButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
