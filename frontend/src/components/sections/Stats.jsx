import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Globe, Users, Calendar, TrendingUp } from "lucide-react";
import Container from "../ui/Container";
import "../../styles/stats.css";

// Animated counter component
function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      // Extract number from value (handles cases like "25+", "85%", etc.)
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // Format the number and add back the suffix
        const suffix = value.match(/[^0-9.]/g)?.join('') || '';
        const formattedValue = Math.floor(latest);
        ref.current.textContent = formattedValue + suffix;
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
}

const stats = [
  { 
    icon: Globe, 
    value: "25+", 
    label: "States Reached",
    color: "#BE5103"
  },
  { 
    icon: Calendar, 
    value: "10+", 
    label: "Annual Conferences",
    color: "#BE5103"
  },
  { 
    icon: TrendingUp, 
    value: "85%", 
    label: "Career Advancement Rate",
    color: "#BE5103"
  },
  { 
    icon: Users, 
    value: "200+", 
    label: "Partner Organizations",
    color: "#BE5103"
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <Container>
        <motion.div 
          className="stats__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="stats__title">Impact by Numbers</h2>
          <p className="stats__subtitle">
            Driving measurable change across communities and careers
          </p>
        </motion.div>

        <div className="stats__grid">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className="stats__item"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="stats__icon-wrapper">
                  <Icon 
                    className="stats__icon" 
                    size={32} 
                    strokeWidth={1.5}
                    style={{ color: item.color }}
                  />
                </div>
                
                <h3 className="stats__value">
                  <AnimatedCounter value={item.value} />
                </h3>
                
                <p className="stats__label">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}