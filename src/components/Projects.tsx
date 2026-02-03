import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce solution with real-time inventory management and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "Interactive dashboard for tracking investments, expenses, and financial goals with beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Figma", "React", "D3.js"],
    link: "#",
  },
  {
    title: "Travel App",
    category: "Mobile Development",
    description: "Cross-platform mobile app for discovering destinations, booking trips, and sharing travel experiences.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Maps API"],
    link: "#",
  },
  {
    title: "Creative Agency",
    category: "Branding",
    description: "Complete brand identity and website redesign for a forward-thinking creative agency.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["Branding", "Web Design", "Animation"],
    link: "#",
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

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary text-sm font-medium mt-4 md:mt-0 line-reveal inline-block"
          >
            View All Projects →
          </motion.a>
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
              <a href={project.link} className="block">
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                <div className="flex flex-wrap gap-2">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
