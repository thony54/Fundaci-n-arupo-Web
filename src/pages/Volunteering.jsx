import { Link } from 'react-router-dom';
import PageTransition from '../components/motion/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { Stagger, StaggerItem } from '../components/motion/Stagger';
import SectionDecor, { PhotoBackdrop } from '../components/ui/Decor';
import AlbumGrid from '../components/AlbumGrid';
import fotoVoluntariado from '../assets/secciones/voluntariado.webp';
import {
    VOLUNTEER_FORM_URL,
    ongoingActivities,
    volunteerAlbums,
    volunteerPhotoCount,
} from '../data/volunteering';

// Página del Voluntariado: quiénes somos como voluntarios, lo que se está haciendo
// ahora, lo que ya se hizo (fotos de la Galería) y cómo sumarse.
// Los datos viven en src/data/volunteering.js.

const Icon = ({ d, className = 'w-5 h-5' }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
);

const PATHS = {
    arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
    pin: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    globe: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    photos: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
};

const JOIN_BUTTON = 'group inline-flex items-center justify-center whitespace-nowrap px-9 py-4 text-base font-bold rounded-full bg-gradient-to-r from-dark-900 to-[#2a1a3a] dark:from-white dark:to-cream-100 text-white dark:text-dark-900 hover:scale-105 transition-transform duration-300 shadow-[0_18px_40px_-16px_rgba(15,23,42,0.6)] ring-1 ring-primary-500/30';
const OUTLINE_BUTTON = 'group inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 text-base font-semibold rounded-full border-2 border-dark-300 dark:border-dark-600 text-dark-800 dark:text-white hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-300 transition-colors duration-300';

