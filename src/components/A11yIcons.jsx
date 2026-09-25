// Iconos de línea del sistema de accesibilidad (sin dependencias externas).
const base = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
};

// Figura de persona — símbolo universal de accesibilidad. Abre el panel.
export const AccessibilityIcon = (p) => (
    <svg {...base} {...p}>
        <circle cx="12" cy="4.2" r="1.6" />
        <path d="M4.5 8.2c2.4 1 4.8 1.5 7.5 1.5s5.1-.5 7.5-1.5" />
        <path d="M12 8.5v6" />
        <path d="m8.5 21 3.5-6.5 3.5 6.5" />
    </svg>
);

// Ojo — dispara el "Modo Visual Total".
export const EyeIcon = (p) => (
    <svg {...base} {...p}>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

// Altavoz con ondas — lector de voz.
export const SpeakerIcon = (p) => (
    <svg {...base} {...p}>
        <path d="M4 9v6h3.5L13 19V5L7.5 9H4Z" />
        <path d="M16.5 8.8a4.5 4.5 0 0 1 0 6.4" />
        <path d="M19 6.5a8 8 0 0 1 0 11" />
    </svg>
);

export const PauseIcon = (p) => (
    <svg {...base} {...p}>
        <path d="M9 5v14M15 5v14" strokeWidth={2} />
    </svg>
);

export const PlayIcon = (p) => (
    <svg {...base} {...p}>
        <path d="M7 5.5 19 12 7 18.5Z" />
    </svg>
);

export const StopIcon = (p) => (
    <svg {...base} {...p}>
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
    </svg>
);
