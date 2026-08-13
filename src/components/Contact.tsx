import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";


const Spinner = () => (
  <motion.div
    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
  />
);
const Tick = () => (
  <motion.svg
    width="22"
    height="22"
    viewBox="0 0 52 52"
    fill="none"
  >
    {/* Circle */}
    <motion.circle
      cx="26"
      cy="26"
      r="24"
      stroke="currentColor"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />

    {/* Check */}
    <motion.path
      d="M14 27 L23 35 L38 18"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
    />
  </motion.svg>
);


const Contact = () => {
  const [loading, setLoading] = useState(false);
const [sent, setSent] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setSent(false);

  const start = Date.now();

  try {
    const res = await fetch("http://localhost:5000/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    // minimum spinner time (smooth UX)
    const elapsed = Date.now() - start;
    const remaining = Math.max(1200 - elapsed, 0);
    await new Promise((r) => setTimeout(r, remaining));

    if (data.success) {
      setFormData({ name: "", email: "", message: "" });
      setSent(true);

      // reset button after 2.5 sec
      setTimeout(() => setSent(false), 2500);
    }
  } catch {
    // optional error state
  } finally {
    setLoading(false);
  }
};





  return (
    <section id="contact" className="section-padding bg-secondary/90" ref={ref}>
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
  className="space-y-5 mb-8"
>
  {/* Email */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <svg
        className="w-5 h-5 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">Email</p>
      <a
        href="mailto:aditya79373@gmail.com"
        className="text-foreground hover:text-primary transition-colors"
      >
        aditya79373@gmail.com
      </a>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <svg
        className="w-5 h-5 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">Location</p>
      <p className="text-foreground">Rajpura, Punjab</p>
    </div>
  </div>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/aditya-patil-8a5a47375/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 group w-fit"
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
      <FaLinkedin className="w-5 h-5 text-primary" />
    </div>
    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
      LinkedIn Profile
    </p>
  </a>
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
              className="
  w-full px-4 py-3 rounded-lg
  bg-background
  border border-border
  focus:border-primary
  focus:outline-none
  focus:ring-0
  transition-colors
  text-foreground
  placeholder:text-muted-foreground
"

                placeholder="Enter your name"
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
              className="
  w-full px-4 py-3 rounded-lg
  bg-background
  border border-border
  focus:border-primary
  focus:outline-none
  focus:ring-0
  transition-colors
  text-foreground
  placeholder:text-muted-foreground
"
                placeholder="Enter your email"
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
               className="
  w-full px-4 py-3 rounded-lg
  bg-background
  border border-border
  focus:border-primary
  focus:outline-none
  focus:ring-0
  transition-colors
  text-foreground
  placeholder:text-muted-foreground
"

                placeholder="Enter your message"
                required
              />
            </div>

           <motion.button
  type="submit"
  disabled={loading || sent}
  whileHover={!loading && !sent ? { scale: 1.02 } : {}}
  whileTap={!loading && !sent ? { scale: 0.98 } : {}}
  className={`
    w-full py-4 rounded-lg
    bg-primary text-primary-foreground
    font-medium
    flex items-center justify-center gap-3
    transition-all
    ${
      loading || sent
        ? "opacity-80 cursor-not-allowed"
        : "hover:shadow-lg hover:shadow-primary/25"
    }
  `}
>
  {loading && <Spinner />}

  {sent && <Tick />}

  <span>
    {sent ? "Message Sent" : "Send Message"}
  </span>
</motion.button>



          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;