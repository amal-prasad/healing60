"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteSettings } from "@/lib/data";

const contactMethods = [
    {
        title: "WhatsApp Us",
        href: siteSettings.whatsapp,
        external: true,
        detail: siteSettings.phone,
        panel: "bg-sage/20",
        iconColor: "text-sage-deep",
        icon: (
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        ),
    },
    {
        title: "Email Us",
        href: `mailto:${siteSettings.email}`,
        external: false,
        detail: siteSettings.email,
        panel: "bg-lavender/20",
        iconColor: "text-lavender-deep",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        ),
    },
    {
        title: "Visit Us",
        href: "/contact",
        external: false,
        detail: "Indore, Madhya Pradesh, India",
        panel: "bg-charcoal/5",
        iconColor: "text-charcoal-light",
        icon: (
            <>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </>
        ),
    },
];

export default function ContactSection() {
    return (
        <section className="relative min-h-[60vh] flex items-center section-padding overflow-hidden">
            <div className="absolute inset-0 z-0 glass-separator-sage" />

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Text */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-section-index uppercase text-charcoal-light mb-4"
                        >
                            Contact Us
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="font-display text-display-section text-charcoal mb-6"
                        >
                            Let&apos;s Start a Conversation.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-lg text-charcoal-light leading-relaxed mb-10"
                        >
                            Reach out to book a session, ask about our services, or simply
                            find out if therapy is right for you. Our care team is here to
                            support you.
                        </motion.p>

                        {/* Contact Methods */}
                        <div className="space-y-5">
                            {contactMethods.map((method, i) => (
                                <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={method.href}
                                        {...(method.external
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                        className="glass-panel-light p-5 rounded-2xl flex items-center gap-4 group hover:shadow-md transition-all duration-300"
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-full ${method.panel} flex items-center justify-center shrink-0`}
                                        >
                                            <svg
                                                className={`w-5 h-5 ${method.iconColor}`}
                                                fill={method.title === "WhatsApp Us" ? "currentColor" : "none"}
                                                stroke={method.title === "WhatsApp Us" ? "none" : "currentColor"}
                                                viewBox="0 0 24 24"
                                            >
                                                {method.icon}
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-display text-lg text-charcoal group-hover:text-sage-deep transition-colors">
                                                {method.title}
                                            </h4>
                                            <p className="text-sm text-charcoal-light">
                                                {method.detail}
                                            </p>
                                        </div>
                                        <svg
                                            className="w-4 h-4 ml-auto text-charcoal/30 group-hover:text-charcoal/60 group-hover:translate-x-1 transition-all"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="glass-panel-sage p-10 md:p-14 rounded-3xl text-center shadow-lg"
                    >
                        <div className="w-16 h-16 rounded-full bg-sage-deep/10 flex items-center justify-center text-sage-deep mx-auto mb-6">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl text-charcoal mb-4">
                            Send a Confidential Message
                        </h3>
                        <p className="text-charcoal-light leading-relaxed mb-8">
                            Fill out our secure contact form and a member of our care team will
                            respond within 24 hours. All communications are strictly
                            confidential.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-white text-cta hover:bg-charcoal/90 transition-all duration-300 shadow-md"
                        >
                            Open Contact Form
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
                        <p className="mt-6 text-xs text-charcoal/60">
                            All conversations are 100% confidential. No commitment required.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
