import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about">
      <Container>
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>About The Pivot</h1>

          <p className="lead">
            Women in Power is a global initiative dedicated to unlocking the leadership potential of young women. Through mentorship, skill-building workshops, and a supportive community, we create pathways for women to rise into positions of influence across technology, business, policy, and social innovation.
          </p>

          <p>
            We believe that when women lead, communities thrive, innovation flourishes, and sustainable change becomes possible.
          </p>

          <p>
            Our work is grounded in integrity, collaboration, and the
            belief that leadership is a responsibility to serve.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}