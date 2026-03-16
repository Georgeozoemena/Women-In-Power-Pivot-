import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const SLIDE_INTERVAL = 5000; // 5 seconds between auto-slides

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  // Animation state
  const [showContent, setShowContent] = useState(false);

  const slides = [
    {
      image: "./Photo3.jpg",
      title: "Raising Women Who Thrive and Lead",
      description:
        "Our vision is to empower a generation of women to transform every sphere of society.",
    },
    {
      image: "./Group.jpg",
      title: "Strengthening Leadership Capacity",
      description:
        "We design and develop programs that sharpen skills, connect to mentors, and support personal growth.",
    },
    {
      image: "./Photo8.jpg",
      title: "Equipping the Next Generation",
      description:
        "Supporting young women, aspiring leaders, and entrepreneurs across business, tech, education, and public service.",
    },
  ];

  const titleLine1 = "Empowering Women";
  const titleLine2 = "To Thrive, Lead and Transform Society";
  const descText =
    "A transformative initiative designed to equip you with leadership, skills, mentorship, and capacity-building opportunities to positively impact the world.";

  // Auto-slide logic
  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDotClick = (index) => {
    setActiveSlide(index);
    startInterval(); // reset timer on manual click
  };

  const handleSlideClick = (index) => {
    setActiveSlide(index);
    startInterval();
  };

  // ── Hero headline animation trigger 
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 400);
    return () => clearTimeout(timer);
  }, []);

  // ── Word-by-word animation variants for hero headlines 
  const heroTitleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const heroDescVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.8,
      },
    },
  };

  const heroWordVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  // ── Word-reveal animation variants for carousel
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 22, rotateX: -20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -16,
      filter: "blur(4px)",
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  const AnimatedText = ({ text, className }) => (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ display: "inline", perspective: 800 }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section className="hero">
      <div className="hero__container">
        {/* ── Hero left content ── */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Hero Title */}
          <motion.h1
            className="hero__title"
            variants={heroTitleVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >
            {/* Line 1: Women and Society */}
            <span style={{ display: "block" }}>
              {titleLine1.split(" ").map((word, index) => {
                const isHook = word === "Women" || word === "Society";
                return (
                  <motion.span
                    key={`line1-${index}`}
                    className={isHook ? "hook" : ""}
                    variants={heroWordVariants}
                    style={{
                      display: "inline-block",
                      marginRight: "0.35em",
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>

            {/* Line 2: To Thrive, Lead and Transform Society */}
            <span style={{ display: "block" }}>
              {titleLine2.split(" ").map((word, index) => {
                const isHook = word === "Thrive," || word === "Lead" || word === "Transform";
                return (
                  <motion.span
                    key={`line2-${index}`}
                    className={isHook ? "hook" : ""}
                    variants={heroWordVariants}
                    style={{
                      display: "inline-block",
                      marginRight: "0.35em",
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
          </motion.h1>

          {/* Animated Hero Description */}
          <motion.p
            className="hero__description"
            variants={heroDescVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >
            {descText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={heroWordVariants}
                style={{
                  display: "inline-block",
                  marginRight: "0.3em",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Animated Buttons */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="hero__actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button style={{ backgroundColor: "#FF5500", color: "#fff" }}>
                    Join the Movement
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    style={{ border: "1px solid #fff", color: "#fff" }}
                    variant="secondary"
                  >
                    Our Impact
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Carousel ── */}
        <div className="hero-carousel">
          {/* Slide images */}
          <motion.div
            className="hero-carousel__images"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {slides.map((slide, index) => {
              const offset = (index - activeSlide) * 15;
              const isActive = index === activeSlide;

              return (
                <motion.div
                  key={index}
                  className={`hero-carousel__slide ${isActive ? "hero-carousel__slide--active" : ""
                    }`}
                  onClick={() => handleSlideClick(index)}
                  initial={false}
                  animate={{
                    x: `${offset}%`,
                    y: isActive ? [0, -10, 0] : 0,
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.5,
                    filter: isActive ? "blur(0px)" : "blur(3px)",
                    zIndex: isActive ? 10 : slides.length - Math.abs(index - activeSlide),
                  }}
                  transition={isActive ? {
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1]
                  } : {
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  whileHover={!isActive ? { scale: 0.9, opacity: 0.7 } : {}}
                >
                  <div className="hero-carousel__image-wrapper">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="hero-carousel__image"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Progress bar — resets with each slide */}
          <div className="hero-carousel__progress-track">
            <motion.div
              className="hero-carousel__progress-fill"
              key={activeSlide} // remount on slide change to restart animation
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Animated carousel text */}
          <div className="hero-carousel__content">
            <AnimatePresence mode="wait">
              <motion.div key={`title-${activeSlide}`}>
                <h2 className="hero-carousel__title">
                  <AnimatedText text={slides[activeSlide].title} />
                </h2>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div key={`desc-${activeSlide}`}>
                <p className="hero-carousel__description">
                  <AnimatedText text={slides[activeSlide].description} />
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <motion.div
            className="hero-carousel__dots"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`hero-carousel__dot ${index === activeSlide ? "hero-carousel__dot--active" : ""
                  }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="hero-carousel__dot-fill" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}