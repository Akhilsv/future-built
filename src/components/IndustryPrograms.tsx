import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Shop Floor Performance Improvement",
    description: "Lean + Leadership for supervisors driving measurable productivity gains.",
  },
  {
    title: "Industry Readiness Programs",
    description: "Bridge academic learning and real-world industry execution for new professionals.",
  },
  {
    title: "Quality & Process Excellence",
    description: "Six Sigma, ISO implementation, and quality management systems.",
  },
  {
    title: "Industry 4.0 Implementation",
    description: "Smart factory, data analytics, IoT, and digital manufacturing readiness.",
  },
  {
    title: "Supervisor & Leadership Development",
    description: "Build confident leaders who drive accountability, ownership, and team performance.",
  },
];

const IndustryPrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">High Demand</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Integrated Industry Programs
            </h2>
            <p className="text-muted-foreground mb-8 font-body leading-relaxed">
              Our most requested programs combine multiple skill domains into comprehensive, 
              role-specific learning journeys that deliver immediate business impact.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all font-body"
            >
              Discuss Your Requirements <ArrowRight size={18} />
            </a>
          </motion.div>

          <div className="space-y-4">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl border border-border hover:border-gold/30 hover:shadow-card transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-gold font-body">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1 font-body">{program.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{program.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPrograms;
