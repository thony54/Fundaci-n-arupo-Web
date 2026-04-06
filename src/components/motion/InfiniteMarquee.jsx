import { useState } from 'react';
import { motion } from 'framer-motion';

export default function InfiniteMarquee({ children, direction = 'left', speed = 40, pauseOnHover = true }) {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div 
            className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            <motion.div
                className="flex w-max shrink-0 py-12"
                animate={{
                    x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    ease: "linear",
                    duration: speed,
                    repeat: Infinity,
                }}
                // Framer Motion's shorthand for pausing/resuming
                style={{
                    animationPlayState: isPaused ? 'paused' : 'running'
                }}
            >
                {/* We double the content to allow seamless loop */}
                <div className="flex shrink-0 items-center">
                    {children}
                </div>
                <div className="flex shrink-0 items-center">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

// Re-writing with pure Framer Motion for reliability without external CSS dependencies
export function Marquee({ children, speed = 40 }) {
    return (
        <div className="flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <motion.div
                className="flex gap-16 items-center pr-16"
                animate={{ x: "-50%" }}
                transition={{
                    ease: "linear",
                    duration: speed,
                    repeat: Infinity
                }}
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}
