import { useCallback, useEffect, useRef, useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { PauseIcon, PlayIcon, SpeakerIcon, StopIcon } from './A11yIcons';

/**
 * Lector de voz (Text-to-Speech) con la Web Speech API nativa, sin librerías.
 * - Escritorio: selecciona texto y se lee.
 * - Móvil: desliza el dedo sobre el texto; el bloque bajo el dedo se resalta y se lee.
 *   La 1.ª lectura sale dentro del `pointerdown` (requisito de iOS para desbloquear la voz).
 * - Elige la voz en español más natural disponible y trocea el texto por frases.
 * - Barra flotante Pausar/Reanudar/Detener. Ignora la propia UI de accesibilidad ([data-a11y-ui]).
 */
const RATE = 0.95;
const PITCH = 1;
const CHUNK = 220; // caracteres por utterance
const DWELL = 160; // ms que el dedo se posa en un bloque antes de leerlo

function chunk(text) {
    const clean = text.replace(/\s+/g, ' ').trim();
    if (!clean) return [];
    const parts = clean.match(/[^.!?…\n]+[.!?…]*\s*/g) ?? [clean];
    const out = [];
    let buf = '';
    for (const p of parts) {
        if ((buf + p).length > CHUNK && buf) {
            out.push(buf.trim());
            buf = p;
        } else {
            buf += p;
        }
    }
    if (buf.trim()) out.push(buf.trim());
    return out;
}

// Puntúa las voces para quedarnos con la más natural en español.
function scoreVoice(v) {
    const n = v.name.toLowerCase();
    const l = v.lang.toLowerCase();
    if (!/^es/.test(l)) return -1;
    let s = 10;
    if (/es[-_]?(419|mx|us|co|ar|cl|pe)/.test(l)) s += 3; // Latinoamérica (Ecuador)
    if (/google/.test(n)) s += 6;
    if (/natural|neural|premium|enhanced|online/.test(n)) s += 6;
    if (/(mónica|monica|paulina|jorge|juan|marisol|helena|laura|elvira|diego)/.test(n)) s += 2;
    if (v.localService === false) s += 2;
    return s;
}

export default function SpeechReader() {
    const { settings } = useAccessibility();
    const enabled = settings.speech;
    const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    const coarse = typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;

    const [speaking, setSpeaking] = useState(false);
    const [paused, setPaused] = useState(false);
    const lastSpokenRef = useRef('');
    const voicesRef = useRef([]);
    const highlightRef = useRef(null);
    const dwellRef = useRef(null);

    // Carga (asíncrona) de voces del sistema.
    useEffect(() => {
        if (!supported) return;
        const load = () => {
            voicesRef.current = window.speechSynthesis.getVoices();
        };
        load();
        window.speechSynthesis.addEventListener?.('voiceschanged', load);
        return () => window.speechSynthesis.removeEventListener?.('voiceschanged', load);
    }, [supported]);

    const bestVoice = useCallback(() => {
        const voices = voicesRef.current.length
            ? voicesRef.current
            : window.speechSynthesis?.getVoices?.() ?? [];
        let best = null;
        let bestScore = 0;
        for (const v of voices) {
            const s = scoreVoice(v);
            if (s > bestScore) {
                bestScore = s;
                best = v;
            }
        }
        return best;
    }, []);

    const clearHighlight = useCallback(() => {
        if (highlightRef.current) {
            highlightRef.current.classList.remove('a11y-tts-reading');
            highlightRef.current = null;
        }
    }, []);

    const setHighlight = useCallback((el) => {
        if (highlightRef.current === el) return;
        if (highlightRef.current) highlightRef.current.classList.remove('a11y-tts-reading');
        highlightRef.current = el;
        if (el) el.classList.add('a11y-tts-reading');
    }, []);

    const stop = useCallback(() => {
        if (supported) window.speechSynthesis.cancel();
        setSpeaking(false);
        setPaused(false);
        clearHighlight();
    }, [supported, clearHighlight]);

    const speak = useCallback((text) => {
        if (!supported) return;
        const chunks = chunk(text);
        if (!chunks.length) return;
        window.speechSynthesis.cancel();
        lastSpokenRef.current = text;
        const voice = bestVoice();
        setSpeaking(true);
        setPaused(false);
        chunks.forEach((c, i) => {
            const u = new SpeechSynthesisUtterance(c);
            u.lang = voice?.lang ?? 'es-ES';
            if (voice) u.voice = voice;
            u.rate = RATE;
            u.pitch = PITCH;
            if (i === chunks.length - 1) {
                u.onend = () => {
                    setSpeaking(false);
                    setPaused(false);
                    clearHighlight();
                };
            }
            u.onerror = () => {
                setSpeaking(false);
                setPaused(false);
            };
            window.speechSynthesis.speak(u);
        });
    }, [supported, bestVoice, clearHighlight]);

    // Devuelve el bloque de texto legible bajo un punto de la pantalla.
    const blockAt = useCallback((x, y) => {
        const hit = document.elementFromPoint(x, y);
        if (!hit || hit.closest('[data-a11y-ui]')) return null;
        const block = hit.closest('p,h1,h2,h3,h4,h5,h6,li,a,button,summary,blockquote,figcaption,dd,dt,td,th,label,span');
        const el = block ?? (hit.innerText ? hit : null);
        if (!el) return null;
        const text = el.innerText?.trim() ?? '';
        return text.length >= 2 ? el : null;
    }, []);

    // Escritorio: leer la selección (ratón/lápiz, no táctil).
    useEffect(() => {
        if (!enabled || !supported) return;
        const onPointerUp = (e) => {
            if (e.pointerType === 'touch') return;
            window.setTimeout(() => {
                const sel = window.getSelection();
                if (!sel || sel.isCollapsed) return;
                const text = sel.toString().trim();
                if (text.length < 2) return;
                const anchor = sel.anchorNode;
                const anchorEl = anchor instanceof Element ? anchor : anchor?.parentElement;
                if (anchorEl?.closest('[data-a11y-ui]')) return;
                if (text === lastSpokenRef.current && speaking) return;
                speak(text);
            }, 10);
        };
        document.addEventListener('pointerup', onPointerUp);
        return () => document.removeEventListener('pointerup', onPointerUp);
    }, [enabled, supported, speak, speaking]);

    // Móvil: explorar con el dedo (resalta + lee el bloque bajo el dedo).
    useEffect(() => {
        if (!enabled || !supported) return;

        const readBlock = (el) => {
            const text = el.innerText.trim();
            if (text.length < 2 || (text === lastSpokenRef.current && speaking)) return;
            speak(text);
        };

        const onDown = (e) => {
            if (e.pointerType !== 'touch') return;
            const el = blockAt(e.clientX, e.clientY);
            if (!el) return;
            setHighlight(el);
            readBlock(el); // dentro del gesto → desbloquea la voz en iOS
        };
        const onMove = (e) => {
            if (e.pointerType !== 'touch') return;
            const el = blockAt(e.clientX, e.clientY);
            if (!el) return;
            setHighlight(el);
            if (dwellRef.current != null) window.clearTimeout(dwellRef.current);
            dwellRef.current = window.setTimeout(() => readBlock(el), DWELL);
        };
        const onEnd = () => {
            if (dwellRef.current != null) window.clearTimeout(dwellRef.current);
        };

        document.addEventListener('pointerdown', onDown, { passive: true });
        document.addEventListener('pointermove', onMove, { passive: true });
        document.addEventListener('pointerup', onEnd, { passive: true });
        document.addEventListener('pointercancel', onEnd, { passive: true });
        return () => {
            document.removeEventListener('pointerdown', onDown);
            document.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerup', onEnd);
            document.removeEventListener('pointercancel', onEnd);
            if (dwellRef.current != null) window.clearTimeout(dwellRef.current);
        };
    }, [enabled, supported, speak, speaking, blockAt, setHighlight]);

    // Al apagar el modo (o desmontar), corta la lectura y limpia el resalte.
    useEffect(() => {
        if (!enabled) stop();
        return () => stop();
    }, [enabled, stop]);

    if (!enabled) return null;

    const togglePlay = () => {
        if (!supported) return;
        if (speaking && !paused) {
            window.speechSynthesis.pause();
            setPaused(true);
        } else if (paused) {
            window.speechSynthesis.resume();
            setPaused(false);
        } else {
            const text = window.getSelection()?.toString().trim() ?? '';
            if (text.length >= 2) speak(text);
        }
    };

    const btn = 'flex h-9 items-center gap-1.5 rounded-full px-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500';
    const idleHint = coarse
        ? 'Desliza el dedo sobre el texto para escucharlo'
        : 'Selecciona un texto para escucharlo';

    return (
        <div
            data-a11y-ui
            role="region"
            aria-label="Lector de voz"
            className="fixed bottom-4 left-1/2 z-[55] flex -translate-x-1/2 items-center gap-2 rounded-full border border-dark-700 bg-dark-900/95 px-3 py-2 shadow-2xl backdrop-blur-md"
            style={{ maxWidth: 'calc(100vw - 2rem)' }}
        >
            <SpeakerIcon className={`a11y-icon h-5 w-5 shrink-0 ${speaking && !paused ? 'text-primary-400' : 'text-dark-400'}`} />
            {!supported ? (
                <span className="px-1 text-sm text-dark-300">Tu navegador no soporta lectura por voz.</span>
            ) : speaking ? (
                <>
                    <span className="hidden px-1 text-sm text-dark-200 sm:inline">
                        {paused ? 'En pausa' : 'Leyendo…'}
                    </span>
                    <button
                        onClick={togglePlay}
                        className={`${btn} ${paused ? 'bg-primary-600 text-white hover:bg-primary-500' : 'bg-dark-800 text-white hover:bg-dark-700'}`}
                        aria-label={paused ? 'Reanudar lectura' : 'Pausar lectura'}
                    >
                        {paused ? <PlayIcon className="a11y-icon h-4 w-4" /> : <PauseIcon className="a11y-icon h-4 w-4" />}
                        <span className="hidden sm:inline">{paused ? 'Reanudar' : 'Pausar'}</span>
                    </button>
                    <button
                        onClick={stop}
                        className={`${btn} bg-dark-800 text-white hover:bg-dark-700`}
                        aria-label="Detener lectura"
                    >
                        <StopIcon className="a11y-icon h-4 w-4" />
                        <span className="hidden sm:inline">Detener</span>
                    </button>
                </>
            ) : (
                <span className="px-1 text-sm text-dark-300">{idleHint}</span>
            )}
        </div>
    );
}
