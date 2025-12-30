"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data";
import Link from "next/link";

// Helper to highlight metrics in category text
function highlightCategoryMetrics(text: string) {
    // Pattern matches percentages, numbers with symbols
    const metricPattern = /(\+?\d+%|\d+[MBK]?\+?)/g;
    const parts = text.split(metricPattern);
    
    return parts.map((part, index) => {
        if (metricPattern.test(part)) {
            metricPattern.lastIndex = 0;
            return <span key={index} className="highlight-metric">{part}</span>;
        }
        return part;
    });
}

export function ProjectList() {
    const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

    const handleMouseEnter = (id: number) => {
        setHoveredProjectId(id);
    };

    const handleMouseLeave = () => {
        setHoveredProjectId(null);
    };

    return (
        <section id="work" className="relative py-20 px-6 md:px-12 max-w-[1800px] mx-auto z-10">
            <div className="flex flex-col gap-0 relative z-20">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        onMouseEnter={() => handleMouseEnter(project.id)}
                        onMouseLeave={handleMouseLeave}
                        className={`group relative py-8 border-b border-subtle-border transition-all duration-300 ${hoveredProjectId && hoveredProjectId !== project.id ? "opacity-40" : "opacity-100"
                            }`}
                    >
                        <Link href={`/work/${project.id}`} className="block w-full h-full">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <div className="flex items-baseline gap-4">
                                    <h3 className="text-3xl md:text-5xl font-serif text-charcoal tracking-normal group-hover:tracking-[0.04em] transition-all duration-300 ease-out">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm md:text-base font-sans text-soft-gray font-medium">
                                        {project.role}
                                    </span>
                                </div>

                                <span className="text-sm font-sans font-semibold uppercase tracking-wide text-soft-gray">
                                    {highlightCategoryMetrics(project.category)}
                                </span>
                            </div>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: hoveredProjectId === project.id ? "auto" : 0,
                                    opacity: hoveredProjectId === project.id ? 1 : 0
                                }}
                                className="overflow-hidden"
                            >
                                <p className="pt-4 text-lg md:text-xl font-sans text-charcoal max-w-2xl leading-relaxed">
                                    {project.description}
                                </p>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
