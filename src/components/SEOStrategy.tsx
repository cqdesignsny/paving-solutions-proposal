"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";

const seoSections = [
  {
    title: "On-Page SEO",
    items: [
      "Custom meta titles & descriptions for all 13 pages",
      "H1–H6 heading hierarchy optimized per page",
      "Keyword-targeted content for each service and division",
      "Image alt text optimization across all imagery",
      "Internal cross-linking between services and divisions",
      "Clean URL structure (/paving/, /excavation/, /concrete/)",
    ],
  },
  {
    title: "Technical SEO",
    items: [
      "Schema markup including LocalBusiness, Contractor, FAQ, AggregateRating",
      "XML sitemap generation & Google submission",
      "Robots.txt configuration",
      "Canonical URL setup for all pages",
      "Core Web Vitals optimization (target: sub-2 second load)",
      "Mobile-first responsive architecture",
      "SSL/HTTPS enforced sitewide",
    ],
  },
  {
    title: "Local SEO",
    items: [
      "NAP consistency (Name, Address, Phone) sitewide",
      "County-specific content for 11+ service areas",
      "Geo-targeted keywords across all pages",
      "Google Maps embed with service area overlay",
      "Google Business Profile optimization guidance",
    ],
  },
  {
    title: "AI Search & Post-Launch",
    items: [
      "Content structured for ChatGPT and AI search discovery",
      "FAQ sections with clear Q&A format for AI parsing",
      "Google Search Console setup & site submission",
      "GA4 analytics with conversion tracking",
      "30-day post-launch SEO monitoring & refinement",
      "Initial keyword ranking baseline report",
    ],
  },
];

export default function SEOStrategy() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="SEO Strategy" id="seo" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          Built to rank.
          <br />
          <span className="italic">Built to be found.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl md:text-2xl text-gray-2 max-w-[620px] leading-relaxed mb-6"
        >
          Every page we build is engineered for search visibility, from
          Google to ChatGPT. Here&apos;s the full SEO scope included in this
          build.
        </motion.p>

        {/* AI callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-gradient-to-r from-bg-3 to-bg-2 border border-border rounded-2xl p-7 md:p-9 mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="text-red flex-shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 17v-2.5" /></svg>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold mb-2">
                The AI Search Advantage
              </h3>
              <p className="text-base text-gray-2 leading-relaxed">
                We don&apos;t just build for Google anymore. We build for
                ChatGPT, Perplexity, and the AI tools your future clients are
                already using to find contractors. Structured content, natural
                language descriptions, FAQ schema, all baked into the
                foundation so AI search tools can read and recommend your
                company.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SEO grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {seoSections.map((section) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              className="bg-bg-3 border border-border rounded-2xl p-7 card-hover"
            >
              <h3 className="font-heading text-lg font-bold mb-5 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red flex-shrink-0" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="text-base text-gray-2 leading-relaxed pl-4 relative"
                  >
                    <span className="absolute left-0 text-red font-bold">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
