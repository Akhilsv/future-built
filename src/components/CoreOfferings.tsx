import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Cpu, Briefcase, Users, Rocket, Brain } from "lucide-react";

const offerings = [
  {
    icon: GraduationCap,
    title: "Corporate Training Programs",
    description: "Structured, role-based training programs designed for engineering and manufacturing professionals.",
  },
  {
    icon: Cpu,
    title: "Industry 4.0 & Digital Transformation",
    description: "Smart factory, IoT, digital twin, and data-driven manufacturing programs for the future.",
  },
  {
    icon: Briefcase,
    title: "Consulting & Capability Development",
    description: "End-to-end consulting to build sustainable skill systems and performance frameworks.",
  },
  {
    icon: Users,
    title: "Training of Trainers (ToT)",
    description: "Equip your internal trainers with world-class facilitation and instructional design skills.",
  },
  {
    icon: Rocket,
    title: "Industry Readiness Programs",
    description: "Bridge the gap between academic knowledge and real-world industry performance.",
  },
  {
    icon: Brain,
    title: "Behavioral & Leadership Programs",
    description: "Communication, leadership, emotional intelligence, and performance culture building.",
  },
];

const CoreOfferings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offerings" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Capability Development at Every Level
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            From shop floor to leadership, we build performance-ready teams through industry-aligned programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-gold/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <item.icon size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-body">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.description}</p>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
