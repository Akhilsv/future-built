import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SplashIntro from "@/components/SplashIntro";
import TrustSection from "@/components/TrustSection";
import CoreOfferings from "@/components/CoreOfferings";
import ProgramDomains from "@/components/ProgramDomains";
import Approach from "@/components/Approach";
import IndustryPrograms from "@/components/IndustryPrograms";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <About />
        <Gallery />
        <CtaSection />
        <CoreOfferings />
        <ProgramDomains />
        <Approach />
        {/* <IndustryPrograms /> */}

        <TrustSection />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
