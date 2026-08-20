import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Moves its children vertically as the element scrolls through the viewport.
// `speed` > 0 makes it drift up (foreground feel); < 0 drifts down.
export default function Parallax({ children, speed = 0.2, className = "" }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}
