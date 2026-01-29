import { motion } from "framer-motion";
import { Globe, Users, Calendar } from "lucide-react";
import Container from "../ui/Container";
import "../../styles/stats.css";

const stats = [
  { icon: Globe, value: "25+", label: "States Reached" },
  { icon: Calendar, value: "10+", label: "Annual Conferences" },
  { icon: Users, value: "85%", label: "Career Advancement Rate" },
  { icon: Users, value: "200+", label: "Partner Organizations" },
];

export default function Stats() {
  return (
    <section className="stats">
      <Container>
        <div className="stats__grid">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className="stats__item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* <Icon size={32} strokeWidth={1.5} /> */}
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}