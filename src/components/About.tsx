import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "2", label: "Projects Completed" },
    { number: "4+", label: "Technologies Mastered" },
    { number: "100%", label: "Learning Mindset" },
    { number: "∞", label: "Problem Solving" },
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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <img
                src="https://res.cloudinary.com/tf0djpnz/image/upload/v1785999246/photo_mjg16c.jpg"
                alt="Aditya Patil"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content Side */}
          <div>

            {/* About Me */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              About Me
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-6"
            >
              Building Modern
              <span className="text-gradient"> Web </span>
              Applications
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              I'm a Computer Science student and Full Stack Developer
              passionate about creating modern, scalable, and user-friendly
              web applications.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              My focus is on writing clean code, building responsive user
              interfaces, and developing efficient backend systems. I
              continuously learn and explore new technologies to improve my
              skills and deliver better digital experiences.
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
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                >

                  {/* Number Area */}
                  <div className="h-10 md:h-12 flex items-center justify-center">
                    <span
  className={`font-heading text-gradient ${
    stat.number === "∞"
      ? "text-3xl md:text-4xl font-normal leading-none"
      : "text-2xl md:text-3xl font-bold leading-none"
  }`}
>
  {stat.number}
</span>
                  </div>

                  {/* Label */}
               <p className="text-xs text-muted-foreground mt-1 text-center">
  {stat.label}
</p>

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