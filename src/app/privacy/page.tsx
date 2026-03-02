export default function PrivacyPage() {
  return (
    <div className="relative pt-32 pb-24 min-h-[100svh]">
      <div className="container-wide max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-section-index uppercase text-charcoal-light mb-4">Legal</p>
          <h1 className="font-display text-display-section text-charcoal mb-6">
            Privacy Policy
          </h1>
          <p className="text-charcoal-light">
            Effective Date: {/* TODO(owner): add effective date */} September 1, 2024
          </p>
        </div>

        <div className="glass-panel-light p-10 md:p-16 rounded-3xl space-y-12">

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">1. Introduction</h2>
            <p className="text-charcoal-light leading-relaxed">
              At Healing60, we are committed to protecting your privacy and ensuring the confidentiality of your personal and sensitive health information. This Privacy Policy outlines how we collect, use, and safeguard your data in compliance with the Information Technology Act, 2000 (India) and applicable global standards like GDPR where relevant.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">2. Data We Collect</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              We collect information necessary to provide you with psychological counselling services. This includes:
            </p>
            <ul className="list-disc list-inside text-charcoal-light space-y-2 ml-4">
              <li><strong>Personal Identifiable Information (PII):</strong> Name, email address, phone number, and physical address.</li>
              <li><strong>Sensitive Personal Data or Information (SPDI):</strong> Physical, physiological, and mental health conditions, medical history, and session notes.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and interaction data with our website (healing60.vercel.app).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">3. Session Confidentiality</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Therapeutic confidentiality is the cornerstone of our practice. Everything discussed in your sessions remains strictly between you and your therapist, in accordance with the Rehabilitation Council of India (RCI) ethical guidelines. We will not disclose your identity or session contents to any third party (including family members) without your explicit written consent.
            </p>
            <p className="text-charcoal-light leading-relaxed font-semibold">
              Exceptions to Confidentiality:
            </p>
            <ul className="list-disc list-inside text-charcoal-light space-y-2 ml-4 mt-2">
              <li>If there is an imminent risk of harm to yourself or others.</li>
              <li>In cases of suspected ongoing abuse of a child or vulnerable adult.</li>
              <li>If mandated by a valid court order under Indian law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">4. Data Retention and Security</h2>
            <p className="text-charcoal-light leading-relaxed">
              We retain your personal and health information only as long as necessary to fulfill the purposes for which it was collected, and to adhere to legal and professional record-keeping requirements. All digital records are stored securely using industry-standard encryption, and physical records are kept in locked, restricted-access cabinets.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">5. Third-Party Sharing</h2>
            <p className="text-charcoal-light leading-relaxed">
              Healing60 does not sell, trade, or rent your personal information to third parties. We may use trusted third-party service providers (such as secure email hosts, payment processors, or scheduling software) to assist us in operating our clinic. These providers are bound by strict confidentiality agreements and data protection standards.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">6. Your Rights</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Depending on your jurisdiction, you have the right to:
            </p>
            <ul className="list-disc list-inside text-charcoal-light space-y-2 ml-4">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your data (subject to legal and professional retention requirements).</li>
              <li>Withdraw consent for data processing at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">7. Contact for Data Requests</h2>
            <p className="text-charcoal-light leading-relaxed">
              If you have any questions regarding this Privacy Policy, wish to exercise your data rights, or have concerns about how your data is handled, please contact our Data Protection Officer at <strong>privacy@healing60.vercel.app</strong> or via our <a href="/contact" className="text-sage-deep underline hover:text-charcoal">contact form</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
