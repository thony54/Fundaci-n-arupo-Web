import SectionHeading from './SectionHeading';
import SectionDecor, { PhotoBackdrop } from './ui/Decor';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';
import fotoMision from '../assets/secciones/mision.webp';
import fotoVision from '../assets/galeria/3 Capacitaciones/Capacitación al GTRM, sistema de protección de derechos y asistentes humanitarios - Tulcán/1.webp';

const Icon = ({ d, className = 'w-5 h-5' }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d} />
    </svg>
);

// Los cuatro caminos con los que la misión se cumple (completan su primera frase).
const caminos = [
    {
        label: 'Procesos terapéuticos',
        d: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    },
    {
        label: 'Programas de inclusión social',
        d: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    },
    {
        label: 'Acciones afirmativas',
        d: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z',
    },
    {
        label: 'Capacitación técnica',
        d: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5',
    },
];

// Los tres rasgos del Ecuador que describe la visión.
const pilares = [
    { label: 'Inclusivo', d: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
    { label: 'Accesible', d: 'M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' },
    { label: 'Libre de discriminación', d: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
];

export default function MissionVision() {
    return (
        <section id="mision-vision" className="relative py-24 lg:py-28 bg-cream-50 dark:bg-night-900 transition-colors duration-300 overflow-hidden" aria-labelledby="mv-heading">
            <SectionDecor variant="cool" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Nuestro Propósito"
                    title="Misión y Visión"
                    titleId="mv-heading"
                    accent={1}
                    subtitle="Lo que hacemos cada día y el país que queremos construir junto a las personas con discapacidad y sus familias."
                />

                {/* ── Misión ─────────────────────────────────────────── */}
                <article className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center" aria-labelledby="mision-title">
                    <Reveal width="100%" className="lg:col-span-5">
                        <figure className="relative mx-3 sm:mx-6 lg:mx-0 lg:mr-4 my-4">
                            <PhotoBackdrop />
                            <div className="relative z-10 petal-lg overflow-hidden aspect-square w-full shadow-2xl shadow-primary-900/20 ring-1 ring-white/50 dark:ring-white/10">
                                <img
                                    src={fotoMision}
                                    alt="Personas con discapacidad visual y equipo de Fundación Arupo en las elecciones al pleno del CCPDI de Ibarra"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                                <figcaption className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-dark-950/65 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15">
                                    <Icon className="w-3.5 h-3.5 text-primary-300" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    Elecciones al pleno del CCPDI · Ibarra
                                </figcaption>
                            </div>
                        </figure>
                    </Reveal>

                    <div className="lg:col-span-7">
                        <Reveal width="100%">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="arupo-icon w-14 h-14">
                                    <Icon className="w-7 h-7" d="M5 10.5a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z M12 6.75v3.75l2.25 1.5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">01 · Lo que hacemos</p>
                                    <h3 id="mision-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-900 dark:text-white">Misión</h3>
                                </div>
                            </div>

                            <p className="text-xl sm:text-[1.4rem] font-semibold leading-snug text-dark-800 dark:text-dark-100 text-pretty mb-6">
                                La Fundación Arupo trabaja por la defensa, promoción y restitución de los derechos de las personas con discapacidad y grupos de atención prioritaria, a través de:
                            </p>
                        </Reveal>

                        <Stagger as="ul" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" stagger={0.08}>
                            {caminos.map((c, i) => (
                                <StaggerItem
                                    key={c.label}
                                    as="li"
                                    variant="up"
                                    className={`arupo-card is-warm ${i % 2 ? 'petal-alt' : 'petal'} flex items-center gap-3.5 p-3.5 pr-4`}
                                >
                                    <span className="arupo-icon is-soft w-11 h-11">
                                        <Icon d={c.d} />
                                    </span>
                                    <span className="font-semibold text-sm leading-snug text-dark-800 dark:text-dark-100">{c.label}</span>
                                </StaggerItem>
                            ))}
                        </Stagger>

                        <Reveal width="100%">
                            <div className="relative petal bg-white/70 dark:bg-white/[0.04] ring-1 ring-primary-200/70 dark:ring-primary-500/20 p-5 sm:p-6 pl-7 sm:pl-8">
                                <span aria-hidden="true" className="absolute left-3 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-primary-400 to-accent-400" />
                                <p className="text-dark-600 dark:text-dark-300 leading-relaxed text-[1.02rem] text-pretty">
                                    Nuestro compromiso es contribuir a una sociedad justa, accesible y equitativa, en cumplimiento de la <strong className="font-semibold text-dark-900 dark:text-white">Ley Orgánica de Discapacidad</strong>, los <strong className="font-semibold text-dark-900 dark:text-white">instrumentos internacionales de derechos humanos</strong> y los <strong className="font-semibold text-dark-900 dark:text-white">Objetivos de Desarrollo Sostenible</strong>.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </article>

                {/* ── Visión ─────────────────────────────────────────── */}
                <Reveal width="100%" className="mt-20 lg:mt-24">
                    <article
                        className="on-dark relative overflow-hidden petal-lg bg-gradient-to-br from-night-900 via-[#1c1530] to-primary-900 text-white shadow-2xl shadow-primary-900/25 grid lg:grid-cols-2"
                        aria-labelledby="vision-title"
                    >
                        <div aria-hidden="true" className="arupo-halo -top-24 -left-20 w-80 h-80" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.4), transparent 70%)' }} />

                        <div className="relative p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="arupo-icon w-14 h-14">
                                    <Icon className="w-7 h-7" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-300">02 · Hacia dónde vamos</p>
                                    <h3 id="vision-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Visión</h3>
                                </div>
                            </div>

                            <p className="text-dark-200 leading-relaxed text-[1.05rem] text-pretty mb-8">
                                Somos reconocidos a nivel nacional e internacional como referente en la construcción de un <strong className="text-white font-semibold">Ecuador inclusivo, accesible y libre de discriminación</strong>, donde las personas con discapacidad ejerzan plenamente sus derechos, participen en igualdad de condiciones y contribuyan activamente al desarrollo sostenible.
                            </p>

                            <ul className="grid sm:grid-cols-3 gap-3">
                                {pilares.map((p) => (
                                    <li key={p.label} className="arupo-glass petal flex sm:flex-col items-center sm:items-start gap-3 p-4">
                                        <span className="arupo-icon w-10 h-10">
                                            <Icon d={p.d} />
                                        </span>
                                        <span className="font-semibold text-sm leading-snug text-white">{p.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:min-h-full">
                            {/* La máscara funde la foto con el panel oscuro (hacia arriba en celular, hacia la izquierda en escritorio) */}
                            <img
                                src={fotoVision}
                                alt="Participantes de la capacitación al GTRM y al sistema de protección de derechos en Tulcán"
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover [mask-image:linear-gradient(to_bottom,transparent,#000_40%)] lg:[mask-image:linear-gradient(to_right,transparent,#000_45%)]"
                            />
                        </div>
                    </article>
                </Reveal>
            </div>
        </section>
    );
}
