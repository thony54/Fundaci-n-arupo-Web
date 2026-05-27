import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/motion/PageTransition';

export default function Login() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Prioridad: 1. Variable de Entorno Vercel/Vite, 2. LocalStorage (si ya la cambió), 3. Default
        const envPassword = import.meta.env.VITE_ADMIN_PASSWORD;
        const storedPassword = envPassword || localStorage.getItem('arupo_admin_password') || 'arupo2026';

        if (password === storedPassword) {
            sessionStorage.setItem('arupo_admin_auth', 'true');
            navigate('/admin/galeria');
        } else {
            setError('Contraseña incorrecta. Por favor, inténtelo de nuevo.');
            setPassword('');
        }
    };

    return (
        <PageTransition>
            <section className="min-h-screen flex items-center justify-center bg-dark-50 dark:bg-dark-950 px-4 relative">
                {/* Clean, subtle gradient background instead of missing pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent dark:from-primary-900/10 dark:to-dark-950 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-md bg-white dark:bg-dark-900 border border-dark-100 dark:border-dark-800 p-10 rounded-[2rem] shadow-xl relative z-10"
                >
                    <div className="text-center mb-10">
                        {/* Assuming the logo might be dark in light mode, but sticking to logic */}
                        <div className="w-16 h-16 bg-primary-50 dark:bg-dark-800 rounded-2xl mx-auto flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-extrabold text-dark-900 dark:text-white tracking-tight">Acceso Seguro</h1>
                        <p className="text-dark-500 dark:text-dark-400 mt-2 text-sm">Área restringida para administración</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-dark-700 dark:text-dark-300 ml-1">Contraseña de acceso</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-dark-50 dark:bg-dark-950 border border-dark-200 dark:border-dark-700 rounded-xl px-5 py-3.5 text-dark-900 dark:text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-dark-400 dark:placeholder:text-dark-600"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-red-600 dark:text-red-400 text-sm text-center font-medium bg-red-50 dark:bg-red-400/10 py-3 rounded-xl border border-red-100 dark:border-red-400/20"
                            >
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 active:scale-[0.98]"
                        >
                            Ingresar
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <a href="/" className="text-sm font-medium text-dark-400 hover:text-primary-600 transition-colors inline-flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Regresar a la página principal
                        </a>
                    </div>
                </motion.div>
            </section>
        </PageTransition>
    );
}
