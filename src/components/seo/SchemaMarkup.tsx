import { siteSettings } from "@/lib/data";

interface SchemaMarkupProps {
    type?: "MedicalWebPage" | "LocalBusiness";
    title?: string;
    description?: string;
    url?: string;
}

export default function SchemaMarkup({ type = "LocalBusiness", title, description, url }: SchemaMarkupProps) {
    const isLocalBusiness = type === "LocalBusiness";

    const schema = isLocalBusiness ? {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": siteSettings.clinicName,
        "image": "https://healing60.vercel.app/LOGO.png",
        "@id": "https://healing60.vercel.app",
        "url": "https://healing60.vercel.app",
        "telephone": siteSettings.phone,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Indore",
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "IN"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            "opens": "10:00",
            "closes": "20:00"
        },
        "sameAs": [
            siteSettings.socialLinks.instagram,
            siteSettings.socialLinks.facebook,
            siteSettings.socialLinks.linkedin
        ]
    } : {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": title || siteSettings.clinicName,
        "description": description || siteSettings.tagline,
        "url": url || "https://healing60.vercel.app",
        "publisher": {
            "@type": "MedicalClinic",
            "name": siteSettings.clinicName
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
