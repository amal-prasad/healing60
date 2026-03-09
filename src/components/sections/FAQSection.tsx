"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is therapy confidential?",
    answer: "Yes, absolutely. Everything discussed in your sessions is strictly confidential. We adhere to the highest ethical standards and legal requirements to protect your privacy. Information is only shared with your explicit written consent or in rare situations where there is a risk of harm to yourself or others.",
  },
  {
    question: "How long does a typical session last?",
    answer: "A standard individual therapy session lasts for 50 minutes. Couples and family sessions may be scheduled for 60 to 90 minutes depending on your specific needs and the therapist's recommendation.",
  },
  {
    question: "Do you offer online sessions?",
    answer: "Yes, we offer secure, HIPAA-compliant online therapy sessions for clients who prefer the convenience of meeting from home or are unable to visit our clinic in person. The quality of care remains exactly the same.",
  },
  {
    question: "How much does therapy cost?",
    answer: "Our session fees vary depending on the therapist's experience level and the type of therapy (individual, couples, etc.). We believe in transparent pricing and will discuss all costs during your initial consultation. We also offer a limited number of sliding-scale slots based on financial need.",
  },
  {
    question: "How do I know if I need therapy?",
    answer: "Therapy is beneficial for anyone seeking personal growth, better relationships, or support during difficult times. If you're feeling overwhelmed, stuck, experiencing persistent sadness or anxiety, or simply want a safe space to process your thoughts, therapy can be a valuable resource.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-[40vh] py-section flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 glass-separator-lavender" />
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sage-600 font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel-light rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-charcoal-900 pr-8">{faq.question}</span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 text-sage-600 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-charcoal-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
