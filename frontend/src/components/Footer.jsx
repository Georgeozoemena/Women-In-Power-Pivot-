import { Instagram, Twitter, Facebook, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import '../styles/footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top Section with Logo and Links */}
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Logo */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon"></div>
                <span className="footer__logo-text">WOMEN IN POWER</span>
              </div>
            </div>

            {/* Column 1 */}
            <div className="footer__column">
              <h4>Resources</h4>
              <a href="/community" className="footer__link">Community</a>
              <a href="/contact" className="footer__link">About Us</a>
              <a href="/contact" className="footer__link">Contact Us</a>
            </div>

            {/* Column 2 */}
            <div className="footer__column">
              <h4>Programs</h4>
              <a href="/mentors" className="footer__link">Our Mentors</a>
              <a href="/engagements" className="footer__link">Private Engagements</a>
            </div>

            {/* Column 3 */}
            <div className="footer__column">
              <h4>Get Involved</h4>
              <a href="/donate" className="footer__link">Donate</a>
              <a href="/member" className="footer__link">Become A Member</a>
              <a href="/sponsorship" className="footer__link">Sponsorship</a>
              <a href="/volunteer" className="footer__link">Become A Volunteer</a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Large Tagline */}
      <div className="footer__tagline">
        <div className="container">
          <motion.h2
            className="footer__tagline-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            STORIES THAT SPEAK. ACTIONS THAT COUNT.
          </motion.h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            {/* Copyright */}
            <p className="footer__copyright">
              All Rights Reserved {new Date().getFullYear()}
            </p>

            {/* Social Icons */}
            <div className="footer__socials">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              className="footer__scroll-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              SCROLL TO TOP
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}