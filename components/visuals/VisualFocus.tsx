'use client';

import React, { useRef, useEffect } from 'react';

interface Point {
    baseX: number; // Grid position
    baseY: number;
    currX: number; // Current position
    currY: number;
    driftX: number; // Chaos position target
    driftY: number;
    vx: number; // Velocity for drifting
    vy: number;
}

export function VisualFocus() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let points: Point[] = [];

        // Config
        const spacing = 30; // Grid spacing
        const lensRadius = 150;
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            initPoints();
        };

        const initPoints = () => {
            points = [];
            const cols = Math.ceil(canvas.width / spacing);
            const rows = Math.ceil(canvas.height / spacing);

            const offsetX = (canvas.width - cols * spacing) / 2;
            const offsetY = (canvas.height - rows * spacing) / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = offsetX + i * spacing + spacing / 2;
                    const y = offsetY + j * spacing + spacing / 2;

                    points.push({
                        baseX: x,
                        baseY: y,
                        currX: Math.random() * canvas.width,
                        currY: Math.random() * canvas.height,
                        driftX: Math.random() * canvas.width,
                        driftY: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                    });
                }
            }
        };

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            points.forEach(point => {
                // Calculate distance to mouse

                // Let's check distance to the GRID position, so the lens is consistent.
                // Actually, checking purely against mouse position is fine.

                // Better: We want the "lens" to be at mouse position.
                // Calculate distance from point's BASE position to mouse.
                const distToMouse = Math.sqrt((mouse.x - point.baseX) ** 2 + (mouse.y - point.baseY) ** 2);

                let targetX, targetY;

                if (distToMouse < lensRadius) {
                    // Snap to grid
                    targetX = point.baseX;
                    targetY = point.baseY;
                } else {
                    // Drift mode
                    // Update drift target slowly or just wander?
                    // Let's just wander.
                    point.driftX += point.vx;
                    point.driftY += point.vy;

                    // Bounce drift
                    if (point.driftX < 0 || point.driftX > canvas.width) point.vx *= -1;
                    if (point.driftY < 0 || point.driftY > canvas.height) point.vy *= -1;

                    targetX = point.driftX;
                    targetY = point.driftY;
                }

                // Lerp current position to target
                // If snapping (in lens), lerp fast. If drifting, lerp slow?
                // Let's use constant lerp factor for smooth transition.
                const lerp = 0.1;
                point.currX += (targetX - point.currX) * lerp;
                point.currY += (targetY - point.currY) * lerp;

                // Draw dot
                ctx.beginPath();
                // Visuals inside lens could be slightly different?
                // Let's keep them consistent dark dots.
                ctx.arc(point.currX, point.currY, 2, 0, Math.PI * 2);
                ctx.fillStyle = distToMouse < lensRadius ? '#1a1a1a' : 'rgba(26, 26, 26, 0.5)';
                ctx.fill();
            });

            // Draw lens border (optional, helps visualization)
            /*
            if (mouse.x > 0) {
              ctx.beginPath();
              ctx.arc(mouse.x, mouse.y, lensRadius, 0, Math.PI * 2);
              ctx.strokeStyle = 'rgba(26, 26, 26, 0.1)';
              ctx.stroke();
            }
            */

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
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
