import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TherapistsSection from "@/components/sections/TherapistsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CorporateSection from "@/components/sections/CorporateSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import BookingCTASection from "@/components/sections/BookingCTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <AboutSection />
      <ServicesSection />
      <TherapistsSection />
      <TestimonialsSection />
      <CorporateSection />
      <PricingSection />
      <ContactSection />
      <BookingCTASection />
    </main>
  );
}
