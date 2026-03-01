import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        lavender: {
          DEFAULT: "#C4B5E0",
          deep: "#8B7BB8",
        },
        sage: {
          DEFAULT: "#A8C5A0",
          deep: "#6B9B63",
        },
        charcoal: {
          DEFAULT: "#2D3B35",
          light: "#6B7280",
        },
        "warm-white": "#FFFFFF",
        glass: "rgba(255,255,255,0.12)",
        "glow-lavender": "rgba(196,181,224,0.3)",
        "glow-sage": "rgba(168,197,160,0.3)",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-hero": [
          "clamp(3rem, 6vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "300" },
        ],
        "display-section": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" },
        ],
        "section-index": [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.15em", fontWeight: "400" },
        ],
        caption: [
          "0.8125rem",
          { lineHeight: "1.5", letterSpacing: "0.08em", fontWeight: "500" },
        ],
        cta: [
          "0.9375rem",
          { lineHeight: "1", letterSpacing: "0.04em", fontWeight: "600" },
        ],
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        section: "8rem",
        "section-mobile": "5rem",
      },
      backdropBlur: {
        glass: "12px",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "drift-up": "driftUp 20s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        driftUp: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(-100vh)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
