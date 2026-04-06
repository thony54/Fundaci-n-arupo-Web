import { useState, useEffect } from 'react';
import PageTransition from '../components/motion/PageTransition';
import Reveal from '../components/motion/Reveal';

const DEFAULT_GALLERY_DATA = {
    "Fundación Arupo": [
        { id: 1, category: 'Comunidad', title: 'Talleres Sociales', color: 'accent-500' },
        { id: 2, category: 'Educación', title: 'Apoyo Escolar', color: 'primary-500' },
        { id: 3, category: 'Eventos', title: 'Día de la Familia', color: 'secondary-500' },
        { id: 4, category: 'Voluntariado', title: 'Jornadas de Limpieza', color: 'accent-400' },
    ],
    "Centro Terapéutico Integral Arupo": [
        { id: 5, category: 'Terapia Ocupacional', title: 'Motricidad Fina', color: 'primary-400' },
        { id: 6, category: 'Psicología', title: 'Terapia de Juego', color: 'secondary-400' },
        { id: 7, category: 'Lenguaje', title: 'Comunicación Asertiva', color: 'accent-300' },
        { id: 8, category: 'Fisioterapia', title: 'Rehabilitación Física', color: 'primary-300' },
    ]
};

const SilhouetteIcon = ({ className }) => (
    <div className={`w-full h-full flex items-center justify-center bg-dark-800 ${className}`}>
        <svg className="w-24 h-24 text-dark-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
    </div>
);

export default function Gallery() {
    const [activeSection, setActiveSection] = useState('All');
    const [galleryState, setGalleryState] = useState(DEFAULT_GALLERY_DATA);

    useEffect(() => {
        const savedData = localStorage.getItem('arupo_gallery_data');
        if (savedData) {
            try {
                setGalleryState(JSON.parse(savedData));
            } catch (e) {
                console.error("Error loading gallery data", e);
            }
        }
    }, []);

    const sections = Object.keys(galleryState);

    return (
        <PageTransition>
            <section className="pt-32 pb-20 bg-dark-950 min-h-screen">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <header className="mb-16 text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Galería de Impacto</h1>
                            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
                                Explorando nuestro trabajo por categorías. Imágenes de siluetas temporales.
                            </p>
                        </header>
                    </Reveal>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {['All', ...sections].map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === section
                                    ? 'bg-accent-500 text-dark-900 scale-105 shadow-lg shadow-accent-500/20'
                                    : 'bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700'
                                    }`}
                            >
                                {section === 'All' ? 'Ver Todo' : section}
                            </button>
                        ))}
                    </div>

                    {Object.entries(galleryState).map(([sectionTitle, items]) => (
                        (activeSection === 'All' || activeSection === sectionTitle) && (
                            <div key={sectionTitle} className="mb-20">
                                <Reveal>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-dark-700" />
                                        <h2 className="text-3xl font-bold text-white px-4">{sectionTitle}</h2>
                                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-dark-700" />
                                    </div>
                                </Reveal>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {items.map((item, index) => (
                                        <Reveal key={item.id} delay={index * 0.1}>
                                            <div className="group relative overflow-hidden rounded-2xl bg-dark-900 border border-dark-800 transition-all duration-300 hover:border-accent-500/30 hover:shadow-2xl hover:shadow-accent-500/10 h-full flex flex-col">
                                                <div className="aspect-[9/16] relative flex items-center justify-center overflow-hidden flex-shrink-0">
                                                    {item.imageUrl ? (
                                                        <img
                                                            src={item.imageUrl}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <SilhouetteIcon className="group-hover:scale-110 transition-transform duration-500" />
                                                    )}
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-dark-950/80 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-dark-300 px-3 py-1 rounded-full border border-dark-700">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-5 flex-grow flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors">
                                                            {item.title}
                                                        </h3>
                                                        <div className="mt-3 flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full bg-${item.color || 'accent-500'}`} />
                                                            <span className="text-sm text-dark-400 font-medium tracking-tight">
                                                                Categorizado
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
