"use client";

import { workHistory } from "@/app/data";

// Helper to highlight metrics in text
function highlightMetrics(text: string) {
    // Pattern matches percentages, numbers with +/-, dollar amounts, and key metrics
    const metricPattern = /(\+?\d+%|\$\d+[MBK]?\+?|\d+[MBK]\+?|\d+→\d+|0→1|\d+\+?\s*(DAUs?|customers?|accounts?|stakeholders?|engineers?|integrations?))/gi;
    
    const parts = text.split(metricPattern);
    
    return parts.map((part, index) => {
        if (metricPattern.test(part)) {
            metricPattern.lastIndex = 0; // Reset regex
            return <span key={index} className="highlight-metric">{part}</span>;
        }
        return part;
    });
}

// Helper to split text into sentences and render with spacing
function renderSentences(text: string) {
    // Split by period followed by space (preserves periods in abbreviations like "0→1")
    const sentences = text.split(/(?<=\.)\s+/).filter(s => s.trim());
    
    return sentences.map((sentence, index) => (
        <span key={index} className="block mb-2 last:mb-0">
            {highlightMetrics(sentence)}
        </span>
    ));
}

export function Experience() {
    return (
        <section className="py-20 px-6 md:px-12 max-w-[1800px] mx-auto">
            <h2 className="text-sm font-sans uppercase tracking-widest mb-8">
                <span className="highlight-title">Experience</span>
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
                        <div className="md:col-span-4 font-semibold text-charcoal text-lg">
                            <span className="highlight">{role.company}</span> — {role.role}
                        </div>
                        <div className="md:col-span-6 text-soft-gray leading-relaxed">
                            {renderSentences(role.impact)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
