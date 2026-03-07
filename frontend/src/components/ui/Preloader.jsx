import { motion, AnimatePresence } from "framer-motion";
import "../../styles/preloader.css";

const Preloader = ({ isLoading }) => {
    const words = ["WOMEN", "IN", "POWER"];

    const containerVars = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            y: -100,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const wordVars = {
        initial: {
            y: 40,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="preloader"
                    variants={containerVars}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="preloader__container">
                        <div className="preloader__text-wrapper">
                            {words.map((word, index) => (
                                <div key={index} className="preloader__word-mask">
                                    <motion.span
                                        variants={wordVars}
                                        className="preloader__word"
                                    >
                                        {word}
                                    </motion.span>
                                </div>
                            ))}
                        </div>

                        <div className="preloader__loader-wrapper">
                            <motion.div
                                className="preloader__bar"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>

                        {/* <motion.div
                            className="preloader__brand-mark"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            <div className="preloader__dot" />
                        </motion.div> */}
                    </div>

                    <div className="preloader__background-blobs">
                        <div className="preloader__blob preloader__blob--1" />
                        <div className="preloader__blob preloader__blob--2" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
