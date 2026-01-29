import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <Container>
        <motion.div
          className="contact__wrapper"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Contact Us</h1>

          <p className="contact__intro">
            We’d love to hear from you. Reach out for partnerships,
            inquiries, or collaboration.
          </p>

          <div className="contact__grid">
            <div className="contact__info">
              <p><Mail size={18} /> info@thepivot.ng</p>
              <p><Phone size={18} /> +234 XXX XXX XXXX</p>
            </div>

            <form className="contact__form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="5" />
              <Button>Send Message</Button>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}