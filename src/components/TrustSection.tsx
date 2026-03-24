import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Factory,
  Car,
  Monitor,
  Building2,
  TrendingUp,
  ShieldCheck,
  Clock,
  BarChart3,
} from "lucide-react";

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
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Industries and outcomes"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/40 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full" />

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4">
            Trusted Partner
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Trusted by Industry Professionals
            <br />
            <span className="text-gold">& Organizations</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-8">
              Industry Domains We Serve
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="group relative p-6 rounded-2xl bg-background/70 backdrop-blur-xl border border-border/50 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-110 transition">
                      <ind.icon className="text-gold" size={26} />
                    </div>
                    <span className="font-semibold text-foreground text-sm">
                      {ind.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-6">
              Key Outcomes Delivered
            </h3>

            <div className="space-y-3">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome.text}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-background/70 backdrop-blur-xl border border-border/50 shadow-sm hover:shadow-lg transition-all"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                    <outcome.icon size={18} className="text-gold" />
                  </div>

                  {/* Text */}
                  <p className="text-sm text-muted-foreground leading-snug">
                    {outcome.text}
                  </p>
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
