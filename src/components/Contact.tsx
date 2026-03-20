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
    <section id="contact" className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-4 font-body">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Let's Start a Conversation
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 font-body">Phone</h4>
                <a href="tel:+919980631642" className="text-muted-foreground hover:text-gold transition-colors font-body">+91 998-063-1642</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 font-body">Email</h4>
                <a href="mailto:info@corehexis.com" className="text-muted-foreground hover:text-gold transition-colors font-body">info@corehexis.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 font-body">Address</h4>
                <p className="text-muted-foreground font-body">#45, 1st Main, 1st Cross, M.H Circle,<br />Vijayanagara – Bangalore 560040</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-background p-8 rounded-2xl shadow-card space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">Message</label>
                <textarea
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
                {submitted ? "Message Sent ✓" : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
