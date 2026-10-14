import { galleryTags } from './gallery';

// Formulario de postulación al voluntariado.
export const VOLUNTEER_FORM_URL = 'https://enketo.unhcr.org/x/Eo942fQl';

// ── LO QUE HEMOS HECHO ───────────────────────────────────────────────────────
// Sale solo de la Galería: cada álbum de la etiqueta "Voluntariado y comunidad"
// (galeria-originales/7 Voluntariado y comunidad/<Evento - Ubicación>/1.jpg →
// `npm run galeria`) aparece aquí y en /galeria.
export const VOLUNTEER_TAG = 'Voluntariado y comunidad';
export const volunteerAlbums = galleryTags.find((t) => t.title === VOLUNTEER_TAG)?.albums ?? [];
export const volunteerPhotoCount = volunteerAlbums.reduce((n, a) => n + a.photos.length, 0);

// ── LO QUE ESTAMOS HACIENDO ──────────────────────────────────────────────────
// Actividades de voluntariado en curso. Mientras la lista esté vacía, la página
// muestra un espacio reservado. Cada actividad:
//   {
//     id: 'brigada-ibarra',                  // único
//     title: 'Nombre de la actividad',
//     description: 'Qué hacemos y cómo participan las voluntarias y voluntarios.',
//     location: 'Ibarra',                    // opcional
//     schedule: 'Todos los sábados',         // opcional (cuándo / desde cuándo)
//     photo: fotoImportada,                  // opcional: import desde src/assets/
//     photoAlt: 'Descripción de la foto',    // opcional
//   }
export const ongoingActivities = [];
