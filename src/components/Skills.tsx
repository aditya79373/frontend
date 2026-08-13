import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
    icon: "🎨",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python"],
    icon: "⚙️",
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "Supabase"],
    icon: "🗄️",
  },
  {
  category: "Tools",
  items: ["Git", "GitHub", "VS Code", "Tauri"],
  icon: "🛠️",
},
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/90" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            My Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            A comprehensive toolkit built over years of hands-on experience,
            continuously evolving with the latest industry standards.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
           <motion.div
  key={skill.category}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  whileHover={{ y: -8 }}
 transition={{
    type: "spring",
    stiffness: 420,   // 👈 jhatka kam
    damping: 28,      // 👈 smooth return
    mass: 0.8,        // 👈 weight feel
  }}
  className="
    group p-6 rounded-2xl
    bg-card border border-border/50
    hover:border-primary/50
    hover-glow
  "
>

              <motion.span
                className="text-4xl block mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {skill.icon}
              </motion.span>

              <h3 className="font-heading text-xl font-semibold mb-4 group-hover:text-gradient transition-all">
                {skill.category}
              </h3>

              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + i * 0.05 }}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
