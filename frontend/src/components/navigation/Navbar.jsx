import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"; // eslint-disable-line no-unused-vars
import { X } from "lucide-react";
import Button from "../ui/Button";
import "../../styles/navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Magnetic CTA Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set((clientX - centerX) * 0.4);
    mouseY.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredLink(null);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Impact", href: "/impact" },
    { name: "Programs", href: "/programs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <motion.div
        className="navbar__container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setIsMobileMenuOpen(false)}>
          <motion.span
            className="navbar__logo-text"
            whileHover={{ scale: 1.05, color: "var(--pivot-orange)" }}
            whileTap={{ scale: 0.95 }}
          >
            Women in Power
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <div className="navbar__links" onMouseLeave={handleMouseLeave}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const isHovered = hoveredLink === link.name;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                onMouseEnter={() => setHoveredLink(link.name)}
              >
                <div className="navbar__link-text-wrapper">
                  <span className={`navbar__link-text ${isHovered ? 'exit' : ''}`}>{link.name}</span>
                  <span className={`navbar__link-text-hover ${isHovered ? 'enter' : ''}`}>{link.name}</span>
                </div>

                {/* Magnetic Hover Pill */}
                {isHovered && (
                  <motion.div
                    layoutId="nav-pill"
                    className="navbar__link-pill"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div layoutId="active-dot" className="navbar__active-dot" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <motion.div
          className="navbar__cta"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: magneticX, y: magneticY }}
        >
          <Link to="/donate">
            <Button size="small" className="navbar__cta-button">
              Get Involved
            </Button>
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${isMobileMenuOpen ? "navbar__toggle--active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </button>

        {/* Scroll Progress Bar (Inside the Pill) */}
        <motion.div
          className="navbar__progress-bar"
          style={{ scaleX, originX: 0 }}
        />
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button */}
            <button
              className="navbar__mobile-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            {/* Background Mesh for Mobile Menu */}
            <div className="mesh-blob mesh-blob-1" style={{ top: '10%', right: '-10%', opacity: 0.2 }} />
            <div className="mesh-blob mesh-blob-2" style={{ bottom: '10%', left: '-10%', opacity: 0.2 }} />

            <div className="navbar__mobile-links">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="navbar__mobile-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}