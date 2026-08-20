import { cn } from '../../lib/utils';

// Magic UI — BorderBeam (adapted). Place inside a `position: relative`,
// rounded container; a colored beam travels around its border.
export function BorderBeam({
    className,
    duration = 6,
    colorFrom = '#e77512',
    colorTo = '#edb729',
}) {
    return (
        <div
            className={cn('mu-beam', className)}
            style={{
                '--beam-duration': `${duration}s`,
                '--beam-from': colorFrom,
                '--beam-to': colorTo,
            }}
            aria-hidden="true"
        />
    );
}

export default BorderBeam;
