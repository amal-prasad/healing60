"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  sectionIndex?: string;
  heading: string;
  body: string | React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  glassPanelVariant?: string;
  className?: string;
}

export default function AnimatedSection({
  imageSrc,
  imageAlt = "",
  imagePosition = "left",
  sectionIndex,
  heading,
  body,
  ctaLabel,
  ctaHref,
  glassPanelVariant = "glass-separator-sage",
  className = "",
}: AnimatedSectionProps) {
  const isRight = imagePosition === "right";

  let childIndex = 0;
  const getDelay = () => 0.6 + childIndex++ * 0.12;

  return (
    <section className={`relative overflow-hidden section-padding w-full ${className}`}>
      <div className={`absolute inset-0 z-0 ${glassPanelVariant}`} />

      <div className="container-wide relative z-10">
        <div
          className={`flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center ${
            isRight ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-1/2 overflow-hidden rounded-2xl"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto max-h-[50vh] md:max-h-none object-cover rounded-2xl"
            />
          </motion.div>

          {/* TEXT COLUMN */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {sectionIndex && (
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: getDelay() }}
                className="text-section-index uppercase text-charcoal-light mb-4"
              >
                {sectionIndex}
              </motion.p>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: getDelay() }}
              className="font-display text-display-section text-charcoal mb-6"
            >
              {heading}
            </motion.h2>

            {typeof body === "string" ? (
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: getDelay() }}
                className="text-lg text-charcoal-light leading-relaxed mb-8"
              >
                {body}
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: getDelay() }}
                className="text-lg text-charcoal-light leading-relaxed mb-8"
              >
                {body}
              </motion.div>
            )}

            {ctaLabel && ctaHref && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: getDelay() }}
              >
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-charcoal/20 bg-white/40 text-charcoal text-cta hover:bg-charcoal hover:text-white transition-all duration-300 shadow-sm"
                >
                  {ctaLabel}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
