import { createContext, useContext, useEffect, useState } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('accessibility-settings');
        return saved ? JSON.parse(saved) : {
            fontSize: 1, // 1, 1.25, 1.5
            highContrast: false,
            grayscale: false,
            highlightInteractions: false,
            lineSpacing: 1, // 1, 1.5, 2
            reducedMotion: false,
            visualAccessibilityMode: false,
        };
    });

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

        localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    }, [settings]);

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const resetSettings = () => {
        setSettings({
            fontSize: 1,
            highContrast: false,
            grayscale: false,
            highlightInteractions: false,
            lineSpacing: 1,
            reducedMotion: false,
            visualAccessibilityMode: false,
        });
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
