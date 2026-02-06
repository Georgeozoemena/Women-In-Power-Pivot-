import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/about.css";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const stats = [
  { value: "25+", label: "States Reached" },
  { value: "10+", label: "Annual Conferences" },
  { value: "85%", label: "Career Advancement Rate" },
  { value: "200+", label: "Partner Organizations" },
  ];

  return (
    <section className="about" ref={containerRef}>
      <div className="about__hero">
        <motion.div 
          className="about__hero-content"
          style={{ y: textY }}
        >
          <motion.h1
            className="about__title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Who We Are
          </motion.h1>
          <motion.p
            className="about__subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A global initiative dedicated to unlocking the leadership potential of young women
          </motion.p>
        </motion.div>

        <motion.div 
          className="about__image-wrapper"
          style={{ y: imageY, scale: imageScale }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img 
            src="./Photo12.jpg" 
            alt="Women in Power - Empowering Women Leaders"
            className="about__image"
          />
        </motion.div>
      </div>

      <div className="about__container">
        <motion.div
          className="about__content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="about__lead"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Women in Power is a global initiative dedicated to unlocking the leadership potential of young women. Through mentorship, skill-building workshops, and a supportive community, we create pathways for women to rise into positions of influence across technology, business, policy, and social innovation.
          </motion.p>

          <motion.p 
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe that when women lead, communities thrive, innovation flourishes, and sustainable change becomes possible.
          </motion.p>

          <motion.p 
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our work is grounded in integrity, collaboration, and the belief that leadership is a responsibility to serve.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="about__stats">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="about__stat"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className="about__stat-number">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div 
          className="about__values"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="about__values-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>

          <div className="about__values-grid">
            {[
              {
                title: "Leadership",
                description: "We operate with transparency and honesty, building trust through our actions and commitments."
              },
              {
                title: "Excellence",
                description: "We operate with transparency and honesty, building trust through our actions and commitments."
              },
              {
                title: "Growth",
                description: "We believe in the power of partnership, creating spaces where diverse voices strengthen our collective impact."
              },
              {
                title: "Empowerment",
                description: "Leadership is a privilege and a responsibility. We lead to serve, uplift, and create lasting change."
              },
              {
                title: "Community",
                description: "Leadership is a privilege and a responsibility. We lead to serve, uplift, and create lasting change."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="about__value"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <h3 className="about__value-title">{value.title}</h3>
                <p className="about__value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}