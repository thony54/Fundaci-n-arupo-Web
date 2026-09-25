import InfiniteMarquee from './motion/InfiniteMarquee';

const VARIANTS = {
    primary: { title: 'text-primary-600 dark:text-primary-400', hover: 'group-hover:text-primary-600 dark:group-hover:text-primary-400', line: 'via-primary-400/60' },
    therapeutic: { title: 'text-therapeutic-600 dark:text-therapeutic-400', hover: 'group-hover:text-therapeutic-600 dark:group-hover:text-therapeutic-300', line: 'via-therapeutic-400/60' },
};

export default function Conventions({ variant = 'primary' }) {
    const v = VARIANTS[variant] || VARIANTS.primary;
    return (
        <section className="relative py-16 bg-white dark:bg-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 sm:gap-6 mb-10">
                    <span aria-hidden="true" className={`h-px flex-1 bg-gradient-to-r from-transparent ${v.line} to-transparent`} />
                    <h3 className={`text-center text-lg sm:text-xl font-semibold ${v.title} uppercase tracking-widest`}>
                        Convenios y Alianzas Estratégicas
                    </h3>
                    <span aria-hidden="true" className={`h-px flex-1 bg-gradient-to-r from-transparent ${v.line} to-transparent`} />
                </div>
                <InfiniteMarquee speed={40}>
                    {/* Placeholder for real logos */}
                    {[
                        "Ministerio de Salud",
                        "CONADIS",
                        "Mies",
                        "Prefectura de Imbabura",
                        "Alcaldía de Ibarra",
                        "Universidad Técnica del Norte",
                        "PUCE-I",
                        "Fundación Vista para todos",
                        "HIAS",
                        "ACNUR"
                    ].map((name, i) => (
                        <div
                            key={i}
                            className={`w-48 h-24 arupo-card ${i % 2 ? 'petal-alt' : 'petal'} flex items-center justify-center mx-3 my-4 group`}
                        >
                            <span className={`text-dark-400 dark:text-dark-400 font-bold text-center px-4 ${v.hover} transition-colors duration-300`}>
                                {name}
                            </span>
                        </div>
                    ))}
                </InfiniteMarquee>
            </div>
        </section>
    );
}
