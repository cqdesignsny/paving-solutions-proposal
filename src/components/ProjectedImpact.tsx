"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";
import AnimatedCounter from "./AnimatedCounter";

const projections = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
    ),
    title: "Search Visibility",
    current: "Near zero",
    projected: "Page 1 for 15+ local keywords",
    timeline: "3–6 months",
    currentPct: 5,
    projectedPct: 80,
    detail:
      "Right now you have zero meta descriptions, zero schema markup, and zero keyword-targeted pages. With 13 SEO-optimized pages, structured data, and county-specific content, you'll start ranking for terms like \"paving contractor Orange County NY\" and \"commercial excavation Hudson Valley\" within 3–6 months of launch.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
    ),
    title: "Qualified Lead Generation",
    current: "Word of mouth only",
    projected: "7–15 new inbound leads/month",
    timeline: "4–8 months",
    currentPct: 10,
    projectedPct: 65,
    detail:
      "A professional bid request system with smart routing, combined with SEO-driven traffic, turns your website from a digital brochure into an active lead generation engine. Contractors in your space with optimized sites consistently see 7–15 monthly inbound leads from organic search alone.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
    ),
    title: "Website Traffic",
    current: "~50–100 visits/month",
    projected: "500–1,000 visits/month",
    timeline: "6–12 months",
    currentPct: 8,
    projectedPct: 70,
    detail:
      "Between local SEO, county-specific landing pages, AI search readiness, and properly structured content, you can realistically expect a 5–10x increase in organic traffic within the first year. This is traffic from property managers, GCs, and developers actively searching for your services.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
    ),
    title: "Professional Credibility",
    current: "\"Just another WordPress site\"",
    projected: "Industry-leading web presence",
    timeline: "Immediate at launch",
    currentPct: 15,
    projectedPct: 95,
    detail:
      "The moment your new site goes live, every property manager who Googles you sees a professional, modern company — not a 2018 WordPress site with a default tagline. First impressions close deals. Your site becomes your strongest sales tool, working for you 24/7.",
  },
];

const timeline = [
  {
    phase: "Weeks 1–4",
    label: "Foundation",
    description: "Strategy, design, keyword research. No visible changes yet.",
  },
  {
    phase: "Weeks 5–8",
    label: "Build",
    description: "Site goes to staging. You can preview and share with partners.",
  },
  {
    phase: "Weeks 9–12",
    label: "Launch",
    description: "Site goes live. SEO starts indexing. Google begins ranking your pages.",
  },
  {
    phase: "Month 3–6",
    label: "Traction",
    description: "Keywords start ranking. Organic traffic climbs. First inbound leads from search.",
  },
  {
    phase: "Month 6–12",
    label: "Growth",
    description: "Page 1 rankings for target keywords. Consistent lead flow. Measurable ROI.",
  },
];

export default function ProjectedImpact() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="Projected Impact" id="impact" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          The ROI path —
          <br />
          <span className="italic">what this actually does for you.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl md:text-2xl text-gray-2 max-w-[660px] leading-relaxed mb-6"
        >
          This isn&apos;t just a website — it&apos;s a lead generation engine.
          Here&apos;s a realistic picture of what changes when your digital
          presence matches your operation.
        </motion.p>

        {/* Big ROI stat */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-bg-3 border border-border rounded-2xl p-8 md:p-10 mb-10 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-extrabold text-red">
                <AnimatedCounter target={1} />
              </div>
              <div className="font-heading text-sm text-gray-3 mt-1">
                Contract Closed
              </div>
            </div>
            <div className="font-serif text-4xl text-gray-4 italic">=</div>
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-extrabold text-offwhite">
                <AnimatedCounter target={50} suffix="x" />
              </div>
              <div className="font-heading text-sm text-gray-3 mt-1">
                ROI on This Build
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-1 leading-relaxed">
              One commercial paving contract pays for this website 50 times
              over. The question isn&apos;t whether this pays for itself — it&apos;s
              how fast.
            </p>
          </div>
        </motion.div>

        {/* Projection cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14"
        >
          {projections.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-bg-2 border border-border rounded-2xl p-7 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-red">{item.icon}</div>
                <h3 className="font-heading text-lg font-bold">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <p className="font-heading text-[11px] tracking-[0.1em] uppercase text-gray-4 mb-1">
                    Today
                  </p>
                  <p className="font-heading text-base font-semibold text-gray-3">
                    {item.current}
                  </p>
                </div>
                <div className="text-gray-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-heading text-[11px] tracking-[0.1em] uppercase text-red mb-1">
                    Projected
                  </p>
                  <p className="font-heading text-base font-bold text-offwhite">
                    {item.projected}
                  </p>
                </div>
              </div>

              {/* Progress comparison bars */}
              <div className="space-y-2 mb-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-heading text-xs text-gray-4 uppercase tracking-wide">Now</span>
                    <span className="font-heading text-xs text-gray-4">{item.currentPct}%</span>
                  </div>
                  <div className="h-2.5 bg-bg-5 rounded-full overflow-hidden">
                    <div className="progress-bar" style={{ width: `${item.currentPct}%`, background: "linear-gradient(90deg, #3A3A40, #666670)" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-heading text-xs text-red uppercase tracking-wide">Projected</span>
                    <span className="font-heading text-xs text-red">{item.projectedPct}%</span>
                  </div>
                  <div className="h-2.5 bg-bg-5 rounded-full overflow-hidden">
                    <div className="progress-bar" style={{ width: `${item.projectedPct}%` }} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-gray-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="font-heading text-sm text-gray-3">
                  Expected: {item.timeline}
                </span>
              </div>

              <p className="text-base text-gray-2 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Results timeline */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-heading text-xl font-bold mb-6"
        >
          When You&apos;ll See Results
        </motion.h3>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-border hidden md:block" />

          <div className="space-y-0">
            {timeline.map((step, i) => (
              <motion.div
                key={step.phase}
                variants={fadeUp}
                className="flex items-start gap-5 py-4 border-b border-border last:border-b-0"
              >
                <div className="flex items-center gap-4 flex-shrink-0 w-32 md:w-40">
                  <div
                    className={`w-[10px] h-[10px] rounded-full flex-shrink-0 ${
                      i <= 2 ? "bg-red" : "bg-red/50"
                    }`}
                  />
                  <span className="font-heading text-sm font-bold text-gray-1">
                    {step.phase}
                  </span>
                </div>
                <div>
                  <span className="font-heading text-base font-semibold text-offwhite">
                    {step.label}
                  </span>
                  <span className="text-gray-3 mx-2">—</span>
                  <span className="text-[15px] text-gray-2">
                    {step.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 text-base text-gray-3 italic max-w-[620px]"
        >
          SEO is a compounding investment. Results build month over month. The
          sooner you launch, the sooner you start ranking — and the harder it
          becomes for competitors to catch up.
        </motion.p>
      </div>
    </section>
  );
}
