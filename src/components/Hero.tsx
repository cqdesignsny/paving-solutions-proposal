"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const stats = [
    { value: 3, label: "Divisions", suffix: "" },
    { value: 130, label: "Employees", suffix: "+" },
    { value: 20, label: "Years in Business", suffix: "+" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Static image background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: bgScale, opacity: bgOpacity }}
      >
        <Image
          src="/images/IMG_0080.jpg"
          alt="Paving Solutions crew at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/40 to-bg" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 10%, transparent 75%)",
        }}
      />

      {/* Red glow */}
      <div className="absolute inset-0 z-[1]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 45%, rgba(196,30,42,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-[920px] mx-auto"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* PS Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8"
        >
          <Image
            src="/images/ps-logo-modern.png"
            alt="Paving Solutions Inc."
            width={400}
            height={160}
            className="mx-auto h-28 md:h-36 w-auto"
            priority
          />
        </motion.div>

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-heading text-sm md:text-base tracking-[0.25em] uppercase text-gray-3 mb-8"
        >
          Website Strategy & Build Proposal
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] mb-6"
        >
          Your reputation closes deals.
          <br />
          <span className="italic text-red-light">
            We&apos;ll build you a website
          </span>
          <br />
          <span className="italic text-red-light">that opens them.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-xl md:text-2xl text-gray-2 max-w-[700px] mx-auto mb-12 leading-relaxed"
        >
          Paving Solutions Inc. runs 130+ employees, three specialized
          divisions, and a world-class paving crew across the Tri-State area.
          Your website should hit just as hard as your operation on Route 17M.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex items-center justify-center gap-8 md:gap-16 flex-wrap"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-extrabold text-offwhite">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <div className="font-heading text-sm md:text-sm tracking-[0.15em] uppercase text-gray-3 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
          <div className="text-center">
            <div className="font-heading text-3xl md:text-4xl font-extrabold text-offwhite">
              Tri-State
            </div>
            <div className="font-heading text-sm md:text-sm tracking-[0.15em] uppercase text-gray-3 mt-1">
              Service Area
            </div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
