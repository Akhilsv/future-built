import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#offerings" },
  { label: "Programs", href: "#programs" },
  { label: "Consulting", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-xl border border-gold/10 shadow-elevated"
          : "bg-background/80 backdrop-blur-xl border border-border/50"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex-shrink-0" aria-label="Core Hexis – Back to home">
            <img
              src={logo}
              alt="Core Hexis logo"
              className={`h-10 w-auto transition-all duration-500 ${scrolled ? "brightness-0 invert" : ""}`}
              width={48}
              height={48}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors tracking-wide uppercase ${
                  scrolled
                    ? "text-primary-foreground/70 hover:text-gold-light"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-gradient-gold text-secondary-foreground text-sm font-semibold hover:brightness-110 transition-all shadow-gold"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${scrolled ? "text-primary-foreground" : "text-foreground"}`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
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
            id="mobile-menu"
            className={`lg:hidden overflow-hidden rounded-b-2xl ${
              scrolled ? "bg-navy-deep/95" : "bg-background"
            } border-t ${scrolled ? "border-gold/10" : "border-border"}`}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    const id = link.href.replace("#", "");
                    setTimeout(() => {
                      const el = document.getElementById(id);
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }, 350);
                  }}
                  className={`block text-sm font-medium transition-colors uppercase tracking-wide ${
                    scrolled
                      ? "text-primary-foreground/70 hover:text-gold-light"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center px-6 py-2.5 rounded-lg bg-gradient-gold text-secondary-foreground text-sm font-semibold"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
