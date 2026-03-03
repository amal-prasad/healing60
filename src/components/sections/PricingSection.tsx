"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Individual",
        price: "₹1,500",
        unit: "/ session",
        desc: "For personal growth and healing.",
        features: [
            "50-minute private session",
            "Personalized treatment plan",
            "In-person or online",
        ],
        panel: "glass-panel-light",
        check: "text-sage-deep",
        cta: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
        popular: false,
    },
    {
        name: "Couples",
        price: "₹2,500",
        unit: "/ session",
        desc: "For partners navigating challenges together.",
        features: [
            "60-minute joint session",
            "Conflict resolution strategies",
            "Communication building",
            "In-person or online",
        ],
        panel: "glass-panel-sage-deep",
        check: "text-charcoal font-bold",
        cta: "bg-charcoal text-white hover:bg-charcoal/90",
        popular: true,
    },
    {
        name: "Corporate",
        price: "Custom",
        unit: "",
        desc: "For supporting healthy teams.",
        features: [
            "Workshops & Seminars",
            "Employee Assistance Programs",
            "On-site or virtual support",
        ],
        panel: "glass-panel-lavender",
        check: "text-lavender-deep",
        cta: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
        popular: false,
    },
];

export default function PricingSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center section-padding overflow-hidden">
            <div className="absolute inset-0 z-0 glass-separator-light" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <p className="text-section-index uppercase text-charcoal-light mb-4">
                        Pricing & Plans
                    </p>
                    <h2 className="font-display text-display-section text-charcoal mb-6">
                        Transparent Pricing for Your Peace of Mind
                    </h2>
                    <p className="text-lg text-charcoal-light leading-relaxed">
                        We believe that mental health care should be predictable and
                        accessible. Choose the path that best supports your journey.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
                            className={`${plan.panel} p-8 rounded-3xl flex flex-col h-full ${plan.popular
                                    ? "transform md:-translate-y-4 shadow-xl"
                                    : "hover:shadow-lg"
                                } transition-all`}
                        >
                            {plan.popular && (
                                <div className="text-xs uppercase tracking-widest text-charcoal/80 font-semibold mb-4 bg-white/30 self-start px-3 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="font-display text-2xl text-charcoal mb-2">
                                {plan.name}
                            </h3>
                            <p
                                className={`text-sm ${plan.popular ? "text-charcoal/80" : "text-charcoal-light"
                                    } mb-6`}
                            >
                                {plan.desc}
                            </p>
                            <div className="text-4xl font-display text-charcoal mb-6">
                                {plan.price}{" "}
                                {plan.unit && (
                                    <span
                                        className={`text-lg ${plan.popular ? "text-charcoal/80" : "text-charcoal-light"
                                            }`}
                                    >
                                        {plan.unit}
                                    </span>
                                )}
                            </div>
                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((f) => (
                                    <li
                                        key={f}
                                        className={`flex items-start gap-3 text-sm ${plan.popular ? "text-charcoal/90" : "text-charcoal-light"
                                            }`}
                                    >
                                        <span className={plan.check}>✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className={`w-full py-3 rounded-full text-center transition-colors ${plan.cta}`}
                            >
                                {plan.name === "Corporate" ? "Contact Sales" : `Book ${plan.name}`}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Full pricing link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-center"
                >
                    <Link
                        href="/pricing"
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-charcoal-light font-semibold hover:text-charcoal transition-colors"
                    >
                        View full pricing & FAQ
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
