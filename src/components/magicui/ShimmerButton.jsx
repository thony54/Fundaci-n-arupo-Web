import { cn } from '../../lib/utils';

// Magic UI — ShimmerButton (adapted). Renders an <a> when `href` is given,
// otherwise a <button>. A continuous light sweep runs across it.
export function ShimmerButton({ children, className, href, ...props }) {
    const classes = cn(
        'mu-shimmer group relative inline-flex items-center justify-center overflow-hidden',
        'rounded-full px-8 py-3.5 text-base font-semibold text-white',
        'bg-gradient-to-r from-primary-500 to-primary-600',
        'shadow-xl shadow-primary-500/25 transition-all duration-300',
        'hover:from-primary-400 hover:to-primary-500 hover:shadow-primary-400/40 hover:scale-105',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400',
        className
    );

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                <span className="relative z-10 inline-flex items-center">{children}</span>
            </a>
        );
    }
    return (
        <button className={classes} {...props}>
            <span className="relative z-10 inline-flex items-center">{children}</span>
        </button>
    );
}

export default ShimmerButton;
