import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, siteSettings } from "@/lib/data";

interface Props {
  params: { slug: string };
}

const PHYSICAL_SERVICE_PAGES = [
  "career-counselling",
  "child-counselling",
  "depression-anxiety",
  "marriage-counselling",
  "relationship-counselling",
];

export async function generateStaticParams() {
  return services
    .filter((s) => !PHYSICAL_SERVICE_PAGES.includes(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-charcoal-light hover:text-charcoal transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div>
              <h1 className="font-display text-display-hero text-charcoal text-balance">
                {service.title}
              </h1>
              <p className="mt-6 text-lg text-charcoal-light leading-relaxed max-w-2xl">
                {service.description}
              </p>

              {/* Symptoms */}
              <div className="mt-16">
                <h2 className="font-display text-2xl font-light text-charcoal mb-6">
                  Signs you might benefit from this
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.symptoms.map((s) => (
                    <div
                      key={s}
                      className="flex items-start gap-3 p-4 rounded-xl bg-warm-white border border-charcoal/5"
                    >
                      <svg
                        className="w-5 h-5 text-lavender-deep mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="text-sm text-charcoal">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div className="mt-16">
                <h2 className="font-display text-2xl font-light text-charcoal mb-6">
                  Our approach
                </h2>
                <div className="space-y-4">
                  {service.approach.map((a, i) => (
                    <div key={a} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center text-sm font-medium text-sage-deep">
                        {i + 1}
                      </span>
                      <p className="text-charcoal-light pt-1">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-16">
                <h2 className="font-display text-2xl font-light text-charcoal mb-6">
                  What to expect
                </h2>
                <div className="space-y-3">
                  {service.whatToExpect.map((w) => (
                    <div
                      key={w}
                      className="flex items-start gap-3 p-4 rounded-xl bg-lavender/5"
                    >
                      <svg
                        className="w-5 h-5 text-lavender-deep mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm text-charcoal">{w}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {service.faq.length > 0 && (
                <div className="mt-16">
                  <h2 className="font-display text-2xl font-light text-charcoal mb-6">
                    Frequently asked questions
                  </h2>
                  <div className="space-y-4">
                    {service.faq.map((f, i) => (
                      <details
                        key={i}
                        className="group rounded-xl border border-charcoal/5 bg-warm-white overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                          <span className="font-medium text-charcoal pr-4">
                            {f.question}
                          </span>
                          <svg
                            className="w-5 h-5 text-charcoal-light flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 text-charcoal-light leading-relaxed">
                          {f.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-charcoal/5 bg-warm-white p-8">
                  <h3 className="font-display text-lg font-light text-charcoal mb-3">
                    Ready to start?
                  </h3>
                  <p className="text-sm text-charcoal-light mb-6">
                    Book a session for {service.title.toLowerCase()} with one of
                    our qualified therapists.
                  </p>
                  <Link
                    href={siteSettings.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 rounded-full bg-lavender text-charcoal text-cta hover:bg-lavender-deep hover:text-white transition-all duration-300"
                  >
                    Book this Service
                  </Link>
                  <Link
                    href="/pricing"
                    className="block w-full text-center mt-3 px-6 py-3 rounded-full border border-charcoal/10 text-charcoal-light text-sm hover:bg-charcoal/5 transition-all duration-300"
                  >
                    View Pricing
                  </Link>
                </div>

                <div className="rounded-2xl border border-charcoal/5 bg-warm-white p-8">
                  <h4 className="text-caption uppercase text-charcoal-light mb-4">
                    Other Services
                  </h4>
                  <div className="space-y-2">
                    {services
                      .filter((s) => s.slug !== service.slug)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block text-sm text-charcoal-light hover:text-lavender-deep transition-colors py-1"
                        >
                          {s.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
