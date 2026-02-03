import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "./Photo3.jpg",
      title: "Building Leadership That Shapes Society",
      description: "We convene ideas, people, and platforms that drive meaningful change across communities."
    },
    {
      image: "./Group.jpg",
      title: "Empowering Innovation Through Mentorship",
      description: "Connecting aspiring leaders with experienced mentors who guide, inspire, and open doors."
    },
    {
      image: "./Photo8.jpg",
      title: "Creating Impact Across Continents",
      description: "From local communities to global stages, our network of women leaders creates lasting change."
    }
  ];

  return (
    <section className="hero">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero__title">
            Women and Society <br />We stand to uncover <br />and to transform
          </h1>

          <p className="hero__description">
            Developing lasting impact in women, to build, thrive, and lead. One woman at a time.
          </p>

          <div className="hero__actions">
            <Button>Join the Movement</Button>
            <Button variant="secondary">Our Impact</Button>
          </div>
        </motion.div>

        {/* Full Screen Carousel Section */}
        <div className="hero-carousel">
          {/* Carousel Images - Horizontal Layout */}
          <div className="hero-carousel__images">
            {slides.map((slide, index) => {
              // Calculate position offset for horizontal stacking
              const offset = (index - activeSlide) * 15; // 15% offset between slides
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
          </div>

          {/* Carousel Content - Below Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              className="hero-carousel__content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="hero-carousel__title">{slides[activeSlide].title}</h2>
              <p className="hero-carousel__description">{slides[activeSlide].description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Dots */}
          <div className="hero-carousel__dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`hero-carousel__dot ${
                  index === activeSlide ? "hero-carousel__dot--active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="hero-carousel__dot-fill"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}