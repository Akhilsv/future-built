import { useState, useCallback } from "react";
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
import ScrollSection from "@/components/ScrollSection";

const SPLASH_KEY = "corehexis_splash_shown";

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
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
          <ScrollSection><Hero /></ScrollSection>
          <ScrollSection><WhyUs /></ScrollSection>
          <ScrollSection><About /></ScrollSection>
          <ScrollSection><Gallery /></ScrollSection>
          <ScrollSection><CtaSection /></ScrollSection>
          <ScrollSection><CoreOfferings /></ScrollSection>
          <ScrollSection><ProgramDomains /></ScrollSection>
          <ScrollSection><Approach /></ScrollSection>
          <ScrollSection><TrustSection /></ScrollSection>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
