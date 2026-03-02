"use client";

import { useState } from "react";
import Link from "next/link";
import { siteSettings } from "@/lib/data";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO(owner): Update to use process.env.NEXT_PUBLIC_FORM_ENDPOINT

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="relative pt-32 pb-16 min-h-[100svh]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Info & Map */}
          <div>
            <p className="text-section-index uppercase text-charcoal-light mb-4">Contact Us</p>
            <h1 className="font-display text-display-section text-charcoal mb-6">
              Let&apos;s Start a Conversation.
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-12">
              Reach out to book a session, ask about our services, or simply finding out if therapy is right for you. Our care team is here to support you.
            </p>

            <div className="space-y-8 mb-16">
              <div className="glass-panel-light p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-sage-deep" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg text-charcoal mb-1">WhatsApp Us</h4>
                  <Link href={siteSettings.whatsapp} target="_blank" className="text-charcoal-light hover:text-sage-deep transition-colors">
                    {/* TODO(owner): Replace NEXT_PUBLIC_WHATSAPP with real number in .env */}
                    {process.env.NEXT_PUBLIC_WHATSAPP || "+91 98765 43210"}
                  </Link>
                </div>
              </div>

              <div className="glass-panel-light p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lavender/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-lavender-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg text-charcoal mb-1">Email Us</h4>
                  <a href={`mailto:${siteSettings.email}`} className="text-charcoal-light hover:text-lavender-deep transition-colors">
                    hello@healing60.vercel.app
                  </a>
                </div>
              </div>

              <div className="glass-panel-light p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg text-charcoal mb-1">Visit Us</h4>
                  <p className="text-charcoal-light leading-relaxed">
                    Indore, Madhya Pradesh<br />
                    India
                    <span className="block mt-2 text-xs opacity-70">(Full address provided upon booking confirmation to ensure privacy)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <div className="glass-panel-sage p-8 md:p-10 rounded-3xl h-full shadow-lg">
              <h3 className="font-display text-2xl text-charcoal mb-8">Send a confidential message</h3>

              {isSuccess ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-sage-deep/20 flex items-center justify-center text-sage-deep mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl text-charcoal mb-4">Message Received</h4>
                  <p className="text-charcoal-light leading-relaxed max-w-sm">
                    Thank you for reaching out. A member of our care team will contact you within 24 hours to discuss the next steps.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm uppercase tracking-wider text-sage-deep font-semibold hover:text-charcoal transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 flex flex-col h-full">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-charcoal-light mb-2">First Name *</label>
                      <input type="text" id="firstName" required className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-charcoal-light mb-2">Last Name</label>
                      <input type="text" id="lastName" className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal-light mb-2">Email Address *</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal-light mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all" placeholder="+91" />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="therapist" className="block text-sm font-medium text-charcoal-light mb-2">Preferred Therapist</label>
                      <select id="therapist" className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all appearance-none">
                        <option value="">No preference</option>
                        <option value="dr-singh">Dr. Ananya Singh</option>
                        <option value="mr-sharma">Rajiv Sharma</option>
                        <option value="dr-patel">Dr. Meera Patel</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-charcoal-light mb-2">Preferred Time</label>
                      <select id="time" className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all appearance-none">
                        <option value="">Any time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 7PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-light mb-2">How can we help? *</label>
                    <textarea id="message" required rows={4} className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all resize-none"></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl text-white font-medium transition-all shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'bg-charcoal/50 cursor-not-allowed' : 'bg-charcoal hover:bg-charcoal/90 hover:shadow-lg'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Confidential Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                    <p className="text-xs text-center text-charcoal/60 mt-4 leading-relaxed max-w-[90%] mx-auto">
                      All communications are strictly confidential per professional ethics guidelines and Indian law.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
