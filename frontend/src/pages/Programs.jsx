import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Laptop, Users, Scale } from "lucide-react";
import Button from "../components/ui/Button";
import "../styles/programs.css";

export default function Programs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const programs = [
    {
      icon: GraduationCap,
      title: "Leadership Academy",
      duration: "6 Months",
      description: "A comprehensive program combining leadership theory, practical skills, and executive coaching. Participants develop strategic thinking, public speaking, and decision-making capabilities while building a network of fellow leaders.",
      features: [
        "Executive coaching sessions",
        "Strategic leadership workshops",
        "Networking with industry leaders",
        "Certificate of completion"
      ]
    },
    {
      icon: Users,
      title: "Mentorship Circle",
      duration: "Ongoing",
      description: "One-on-one pairing with accomplished women executives, entrepreneurs, and innovators. Our mentors provide guidance, open doors, and share the real-world wisdom that accelerates careers.",
      features: [
        "Personalized mentor matching",
        "Monthly one-on-one sessions",
        "Career development planning",
        "Lifetime network access"
      ]
    }
  ];

  return (
    <section className="programs" ref={containerRef}>
      <div className="programs__hero">
        <motion.div 
          className="programs__hero-content"
          style={{ y: textY }}
        >
          <motion.h1
            className="programs__title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Programs
          </motion.h1>
          <motion.p
            className="programs__subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Comprehensive pathways to leadership, innovation, and lasting impact
          </motion.p>
        </motion.div>
      </div>

      <div className="programs__container">
        <div className="programs__grid">
          {programs.map((program, index) => {
            const Icon = program.icon;
            
            return (
              <motion.div
                key={program.title}
                className="programs__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="programs__card-header">
                  <div className="programs__card-icon">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="programs__card-duration">{program.duration}</span>
                </div>

                <h3 className="programs__card-title">{program.title}</h3>
                <p className="programs__card-description">{program.description}</p>

                <div className="programs__card-features">
                  <h4 className="programs__card-features-title">What You'll Get</h4>
                  <ul className="programs__card-features-list">
                    {program.features.map((feature, i) => (
                      <li key={i} className="programs__card-feature">
                        <span className="programs__card-feature-bullet">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="programs__card-button">
                  Learn More
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="programs__cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="programs__cta-title">Ready to Start Your Journey?</h2>
          <p className="programs__cta-text">
            Join thousands of women who have transformed their lives through our programs. Applications are now open.
          </p>
          <div className="programs__cta-buttons">
            <Button>Apply Now</Button>
            <Button variant="secondary">Download Brochure</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}