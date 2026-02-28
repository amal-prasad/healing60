import { Metadata } from "next";
import Link from "next/link";
import { pricingTiers, siteSettings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for all Healing60 counselling services. Individual sessions, couples therapy, child counselling, and corporate packages.",
};

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16 glass-panel-strong p-8 lg:p-12">
            <p className="text-section-index uppercase text-charcoal-light mb-4 heading-on-glass">
              Pricing
            </p>
            <h1 className="font-display text-display-hero text-charcoal text-balance heading-on-glass">
              Simple,{" "}
              <span className="text-gradient-lavender">transparent</span>{" "}
              pricing.
            </h1>
            <p className="mt-6 text-lg text-charcoal-light leading-relaxed">
              No hidden fees, no surprises. Choose the session type that works
              for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${tier.recommended
                    ? "border-lavender bg-lavender/5 shadow-lg shadow-lavender/10"
                    : "border-charcoal/5 bg-warm-white hover:shadow-lavender/10"
                  }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-lavender text-charcoal text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="font-display text-xl font-light text-charcoal">
                  {tier.name}
                </h3>
                <p className="text-sm text-charcoal-light mt-1">
                  {tier.duration}
                </p>

                <div className="mt-6">
                  {tier.price > 0 ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-light text-charcoal">
                        &#8377;{tier.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-charcoal-light">
                        /session
                      </span>
                    </div>
                  ) : (
                    <span className="font-display text-2xl font-light text-charcoal">
                      Custom Quote
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-charcoal-light">
                  {tier.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-charcoal"
                    >
                      <svg
                        className="w-4 h-4 text-sage-deep mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.price > 0 ? siteSettings.whatsapp : "/contact"}
                  target={tier.price > 0 ? "_blank" : undefined}
                  rel={tier.price > 0 ? "noopener noreferrer" : undefined}
                  className={`mt-8 block w-full text-center px-6 py-3 rounded-full text-cta transition-all duration-300 ${tier.recommended
                      ? "bg-lavender text-charcoal hover:bg-lavender-deep hover:text-white"
                      : "border border-charcoal/10 text-charcoal hover:bg-charcoal hover:text-cream"
                    }`}
                >
                  {tier.price > 0 ? "Book Now" : "Contact Us"}
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="rounded-2xl border border-charcoal/5 bg-warm-white p-8">
              <h3 className="font-display text-lg font-light text-charcoal mb-4">
                Good to know
              </h3>
              <div className="space-y-3 text-sm text-charcoal-light text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-lavender-deep mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>First session includes a comprehensive assessment at no extra charge.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-lavender-deep mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Packages available for multiple sessions at reduced rates. Ask us about it.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-lavender-deep mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Online sessions available at the same rates for clients outside Indore.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-lavender-deep mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cancellation is free up to 24 hours before your appointment.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
