import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/motion/ScrollProgress';

export default function Layout() {
    // Al cambiar de página se vuelve arriba (el router no lo hace solo); si la URL trae
    // un ancla (#contacto) se espera a que exista el elemento y se baja hasta él.
    // Cambiar solo ?album=… no cambia la ruta, así que abrir un álbum no mueve el scroll.
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'instant' });
            return;
        }
        let tries = 0;
        const timer = setInterval(() => {
            const el = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (el || ++tries > 20) {
                clearInterval(timer);
                el?.scrollIntoView();
            }
        }, 50);
        return () => clearInterval(timer);
    }, [pathname, hash]);

    // Safety net: if the JS motion engine never reveals the content (some
    // devices/browsers don't run the animation loop), force everything visible.
    useEffect(() => {
        const check = () => {
            // Only inspect real content (headings/paragraphs), never hover-only
            // decorations, to avoid false positives.
            const content = document.querySelectorAll(
                '[data-reveal] h1 span, [data-reveal] h2 span, [data-reveal] h3, [data-reveal] p'
            );
            let sawHidden = false;
            content.forEach((c) => {
                const r = c.getBoundingClientRect();
                const inViewport = r.top < window.innerHeight && r.bottom > 0;
                if (inViewport && parseFloat(getComputedStyle(c).opacity) < 0.15) {
                    sawHidden = true;
                }
            });
            if (sawHidden) {
                document.documentElement.classList.add('arupo-motion-fallback');
            }
        };
        const t = setTimeout(check, 1800);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
