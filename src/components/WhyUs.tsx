import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Shield, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Veterans",
    description: "Trainers bring a wealth of academic expertise and extensive industrial exposure, delivering programs to numerous corporates.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Training",
    description: "Our training focuses on real-world applications with measurable progress assessments throughout the journey.",
  },
  {
    icon: Shield,
    title: "Integrity & Innovation",
    description: "Trust and faith amongst ourselves and with our clients keep us excited and encourage continuous improvement.",
  },
  {
    icon: Handshake,
    title: "Transparency & Relationships",
    description: "We adapt to change, stay goal-focused, and apply our knowledge to new challenges with a corporate mindset.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">Why Core Hexis</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What Sets Us Apart
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-border hover:border-gold/30 hover:shadow-elevated transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                <item.icon size={26} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-body">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
