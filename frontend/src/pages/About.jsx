import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/about.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const stats = [
    { value: "25+", label: "States Reached" },
    { value: "10+", label: "Annual Conferences" },
    { value: "85%", label: "Career Advancement Rate" },
    { value: "200+", label: "Partner Organizations" },
  ];

  const values = [
    {
      title: "Leadership",
      description: "Leadership is a privilege and a responsibility. We lead to serve, uplift, and create lasting change."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every initiative, ensuring our impact is measurable and meaningful."
    },
    {
      title: "Growth",
      description: "We believe in continuous growth, fostering environments where every woman can reach her peak potential."
    },
    {
      title: "Empowerment",
      description: "We unlock pathways for women to rise into positions of global influence and institutional change."
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty, building trust through our shared actions."
    },
    {
      title: "Community",
      description: "We believe in the power of partnership, where diverse voices strengthen our collective impact."
    }
  ];

  return (
    <div className="about-page" ref={containerRef}>
      <Helmet>
        <title>About Us - Women in Power</title>
        <meta name="description" content="Learn about our mission to empower women leaders and create lasting change." />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="about-hero">
        <motion.div
          className="about-hero__bg"
          style={{ scale: heroScale, opacity: heroOpacity }}
        />
        <div className="container">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Our Identity</span>
            <h1 className="about-hero__title">Unlocking <br />Influence.</h1>
            <p className="about-hero__subtitle">
              A global initiative dedicated to unlocking the leadership potential of young women across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="about-manifesto section-padding">
        <div className="container">
          <header className="manifesto-header">
            <span className="section-label">Manifesto</span>
          </header>
          <motion.h2
            className="manifesto-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            We believe that when <span className="highlight">women lead</span>, communities thrive,
            innovation flourishes, and <span className="highlight">sustainable change</span> becomes possible.
            Our journey is a paradigm shift in the collective African landscape.
          </motion.h2>
        </div>
      </section>

      {/* Values Section - Bento Grid */}
      <section className="about-values section-padding">
        <div className="container">
          <header className="manifesto-header">
            <span className="section-label">Foundational Values</span>
          </header>
          <div className="values-grid">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats section-padding">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}