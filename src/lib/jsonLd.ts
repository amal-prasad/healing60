import { siteSettings, therapists } from "./data";

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteSettings.clinicName,
    description:
      "Professional psychology and counselling services in Indore. Expert therapists for anxiety, depression, relationships, child counselling, and corporate wellness.",
    url: "https://healing60.com",
    telephone: siteSettings.phone,
    email: siteSettings.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.7196",
      longitude: "75.8577",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteSettings.stats.rating.toString(),
      reviewCount: siteSettings.stats.livesTouched.toString(),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: Object.values(siteSettings.socialLinks).filter(Boolean),
  };
}

export function generateTherapistJsonLd(therapistId: string) {
  const therapist = therapists.find((t) => t.id === therapistId);
  if (!therapist) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: therapist.name,
    jobTitle: therapist.title,
    worksFor: {
      "@type": "MedicalBusiness",
      name: siteSettings.clinicName,
    },
    description: therapist.quote,
    knowsAbout: therapist.specialization,
  };
}
