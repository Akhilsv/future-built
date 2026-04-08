import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import bg2 from "@/assets/2.png";
import bg3 from "@/assets/3.png";
import bg5 from "@/assets/5.png";
import bg6 from "@/assets/6.png";

const backgrounds = [bg2, bg3, bg5, bg6];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    // preload images to avoid flash
    backgrounds.forEach((img) => {
      const image = new Image();
      image.src = img;
    });

    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      role="banner"
      aria-label="Core Hexis – Industry capability development and corporate training"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.0) 80%),
                url(${backgrounds[currentBg]})
              `,
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Extra dark fallback layer (important) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 50%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-10"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold z-20"
        aria-hidden="true"
      />

      <div className="w-full px-6 lg:px-12 pt-32 pb-20 relative z-30">
        <div className="w-full lg:w-[75%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 backdrop-blur-sm"
          >
            <span
              className="w-2 h-2 rounded-full bg-gold animate-pulse"
              aria-hidden="true"
            />
            <span className="text-gold-light text-sm font-medium tracking-wide">
              Upskill · Reskill · Build
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-[clamp(2rem,7vw,3.5rem)] font-bold text-white leading-[1.1] mb-8"
          >
            Empowering Professions with skills and{" "}
            <span className="text-gradient-gold">
              confidence to accelerate performance.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[clamp(1.125rem,1.5vw,1.375rem)] text-white/80 max-w-2xl mb-12 leading-relaxed font-body"
          >
            We improve productivity, reduce rejection, and build
            high-performance teams through structured capability development
            programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
            role="group"
            aria-label="Call to action"
          >
            <a
              href="#programs"
              aria-label="Explore Core Hexis training programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold text-base hover:brightness-110 transition-all shadow-gold group"
            >
              Explore Programs
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>

            <a
              href="#contact"
              aria-label="Book a consultation with Core Hexis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold text-base hover:brightness-110 transition-all shadow-gold group"
            >
              Book Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
