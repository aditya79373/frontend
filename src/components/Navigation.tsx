import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.a
          href="#"
          className="font-heading text-2xl font-semibold text-gradient"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          JD
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors line-reveal"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all hover:shadow-lg"
        >
          Let's Talk
        </motion.a>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
