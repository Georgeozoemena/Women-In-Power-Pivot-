import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, TrendingUp, MapPin, Heart } from "lucide-react";
import "../styles/impact.css";

export default function Impact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const impacts = [
    {
      icon: Users,
      title: "Leadership Development",
      description: "Thousands of emerging leaders engaged through conferences, workshops, and intensive mentorship programs.",
      stat: "5,000+ Leaders"
    },
    {
      icon: Award,
      title: "Strategic Partnerships",
      description: "Collaborations with institutions, corporations, and NGOs amplifying long-term impact across sectors.",
      stat: "200+ Partners"
    },
    {
      icon: MapPin,
      title: "National Network",
      description: "Building connections across several states in Nigeria, fostering collaboration and knowledge exchange.",
      stat: "40+ States"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Participants giving back through social enterprises, nonprofits, and community-led initiatives.",
      stat: "120+ Projects"
    }
  ];

  const milestones = [
    { year: "2021", event: "Foundation established with a vision to empower young women leaders" },
    { year: "2022", event: "First nationwide leadership summit with 500+ participants" },
    { year: "2023", event: "Launched mentorship program connecting 1,000+ mentees with industry leaders" },
    { year: "2024", event: "Expanded to 40+ states, creating a national network of women in power" },
    { year: "2025", event: "Reached 5,000+ women empowered, celebrating transformative impact" },
    { year: "2026", event: "Continuing to build the future of women's leadership worldwide" }
  ];

  return (
    <section className="impact" ref={containerRef}>
      <div className="impact__hero">
        <motion.div 
          className="impact__hero-content"
          style={{ y: textY }}
        >
          <motion.h1
            className="impact__title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Impact
          </motion.h1>
          <motion.p
            className="impact__subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Transforming lives, building leaders, and creating lasting change across communities worldwide
          </motion.p>
        </motion.div>
      </div>

      <div className="impact__container">
        {/* Impact Grid */}
        <div className="impact__grid">
          {impacts.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.title}
                className="impact__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="impact__card-icon">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <span className="impact__card-stat">{item.stat}</span>
                <h3 className="impact__card-title">{item.title}</h3>
                <p className="impact__card-description">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Milestones Timeline */}
        <motion.div 
          className="impact__milestones"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="impact__milestones-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>

          <div className="impact__timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="impact__milestone"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <span className="impact__milestone-year">{milestone.year}</span>
                <p className="impact__milestone-event">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}