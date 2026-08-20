import { motion } from 'framer-motion';

// Container that staggers its <StaggerItem> children into view.
export function Stagger({ children, className = "", stagger = 0.12, delay = 0, once = true, as = 'div' }) {
    const MotionTag = motion[as] || motion.div;
    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-60px" }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
            }}
        >
            {children}
        </MotionTag>
    );
}

// A single item. `variant`:
//   'up'   — rise + fade (default)
//   'card' — 3D card entrance (rotateX + rise)
//   'scale'— pop in
export function StaggerItem({ children, className = "", variant = 'up', as = 'div', style }) {
    const MotionTag = motion[as] || motion.div;
    const variants = {
        up: {
            hidden: { opacity: 0, y: 28 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
        },
        card: {
            hidden: { opacity: 0, y: 40, rotateX: -12, transformPerspective: 800 },
            visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.85 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
        },
    };
    return (
        <MotionTag className={className} style={style} variants={variants[variant] || variants.up}>
            {children}
        </MotionTag>
    );
}
