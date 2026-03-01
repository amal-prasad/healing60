"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * GlobalBackground
 * An elegant crossfading slider of 4 photographic backgrounds.
 * Submerged behind heavy frosted glass and subtle paper noise.
 */
const backgrounds = [
    "/images/bg1.webp",
    "/images/bg2.webp",
    "/images/bg3.webp",
    "/images/bg4.webp"
];

export default function GlobalBackground() {
    const [index, setIndex] = useState(0);

    // Crossfade interval
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgrounds.length);
        }, 8000); // 8 second display time per image
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed -top-[15dvh] -left-[10vw] z-0 w-[120vw] h-[130dvh] overflow-hidden pointer-events-none bg-[#2D2D2D]">
            {/* 
                Layer 1: The Photographic Backgrounds
                Absolute positioning with object-cover ensures they scale perfectly 
                on Android and iOS without breaking the layout.
            */}
            <AnimatePresence>
                <motion.img
                    key={index}
                    src={backgrounds[index]}
                    alt="Atmospheric Background"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* A subtle darkening overlay specifically over the images to guarantee text contrast */}
            <div className="absolute inset-0 bg-black/10" />

            {/* 
                Layer 2: The Deep Frost Shield
                Thinned out to 10% opacity and 12px blur so images are clearly visible (90%) but distinctly frosted.
                mix-blend-overlay removed to prevent blowout on lighter mobile screens.
            */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[12px]" />

            {/* 
                Layer 3: Subtle Noise Grain
                Anchors the digital visual back into reality with a premium, tactile paper feel.
            */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
