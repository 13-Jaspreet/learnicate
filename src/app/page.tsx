import { EnquiryProvider } from "@/context/EnquiryContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ImageShowcase } from "@/components/ImageShowcase";
import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { CertificationDiscovery } from "@/components/CertificationDiscovery";
import { LearningExperience } from "@/components/LearningExperience";
import { WhyChoose } from "@/components/WhyChoose";
import { Counselling } from "@/components/Counselling";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <EnquiryProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ImageShowcase />
        <About />
        <Certifications />
        <CertificationDiscovery />
        <LearningExperience />
        <WhyChoose />
        <Counselling />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </EnquiryProvider>
  );
}
