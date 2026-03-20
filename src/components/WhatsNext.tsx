"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";

const opportunities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
    title: "LinkedIn Marketing",
    description:
      "Property managers and developers live on LinkedIn. Regular posts showcasing your crew, your jobs, and your expertise put you in front of the exact people signing contracts. We've seen a single LinkedIn post turn into a $6M job for a client in your exact space.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "On-Site Content & Social",
    description:
      "We show up with cameras when your crew finishes a job. One shoot becomes a LinkedIn post, an Instagram post, a website update, and a blog article. Real content from real job sites — not stock photos. The kind of content that makes American Pavement Solutions nervous.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "AI, Email & Automation",
    description:
      "AI-powered lead response so no inquiry goes unanswered. Email marketing to stay top-of-mind with property managers and past clients. Automated follow-ups, meeting scheduling, and CRM workflows. The tech that turns your website from a brochure into a lead machine.",
  },
];

export default function WhatsNext() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="Looking Ahead" id="next" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          The website is the foundation.
          <br />
          <span className="italic">Everything builds from here.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-lg md:text-xl text-gray-2 max-w-[620px] leading-relaxed mb-14"
        >
          Once your site is live and ranking, there&apos;s a bigger
          opportunity to drive consistent leads and grow the brand. Here&apos;s
          what that looks like.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {opportunities.map((opp) => (
            <motion.div
              key={opp.title}
              variants={fadeUp}
              className="bg-bg-3 border border-border rounded-2xl p-7 hover:border-border-h hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="text-red mb-4">{opp.icon}</div>
              <h3 className="font-heading text-xl font-bold mb-3">
                {opp.title}
              </h3>
              <p className="text-[15px] text-gray-2 leading-relaxed">
                {opp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-base text-gray-3"
        >
          Monthly marketing plans start at $750/month, scaling to $3,000/month.
          We can discuss this after the site is built and performing — no
          pressure, just opportunity.
        </motion.p>
      </div>
    </section>
  );
}
