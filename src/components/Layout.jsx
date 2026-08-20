import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/motion/ScrollProgress';

export default function Layout() {
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
