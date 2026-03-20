"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";

const addons = [
  {
    name: "AI-Powered Lead Response",
    description:
      "Instant auto-replies, answers common questions, books meetings on your calendar",
    price: "$500",
  },
  {
    name: "Custom Multi-Step Lead Form",
    description:
      "Advanced bid request with service routing, file uploads, auto-notifications",
    price: "$500",
  },
  {
    name: "Additional Deep-Dive Service Pages",
    description:
      "Individual pages for specific services (sealcoating, utilities, etc.) — more SEO coverage",
    price: "$200 / page",
  },
  {
    name: "Blog Setup + First 4 SEO Articles",
    description:
      "Blog infrastructure + keyword-targeted content to jumpstart organic traffic",
    price: "$500",
  },
  {
    name: "Google Business Profile Optimization",
    description:
      "Full GBP audit, optimization, photo upload, category setup, review strategy",
    price: "$200",
  },
  {
    name: "Email Signature Design (Company-Wide)",
    description:
      "Professional HTML email signatures for team members",
    price: "$100",
  },
];

export default function Investment() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="Investment" id="investment" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          Transparent pricing.
          <br />
          <span className="italic">Three simple phases.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-lg md:text-xl text-gray-2 max-w-[640px] leading-relaxed mb-12"
        >
          The website build is a one-time investment of $5,000, split across
          three milestones. Add-ons are optional and can be included now or
          added later.
        </motion.p>

        {/* Pricing table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-bg-3 border border-border rounded-2xl overflow-hidden mb-12"
        >
          {/* Phase rows */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-7 py-5 border-b border-border hover:bg-white/[0.01] transition-colors">
            <div>
              <p className="font-heading text-lg font-semibold">
                Phase 1 — Discovery & Design
              </p>
              <p className="text-sm text-gray-3 mt-0.5">
                Weeks 1–4 · Strategy, architecture, keyword research, design
                concepts
              </p>
            </div>
            <p className="font-heading text-xl font-bold text-red mt-2 sm:mt-0 whitespace-nowrap">
              $2,000
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-7 py-5 border-b border-border hover:bg-white/[0.01] transition-colors">
            <div>
              <p className="font-heading text-lg font-semibold">
                Phase 2 — Development & Content
              </p>
              <p className="text-sm text-gray-3 mt-0.5">
                Weeks 5–8 · Full site build, SEO copywriting, staging site
                delivery
              </p>
            </div>
            <p className="font-heading text-xl font-bold text-red mt-2 sm:mt-0 whitespace-nowrap">
              $1,500
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-7 py-5 border-b border-border hover:bg-white/[0.01] transition-colors">
            <div>
              <p className="font-heading text-lg font-semibold">
                Phase 3 — SEO, Launch & Support
              </p>
              <p className="text-sm text-gray-3 mt-0.5">
                Weeks 9–12+ · Revisions, SEO implementation, domain setup &
                redirects, go-live, 30-day monitoring
              </p>
            </div>
            <p className="font-heading text-xl font-bold text-red mt-2 sm:mt-0 whitespace-nowrap">
              $1,500
            </p>
          </div>

          {/* Total */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-7 py-6 bg-bg-4">
            <p className="font-heading text-xl font-extrabold">
              Website Build Total
            </p>
            <p className="font-heading text-3xl font-extrabold text-red mt-2 sm:mt-0">
              $5,000
            </p>
          </div>
        </motion.div>

        {/* Timeline note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-bg-2 border border-border rounded-2xl p-7 mb-14 flex flex-col md:flex-row items-start gap-4"
        >
          <div className="text-red flex-shrink-0">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-1">
              Estimated Timeline: 12–15 Weeks
            </h3>
            <p className="text-base text-gray-2 leading-relaxed">
              Your first draft is visible at 4–6 weeks. You&apos;ll have a
              working staging site to review, share with partners, and
              provide feedback on. Final launch happens at 9–12 weeks with
              the 30-day monitoring period included.
            </p>
          </div>
        </motion.div>

        {/* Add-ons */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-heading text-xl font-bold mb-2"
        >
          Optional Add-Ons
        </motion.h3>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-base text-gray-2 leading-relaxed mb-6 max-w-[600px]"
        >
          These can be bundled into the build or added after launch. Each
          one extends the value of the website.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {addons.map((addon) => (
            <motion.div
              key={addon.name}
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 border-b border-border last:border-b-0"
            >
              <div>
                <p className="font-heading text-base font-semibold">
                  {addon.name}
                </p>
                <p className="text-sm text-gray-3 mt-0.5">
                  {addon.description}
                </p>
              </div>
              <p className="font-heading text-base font-bold text-gray-1 mt-2 sm:mt-0 whitespace-nowrap">
                {addon.price}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 text-sm text-gray-3"
        >
          Domain setup, redirects, and core site infrastructure are included
          in the base build. Add-ons can be bundled at kickoff or added
          post-launch.
        </motion.p>
      </div>
    </section>
  );
}
