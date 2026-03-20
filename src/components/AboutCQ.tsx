"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionTag from "./SectionTag";
import AnimatedCounter from "./AnimatedCounter";

const team = [
  {
    name: "Cesar",
    role: "Founder · Strategy & Creative",
    description:
      "15+ years in digital marketing. Leads every project from strategy through execution.",
  },
  {
    name: "Laura",
    role: "Content & Social Media",
    description:
      "Content strategy, social media management, and brand storytelling that connects.",
  },
  {
    name: "Dennis",
    role: "Development & Automation",
    description:
      "Full-stack development, AI integration, and marketing automation systems.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years in Digital Marketing" },
  { value: 100, suffix: "+", label: "Websites Built" },
];

export default function AboutCQ() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionTag label="Who We Are" id="about" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] mb-4"
        >
          Your marketing team.
          <br />
          <span className="italic">Not just a website vendor.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xl md:text-2xl text-gray-2 max-w-[660px] leading-relaxed mb-14"
        >
          CQ Marketing is a full-service digital marketing agency based in
          the Hudson Valley. We&apos;ve spent 15+ years building websites,
          running SEO, creating content, and driving leads for businesses
          across the trades and construction space. We can become your
          marketing division, or work alongside your existing team as a
          flexible partner. Either way, we handle the digital side so you
          can focus on what you do best.
        </motion.p>

        {/* Stats + Logo */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-bg-3 border border-border rounded-2xl p-8 text-center"
            >
              <div className="font-heading text-4xl md:text-5xl font-extrabold text-offwhite mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-base text-gray-2">{stat.label}</p>
            </motion.div>
          ))}
          <motion.div
            variants={fadeUp}
            className="bg-bg-3 border border-border rounded-2xl p-8 flex flex-col items-center justify-center"
          >
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-offwhite mb-2">
              Local
            </div>
            <p className="text-base text-gray-2">
              Hudson Valley, NY. Your backyard.
            </p>
          </motion.div>
        </motion.div>

        {/* Team */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="bg-bg-2 border border-border rounded-2xl p-7 card-hover"
            >
              <h3 className="font-heading text-xl font-bold mb-1">
                {member.name}
              </h3>
              <p className="font-heading text-sm text-red font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-base text-gray-2 leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* What we bring */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-bg-3 border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-shrink-0">
            <Image
              src="/images/cq-logo-white.png"
              alt="CQ Marketing"
              width={200}
              height={60}
              className="h-14 w-auto"
            />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold mb-2">
              Why We&apos;re the Right Fit
            </h3>
            <ul className="space-y-2">
              {[
                "Local to the Hudson Valley. Based in Newburgh, NY.",
                "Track record with construction & trades clients",
                "Full-service: website, SEO, social media, content, video, AI automation",
                "Not a template shop. Custom builds, real strategy.",
                "You already know our work. Bobby's site is what started this conversation.",
              ].map((item) => (
                <li
                  key={item}
                  className="text-base text-gray-2 leading-relaxed flex items-start gap-2"
                >
                  <svg className="w-4 h-4 text-red mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
