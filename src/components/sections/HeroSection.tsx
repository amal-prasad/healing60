"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { siteSettings } from "@/lib/data";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    // If loader completed before React hydrated, or if arriving via client-side routing
    // @ts-expect-error Window extending
    if (typeof window !== "undefined" && window.__HEALING60_LOADER_DONE) {
      setIsLocked(false);
      // Refresh ScrollTrigger to ensure sections below are positioned correctly
      setTimeout(() => {
        import("gsap/ScrollTrigger").then((mod) => {
          mod.ScrollTrigger.refresh();
        });
      }, 1500);
      return;
    }

    const handleRelease = () => {
      setIsLocked(false);
      // Wait for the hero animations to complete, then refresh ScrollTrigger
      setTimeout(() => {
        import("gsap/ScrollTrigger").then((mod) => {
          mod.ScrollTrigger.refresh();
        });
      }, 1500); // Hero animations take around 1.5s
    };

    // Listen for the custom event dispatched by InitialLoader when fade-out begins
    document.addEventListener("hero:release", handleRelease);

    // If InitialLoader has already fired or user navigated client-side (no full reload)
    // the loader won't be visible. We fallback to unlocking just in case.
    const fallbackTimeout = setTimeout(handleRelease, 6000);

    return () => {
      document.removeEventListener("hero:release", handleRelease);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[100svh] flex items-center justify-center overflow-hidden ${isLocked ? 'hero--locked' : 'hero--animate'}`}
    >
      {/* Primary Hero Background Image */}
      {/* Base background removed in favor of GlobalBackground */}
      {/* Light glass overlay over image */}
      {/* 4. Top Content Layer (Text & CTA) */}
      <div
        className="relative z-40 container-wide pt-20 flex flex-col items-center justify-center w-full min-h-[100svh]"
        style={{ textShadow: 'none' }}
      >
        <div
          className="hero-animated hero-anim-scale flex flex-col items-center text-center max-w-4xl"
          style={{ "--hero-duration": "1s" } as React.CSSProperties}
        >
          {/* A secondary, softer text backing just to ensure absolute readability if needed, though the 60px blur does most work */}

          <p
            className="hero-animated hero-anim-up text-section-index uppercase text-charcoal/80 font-semibold tracking-widest mb-6 relative z-10"
            style={{ textShadow: '0 2px 10px rgba(255,255,255,0.7)', "--hero-delay": "0.2s", "--hero-duration": "0.6s", "--hero-y": "20px" } as React.CSSProperties}
          >
            Psychology & Counselling in Indore
          </p>

          <h1
            className="hero-animated hero-anim-up font-display text-display-hero text-charcoal text-balance relative z-10"
            style={{ textShadow: '0 4px 20px rgba(255,255,255,0.6)', "--hero-delay": "0.4s", "--hero-duration": "0.8s", "--hero-y": "30px" } as React.CSSProperties}
          >
            Psychologist in Indore.
            <br />
            <span className="text-gradient-animated" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.7)' }}>Helping You Heal Mentally & Emotionally.</span>
          </h1>

          <p
            className="hero-animated hero-anim-up mt-6 text-lg lg:text-xl font-medium text-charcoal/80 max-w-2xl text-center leading-relaxed relative z-10"
            style={{ textShadow: '0 2px 10px rgba(255,255,255,0.7)', "--hero-delay": "0.7s", "--hero-duration": "0.6s", "--hero-y": "20px" } as React.CSSProperties}
          >
            Confidential counselling with trusted psychologists in Indore &mdash; because your mind deserves care too.
          </p>

          <div
            className="hero-animated hero-anim-up mt-12 flex flex-col sm:flex-row gap-6 justify-center relative z-10 w-full md:w-auto"
            style={{ "--hero-delay": "1s", "--hero-duration": "0.6s", "--hero-y": "20px" } as React.CSSProperties}
          >
            <Link
              href={siteSettings.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-sage text-charcoal font-medium text-lg hover:bg-sage-deep hover:text-white transition-all duration-500 shadow-xl shadow-black/30 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book a Session
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-charcoal/20 bg-white/40 backdrop-blur-sm text-charcoal font-medium text-lg hover:bg-white/60 transition-all duration-300 shadow-sm w-full sm:w-auto"
            >
              Explore Services
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-animated hero-anim-fade absolute bottom-10 left-1/2 -translate-x-1/2 z-40"
        style={{ "--hero-delay": "1.5s", "--hero-duration": "0.8s" } as React.CSSProperties}
      >
        <div className="flex flex-col items-center gap-3 text-charcoal-light">
          <span className="text-xs tracking-[0.2em] font-medium uppercase drop-shadow-sm">Scroll</span>
          <div className="animate-bounce-slow bg-white/30 backdrop-blur-sm p-2 rounded-full border border-white/40 shadow-sm">
            <svg className="w-5 h-5 relative top-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

