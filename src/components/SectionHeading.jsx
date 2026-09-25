import { motion } from 'framer-motion';
import WordReveal from './motion/WordReveal';
import { useReveal } from './motion/useReveal';

// Reusable animated section heading: eyebrow pill, a word-revealed title whose
// last `accent` words carry the brand gradient, and an optional subtitle.
// `tone="dark"` adapts it to dark sections. Guaranteed to reveal.
export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'center',
    accent = 0,
    accentClassName = 'text-arupo',
    tone = 'light',
    titleClassName,
    titleId,
    className = '',
}) {
    const aligned = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
    const { ref, revealed, reduced } = useReveal({ margin: '-60px' });
    const dark = tone === 'dark';

    const words = (title || '').split(' ');
    const segments = words.map((text, i) => ({
        text,
        className: accent && i >= words.length - accent ? accentClassName : undefined,
    }));

    return (
        <div ref={ref} data-reveal className={`flex flex-col ${aligned} max-w-3xl mb-14 ${dark ? 'on-dark' : ''} ${className}`}>
            {eyebrow && (
                <motion.p
                    initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="arupo-eyebrow mb-5"
                >
                    {eyebrow}
                </motion.p>
            )}

            <WordReveal
                as="h2"
                id={titleId}
                segments={segments}
                className={titleClassName || `text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.12] text-balance ${dark ? 'text-white' : 'text-dark-900 dark:text-white'}`}
                stagger={0.06}
            />

            {subtitle && (
                <motion.p
                    initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`mt-5 text-lg leading-relaxed text-pretty ${dark ? 'text-dark-300' : 'text-dark-500 dark:text-dark-300'}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
