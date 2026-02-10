import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // ← ADD THIS IMPORT
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import "../../styles/Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState('dark');
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
      
      const sections = [
        { selector: '.hero', theme: 'dark' },
        { selector: '.stats', theme: 'dark' },
        { selector: '.get-involved', theme: 'light' },
        { selector: '.brief', theme: 'dark' },
        { selector: '.testimonials', theme: 'light' }
      ];
      
      const scrollPosition = window.scrollY + 100;
      
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

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

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
        {/* Logo - CHANGED to Link */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.span
            style={{ color: '#ff5500' }}
            className="navbar__logo-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Women in Power
          </motion.span>
        </Link>

        {/* Desktop Navigation - CHANGED to Link */}
        <motion.div
          className="navbar__links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <Link
                to={link.href}
                className="navbar__link"
              >
                <span className="navbar__link-text">{link.name}</span>
                <span className="navbar__link-underline"></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop CTA Button */}
        <motion.div
          className="navbar__cta"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            style={{
              backgroundColor: '#ff5500',
              color: '#fff',
            }} 
            size="small" 
            className="navbar__cta-button"
          >
            Get Involved
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu - CHANGED to Link */}
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
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="navbar__mobile-link"
                    onClick={handleLinkClick}
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
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="navbar__mobile-cta"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Button 
                  style={{
                    backgroundColor: '#ff5500',
                    color: '#fff',
                  }} 
                  fullWidth 
                  onClick={handleLinkClick}
                >
                  Get Involved
                </Button>
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