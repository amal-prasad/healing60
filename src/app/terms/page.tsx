import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Healing60 terms of service — the rules and guidelines for using our website and services.",
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-charcoal-light hover:text-charcoal transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Home
          </Link>

          <h1 className="font-display text-display-section text-charcoal mb-8">
            Terms of Service
          </h1>

          <div className="prose max-w-none text-charcoal-light leading-relaxed space-y-6">
            <p className="text-sm text-charcoal-light">
              Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              1. Services
            </h2>
            <p>
              Healing60 provides professional psychology and counselling services.
              Our services are intended for informational and therapeutic purposes
              and should not be considered a substitute for emergency medical care.
              If you are in crisis, please contact emergency services immediately.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              2. Appointments & Cancellations
            </h2>
            <p>
              Sessions must be booked in advance. Cancellations made less than 24
              hours before the scheduled appointment may incur a cancellation fee.
              We understand that emergencies happen and handle such situations on a
              case-by-case basis.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              3. Professional Standards
            </h2>
            <p>
              All therapists at Healing60 are licensed by the Rehabilitation Council
              of India (RCI) and adhere to the ethical guidelines set forth by
              professional psychological associations. Our services are delivered
              with the highest standards of professionalism and care.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              4. Limitations of Liability
            </h2>
            <p>
              While we strive to provide the highest quality care, therapy outcomes
              vary by individual. Healing60 is not liable for any decisions made
              based on the information or guidance provided during therapy sessions.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              5. Website Use
            </h2>
            <p>
              The content on this website is provided for general informational
              purposes. While we make every effort to keep the information accurate
              and up-to-date, we make no guarantees about the completeness or
              accuracy of the content.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and design
              elements, is the property of Healing60 and is protected by intellectual
              property laws. Unauthorized reproduction is prohibited.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              7. Contact
            </h2>
            <p>
              For questions about these terms, please contact us at{" "}
              <a href="mailto:hello@healing60.com" className="text-lavender-deep hover:underline">
                hello@healing60.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
