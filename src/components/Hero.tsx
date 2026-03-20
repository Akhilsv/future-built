import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold-light text-sm font-medium tracking-wide">Upskill · Reskill · Build</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8"
          >
            Building Industry-Ready Talent.{" "}
            <span className="text-gradient-gold">Driving Real Performance.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-12 leading-relaxed font-body"
          >
            We help organizations and professionals bridge the gap between knowledge and execution 
            through structured, outcome-driven capability development programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold text-base hover:brightness-110 transition-all shadow-gold group"
            >
              Explore Programs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/20 text-primary-foreground font-medium text-base hover:bg-primary-foreground/5 transition-all group"
            >
              Book Consultation
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary-foreground/10 pt-10"
        >
          {[
            { value: "8+", label: "Industry Domains" },
            { value: "50+", label: "Training Programs" },
            { value: "100+", label: "Industry Experts" },
            { value: "500+", label: "Professionals Trained" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold font-display">{stat.value}</div>
              <div className="text-sm text-primary-foreground/50 mt-1 font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
