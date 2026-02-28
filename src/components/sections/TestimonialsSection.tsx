"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials, siteSettings } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-charcoal/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      const statEls = document.querySelectorAll(".stat-number");
      statEls.forEach((el) => {
        const target = parseFloat(el.getAttribute("data-target") || "0");
        const isFloat = target % 1 !== 0;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-bar",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            el.textContent = isFloat
              ? obj.val.toFixed(1)
              : Math.round(obj.val).toString();
          },
        });
      });

      // Cards entrance
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="container-wide">
        <p className="text-section-index uppercase text-charcoal-light mb-4">
          04 — Testimonials
        </p>
        <h2 className="font-display text-display-section text-charcoal mb-4">
          Stories of healing
        </h2>
        <p className="text-lg text-charcoal-light max-w-xl mb-12">
          Real experiences from real people who trusted us with their journey.
        </p>

        {/* Stats Bar */}
        <div className="stats-bar grid grid-cols-3 gap-6 mb-16 p-8 rounded-2xl bg-gradient-to-r from-lavender/10 via-cream to-sage/10 border border-charcoal/5">
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-light text-charcoal">
              <span className="stat-number" data-target={siteSettings.stats.livesTouched}>
                0
              </span>
              <span className="text-lavender-deep">+</span>
            </div>
            <p className="text-caption uppercase text-charcoal-light mt-2">
              Lives Touched
            </p>
          </div>
          <div className="text-center border-x border-charcoal/10">
            <div className="font-display text-4xl lg:text-5xl font-light text-charcoal">
              <span className="stat-number" data-target={siteSettings.stats.rating}>
                0
              </span>
              <span className="text-sage-deep">&#9733;</span>
            </div>
            <p className="text-caption uppercase text-charcoal-light mt-2">
              Google Rating
            </p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-light text-charcoal">
              <span className="stat-number" data-target={siteSettings.stats.yearsExperience}>
                0
              </span>
              <span className="text-lavender-deep">+</span>
            </div>
            <p className="text-caption uppercase text-charcoal-light mt-2">
              Years Experience
            </p>
          </div>
        </div>

        {/* Testimonial Cards — horizontal scroll on mobile, grid on desktop */}
        <div
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto snap-center"
            >
              <div className="h-full rounded-2xl border border-charcoal/5 bg-warm-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-lavender/10">
                <StarRating rating={t.rating} />
                <p className="mt-4 text-charcoal leading-relaxed text-[0.95rem]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lavender/15 flex items-center justify-center">
                    <span className="text-sm font-medium text-lavender-deep">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      {t.name}
                    </p>
                    <p className="text-xs text-charcoal-light">
                      {new Date(t.date).toLocaleDateString("en-IN", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
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
