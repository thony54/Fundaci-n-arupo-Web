import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function CountUp({ to, from = 0, duration = 2, className = "" }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        stiffness: 50, // Gentle spring
        damping: 20,
        duration: duration * 1000,
    });
    const isInView = useInView(ref, { once: true, margin: "-10px" });
    const [displayValue, setDisplayValue] = useState(from);

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref} className={className}>{displayValue}</span>;
}
