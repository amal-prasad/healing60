import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return [
    { slug: "understanding-anxiety" },
    { slug: "communication-in-relationships" },
    { slug: "helping-your-child-with-school-stress" },
    { slug: "burnout-recovery" },
    { slug: "mindfulness-for-beginners" },
    { slug: "when-to-see-a-therapist" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In production, fetch from CMS
  const title = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title,
    description: `Read our article on ${title.toLowerCase()} from the Healing60 blog.`,
  };
}

export default function BlogPostPage({ params }: Props) {
  const title = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <main className="pt-20">
      <article className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-charcoal-light hover:text-charcoal transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>

          <h1 className="font-display text-display-section text-charcoal text-balance">
            {title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-charcoal-light">
            <span>Healing60 Team</span>
            <span className="w-1 h-1 rounded-full bg-charcoal-light" />
            <span>5 min read</span>
          </div>

          <div className="mt-12 prose prose-lg max-w-none text-charcoal-light leading-relaxed">
            <p>
              This article is coming soon. We&apos;re working on bringing you
              thoughtful, evidence-based content on mental health and well-being.
            </p>
            <p>
              In the meantime, if you&apos;d like to discuss any mental health
              concerns, please don&apos;t hesitate to{" "}
              <Link href="/contact" className="text-lavender-deep hover:underline">
                reach out to us
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
