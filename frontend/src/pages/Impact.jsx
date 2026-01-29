import { motion } from "framer-motion";
import { Award, Users, Globe } from "lucide-react";
import Container from "../components/ui/Container";
import "../styles/impact.css";

const impacts = [
  {
    icon: Globe,
    title: "Nationwide Reach",
    text: "Programs delivered across multiple states, driving inclusive participation."
  },
  {
    icon: Users,
    title: "Leadership Development",
    text: "Thousands of emerging leaders engaged through conferences and workshops."
  },
  {
    icon: Award,
    title: "Strategic Partnerships",
    text: "Collaborations with institutions amplifying long-term impact."
  },
];

export default function Impact() {
  return (
    <section className="impact">
      <Container>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Our Impact
        </motion.h1>

        <div className="impact__grid">
          {impacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="impact__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Icon size={32} strokeWidth={1.5} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}