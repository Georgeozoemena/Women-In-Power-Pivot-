import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import "../../styles/testimonials.css";

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stories = [
    {
      name: "Amara Johnson",
      age: "Tech Entrepreneur, Lagos",
      image: "./testimonial1.jpg",
      quote:
        "Women in Power didn't just teach me to code—it taught me to dream bigger. Three years ago, I was a high school teacher in Lagos. Today, I run a fintech startup serving 50,000 women across Africa.",
    },
    {
      name: "Lisa Rodriguez",
      age: "Software Engineer",
      image: "./testimonial2.jpg",
      quote: "From community college to leading engineering teams at a Fortune 500 company.",
    },
    {
      name: "Prof. Chidinma Okafor",
      age: "University Dean",
      image: "./testimonial5.jpg",
      quote: "As a mentor, I've witnessed transformation firsthand. These young women challenge assumptions and push boundaries.",
    },
    {
      name: "Janet Kim",
      age: "Fortune 500 Executive",
      image: "./testimonial6.jpg",
      quote: "Mentoring reminds me why representation matters. Watching brilliant women step into their power is the legacy work that counts.",
    },
    {
      name: "Sarah Chen",
      age: "Startup Founder",
      image: "./testimonial1.jpg",
      quote: "This program gave me the confidence to launch my own venture and negotiate for what I deserved.",
    },
    {
      name: "Maria Santos",
      age: "Product Manager",
      image: "./testimonial2.jpg",
      quote: "I learned to negotiate my worth and claim my space in rooms where I was the only woman.",
    },
    {
      name: "Fatima Ali",
      age: "Data Scientist",
      image: "./testimonial5.jpg",
      quote: "The technical mentorship was life-changing. I went from self-taught coder to leading a data science team.",
    },
    {
      name: "Emma Wilson",
      age: "Engineering Lead",
      image: "./testimonial6.jpg",
      quote: "From coding bootcamp to tech leadership in 3 years. This community made the impossible possible.",
    },
  ];

  const handlePillInteraction = (index) => {
    if (isMobile) {
      // On mobile: click to expand/collapse
      setExpandedIndex(expandedIndex === index ? null : index);
    } else {
      // On desktop: set on hover
      setExpandedIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setExpandedIndex(0); // Return to first card on desktop
    }
  };

  return (
    <section className="testimonials-video">
      <Container>
        {/* Header */}
        <motion.div
          className="testimonials-video__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="testimonials-video__title">
            HERE OUR <span className="accent">STORIES</span>
          </h2>
          <p className="testimonials-video__subtitle">
            Real voices from the front lines of change. These are the people
            shaping their communities — and the future.
          </p>
          {isMobile && (
            <p className="testimonials-video__hint">
              Tap any card to read the full story
            </p>
          )}
        </motion.div>

        {/* Stories Carousel */}
        <div 
          className="testimonials-video__carousel"
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonials-video__scroll" ref={scrollRef}>
            {stories.map((story, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <motion.div
                  key={index}
                  className={`story-pill ${
                    isExpanded ? "story-pill--expanded" : "story-pill--collapsed"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  animate={{
                    width: isExpanded ? (isMobile ? 320 : 420) : (isMobile ? 100 : 160),
                  }}
                  onMouseEnter={() => !isMobile && handlePillInteraction(index)}
                  onClick={() => handlePillInteraction(index)}
                  whileHover={!isMobile && !isExpanded ? { y: -8 } : {}}
                  style={{
                    transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Background Image */}
                  <div className="story-pill__image">
                    <div className="story-pill__gradient"></div>
                  </div>
                  
                  {/* Dark Overlay */}
                  <div 
                    className="story-pill__overlay"
                    style={{
                      opacity: isExpanded ? 1 : 0,
                    }}
                  ></div>
                  
                  {/* Story Content */}
                  <motion.div 
                    className="story-pill__content"
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      y: isExpanded ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, delay: isExpanded ? 0.2 : 0 }}
                  >
                    <h3 className="story-pill__name">
                      {story.name}
                    </h3>
                    <p className="story-pill__age">{story.age}</p>
                    <p className="story-pill__quote">{story.quote}</p>
                  </motion.div>

                  {/* Collapsed Indicator - Shows name vertically on small pills */}
                  {!isExpanded && (
                    <motion.div
                      className="story-pill__collapsed-label"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span>{story.name.split(' ')[0]}</span>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots for Mobile */}
        {isMobile && (
          <motion.div
            className="testimonials-video__dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {stories.map((_, index) => (
              <button
                key={index}
                className={`testimonials-video__dot ${
                  expandedIndex === index ? "testimonials-video__dot--active" : ""
                }`}
                onClick={() => setExpandedIndex(index)}
                aria-label={`View story ${index + 1}`}
              />
            ))}
          </motion.div>
        )}

        {/* CTAs */}
        <motion.div
          className="testimonials-video__actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="testimonials-video__cta testimonials-video__cta--primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            TELL MY STORY
          </motion.button>
          <motion.button
            className="testimonials-video__cta testimonials-video__cta--secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            SEE ALL STORIES
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}