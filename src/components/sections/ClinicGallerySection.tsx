"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/images/sections/clinic-reception.jpeg",
    alt: "Warm, welcoming reception area with soft lighting and plants",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/images/sections/therapy-room-1.jpeg",
    alt: "Comfortable therapy room with natural light and cozy seating",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/sections/therapy-room-2.jpeg",
    alt: "Private consultation space designed for comfort and confidentiality",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/sections/clinic-plants.jpeg",
    alt: "Calming greenery and natural elements in the clinic",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function ClinicGallerySection() {
  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sage-600 font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            Our Space
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900 mb-6"
          >
            A Safe Haven for Healing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-charcoal-600"
          >
            We&apos;ve designed our clinic to feel less like a medical facility and more like a warm, inviting sanctuary where you can truly relax and open up.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${image.className}`}
            >
              <div className="absolute inset-0 bg-sage-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {/* Using a placeholder div with background color if image is missing, but we&apos;ll use next/image */}
              <div className="w-full h-full bg-sage-100 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
