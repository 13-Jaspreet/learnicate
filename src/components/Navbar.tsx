"use client";

import { scrollToSection } from "@/lib/scroll";
import { useEnquiry } from "@/context/EnquiryContext";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const { scrollToEnquiry } = useEnquiry();

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 shadow-sm backdrop-blur-md"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-label="Learnicate Academy — Home"
        >
          <Logo variant="full" theme="light" />
        </button>

        <button
          type="button"
          onClick={() => scrollToEnquiry()}
          className="rounded-full border border-charcoal/20 bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-charcoal transition-colors hover:border-gold hover:text-gold sm:px-6 sm:text-sm"
        >
          Book Counselling
        </button>
      </nav>
    </header>
  );
}
