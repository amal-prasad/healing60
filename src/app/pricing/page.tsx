import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Plans | Healing60",
  description: "Transparent pricing for individual therapy, couples counseling, and corporate wellness programs at Healing60.",
};

export default function PricingPage() {
  return (
    <div className="relative pt-32 pb-16 min-h-[100svh]">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-section-index uppercase text-charcoal-light mb-4">Pricing & Plans</p>
          <h1 className="font-display text-display-section text-charcoal mb-6">
            Transparent Pricing for Your Peace of Mind
          </h1>
          <p className="text-lg text-charcoal-light leading-relaxed">
            We believe that mental health care should be predictable and accessible. Choose the path that best supports your journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="glass-panel-light p-8 rounded-3xl flex flex-col h-full hover:shadow-lg transition-all">
            <h3 className="font-display text-2xl text-charcoal mb-2">Individual</h3>
            <p className="text-sm text-charcoal-light mb-6">For personal growth and healing.</p>
            <div className="text-4xl font-display text-charcoal mb-6">
              ₹1,500 <span className="text-lg text-charcoal-light">/ session</span>
              {/* TODO(owner): update pricing */}
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm text-charcoal-light"><span className="text-sage-deep">✓</span> 50-minute private session</li>
              <li className="flex items-start gap-3 text-sm text-charcoal-light"><span className="text-sage-deep">✓</span> Personalized treatment plan</li>
              <li className="flex items-start gap-3 text-sm text-charcoal-light"><span className="text-sage-deep">✓</span> In-person or online</li>
            </ul>
            <Link href="/contact" className="w-full py-3 rounded-full border border-charcoal text-center text-charcoal hover:bg-charcoal hover:text-white transition-colors">Book Individual</Link>
          </div>

          <div className="glass-panel-sage-deep p-8 rounded-3xl flex flex-col h-full transform md:-translate-y-4 shadow-xl">
            <div className="text-xs uppercase tracking-widest text-charcoal/80 font-semibold mb-4 bg-white/30 self-start px-3 py-1 rounded-full">Most Popular</div>
            <h3 className="font-display text-2xl text-charcoal mb-2">Couples</h3>
            <p className="text-sm text-charcoal/80 mb-6">For partners navigating challenges together.</p>
            <div className="text-4xl font-display text-charcoal mb-6">
              ₹2,500 <span className="text-lg text-charcoal/80">/ session</span>
              {/* TODO(owner): update pricing */}
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm text-charcoal/90"><span className="text-charcoal font-bold">✓</span> 60-minute joint session</li>
              <li className="flex items-start gap-3 text-sm text-charcoal/90"><span className="text-charcoal font-bold">✓</span> Conflict resolution strategies</li>
              <li className="flex items-start gap-3 text-sm text-charcoal/90"><span className="text-charcoal font-bold">✓</span> Communication building</li>
              <li className="flex items-start gap-3 text-sm text-charcoal/90"><span className="text-charcoal font-bold">✓</span> In-person or online</li>
            </ul>
            <Link href="/contact" className="w-full py-3 rounded-full bg-charcoal text-white text-center hover:bg-charcoal/90 transition-colors">Book Couples</Link>
          </div>

          <div className="glass-panel-lavender p-8 rounded-3xl flex flex-col h-full hover:shadow-lg transition-all">
            <h3 className="font-display text-2xl text-charcoal mb-2">Corporate</h3>
            <p className="text-sm text-charcoal-light mb-6">For supporting healthy teams.</p>
            <div className="text-4xl font-display text-charcoal mb-6">
              Custom
              {/* TODO(owner): update pricing */}
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm text-charcoal-light"><span className="text-lavender-deep">✓</span> Workshops & Seminars</li>
              <li className="flex items-start gap-3 text-sm text-charcoal-light"><span className="text-lavender-deep">✓</span> Employee Assistance Programs</li>
              <li className="flex items-start gap-3 text-sm text-charcoal-light"><span className="text-lavender-deep">✓</span> On-site or virtual support</li>
            </ul>
            <Link href="/contact" className="w-full py-3 rounded-full border border-charcoal text-center text-charcoal hover:bg-charcoal hover:text-white transition-colors">Contact Sales</Link>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="max-w-4xl mx-auto mb-24 glass-panel-light p-8 md:p-12 rounded-3xl overflow-x-auto">
          <h2 className="font-display text-3xl text-charcoal mb-8 text-center">What&apos;s Included</h2>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-charcoal/10">
                <th className="py-4 font-display text-lg text-charcoal">Feature</th>
                <th className="py-4 font-display text-lg text-charcoal text-center">Individual</th>
                <th className="py-4 font-display text-lg text-charcoal text-center">Couples</th>
                <th className="py-4 font-display text-lg text-charcoal text-center">Corporate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-charcoal/5">
                <td className="py-4 text-charcoal-light">Confidential Intake</td>
                <td className="py-4 text-center text-sage-deep">✓</td>
                <td className="py-4 text-center text-sage-deep">✓</td>
                <td className="py-4 text-center text-lavender-deep">✓</td>
              </tr>
              <tr className="border-b border-charcoal/5">
                <td className="py-4 text-charcoal-light">Between-session Resources</td>
                <td className="py-4 text-center text-sage-deep">✓</td>
                <td className="py-4 text-center text-sage-deep">✓</td>
                <td className="py-4 text-center text-lavender-deep">Custom</td>
              </tr>
              <tr className="border-b border-charcoal/5">
                <td className="py-4 text-charcoal-light">Rescheduling Flexibility</td>
                <td className="py-4 text-center text-sage-deep">24hr Notice</td>
                <td className="py-4 text-center text-sage-deep">24hr Notice</td>
                <td className="py-4 text-center text-lavender-deep">Contract</td>
              </tr>
              <tr>
                <td className="py-4 text-charcoal-light">Emergency Support Line</td>
                <td className="py-4 text-center text-charcoal/30">—</td>
                <td className="py-4 text-center text-charcoal/30">—</td>
                <td className="py-4 text-center text-lavender-deep">Priority</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl text-charcoal mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group glass-panel-sage p-6 rounded-2xl cursor-pointer">
              <summary className="font-display text-lg text-charcoal font-medium list-none flex justify-between items-center">
                Is my session covered by insurance?
                <span className="transition group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                Currently, most health insurance policies in India do not comprehensively cover outpatient psychological counselling unless stipulated in corporate group policies. However, we provide detailed invoices that you can submit to your provider for potential reimbursement.
              </p>
            </details>
            <details className="group glass-panel-sage p-6 rounded-2xl cursor-pointer">
              <summary className="font-display text-lg text-charcoal font-medium list-none flex justify-between items-center">
                What if I need to cancel or reschedule?
                <span className="transition group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                We understand that life happens. We kindly request a 24-hour notice for any cancellations or rescheduling. Cancellations made within 24 hours of the appointment may be subject to a nominal fee to respect our therapists&apos; time.
              </p>
            </details>
            <details className="group glass-panel-sage p-6 rounded-2xl cursor-pointer">
              <summary className="font-display text-lg text-charcoal font-medium list-none flex justify-between items-center">
                Do you offer a sliding scale?
                <span className="transition group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                We believe in accessible mental healthcare. We retain a limited number of slots each month at a reduced fee for students and individuals facing financial hardship. Please reach out to us directly to discuss your situation confidentially.
              </p>
            </details>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block glass-panel-lavender p-10 py-12 rounded-3xl w-full max-w-2xl">
            <h3 className="font-display text-2xl text-charcoal mb-4">Not sure which plan is right for you?</h3>
            <p className="text-charcoal-light mb-8">Talk to our care intake team to find the perfect fit without any pressure.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-white text-cta hover:bg-charcoal/90 transition-all shadow-md">
              Talk to us first
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
