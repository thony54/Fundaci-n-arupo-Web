const defaultMembers = [
    {
        name: "Maria Fernanda Ayala",
        role: "Directora de Fundación Arupo",
        image: "/TeamFA/Maria%20Fernanda.JPG"
    },
    {
        name: "Anthony Karter",
        role: "Director de Comunicación",
        image: "/TeamFA/Anthony%20Karter.JPG"
    },
    {
        name: "Milton Solano",
        role: "Técnico en Discapacidad",
        image: "/TeamFA/Milton%20Solano.JPG"
    }
];

export default function Team({ variant = 'primary', members = defaultMembers }) {
    return (
        <section className="py-24 bg-dark-50 dark:bg-dark-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-4">
                        Nuestro Equipo
                    </h2>
                    <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
                        Profesionales comprometidos con la inclusión, la innovación y el bienestar de nuestra comunidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-dark-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-dark-100 dark:border-dark-800"
                        >
                            <div className="aspect-[2/3] overflow-hidden relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium text-sm leading-tight">
                                        "Trabajamos por un mundo donde nadie se quede atrás."
                                    </p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className={`text-${variant}-600 dark:text-${variant}-400 font-medium`}>
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
