"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import VisibilityAudit from "@/components/VisibilityAudit";
import Solution from "@/components/Solution";
import SiteArchitecture from "@/components/SiteArchitecture";
import SEOStrategy from "@/components/SEOStrategy";
import Process from "@/components/Process";
import Investment from "@/components/Investment";
import WhatsNext from "@/components/WhatsNext";
import AboutCQ from "@/components/AboutCQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="h-px bg-border" />
      <CompanyOverview />
      <VisibilityAudit />
      <Solution />
      <SiteArchitecture />
      <SEOStrategy />
      <Process />
      <Investment />
      <WhatsNext />
      <AboutCQ />
      <CTA />
    </main>
  );
}
