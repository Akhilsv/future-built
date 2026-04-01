import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Cpu,
  Briefcase,
  Users,
  Rocket,
  Brain,
} from "lucide-react";

const offerings = [
  {
    icon: GraduationCap,
    abbr: "CTP",
    title: "Corporate Training Programs",
    description:
      "Structured, role-based training programs designed for engineering and manufacturing professionals.",
  },
  {
    icon: Cpu,
    abbr: "I4DT",
    title: "Industry 4.0 & Digital Transformation",
    description:
      "Smart factory, IoT, digital twin, and data-driven manufacturing programs for the future.",
  },
  {
    icon: Briefcase,
    abbr: "C&CD",
    title: "Consulting & Capability Development",
    description:
      "End-to-end consulting to build sustainable skill systems and performance frameworks.",
  },
  {
    icon: Users,
    abbr: "TOT",
    title: "Training of Trainers (ToT)",
    description:
      "Equip your internal trainers with world-class facilitation and instructional design skills.",
  },
  {
    icon: Rocket,
    abbr: "IRP",
    title: "Industry Readiness Programs",
    description:
      "Bridge the gap between academic knowledge and real-world industry performance.",
  },
  {
    icon: Brain,
    abbr: "B&SSP",
    title: "Behavioural & Soft Skills Programs",
    description:
      "Communication, leadership, emotional intelligence, and performance culture building.",
  },
];

const CoreOfferings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="offerings"
      className="py-24 bg-background"
      ref={ref}
      aria-label="Core Hexis capability development services"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Capability Development at Every Level
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            From shop floor to leadership, we build performance-ready teams
            through industry-aligned programs.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Training services offered by Core Hexis"
        >
          {offerings.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-center gap-5 p-5 md:p-6 rounded-xl bg-background border border-border hover:border-gold/30 hover:shadow-elevated transition-all duration-300"
              role="listitem"
            >
              <div
                className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors"
                aria-hidden="true"
              >
                <item.icon size={22} className="text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-foreground font-body">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body mt-1">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
