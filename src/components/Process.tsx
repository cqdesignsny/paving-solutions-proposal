"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";

const phases = [
  {
    id: "P1",
    weeks: "Weeks 1–4",
    title: "Discovery, Strategy & Design",
    price: "$2,000 — Due at project kickoff",
    description:
      "We start with a deep-dive kickoff meeting — mapping every page, gathering your photos, drone footage, project references, and brand assets. We research your keywords, audit competitors, and design the full site architecture. Then we deliver homepage and interior page design concepts for your review.",
    deliverable:
      "Approved design direction + complete site map + keyword strategy",
  },
  {
    id: "P2",
    weeks: "Weeks 5–8",
    title: "Development & Content",
    price: "$1,500 — Due when staging site is delivered",
    description:
      "Full site build on a private staging URL. We develop every page, write SEO-optimized content for all services, integrate your real photography, build responsive layouts for every device, set up the content management system, and configure your quote request forms.",
    deliverable:
      "Working first draft on staging URL — your first look at the complete site",
  },
  {
    id: "P3",
    weeks: "Weeks 9–12+",
    title: "Revisions, SEO & Launch",
    price: "$1,500 — Due at launch",
    description:
      "Two rounds of revisions based on your feedback. Cross-browser and device testing. Full SEO implementation — schema markup, meta tags, sitemap submission, Search Console and GA4 setup. Domain migration or redirect configuration. Go live. Then 30 days of monitoring: bug fixes, SEO indexing verification, and performance tuning.",
    deliverable:
      "Live website + analytics dashboard + SEO baseline report + 30-day support",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="Our Process" id="process" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          Clear phases. No guesswork.
          <br />
          <span className="italic">You see everything.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl md:text-2xl text-gray-2 max-w-[640px] leading-relaxed mb-14"
        >
          We build websites the way you build sites — with a plan, in phases,
          on schedule. Here&apos;s exactly how the next 12–15 weeks look.
        </motion.p>

        {/* Phases */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-0"
        >
          {phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              variants={fadeUp}
              className="relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-10 py-10 border-b border-border last:border-b-0"
            >
              {/* Phase badge */}
              <div className="flex md:flex-col items-center md:items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-bg-3 border-2 border-border flex items-center justify-center font-heading font-extrabold text-sm text-red">
                  {phase.id}
                </div>
                <div className="font-heading text-sm text-gray-3 uppercase tracking-[0.08em] text-center">
                  {phase.weeks}
                </div>
              </div>

              {/* Phase content */}
              <div>
                <h3 className="font-heading text-xl font-bold mb-1">
                  {phase.title}
                </h3>
                <p className="font-heading text-base text-red font-semibold mb-4">
                  {phase.price}
                </p>
                <p className="text-base text-gray-2 leading-relaxed mb-5">
                  {phase.description}
                </p>
                <div className="inline-block bg-red-dim rounded-xl px-5 py-3">
                  <p className="text-base text-gray-1">
                    <span className="font-bold text-offwhite">
                      You receive:{" "}
                    </span>
                    {phase.deliverable}
                  </p>
                </div>
              </div>

              {/* Connection line for desktop */}
              {i < phases.length - 1 && (
                <div className="hidden md:block absolute left-[70px] top-[88px] bottom-0 w-px bg-border" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
