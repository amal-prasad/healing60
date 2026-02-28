import type { Metadata } from "next";
import { outfit, inter } from "@/lib/fonts";
import { generateLocalBusinessJsonLd } from "@/lib/jsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import PageTransition from "@/components/layout/PageTransition";
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
        className={`${outfit.variable} ${inter.variable} font-body antialiased bg-cream text-charcoal`}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
