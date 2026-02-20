import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import "../../styles/contacthero.css";

export default function ContactHero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="contact-hero">
      {/* Background Image */}
      <div className="contact-hero__background">
        <img 
          src="./Group.jpg" 
          alt="Women in Power community" 
          className="contact-hero__image"
        />
      </div>

      {/* Content */}
      <div className="contact-hero__content">
        <motion.div
          className="contact-hero__text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-hero__title contact-hero__title--solid">
            STAY CONNECTED
          </h2>
          <h2 className="contact-hero__title contact-hero__title--outline">
            GET EMPOWERED
          </h2>
          <h2 className="contact-hero__title contact-hero__title--outline">
            MAKE IMPACT
          </h2>
        </motion.div>

        {/* Email Form */}
        <motion.form
          className="contact-hero__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-hero__input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email..."
              className="contact-hero__input"
              required
              disabled={isSubmitting}
            />
            <motion.button
              type="submit"
              className="contact-hero__button"
              disabled={isSubmitting || !email}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="contact-hero__button-loading">
                  <span className="contact-hero__spinner"></span>
                  SENDING...
                </span>
              ) : isSuccess ? (
                <span className="contact-hero__button-success">
                  ✓ SUBSCRIBED!
                </span>
              ) : (
                <>
                  SUBSCRIBE
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </div>
          
          {isSuccess && (
            <motion.p
              className="contact-hero__success-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Thanks for joining! Check your email for confirmation.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}