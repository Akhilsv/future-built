import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import classroomImg from "@/assets/speaker.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      role="banner"
      aria-label="Core Hexis – Industry capability development and corporate training"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image + Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.35)),
            url(${classroomImg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-30">
        <div className="max-w-4xl">
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

          {/* H1 (LCP optimized - fast render) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
          >
            Empowering Professions with skills and{" "}
            <span className="text-gradient-gold">
              confidence to accelerate performance..
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed font-body"
          >
            We improve productivity, reduce rejection, and build
            high-performance teams through structured capability development
            programs
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

        {/* Stats bar
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-10"
          role="list"
          aria-label="Core Hexis key statistics"
        >
          {[
            { value: "8+", label: "Industry Domains" },
            { value: "50+", label: "Training Programs" },
            { value: "100+", label: "Industry Experts" },
            { value: "500+", label: "Professionals Trained" },
          ].map((stat) => (
            <div key={stat.label} role="listitem">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold font-display">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-1 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
