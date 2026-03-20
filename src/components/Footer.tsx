import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const programLinks = [
  "Mechanical Engineering",
  "Electrical & Electronics",
  "Automotive",
  "IT & Digital Technology",
  "Construction & Infrastructure",
  "Training of Trainers",
];

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Core Hexis" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/50 leading-relaxed font-body">
              Building industry-ready talent through structured, outcome-driven capability development programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4 font-body">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/50 hover:text-gold transition-colors font-body">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4 font-body">Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((label) => (
                <li key={label}>
                  <span className="text-sm text-primary-foreground/50 font-body">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4 font-body">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/50 font-body">
              <p>+91 998-063-1642</p>
              <p>info@corehexis.com</p>
              <p>Vijayanagara, Bangalore 560040</p>
              <p>www.corehexis.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40 font-body">
            © {new Date().getFullYear()} Core Hexis. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/40 font-body">
            Upskill · Reskill · Build
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
