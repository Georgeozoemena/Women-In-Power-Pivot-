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
      title: "Assertiveness",
      description: "We empower women to act with confidence, speaking their truth and advocating for their place in every sphere."
    },
    {
      title: "Community",
      description: "We believe in the power of partnership, where diverse voices strengthen our collective impact."
    },
    {
      title: "Youth",
      description: "We invest in the next generation, recognizing that equipping young women today transforms the society of tomorrow."
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
            <h1 className="about-hero__title">Equipping <br />Women.</h1>
            <p className="about-hero__subtitle">
              A transformative initiative designed to equip women with leadership, skills, mentorship, and capacity-building opportunities.
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
            Women In Power is a transformative initiative designed to equip women with <span className="highlight">leadership, skills, mentorship</span> and capacity-building opportunities.
            We seek to create a generation of women who <span className="highlight">thrive, lead</span>, and positively impact society.
          </motion.h2>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision section-padding" style={{ position: "relative", zIndex: 1 }}>
        {/* Decorative background blur */}
        <div 
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            background: "radial-gradient(circle, var(--pivot-orange) 0%, transparent 60%)",
            opacity: 0.05,
            pointerEvents: "none",
            zIndex: -1,
            filter: "blur(60px)"
          }}
        />
        <div className="container">
          <div className="values-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
            
            {/* Vision Card */}
            <motion.div
              className="value-card"
              style={{ 
                background: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "32px",
                padding: "48px",
                backdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
                position: "relative",
                overflow: "hidden"
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0, 0, 0, 0.6)" }}
            >
              <div 
                style={{
                  position: "absolute", top: 0, left: 0, width: "100%", height: "4px",
                  background: "linear-gradient(90deg, transparent, var(--pivot-orange), transparent)"
                }}
              />
              <span 
                className="section-label" 
                style={{ 
                  marginBottom: "24px", 
                  display: "inline-block", 
                  color: "var(--pivot-orange)",
                  letterSpacing: "0.2em",
                  fontSize: "0.85rem"
                }}
              >
                OUR VISION
              </span>
              <h3 
                className="value-desc" 
                style={{ 
                  fontFamily: "var(--sans-font, sans-serif)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)", 
                  fontWeight: "800", 
                  lineHeight: "1.3", 
                  color: "var(--pivot-white)",
                  margin: 0,
                  letterSpacing: "-0.02em"
                }}
              >
                To raise and empower women who thrive, lead and transform every sphere of society.
              </h3>
            </motion.div>
            
            {/* Mission Card */}
            <motion.div
              className="value-card"
              style={{ 
                background: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "32px",
                padding: "48px",
                backdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
                position: "relative",
                overflow: "hidden"
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0, 0, 0, 0.6)" }}
            >
              <div 
                style={{
                  position: "absolute", top: 0, left: 0, width: "100%", height: "4px",
                  background: "linear-gradient(90deg, transparent, var(--pivot-orange), transparent)"
                }}
              />
              <span 
                className="section-label" 
                style={{ 
                  marginBottom: "24px", 
                  display: "inline-block", 
                  color: "var(--pivot-orange)",
                  letterSpacing: "0.2em",
                  fontSize: "0.85rem"
                }}
              >
                OUR MISSION
              </span>
              <h3 
                className="value-desc" 
                style={{ 
                  fontFamily: "var(--sans-font, sans-serif)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)", 
                  fontWeight: "700", 
                  lineHeight: "1.5", 
                  color: "var(--pivot-muted, rgba(255, 255, 255, 0.9))",
                  margin: 0
                }}
              >
                To design and develop programs that <span style={{ color: "var(--pivot-white)" }}>strengthen women leadership capacity</span>, sharpen their skills, connect them to mentors and support their personal and professional growth.
              </h3>
            </motion.div>
          </div>
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