import { Metadata } from "next";
import { therapists } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Healing60 — our story, mission, and the qualified therapists dedicated to your mental well-being in Indore.",
};

export default function AboutPage() {
  const milestones = [
    { year: "2017", event: "Founded in Indore with a vision to make quality mental healthcare accessible" },
    { year: "2019", event: "Expanded team to 3 full-time therapists" },
    { year: "2021", event: "Launched corporate wellness programs" },
    { year: "2023", event: "500+ lives touched, 4.9-star Google rating" },
    { year: "2025", event: "Introduced online therapy for pan-India access" },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-section-index uppercase text-charcoal-light mb-4">
            About Healing60
          </p>
          <h1 className="font-display text-display-hero text-charcoal max-w-3xl text-balance">
            A safe space,{" "}
            <span className="text-gradient-lavender">built with intention.</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-charcoal-light max-w-2xl leading-relaxed">
            Healing60 was born from a simple belief: that everyone deserves
            access to compassionate, professional mental health support — without
            stigma, without judgment, and without barriers.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-warm-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-section-index uppercase text-charcoal-light mb-4">
                Our Story
              </p>
              <h2 className="font-display text-display-section text-charcoal mb-6">
                From a small room to a movement
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  In 2017, Healing60 started as a single counselling room in
                  Indore. The name came from the idea that 60 minutes of focused,
                  compassionate attention can be the beginning of profound change.
                </p>
                <p>
                  We saw a city where mental health was whispered about but rarely
                  addressed openly. Where people suffered in silence because
                  seeking help felt like weakness. We set out to change that
                  narrative — one session at a time.
                </p>
                <p>
                  Today, we&apos;re a team of dedicated psychologists serving
                  individuals, couples, families, and organizations across Indore
                  and beyond. But our core hasn&apos;t changed: create a space where
                  people feel safe enough to be vulnerable, and skilled enough
                  professionals to guide them through it.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-lavender/30" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-lavender/15 flex items-center justify-center border-2 border-lavender/30">
                      <div className="w-2 h-2 rounded-full bg-lavender-deep" />
                    </div>
                    <p className="text-section-index uppercase text-lavender-deep mb-1">
                      {m.year}
                    </p>
                    <p className="text-charcoal leading-relaxed">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-section-index uppercase text-charcoal-light mb-4">
            What We Stand For
          </p>
          <h2 className="font-display text-display-section text-charcoal mb-12">
            Our values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Compassion First",
                description:
                  "Every interaction is rooted in empathy. We meet you where you are, without judgment or agenda.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Evidence-Based",
                description:
                  "Our approaches are grounded in proven psychological science — CBT, EFT, mindfulness, and more.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Confidentiality",
                description:
                  "Your privacy is sacred. Every conversation stays within the therapy room — no exceptions.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Accessibility",
                description:
                  "Mental health support should be within reach. We offer flexible pricing, online sessions, and a welcoming environment.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
              },
              {
                title: "Growth Mindset",
                description:
                  "We believe in the human capacity for change. Healing isn't linear, but progress is always possible.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: "Cultural Sensitivity",
                description:
                  "We understand the cultural context of mental health in India and tailor our approach accordingly.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-charcoal/5 bg-warm-white hover:shadow-lg hover:shadow-lavender/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-lavender/15 flex items-center justify-center text-lavender-deep mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-light text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Deep Dive */}
      <section className="section-padding bg-warm-white">
        <div className="container-wide">
          <p className="text-section-index uppercase text-charcoal-light mb-4">
            The Team
          </p>
          <h2 className="font-display text-display-section text-charcoal mb-12">
            Meet the people behind the practice
          </h2>

          <div className="space-y-16">
            {therapists.map((t, i) => (
              <div
                key={t.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Photo placeholder */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-lavender/20 via-sage/10 to-cream flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-lavender/15 flex items-center justify-center">
                      <svg className="w-16 h-16 text-lavender-deep/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-display text-2xl lg:text-3xl font-light text-charcoal">
                    {t.name}
                  </h3>
                  <p className="text-lavender-deep font-medium mt-1">{t.title}</p>
                  <p className="text-charcoal-light mt-1">{t.specialization}</p>

                  <blockquote className="mt-6 text-lg text-charcoal italic border-l-2 border-lavender pl-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.credentials.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1.5 rounded-full bg-sage/10 text-sage-deep"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-charcoal-light">
                    {t.yearsExperience}+ years of clinical experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
