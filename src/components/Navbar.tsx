import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#offerings" },
  { label: "Programs", href: "#programs" },
  { label: "Methodology", href: "#approach" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll background effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.href.replace("#", "")),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // ✅ FIXED click handler (works in mobile)
  const handleClick = (href) => {
    const id = href.replace("#", "");
    setActiveSection(id);

    // Close mobile menu first
    setIsOpen(false);

    // Delay scroll until menu animation completes
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 250); // matches animation duration
  };

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-xl border border-gold/10 shadow-elevated"
          : "bg-background/80 backdrop-blur-xl border border-border/50"
      }`}
    >
      <div className="px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero">
            <img
              src={logo}
              alt="Core Hexis logo"
              className={`h-10 transition-all ${
                scrolled ? "brightness-0 invert" : ""
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`text-sm font-bold uppercase transition relative pb-1 ${
                    isActive
                      ? scrolled
                        ? "text-gold border-b-2 border-gold"
                        : "text-black border-b-2 border-black"
                      : scrolled
                        ? "text-primary-foreground/70 hover:text-gold-light"
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${
              scrolled ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className={`lg:hidden overflow-hidden rounded-b-2xl ${
              scrolled ? "bg-navy-deep/95" : "bg-background"
            } border-t ${scrolled ? "border-gold/10" : "border-border"}`}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className={`block text-sm font-medium uppercase transition ${
                      isActive
                        ? "text-gold-light"
                        : scrolled
                          ? "text-primary-foreground/70 hover:text-gold-light"
                          : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
