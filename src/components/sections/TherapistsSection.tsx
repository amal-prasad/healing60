"use client";

import { useEffect, useRef } from "react";
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
    <section ref={sectionRef} className="relative section-padding">
      <div className="container-wide">
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
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="therapist-card group perspective-card"
            >
              <div className="perspective-card-inner glass-panel mt-12 transition-all duration-500 hover:shadow-xl hover:shadow-lavender/10">
                {/* Photo placeholder */}
                <div className="relative h-64 mx-6 -mt-12 rounded-2xl bg-gradient-to-br from-lavender/20 via-sage/10 to-cream overflow-hidden shadow-lg border border-white/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-lavender/20 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-lavender-deep/40"
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
                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <p className="text-white/90 text-sm italic leading-relaxed">
                      &ldquo;{therapist.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-light text-charcoal">
                    {therapist.name}
                  </h3>
                  <p className="text-sm text-lavender-deep font-medium mt-1">
                    {therapist.title}
                  </p>
                  <p className="text-sm text-charcoal-light mt-1">
                    {therapist.specialization}
                  </p>

                  {/* Credentials */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {therapist.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="text-xs px-2.5 py-1 rounded-full bg-sage/10 text-sage-deep"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>

                  {/* Experience */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-charcoal-light">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {therapist.yearsExperience}+ years experience
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
