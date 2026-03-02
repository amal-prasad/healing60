import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Healing60",
  description: "Learn about Healing60's core values, mission, and how our experienced psychologists and counselors provide empathetic, professional care.",
};

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-16 min-h-[100svh]">
      {/* Hero Section */}
      <section className="container-wide mb-16">
        <div className="glass-panel-sage p-10 md:p-16 text-center max-w-4xl mx-auto rounded-3xl">
          <p className="text-section-index uppercase text-charcoal-light mb-4">About Us</p>
          <h1 className="font-display text-display-section text-charcoal mb-6">
            A Space Where Healing Begins
          </h1>
          <p className="text-lg text-charcoal-light leading-relaxed">
            Healing60 was founded on a simple belief: mental health care should be accessible, empathetic, and tailored to the individual. Nestled in the heart of Indore, our clinic provides a safe haven for those seeking to understand themselves better, overcome challenges, and build resilience.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container-wide mb-24">
        <h2 className="font-display text-3xl md:text-4xl text-charcoal text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Empathy First", desc: "We listen to understand, not just to respond. Your experience is valid and treated with the utmost respect.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            { title: "Evidence-Based", desc: "Our interventions are grounded in clinically proven methodologies, ensuring you receive the highest standard of care.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { title: "Confidentiality", desc: "What is said in therapy stays in therapy. We strictly adhere to RCI and HIPAA confidentiality guidelines.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
          ].map((val, i) => (
            <div key={val.title} className={`p-8 rounded-2xl ${i % 2 === 0 ? 'glass-panel-lavender' : 'glass-panel-sage'}`}>
              <div className="w-12 h-12 rounded-xl bg-charcoal/5 flex items-center justify-center text-charcoal mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={val.icon} />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-charcoal mb-3">{val.title}</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="container-wide mb-24 text-center">
        <div className="glass-panel-light p-10 md:p-16 rounded-3xl mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">Why Choose Healing60?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <span className="text-sage-deep mt-1 text-2xl">•</span>
              <p className="text-charcoal-light"><strong>RCI-Licensed Professionals:</strong> All our therapists hold valid certifications and undergo continuous training.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-sage-deep mt-1 text-2xl">•</span>
              <p className="text-charcoal-light"><strong>Holistic Approach:</strong> We don&apos;t just treat symptoms; we explore root causes for lasting change.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-lavender-deep mt-1 text-2xl">•</span>
              <p className="text-charcoal-light"><strong>Modern Space:</strong> Specifically designed to reduce clinical anxiety and promote a sense of calm from the moment you step in.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-lavender-deep mt-1 text-2xl">•</span>
              <p className="text-charcoal-light"><strong>Flexible Care:</strong> Offering both in-person sessions in Indore and secure online sessions worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="container-wide text-center">
        <div className="inline-block glass-panel-sage p-10 rounded-3xl">
          <h3 className="font-display text-2xl text-charcoal mb-4">You don&apos;t have to navigate this alone.</h3>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-white text-cta hover:bg-charcoal/90 transition-all shadow-md">
            Reach out to us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
