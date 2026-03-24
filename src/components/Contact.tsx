import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-muted/50"
      ref={ref}
      aria-label="Contact Core Hexis for training and consulting enquiries"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Connect With Us
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Let's Start a Conversation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.address
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8 not-italic"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                {/* <h3 className="font-semibold text-foreground mb-1 font-body">
                  Phone
                </h3> */}
                <a
                  href="tel:+919980631642"
                  className="font-semibold  hover:text-gold transition-colors font-body"
                  aria-label="Call Core Hexis at +91 998-063-1642"
                >
                  +91 998-063-1642
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                {/* <h3 className="font-semibold text-foreground mb-1 font-body">
                  Email
                </h3> */}
                <a
                  href="mailto:info@corehexis.com"
                  className="font-semibold hover:text-gold transition-colors font-body"
                  aria-label="Email Core Hexis at info@corehexis.com"
                >
                  info@corehexis.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <MapPin size={20} className="text-gold" />
              </div>

              <div>
                {/* <h3 className="font-semibold text-foreground mb-1 font-body">
                  Address
                </h3> */}

                <a className="font-semibold  font-body mb-3">
                  #45, 1st Main, 1st Cross, M.H Circle,
                  <br />
                  Vijayanagara – Bangalore 560040
                </a>
              </div>
            </div>
          </motion.address>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background p-8 rounded-2xl shadow-card space-y-5 max-w-lg mx-auto"
              aria-label="Contact enquiry form"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground mb-2 font-body"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground mb-2 font-body"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-foreground mb-2 font-body"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground mb-2 font-body"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm resize-none"
                  placeholder="Tell us about your training needs..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold hover:brightness-110 transition-all shadow-gold font-body"
              >
                {submitted ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
