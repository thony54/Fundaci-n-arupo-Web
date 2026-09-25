import SectionHeading from './SectionHeading';
import SectionDecor from './ui/Decor';
import { Stagger, StaggerItem } from './motion/Stagger';

const defaultMembers = [
    {
        name: "Maria Fernanda Ayala",
        role: "Directora de Fundación Arupo",
        image: "/TeamFA/Maria%20Fernanda.webp"
    },
    {
        name: "Anthony Karter",
        role: "Director de Comunicación",
        image: "/TeamFA/Anthony%20Karter.webp"
    },
    {
        name: "Milton Solano",
        role: "Técnico en Discapacidad",
        image: "/TeamFA/Milton%20Solano.webp"
    }
];

const VARIANTS = {
    primary: {
        role: 'text-primary-600 dark:text-primary-400',
        backdrop: 'from-primary-400 via-primary-600 to-arupo-purple',
        accent: 'text-arupo',
        decor: 'soft',
    },
    therapeutic: {
        role: 'text-therapeutic-600 dark:text-therapeutic-400',
        backdrop: 'from-[#0072BC] via-therapeutic-600 to-therapeutic-800',
        accent: 'text-cti',
        decor: 'cool',
    },
};

export default function Team({ variant = 'primary', members = defaultMembers, surface = 'bg-white dark:bg-dark-950' }) {
    const v = VARIANTS[variant] || VARIANTS.primary;

    return (
        <section className={`relative py-24 lg:py-28 ${surface} transition-colors duration-300 overflow-hidden`}>
            <SectionDecor variant={v.decor} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Nuestro Equipo"
                    accent={1}
                    accentClassName={v.accent}
                    subtitle="Profesionales comprometidos con la inclusión, la innovación y el bienestar de nuestra comunidad."
                />

                <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 lg:pb-12" stagger={0.12}>
                    {members.map((member, index) => (
                        <StaggerItem
                            key={index}
                            variant="up"
                            className={`group text-center ${index % 3 === 1 ? 'lg:translate-y-12' : ''}`}
                        >
                            <div className="relative mx-auto w-full max-w-[19rem]">
                                {/* Arco de color desplazado detrás de la foto */}
                                <div aria-hidden="true" className={`arupo-deco inset-0 arch bg-gradient-to-br ${v.backdrop} opacity-90 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5`} />
                                <div className="relative arch overflow-hidden aspect-[3/4] ring-[6px] ring-white dark:ring-dark-900 shadow-xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/85 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-7">
                                        <p className="text-white font-medium text-sm leading-snug translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                                            "Trabajamos por un mundo donde nadie se quede atrás."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7">
                                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className={`${v.role} font-medium`}>
                                    {member.role}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
