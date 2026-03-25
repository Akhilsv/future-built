import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Images } from "lucide-react";

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-24 bg-hero relative overflow-hidden"
      ref={ref}
      aria-label="Explore Core Hexis works and book a consultation"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(42 92% 56%) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-6">
            <Images size={16} className="text-gold" aria-hidden="true" />
            <span className="text-gold-light text-sm font-medium tracking-wide">
              Our Impact
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Explore Our <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10 font-body">
            See how Core Hexis transforms workforce capabilities with
            structured, outcome-driven programs across industries.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Consultation actions">
            <a
              href="#contact"
              aria-label="Book a consultation with Core Hexis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold hover:brightness-110 transition-all shadow-gold group"
            >
              Book a Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
