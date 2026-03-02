"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { therapists } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TherapistsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".therapist-card",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden text-charcoal">
      {/* Base background removed in favor of GlobalBackground */}
      <div className="absolute inset-0 z-0 glass-separator-lavender" />
      <div className="container-wide relative z-10">
        <p className="text-section-index uppercase text-charcoal-light mb-4">
          Our Team
        </p>
        <h2 className="font-display text-display-section text-charcoal mb-4">
          Meet your therapists
        </h2>
        <p className="text-lg text-charcoal-light max-w-xl mb-12">
          Qualified, empathetic professionals dedicated to your well-being.
          Every therapist at Healing60 is RCI-licensed and continuously trained.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist, index) => {
            const isSage = index % 2 === 0;
            const glassClasses = isSage ? "glass-panel-sage" : "glass-panel-lavender";
            const imageBgClasses = isSage
              ? "bg-gradient-to-br from-[#3B5B36]/50 via-white/10 to-[#3B5B36]/30"
              : "bg-gradient-to-br from-[#4A3B69]/50 via-white/10 to-[#4A3B69]/30";

            return (
              <div
                key={therapist.id}
                className="therapist-card group perspective-card"
              >
                <div className={`perspective-card-inner mt-12 transition-all duration-500 overflow-hidden ${glassClasses}`}>

                  {/* Photo container */}
                  <div className={`relative h-64 mx-6 mt-6 rounded-2xl overflow-hidden shadow-inner border border-white/10 ${imageBgClasses}`}>
                    {therapist.image ? (
                      <Image src={therapist.image} alt={therapist.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center bg-white" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center shadow-sm">
                          <svg
                            className="w-12 h-12 text-cream/50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    {/* Glassmorphism overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-white text-sm italic leading-relaxed text-shadow-strong">
                        &ldquo;{therapist.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Info Block */}
                  <div className="p-6 relative z-10">
                    <h3 className="font-display text-2xl font-medium text-charcoal tracking-tight">
                      {therapist.name}
                    </h3>
                    <p className="text-sm text-charcoal/70 font-semibold mt-1 uppercase tracking-wider">
                      {therapist.title}
                    </p>
                    <p className="text-sm text-charcoal-light mt-2 line-clamp-2">
                      {therapist.specialization}
                    </p>

                    {/* Credentials */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {therapist.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="text-xs px-3 py-1.5 rounded-full bg-charcoal/10 border border-charcoal/10 text-charcoal font-medium"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>

                    {/* Experience Tracker */}
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-charcoal/60 uppercase tracking-widest border-t border-charcoal/10 pt-4">
                      <svg
                        className="w-4 h-4 text-charcoal/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {therapist.yearsExperience}+ Years Clinical
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
