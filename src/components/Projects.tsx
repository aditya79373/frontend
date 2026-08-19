import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Chatify",
    category: "Full Stack Web Application",
    description:
      "A modern real-time chat application with secure authentication, instant messaging, online status, responsive UI, and seamless communication experience.",
    image:
      "https://res.cloudinary.com/tf0djpnz/image/upload/v1786383976/Gemini_Generated_Image_lqfq0ulqfq0ulqfq-Photoroom_zl5oob.png",
    tags: ["React", "Node.js", "Express", "Supabase", "Socket.io"],
    link: "https://chatifyapp-s11a.onrender.com/",
  },
  {
    title: "Medisynn",
    category: "Healthcare Web Application",
    description:
      "A modern healthcare platform designed to improve mental well-being with Mood Tracking, Stress Analysis, Daily Wellness Tips, and Guided Breathing Exercises in a clean and responsive interface.",
    image:
      "https://res.cloudinary.com/tf0djpnz/image/upload/v1786011330/ChatGPT_Image_Aug_6_2026_03_41_59_PM_qh1k9g.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "OpenAI"],
    link: "https://medisynncare24.netlify.app/",
  },
];

// Same backend as Contact.tsx
const API_BASE_URL = "https://backend-arjv.onrender.com";

const Spinner = () => (
  <motion.div
    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
  />
);

const Tick = () => (
  <motion.svg width="22" height="22" viewBox="0 0 52 52" fill="none">
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

const inputClasses = `
  w-full px-4 py-3 rounded-lg
  bg-background
  border border-border
  focus:border-primary
  focus:outline-none
  focus:ring-0
  transition-colors
  text-foreground
  placeholder:text-muted-foreground
`;

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const openModal = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveProject(title);
    setSent(false);
    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const closeModal = () => {
    if (loading) return; // don't allow closing mid-request
    setActiveProject(null);
    setSent(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const start = Date.now();

    try {
      const res = await fetch(`${API_BASE_URL}/request-code-access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          projectTitle: activeProject,
        }),
      });

      const data = await res.json();

      // minimum spinner time (smooth UX)
      const elapsed = Date.now() - start;
      const remaining = Math.max(1200 - elapsed, 0);
      await new Promise((r) => setTimeout(r, remaining));

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setSent(true);

        // auto-close after showing tick
        setTimeout(() => {
          setActiveProject(null);
          setSent(false);
        }, 2000);
      }
    } catch {
      // optional error state
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="work" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              Portfolio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold mt-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: "center 27%" }}
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.span>
                  </div>
                </div>

                <span className="text-primary text-xs font-medium tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl font-semibold mt-2 mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>

              {/* Request Code Access Button (repo is private) */}
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={(e) => openModal(e, project.title)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v-6m0 6l-3-3m3 3l3-3M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
                  </svg>
                  Request Code Access
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Request Access Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              {!loading && (
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              <h3 className="font-heading text-xl font-semibold mb-1">
                Request Access to {activeProject}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                This repo is private. Share your details and I'll follow up.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="req-name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    id="req-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="req-email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    id="req-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="req-message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="req-message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    placeholder="Enter your message"
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
                  <span>{sent ? "Request Sent" : "Send Request"}</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;