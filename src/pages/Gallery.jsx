import { useState } from 'react';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';

import img1 from '../assets/Galeria Fundación Arupo/Brigada medica - La Dolorosa de Priorato - Voluntariado.JPG';
import img2 from '../assets/Galeria Fundación Arupo/Feria de Ciencias - Unidad Educativa Ibarra - Voluntariado.jpeg';
import img3 from '../assets/Galeria Fundación Arupo/Feria de Salud - Alpachaca - Voluntariado.JPG';
import img4 from '../assets/Galeria Fundación Arupo/Feria de Salud - Comunidad el Cercado - Voluntariado.jpg';
import img5 from '../assets/Galeria Fundación Arupo/Fundación Cristo de la Calle - Voluntariado.jpeg';
import img6 from '../assets/Galeria Fundación Arupo/Visita BYU instalaciones PUCE Ibarra.jpeg';

const DEFAULT_GALLERY_DATA = {
    "Fundación Arupo": [
        { id: 1, category: 'Voluntariado', title: 'Brigada Médica - La Dolorosa', color: 'accent-500', image_url: img1 },
        { id: 2, category: 'Voluntariado', title: 'Feria de Ciencias - UE Ibarra', color: 'primary-500', image_url: img2 },
        { id: 3, category: 'Voluntariado', title: 'Feria de Salud - Alpachaca', color: 'secondary-500', image_url: img3 },
        { id: 4, category: 'Voluntariado', title: 'Feria de Salud - El Cercado', color: 'accent-400', image_url: img4 },
        { id: 5, category: 'Voluntariado', title: 'Fundación Cristo de la Calle', color: 'primary-400', image_url: img5 },
        { id: 6, category: 'Comunidad', title: 'Visita BYU - PUCE Ibarra', color: 'secondary-400', image_url: img6 },
    ],
    "Centro Terapéutico Integral Arupo": [
        { id: 7, category: 'Terapia Ocupacional', title: 'Motricidad Fina', color: 'primary-400' },
        { id: 8, category: 'Psicología', title: 'Terapia de Juego', color: 'secondary-400' },
        { id: 9, category: 'Lenguaje', title: 'Comunicación Asertiva', color: 'accent-300' },
        { id: 10, category: 'Fisioterapia', title: 'Rehabilitación Física', color: 'primary-300' },
    ]
};

const PlaceholderIcon = ({ className }) => (
    <div className={`w-full h-full flex items-center justify-center bg-dark-50 dark:bg-dark-900 ${className}`}>
        <svg className="w-16 h-16 text-dark-300 dark:text-dark-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    </div>
);

export default function Gallery() {
    const [activeSection, setActiveSection] = useState('All');
    
    // Al remover el admin de Supabase, la galería lee directamente de este objeto de datos.
    // Para agregar más imágenes, agrégalas a DEFAULT_GALLERY_DATA.
    const galleryState = DEFAULT_GALLERY_DATA;

    const sections = Object.keys(galleryState);

    return (
        <PageTransition>
            <section className="pt-32 pb-24 bg-white dark:bg-dark-950 min-h-screen">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <header className="mb-20 text-center">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                                Portafolio Institucional
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 dark:text-white mb-6 tracking-tight">
                                Galería de Impacto
                            </h1>
                            <p className="text-xl text-dark-500 dark:text-dark-400 max-w-3xl mx-auto font-light leading-relaxed">
                                Conoce de cerca los rostros, los talleres y los hitos que construyen una sociedad más inclusiva en Ecuador.
                            </p>
                        </header>
                    </Reveal>

                    <div className="flex flex-wrap justify-center gap-3 mb-20">
                        {['All', ...sections].map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === section
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                                    : 'bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200'
                                    }`}
                            >
                                {section === 'All' ? 'Ver Todo' : section}
                            </button>
                        ))}
                    </div>

                    {Object.entries(galleryState).map(([sectionTitle, items]) => (
                        (activeSection === 'All' || activeSection === sectionTitle) && (
                            <div key={sectionTitle} className="mb-24">
                                <Reveal>
                                    <div className="flex items-center gap-6 mb-12">
                                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-200 dark:to-dark-800" />
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-white px-2 tracking-tight">{sectionTitle}</h2>
                                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-200 dark:to-dark-800" />
                                    </div>
                                </Reveal>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {items.map((item, index) => (
                                        <Reveal key={item.id} delay={index * 0.08} width="100%" className="h-full">
                                            <div className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-dark-900 shadow-sm hover:shadow-2xl transition-all duration-500 border border-dark-100 dark:border-dark-800 h-full flex flex-col">
                                                <div className="aspect-[4/5] relative flex items-center justify-center overflow-hidden flex-shrink-0 bg-dark-50 dark:bg-dark-950">
                                                    {item.image_url ? (
                                                        <img
                                                            src={item.image_url}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                                        />
                                                    ) : (
                                                        <PlaceholderIcon className="group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                                                    )}
                                                    <div className="absolute top-5 left-5">
                                                        <span className="bg-white/90 dark:bg-dark-900/90 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-dark-900 dark:text-white px-4 py-2 rounded-full shadow-sm">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-8 flex-grow flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                                                            {item.title}
                                                        </h3>
                                                        <div className="mt-4 flex items-center gap-3">
                                                            <div className="w-10 h-px bg-dark-200 dark:bg-dark-700 transition-all group-hover:w-16 group-hover:bg-primary-500" />
                                                            <span className="text-xs text-dark-400 font-semibold tracking-widest uppercase">
                                                                Registro
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </section>
        </PageTransition>
    );
}
