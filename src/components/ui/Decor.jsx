// Decoración de fondo para las secciones: halos de color difuminados. Todo es
// aria-hidden y se oculta en los modos de alto contraste (ver .arupo-deco en index.css).

const HALO_COLORS = {
    orange: 'radial-gradient(circle, rgba(251,146,60,0.55), transparent 70%)',
    amber: 'radial-gradient(circle, rgba(237,183,41,0.45), transparent 70%)',
    purple: 'radial-gradient(circle, rgba(130,61,131,0.4), transparent 70%)',
    rose: 'radial-gradient(circle, rgba(184,13,56,0.28), transparent 70%)',
};

export function Halo({ color = 'orange', className = '' }) {
    return <div aria-hidden="true" className={`arupo-halo ${className}`} style={{ background: HALO_COLORS[color] }} />;
}

// Fondo para fotos y QR: un marco fino desplazado hacia abajo a la derecha y una
// trama de puntos asomando por la esquina opuesta. Va dentro de un contenedor
// `relative` junto a la foto (que debe ser `relative`); `shape` copia su forma.
const BACKDROP_TONES = {
    primary: {
        frame: 'border-primary-400/55 dark:border-primary-400/40',
        dots: 'text-primary-500/50 dark:text-primary-400/40',
    },
    cti: {
        frame: 'border-[#0072BC]/40 dark:border-sky-400/40',
        dots: 'text-therapeutic-600/45 dark:text-therapeutic-300/40',
    },
};

export function PhotoBackdrop({ tone = 'primary', shape = 'petal-lg' }) {
    const t = BACKDROP_TONES[tone] || BACKDROP_TONES.primary;
    return (
        <>
            <div aria-hidden="true" className={`arupo-deco arupo-dots -top-7 -left-7 w-36 h-36 sm:w-44 sm:h-44 ${t.dots}`} />
            <div aria-hidden="true" className={`arupo-deco inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 border-2 ${shape} ${t.frame}`} />
        </>
    );
}

// Combinaciones listas para usar en cada sección.
const PRESETS = {
    warm: (
        <>
            <Halo color="orange" className="-top-24 -right-24 w-[26rem] h-[26rem]" />
            <Halo color="purple" className="-bottom-32 -left-24 w-[24rem] h-[24rem]" />
        </>
    ),
    cool: (
        <>
            <Halo color="purple" className="-top-20 left-1/4 w-[22rem] h-[22rem]" />
            <Halo color="amber" className="bottom-0 -right-24 w-[24rem] h-[24rem]" />
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
