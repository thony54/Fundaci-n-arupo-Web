import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

// Magic UI — NumberTicker (adapted). Animates a number into view.
export function NumberTicker({
    value,
    direction = 'up',
    delay = 0,
    className,
    decimalPlaces = 0,
    locale = 'es-ES',
}) {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === 'down' ? value : 0);
    const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: '0px' });

    // Safety net: run even if the intersection observer never fires.
    const [forced, setForced] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setForced(true), 1200);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (!isInView && !forced) return;
        const t = setTimeout(() => motionValue.set(direction === 'down' ? 0 : value), delay * 1000);
        return () => clearTimeout(t);
    }, [motionValue, isInView, forced, delay, value, direction]);

    useEffect(() => {
        return springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat(locale, {
                    minimumFractionDigits: decimalPlaces,
                    maximumFractionDigits: decimalPlaces,
                }).format(Number(latest.toFixed(decimalPlaces)));
            }
        });
    }, [springValue, decimalPlaces, locale]);

    return (
        <span
            ref={ref}
            className={cn('inline-block tabular-nums tracking-wider', className)}
        >
            {direction === 'down' ? Intl.NumberFormat(locale).format(value) : 0}
        </span>
    );
}

export default NumberTicker;
