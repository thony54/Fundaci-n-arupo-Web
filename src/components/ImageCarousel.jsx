import { motion } from 'framer-motion';

const images = [
    { url: '/images/impact1.png', title: 'Impacto Social' },
    { url: '/images/therapy1.png', title: 'Centro Terapéutico' },
    { url: '/images/volunteer1.png', title: 'Voluntariado' },
    { url: '/images/education1.png', title: 'Educación' },
    { url: '/images/inclusion1.png', title: 'Inclusión' },
    { url: '/images/health1.png', title: 'Salud' },
    // Duplicating some to reach 9 and then doubling for infinite scroll
    { url: '/images/impact1.png', title: 'Comunidad' },
    { url: '/images/therapy1.png', title: 'Bienestar' },
    { url: '/images/volunteer1.png', title: 'Compromiso' }
];

// Double the images array to create a seamless loop
const marqueeImages = [...images, ...images];

export default function ImageCarousel() {
    return (
        <section className="py-20 bg-dark-950 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-white whitespace-nowrap">Nuestra Labor en Imágenes</h2>
                    <div className="h-px w-full bg-gradient-to-r from-dark-700 to-transparent" />
                </div>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex gap-4 animate-marquee"
                    animate={{
                        x: [0, -1920], // Adjusted based on image width + gap
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {marqueeImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-64 h-48 flex-shrink-0 group overflow-hidden rounded-xl bg-dark-900 border border-dark-800"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-xs font-bold tracking-widest uppercase text-accent-400">
                                    {image.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
