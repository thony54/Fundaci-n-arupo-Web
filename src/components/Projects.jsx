import { motion } from 'framer-motion';

const projects = [
    { title: 'Inclusión digital accesible', category: 'Tecnología' },
    { title: 'Fortalecimiento económico', category: 'Desarrollo' },
    { title: 'Apoyo a mujeres', category: 'Género' },
    { title: 'Empleabilidad inclusiva', category: 'Trabajo' },
    { title: 'Producción textil', category: 'Emprendimiento' },
    { title: 'Perros de asistencia', category: 'Autonomía' },
    { title: 'Brigadas médicas', category: 'Salud' },
    { title: 'Observatorio social', category: 'Investigación' },
    { title: 'Escuela de gobiernos', category: 'Políticas' }
];

export default function Projects() {
    return (
        <section id="proyectos" className="py-32 bg-dark-50 dark:bg-dark-900 transition-colors duration-300" aria-labelledby="projects-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-3">
                            <span className="w-8 h-px bg-primary-600 dark:bg-primary-400"></span>
                            Proyectos Prioritarios
                        </p>
                        <h2 id="projects-heading" className="text-5xl sm:text-6xl font-black text-dark-900 dark:text-white leading-[1.1] tracking-tight">
                            Iniciativas <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">estratégicas</span>
                        </h2>
                    </div>
                    <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl font-light max-w-md leading-relaxed">
                        Impulsamos proyectos de alto impacto con el apoyo de la cooperación internacional para transformar comunidades enteras.
                    </p>
                </div>

                {/* Interactive List */}
                <div className="border-t border-dark-200 dark:border-dark-800">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-dark-200 dark:border-dark-800 hover:bg-white dark:hover:bg-dark-950 px-4 md:px-8 -mx-4 md:mx-0 transition-colors cursor-default"
                        >
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-dark-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 mb-4 md:mb-0 tracking-tight">
                                {project.title}
                            </h3>
                            
                            <div className="flex items-center gap-6">
                                <span className="px-4 py-2 rounded-full border border-dark-200 dark:border-dark-700 text-sm font-medium text-dark-500 dark:text-dark-400 group-hover:border-primary-200 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 dark:group-hover:text-primary-300 transition-all">
                                    {project.category}
                                </span>
                                <div className="w-12 h-12 rounded-full bg-dark-100 dark:bg-dark-800 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
