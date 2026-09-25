import { useEffect, useRef } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';

/**
 * Guía de lectura — una franja clara sigue el puntero (ratón, dedo o lápiz vía
 * `pointermove`) y atenúa el resto de la pantalla. Con `pointer-events: none`
 * nunca bloquea toques ni scroll. Se mueve solo con transform dentro de un rAF.
 */
const BAND = 72; // alto de la franja clara, en px
const DIM = 0.5; // opacidad del oscurecido

export default function ReadingRuler() {
    const { settings } = useAccessibility();
    const enabled = settings.readingRuler;
    const bandRef = useRef(null);
    const rafRef = useRef(null);
    const yRef = useRef(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    useEffect(() => {
        if (!enabled) return;

        const paint = () => {
            rafRef.current = null;
            const el = bandRef.current;
            if (el) el.style.transform = `translate3d(0, ${yRef.current - BAND / 2}px, 0)`;
        };
        const onMove = (e) => {
            yRef.current = e.clientY;
            if (rafRef.current == null) rafRef.current = requestAnimationFrame(paint);
        };

        paint();
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            window.removeEventListener('pointermove', onMove);
            if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[45]" aria-hidden="true">
            <div
                ref={bandRef}
                className="absolute left-0 top-0 w-full will-change-transform"
                style={{
                    height: BAND,
                    boxShadow: `0 0 0 100vmax rgba(0,0,0,${DIM})`,
                    borderTop: '2px solid rgba(231,117,18,0.6)',
                    borderBottom: '2px solid rgba(231,117,18,0.6)',
                }}
            />
        </div>
    );
}
