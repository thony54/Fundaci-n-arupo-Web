// Decoración de fondo para las secciones: halos de color difuminados y la flor
// de arupo (cinco pétalos) como marca de agua. Todo es aria-hidden y se oculta
// en los modos de alto contraste (ver .arupo-deco en index.css).

const HALO_COLORS = {
    orange: 'radial-gradient(circle, rgba(251,146,60,0.55), transparent 70%)',
    amber: 'radial-gradient(circle, rgba(237,183,41,0.45), transparent 70%)',
    purple: 'radial-gradient(circle, rgba(130,61,131,0.4), transparent 70%)',
    rose: 'radial-gradient(circle, rgba(184,13,56,0.28), transparent 70%)',
};

export function Halo({ color = 'orange', className = '' }) {
    return <div aria-hidden="true" className={`arupo-halo ${className}`} style={{ background: HALO_COLORS[color] }} />;
}

export function ArupoFlower({ className = '', strokeWidth = 1.2 }) {
    const petal = 'M0 0 C 20 -18, 24 -58, 0 -86 C -24 -58, -20 -18, 0 0 Z';
    return (
        <svg aria-hidden="true" viewBox="-100 -100 200 200" className={`arupo-deco ${className}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
            <g className="arupo-flower" style={{ transformOrigin: 'center', transformBox: 'view-box' }}>
                {[0, 72, 144, 216, 288].map((r) => (
                    <path key={r} d={petal} transform={`rotate(${r})`} />
                ))}
                <circle r="9" />
                <circle r="3" fill="currentColor" />
            </g>
        </svg>
    );
}

// Combinaciones listas para usar en cada sección.
const PRESETS = {
    warm: (
        <>
            <Halo color="orange" className="-top-24 -right-24 w-[26rem] h-[26rem]" />
            <Halo color="purple" className="-bottom-32 -left-24 w-[24rem] h-[24rem]" />
            <ArupoFlower className="-top-10 -left-16 w-72 h-72 text-primary-500/10 dark:text-primary-400/10" />
        </>
    ),
    cool: (
        <>
            <Halo color="purple" className="-top-20 left-1/4 w-[22rem] h-[22rem]" />
            <Halo color="amber" className="bottom-0 -right-24 w-[24rem] h-[24rem]" />
            <ArupoFlower className="bottom-8 -right-16 w-80 h-80 text-therapeutic-600/10 dark:text-therapeutic-400/10" />
        </>
    ),
    soft: (
        <>
            <Halo color="amber" className="top-10 -left-32 w-[22rem] h-[22rem]" />
            <Halo color="orange" className="-bottom-24 right-1/4 w-[20rem] h-[20rem]" />
        </>
    ),
    dark: (
        <>
            <Halo color="orange" className="-top-24 right-1/4 w-[30rem] h-[30rem]" />
            <Halo color="purple" className="-bottom-32 -left-20 w-[28rem] h-[28rem]" />
            <ArupoFlower className="top-16 -right-20 w-96 h-96 text-white/[0.05]" strokeWidth={1} />
        </>
    ),
};

export default function SectionDecor({ variant = 'warm' }) {
    return (
        <div aria-hidden="true" className="arupo-deco inset-0 overflow-hidden rounded-[inherit]">
            {PRESETS[variant]}
        </div>
    );
}
