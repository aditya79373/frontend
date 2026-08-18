import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Achievements
const achievements = [
  {
    title: "Achievement 1",
    image:
      "https://res.cloudinary.com/tf0djpnz/image/upload/v1786548546/Deloitte_page-0001_we2rnq.jpg",
  },
  {
    title: "Achievement 2",
    image:
      "https://res.cloudinary.com/tf0djpnz/image/upload/v1786549394/WhatsApp_Image_2026-08-12_at_9.12.52_PM_bkr2gn.jpg",
  },
];

const Hero = () => {
  const titleWords = ["Full", "Stack", "Developer"];

  const [showAchievements, setShowAchievements] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Top Right Orb */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-1/4
            -right-1/4
            w-[350px]
            h-[350px]
            sm:w-[500px]
            sm:h-[500px]
            lg:w-[800px]
            lg:h-[800px]
            rounded-full
            bg-primary/15
            blur-2xl
            lg:blur-3xl
            will-change-transform
          "
        />

        {/* Bottom Left Orb */}
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-1/4
            -left-1/4
            w-[300px]
            h-[300px]
            sm:w-[450px]
            sm:h-[450px]
            lg:w-[600px]
            lg:h-[600px]
            rounded-full
            bg-accent/20
            blur-2xl
            lg:blur-3xl
            will-change-transform
          "
        />

      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              text-muted-foreground
              text-lg
              mb-6
              font-body
              tracking-wide
              will-change-transform
            "
          >
            Hello, I'm Aditya Patil
          </motion.p>

          {/* ================= MAIN TITLE ================= */}
          <h1
            className="
              font-heading
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-semibold
              leading-tight
              mb-8
            "
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                className={`
                  inline-block
                  mr-2
                  md:mr-4
                  will-change-transform
                  ${
                    index === 0
                      ? "text-gradient"
                      : "text-foreground"
                  }
                `}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="
              text-muted-foreground
              text-lg
              md:text-xl
              max-w-2xl
              mx-auto
              mb-12
              font-body
              leading-relaxed
              will-change-transform
            "
          >
            Building scalable web applications with modern technologies.
            Transforming ideas into fast, secure, and user-friendly digital
            experiences.
          </motion.p>

          {/* ================= CTA BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
              will-change-transform
            "
          >
            {/* Explore Projects */}
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="
                px-8
                py-4
                rounded-full
                bg-primary
                text-primary-foreground
                font-medium
                transition-shadow
                hover:shadow-lg
                hover:shadow-primary/25
                outline-none
                focus:outline-none
                focus:ring-0
              "
            >
              Explore Projects
            </motion.a>

            {/* Achievements */}
            <motion.button
              type="button"
              onClick={() => setShowAchievements(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="
                px-8
                py-4
                rounded-full
                border
                border-primary
                text-primary
                font-medium
                transition-all
                duration-300
                hover:bg-[#AACBBE]
                hover:border-[#AACBBE]
                hover:text-[#143D2F]
                hover:shadow-lg
                outline-none
                focus:outline-none
                focus:ring-0
              "
            >
              View My Achievements
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ACHIEVEMENTS MODAL */}
      {/* ================================================= */}

      <AnimatePresence>
        {showAchievements && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              p-4
              bg-black/70
              backdrop-blur-sm
            "
            onClick={() => setShowAchievements(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-2xl
                max-h-[80vh]
                overflow-y-auto
                rounded-2xl
                bg-card
                border
                border-border
                p-6
                sm:p-8
              "
            >

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowAchievements(false)}
                className="
                  absolute
                  top-6
                  right-6
                  text-black
                  hover:text-primary
                  transition-colors
                "
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <h3
                className="
                  font-heading
                  text-2xl
                  font-semibold
                  mb-6
                  text-foreground
                  pr-10
                "
              >
                My Achievements
              </h3>

              {/* Achievement Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="
                      group
                      text-left
                      rounded-xl
                      overflow-hidden
                      border
                      border-border
                      hover:border-primary
                      transition-colors
                    "
                  >
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>

                    <p className="p-3 text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================================= */}
      {/* FULLSCREEN IMAGE LIGHTBOX */}
      {/* ================================================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              inset-0
              z-[110]
              flex
              items-center
              justify-center
              p-4
              bg-black/90
              backdrop-blur-md
            "
            onClick={() => setSelectedImage(null)}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                top-6
                right-6
                text-white
                hover:text-primary
                transition-colors
                z-10
              "
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              src={selectedImage.image}
              alt={selectedImage.title}
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
              className="
                max-w-full
                max-h-full
                rounded-lg
                object-contain
                select-none
              "
              draggable={false}
            />

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;