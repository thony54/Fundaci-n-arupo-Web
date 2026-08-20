import { motion, useScroll, useSpring } from 'framer-motion';

// Thin gradient progress bar pinned to the top of the viewport,
// tracking overall page scroll. Sits above the navbar (z-[60]).
export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary-500 via-accent-400 to-therapeutic-600"
            aria-hidden="true"
        />
    );
}
