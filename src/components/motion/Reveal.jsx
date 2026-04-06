import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Reveal({ children, width = "fit-content", delay = 0, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
                className={className.includes('h-full') ? 'h-full' : ''}
            >
                {children}
            </motion.div>
        </div>
    );
}
