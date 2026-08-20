import { useId } from 'react';
import { cn } from '../../lib/utils';

// Magic UI — DotPattern (adapted). A subtle dotted SVG background.
// Fade it with a mask utility class on the wrapper (e.g. a radial mask).
export function DotPattern({
    width = 20,
    height = 20,
    cx = 1,
    cy = 1,
    cr = 1,
    className,
    ...props
}) {
    const id = useId();
    return (
        <svg
            aria-hidden="true"
            className={cn('pointer-events-none absolute inset-0 h-full w-full fill-dark-400/40', className)}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                >
                    <circle cx={cx} cy={cy} r={cr} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
    );
}

export default DotPattern;
