import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import AboutSection from "@/components/sections/AboutSection";
import AnimatedSection from "@/components/sections/AnimatedSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TherapistsSection from "@/components/sections/TherapistsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CorporateSection from "@/components/sections/CorporateSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import BookingCTASection from "@/components/sections/BookingCTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PhilosophySection />
      <AnimatedSection
        imageSrc="/images/sections/about-therapy-session.jpeg"
        imageAlt="Therapist and client during a warm, supportive counselling session"
        sectionIndex="OUR APPROACH"
        heading="Rooted in Empathy, Guided by Evidence"
        body="Every session at Healing60 is a collaborative journey. Our licensed psychologists combine clinically proven methods with genuine warmth, creating a space where you feel heard, understood, and empowered to grow at your own pace."
        ctaLabel="Learn more about us"
        ctaHref="/about"
      />
      <AboutSection />
      <ServicesSection />
      <TherapistsSection />
      <TestimonialsSection />
      <AnimatedSection
        imageSrc="/images/sections/corporate-team-wellness.jpeg"
        imageAlt="Team collaborating in a warm, modern office environment"
        imagePosition="right"
        sectionIndex="WORKPLACE WELLNESS"
        heading="Invest in Your Team's Mental Health"
        body="Burnout, disengagement, and unaddressed stress cost organisations more than they realise. Our corporate wellness programs bring confidential counselling, resilience workshops, and leadership training directly to your workplace."
        ctaLabel="Partner with us"
        ctaHref="/contact"
        glassPanelVariant="glass-separator-lavender"
      />
      <CorporateSection />
      <PricingSection />
      <ContactSection />
      <AnimatedSection
        imageSrc="/images/sections/cta-forest-light.jpeg"
        imageAlt="Sunlight filtering through a peaceful forest path"
        sectionIndex="YOUR JOURNEY"
        heading="The Path Forward Starts Here"
        body="Taking the first step toward healing takes courage. Whether you are navigating anxiety, relationship challenges, or simply seeking clarity, we are here to walk alongside you. Every journey begins with a single conversation."
        ctaLabel="Book a session"
        ctaHref="/contact"
        glassPanelVariant="glass-separator-sage"
      />
      <BookingCTASection />
    </div>
  );
}
