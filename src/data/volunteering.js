import { galleryTags } from './gallery';

// Formulario de postulación al voluntariado.
export const VOLUNTEER_FORM_URL = 'https://enketo.unhcr.org/x/Eo942fQl';

// ── FOTOS DE LA GALERÍA ──────────────────────────────────────────────────────
// Las fotos de la página salen de la Galería: cada álbum de la etiqueta
// "Voluntariado y comunidad" (galeria-originales/7 Voluntariado y comunidad/
// <Evento - Ubicación>/1.jpg → `npm run galeria`) adorna la página y lleva un
// enlace "Ver en galería" hacia su álbum.
export const VOLUNTEER_TAG = 'Voluntariado y comunidad';
export const volunteerAlbums = galleryTags.find((t) => t.title === VOLUNTEER_TAG)?.albums ?? [];

// ── ESPACIOS DE TEXTO ────────────────────────────────────────────────────────
// Mientras las listas estén vacías, la página muestra un espacio reservado.
// Cada actividad:
//   {
//     id: 'brigada-ibarra',                  // único
//     title: 'Nombre de la actividad',
//     description: 'Qué se hace y cómo participan las voluntarias y voluntarios.',
//     location: 'Ibarra',                    // opcional
//     when: 'Todos los sábados',             // opcional: cuándo ("Marzo 2026", "Desde 2025"…)
//     photo: fotoImportada,                  // opcional: import desde src/assets/
//     photoAlt: 'Descripción de la foto',    // opcional
//   }

// Lo que estamos haciendo ahora.
export const ongoingActivities = [];

// Lo que ya hicimos (además de las fotos de la Galería).
export const pastActivities = [];
