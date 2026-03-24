import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Car, Monitor, Building2, TrendingUp, ShieldCheck, Clock, BarChart3 } from "lucide-react";

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Car, label: "Automotive" },
  { icon: Monitor, label: "IT & Digital" },
  { icon: Building2, label: "Construction" },
];

const outcomes = [
  { icon: TrendingUp, text: "Improved productivity across teams" },
  { icon: ShieldCheck, text: "Reduced defects & rejection rates" },
  { icon: Clock, text: "Faster onboarding of new hires" },
  { icon: BarChart3, text: "Measurable competency development" },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/50" ref={ref} aria-label="Industries served and key outcomes delivered by Core Hexis">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">Trusted Partner</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Industry Professionals & Organizations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 font-body">Industry Domains We Serve</h3>
            <div className="grid grid-cols-2 gap-4" role="list" aria-label="Industry domains">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center gap-3 p-5 rounded-xl bg-background shadow-card hover:shadow-elevated transition-all group"
                  role="listitem"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors" aria-hidden="true">
                    <ind.icon size={24} className="text-gold" />
                  </div>
                  <span className="text-sm font-semibold text-foreground font-body">{ind.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 font-body">Key Outcomes Delivered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list" aria-label="Training outcomes">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background shadow-card hover:shadow-elevated transition-all group"
                  role="listitem"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors" aria-hidden="true">
                    <outcome.icon size={18} className="text-gold" />
                  </div>
                  <span className="text-sm text-muted-foreground font-body leading-relaxed mt-2">{outcome.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
