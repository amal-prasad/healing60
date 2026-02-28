import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TherapistsSection from "@/components/sections/TherapistsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CorporateSection from "@/components/sections/CorporateSection";
import BookingCTASection from "@/components/sections/BookingCTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <TherapistsSection />
      <TestimonialsSection />
      <CorporateSection />
      <BookingCTASection />
    </main>
  );
}
