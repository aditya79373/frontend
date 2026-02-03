import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "10+", label: "Awards Won" },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl glass p-6 flex flex-col justify-center"
            >
              <span className="text-4xl font-heading font-bold text-gradient">5+</span>
              <span className="text-sm text-muted-foreground mt-1">Years of Experience</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6"
            >
              Crafting Digital
              <span className="text-gradient"> Excellence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              I'm a passionate full-stack developer and designer based in San Francisco. 
              With over 5 years of experience, I specialize in creating beautiful, 
              functional, and user-centered digital experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              My approach combines technical expertise with creative vision, 
              ensuring every project not only meets but exceeds expectations. 
              I believe in clean code, thoughtful design, and continuous learning.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                >
                  <span className="text-2xl md:text-3xl font-heading font-bold text-gradient">
                    {stat.number}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
