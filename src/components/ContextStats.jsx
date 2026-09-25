import SectionHeading from './SectionHeading';
import SectionDecor from './ui/Decor';
import { Stagger, StaggerItem } from './motion/Stagger';

const ecuadorStats = [
    { value: '87%', desc: 'Mujeres solas, cabeza de hogar.' },
    { value: '75%', desc: 'En los quintiles de pobreza y pobreza extrema.' },
    { value: '85%', desc: 'No tiene un empleo estable.' },
    { value: '80%', desc: 'No accede a servicios de salud con especialistas.' },
    { value: '<1%', desc: 'De las personas con discapacidad están inmersas en el sistema educativo.' },
];

const movilidadStats = [
    { value: '80%', desc: 'En los quintiles de pobreza y pobreza extrema.' },
    { value: '100%', desc: 'No puede acceder a ayudas técnicas.' },
    { value: '89%', desc: 'Inseguridad alimentaria.' },
    { value: '12,1%', desc: 'Son hogares con necesidades específicas.' },
    { value: '67%', desc: 'Duerme a la intemperie.' },
    { value: '70%', desc: 'Situación migratoria regular.' },
];

function StatCard({ value, desc, accent, index }) {
    return (
        <StaggerItem
            variant="up"
            className={`group arupo-card arupo-card-hover ${index % 2 ? 'petal-alt' : 'petal'} relative overflow-hidden p-6 h-full`}
        >
            <span aria-hidden="true" className="arupo-deco -top-12 -right-12 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.16),transparent_68%)] transition-transform duration-500 group-hover:scale-125" />
            <p className={`relative text-4xl lg:text-[2.6rem] font-black tracking-tight ${accent} mb-3`}>{value}</p>
            <p className="relative text-dark-600 dark:text-dark-300 text-sm leading-snug">{desc}</p>
        </StaggerItem>
    );
}

function GroupTitle({ children, dot }) {
    return (
        <h3 className="inline-flex items-center gap-3 mb-7 pl-2 pr-5 py-2 rounded-full bg-white dark:bg-dark-900 shadow-sm ring-1 ring-dark-100 dark:ring-dark-800 text-lg font-bold text-dark-900 dark:text-white">
            <span className={`inline-flex w-7 h-7 rounded-full ${dot} ring-4 ring-white/60 dark:ring-white/5`} aria-hidden="true" />
            {children}
        </h3>
    );
}

function Note({ children }) {
    return (
        <p className="mt-6 flex items-start gap-3 text-sm text-dark-500 dark:text-dark-400 italic max-w-4xl">
            <span aria-hidden="true" className="mt-1.5 w-6 h-px bg-primary-400 shrink-0" />
            {children}
        </p>
    );
}

export default function ContextStats() {
    return (
        <section id="contexto" className="relative py-24 lg:py-28 bg-cream-50 dark:bg-night-900 transition-colors duration-300 overflow-hidden" aria-labelledby="context-heading">
            <SectionDecor variant="warm" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Por nuestros derechos, aquí estamos"
                    title="El contexto de la discapacidad en cifras"
                    titleId="context-heading"
                    accent={1}
                    subtitle="Las personas con discapacidad atraviesan una grave crisis por la falta de medicinas, ayudas técnicas y empleos adecuados, que limita su autonomía y profundiza la exclusión."
                />

                {/* Ecuador */}
                <div className="mb-16">
                    <GroupTitle dot="bg-gradient-to-br from-primary-400 to-primary-700">Discapacidad en Ecuador</GroupTitle>
                    <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" stagger={0.07}>
                        {ecuadorStats.map((s, i) => (
                            <StatCard key={s.desc} index={i} value={s.value} desc={s.desc} accent="text-arupo" />
                        ))}
                    </Stagger>
                    <Note>No existe data real de feminicidios en mujeres con discapacidad y violencia basada en género.</Note>
                </div>

                {/* Movilidad humana */}
                <div>
                    <GroupTitle dot="bg-gradient-to-br from-accent-400 to-arupo-purple">Discapacidad en movilidad humana</GroupTitle>
                    <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" stagger={0.07}>
                        {movilidadStats.map((s, i) => (
                            <StatCard key={s.desc} index={i + 1} value={s.value} desc={s.desc} accent="text-arupo-alt" />
                        ))}
                    </Stagger>
                    <Note>Una crisis de derechos humanos silenciosa: esta población enfrenta una doble exclusión estructural al combinar las barreras de la discapacidad con la irregularidad migratoria y la pobreza extrema.</Note>
                </div>
            </div>
        </section>
    );
}
