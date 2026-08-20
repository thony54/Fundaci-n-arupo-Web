import qrFundacion from '../assets/QRs/QR Fundación Arupo.png';

export default function CTA() {
    return (
        <section id="contacto" className="py-28 bg-white dark:bg-dark-950 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto bg-white dark:bg-dark-900 rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none border border-dark-100 dark:border-dark-800 flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2 space-y-10">
                    <div>
                        <h2 className="text-4xl font-extrabold text-dark-900 dark:text-white tracking-tight mb-4">Estamos aquí para ayudarte</h2>
                        <p className="text-lg text-dark-500 dark:text-dark-400 font-light leading-relaxed">Ponte en contacto con nuestro equipo para conocer más sobre nuestra labor, servicios, o sumarte a nuestras iniciativas.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Horario */}
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-dark-900 dark:text-white text-lg">Horario de Atención</h4>
                                <p className="text-dark-500 dark:text-dark-400 mt-1">Lunes a Viernes</p>
                                <p className="text-dark-800 dark:text-dark-200 font-medium">08:00 - 12:45 | 14:15 - 18:00</p>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-accent-50 dark:bg-accent-900/20 flex items-center justify-center text-accent-600 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-dark-900 dark:text-white text-lg">Llámanos</h4>
                                <p className="text-dark-500 dark:text-dark-400 mt-1">Central telefónica</p>
                                <a href="tel:+593996768228" className="text-dark-800 dark:text-dark-200 font-medium hover:text-primary-600 transition-colors">+593 99 676 8228</a>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 shrink-0">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.111-.352-.148-.973-.397-1.943-1.272-1.084-.979-1.815-2.185-2.025-2.54-.21-.355-.022-.547.155-.724.161-.161.353-.414.53-.621.174-.207.234-.355.352-.591.118-.236.059-.443-.03-.621-.088-.178-.778-1.879-1.066-2.571-.274-.658-.553-.568-.778-.578-.207-.008-.445-.011-.682-.011-.237 0-.621.089-.947.443-.326.355-1.244 1.214-1.244 2.959s1.274 3.433 1.451 3.67c.178.237 2.493 3.823 6.035 5.356 2.308.995 3.109.845 3.626.702.597-.165 1.839-.751 2.097-1.477.258-.726.258-1.348.181-1.477-.077-.13-.279-.207-.633-.385z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-dark-900 dark:text-white text-lg">WhatsApp Directo</h4>
                                <p className="text-dark-500 dark:text-dark-400 mt-1">Atención rápida por chat</p>
                                <a href="https://wa.me/593996768228" target="_blank" rel="noopener noreferrer" className="text-dark-800 dark:text-dark-200 font-medium hover:text-green-600 transition-colors">+593 99 676 8228</a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-dark-900 dark:text-white text-lg">Escríbenos</h4>
                                <p className="text-dark-500 dark:text-dark-400 mt-1">Correo electrónico</p>
                                <a href="mailto:rrpparupocti@gmail.com" className="text-dark-800 dark:text-dark-200 font-medium hover:text-primary-600 transition-colors break-all">rrpparupocti@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QR Code Section */}
                <div className="md:w-1/2 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6 text-center">Conecta al instante</h3>
                    <div className="bg-white p-4 rounded-3xl shadow-xl border border-dark-100 flex items-center justify-center w-64 h-64 mb-6 relative group hover:border-primary-300 transition-all">
                        <img src={qrFundacion} alt="Código QR Fundación Arupo" className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105" />
                    </div>
                    <p className="text-sm font-medium text-dark-500 dark:text-dark-400 text-center max-w-xs">
                        Escanea este código para enviarnos un mensaje directo y recibir atención personalizada
                    </p>
                </div>
            </div>
        </section>
    );
}
