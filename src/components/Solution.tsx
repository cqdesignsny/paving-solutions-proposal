"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";
import AnimatedCounter from "./AnimatedCounter";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" /></svg>
    ),
    title: "One Unified Site, Three Divisions",
    description:
      "Each division gets its own dedicated section with SEO-optimized content, while the overall brand stays unified under PS Companies.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
    ),
    title: "Mobile-First, Fast-Loading",
    description:
      "Built for decision-makers who check contractor sites on phones at job sites. Sub-2 second load times, zero access errors.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 17v-2.5" /></svg>
    ),
    title: "AI & Google Search Ready",
    description:
      "We don't just build for Google anymore. We build for ChatGPT, Perplexity, and the AI tools your future clients are already using.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
    ),
    title: "Real Photos, Real Work",
    description:
      "No more stock images. Your real job sites, your real crew, your real equipment. \"You gotta see the dirt\" — and they will.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>
    ),
    title: "Professional Bid Request System",
    description:
      "Multi-step smart form: pick division, describe the project, submit scope details. Routes directly to your inbox. Modeled after the system you liked.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
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
              <div className="text-red mb-4">{f.icon}</div>
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
