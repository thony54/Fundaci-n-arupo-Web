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

    // Safety net: run even if the intersection observer never fires.
    const [forced, setForced] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setForced(true), 1200);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (isInView || forced) {
            motionValue.set(to);
            // Guarantee the exact target is shown once the spring settles,
            // since useSpring converges asymptotically and may rest just below `to`.
            const snap = setTimeout(() => setDisplayValue(to), duration * 1000 + 400);
            return () => clearTimeout(snap);
        }
    }, [isInView, forced, motionValue, to, duration]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
    }, [springValue]);

    return <span ref={ref} className={className}>{displayValue.toLocaleString('es-ES')}</span>;
}
