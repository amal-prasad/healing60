import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mental health insights, self-care tips, and expert articles from the Healing60 team.",
};

// Placeholder blog posts (would come from CMS in production)
const posts = [
  {
    slug: "understanding-anxiety",
    title: "Understanding Anxiety: Signs, Causes, and Coping Strategies",
    excerpt:
      "Anxiety is more than just worrying. Learn to recognize the signs, understand what drives it, and discover practical strategies to manage it daily.",
    category: "Mental Health",
    date: "2025-12-15",
    readTime: "5 min read",
  },
  {
    slug: "communication-in-relationships",
    title: "5 Communication Habits That Strengthen Relationships",
    excerpt:
      "Strong relationships are built on healthy communication. Here are five evidence-based habits that can transform how you connect with your partner.",
    category: "Relationships",
    date: "2025-11-28",
    readTime: "4 min read",
  },
  {
    slug: "helping-your-child-with-school-stress",
    title: "Helping Your Child Navigate School Stress",
    excerpt:
      "Academic pressure, social dynamics, and growing up — school can be overwhelming. Here's how parents can support their children's mental health.",
    category: "Parenting",
    date: "2025-11-10",
    readTime: "6 min read",
  },
  {
    slug: "burnout-recovery",
    title: "Recovering from Burnout: A Step-by-Step Guide",
    excerpt:
      "Burnout doesn't happen overnight, and recovery takes time. This guide walks you through recognizing burnout and rebuilding your energy and purpose.",
    category: "Workplace Wellness",
    date: "2025-10-22",
    readTime: "7 min read",
  },
  {
    slug: "mindfulness-for-beginners",
    title: "Mindfulness for Beginners: Start Your Practice Today",
    excerpt:
      "Mindfulness isn't about emptying your mind — it's about being present. Here's a practical, no-nonsense guide to starting a mindfulness practice.",
    category: "Self-Care",
    date: "2025-10-05",
    readTime: "4 min read",
  },
  {
    slug: "when-to-see-a-therapist",
    title: "How to Know When It's Time to See a Therapist",
    excerpt:
      "Many people wonder if their struggles are 'bad enough' to seek help. Here are clear signs that talking to a professional could make a real difference.",
    category: "Mental Health",
    date: "2025-09-18",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-section-index uppercase text-charcoal-light mb-4">
            Blog
          </p>
          <h1 className="font-display text-display-hero text-charcoal max-w-2xl text-balance">
            Insights for your{" "}
            <span className="text-gradient-sage">inner journey.</span>
          </h1>
          <p className="mt-6 text-lg text-charcoal-light max-w-xl leading-relaxed">
            Articles, guides, and expert perspectives on mental health,
            relationships, and personal growth.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="h-full flex flex-col rounded-2xl border border-charcoal/5 bg-warm-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-lavender/10 hover:border-lavender/20">
                  {/* Thumbnail placeholder */}
                  <div className="h-48 bg-gradient-to-br from-lavender/15 via-sage/10 to-cream" />

                  <div className="flex-1 flex flex-col p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-lavender/10 text-lavender-deep">
                        {post.category}
                      </span>
                      <span className="text-xs text-charcoal-light">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-lg font-light text-charcoal group-hover:text-lavender-deep transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="mt-2 text-sm text-charcoal-light leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-lavender-deep font-medium group-hover:gap-3 transition-all duration-300">
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
