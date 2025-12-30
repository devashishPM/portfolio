'use client';

import React, { useRef, useEffect } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

export function VisualNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let nodes: Node[] = [];
        const nodeCount = 20;
        const connectionDistance = 150;
        const mouseRepelDistance = 200;
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            initNodes();
        };

        const initNodes = () => {
            nodes = [];
            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5, // Slow drift
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: 3 + Math.random() * 2,
                });
            }
        };

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw nodes
            nodes.forEach((node, i) => {
                // Move
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off walls
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Mouse repulsion
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseRepelDistance) {
                    const force = (mouseRepelDistance - distance) / mouseRepelDistance;
                    const angle = Math.atan2(dy, dx);
                    const repelX = Math.cos(angle) * force * 2;
                    const repelY = Math.sin(angle) * force * 2;
                    node.x -= repelX;
                    node.y -= repelY;
                }

                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#1a1a1a'; // Dark charcoal
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const distX = other.x - node.x;
                    const distY = other.y - node.y;
                    const dist = Math.sqrt(distX * distX + distY * distY);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        const opacity = 1 - dist / connectionDistance;
                        ctx.strokeStyle = `rgba(26, 26, 26, ${opacity * 0.3})`; // Faint charcoal
                        ctx.stroke();
                    }
                }
            });

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
