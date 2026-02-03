import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "GH" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "LI" },
    { name: "Twitter", url: "https://twitter.com", icon: "TW" },
    { name: "Dribbble", url: "https://dribbble.com", icon: "DR" },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6"
            >
              Let's Create Something
              <span className="text-gradient"> Amazing</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Let's discuss how we can work together to bring your ideas to life.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@johndoe.com" className="text-foreground hover:text-primary transition-colors">
                    hello@johndoe.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary">📍</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 p-8 rounded-2xl bg-card border border-border"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder="John Smith"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
