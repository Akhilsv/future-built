import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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

const Index = () => {
  return (
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

      <TrustSection />
      <CtaSection />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/919980631642?text=Hello, I want to Enquiry about programs"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-md">
          Chat with us
        </span>

        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300">
          {/* Pulse animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-current z-10"
          >
            <path d="M16 .395C7.163.395 0 7.558 0 16.395c0 2.89.757 5.706 2.196 8.187L0 32l7.622-2.163a15.93 15.93 0 008.378 2.394c8.837 0 16-7.163 16-16S24.837.395 16 .395zm0 29.43a13.3 13.3 0 01-6.774-1.857l-.485-.29-4.522 1.283 1.209-4.408-.316-.507A13.273 13.273 0 012.7 16.395C2.7 9.148 8.753 3.095 16 3.095s13.3 6.053 13.3 13.3-6.053 13.43-13.3 13.43zm7.384-10.036c-.403-.202-2.385-1.177-2.754-1.31-.369-.134-.637-.202-.905.202-.268.403-1.039 1.31-1.275 1.58-.235.268-.47.302-.873.1-.403-.202-1.702-.627-3.243-2-.12-.104-2.012-1.85-2.012-4.153 0-.403.202-.772.537-1.041.268-.235.403-.302.604-.504.202-.202.302-.403.47-.672.168-.268.084-.504-.042-.705-.126-.202-.905-2.183-1.241-2.99-.327-.786-.66-.679-.905-.692l-.772-.013c-.268 0-.705.1-1.074.504-.369.403-1.41 1.377-1.41 3.36 0 1.983 1.444 3.897 1.645 4.165.202.268 2.84 4.34 6.878 6.088.96.414 1.708.662 2.292.848.963.306 1.84.263 2.533.16.773-.115 2.385-.973 2.72-1.91.336-.937.336-1.742.235-1.91-.1-.168-.369-.268-.772-.47z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Index;
