import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Counselling Services",
  description:
    "Explore our counselling services — depression & anxiety therapy, relationship counselling, child psychology, career guidance, and marriage counselling in Indore.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <div className="glass-panel-strong p-8 lg:p-12 max-w-3xl mx-auto text-center rounded-3xl">
            <p className="text-section-index uppercase text-charcoal-light mb-4 heading-on-glass">
              Our Services
            </p>
            <h1 className="font-display text-display-hero text-charcoal mx-auto text-balance heading-on-glass">
              Find the support{" "}
              <span className="text-gradient-sage">that fits you.</span>
            </h1>
            <p className="mt-6 text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
              Every journey is unique. Explore our counselling services and find the
              approach that resonates with your needs.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-center p-8 lg:p-10 rounded-2xl border border-charcoal/5 bg-warm-white hover:shadow-xl hover:shadow-lavender/10 hover:border-lavender/20 transition-all duration-500">
                  {/* Index */}
                  <div className="hidden lg:block">
                    <span className="font-display text-5xl font-light text-charcoal/10 group-hover:text-lavender/40 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="font-display text-2xl lg:text-3xl font-light text-charcoal group-hover:text-lavender-deep transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-charcoal-light max-w-xl">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.symptoms.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1 rounded-full bg-lavender/10 text-lavender-deep"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center">
                    <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-lavender group-hover:border-lavender transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-charcoal-light group-hover:text-charcoal transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
