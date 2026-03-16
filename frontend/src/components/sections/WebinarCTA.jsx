import { motion } from "framer-motion";
import "../../styles/webinar-cta.css";

export default function WebinarCTA() {
  return (
    <section className="webinar-cta section-padding">
      <div className="container">
        <motion.div 
          className="webinar-cta__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="webinar-cta__text">
            <h2 className="webinar-cta__title">
              Join Our Upcoming Webinar
            </h2>
            <p className="webinar-cta__description">
              Elevate your journey with expert insights and practical strategies. 
              Don't miss out on this transformative experience designed to empower 
              women across all spheres of life. Register now to secure your spot!
            </p>
            <a 
              href="https://luma.com/h8xb5baj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="webinar-cta__button"
            >
              Register on Luma
            </a>
          </div>
          <div className="webinar-cta__image-wrapper">
            <img 
              src="/WholeWoman.jpg" 
              alt="WholeWoman Webinar Flyer" 
              className="webinar-cta__image" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
