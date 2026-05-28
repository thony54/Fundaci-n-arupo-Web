import InfiniteMarquee from './motion/InfiniteMarquee';

const conveniosMap = import.meta.glob('../assets/Convenios/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG,SVG}', { eager: true, import: 'default' });
const conveniosEntries = Object.entries(conveniosMap);

const reconocimientosMap = import.meta.glob('../assets/Reconocimientos/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG,SVG}', { eager: true, import: 'default' });
const reconocimientosEntries = Object.entries(reconocimientosMap);

export default function Allies() {
    const getName = (path) => {
        return path.split('/').pop().split('.').shift();
    };

    return (
        <section className="py-24 bg-white dark:bg-dark-950 border-y border-dark-100 dark:border-dark-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
                {conveniosEntries.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-center text-3xl md:text-4xl font-black text-dark-900 dark:text-white uppercase tracking-wider mb-16">
                            Nuestros Convenios
                        </h2>
                        <InfiniteMarquee speed={180} pauseOnHover={true}>
                            {conveniosEntries.map(([path, logoUrl], i) => (
                                <div key={i} className="h-40 w-72 shrink-0 flex items-center justify-center mx-4 group transition-all duration-500 relative cursor-default">
                                    <div className="h-32 w-64 flex items-center justify-center p-4 bg-white/5 dark:bg-white/5 rounded-2xl group-hover:bg-white dark:group-hover:bg-white transition-all duration-500 shadow-sm border border-dark-100 dark:border-dark-800">
                                        <img src={logoUrl} alt={getName(path)} className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105" />
                                    </div>
                                </div>
                            ))}
                        </InfiniteMarquee>
                    </div>
                )}

                {reconocimientosEntries.length > 0 && (
                    <div>
                        <h2 className="text-center text-3xl md:text-4xl font-black text-dark-900 dark:text-white uppercase tracking-wider mb-16">
                            Reconocimientos
                        </h2>
                        <InfiniteMarquee speed={180} pauseOnHover={true} direction="right">
                            {reconocimientosEntries.map(([path, logoUrl], i) => (
                                <div key={i} className="h-40 w-72 shrink-0 flex items-center justify-center mx-4 group transition-all duration-500 relative cursor-default">
                                    <div className="h-32 w-64 flex items-center justify-center p-4 bg-white/5 dark:bg-white/5 rounded-2xl group-hover:bg-white dark:group-hover:bg-white transition-all duration-500 shadow-sm border border-dark-100 dark:border-dark-800">
                                        <img src={logoUrl} alt={getName(path)} className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105" />
                                    </div>
                                </div>
                            ))}
                        </InfiniteMarquee>
                    </div>
                )}
            </div>
        </section>
    );
}
