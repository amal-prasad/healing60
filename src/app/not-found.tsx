import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-wide text-center max-w-xl">
        {/* Decorative 404 */}
        <div className="relative mb-8">
          <span className="font-display text-[10rem] lg:text-[14rem] font-light leading-none text-charcoal/[0.04] select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-lavender/20 filter blur-[40px] animate-pulse-glow" />
          </div>
        </div>

        <h1 className="font-display text-display-section text-charcoal -mt-16 relative z-10">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-charcoal-light leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-lavender text-charcoal text-cta hover:bg-lavender-deep hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-lavender/30"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-charcoal/20 text-charcoal text-cta hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
