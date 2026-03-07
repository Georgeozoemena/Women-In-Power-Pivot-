import { motion, useScroll, useTransform } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useRef } from "react";
import "../styles/impact.css";
import { Helmet } from "react-helmet";
import { ArrowRight, Heart, Target, Zap } from "lucide-react";

export default function Impact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const impactStats = [
    { value: "12k+", label: "Active participants" },
    { value: "85%", label: "Success rate" },
    { value: "500+", label: "Graduated leaders" },
    { value: "50k+", label: "Digital Reach" }
  ];

  const strategicPillars = [
    {
      title: "The Vision",
      icon: <Target size={28} />,
      description: "To create a world where every woman has the capital, community, and courage to lead without permission."
    },
    {
      title: "Radical Integrity",
      icon: <Heart size={28} />,
      description: "Built on transparency and radical trust. We operate with honesty, building trust through shared actions."
    },
    {
      title: "Measurable Impact",
      icon: <Zap size={28} />,
      description: "Every initiative is tracked with data to ensure sustainable progress and transformative growth."
    }
  ];

  const teamMembers = [
    { name: "George Ozoemena", role: "Executive Director", color: "#222" },
    { name: "Sarah Williams", role: "Program Manager", color: "#333" },
    { name: "Adaobi Naza", role: "Digital Lead", color: "#444" },
    { name: "Olawale John", role: "Strategic Lead", color: "#222" }
  ];

  return (
    <div className="impact-page" ref={containerRef}>
      <Helmet>
        <title>Impact - Women in Power</title>
        <meta name="description" content="Explore the measurable progress and strategic momentum of Women in Power." />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="impact-hero">
        <motion.div
          className="impact-hero__bg"
          style={{ scale: heroScale, opacity: heroOpacity }}
        />
        <div className="container">
          <motion.div
            className="impact-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Our Momentum</span>
            <h1 className="impact-hero__title">Scaling <br />Dominance.</h1>
            <p className="impact-hero__subtitle">
              We aren't just building programs; we are architecting the permanent infrastructure of feminine power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="impact-manifesto section-padding">
        <div className="container">
          <header className="manifesto-header">
            <span className="section-label">The Collective</span>
          </header>
          <motion.h2
            className="manifesto-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            We empower women to <span className="highlight">govern</span> across every sector of the global economy through strategic <span className="highlight">capital</span> and <span className="highlight">radical community</span>.
          </motion.h2>
        </div>
      </section>

      {/* Strategic Pillars - Bento Grid */}
      <section className="impact-pillars section-padding">
        <div className="container">
          <header className="manifesto-header">
            <span className="section-label">Strategic Pillars</span>
          </header>
          <div className="pillars-grid">
            {strategicPillars.map((p, idx) => (
              <motion.div
                key={p.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="pillar-icon">{p.icon}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="impact-team section-padding">
        <div className="container">
          <header className="manifesto-header">
            <span className="section-label">The High Command</span>
          </header>
          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="team-card__image-container" style={{ backgroundColor: member.color }}>
                  <div className="team-card__placeholder">
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
                <div className="team-card__info">
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="impact-stats section-padding">
        <div className="container">
          <div className="stats-grid">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

      {/* Support CTA */}
      <section className="impact-support section-padding">
        <div className="container">
          <motion.div
            className="support-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="support-box__title">BUILD.SCALE. <br />WIN.</h2>
            <p className="support-box__subtitle">The future is led by those who build it together.</p>
            <a href="/donate" className="btn-impact-main">Join the Collective</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}