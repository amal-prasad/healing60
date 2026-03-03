"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const values = [
    {
        title: "Empathy First",
        desc: "We listen to understand, not just to respond. Your experience is valid and treated with the utmost respect.",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    {
        title: "Evidence-Based",
        desc: "Our interventions are grounded in clinically proven methodologies, ensuring you receive the highest standard of care.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        title: "Confidentiality",
        desc: "What is said in therapy stays in therapy. We strictly adhere to RCI and HIPAA confidentiality guidelines.",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
];

export default function AboutSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center section-padding overflow-hidden">
            <div className="absolute inset-0 z-0 glass-separator-sage" />

            <div className="container-wide relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-section-index uppercase text-charcoal-light mb-4"
                >
                    About Us
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.7 }}
                    className="font-display text-display-section text-charcoal mb-6 max-w-3xl"
                >
                    A Space Where Healing Begins
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-lg text-charcoal-light leading-relaxed max-w-2xl mb-16"
                >
                    Healing60 was founded on a simple belief: mental health care should be
                    accessible, empathetic, and tailored to the individual. Nestled in the
                    heart of Indore, our clinic provides a safe haven for those seeking to
                    understand themselves better.
                </motion.p>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {values.map((val, i) => (
                        <motion.div
                            key={val.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
                            className={`p-8 rounded-2xl ${i % 2 === 0 ? "glass-panel-lavender" : "glass-panel-sage"
                                }`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-charcoal/5 flex items-center justify-center text-charcoal mb-6">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d={val.icon}
                                    />
                                </svg>
                            </div>
                            <h3 className="font-display text-xl font-medium text-charcoal mb-3">
                                {val.title}
                            </h3>
                            <p className="text-sm text-charcoal-light leading-relaxed">
                                {val.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Link to full page */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-center"
                >
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-charcoal/20 bg-white/40 text-charcoal text-cta hover:bg-charcoal hover:text-white transition-all duration-300 shadow-sm"
                    >
                        Learn more about us
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
