"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data";
import { ProjectVisuals } from "./project-visuals";
import Link from "next/link";

export function ProjectList() {
    const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
    const [activeVisualType, setActiveVisualType] = useState<string | null>(null);

    const handleMouseEnter = (id: number, visualType: string) => {
        setHoveredProjectId(id);
        setActiveVisualType(visualType);
    };

    const handleMouseLeave = () => {
        setHoveredProjectId(null);
        setActiveVisualType(null);
    };

    return (
        <section id="work" className="relative py-20 px-6 md:px-12 max-w-[1800px] mx-auto z-10">
            <ProjectVisuals activeVisualType={activeVisualType} />

            <div className="flex flex-col gap-0 relative z-20">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        onMouseEnter={() => handleMouseEnter(project.id, project.visualType || '')}
                        onMouseLeave={handleMouseLeave}
                        className={`group relative py-8 border-b border-subtle-border transition-all duration-300 ${hoveredProjectId && hoveredProjectId !== project.id ? "opacity-40" : "opacity-100"
                            }`}
                    >
                        <Link href={`/work/${project.id}`} className="block w-full h-full">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <div className="flex items-baseline gap-4">
                                    <h3 className="text-3xl md:text-5xl font-serif text-charcoal group-hover:italic transition-all">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm md:text-base font-sans text-soft-gray">
                                        {project.role}
                                    </span>
                                </div>

                                <span className="text-sm font-sans font-medium uppercase tracking-wide text-soft-gray">
                                    {project.category}
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
                                <p className="pt-4 text-lg md:text-xl font-sans text-charcoal max-w-2xl">
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
