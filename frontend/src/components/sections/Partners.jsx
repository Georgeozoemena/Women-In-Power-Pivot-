import { motion } from "framer-motion";
import Container from "../ui/Container";
import "../../styles/partners.css";

const PARTNERS = [
    { name: "The PIVOT", logo: "/Pivot.png" },
    { name: "GIZ", logo: "/GIZ.png" },
    { name: "iDEA Africa", logo: "/Idea Africa.jpeg" }
];

export default function Partners() {
    // We duplicate the list to create a seamless infinite scroll effect
    const marqueeItems = [...PARTNERS, ...PARTNERS, ...PARTNERS];

    return (
        <section className="partners section-padding">
            <Container>
                <h2 className="partners__title">Supported by Visionary Organizations</h2>
                <div className="partners__marquee-wrapper">
                    <motion.div
                        className="partners__marquee"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {marqueeItems.map((partner, index) => (
                            <div key={index} className="partners__item">
                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="partners__logo"
                                    />
                                ) : (
                                    <span className="partners__name">{partner.name}</span>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
