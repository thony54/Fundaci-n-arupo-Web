import { motion } from 'framer-motion';
import WordReveal from './motion/WordReveal';
import { useReveal } from './motion/useReveal';

// Reusable animated section heading: eyebrow with a growing line,
// a word-revealed title, and an optional subtitle. Guaranteed to reveal.
export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'center',
    eyebrowColor = 'text-primary-600',
    titleClassName = 'text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white',
    titleId,
    className = '',
}) {
    const aligned = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
    const { ref, revealed, reduced } = useReveal({ margin: '-60px' });

    return (
        <div ref={ref} className={`flex flex-col ${aligned} max-w-3xl mb-16 ${className}`}>
            {eyebrow && (
                <div className="flex items-center gap-3 mb-3">
                    <motion.span
                        initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
                        animate={revealed ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className={`block h-px w-8 origin-left bg-current ${eyebrowColor}`}
                        aria-hidden="true"
                    />
                    <p className={`text-sm font-semibold uppercase tracking-widest ${eyebrowColor}`}>
                        {eyebrow}
                    </p>
                </div>
            )}

            <WordReveal as="h2" id={titleId} text={title} className={titleClassName} stagger={0.06} />

            {subtitle && (
                <motion.p
                    initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-4 text-lg text-dark-500 dark:text-dark-300 leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
