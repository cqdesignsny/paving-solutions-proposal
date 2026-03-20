# Paving Solutions Inc. — Website Proposal

An interactive, animated web proposal/presentation built for **Paving Solutions Inc.** by **CQ Marketing**. This is a live, scrollable pitch deck designed to win a $5,000 website build contract.

## About This Project

This is NOT the actual Paving Solutions website — it's the **proposal presentation** for the website build. The proposal itself demonstrates CQ Marketing's capabilities: modern framework, smooth animations, responsive design, and premium aesthetics.

**Client:** Paving Solutions Inc. (Monroe, NY)
**Agency:** CQ Marketing (Newburgh, NY)
**Prepared:** March 2026
**Live URL:** Deployed on Vercel by Cesar

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`)
- **Animations:** Motion (Framer Motion) — scroll reveals, parallax, animated counters, red glow hover effects
- **Fonts:** Instrument Serif, Plus Jakarta Sans, DM Sans (Google Fonts)
- **Deployment:** Vercel

## Project Structure

```
ps-proposal/
├── public/
│   ├── images/          # PS logos, CQ logos, job site photos
│   └── video/           # (excluded from git — use CDN for video assets)
├── src/
│   ├── app/
│   │   ├── globals.css  # Tailwind + custom theme + card-hover + progress-bar styles
│   │   ├── layout.tsx   # Root layout with fonts/metadata
│   │   └── page.tsx     # Main proposal page (assembles all 13 sections)
│   ├── components/
│   │   ├── Navigation.tsx       # Sticky nav with CQ logo, progress bar, "Get Started" CTA, mobile menu
│   │   ├── Hero.tsx             # Static image hero with parallax, modern PS logo, animated stats
│   │   ├── CompanyOverview.tsx  # Three division cards with real photos + photo strip
│   │   ├── VisibilityAudit.tsx  # "10 vs 3" audit with score progress bars
│   │   ├── Solution.tsx         # What we're building + SVG icon feature grid
│   │   ├── SiteArchitecture.tsx # 13-page sitemap with "why" bubbles + target keywords
│   │   ├── SEOStrategy.tsx      # SEO scope (on-page, technical, local, AI)
│   │   ├── Process.tsx          # Three-phase timeline with deliverables
│   │   ├── Investment.tsx       # Pricing ($5K) + hosting ($99/mo) + add-ons
│   │   ├── ProjectedImpact.tsx  # ROI projections with progress bars + results timeline
│   │   ├── WhatsNext.tsx        # LinkedIn, social, AI automation marketing tease
│   │   ├── AboutCQ.tsx          # CQ team + "Why We're the Right Fit"
│   │   ├── CTA.tsx              # Calendly kickoff CTA + footer with both logos
│   │   ├── AnimatedCounter.tsx  # Scroll-triggered number counter
│   │   └── SectionTag.tsx       # Reusable section label component
│   └── lib/
│       └── animations.ts       # Shared Motion variants
```

## Proposal Sections (in scroll order)

1. **Hero** — Static image background with parallax, modernized PS logo, headline ("Your reputation closes deals. We'll build you a website that opens them."), animated stats
2. **The Company We See** — Three division cards with real job photos (Paving, Pro Site Work, PS Concrete Works)
3. **Visibility Audit** — "10 vs 3" comparison, four audit cards with score progress bars, accurate findings from pavingsolutionsinc.com
4. **The Solution** — What we're building, big stat cards (13 pages, 100% custom, AI-Ready), SVG icon feature grid
5. **Site Architecture** — All 13 proposed pages with "why" highlighted in red bubbles + target keywords
6. **SEO Strategy** — On-page, technical, local, and AI search scope with SVG AI callout
7. **Our Process** — Three phases with timeline, pricing per phase, and deliverables
8. **Investment** — $5,000 total ($2,000 / $1,500 / $1,500) + $99/mo hosting (first 3 months free) + optional add-ons
9. **Projected Impact** — ROI projections with progress bars (search visibility, 7-15 leads/mo, 500-1K traffic/mo, credibility) + results timeline
10. **Looking Ahead** — LinkedIn, on-site content, AI/email automation marketing tease
11. **Who We Are** — CQ Marketing team (Cesar, Laura, Dennis) + "Why We're the Right Fit"
12. **CTA** — "Schedule Kickoff Meeting" linking to Calendly + footer with both logos

## Pricing

- **Phase 1:** $2,000 (Discovery & Design, Weeks 1–4)
- **Phase 2:** $1,500 (Development & Content, Weeks 5–8)
- **Phase 3:** $1,500 (SEO, Launch & Support, Weeks 9–12+)
- **Total Build:** $5,000
- **Hosting & Maintenance:** $99/month (billed annually, first 3 months free)
- **Optional Add-ons:** AI response ($500), lead form ($500), deep-dive pages ($200/ea), blog+articles ($500), GBP optimization ($200), email signatures ($100)
- **Domain setup & redirects:** Included in base build

## Key Design Features

- **Red glow hover effects** — Cards glow with red border + box-shadow on hover
- **Progress bars** — Score bars in audit section, current vs projected bars in ROI section
- **SVG icons throughout** — No emojis, all custom SVG icons
- **Mobile-optimized** — 18px/20px base font, full-width CTA, proper touch targets
- **"Get Started" CTA in nav** — Always visible, links to Calendly on both desktop and mobile
- **"Why" bubbles** — Site architecture pages have highlighted red "why" explanations

## Getting Started

```bash
npm install
npm run dev      # Dev server
npm run build    # Production build
npm start        # Production server
```

## Design System

- **Palette:** Deep black (#0A0A0A), dark grays, red accent (#C41E2A), off-white (#F2F0ED)
- **Typography:** Instrument Serif (display), Plus Jakarta Sans (headings/labels), DM Sans (body)
- **Base font:** 18px mobile / 20px desktop
- **Aesthetic:** "Industrial luxury" — high-end construction branding meets modern SaaS polish
- **Animations:** Scroll-triggered reveals, parallax, staggered entrances, number counters, red glow hovers

## Assets

- **PS Logo (Modern):** `public/images/ps-logo-modern.png` — used in hero and footer
- **PS Logo (Original):** `public/images/ps-logo.png` — kept for reference
- **CQ Logo (White):** `public/images/cq-logo-white.png` — used in nav, footer, and AboutCQ
- **CQ Logo (Color):** `public/images/cq-logo.png`
- **Job Photos:** 12 real job site photos from PS Companies projects
- **Hero Background:** IMG_0080.jpg (paving crew with trucks) with dark gradient overlay + parallax

## Links

- **GitHub:** https://github.com/cqdesignsny/paving-solutions-proposal
- **Calendly Kickoff:** https://calendly.com/cq-marketing/project-kick-off
- **Client Site (current):** https://pavingsolutionsinc.com

## Notes for Future Development

- This proposal serves as a design reference for the actual PS Companies website build
- The color palette, typography, and component patterns can be carried forward
- Google Stitch MCP integration planned for the actual website design phase
- All content and pricing in this proposal reflect the live pitch to Jonah Reich
