"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Array of philosophical quotes related to mental health/healing
const QUOTES = [
    "Healing is not linear. Like nature, it unfolds in its own time.",
    "Your experience is valid, and you don't have to carry it alone.",
    "The quietest moments often hold the deepest growth.",
    "Self-compassion is the first step back to yourself.",
    "A space where your mind is allowed to simply breathe.",
];

export default function GlobalLoader() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // We use `null` to denote "uninitialized" so we don't flash the wrong loader
    // before the component mounts.
    const [loadingMode, setLoadingMode] = useState<"initial" | "route" | null>(null);

    // Track if we've completed the heavy initial mount sequence
    const hasCompletedInitialMount = useRef(false);

    // Randomly select one quote per initial load to keep the experience fresh
    const [quote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);

    useEffect(() => {
        // If it's the very first time this component runs on the client:
        if (!hasCompletedInitialMount.current) {
            setLoadingMode("initial");

            // Lock scroll completely
            document.body.style.overflow = "hidden";

            // The initial "Breathing Iris" takes ~3500ms
            const initialTimer = setTimeout(() => {
                hasCompletedInitialMount.current = true;
                setLoadingMode(null);
                document.body.style.overflow = "";

                // Dispatch event for Hero animations to synchronize
                setTimeout(() => {
                    document.dispatchEvent(new CustomEvent("hero:release"));
                }, 100);
            }, 3500);

            // Failsafe specifically for hydration/hero sync
            const failsafe = setTimeout(() => {
                // @ts-expect-error fallback
                window.__HEALING60_LOADER_DONE = true;
            }, 3600);

            return () => {
                clearTimeout(initialTimer);
                clearTimeout(failsafe);
            };
        }

        // If we've already done the initial mount, this is a ROUTE CHANGE.
        else {
            setLoadingMode("route");
            document.body.style.overflow = "hidden";

            // The ultra-fast "Soft Wipe" Route Change mode (500ms hold)
            const routeTimer = setTimeout(() => {
                setLoadingMode(null);
                document.body.style.overflow = "";
            }, 500);

            return () => clearTimeout(routeTimer);
        }

        // We intentionally watch pathname and searchParams to trigger re-runs
    }, [pathname, searchParams]);

    // Don't render anything if not loading
    if (loadingMode === null) return null;

    return (
        <AnimatePresence>
            {loadingMode === "initial" && (
                <motion.div
                    key="initial-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-cream overflow-hidden"
                >
                    {/* Heavy frost layer for premium feel */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[20px] pointer-events-none" />

                    {/* The "Breathing Iris" Concentric Circles */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 0] }}
                            transition={{ duration: 3.5, ease: "easeInOut" }}
                            className="absolute w-[60vh] h-[60vh] rounded-full border border-sage-deep/30"
                        />
                        <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: [0.6, 1.1, 0.9], opacity: [0, 0.8, 0] }}
                            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.2 }}
                            className="absolute w-[45vh] h-[45vh] rounded-full border border-lavender-deep/40"
                        />
                        <motion.div
                            initial={{ scale: 0.4, opacity: 0 }}
                            animate={{ scale: [0.4, 1, 0.8], opacity: [0, 0.5, 0] }}
                            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.4 }}
                            className="absolute w-[30vh] h-[30vh] rounded-full bg-sage-deep/5 backdrop-blur-md"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center max-w-lg px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        >
                            <Image
                                src="/LOGO.png"
                                alt="Healing60"
                                width={140}
                                height={140}
                                className="w-auto h-auto opacity-90 drop-shadow-sm"
                                priority
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                            className="mt-8 text-charcoal/80 font-body text-sm md:text-base tracking-wide leading-relaxed font-light italic"
                        >
                            {quote}
                        </motion.p>
                    </div>
                </motion.div>
            )}

            {loadingMode === "route" && (
                <motion.div
                    key="route-loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-cream/90 backdrop-blur-xl"
                >
                    <motion.div
                        animate={{ scale: [0.95, 1.05, 1], opacity: [0.5, 1, 0.8] }}
                        transition={{ duration: 0.5, ease: "easeInOut", repeat: Infinity }}
                    >
                        <Image
                            src="/mobile-logo-hero.webp"
                            alt="Loading"
                            width={120}
                            height={40}
                            className="opacity-70"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
