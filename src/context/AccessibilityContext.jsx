import { createContext, useContext, useEffect, useState } from 'react';

const AccessibilityContext = createContext();

const DEFAULTS = {
    fontSize: 1, // 1, 1.25, 1.5
    highContrast: false,
    grayscale: false,
    highlightInteractions: false,
    lineSpacing: 1, // 1, 1.5, 2
    reducedMotion: false,
    dyslexiaFont: false, // Fuente legible + espaciado cognitivo
    readingRuler: false, // Guía de lectura que sigue el cursor/dedo
    bigCursor: false, // Cursor grande de alto contraste
    speech: false, // Lector de voz (TTS)
    visualAccessibilityMode: false,
};

function readInitial() {
    if (typeof window === 'undefined') return DEFAULTS;
    try {
        const saved = window.localStorage.getItem('accessibility-settings');
        // Merge con DEFAULTS: los ajustes guardados antes de añadir claves nuevas no quedan en undefined.
        return saved ? { ...DEFAULTS, ...JSON.parse(saved) } : DEFAULTS;
    } catch {
        return DEFAULTS;
    }
}

export function AccessibilityProvider({ children }) {
    const [settings, setSettings] = useState(readInitial);

    useEffect(() => {
        const root = window.document.documentElement;

        // Visual Accessibility Total Mode
        root.classList.toggle('a11y-visual-total', settings.visualAccessibilityMode);

        // Font size - only if not in total visual mode (which has its own overrides)
        if (!settings.visualAccessibilityMode) {
            root.style.fontSize = settings.fontSize === 1
                ? ''
                : `${settings.fontSize * 16}px`;
            root.style.lineHeight = settings.lineSpacing;
        } else {
            root.style.fontSize = '24px';
            root.style.lineHeight = '1.5';
        }

        // Classes
        root.classList.toggle('a11y-high-contrast', settings.highContrast);
        root.classList.toggle('a11y-grayscale', settings.grayscale);
        root.classList.toggle('a11y-highlight', settings.highlightInteractions);
        root.classList.toggle('a11y-reduced-motion', settings.reducedMotion);
        root.classList.toggle('a11y-dyslexia', settings.dyslexiaFont);
        root.classList.toggle('a11y-big-cursor', settings.bigCursor);

        try {
            localStorage.setItem('accessibility-settings', JSON.stringify(settings));
        } catch {
            /* localStorage bloqueado — no es fatal para la sesión actual. */
        }
    }, [settings]);

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const resetSettings = () => {
        setSettings(DEFAULTS);
    };

    return (
        <AccessibilityContext.Provider value={{ settings, updateSetting, resetSettings }}>
            {children}
        </AccessibilityContext.Provider>
    );
}

export function useAccessibility() {
    return useContext(AccessibilityContext);
}
