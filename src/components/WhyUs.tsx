import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import iconVeterans from "@/assets/icon-veterans.png";
import iconOutcome from "@/assets/icon-outcome.png";
import iconIntegrity from "@/assets/icon-integrity.png";
import iconTransparency from "@/assets/icon-transparency.png";

const reasons = [
  {
    image: iconVeterans,
    title: "Industry Veterans",
    description: "Trainers bring a wealth of academic expertise and extensive industrial exposure, delivering programs to numerous corporates.",
  },
  {
    image: iconOutcome,
    title: "Outcome-Driven Training",
    description: "Our training focuses on real-world applications with measurable progress assessments throughout the journey.",
  },
  {
    image: iconIntegrity,
    title: "Integrity & Innovation",
    description: "Trust and faith amongst ourselves and with our clients keep us excited and encourage continuous improvement.",
  },
  {
    image: iconTransparency,
    title: "Transparency & Relationships",
    description: "We adapt to change, stay goal-focused, and apply our knowledge to new challenges with a corporate mindset.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      className="py-24"
      ref={ref}
      aria-label="Why choose Core Hexis for capability development"
      style={{ background: "linear-gradient(180deg, hsl(210 40% 97%) 0%, hsl(216 30% 95%) 100%)" }}
    >
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Core Hexis differentiators">
          {reasons.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-background border border-border hover:border-gold/30 hover:shadow-elevated transition-all group"
              role="listitem"
            >
              <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center" aria-hidden="true">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-body">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
