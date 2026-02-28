import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Healing60 privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <div className="prose max-w-none text-charcoal-light leading-relaxed space-y-6">
            <p className="text-sm text-charcoal-light">
              Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you use our website or services, we may collect personal information
              such as your name, email address, phone number, and any information you
              provide through our contact forms or during therapy sessions.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to provide counselling services, respond to
              inquiries, schedule appointments, and improve our website experience.
              We never sell or share your personal data with third parties for
              marketing purposes.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              3. Confidentiality
            </h2>
            <p>
              All therapy sessions and communications are strictly confidential, in
              accordance with the Rehabilitation Council of India (RCI) guidelines and
              professional ethics. Information shared during therapy is never disclosed
              without your explicit written consent, except where required by law.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              5. Cookies
            </h2>
            <p>
              Our website may use cookies and similar technologies to enhance your
              browsing experience and analyze website traffic. You can control cookie
              settings through your browser preferences.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              information at any time. To exercise these rights, please contact us
              at hello@healing60.com.
            </p>

            <h2 className="font-display text-xl font-light text-charcoal mt-8 mb-3">
              7. Contact
            </h2>
            <p>
              If you have questions about this privacy policy, please contact us at{" "}
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
