"use client";

import { useEffect } from "react";

export default function EmergencyExit() {
    const handleExit = () => {
        // Quickly replace the current history state to prevent back button from returning
        window.history.replaceState(null, "", "https://www.google.com");
        // Redirect immediately to a safe, generic site
        window.location.replace("https://www.google.com");
    };

    useEffect(() => {
        // Add escape key listener for quick exit
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleExit();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-[100] group flex items-center gap-3">
            {/* Tooltip */}
            <div className="absolute left-full ml-4 px-3 py-2 bg-charcoal text-white text-xs rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl pointer-events-none font-medium">
                Quick Exit (Press ESC)
            </div>

            {/* Button */}
            <button
                onClick={handleExit}
                aria-label="Quick Exit"
                title="Quick Exit to Google"
                className="w-12 h-12 bg-red-500/90 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition-all hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500/50"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            </button>

            {/* Trust Badge / Hotline */}
            <div className="hidden sm:flex items-center bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-full px-4 py-2 opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-xs font-semibold text-charcoal/70 uppercase tracking-widest mr-2">Crisis?</span>
                <a href="tel:9152987821" className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors">
                    iCall: 9152987821
                </a>
            </div>
        </div>
    );
}
