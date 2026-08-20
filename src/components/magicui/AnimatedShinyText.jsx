import { cn } from '../../lib/utils';

// Magic UI — AnimatedShinyText (adapted). A light sweep across colored text.
// Set the base color with the `--shine-base` CSS variable via `style`.
export function AnimatedShinyText({ children, className, style }) {
    return (
        <span className={cn('mu-shiny-text', className)} style={style}>
            {children}
        </span>
    );
}

export default AnimatedShinyText;
