import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Subtle 3D tilt toward the cursor. Wrap any card content.
export default function TiltCard({ children, className = "", max = 8, glare = true }) {
    const ref = useRef(null);
    const px = useMotionValue(0.5);
    const py = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 150, damping: 15 });
    const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 150, damping: 15 });
    const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
    const glareY = useTransform(py, [0, 1], ["0%", "100%"]);

    function handleMove(e) {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        px.set((e.clientX - rect.left) / rect.width);
        py.set((e.clientY - rect.top) / rect.height);
    }
    function handleLeave() {
        px.set(0.5);
        py.set(0.5);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
            className={`relative ${className}`}
        >
            {children}
            {glare && (
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: useTransform(
                            [glareX, glareY],
                            ([x, y]) => `radial-gradient(240px circle at ${x} ${y}, rgba(255,255,255,0.18), transparent 60%)`
                        ),
                    }}
                />
            )}
        </motion.div>
    );
}
