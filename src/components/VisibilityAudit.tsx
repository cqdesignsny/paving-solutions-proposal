"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";

const auditItems = [
  {
    score: "Opportunity",
    severity: "mid",
    title: "Website & Brand Presentation",
    description:
      'You have a working website with real project photos and content that shows what you do. That\'s a solid starting point. A few things have just gone stale over the years: the site title still reads "Just another WordPress site," the About page mentions "30+ specialists" instead of the 130+ employees you actually have, and the copyright is dated 2018. PS Concrete Works isn\'t represented, and Pro Sitework shares a page with Paving instead of standing on its own. These are easy wins that immediately modernize how you show up online.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    score: "Opportunity",
    severity: "mid",
    title: "Search Engine Visibility",
    description:
      "Your site has content, but it's not set up to rank. There are no meta descriptions on any page, no structured data or schema markup, and no keyword-targeted service pages. Your Paving page doesn't target a single local keyword, and there's no county-specific content for the 11+ counties you serve. Competitors like American Pavement Solutions are showing up for the searches that should be yours. The good news: this is fixable, and the upside is massive.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    score: "Opportunity",
    severity: "mid",
    title: "Social & LinkedIn Presence",
    description:
      "There's no active company LinkedIn, Facebook, or Instagram found for Paving Solutions Inc. The social icons in your footer link to placeholder URLs that don't go anywhere. For a B2B company targeting property managers and developers, LinkedIn alone is a huge untapped channel. Your competitors are posting job-site content and getting noticed. This is low-hanging fruit once the website is in place.",
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
      'When someone asks ChatGPT or Google AI "who\'s the best paving contractor near me?", your site needs structured content that AI can read and recommend. Right now, there\'s no structured data, no FAQ content, and no natural-language service descriptions for AI tools to surface. This is the future of search, and we build for it from day one.',
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
        <SectionTag label="Where You Stand" id="audit" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          You&apos;ve built something incredible.
          <br />
          <span className="italic">Let&apos;s make sure the world sees it.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl md:text-2xl text-gray-2 max-w-[680px] leading-relaxed mb-6"
        >
          Your physical operation speaks for itself. You&apos;ve been too busy
          building an incredible business to worry about the website. That makes
          sense. But when a property manager, GC, or developer searches for you
          online, here&apos;s what they find today.
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
              You have a good foundation to work with. We were able to pull real
              content from your current site for this very proposal. It just
              hasn&apos;t been updated because you&apos;ve been focused on growing
              the business. Modern marketing has so many tools available now, and
              we have the knowledge and ability to implement them for you.
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
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-heading font-bold tracking-wide bg-[rgba(232,160,32,0.12)] text-[#E8A020]"
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
                  <span className="font-heading text-sm font-bold text-[#E8A020]">
                    3/10
                  </span>
                </div>
                <div className="h-2 bg-bg-5 rounded-full overflow-hidden">
                  <div
                    className="progress-bar"
                    style={{
                      width: "30%",
                      background: "linear-gradient(90deg, #E8A020, #F0B840)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Positive framing note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 bg-bg-2 border border-border rounded-xl p-6 flex items-start gap-4"
        >
          <div className="text-red flex-shrink-0 mt-0.5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <p className="text-base text-gray-1 leading-relaxed">
            <span className="font-bold text-offwhite">The bottom line: </span>
            None of this is unusual for a company that&apos;s been heads-down building.
            You have real content, real photos, and a real story to tell. We just need to
            modernize how it&apos;s packaged and make sure search engines and AI tools
            can find it. That&apos;s exactly what this build does.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
