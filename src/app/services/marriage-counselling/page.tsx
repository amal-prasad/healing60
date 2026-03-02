import Link from "next/link";
import Image from "next/image";
import { siteSettings } from "@/lib/data";

export default function MarriageCounsellingServicePage() {
    return (
        <div className="relative pt-32 pb-24 min-h-[100svh]">
            <div className="container-wide">
                {/* Service Hero */}
                <div className="relative rounded-3xl overflow-hidden mb-16 h-[50vh] min-h-[400px] flex items-end">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1518193836376-78b17643e264?q=80&w=1920&auto=format&fit=crop"
                            alt="Two rings connected"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-10 md:p-16 w-full max-w-4xl mx-auto text-center">
                        <p className="text-sm uppercase tracking-widest text-cream/70 font-semibold mb-3">Service</p>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-md">
                            Pre-Marital Counselling
                        </h1>
                        <p className="text-lg text-cream/90 leading-relaxed max-w-2xl mx-auto font-medium">
                            Build a resilient foundation before you say &quot;I do.&quot; Navigate critical conversations about values, finances, and family in a supportive setting.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        <section>
                            <h2 className="font-display text-3xl text-charcoal mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-sage/30 flex items-center justify-center shrink-0">
                                    <span className="w-2.5 h-2.5 rounded-full bg-sage-deep"></span>
                                </div>
                                What it is
                            </h2>
                            <div className="prose prose-lg text-charcoal-light leading-relaxed max-w-none">
                                <p>
                                    Marriage is a profound transition. While wedding planning focuses on the single day, pre-marital counselling focuses on the decades that follow. Many couples enter marriage carrying unspoken assumptions about gender roles, financial management, and conflict resolution derived from their families of origin.
                                </p>
                                <p>
                                    Our pre-marital program is a structured, entirely secular, and fundamentally practical approach to ensuring you and your partner are on the same page. We provide a safe, neutral space to have the &quot;hard conversations&quot; before they become entrenched problems later in the marriage.
                                </p>
                            </div>
                        </section>

                        <section className="glass-panel-sage p-8 md:p-10 rounded-3xl">
                            <h2 className="font-display text-2xl text-charcoal mb-6">Core Topics We Cover</h2>
                            <p className="text-charcoal-light mb-6">Our sessions systematically explore the pillars of a successful partnership:</p>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Conflict Management Styles",
                                    "Financial Values & Planning",
                                    "Family Planning & Parenting Philosophies",
                                    "Intimacy & Affection",
                                    "Navigating Extended Family Boundaries",
                                    "Career Ambitions vs. Family Life",
                                    "Religious & Cultural Differences",
                                    "Division of Household Labor"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-charcoal-light bg-white/40 p-3 rounded-xl border border-white/60">
                                        <svg className="w-5 h-5 text-sage-deep shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-3xl text-charcoal mb-8">Why Invest in It?</h2>
                            <div className="space-y-6">

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-lavender/30 flex items-center justify-center shrink-0 font-display text-lavender-deep text-xl font-medium shadow-sm border border-lavender-deep/20">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl text-charcoal mb-2">Preventative Care</h3>
                                        <p className="text-charcoal-light leading-relaxed">Most couples wait until a relationship is in crisis to seek therapy (often 6 years after problems begin). Pre-marital counselling equips you with conflict resolution tools *before* resentment builds.</p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-8 bg-gradient-to-b from-lavender-deep/30 to-sage-deep/30 ml-6"></div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center shrink-0 font-display text-sage-deep text-xl font-medium shadow-sm border border-sage-deep/20">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl text-charcoal mb-2">Uncovering Blind Spots</h3>
                                        <p className="text-charcoal-light leading-relaxed">It is easy to assume your partner views fundamental issues (like debt or how often to visit in-laws) the same way you do. We bring these implicit assumptions to light.</p>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">

                            <div className="glass-panel-light p-8 rounded-3xl text-center">
                                <h3 className="font-display text-2xl text-charcoal mb-4">Invest in your foundation.</h3>
                                <p className="text-charcoal-light mb-8 text-sm">We recommend starting 3-6 months before the wedding.</p>

                                <div className="flex flex-col gap-4">
                                    <Link href="/contact" className="w-full py-4 rounded-full bg-charcoal text-white font-medium hover:bg-charcoal/90 transition-all shadow-md">
                                        Book First Session
                                    </Link>
                                    <Link href={siteSettings.whatsapp} target="_blank" className="w-full py-4 rounded-full border border-charcoal/20 bg-white/50 text-charcoal font-medium hover:bg-white transition-all flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
