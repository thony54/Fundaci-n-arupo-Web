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
            <section className="min-h-screen flex items-center justify-center bg-dark-950 px-4">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-dark-900/50 backdrop-blur-xl border border-dark-800 p-8 rounded-3xl shadow-2xl relative z-10"
                >
                    <div className="text-center mb-8">
                        <img src="/logo-white.png" alt="Fundación Arupo" className="h-12 w-auto mx-auto mb-6" />
                        <h1 className="text-2xl font-bold text-white">Acceso Administrativo</h1>
                        <p className="text-dark-400 mt-2 text-sm">Ingrese su contraseña para continuar</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-dark-300 ml-1">Contraseña</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-dark-800 border border-dark-700 rounded-2xl px-5 py-4 text-white focus:border-accent-500 outline-none transition-all placeholder:text-dark-600"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-400 text-sm text-center font-medium bg-red-400/10 py-2 rounded-lg border border-red-400/20"
                            >
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-accent-400 to-accent-500 text-dark-900 font-bold py-4 rounded-2xl hover:from-accent-300 hover:to-accent-400 transition-all shadow-lg shadow-accent-500/20 active:scale-[0.98]"
                        >
                            Entrar al Panel
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <a href="/" className="text-sm text-dark-500 hover:text-dark-300 transition-colors">
                            ← Volver al sitio público
                        </a>
                    </div>
                </motion.div>
            </section>
        </PageTransition>
    );
}
