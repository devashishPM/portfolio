'use client';

import React, { useRef, useEffect } from 'react';

interface Particle {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
}

export function VisualStream() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 100;

        // Mouse influence
        let targetSpeedMultiplier = 1;
        let currentSpeedMultiplier = 1;

        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                resetParticle(i, true);
            }
        };

        const resetParticle = (index: number, randomY = false) => {
            particles[index] = {
                x: Math.random() * canvas.width,
                y: randomY ? Math.random() * canvas.height : canvas.height + Math.random() * 50,
                length: 5 + Math.random() * 15,
                speed: 1 + Math.random() * 2,
                opacity: 0.1 + Math.random() * 0.4,
            };
        };

        const draw = () => {
            if (!ctx || !canvas) return;

            // Clear with slight trail effect? No, plain clear for now.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smoothly interpolate speed
            currentSpeedMultiplier += (targetSpeedMultiplier - currentSpeedMultiplier) * 0.1;

            particles.forEach((p, i) => {
                p.y -= p.speed * currentSpeedMultiplier;

                if (p.y + p.length < 0) {
                    resetParticle(i);
                }

                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x, p.y + p.length);
                ctx.strokeStyle = `rgba(26, 26, 26, ${p.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Calculate speed based on horizontal position from center
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const normalizedX = x / rect.width; // 0 to 1

            // Speed increases as you move right? Or maybe from center?
            // Let's make it simpler: Speed increases as you go from left (slow) to right (fast).
            // Default speed 1 at center.
            // Range: 0.2 to 5.0
            targetSpeedMultiplier = 0.5 + (normalizedX * 4);
        };

        const handleMouseLeave = () => {
            targetSpeedMultiplier = 1;
        };

        window.addEventListener('resize', resize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-transparent">
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
