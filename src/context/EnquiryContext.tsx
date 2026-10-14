"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Certification } from "@/data/courses";

interface EnquiryContextValue {
  selectedCertification: Certification | "";
  setSelectedCertification: (cert: Certification | "") => void;
  scrollToEnquiry: (cert?: Certification) => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [selectedCertification, setSelectedCertification] = useState<
    Certification | ""
  >("");

  const scrollToEnquiry = useCallback((cert?: Certification) => {
    if (cert) {
      setSelectedCertification(cert);
    }
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const value = useMemo(
    () => ({
      selectedCertification,
      setSelectedCertification,
      scrollToEnquiry,
    }),
    [selectedCertification, scrollToEnquiry],
  );

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return ctx;
}
