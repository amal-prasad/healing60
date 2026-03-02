export default function TermsPage() {
  return (
    <div className="relative pt-32 pb-24 min-h-[100svh]">
      <div className="container-wide max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-section-index uppercase text-charcoal-light mb-4">Legal</p>
          <h1 className="font-display text-display-section text-charcoal mb-6">
            Terms of Service
          </h1>
          <p className="text-charcoal-light">
            Last Updated: {/* TODO(owner): add effective date */} September 1, 2024
          </p>
        </div>

        <div className="glass-panel-sage p-10 md:p-16 rounded-3xl space-y-12">

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p className="text-charcoal-light leading-relaxed">
              By accessing and using the Healing60 website (healing60.vercel.app) and engaging our counselling services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">2. Scope of Services & Medical Disclaimer</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Healing60 provides psychological counselling, therapy, and related mental health services.
            </p>
            <div className="bg-white/40 border-l-4 border-lavender-deep p-6 rounded-r-xl my-6">
              <p className="font-semibold text-charcoal mb-2">Not a Substitute for Emergency Medical Care</p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Our services are not intended for acute psychiatric emergencies or crisis situations. If you are experiencing a medical emergency, having suicidal thoughts, or feel you are a danger to yourself or others, please immediately call your local emergency services, visit the nearest hospital emergency room, or contact a crisis hotline (e.g., iCall: 9152987821 in India).
              </p>
            </div>
            <p className="text-charcoal-light leading-relaxed">
              Counselling is a collaborative process, and while we use evidence-based practices, we cannot guarantee specific outcomes. Our services do not substitute for psychiatric evaluation or prescription medication where clinically indicated.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">3. Session Booking & Payment Policy</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Appointments must be booked in advance. Payment for sessions is due either at the time of booking or immediately following the session, depending on the agreed-upon structure. We accept UPI, bank transfers, and major credit/debit cards.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">4. Cancellation & Rescheduling Policy</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              We value both your time and our therapists&apos; time. To respect the schedule of our professionals and other clients waiting for appointments, we enforce the following policy:
            </p>
            <ul className="list-disc list-inside text-charcoal-light space-y-2 ml-4">
              {/* TODO(owner): define policy */}
              <li><strong>Notice Period:</strong> We require a minimum of 24 hours&apos; notice for cancelling or rescheduling an appointment without penalty.</li>
              <li><strong>Late Cancellations:</strong> Cancellations made less than 24 hours before the scheduled session may incur a fee of up to 100% of the session cost.</li>
              <li><strong>No-Shows:</strong> Failure to attend a scheduled session without prior notice will result in a full charge for the missed session.</li>
              <li><strong>Exceptions:</strong> We understand emergencies happen. Genuine medical or family emergencies will be considered on a case-by-case basis.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">5. Teletherapy Guidelines</h2>
            <p className="text-charcoal-light leading-relaxed">
              For online sessions, it is your responsibility to ensure you have a stable internet connection and are in a private, distraction-free environment. For safety and compliance reasons, sessions cannot be conducted while you are driving or in a public space where confidentiality cannot be maintained. Recording of sessions by either party is strictly prohibited unless explicitly agreed upon in writing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">6. Limitation of Liability</h2>
            <p className="text-charcoal-light leading-relaxed">
              To the maximum extent permitted by applicable Indian law, Healing60, its therapists, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use our services; (b) any conduct or content of any third party on the services; or (c) unauthorized access, use, or alteration of your transmissions or content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">7. Governing Law</h2>
            <p className="text-charcoal-light leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Indore, Madhya Pradesh.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
