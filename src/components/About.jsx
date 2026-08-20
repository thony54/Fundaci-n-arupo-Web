import SectionHeading from './SectionHeading';
import { Stagger, StaggerItem } from './motion/Stagger';
import Reveal from './motion/Reveal';
import TiltCard from './motion/TiltCard';
import { BorderBeam } from './magicui/BorderBeam';
import DotPattern from './magicui/DotPattern';
import { cn } from '../lib/utils';

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
            className="relative py-24 bg-white dark:bg-dark-950 transition-colors duration-300 overflow-hidden"
            aria-labelledby="about-heading"
        >
            {/* Subtle dotted texture, faded toward the edges */}
            <DotPattern
                className={cn(
                    'fill-dark-300/50 dark:fill-dark-700/40',
                    '[mask-image:radial-gradient(60%_60%_at_50%_40%,white,transparent)]'
                )}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <SectionHeading
                            eyebrow="Quiénes Somos"
                            title="Enfoque Institucional"
                            titleId="about-heading"
                            align="left"
                            subtitle="Nuestro trabajo se basa en los siguientes enfoques para transformar realidades y acompañar a personas en situación de discapacidad, movilidad humana y vulnerabilidad social:"
                            className="mb-10"
                        />

                        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3" stagger={0.08}>
                            {enfoques.map((enfoque) => (
                                <StaggerItem
                                    key={enfoque.label}
                                    variant="up"
                                    className="group flex items-start gap-3 rounded-2xl border border-dark-100 dark:border-dark-800 bg-dark-50/40 dark:bg-dark-900/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 dark:hover:border-primary-800 hover:bg-white dark:hover:bg-dark-900 hover:shadow-lg hover:shadow-primary-500/5"
                                >
                                    <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {enfoque.icon}
                                        </svg>
                                    </div>
                                    <p className="text-dark-800 dark:text-dark-200 font-medium text-sm leading-snug self-center">
                                        {enfoque.label}
                                    </p>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>

                    {/* Image / Visual */}
                    <Reveal delay={0.15} width="100%">
                        <TiltCard className="group rounded-3xl" max={7}>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl">
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
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent p-8 z-20">
                                    <p className="text-white font-medium text-lg leading-relaxed">
                                        Construimos una sociedad donde la diversidad sea celebrada y los derechos garantizados.
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
