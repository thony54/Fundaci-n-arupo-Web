import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import AccessibilityPanel from './AccessibilityPanel';
import { useAccessibility } from '../context/AccessibilityContext';

// Use absolute paths for home sections to support navigation from sub-pages
const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Quiénes Somos', href: '/#nosotros' },
    { label: 'Centro Terapéutico', href: '/centro-terapeutico' },
    { label: 'Impacto', href: '/impacto' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Voluntariado', href: '/#voluntariado' },
    { label: 'Contacto', href: '/#contacto' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isA11yOpen, setIsA11yOpen] = useState(false);
    const location = useLocation();
    const { settings, updateSetting } = useAccessibility();

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-700/50">
            <nav
                aria-label="Navegación principal"
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3"
                        aria-label="Fundación Arupo – Inicio"
                    >
                        <img
                            src="/logo-white.png"
                            alt="Fundación Arupo"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                {link.href.startsWith('/#') ? (
                                    <a
                                        href={link.href}
                                        className="px-3 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-dark-800"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="px-3 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-dark-800"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <a
                            href="/#dona"
                            className="ml-3 inline-flex items-center px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-dark-900 hover:from-accent-300 hover:to-accent-400 transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-400/40 hover:scale-105"
                            aria-label="Realizar una donación"
                        >
                            Dona
                        </a>
                        <div className="ml-4 flex items-center gap-2">
                            <button
                                onClick={() => updateSetting('visualAccessibilityMode', !settings.visualAccessibilityMode)}
                                className={`group rounded-full p-2 transition-all duration-300 hover:bg-dark-800 focus:outline-none focus:ring-2 focus:ring-primary-500 ${settings.visualAccessibilityMode ? 'bg-primary-600 text-white' : 'text-dark-300 hover:text-primary-300'
                                    }`}
                                aria-label={settings.visualAccessibilityMode ? "Desactivar modo visual total" : "Activar modo visual total"}
                                title="Modo Accesibilidad Visual Total"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setIsA11yOpen(true)}
                                className="group rounded-full p-2 text-dark-300 transition-all duration-300 hover:bg-dark-800 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                aria-label="Abrir panel de accesibilidad"
                                title="Opciones de accesibilidad"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                            </button>
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={() => updateSetting('visualAccessibilityMode', !settings.visualAccessibilityMode)}
                            className={`p-2 rounded-lg transition-colors ${settings.visualAccessibilityMode ? 'bg-primary-600 text-white' : 'text-dark-300 hover:text-white hover:bg-dark-800'
                                }`}
                            aria-label="Modo visual total"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setIsA11yOpen(true)}
                            className="p-2 rounded-lg text-dark-300 hover:text-white hover:bg-dark-800 transition-colors"
                            aria-label="Opciones de accesibilidad"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        </button>
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-lg text-dark-300 hover:text-white hover:bg-dark-800 transition-colors duration-200"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
                >
                    <div className="flex flex-col gap-1 pt-2">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                {link.href.startsWith('/#') ? (
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-dark-300 hover:text-white hover:bg-dark-800 rounded-lg transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-dark-300 hover:text-white hover:bg-dark-800 rounded-lg transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <a
                            href="/#dona"
                            onClick={() => setIsOpen(false)}
                            className="mx-4 mt-2 text-center px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-dark-900 hover:from-accent-300 hover:to-accent-400 transition-all duration-300"
                            aria-label="Realizar una donación"
                        >
                            Dona
                        </a>
                        <div className="px-4 py-3 flex items-center justify-between border-t border-dark-800 mt-2">
                            <span className="text-sm font-medium text-dark-300">Tema</span>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Accessibility Panel Overlay */}
            <AccessibilityPanel
                isOpen={isA11yOpen}
                onClose={() => setIsA11yOpen(false)}
            />
        </header>
    );
}
