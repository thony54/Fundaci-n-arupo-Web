import SectionHeading from './SectionHeading';
import { Stagger, StaggerItem } from './motion/Stagger';
import Reveal from './motion/Reveal';
import TiltCard from './motion/TiltCard';
import { BorderBeam } from './magicui/BorderBeam';
import SectionDecor, { ArupoFlower } from './ui/Decor';

const enfoques = [
    {
        label: 'Enfoque de derechos humanos.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-13.5v3m0 0v3m0-3h3m-3 0H9" />
        ),
    },
    {
        label: 'Enfoque de discapacidad e inclusión.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        ),
    },
    {
        label: 'Perspectiva de género.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75V18m-7.5-6.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        ),
    },
    {
        label: 'Interculturalidad.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
        ),
    },
    {
        label: 'Desarrollo comunitario.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
        ),
    },
    {
        label: 'Participación ciudadana.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        ),
    },
    {
        label: 'Inclusión económica.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        ),
    },
    {
        label: 'Acción humanitaria territorial.',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        ),
    },
];

export default function About() {
    return (
        <section
            id="nosotros"
            className="relative py-24 lg:py-32 bg-white dark:bg-dark-950 transition-colors duration-300 overflow-hidden"
            aria-labelledby="about-heading"
        >
            <SectionDecor variant="warm" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    {/* Text */}
                    <div>
                        <SectionHeading
                            eyebrow="Quiénes Somos"
                            title="Enfoque Institucional"
                            titleId="about-heading"
                            align="left"
                            accent={1}
                            subtitle="Nuestro trabajo se basa en los siguientes enfoques para transformar realidades y acompañar a personas en situación de discapacidad, movilidad humana y vulnerabilidad social:"
                            className="mb-10"
                        />

                        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3.5" stagger={0.08}>
                            {enfoques.map((enfoque, i) => (
                                <StaggerItem
                                    key={enfoque.label}
                                    variant="up"
                                    className={`group arupo-card arupo-card-hover is-warm ${i % 2 ? 'petal-alt' : 'petal'} flex items-center gap-3.5 p-3.5 pr-4`}
                                >
                                    <div className="arupo-icon w-11 h-11">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {enfoque.icon}
                                        </svg>
                                    </div>
                                    <p className="text-dark-800 dark:text-dark-100 font-semibold text-sm leading-snug">
                                        {enfoque.label}
                                    </p>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>

                    {/* Image / Visual */}
                    <Reveal delay={0.15} width="100%">
                        <div className="relative px-2 sm:px-6 py-6">
                            {/* Capas decorativas detrás de la foto */}
                            <div aria-hidden="true" className="arupo-deco inset-0 petal-lg bg-gradient-to-br from-primary-400 via-primary-600 to-arupo-purple rotate-[-4deg] scale-[0.96] opacity-90" />
                            <ArupoFlower className="-bottom-10 -left-8 w-40 h-40 text-primary-500/30 dark:text-primary-400/25" strokeWidth={2} />
                            <div aria-hidden="true" className="arupo-deco -top-4 right-2 w-24 h-24 rounded-full border-2 border-dashed border-accent-400/60" />

                            <TiltCard className="group petal-lg relative z-10" max={7}>
                                <div className="relative petal-lg overflow-hidden aspect-[4/3] lg:aspect-[5/5.2] shadow-2xl shadow-primary-900/30 ring-1 ring-white/40">
                                    <BorderBeam
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        duration={6}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/40 to-accent-500/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                                    <img
                                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
                                        alt="Trabajo comunitario"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-950/90 via-dark-900/50 to-transparent p-8 pt-20 z-20">
                                        <span aria-hidden="true" className="block w-10 h-1 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 mb-4" />
                                        <p className="text-white font-semibold text-lg leading-relaxed">
                                            Construimos una sociedad donde la diversidad sea celebrada y los derechos garantizados.
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
