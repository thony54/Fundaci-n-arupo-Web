import { motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
        y: 8,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
};

export default function PageTransition({ children }) {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