function JoinLink({ className = '' }) {
    return (
        <a
            href={VOLUNTEER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${JOIN_BUTTON} ${className}`}
            aria-label="Postularse como voluntario"
        >
            Únete Ahora
            <Icon d={PATHS.arrow} className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
    );
}

// Espacio reservado para cuando todavía no hay contenido que mostrar.
function EmptySlot({ icon, title, children }) {
    return (
        <div className="mx-auto max-w-3xl arupo-card is-warm petal-lg p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-6">
                <span className="arupo-icon is-soft w-14 h-14">
                    <Icon d={icon} className="w-6 h-6" />
                </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white text-balance">{title}</h3>
            <p className="mt-3 text-dark-600 dark:text-dark-300 leading-relaxed text-pretty">{children}</p>
            <div className="mt-8 flex justify-center">
                <JoinLink />
            </div>
        </div>
    );
}

function OngoingCard({ activity, index }) {
    return (
        <StaggerItem as="article" variant="up" className="h-full">
            <div className={`group arupo-card arupo-card-hover ${index % 2 ? 'petal-alt' : 'petal-lg'} h-full flex flex-col overflow-hidden`}>
                {activity.photo && (
                    <div className="aspect-[4/3] overflow-hidden bg-dark-100 dark:bg-dark-950">
                        <img
                            src={activity.photo}
                            alt={activity.photoAlt || activity.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                    </div>
                )}
                <div className="p-6 lg:p-7 flex-grow flex flex-col gap-3">
                    <span className="self-start inline-flex items-center gap-2 rounded-full bg-primary-50 dark:bg-primary-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-700 dark:text-primary-300 ring-1 ring-primary-200/80 dark:ring-primary-500/25">
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        En marcha
                    </span>
                    <h3 className="text-lg lg:text-xl font-bold text-dark-900 dark:text-white leading-snug">{activity.title}</h3>
                    <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{activity.description}</p>
                    {(activity.location || activity.schedule) && (
                        <ul className="mt-auto pt-2 space-y-1.5 text-sm text-dark-500 dark:text-dark-400">
                            {activity.location && (
                                <li className="flex items-center gap-2">
                                    <Icon d={PATHS.pin} className="w-4 h-4 flex-shrink-0 text-primary-500" />
                                    {activity.location}
                                </li>
                            )}
                            {activity.schedule && (
                                <li className="flex items-center gap-2">
                                    <Icon d={PATHS.calendar} className="w-4 h-4 flex-shrink-0 text-primary-500" />
                                    {activity.schedule}
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </StaggerItem>
    );
}

const WAYS = [
    { title: 'Voluntariado Local', desc: 'Acciones directas e impacto en comunidades en Ecuador.', icon: PATHS.pin },
    { title: 'Voluntariado Internacional', desc: 'Oportunidades globales de colaboración con aliados.', icon: PATHS.globe },
];

export default function Volunteering() {
    const albumCount = volunteerAlbums.length;

    return (
        <PageTransition>
            {/* 1. PORTADA */}
            <section className="relative pt-32 lg:pt-36 pb-28 lg:pb-32 bg-cream-50 dark:bg-night-900 transition-colors duration-300 overflow-hidden" aria-labelledby="volunteering-heading">
                <SectionDecor variant="warm" />
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 lg:pr-8">
                            <p className="arupo-eyebrow mb-6">Voluntariado Arupo</p>
                            <h1
                                id="volunteering-heading"
                                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-dark-900 dark:text-white leading-[1.05] mb-6"
                            >
                                Voluntarios que <br />
                                <span className="text-arupo">cambian vidas</span>
                            </h1>
                            <p className="text-lg text-dark-600 dark:text-dark-300 mb-10 leading-relaxed max-w-xl">
                                Conoce lo que hacen las voluntarias y voluntarios de Fundación Arupo: en qué
                                están trabajando hoy, lo que ya hemos logrado juntos y cómo puedes sumarte.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                                <JoinLink />
                                <a href="#en-marcha" className={OUTLINE_BUTTON}>
                                    Ver lo que hacemos
                                    <Icon d="M19 14l-7 7m0 0l-7-7m7 7V3" className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <figure className="relative mx-3 sm:mx-6 my-6">
                                <PhotoBackdrop />
                                <div className="relative z-10 aspect-[3/2] petal-lg overflow-hidden shadow-2xl shadow-primary-900/20 ring-1 ring-white/50 dark:ring-white/10">
                                    <img
                                        src={fotoVoluntariado}
                                        alt="Voluntarias y voluntarios con el equipo de Fundación Arupo frente a las letras de Zuleta"
                                        decoding="async"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </figure>
                            {/* Testimonio en tarjeta superpuesta, para no tapar la foto */}
                            <blockquote className="relative z-20 -mt-14 sm:-mt-16 ml-6 sm:ml-14 mr-2 sm:mr-16 arupo-card petal p-5 sm:p-6">
                                <svg aria-hidden="true" className="absolute -top-4 right-6 w-9 h-9 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                </svg>
                                <p className="font-medium text-base sm:text-lg italic text-dark-800 dark:text-dark-100 leading-relaxed">"El voluntariado en Arupo me enseñó el verdadero significado de la empatía y la transformación comunitaria."</p>
                                <footer className="mt-3 text-primary-600 dark:text-primary-300 text-sm font-semibold tracking-wide uppercase">— Testimonio Voluntariado</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. LO QUE ESTAMOS HACIENDO */}
            <section id="en-marcha" className="arupo-sheet scroll-mt-24 overflow-hidden pt-24 lg:pt-28 pb-32 lg:pb-36 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="ongoing-heading">
                <SectionDecor variant="cool" />
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="En marcha"
                        title="Voluntariado en acción"
                        titleId="ongoing-heading"
                        accent={1}
                        subtitle="Lo que nuestras voluntarias y voluntarios están haciendo ahora mismo."
                    />
                    {ongoingActivities.length > 0 ? (
                        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" stagger={0.1}>
                            {ongoingActivities.map((activity, i) => (
                                <OngoingCard key={activity.id} activity={activity} index={i} />
                            ))}
                        </Stagger>
                    ) : (
                        <EmptySlot icon={PATHS.heart} title="Pronto compartiremos aquí lo que está pasando">
                            Este espacio mostrará las actividades de voluntariado que están en marcha:
                            dónde se realizan, qué hacemos y cómo puedes sumarte.
                        </EmptySlot>
                    )}
                </div>
            </section>

            {/* 3. LO QUE HEMOS HECHO (fotos de la Galería con la etiqueta Voluntariado) */}
            <section id="historial" className="arupo-sheet scroll-mt-24 overflow-hidden pt-24 lg:pt-28 pb-32 lg:pb-36 bg-cream-50 dark:bg-night-900 transition-colors duration-300" aria-labelledby="past-heading">
                <SectionDecor variant="soft" />
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Historial"
                        title="Lo que hemos hecho juntos"
                        titleId="past-heading"
                        accent={1}
                        subtitle="Las actividades de voluntariado y comunidad que ya forman parte de nuestra historia."
                    />
                    {albumCount > 0 ? (
                        <>
                            <AlbumGrid albums={volunteerAlbums} eagerCount={3} />
                            <div className="mt-12 flex flex-col items-center gap-5">
                                <p className="text-sm font-semibold text-dark-400 dark:text-dark-500 tracking-wide">
                                    {albumCount} {albumCount === 1 ? 'actividad' : 'actividades'} · {volunteerPhotoCount} {volunteerPhotoCount === 1 ? 'fotografía' : 'fotografías'}
                                </p>
                                <Link
                                    to="/galeria"
                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-dark-900 ring-1 ring-primary-200 dark:ring-dark-700 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:ring-primary-400 hover:text-primary-600 shadow-sm transition-colors"
                                >
                                    Ver toda la galería
                                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <EmptySlot icon={PATHS.photos} title="Aquí vivirá la memoria del voluntariado">
                            Las jornadas, brigadas y visitas de voluntariado irán apareciendo en este espacio,
                            con sus fotografías.
                        </EmptySlot>
                    )}
                </div>
            </section>

            {/* 4. CÓMO PARTICIPAR */}
            <section id="participar" className="arupo-sheet scroll-mt-24 overflow-hidden pt-24 lg:pt-28 pb-32 lg:pb-36 bg-white dark:bg-dark-950 transition-colors duration-300" aria-labelledby="join-heading">
                <SectionDecor variant="cool" />
                <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Súmate"
                        title="Formas de ser voluntario"
                        titleId="join-heading"
                        accent={1}
                        subtitle="Hay un lugar para ti en nuestra red, en tu comunidad o desde cualquier parte del mundo."
                    />
                    <Stagger className="grid sm:grid-cols-2 gap-6 lg:gap-8" stagger={0.12}>
                        {WAYS.map((way, i) => (
                            <StaggerItem key={way.title} variant="up" className="h-full">
                                <div className={`group arupo-card arupo-card-hover is-warm ${i % 2 ? 'petal-alt' : 'petal-lg'} h-full p-7 lg:p-8 flex gap-5 items-start`}>
                                    <span className="arupo-icon w-14 h-14">
                                        <Icon d={way.icon} className="w-6 h-6" />
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-xl text-dark-900 dark:text-white">{way.title}</h3>
                                        <p className="mt-2 text-dark-600 dark:text-dark-300 leading-relaxed">{way.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </Stagger>

                    <div className="mt-14 text-center">
                        <p className="mx-auto max-w-2xl text-lg text-dark-600 dark:text-dark-300 leading-relaxed text-pretty">
                            No importa tu edad, profesión u origen – lo que importa es tu compromiso con los derechos humanos y la inclusión.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <JoinLink />
                            <a href="#contacto" className={OUTLINE_BUTTON}>
                                Escríbenos
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
