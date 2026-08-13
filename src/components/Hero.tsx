import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// TODO: replace with your actual achievements (title + image URL)
const achievements = [
  {
    title: "Achievement 1",
    image: "https://res.cloudinary.com/tf0djpnz/image/upload/v1786548546/Deloitte_page-0001_we2rnq.jpg",
  },
  {
    title: "Achievement 2",
    image: "https://res.cloudinary.com/tf0djpnz/image/upload/v1786549394/WhatsApp_Image_2026-08-12_at_9.12.52_PM_bkr2gn.jpg",
  },
  
];

const Hero = () => {
  const titleWords = ["Full", "Stack", "Developer"];
  const [showAchievements, setShowAchievements] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeAll = () => {
    setShowAchievements(false);
    setSelectedImage(null);
  };

  return (
<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero">

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/15 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg mb-6 font-body tracking-wide"
          >
            Hello, I'm Aditya Patil
          </motion.p>

          {/* Main Title */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-8">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`inline-block mr-4 ${
                  index === 0 || index === 3 ? "text-gradient" : "text-foreground"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          >
             Building scalable web applications with modern technologies.
Transforming ideas into fast, secure, and user-friendly digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full 
bg-primary text-primary-foreground 
font-medium transition-all 
hover:shadow-lg hover:shadow-primary/25
outline-none focus:outline-none focus:ring-0"

            >
              Explore Projects
            </motion.a>

            <motion.button
              type="button"
              onClick={() => setShowAchievements(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full
border border-primary
text-primary
font-medium
transition-all duration-300
hover:bg-[#AACBBE]
hover:border-[#AACBBE]
hover:text-[#143D2F]
hover:shadow-lg
outline-none focus:outline-none focus:ring-0"
            >
              View My Achievements
            </motion.button>
            
          </motion.div>
        </div>

        
       
      </div>

      {/* Achievements Modal */}
      <AnimatePresence>
        {showAchievements && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowAchievements(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl bg-card border border-border p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setShowAchievements(false)}
                              className="absolute top-6 right-6 text-black hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                My Achievements
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="group text-left rounded-xl overflow-hidden border border-border hover:border-primary transition-colors"
                  >
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

      {/* Fullscreen Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              src={selectedImage.image}
              alt={selectedImage.title}
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
              className="max-w-full max-h-full rounded-lg object-contain select-none"
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;