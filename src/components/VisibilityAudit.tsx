"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";

const auditItems = [
  {
    score: "Needs Attention",
    severity: "low",
    title: "Website & Brand Presentation",
    description:
      'Your site title still reads "Just another WordPress site" — the default WordPress tagline. The About page says "30+ specialists" when you actually have 130+ employees. The copyright says 2018. PS Concrete Works doesn\'t appear anywhere. Pro Sitework shares a page with Paving instead of having its own URL. The site has real project photos, but they\'re in raw galleries with no project context, no descriptions, and no filtering by division.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    score: "Needs Attention",
    severity: "low",
    title: "Search Engine Visibility",
    description:
      "Zero meta descriptions on any page. Zero structured data or schema markup. No keyword-optimized service pages — your Paving page doesn't target a single local keyword. No county-specific content for the 11+ counties you serve. Competitors like American Pavement Solutions are capturing the search traffic that should be yours.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    score: "Needs Attention",
    severity: "low",
    title: "Social & LinkedIn Presence",
    description:
      "No active company LinkedIn, Facebook, or Instagram pages found for Paving Solutions Inc. The social icons in your footer link to nowhere — they're dead links. For a B2B company targeting property managers and developers, LinkedIn alone is a massive untapped channel. Your competitors are actively posting job-site content and getting noticed.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    score: "Opportunity",
    severity: "mid",
    title: "AI Search Readiness",
    description:
      'When someone asks ChatGPT or Google AI "who\'s the best paving contractor near me?" — your site needs structured content that AI can read and recommend. Right now, there\'s zero structured data, no FAQ content, and no natural-language service descriptions for AI tools to surface. We build for this from day one.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function VisibilityAudit() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="Visibility Audit" id="audit" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          Where you are today —
          <br />
          <span className="italic">and where you should be.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl md:text-2xl text-gray-2 max-w-[620px] leading-relaxed mb-6"
        >
          Your physical operation speaks for itself. But when a property
          manager, GC, or developer searches for you online — here&apos;s
          what they find today.
        </motion.p>

        {/* "10 vs 3" callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-bg-3 border border-border rounded-2xl p-8 md:p-10 mb-10 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-extrabold text-offwhite">
                10
              </div>
              <div className="font-heading text-sm text-gray-3 mt-1">
                Your Operation
              </div>
            </div>
            <div className="font-serif text-4xl text-gray-4 italic">vs.</div>
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-extrabold text-red">
                3
              </div>
              <div className="font-heading text-sm text-gray-3 mt-1">
                Your Online Presence
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-1 leading-relaxed">
              You&apos;ve built an incredible company. The digital side just
              hasn&apos;t kept pace yet. That&apos;s the gap we close.
            </p>
          </div>
        </motion.div>

        {/* Audit cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {auditItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-bg-3 border border-border rounded-2xl p-7 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-heading font-bold tracking-wide ${
                    item.severity === "low"
                      ? "bg-red-glow text-red-light"
                      : "bg-[rgba(232,160,32,0.12)] text-[#E8A020]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />
                  {item.score}
                </div>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div className="text-gray-3 mt-0.5">{item.icon}</div>
                <h3 className="font-heading text-lg font-bold">
                  {item.title}
                </h3>
              </div>

              <p className="text-base text-gray-2 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Score progress bar */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-heading text-xs tracking-wide uppercase text-gray-4">Current Score</span>
                  <span className={`font-heading text-sm font-bold ${item.severity === "low" ? "text-red" : "text-[#E8A020]"}`}>
                    {item.severity === "low" ? "2/10" : "3/10"}
                  </span>
                </div>
                <div className="h-2 bg-bg-5 rounded-full overflow-hidden">
                  <div
                    className="progress-bar"
                    style={{
                      width: item.severity === "low" ? "20%" : "30%",
                      background: item.severity === "low"
                        ? "linear-gradient(90deg, #C41E2A, #E02D3A)"
                        : "linear-gradient(90deg, #E8A020, #F0B840)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
