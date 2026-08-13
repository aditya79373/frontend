import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    githubFrontend: "https://github.com/chatify24/Chatify-Frontend", // TODO: replace with actual repo URL
    githubBackend: "https://github.com/chatify24/Chatify-Backend", // TODO: replace with actual repo URL
  },
  {
    title: "Medisynn",
    category: "Healthcare Web Application",
    description:
      "A modern healthcare platform designed to improve mental well-being with Mood Tracking, Stress Analysis, Daily Wellness Tips, and Guided Breathing Exercises in a clean and responsive interface.",
    image:
      "https://res.cloudinary.com/tf0djpnz/image/upload/v1786011330/ChatGPT_Image_Aug_6_2026_03_41_59_PM_qh1k9g.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
    ],
    link: "https://medisynncare24.netlify.app/",
    githubFrontend: "https://github.com/medisynncare24/Frontend", // TODO: replace with actual repo URL
    githubBackend: "https://github.com/medisynncare24/Backend", // TODO: replace with actual repo URL
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                {/* Image Container */}
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

                {/* Content */}
                <span className="text-primary text-xs font-medium tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl font-semibold mt-2 mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
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

              {/* GitHub Link Buttons */}
              <div className="flex items-center gap-5">
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.104.823 2.226v3.3c0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Frontend
                </a>
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.104.823 2.226v3.3c0 .32.19.694.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Backend
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;