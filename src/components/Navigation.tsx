import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // wait for the menu-close animation to finish before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 320);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
  ${scrolled ? "glass py-4" : "navbar-base py-4"}
`}

    >
      <div className="container-custom flex items-center justify-between">
        <motion.a
          href="#"
          className="font-heading text-2xl font-semibold text-gradient"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AP
        </motion.a>

<ul className="hidden md:flex items-center gap-10 
  absolute left-1/2 -translate-x-1/2">


          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={item.href}
className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors line-reveal"

              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
  {/* Download Resume Button */}
<motion.a
  href="https://raw.githubusercontent.com/aditya79373/MyResume/main/AdityaPatil-resume.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
  border border-primary
  text-primary
  text-sm font-medium
  transition-all duration-300
  hover:bg-[#AACBBE]
  hover:border-[#AACBBE]
  hover:text-[#143D2F]
  hover:shadow-lg"
>
  <Download size={18} />
  Download Resume
</motion.a>

  {/* Let's Talk Button */}
  <motion.a
    href="#contact"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all hover:shadow-lg"
  >
    Let's Talk
  </motion.a>
</div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground z-50"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass"
          >
            <div className="container-custom flex flex-col gap-6 py-8">
              <ul className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleMobileNavClick(e, item.href)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 pt-4 border-t border-border">
                <a
                  href="https://raw.githubusercontent.com/aditya79373/Resume/main/AdityaPatil-resume.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-primary text-primary text-sm font-medium transition-all"
                >
                  <Download size={18} />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleMobileNavClick(e, "#contact")}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;