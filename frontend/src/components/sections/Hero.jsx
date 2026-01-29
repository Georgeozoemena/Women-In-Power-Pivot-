import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero__title">
            Empowering Women to Lead, Innovate, and Transform
          </h1>

          <p className="hero__description">
            We equip young women with the skills, confidence, and networks to become the changemakers our world needs. Join a movement of bold leaders reshaping the future.
          </p>

          <div className="hero__actions">
            <Button>Get Involved</Button>
            {/* <Button variant="secondary">Our Impact</Button> */}
          </div>
        </motion.div>
        <div className="hero-img">
            <div className="img-container">
                <img src="./Photo3.jpg" alt="" />
            </div>
            <div className="img-content">
                <h2>Building Leadership That Shapes Society</h2>
                <p>We convene ideas, people, and platforms that drive meaningful change across communities.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}