"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";
import AnimatedCounter from "./AnimatedCounter";

const features = [
  {
    icon: "🏗️",
    title: "One Unified Site, Three Divisions",
    description:
      "Each division gets its own dedicated section with SEO-optimized content, while the overall brand stays unified under PS Companies.",
  },
  {
    icon: "📱",
    title: "Mobile-First, Fast-Loading",
    description:
      "Built for decision-makers who check contractor sites on phones at job sites. Sub-2 second load times, zero access errors.",
  },
  {
    icon: "🤖",
    title: "AI & Google Search Ready",
    description:
      "We don't just build for Google anymore. We build for ChatGPT, Perplexity, and the AI tools your future clients are already using.",
  },
  {
    icon: "📸",
    title: "Real Photos, Real Work",
    description:
      "No more stock images. Your real job sites, your real crew, your real equipment. \"You gotta see the dirt\" — and they will.",
  },
  {
    icon: "📋",
    title: "Professional Bid Request System",
    description:
      "Multi-step smart form: pick division, describe the project, submit scope details. Routes directly to your inbox. Modeled after the system you liked.",
  },
  {
    icon: "🔧",
    title: "Easy Content Management",
    description:
      "Upload new project photos, update service descriptions, add blog posts — without calling a developer. You asked about this, and we deliver it.",
  },
];

export default function Solution() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="The Solution" id="solution" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          A site as powerful
          <br />
          <span className="italic">as the crew behind it.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-lg md:text-xl text-gray-2 max-w-[620px] leading-relaxed mb-14"
        >
          We&apos;re building a modern, mobile-first website that unifies all
          three PS divisions, showcases your real work, captures qualified
          leads, and ranks where your clients are searching.
        </motion.p>

        {/* Big stat cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="bg-bg-3 border border-border rounded-2xl p-8 text-center"
          >
            <div className="font-heading text-4xl md:text-5xl font-extrabold text-red mb-2">
              <AnimatedCounter target={13} />
            </div>
            <p className="text-base text-gray-2">
              Custom SEO-optimized pages
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="bg-bg-3 border border-border rounded-2xl p-8 text-center"
          >
            <div className="font-heading text-4xl md:text-5xl font-extrabold text-red mb-2">
              <AnimatedCounter target={100} suffix="%" />
            </div>
            <p className="text-base text-gray-2">
              Custom design — no templates
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="bg-bg-3 border border-border rounded-2xl p-8 text-center"
          >
            <div className="font-heading text-4xl md:text-5xl font-extrabold text-red mb-2">
              AI-Ready
            </div>
            <p className="text-base text-gray-2">
              Built for Google + ChatGPT + Perplexity
            </p>
          </motion.div>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="bg-bg-2 border border-border rounded-2xl p-7 hover:border-border-h hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-heading text-lg font-bold mb-2">
                {f.title}
              </h3>
              <p className="text-[15px] text-gray-2 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Big image showcase */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 relative rounded-2xl overflow-hidden h-64 md:h-96"
        >
          <Image
            src="/images/IMG_0071.jpg"
            alt="Paving Solutions panoramic job site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="font-heading text-sm text-gray-3 uppercase tracking-wider mb-1">
              Real project. Real crew. Real results.
            </p>
            <p className="font-serif text-2xl md:text-3xl italic text-offwhite">
              This is what your website will show.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
