import { Fragment } from 'react';
import { motion } from 'framer-motion';
// Word-by-word heading reveal (mobile-safe: no per-word clipping).

// Reveals a heading word-by-word (rise + de-blur) when scrolled into view.
// Pass plain text via `text`, or rich segments via `segments`:
//   [{ text: 'accesibilidad', className: 'text-primary-400' }, ...]
export default function WordReveal({
    text,
    segments,
    as: Tag = 'h1',
    className = "",
    delay = 0,
    stagger = 0.08,
    id,
}) {
    const source = segments || (text || "").split(" ").map((t) => ({ text: t }));

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
    };
    const word = {
        hidden: { opacity: 0, y: "0.35em", filter: "blur(6px)" },
        visible: {
            opacity: 1,
            y: "0em",
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const MotionTag = motion[Tag] || motion.h1;

    return (
        <MotionTag
            id={id}
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            {source.map((seg, i) => (
                <Fragment key={i}>
                    <motion.span
                        variants={word}
                        style={{ display: "inline-block", willChange: "transform, filter" }}
                        className={seg.className}
                    >
                        {seg.text}
                    </motion.span>
                    {i < source.length - 1 ? " " : null}
                </Fragment>
            ))}
        </MotionTag>
    );
}
