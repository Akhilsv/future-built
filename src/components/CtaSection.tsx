import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-hero relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(42 92% 56%) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build a{" "}
            <span className="text-gradient-gold">High-Performance Team?</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10 font-body">
            Let's discuss how Core Hexis can transform your workforce capabilities with structured, outcome-driven programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold hover:brightness-110 transition-all shadow-gold group"
            >
              Book a Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919980631642"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary-foreground/20 text-primary-foreground font-medium hover:bg-primary-foreground/5 transition-all"
            >
              <Phone size={18} /> Talk to an Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
