import InfiniteMarquee from './motion/InfiniteMarquee';

// Cargamos los logos de forma dinámica, capturando las rutas de los archivos
const logosMap = import.meta.glob('../assets/LOGOS/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG,SVG}', { eager: true, import: 'default' });
const entries = Object.entries(logosMap);

export default function Allies() {
    // Función para limpiar el nombre del archivo (quita la ruta y extensión)
    const getName = (path) => {
        return path.split('/').pop().split('.').shift();
    };

    return (
        <section className="py-24 bg-white dark:bg-dark-950 border-y border-dark-100 dark:border-dark-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
                <h2 className="text-center text-3xl md:text-4xl font-black text-dark-900 dark:text-white uppercase tracking-wider mb-20">
                    Nuestros Aliados y Convenios
                </h2>

                {entries.length > 0 && (
                    <InfiniteMarquee speed={180} pauseOnHover={true}>
                        {entries.map(([path, logoUrl], i) => (
                            <div
                                key={i}
                                className="h-40 w-72 shrink-0 flex items-center justify-center mx-4 group transition-all duration-500 relative cursor-default"
                            >
                                {/* Etiqueta de Nombre Dinámica */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 bg-dark-900 dark:bg-primary-600 text-white text-[11px] font-black px-5 py-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-[0_15px_35px_rgba(0,0,0,0.3)] scale-50 group-hover:scale-100 uppercase tracking-widest border border-white/20 flex flex-col items-center">
                                    {getName(path)}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-dark-900 dark:border-t-primary-600" />
                                </div>

                                <div className="h-32 w-64 flex items-center justify-center p-4 bg-white/5 dark:bg-white/5 rounded-2xl group-hover:bg-white dark:group-hover:bg-white transition-all duration-500">
                                    <img
                                        src={logoUrl}
                                        alt={getName(path)}
                                        className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </InfiniteMarquee>
                )}
            </div>
        </section>
    );
}
