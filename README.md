# Paving Solutions Inc. — Website Proposal

An interactive, animated web proposal/presentation built for **Paving Solutions Inc.** by **CQ Marketing**. This is a live, scrollable pitch deck designed to win a $5,000 website build contract.

## About This Project

This is NOT the actual Paving Solutions website — it's the **proposal presentation** for the website build. The proposal itself demonstrates CQ Marketing's capabilities: modern framework, smooth animations, responsive design, and premium aesthetics.

**Client:** Paving Solutions Inc. (Monroe, NY)
**Agency:** CQ Marketing (Newburgh, NY)
**Prepared:** March 2026

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion) — scroll reveals, parallax, animated counters
- **Fonts:** Instrument Serif, Plus Jakarta Sans, DM Sans (Google Fonts)
- **Deployment:** Vercel (or any static host)

## Project Structure

```
ps-proposal/
├── public/
│   ├── images/          # PS logos, CQ logos, job site photos
│   └── video/           # (excluded from git — use CDN for video assets)
├── src/
│   ├── app/
│   │   ├── globals.css  # Tailwind + custom theme variables
│   │   ├── layout.tsx   # Root layout with fonts/metadata
│   │   └── page.tsx     # Main proposal page (assembles all sections)
│   ├── components/
│   │   ├── Navigation.tsx      # Sticky nav with PS logo + progress bar + mobile menu
│   │   ├── Hero.tsx            # Static image hero with parallax + stats
│   │   ├── CompanyOverview.tsx # Three division cards with real photos
│   │   ├── VisibilityAudit.tsx # "10 vs 3" audit section
│   │   ├── Solution.tsx        # What we're building + feature grid
│   │   ├── SiteArchitecture.tsx # 13-page sitemap with rationale
│   │   ├── SEOStrategy.tsx     # SEO scope (on-page, technical, local, AI)
│   │   ├── Process.tsx         # Three-phase timeline
│   │   ├── Investment.tsx      # Pricing ($5,000) + add-ons
│   │   ├── WhatsNext.tsx       # Marketing opportunity tease
│   │   ├── AboutCQ.tsx         # Team + why CQ Marketing
│   │   ├── CTA.tsx             # Final CTA + footer
│   │   ├── AnimatedCounter.tsx # Scroll-triggered number counter
│   │   └── SectionTag.tsx      # Reusable section label component
│   └── lib/
│       └── animations.ts      # Shared Framer Motion variants
```

## Proposal Sections (in scroll order)

1. **Hero** — Static image background with parallax, modernized PS logo, headline, animated stats
2. **The Company We See** — Three division cards with real job photos
3. **Visibility Audit** — "10 vs 3" comparison, current digital gaps
4. **The Solution** — What we're building, key stats, feature grid
5. **Site Architecture** — All 13 proposed pages with SEO rationale
6. **SEO Strategy** — On-page, technical, local, and AI search scope
7. **Our Process** — Three phases with timeline and deliverables
8. **Investment** — $5,000 total ($2,000 / $1,500 / $1,500) + add-ons
9. **Looking Ahead** — LinkedIn, social, AI automation marketing tease
10. **Who We Are** — CQ Marketing team + "Why We're the Right Fit"
11. **CTA** — "Let's Get Started" with email link + phone

## Pricing (Updated)

- **Phase 1:** $2,000 (Discovery & Design, Weeks 1–4)
- **Phase 2:** $1,500 (Development & Content, Weeks 5–8)
- **Phase 3:** $1,500 (SEO, Launch & Support, Weeks 9–12+)
- **Total:** $5,000
- **Add-ons:** $500–$2,000+ depending on selections

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Design System

- **Palette:** Deep black (#0A0A0A), dark grays, red accent (#C41E2A), off-white (#F2F0ED)
- **Typography:** Instrument Serif (display), Plus Jakarta Sans (headings/labels), DM Sans (body)
- **Aesthetic:** "Industrial luxury" — high-end construction branding meets modern SaaS polish
- **Animations:** Scroll-triggered reveals, parallax, staggered entrances, number counters

## Assets

- **PS Logo (Modern):** `public/images/ps-logo-modern.png` — used in nav, hero, and footer
- **PS Logo (Original):** `public/images/ps-logo.png` — kept for reference
- **CQ Logo:** `public/images/cq-logo.png` and `cq-logo-white.png`
- **Job Photos:** 12 real job site photos from PS Companies projects
- **Hero Background:** Static image (IMG_0080.jpg) with dark gradient overlay and parallax

## Notes for Future Development

- This proposal will serve as a design reference for the actual PS Companies website build
- The color palette, typography, and component patterns can be carried forward
- Google Stitch MCP integration planned for the actual website design phase
- All content and pricing in this proposal reflect the live pitch to Jonah Reich
