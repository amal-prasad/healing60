import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      title: "Understanding Anxiety: What Your Body Is Telling You",
      excerpt: "Anxiety isn't just in your head—it manifests physically. Learn to recognize the subtle physical signs your body uses to communicate stress.",
      category: "Mental Wellness",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "When Is the Right Time to Seek Therapy?",
      excerpt: "You don't need a crisis to benefit from counselling. We explore the nuanced signs that indicate you might benefit from speaking to a professional.",
      category: "Therapy 101",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Building Resilience at Work Without Burning Out",
      excerpt: "How to maintain your boundaries and protect your peace while navigating high-pressure corporate environments.",
      category: "Corporate Wellness",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative pt-32 pb-24 min-h-[100svh]">
      <div className="container-wide">
        {/* Header & Search */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-section-index uppercase text-charcoal-light mb-4">Insights & Writing</p>
          <h1 className="font-display text-display-section text-charcoal mb-8">
            Notes on Mental Health
          </h1>

          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles on anxiety, relationships, growth..."
              className="w-full px-6 py-4 pl-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-full focus:outline-none focus:ring-2 focus:ring-lavender-deep/30 transition-shadow shadow-sm"
              disabled
            />
            <svg className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Featured Latest */}
        <div className="mb-16">
          <div className="group glass-panel-light rounded-3xl overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow cursor-pointer">
            <div className="md:w-1/2 relative h-[300px] md:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <Image
                src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop"
                alt="Healing journey"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-xs uppercase tracking-widest bg-sage/30 px-3 py-1.5 rounded-full text-charcoal-light font-semibold">Featured</span>
              </div>
              <p className="text-sm font-semibold text-charcoal/60 uppercase tracking-wider mb-4">Self Care • 8 min read</p>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6 group-hover:text-sage-deep transition-colors">The Myth of the Perfect Healing Journey</h2>
              <p className="text-charcoal-light leading-relaxed mb-8 text-lg">
                Healing is rarely linear. It&apos;s messy, circular, and incredibly personal. Why rejecting the pressure to &apos;heal perfectly&apos; is actually the first step toward genuine recovery.
              </p>
              <div className="flex items-center gap-3 text-charcoal font-medium group-hover:gap-4 transition-all">
                Read the article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className={`group rounded-3xl overflow-hidden cursor-pointer ${i % 2 === 0 ? 'glass-panel-sage' : 'glass-panel-lavender'} hover:shadow-lg transition-all`}>
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-charcoal-light">{post.readTime}</span>
                </div>
                <h3 className="font-display text-xl text-charcoal mb-4 line-clamp-2 leading-snug group-hover:text-charcoal-light transition-colors">{post.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-charcoal font-medium">
                  Read more
                  <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="/contact" className="inline-block glass-panel-light p-10 rounded-3xl w-full max-w-xl mx-auto hover:bg-white/50 transition-colors">
            <h3 className="font-display text-xl text-charcoal mb-3">Have a specific question?</h3>
            <p className="text-charcoal-light mb-0 text-sm">Reach out to our therapists directly.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
