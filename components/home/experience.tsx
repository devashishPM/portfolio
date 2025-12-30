"use client";

import { workHistory } from "@/app/data";

export function Experience() {
    return (
        <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto">
            <h2 className="text-sm font-sans font-bold uppercase tracking-widest mb-8 text-soft-gray">
                Experience
            </h2>
            <div className="grid grid-cols-1 gap-8">
                {workHistory.map((role, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-4 border-b border-subtle-border/50 last:border-none"
                    >
                        <div className="md:col-span-2 text-soft-gray/60 font-serif italic text-lg">
                            {role.year}
                        </div>
                        <div className="md:col-span-4 font-bold text-charcoal text-lg">
                            {role.company} — {role.role}
                        </div>
                        <div className="md:col-span-6 text-soft-gray leading-relaxed">
                            {role.impact}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
