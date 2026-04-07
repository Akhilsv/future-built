import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    // Map id to formData keys
    const fieldMap: Record<string, string> = {
      "contact-name": "name",
      "contact-email": "email",
      "contact-phone": "phone",
      "contact-message": "message",
    };

    setFormData((prev) => ({
      ...prev,
      [fieldMap[id]]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorVisible(false);
    setShowSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast.success("Message sent successfully!");
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setErrorVisible(true);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
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
                <a
                  href="mailto:info@corehexis.com"
                  className="font-semibold hover:text-gold transition-colors font-body"
                  aria-label="Email Core Hexis at info@corehexis.com"
                >
                  dattatreya@corehexis.com
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
                <p className="font-semibold font-body mb-3">
                  #45, 1st Main, 1st Cross, M.H Circle,
                  <br />
                  Vijayanagara – Bangalore 560040
                </p>
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
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                    placeholder="John Doe"
                    disabled={isSending}
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
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                    placeholder="john@company.com"
                    disabled={isSending}
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
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm"
                  placeholder="Enter your phone number"
                  disabled={isSending}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all font-body text-sm resize-none"
                  placeholder="Tell us about your training needs..."
                  disabled={isSending}
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-lg bg-gradient-gold text-secondary-foreground font-semibold hover:brightness-110 transition-all shadow-gold font-body disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  "Sending..."
                ) : showSuccess ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    <span className="sm:hidden">Send Message</span>
                    <span className="hidden sm:inline">
                      Send Message | Let's Start a Conversation
                    </span>
                  </>
                )}
              </button>

              {errorVisible && (
                <p className="text-destructive text-sm text-center mt-2 font-body">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

