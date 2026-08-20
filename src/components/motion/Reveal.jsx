import { motion } from 'framer-motion';
import { useReveal } from './useReveal';

export default function Reveal({ children, width = "fit-content", delay = 0, className = "" }) {
    const { ref, revealed, reduced } = useReveal({ margin: "-75px" });

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial={reduced ? "visible" : "hidden"}
                animate={revealed ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
                className={className.includes('h-full') ? 'h-full' : ''}
            >
                {children}
            </motion.div>
        </div>
    );
}
