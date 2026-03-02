import Link from "next/link";
import Image from "next/image";
import { siteSettings } from "@/lib/data";

export default function DepressionAnxietyServicePage() {
    return (
        <div className="relative pt-32 pb-24 min-h-[100svh]">
            <div className="container-wide">
                {/* Service Hero */}
                <div className="relative rounded-3xl overflow-hidden mb-16 h-[50vh] min-h-[400px] flex items-end">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1920&auto=format&fit=crop"
                            alt="Soft light entering a quiet room"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-10 md:p-16 w-full max-w-4xl mx-auto text-center">
                        <p className="text-sm uppercase tracking-widest text-cream/70 font-semibold mb-3">Service</p>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-md">
                            Depression & Anxiety
                        </h1>
                        <p className="text-lg text-cream/90 leading-relaxed max-w-2xl mx-auto font-medium">
                            Find your way back to balance. Gentle, evidence-based support to help you manage overwhelming thoughts and rediscover a sense of peace.
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
                                    Depression and anxiety often walk hand-in-hand, creating a cycle that can feel impossible to break. While anxiety might manifest as racing thoughts, chronic worry, physical tension, and a sense of impending dread, depression often brings a heavy fog of apathy, sadness, exhaustion, and a loss of interest in things you once loved.
                                </p>
                                <p>
                                    Both are incredibly common, but more importantly, both are highly treatable. You are not &quot;broken&quot; or weak for feeling this way. Our approach combines cognitive behavioral techniques (CBT) with mindfulness and compassion-focused therapy to help you understand your triggers, rewrite negative thought patterns, and develop practical coping mechanisms that work for your real, daily life.
                                </p>
                            </div>
                        </section>

                        <section className="glass-panel-sage p-8 md:p-10 rounded-3xl">
                            <h2 className="font-display text-2xl text-charcoal mb-6">Who is it for?</h2>
                            <p className="text-charcoal-light mb-6">This service might be right for you if you&apos;re experiencing:</p>
                            <ul className="space-y-4">
                                {[
                                    "A persistent feeling of sadness or emptiness.",
                                    "Frequent, uncontrollable worry about everyday situations.",
                                    "Physical symptoms like tight chest, poor sleep, or chronic fatigue.",
                                    "Difficulty concentrating or making decisions at work or home.",
                                    "A loss of pleasure in hobbies, socializing, or daily routines.",
                                    "Panic attacks or a constant feeling of being &apos;on edge&apos;."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-charcoal-light">
                                        <svg className="w-5 h-5 text-sage-deep shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-3xl text-charcoal mb-8">What to Expect</h2>
                            <div className="space-y-6">

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-lavender/30 flex items-center justify-center shrink-0 font-display text-lavender-deep text-xl font-medium shadow-sm border border-lavender-deep/20">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl text-charcoal mb-2">Initial Assessment</h3>
                                        <p className="text-charcoal-light leading-relaxed">We gather background information, discuss your current symptoms in a safe, non-judgmental space, and collaboratively set goals for your therapy journey.</p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-8 bg-gradient-to-b from-lavender-deep/30 to-sage-deep/30 ml-6"></div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center shrink-0 font-display text-sage-deep text-xl font-medium shadow-sm border border-sage-deep/20">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl text-charcoal mb-2">Pattern Recognition</h3>
                                        <p className="text-charcoal-light leading-relaxed">Using evidence-based frameworks, we help you identify the specific thoughts, behaviors, and environmental triggers contributing to your distress.</p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-8 bg-gradient-to-b from-sage-deep/30 to-charcoal/20 ml-6"></div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full bg-charcoal/10 flex items-center justify-center shrink-0 font-display text-charcoal text-xl font-medium shadow-sm">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl text-charcoal mb-2">Skill Building & Integration</h3>
                                        <p className="text-charcoal-light leading-relaxed">We develop a personalized toolkit of coping strategies. Over time, we practice applying these skills in real-world scenarios until they become natural resilience habits.</p>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <section>
                            <h2 className="font-display text-3xl text-charcoal mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <details className="group glass-panel-light p-6 rounded-2xl cursor-pointer">
                                    <summary className="font-display text-lg text-charcoal font-medium list-none flex justify-between items-center">
                                        How long does therapy take?
                                        <span className="text-charcoal/40 transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-4 text-charcoal-light leading-relaxed p-2">
                                        Therapy is highly individualized. Some clients find significant relief and acquire necessary tools within 8-12 weeks of focused CBT, while others benefit from longer-term support over several months or years to unpack deeper issues.
                                    </p>
                                </details>
                                <details className="group glass-panel-light p-6 rounded-2xl cursor-pointer">
                                    <summary className="font-display text-lg text-charcoal font-medium list-none flex justify-between items-center">
                                        Will you prescribe medication?
                                        <span className="text-charcoal/40 transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-4 text-charcoal-light leading-relaxed p-2">
                                        As psychologists and counsellors, we do not prescribe medication. However, if we believe your symptoms might be alleviated by pharmacological support, we will discuss this with you and refer you to a trusted consulting psychiatrist.
                                    </p>
                                </details>
                                <details className="group glass-panel-light p-6 rounded-2xl cursor-pointer">
                                    <summary className="font-display text-lg text-charcoal font-medium list-none flex justify-between items-center">
                                        I feel too exhausted to talk. Will therapy still work?
                                        <span className="text-charcoal/40 transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="mt-4 text-charcoal-light leading-relaxed p-2">
                                        Loss of energy is a core symptom of depression. You don&apos;t need to &quot;perform&quot; or entertain your therapist. Sometimes, simply showing up is the victory. We meet you where you are, even on the days where talking feels too hard.
                                    </p>
                                </details>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">

                            <div className="glass-panel-light p-8 rounded-3xl text-center">
                                <h3 className="font-display text-2xl text-charcoal mb-4">Ready to start?</h3>
                                <p className="text-charcoal-light mb-8 text-sm">Book a session today. Secure, confidential, and judgment-free.</p>

                                <div className="flex flex-col gap-4">
                                    <Link href="/contact" className="w-full py-4 rounded-full bg-charcoal text-white font-medium hover:bg-charcoal/90 transition-all shadow-md">
                                        Book Online
                                    </Link>
                                    <Link href={siteSettings.whatsapp} target="_blank" className="w-full py-4 rounded-full border border-charcoal/20 bg-white/50 text-charcoal font-medium hover:bg-white transition-all flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </Link>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-charcoal/10">
                                <p className="text-sm font-semibold uppercase tracking-wider text-charcoal/60 mb-4">Related Services</p>
                                <div className="space-y-3">
                                    <Link href="/services/relationship-counselling" className="block text-charcoal hover:text-lavender-deep transition-colors text-sm hover:translate-x-1 duration-200">→ Relationship Counselling</Link>
                                    <Link href="/services/career-counselling" className="block text-charcoal hover:text-lavender-deep transition-colors text-sm hover:translate-x-1 duration-200">→ Work Stress Management</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
