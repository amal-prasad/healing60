"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "GlobalHealth", logo: "GH" },
  { name: "InnovateInc", logo: "II" },
  { name: "EduTrust", logo: "ET" },
  { name: "FinServe", logo: "FS" },
];

export default function CorporateLogosSection() {
  return (
    <section className="py-16 bg-white border-y border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-charcoal-400 uppercase tracking-widest"
          >
            Trusted by forward-thinking organisations
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {/* Placeholder for actual logos */}
              <div className="text-2xl font-bold text-charcoal-800 tracking-tighter flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center text-sage-700 text-lg">
                  {partner.logo}
                </div>
                <span className="hidden sm:block">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
