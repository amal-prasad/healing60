"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceIcons: Record<string, React.ReactNode> = {
  mind: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  child: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  compass: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  rings: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
    </svg>
  ),
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
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
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Large faded section number */}
      <div className="absolute top-20 right-8 lg:right-16 pointer-events-none select-none">
        <span className="font-display text-[8rem] lg:text-[14rem] font-light text-charcoal/[0.03] leading-none">
          02
        </span>
      </div>

      <div className="container-wide relative z-10">
        <p className="text-section-index uppercase text-charcoal-light mb-4">
          02 — Services
        </p>
        <h2 className="font-display text-display-section text-charcoal mb-4">
          How we can help
        </h2>
        <p className="text-lg text-charcoal-light max-w-xl mb-12">
          Every person&apos;s journey is unique. Explore our counselling services to
          find the support that resonates with you.
        </p>

        {/* Asymmetric Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`service-card group perspective-card ${
                service.featured
                  ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
            >
              <div
                className={`perspective-card-inner h-full rounded-2xl border border-charcoal/5 bg-warm-white p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-lavender/10 hover:border-lavender/30 ${
                  service.featured ? "lg:p-12" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-lavender/15 flex items-center justify-center text-lavender-deep mb-6 group-hover:bg-lavender/25 transition-colors duration-300">
                  {serviceIcons[service.icon] || serviceIcons.mind}
                </div>

                <h3
                  className={`font-display font-light text-charcoal mb-3 ${
                    service.featured
                      ? "text-2xl lg:text-3xl"
                      : "text-xl lg:text-2xl"
                  }`}
                >
                  {service.title}
                </h3>

                <p className="text-charcoal-light leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Symptoms preview for featured card */}
                {service.featured && (
                  <div className="hidden lg:block mb-6">
                    <p className="text-caption uppercase text-charcoal-light mb-3">
                      Common signs
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.symptoms.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1.5 rounded-full bg-sage/10 text-sage-deep"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Arrow */}
                <div className="flex items-center gap-2 text-lavender-deep text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
