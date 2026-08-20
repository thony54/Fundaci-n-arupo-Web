import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Reveal-on-view with a safety net: content is guaranteed to become visible
// even if IntersectionObserver never fires (some mobile/embedded browsers),
// and it shows immediately (no animation) when the user prefers reduced motion.
export function useReveal({ margin = '-60px', delay = 900 } = {}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin });
    const [forced, setForced] = useState(false);
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        }
        // Fallback: reveal even if the observer never triggers.
        const t = setTimeout(() => setForced(true), delay);
        return () => clearTimeout(t);
    }, [delay]);

    const revealed = inView || forced;
    return { ref, revealed, reduced };
}

export default useReveal;
