import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SplashIntro from "@/components/SplashIntro";
import TrustSection from "@/components/TrustSection";
import CoreOfferings from "@/components/CoreOfferings";
import ProgramDomains from "@/components/ProgramDomains";
import Approach from "@/components/Approach";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const SPLASH_KEY = "corehexis_splash_shown";

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return false;
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return false;
    return !sessionStorage.getItem(SPLASH_KEY);
  });

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem(SPLASH_KEY, "1");
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashIntro onComplete={handleSplashComplete} />}
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <WhyUs />
          <About />

          <CoreOfferings />
          <ProgramDomains />
          <Approach />
          {/* <IndustryPrograms /> */}

          {/* <TrustSection /> */}
          <Gallery />
          <CtaSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
