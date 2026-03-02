# BLACKBOARD

## Directory Tree (Key areas)
```
/src/app
  /about, /blog, /contact, /fonts, /pricing, /privacy, /services, /terms
  globals.css, layout.tsx, loading.tsx, not-found.tsx, page.tsx
/src/components
  /layout (Navbar, Footer, GlobalBackground, etc.)
  /sections (HeroSection, PhilosophySection, ServicesSection, TherapistsSection, TestimonialsSection, CorporateSection, BookingCTASection)
  /ui
/public
```

## Components
- Navbar, Footer, GlobalBackground, WhatsAppFab, PageTransition, Bubbles, InitialLoader
- HeroSection, PhilosophySection, ServicesSection, TherapistsSection, TestimonialsSection, CorporateSection, BookingCTASection

## Page Sections (Homepage)
- HeroSection: `<section ref={sectionRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden ...">`
- PhilosophySection: `<section ref={sectionRef} className="relative min-h-[100svh] flex items-center section-padding overflow-hidden text-charcoal">`
- ServicesSection: `<section ref={sectionRef} className="relative section-padding overflow-hidden">`
- TherapistsSection: `<section ref={sectionRef} className="relative section-padding overflow-hidden text-charcoal">`
- TestimonialsSection: `<section ref={sectionRef} className="relative section-padding overflow-hidden">`
- CorporateSection: `<section ref={sectionRef} className="relative section-padding text-charcoal overflow-hidden">`
- BookingCTASection: `<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">`

## Dependencies
`next`, `react`, `react-dom`, `@gsap/react`, `gsap`, `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `detect-gpu`, `tailwindcss`, `postcss`

## Tailwind Config
- Colors: `cream` (#FAF7F2), `lavender` (#C4B5E0, deep #8B7BB8), `sage` (#A8C5A0, deep #6B9B63), `charcoal` (#2D3B35, light #6B7280), `warm-white` (#FFFFFF), `glass`, `glow-lavender`, `glow-sage`
- Fonts: `display` (var(--font-outfit)), `body` (var(--font-inter))
- Breakpoints: sm, md, lg, xl, 2xl
- Spacing: 4.5, 18, 22, 26, 30, 34, 38, section (8rem), section-mobile (5rem)

## File Ownership
- Agent 1 → CREATE ONLY: `/app/about/page.tsx`, `/app/pricing/page.tsx`, `/app/contact/page.tsx`, `/app/blog/page.tsx`, `/app/privacy/page.tsx`, `/app/terms/page.tsx`, `/app/services/*/page.tsx`
- Agent 2 → CREATE / WRAP ONLY: `/components/RotatingBackground.tsx`, `/components/RotatingBackground.module.css`, `/app/page.tsx`
- Agent 3 → APPEND / CREATE: `/app/layout.tsx`, `/public/sitemap.xml`, `/public/robots.txt`, `next.config.js`
- Agent 4 → APPEND: `/src/app/globals.css`
- Agent 5 → CREATE / APPEND: `/components/CrisisBar.tsx`, `/components/CookieBanner.tsx`, `/middleware.ts`, `next.config.js`

## Task Status
| Task | Owner | Status | Confidence | Browser Verified | Notes |
|------|-------|--------|------------|-----------------|-------|
| Phase 0: Setup | Orchestrator | DONE | 10/10 | YES | Blackboard initialized |
| Phase 1: Pages | Agent 1 | IN PROGRESS | - | - | - |

## Snapshots
See individual agent logs for file snapshots before modifications.

## Regressions
(Empty at start)
