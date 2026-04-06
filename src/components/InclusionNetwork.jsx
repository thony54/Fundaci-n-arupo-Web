import { useEffect, useRef } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';

export default function InclusionNetwork() {
    const canvasRef = useRef(null);
    const { settings } = useAccessibility();

    useEffect(() => {
        if (settings.reducedMotion || settings.visualAccessibilityMode) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 60; // Slightly increased
        const mouseRadius = 150;

        let mouse = { x: null, y: null };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.3; // Very slow
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.color = 'rgba(255, 255, 255, 0.3)';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;

                // Mouse influence (subtle)
                if (mouse.x && mouse.y) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        this.x -= dx * force * 0.01;
                        this.y -= dy * force * 0.01;
                    }
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };


        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [settings.reducedMotion, settings.visualAccessibilityMode]);

    if (settings.reducedMotion || settings.visualAccessibilityMode) return null;

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
            aria-hidden="true"
        />
    );
}
