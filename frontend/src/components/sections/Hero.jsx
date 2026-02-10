import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Typing animation state
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [titleComplete, setTitleComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const slides = [
    {
      image: "./Photo3.jpg",
      title: "Provisional Platform for the adequate mentorship",
      description: "Connecting women to experienced mentors in business, tech, entrepreneurship, and public service."
    },
    {
      image: "./Group.jpg",
      title: "Training and Workshops, in upskilling engagements",
      description: "We provide series of transformative programs, where women acquire life-changing information and experiencing."
    },
    {
      image: "./Photo8.jpg",
      title: "Creating forum for the intentional community support and structure",
      description: "Women helping women in a system of support, creating the needful healthy environment that both support and facilitate growth."
    }
  ];

  const titleText = "Women and Society We stand to uncover Strength and transform";
  const descText = "High scaling the Innate value of women, to thrive both personally and professionally.";

  // Typing animation effect
  useEffect(() => {
    let titleIndex = 0;
    let descIndex = 0;
    let typingInterval;
    let restartTimeout;

    const startTyping = () => {
      setDisplayedTitle("");
      setDisplayedDesc("");
      setTitleComplete(false);
      setIsTyping(true);
      titleIndex = 0;
      descIndex = 0;

      typingInterval = setInterval(() => {
        if (titleIndex < titleText.length) {
          setDisplayedTitle(titleText.substring(0, titleIndex + 1));
          titleIndex++;
        } else if (!titleComplete) {
          setTitleComplete(true);
        } else if (descIndex < descText.length) {
          setDisplayedDesc(descText.substring(0, descIndex + 1));
          descIndex++;
        } else {
          // Typing complete, pause for 10 seconds then restart
          clearInterval(typingInterval);
          setIsTyping(false);
          restartTimeout = setTimeout(() => {
            startTyping();
          }, 10000); // 10 second pause
        }
      }, 50); // Typing speed (50ms per character)
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(restartTimeout);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Typing Title */}
          <h1 className="hero__title">
            {displayedTitle.split(" ").map((word, index) => {
              const isHook = word === "Women" || word === "Society" || word === "Strength";
              // Add break after "Society" and "transform"
              const needsBreak = word === "Society, " || word === "We ";
              
              return (
                <span
                  key={index}
                  className={isHook ? "hook" : ""}
                  style={{ 
                    display: "inline-block",
                    marginRight: needsBreak ? "0" : "0.3em"
                  }}
                >
                  {word}
                  {needsBreak && <br />}
                </span>
              );
            })}
            {isTyping && !titleComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ marginLeft: "2px" }}
              >
                |
              </motion.span>
            )}
          </h1>

          {/* Typing Description */}
          <p className="hero__description">
            {displayedDesc}
            {isTyping && titleComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ marginLeft: "2px" }}
              >
                |
              </motion.span>
            )}
          </p>

          {/* Animated Buttons - Show after typing completes */}
          <AnimatePresence>
            {!isTyping && (
              <motion.div 
                className="hero__actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button style={{
                    backgroundColor: '#FF5500',
                    color: '#fff'
                  }}>Join the Movement</Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button style={{
                    border: '1px solid #fff',
                    color: '#fff'
                  }} variant="secondary">Our Impact</Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Full Screen Carousel Section */}
        <div className="hero-carousel">
          {/* Carousel Images - Horizontal Layout */}
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
                  className={`hero-carousel__slide ${
                    isActive ? "hero-carousel__slide--active" : ""
                  }`}
                  onClick={() => setActiveSlide(index)}
                  initial={false}
                  animate={{
                    x: `${offset}%`,
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.5,
                    filter: isActive ? "blur(0px)" : "blur(3px)",
                    zIndex: isActive ? 10 : slides.length - Math.abs(index - activeSlide)
                  }}
                  transition={{
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

          {/* Carousel Content - Below Images with Enhanced Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              className="hero-carousel__content"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.h2 
                className="hero-carousel__title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {slides[activeSlide].title}
              </motion.h2>
              <motion.p 
                className="hero-carousel__description"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {slides[activeSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Dots with Hover Effects */}
          <motion.div 
            className="hero-carousel__dots"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`hero-carousel__dot ${
                  index === activeSlide ? "hero-carousel__dot--active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="hero-carousel__dot-fill"></span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}