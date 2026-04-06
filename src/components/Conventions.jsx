import InfiniteMarquee from './motion/InfiniteMarquee';

export default function Conventions({ variant = 'primary' }) {
    return (
        <section className="py-16 bg-white dark:bg-dark-950 border-t border-dark-100 dark:border-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className={`text-center text-xl font-semibold text-${variant}-600 dark:text-${variant}-400 uppercase tracking-widest mb-10`}>
                    Convenios y Alianzas Estratégicas
                </h3>
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
                            className={`w-48 h-24 bg-dark-50 dark:bg-dark-900 border border-dark-100 dark:border-dark-800 rounded-xl flex items-center justify-center mx-4 group hover:border-${variant}-200 dark:hover:border-${variant}-800 transition-colors duration-300`}
                        >
                            <span className={`text-dark-400 dark:text-dark-500 font-bold text-center px-4 group-hover:text-${variant}-600 dark:group-hover:text-${variant}-400 transition-colors duration-300`}>
                                {name}
                            </span>
                        </div>
                    ))}
                </InfiniteMarquee>
            </div>
        </section>
    );
}
