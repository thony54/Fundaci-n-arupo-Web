export const territories = [
    {
        id: 'imbabura',
        name: 'Imbabura',
        hero: {
            title: 'Imbabura',
            subtitle: 'Aquí la inclusión se construye con presencia constante.',
            image: 'https://images.unsplash.com/photo-1623528827304-3ad6e2d1fe10?q=80&w=2070&auto=format&fit=crop', // Landscape
        },
        context: {
            text: 'Imbabura es un punto clave de acogida para personas en movilidad humana y un territorio con desafíos estructurales en accesibilidad. Fundación Arupo trabaja aquí para fortalecer el tejido social y garantizar derechos fundamentales.',
            focus: ['Movilidad Humana', 'Discapacidad', 'Género'],
        },
        projects: [
            {
                title: 'Centro Terapéutico Ibarra',
                objective: 'Rehabilitación integral y apoyo psicosocial.',
                population: 'Personas con discapacidad y sus familias.',
                role: 'Espacio seguro de atención y cuidado.'
            },
            {
                title: 'Red de Apoyo Migrante',
                objective: 'Orientación legal y humanitaria.',
                population: 'Personas en situación de movilidad humana.',
                role: 'Primer punto de contacto y acogida.'
            }
        ],
        community: {
            title: 'Voces de Resiliencia',
            story: 'En Ibarra, la comunidad se ha organizado para crear redes de cuidado mutuo. Las mujeres lideresas han sido fundamentales para integrar a las nuevas familias que llegan buscando un futuro mejor.',
            quote: 'No solo recibimos ayuda, construimos una nueva vida juntos.',
            author: 'Lideresa comunitaria'
        },
        alliances: [
            {
                name: 'ACNUR',
                role: 'Protección internacional y fortalecimiento de capacidades locales.'
            },
            {
                name: 'Prefectura de Imbabura',
                role: 'Articulación de políticas públicas y espacios físicos.'
            },
            {
                name: 'Casa de los Derechos',
                role: 'Atención legal y restitución de derechos vulnerados.'
            }
        ],
        microImpact: [
            '500+ atenciones psicológicas realizadas.',
            '3 redes barriales conformadas.',
            'Espacios públicos recuperados para la comunidad.'
        ],
        cta: {
            text: 'Apoya nuestra labor en Imbabura',
            link: '/donar?territorio=imbabura'
        }
    },
    {
        id: 'pichincha',
        name: 'Pichincha',
        hero: {
            title: 'Pichincha',
            subtitle: 'Innovación social desde la capital.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', // Office/Innovation
        },
        context: {
            text: 'En la capital, nuestros esfuerzos se centran en la incidencia política y la creación de modelos replicables de inclusión laboral y educativa.',
            focus: ['Incidencia Política', 'Inclusión Laboral'],
        },
        projects: [
            {
                title: 'Laboratorio de Innovación Social',
                objective: 'Desarrollo de soluciones tecnológicas inclusivas.',
                population: 'Jóvenes y emprendedores sociales.',
                role: 'Incubadora de ideas transformadoras.'
            }
        ],
        community: {
            title: 'Tejiendo Redes',
            story: 'Jóvenes de diversos orígenes colaboran en proyectos tecnológicos que rompen barreras de comunicación para personas con discapacidad auditiva.',
            quote: 'La tecnología es nuestro puente hacia la igualdad.',
            author: 'Participante del laboratorio'
        },
        alliances: [
            {
                name: 'GTRM',
                role: 'Coordinación interinstitucional para respuesta a flujos migratorios.'
            }
        ],
        microImpact: [
            '2 apps inclusivas desarrolladas.',
            'Foros de política pública organizados.',
            'Alianzas con sector privado fortalecidas.'
        ],
        cta: {
            text: 'Únete al cambio en Pichincha',
            link: '/donar?territorio=pichincha'
        }
    }
];
