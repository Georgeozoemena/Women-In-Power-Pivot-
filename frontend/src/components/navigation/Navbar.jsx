import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, color } from "framer-motion";
import Button from "../ui/Button";
import "../../styles/Navbar.css";  

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState('dark'); // 'dark' or 'light'
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    navTheme === 'dark' 
      ? ["rgba(0, 0, 0, 0)", "rgb(18, 18, 18)"]
      : ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 2px 20px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section we're on and change theme accordingly
      const sections = [
        { selector: '.hero', theme: 'dark' },
        { selector: '.stats', theme: 'dark' },
        { selector: '.get-involved', theme: 'light' },
        { selector: '.brief', theme: 'dark' },
        { selector: '.testimonials', theme: 'light' }
      ];
      
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (const section of sections) {
        const element = document.querySelector(section.selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setNavTheme(section.theme);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Impact", href: "/impact" },
    { name: "Contact Us", href: "/contact" }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${navTheme === 'light' ? "navbar--light" : "navbar--dark"}`}
      style={{
        backgroundColor: navBackground,
        boxShadow: navShadow
      }}
    >
      <div className="navbar__container">
        {/* Logo - Always visible */}
        <motion.a
          href="/"
          className="navbar__logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span style={{
            color: '#ff5500'
          }} className="navbar__logo-text">Women in Power</span>
        </motion.a>

        {/* Desktop Navigation - Theme changes */}
        <motion.div
          className="navbar__links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="navbar__link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <span className="navbar__link-text">{link.name}</span>
              <span className="navbar__link-underline"></span>
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop CTA Button - Always visible */}
        <motion.div
          className="navbar__cta"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button style={{
                  backgroundColor: '#ff5500',
                  color: '#fff',
                }} size="small" className="navbar__cta-button">Get Involved</Button>
        </motion.div>

        {/* Mobile Menu Toggle - Theme changes */}
        <button
          className={`navbar__toggle ${isMobileMenuOpen ? "navbar__toggle--active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="navbar__mobile-links">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="navbar__mobile-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={handleLinkClick}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="navbar__mobile-link-text">{link.name}</span>
                  <svg 
                    className="navbar__mobile-link-icon" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path 
                      d="M6 12L10 8L6 4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              ))}
              <motion.div
                className="navbar__mobile-cta"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Button style={{
                  backgroundColor: '#ff5500',
                  color: '#fff',
                }} fullWidth onClick={handleLinkClick}>Get Involved</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navbar__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}