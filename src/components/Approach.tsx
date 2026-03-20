import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Hammer, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Skill Gap Analysis",
    description: "We assess your team's current capabilities against industry benchmarks to identify precise gaps.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Customized Training Design",
    description: "Programs are tailored to your industry, roles, and performance objectives—never off-the-shelf.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Hands-on Implementation",
    description: "Real-world projects, simulations, and practical exercises ensure skills are applied, not just learned.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Performance Measurement",
    description: "We track progress, measure outcomes, and deliver ROI reports to validate training impact.",
  },
];

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="py-24 bg-hero relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">Our Approach</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Training That Drives Measurable Results
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto font-body">
            A proven 4-step methodology that ensures every program delivers tangible business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm"
            >
              <span className="text-5xl font-bold text-gold/15 font-display absolute top-4 right-6">{item.step}</span>
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-3 font-body">{item.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed font-body">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
