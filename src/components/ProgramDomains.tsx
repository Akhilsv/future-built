import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wrench,
  Zap,
  Car,
  Building2,
  Monitor,
  Pencil,
  BarChart3,
  GraduationCap,
  Download,
} from "lucide-react";
import brochure from "../assets/Brochure.pdf";

const domains = [
  {
    icon: Wrench,
    title: "Mechanical Engineering",
    summary: "CNC, Lean Manufacturing, Six Sigma, GD&T, FEA, Industry 4.0",
  },
  {
    icon: Zap,
    title: "Electrical & Electronics",
    summary: "PLC, SCADA, Embedded Systems, IoT, EV Technology, Smart Grid",
  },
  {
    icon: Car,
    title: "Automotive",
    summary: "Vehicle Diagnostics, ADAS, EV Powertrain, IATF 16949",
  },
  {
    icon: Building2,
    title: "Construction & Infrastructure",
    summary: "BIM, Project Management, Quantity Surveying, Green Building",
  },
  {
    icon: Monitor,
    title: "IT & Digital Technology",
    summary: "Python, Full Stack, Data Analytics, AI/ML, Cloud & DevOps",
  },
  {
    icon: Pencil,
    title: "Product Design & Engineering",
    summary: "Design Thinking, NPD, FMEA, 3D Printing, PLM",
  },
  {
    icon: BarChart3,
    title: "Functional Programs",
    summary: "Operations, Quality, Finance, Supply Chain, Sales Skills",
  },
  {
    icon: GraduationCap,
    title: "Training of Trainers (ToT)",
    summary: "Instructional Design, Facilitation, L&D Strategy, Assessment",
  },
];

const ProgramDomains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="programs"
      className="py-24 bg-muted/50"
      ref={ref}
      aria-label="Core Hexis training program domains"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">
            Program Domains
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Training Across Industries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Explore our structured programs spanning 8 core engineering and
            technology domains.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          role="list"
          aria-label="Eight training domains"
        >
          {domains.map((domain, i) => (
            <motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-gold/30 hover:shadow-elevated transition-all duration-300 cursor-pointer"
              role="listitem"
            >
              <div
                className="w-11 h-11 rounded-lg bg-navy-deep/90 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300"
                aria-hidden="true"
              >
                <domain.icon
                  size={20}
                  className="text-gold group-hover:text-secondary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 font-body">
                {domain.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {domain.summary}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Download Brochure Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={brochure}
            download="Core-hexis-Brochure.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold hover:brightness-110 transition-all shadow-gold group"
          >
            <Download size={18} aria-hidden="true" />
            Download Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDomains;
