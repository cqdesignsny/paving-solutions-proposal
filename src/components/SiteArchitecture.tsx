"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";

const pages = [
  {
    num: "01",
    name: "Home",
    description:
      "High-impact hero with real imagery, three-division portal, trust signals (20 years, 130+ employees, tri-state coverage), and prominent quote request CTAs. This is your digital front door.",
    why: "First impressions matter. 60% of visitors decide to stay or leave in under 5 seconds.",
  },
  {
    num: "02",
    name: "About PS Companies",
    description:
      "Your story from 2006 to today. The leadership team, the facility on Route 17M, crew photos, company values. Property managers and GCs want to know who's behind the company.",
    why: "Trust. People hire companies they believe in. This page is your handshake.",
  },
  {
    num: "03",
    name: "Paving Services",
    description:
      'Dedicated page for asphalt: commercial, residential, municipal. Feature the crew\'s speed as the hero message: "6:30 AM start, done by noon." Real project photos, clear service list.',
    why: "Your paving division gets its own keyword-rich landing page instead of sharing space. This is how you outrank competitors for local paving searches.",
    keywords: '"paving contractor Monroe NY," "commercial asphalt Orange County," "parking lot paving Hudson Valley"',
    isKeyword: true,
  },
  {
    num: "04",
    name: "Pro Site Work",
    description:
      "Full site excavation, underground utilities, storm water, sewer, water lines, land clearing, demolition, earthwork. This is 65% of your business. It needs a dedicated, keyword-rich page.",
    why: "65% of your revenue deserves more than a shared page. A dedicated page with targeted content means Google sends excavation searches directly to you.",
    keywords: '"excavation contractor Orange County NY," "site work contractor Hudson Valley," "underground utilities NY NJ CT"',
    isKeyword: true,
  },
  {
    num: "05",
    name: "PS Concrete Works",
    description:
      "Foundations, flatwork, curbs, sidewalks, stairwells, retaining walls. Establishes concrete as its own full division, not a footnote on the paving page.",
    why: "Concrete is its own division, so it should have its own page. This tells Google (and clients) that you're a serious concrete contractor, not a paving company that does concrete on the side.",
    keywords: '"concrete contractor Monroe NY," "commercial concrete Hudson Valley"',
    isKeyword: true,
  },
  {
    num: "06",
    name: "Project Gallery",
    description:
      'Filterable portfolio by division and project type. Drone footage, before/after capability. When a property manager says "show me what you\'ve done," you send this link.',
    why: "Social proof. Your work speaks for itself. Let it.",
  },
  {
    num: "07",
    name: "Fleet & Facility",
    description:
      "Photos of the Route 17M yard, equipment inventory, the iron. Most competitors can't show this. This proves you're a real operation, not someone with a pickup truck.",
    why: "Differentiator. This page alone sets you apart from 90% of competitors.",
  },
  {
    num: "08",
    name: "Service Areas",
    description:
      "Interactive map with content blocks for each county: Orange, Rockland, Sullivan, Ulster, Westchester, Dutchess, Suffolk, Bronx + NJ and CT. Each county gets keyword-targeted text.",
    why: 'Local SEO. This is how you show up when someone searches "paving contractor near me" in any of your counties.',
  },
  {
    num: "09",
    name: "Testimonials",
    description:
      "Client quotes by sector, reference projects (1,800-home development, Hampton Inn, commercial work). Video testimonial placeholders for future content.",
    why: "88% of people trust online reviews as much as personal recommendations.",
  },
  {
    num: "10",
    name: "Request a Quote",
    description:
      "Multi-step smart form: Select division, describe project, scope & timeline, contact info. Professional, fast, routes directly to your inbox.",
    why: "A professional form converts 3-5x better than a basic 'Contact Us' page.",
  },
  {
    num: "11",
    name: "Blog / News",
    description:
      "Content hub for project spotlights, industry knowledge, seasonal tips. New content tells Google you're active and authoritative. It's also what ChatGPT reads when recommending contractors.",
    why: "Companies with active blogs get 55% more website visitors.",
  },
  {
    num: "12",
    name: "Careers",
    description:
      'Open positions, company culture, benefits, team photos. A recruiting page signals stability. "This company is hiring" means "this company is busy."',
    why: "Recruiting + credibility. Replaces Indeed as the first impression for candidates.",
  },
  {
    num: "13",
    name: "Contact",
    description:
      "All contact information, embedded map, business hours. Clean, simple, zero friction. Sometimes people just need a phone number.",
    why: "Conversion. Every page should lead to contact, and this is the dedicated hub.",
  },
];

export default function SiteArchitecture() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="Site Architecture" id="architecture" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          Every page has a purpose.
          <br />
          <span className="italic">Every page earns its spot.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl md:text-2xl text-gray-2 max-w-[620px] leading-relaxed mb-12"
        >
          Here&apos;s exactly what we&apos;ll build, what goes on each page,
          and why it matters for your business.
        </motion.p>

        {/* Page list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-3"
        >
          {pages.map((page) => (
            <motion.div
              key={page.num}
              variants={fadeUp}
              className="group bg-bg-3 border border-border rounded-xl overflow-hidden card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-stretch">
                {/* Left: page name */}
                <div className="flex items-center gap-3 bg-bg-2 px-5 py-4 md:min-w-[220px] border-b md:border-b-0 md:border-r border-border">
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-red-dim text-red text-xs font-heading font-bold">
                    {page.num}
                  </span>
                  <span className="font-heading text-base font-semibold">
                    {page.name}
                  </span>
                </div>

                {/* Right: description */}
                <div className="flex-1 px-5 py-4">
                  <p className="text-base text-gray-2 leading-relaxed mb-3">
                    {page.description}
                  </p>
                  <div className="inline-flex items-start gap-2 bg-red-glow rounded-lg px-4 py-2.5">
                    <span className="font-heading text-sm font-bold text-red-light whitespace-nowrap mt-0.5">Why:</span>
                    <span className="text-sm text-offwhite leading-relaxed">{page.why}</span>
                  </div>
                  {page.isKeyword && page.keywords && (
                    <div className="mt-2 flex items-start gap-2">
                      <svg className="w-4 h-4 text-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      <span className="text-sm text-gray-3 font-heading">
                        <span className="text-red font-bold">Target Keywords: </span>
                        {page.keywords}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional add-on note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 bg-bg-2 border border-border rounded-xl p-6"
        >
          <p className="font-heading text-base font-bold mb-2">
            Optional Add-On Pages
          </p>
          <p className="text-base text-gray-2 leading-relaxed">
            Individual service deep-dive pages (e.g., dedicated
            &ldquo;Sealcoating&rdquo; or &ldquo;Underground Utilities&rdquo;
            pages), detailed case study writeups, and an FAQ page with schema
            markup. Each one adds more SEO surface area and conversion
            potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
