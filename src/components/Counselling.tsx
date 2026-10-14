"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";
import type { Certification } from "@/data/courses";
import { contact } from "@/data/contact";

const certifications: Certification[] = [
  "PMP",
  "AWS",
  "CCNA",
  "CISM",
  "PRINCE2",
  "ITIL",
  "Help Me Choose",
];

const experienceOptions = [
  "Student / Fresher",
  "0–2 Years",
  "3–5 Years",
  "6–10 Years",
  "10+ Years",
];

const learningModes = ["Online", "Classroom", "Flexible / Need Guidance"];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  certification: Certification | "";
  experience: string;
  learningMode: string;
  careerGoals: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  certification?: string;
  consent?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function Counselling() {
  const { selectedCertification, setSelectedCertification } = useEnquiry();
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    certification: "",
    experience: "",
    learningMode: "",
    careerGoals: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedCertification) {
      setForm((prev) => ({
        ...prev,
        certification: selectedCertification,
      }));
    }
  }, [selectedCertification]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,15}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!form.certification) {
      newErrors.certification = "Please select a certification";
    }
    if (!form.consent) {
      newErrors.consent = "Please agree to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          certification: form.certification,
          experience: form.experience || undefined,
          learningMode: form.learningMode || undefined,
          careerGoals: form.careerGoals.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        certification: "",
        experience: "",
        learningMode: "",
        careerGoals: "",
        consent: false,
      });
      setSelectedCertification("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  const inputClass =
    "w-full rounded-sm border border-zinc-700 bg-near-black px-4 py-3 text-sm text-ivory placeholder:text-zinc-600 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <section id="contact" className="bg-near-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-light leading-tight text-ivory sm:text-4xl lg:text-5xl">
              Your Next Career Move Starts With a{" "}
              <span className="font-cursive text-gold">Conversation</span>
            </h2>
            <p className="mt-6 font-display text-base leading-relaxed text-zinc-400">
              Tell us what you want to achieve. Our team can help you explore
              suitable certifications, understand the preparation requirements,
              and identify your next step.
            </p>

            <div className="mt-10 space-y-4 border-l-2 border-gold/30 pl-6">
              <p className="text-sm text-zinc-500">
                <span className="block text-xs uppercase tracking-wider text-gold">
                  Phone
                </span>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="transition-colors hover:text-gold"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
              <p className="text-sm text-zinc-500">
                <span className="block text-xs uppercase tracking-wider text-gold">
                  Email
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {contact.email}
                </a>
              </p>
              <p className="text-sm text-zinc-500">
                <span className="block text-xs uppercase tracking-wider text-gold">
                  WhatsApp
                </span>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  Message us on WhatsApp
                </a>
              </p>
            </div>

            <div
              className="mt-10 h-px w-full bg-gradient-to-r from-gold/40 via-gold/10 to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-sm border border-zinc-800 bg-graphite p-6 sm:p-8"
              aria-label="Enquiry form"
            >
              {status === "success" && (
                <div
                  role="status"
                  className="mb-6 flex items-start gap-3 rounded-sm border border-green-800/50 bg-green-900/20 p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-400" />
                  <div>
                    <p className="text-sm font-medium text-green-300">
                      Enquiry received
                    </p>
                    <p className="mt-1 text-xs text-green-400/80">
                      Thank you for your interest. Our team will review your
                      enquiry and respond shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mb-6 flex items-start gap-3 rounded-sm border border-red-800/50 bg-red-900/20 p-4"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                  <p className="text-sm text-red-300">{errorMessage}</p>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-xs text-zinc-400">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                    className={inputClass}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-zinc-400">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClass}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs text-zinc-400">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <div className="flex gap-2">
                    <span className="flex items-center rounded-sm border border-zinc-700 bg-near-black px-3 text-sm text-zinc-400">
                      +91
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className={`${inputClass} flex-1`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="certification" className="mb-1.5 block text-xs text-zinc-400">
                    Certification of Interest <span className="text-gold">*</span>
                  </label>
                  <select
                    id="certification"
                    required
                    value={form.certification}
                    onChange={(e) => {
                      const val = e.target.value as Certification | "";
                      setForm({ ...form, certification: val });
                      setSelectedCertification(val);
                    }}
                    className={`${inputClass} cursor-pointer`}
                    aria-invalid={!!errors.certification}
                    aria-describedby={errors.certification ? "certification-error" : undefined}
                  >
                    <option value="">Select a certification</option>
                    {certifications.map((cert) => (
                      <option key={cert} value={cert}>{cert}</option>
                    ))}
                  </select>
                  {errors.certification && (
                    <p id="certification-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.certification}
                    </p>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="experience" className="mb-1.5 block text-xs text-zinc-400">
                      Current Experience
                    </label>
                    <select
                      id="experience"
                      value={form.experience}
                      onChange={(e) =>
                        setForm({ ...form, experience: e.target.value })
                      }
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select experience</option>
                      {experienceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="learningMode" className="mb-1.5 block text-xs text-zinc-400">
                      Preferred Learning Mode
                    </label>
                    <select
                      id="learningMode"
                      value={form.learningMode}
                      onChange={(e) =>
                        setForm({ ...form, learningMode: e.target.value })
                      }
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select mode</option>
                      {learningModes.map((mode) => (
                        <option key={mode} value={mode}>{mode}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="careerGoals" className="mb-1.5 block text-xs text-zinc-400">
                    Career Goals
                  </label>
                  <textarea
                    id="careerGoals"
                    rows={4}
                    value={form.careerGoals}
                    onChange={(e) =>
                      setForm({ ...form, careerGoals: e.target.value })
                    }
                    placeholder="Tell us about your career aspirations and what you hope to achieve..."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) =>
                        setForm({ ...form, consent: e.target.checked })
                      }
                      className="mt-1 h-4 w-4 rounded border-zinc-600 bg-near-black text-gold focus:ring-gold"
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? "consent-error" : undefined}
                    />
                    <span className="text-xs leading-relaxed text-zinc-500">
                      I agree to be contacted by Learnicate Academy regarding my
                      enquiry. I understand my information will be used solely for
                      counselling purposes.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-gold/60 bg-gradient-to-r from-gold/90 via-gold to-gold-muted py-3.5 font-display text-sm font-medium tracking-widest uppercase text-charcoal shadow-[0_0_30px_rgba(212,175,112,0.2)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(212,175,112,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request Free Counselling"
                    )}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
