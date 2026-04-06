import { motion, AnimatePresence } from 'framer-motion';
import { useAccessibility } from '../context/AccessibilityContext';
import { useEffect, useRef } from 'react';

export default function AccessibilityPanel({ isOpen, onClose }) {
    const { settings, updateSetting, resetSettings } = useAccessibility();
    const panelRef = useRef(null);

    // Trap focus and close on ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'Tab' && panelRef.current) {
                const focusableElements = panelRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Focus first button
            setTimeout(() => {
                const firstElement = panelRef.current?.querySelector('button');
                firstElement?.focus();
            }, 100);
        }
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const options = [
        {
            label: 'Tamaño de texto',
            key: 'fontSize',
            type: 'range',
            min: 1, max: 1.5, step: 0.25,
            desc: 'Aumenta el tamaño de la fuente para mejor legibilidad.'
        },
        {
            label: 'Espaciado de línea',
            key: 'lineSpacing',
            type: 'range',
            min: 1, max: 2, step: 0.5,
            desc: 'Aumenta el espacio entre líneas de texto.'
        },
        { label: 'Alto contraste', key: 'highContrast', type: 'toggle', desc: 'Colores de alto contraste para visión reducida.' },
        { label: 'Blanco y negro', key: 'grayscale', type: 'toggle', desc: 'Elimina los colores para evitar distracciones o fatiga.' },
        { label: 'Resaltar enlaces', key: 'highlightInteractions', type: 'toggle', desc: 'Añade bordes y subrayado a elementos interactivos.' },
        { label: 'Desactivar animaciones', key: 'reducedMotion', type: 'toggle', desc: 'Elimina efectos de movimiento en toda la página.' },
        { label: 'Modo Visual Total', key: 'visualAccessibilityMode', type: 'toggle', desc: 'Máximo contraste y simplificación total para baja visión.' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40 bg-dark-950/20 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Panel */}
                    <motion.div
                        ref={panelRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed right-0 top-0 z-50 h-[100dvh] w-full max-w-sm border-l border-dark-700 bg-dark-900 p-6 shadow-2xl overflow-y-auto"
                        role="dialog"
                        aria-labelledby="a11y-title"
                        aria-modal="true"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 id="a11y-title" className="text-xl font-bold text-white flex items-center gap-2">
                                <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                Accesibilidad
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-dark-400 hover:text-white rounded-lg hover:bg-dark-800 transition-colors"
                                aria-label="Cerrar panel de accesibilidad"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-6">
                            {options.map((opt) => (
                                <div key={opt.key} className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor={opt.key} className="font-semibold text-dark-100 flex flex-col">
                                            {opt.label}
                                            <span className="text-xs font-normal text-dark-400 mt-1">{opt.desc}</span>
                                        </label>
                                        {opt.type === 'toggle' && (
                                            <button
                                                id={opt.key}
                                                onClick={() => updateSetting(opt.key, !settings[opt.key])}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 ${settings[opt.key] ? 'bg-primary-600' : 'bg-dark-700'
                                                    }`}
                                                aria-pressed={settings[opt.key]}
                                            >
                                                <span
                                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings[opt.key] ? 'translate-x-6' : 'translate-x-1'
                                                        }`}
                                                />
                                            </button>
                                        )}
                                    </div>
                                    {opt.type === 'range' && (
                                        <div className="flex items-center gap-4">
                                            <input
                                                id={opt.key}
                                                type="range"
                                                min={opt.min}
                                                max={opt.max}
                                                step={opt.step}
                                                value={settings[opt.key]}
                                                onChange={(e) => updateSetting(opt.key, parseFloat(e.target.value))}
                                                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                                            />
                                            <span className="text-sm font-mono text-primary-400 min-w-[3ch]">
                                                {settings[opt.key]}x
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-6 border-t border-dark-700">
                            <button
                                onClick={resetSettings}
                                className="w-full py-3 rounded-xl border border-dark-600 text-dark-300 font-medium hover:bg-dark-800 hover:text-white transition-all active:scale-95"
                            >
                                Restablecer valores predeterminados
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
