import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function GetInvolved() {
  const containerRef = useRef(null);

  const items = [
    {
      title: "Donate",
      headline: "Give Hope. Build Leaders. Change Lives.",
      description: "Your support transforms potential into possibility by funding programs that guide, equip, and uplift women on their journey to leadership. One gift can shape a lifetime of impact.",
      image: "./Donate.jpg",
      ctaBtn: "Make an Impact",
      accent: "#FF5F0F",
      to: "/donate"
    },
    {
      title: "Partner with Us",
      headline: "Coming together to make a difference",
      description: "Work alongside corporations, NGOs, and educational institutions committed to expanding access to opportunity. Together, we unlock possibilities, share resources, and nurture a future where women lead, influence, and transform communities.",
      image: "./Photo1.jpg",
      ctaBtn: "Become a Partner",
      accent: "#c6a75e"
    },
    {
      title: "Volunteer",
      headline: "Be Part of the Journey",
      description: "Lend your expertise through mentorship or skills-based support. Lead impactful workshops and help shape confident leaders—our volunteers bring encouragement, experience, and the belief that every woman has the power to lead.",
      ctaBtn: "Get Started",
      image: "./Volunteer.jpg",
      accent: "#FF5643"
    }
  ];

  return (
    <section className="get-involved section-padding" ref={containerRef}>
      <Container>
        <span className="section-label">JOIN THE MOVEMENT</span>
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '64px' }}>
          Uplifting women, growing impact and success
        </h2>
      </Container>

      <div className="get-involved__stack">
        {items.map((item, index) => (
          <StackCard
            key={item.title}
            item={item}
            index={index}
            totalCards={items.length}
          />
        ))}
      </div>
    </section>
  );
}

function StackCard({ item, index, totalCards }) {
  const cardRef = useRef(null);

  // Tracking the full lifecycle: enters from bottom, stays sticky, then pushes back
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Stacking offset for sticky top position
  const stackingOffset = index * 48;

  // PREMIUM 3D TRANSFORMATIONS
  // 0 - 0.4: Entrance (sliding up and scaling to full)
  // 0.4 - 0.6: Active (main reading state)
  // 0.6 - 1.0: Push Back (shrinking and dimming as next card stacks over)

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.5, 0.65, 1],
    [0.75, 1, 1, 0.9, 0.8]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    [0, 1, 1, 1, 0.9]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.4],
    [120, 0]
  );

  // Subtle 3D tilt based on scroll depth
  const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [15, 0, 0, -10]);


  const contentY = useTransform(scrollYProgress, [0.35, 0.5], [60, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.7, 0.85], [0, 1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0.35, 0.5], [0.8, 1]);
  const accentRotate = useTransform(scrollYProgress, [0.3, 0.6], [-45, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="get-involved__card get-involved__card--stack"
      style={{
        scale,
        opacity,
        y: index === 0 ? 0 : y, // Ensure first card doesn't jump
        rotateX,
        perspective: "1200px",
        zIndex: index + 1,
        top: `${stackingOffset}px`
      }}
    >
      {/* Decorative corner accent */}
      <motion.div
        className="get-involved__corner-accent"
        style={{
          backgroundColor: item.accent,
          rotate: accentRotate,
          opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 0.2])
        }}
      />

      {/* Number badge */}
      <motion.div
        className="get-involved__number-badge"
        style={{
          opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 0.1]),
          y: useTransform(scrollYProgress, [0.3, 0.6], [40, 0])
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>

      {/* Background image with parallax depth */}
      <motion.div
        className="get-involved__image-wrapper get-involved__image-wrapper--fullscreen"
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1.2, 1]),
          y: useTransform(scrollYProgress, [0, 1], [-20, 20])
        }}
      >
        <img
          src={item.image}
          className="get-involved__image get-involved__image--fullscreen"
          alt={`${item.title}`}
        />
      </motion.div>

      {/* PREMIUM GLASS OVERLAY */}
      <motion.div
        className="get-involved__overlay"
        style={{
          backgroundColor: useTransform(
            scrollYProgress,
            [0.4, 0.7],
            ["rgba(0,0,0,0.5)", "rgba(0,0,0,0.85)"]
          )
        }}
      >
        {/* Aesthetic side glow */}
        <div
          className="get-involved__glow"
          style={{ background: `linear-gradient(to right, ${item.accent}20, transparent)` }}
        />

        <div className="get-involved__content-wrapper">
          <motion.div
            className="get-involved__content"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            {/* Header Layout */}
            <div className="get-involved__header-fine">
              <motion.span
                className="get-involved__subtitle-fine"
                style={{ color: item.accent }}
              >
                0{index + 1} / Phase
              </motion.span>
              <motion.h3
                className="get-involved__card-title"
                style={{ scale: titleScale, transformOrigin: "left" }}
              >
                {item.title}
              </motion.h3>
            </div>



            {/* Description Container */}
            <div className="get-involved__description-container">
              {item.headline && (
                <motion.h4
                  className="get-involved__headline-fine"
                >
                  {item.headline}
                </motion.h4>
              )}
              <p className="get-involved__card-description">
                {item.description}
              </p>
            </div>

            {/* Premium Button */}
            <motion.div>
              <Button
                to={item.to}
                className="get-involved__button get-involved__button--premium"
              >
                <span className="get-involved__button-text">{item.ctaBtn}</span>
                <span className="get-involved__button-arrow">→</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Dynamic light particles */}
      <div className="get-involved__particles">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="get-involved__particle"
            style={{
              backgroundColor: item.accent,
              scale: useTransform(scrollYProgress, [0.4, 0.7], [0, 1.5])
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}