import type { Metadata } from "next";
import { outfit, inter } from "@/lib/fonts";
import { generateLocalBusinessJsonLd } from "@/lib/jsonLd";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import PageTransition from "@/components/layout/PageTransition";
import Bubbles from "@/components/layout/Bubbles";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Healing60 — Psychology & Counselling in Indore",
    template: "%s | Healing60",
  },
  description:
    "Professional psychology and counselling services in Indore. Expert therapists for anxiety, depression, relationships, child counselling, and corporate wellness. Book your session today.",
  keywords: [
    "psychologist in Indore",
    "counselling Indore",
    "therapy Indore",
    "anxiety counselling",
    "depression therapy",
    "marriage counselling Indore",
    "child psychologist Indore",
    "corporate wellness Indore",
    "mental health Indore",
    "Healing60",
  ],
  openGraph: {
    title: "Healing60 — A Space Where Healing Begins",
    description:
      "Professional psychology and counselling services in Indore. Expert therapists helping individuals, couples, and families navigate life's challenges.",
    url: "https://healing60.com",
    siteName: "Healing60",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing60 — Psychology & Counselling in Indore",
    description:
      "Professional psychology and counselling services in Indore.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessJsonLd()),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-body antialiased text-charcoal`}
      >
        <div className="fixed inset-0 -z-50 w-full h-full bg-[#FAF7F2] md:fixed absolute overflow-hidden">
          <Image
            src="/leaves.png"
            alt="Nature Background"
            fill
            className="object-cover blur-[14px] scale-110 opacity-90 transition-all duration-1000"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-[#6B9B63]/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#FAF7F2]/30 backdrop-blur-[16px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-[#A8C5A0]/20" />
        </div>

        <Bubbles />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
