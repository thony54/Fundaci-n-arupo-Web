// Animated gradient mesh — Arupo palette (orange / purple / amber).
// Pure CSS animation; respects reduced motion via the global stylesheet.
export default function MeshGradient({ className = "", style }) {
    return (
        <div className={`arupo-mesh ${className}`} style={style} aria-hidden="true">
            <div className="arupo-mesh__blob arupo-mesh__blob--a" />
            <div className="arupo-mesh__blob arupo-mesh__blob--b" />
            <div className="arupo-mesh__blob arupo-mesh__blob--c" />
        </div>
    );
}
