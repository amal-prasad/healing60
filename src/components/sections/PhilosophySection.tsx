"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { concerns } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered word reveal with parallax depth
      const words = wordsRef.current?.querySelectorAll(".philosophy-word");
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Concern chips fade in
      gsap.fromTo(
        ".concern-chip",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.06,
          duration: 0.5,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".concern-chips-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center section-padding overflow-hidden text-charcoal"
    >
      {/* Philosophy Background Image */}
      {/* Base background removed in favor of GlobalBackground */}
      {/* Section glass overlay */}
      <div className="absolute inset-0 z-0 glass-separator-sage" />
      {/* Subtle particle dots background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-lavender/30 animate-drift-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10">
        {/* Section Index */}
        <p className="text-section-index uppercase text-charcoal-light mb-8">
          Understanding You
        </p>

        {/* Headline with word-by-word reveal */}
        <div ref={wordsRef} className="max-w-[720px] mx-auto glass-panel-sage p-10 lg:p-16 text-center">
          <h2
            ref={headlineRef}
            className="font-display text-display-section text-charcoal leading-tight drop-shadow-sm"
          >
            {[
              "Because",
              "your",
              "mind",
              "deserves",
              "care",
              "too.",
            ].map((word, i) => (
              <span key={i} className="philosophy-word inline-block mr-3">
                {word}
              </span>
            ))}
          </h2>

          <p className="philosophy-word mt-8 text-lg text-charcoal-light leading-relaxed max-w-2xl">
            Healing 60 is a psychology & counselling centre in Indore offering warm, confidential care for individuals, couples, teens, and families. Our licensed professionals are here to help you navigate anxiety, depression, and relationship stress in a stigma-free environment.
          </p>

          {/* Interactive Concern Chips Inside Panel */}
          <div className="concern-chips-container mt-12 border-t border-charcoal/10 pt-8">
            <p className="text-caption uppercase text-charcoal/70 mb-4">
              What brings you here?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {concerns.map((concern) => (
                <Link
                  key={concern.label}
                  href={`/services/${concern.slug}`}
                  className="concern-chip px-5 py-2.5 rounded-full border border-charcoal/20 bg-charcoal/5 text-sm font-body text-charcoal/90 hover:bg-charcoal/10 hover:border-charcoal/30 transition-all duration-300 hover:shadow-md hover:shadow-black/10"
                >
                  {concern.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
