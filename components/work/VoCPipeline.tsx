'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface StageData {
    id: string;
    name: string;
    shortName: string;
    description: string;
    role: string;
    approach: string;
    metric: string;
    tech: string[];
    position: 'center' | 'inner' | 'outer-left' | 'outer-right';
}

const stages: StageData[] = [
    {
        id: 'conversations',
        name: 'Conversations',
        shortName: 'Conversations',
        description: 'Multi-channel customer interactions ingested for analysis.',
        role: 'Defined eligibility thresholds ensuring signal quality—minimum utterance counts for calls, chats, and emails.',
        approach: 'Ingests calls, chats, emails, and SMS. Filters interactions by minimum length requirements to ensure model signal quality.',
        metric: '100% of interactions analyzed vs. 2-5% survey sampling',
        tech: ['Multi-channel Ingestion', 'Eligibility Filtering'],
        position: 'center'
    },
    {
        id: 'ingestion',
        name: 'Ingestion & Base Metrics',
        shortName: 'Ingestion',
        description: 'Compute foundational metrics from raw interactions.',
        role: 'Leveraged Conversation Intelligence pipeline to extract sentiment, resolution, and other base metrics.',
        approach: 'Processes transcripts through CI pipeline to compute sentiment scores, resolution status, and interaction metadata.',
        metric: 'Real-time metric computation',
        tech: ['Sentiment Analysis', 'Resolution Detection', 'Metadata Extraction'],
        position: 'inner'
    },
    {
        id: 'concern',
        name: 'Concern Extraction',
        shortName: 'Concern',
        description: 'LLM generates atomic-level customer concern blurbs.',
        role: 'Defined what a "Customer Concern" captures—the problem statement explaining why the caller contacted the center.',
        approach: 'Fine-tuned LLM generates a concise blurb summarizing the exact customer issue (e.g., "Credit card timeout at checkout").',
        metric: 'One concern extracted per interaction',
        tech: ['8B Parameter LLM', 'Generative Extraction'],
        position: 'inner'
    },
    {
        id: 'topics',
        name: 'Topic Classification',
        shortName: 'Topics',
        description: '4-level taxonomy: Head Topics → Subtopics.',
        role: 'Designed zero-shot generation with customer-editable taxonomies. Custom hierarchies per vertical.',
        approach: 'LLM assigns concerns to Head Topics (~20 per tenant), then semantic similarity assigns to Subtopics (~100 per tenant). Fully customizable per customer.',
        metric: '~90% Head Topic accuracy • ~73-85% Subtopic accuracy',
        tech: ['Zero-shot Classification', 'Semantic Embeddings', 'Centroid Matching'],
        position: 'inner'
    },
    {
        id: 'themes',
        name: 'Theme Generation',
        shortName: 'Themes',
        description: 'Clustering model groups similar concerns into dynamic themes.',
        role: 'Defined daily clustering cadence to surface emerging patterns and recurring issues.',
        approach: 'Clustering algorithm groups semantically similar concerns into "Concern Themes" that cut across conversations. Refreshed daily.',
        metric: 'Daily theme refresh',
        tech: ['Semantic Clustering', 'Dynamic Theme Discovery'],
        position: 'inner'
    },
    {
        id: 'discover',
        name: 'Discover View',
        shortName: 'Discoverers',
        description: 'Story-first dashboards for leadership.',
        role: 'Invented the dual-persona UX based on customer discovery research. Designed "Discoverers" experience for executives.',
        approach: 'AI-generated narrative summaries explain trends and root causes. Treemaps, scatter plots, and insight cards surface "what\'s happening and why."',
        metric: '+14% POC-to-paid conversion',
        tech: ['Narrative Intelligence', 'AI Summaries', 'Insight Cards'],
        position: 'outer-left'
    },
    {
        id: 'table',
        name: 'Table View',
        shortName: 'Navigators',
        description: 'Deep data grids for analysts.',
        role: 'Designed the "Navigators" experience for analysts who need to slice data by metadata and metrics.',
        approach: 'Grouped and ungrouped table layouts with drill-downs. Filter by AHT, Sentiment, Resolution, CES. Evidence highlighting for explainability.',
        metric: '100% coverage (20×+ lift from surveys)',
        tech: ['Data Grids', 'Evidence Highlighting', 'Metric Filtering'],
        position: 'outer-right'
    }
];

function StageNode({ 
    stage, 
    isExpanded, 
    onClick,
    isCenter = false
}: { 
    stage: StageData; 
    isExpanded: boolean; 
    onClick: () => void;
    isCenter?: boolean;
}) {
    return (
        <motion.button
            onClick={onClick}
            className={`
                relative px-4 py-3 border transition-all duration-300 text-left
                ${isCenter 
                    ? 'border-alabaster/30 bg-alabaster/10 hover:bg-alabaster/20 min-w-[140px]' 
                    : 'border-alabaster/20 bg-charcoal hover:bg-alabaster/10'
                }
                ${isExpanded 
                    ? 'border-alabaster/50 bg-alabaster/15 ring-1 ring-alabaster/20' 
                    : ''
                }
                rounded-lg
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className={`
                font-sans text-sm uppercase tracking-wider
                ${isCenter ? 'text-alabaster font-medium' : 'text-alabaster/80'}
                ${isExpanded ? 'text-alabaster' : ''}
            `}>
                {stage.shortName}
            </span>
            {isExpanded && (
                <motion.div 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-alabaster rounded-full"
                    layoutId="indicator"
                />
            )}
        </motion.button>
    );
}

export function VoCPipeline() {
    const [expandedStage, setExpandedStage] = useState<string | null>(null);

    const handleNodeClick = (id: string) => {
        setExpandedStage(expandedStage === id ? null : id);
    };

    const selectedStage = stages.find(s => s.id === expandedStage);

    const centerStage = stages.find(s => s.position === 'center')!;
    const innerStages = stages.filter(s => s.position === 'inner');
    const outerLeftStage = stages.find(s => s.position === 'outer-left')!;
    const outerRightStage = stages.find(s => s.position === 'outer-right')!;

    return (
        <div className="w-full">
            {/* Dark Section Container */}
            <div className="bg-charcoal py-16 px-6 -mx-6 md:-mx-12 lg:-mx-24">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-alabaster mb-4">
                            The VOC Engine
                        </h2>
                        <p className="text-alabaster/60 font-sans max-w-2xl mx-auto">
                            Click on any stage to explore how raw conversations transform into actionable intelligence.
                        </p>
                    </div>

                    {/* Radial Pipeline Visualization */}
                    <div className="flex flex-col items-center gap-6">
                        
                        {/* Center: Conversations */}
                        <div className="relative">
                            <StageNode 
                                stage={centerStage}
                                isExpanded={expandedStage === centerStage.id}
                                onClick={() => handleNodeClick(centerStage.id)}
                                isCenter
                            />
                        </div>

                        {/* Connector Lines - Radiating Out */}
                        <div className="relative w-full max-w-md h-8">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-alabaster/20" />
                        </div>

                        {/* Inner Ring: Processing Stages */}
                        <div className="relative w-full max-w-2xl">
                            {/* Horizontal connector */}
                            <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-alabaster/20 -translate-y-1/2" />
                            
                            {/* Stage nodes in a curved arrangement */}
                            <div className="flex justify-center gap-3 flex-wrap">
                                {innerStages.map((stage, index) => (
                                    <div key={stage.id} className="relative">
                                        {index > 0 && (
                                            <div className="absolute -left-2 top-1/2 w-4 h-px bg-alabaster/20 -translate-y-1/2" />
                                        )}
                                        <StageNode 
                                            stage={stage}
                                            isExpanded={expandedStage === stage.id}
                                            onClick={() => handleNodeClick(stage.id)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Connector Lines - Branching to Outputs */}
                        <div className="relative w-full max-w-lg h-12">
                            {/* Center line down */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-4 bg-alabaster/20" />
                            {/* Horizontal branch */}
                            <div className="absolute top-4 left-1/4 right-1/4 h-px bg-alabaster/20" />
                            {/* Left branch down */}
                            <div className="absolute left-1/4 top-4 w-px h-8 bg-alabaster/20" />
                            {/* Right branch down */}
                            <div className="absolute right-1/4 top-4 w-px h-8 bg-alabaster/20" />
                        </div>

                        {/* Outer Ring: Persona Outputs */}
                        <div className="flex justify-center gap-8 md:gap-16 w-full max-w-lg">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-xs font-sans text-alabaster/40 uppercase tracking-widest">Leadership</span>
                                <StageNode 
                                    stage={outerLeftStage}
                                    isExpanded={expandedStage === outerLeftStage.id}
                                    onClick={() => handleNodeClick(outerLeftStage.id)}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-xs font-sans text-alabaster/40 uppercase tracking-widest">Analysts</span>
                                <StageNode 
                                    stage={outerRightStage}
                                    isExpanded={expandedStage === outerRightStage.id}
                                    onClick={() => handleNodeClick(outerRightStage.id)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Expanded Stage Details */}
                    {selectedStage && (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12"
                        >
                            <div className="border border-alabaster/10 bg-alabaster/5 p-8 rounded-lg">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <span className="text-xs font-sans text-alabaster/50 uppercase tracking-widest block mb-2">
                                            Stage Deep Dive
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-serif text-alabaster">
                                            {selectedStage.name}
                                        </h3>
                                    </div>
                                    <button 
                                        onClick={() => setExpandedStage(null)}
                                        className="p-2 text-alabaster/50 hover:text-alabaster transition-colors"
                                        aria-label="Close details"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <p className="text-alabaster/70 font-sans mb-8 text-lg">
                                    {selectedStage.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* My Role */}
                                    <div>
                                        <span className="text-xs font-sans text-alabaster/50 uppercase tracking-widest block mb-3">
                                            My Role
                                        </span>
                                        <p className="text-alabaster/80 font-sans leading-relaxed">
                                            {selectedStage.role}
                                        </p>
                                    </div>

                                    {/* Approach */}
                                    <div>
                                        <span className="text-xs font-sans text-alabaster/50 uppercase tracking-widest block mb-3">
                                            Approach
                                        </span>
                                        <p className="text-alabaster/80 font-sans leading-relaxed">
                                            {selectedStage.approach}
                                        </p>
                                    </div>
                                </div>

                                {/* Metric */}
                                <div className="mt-8 pt-6 border-t border-alabaster/10">
                                    <span className="text-xs font-sans text-alabaster/50 uppercase tracking-widest block mb-3">
                                        Key Metric
                                    </span>
                                    <p className="text-xl font-serif text-alabaster italic">
                                        {selectedStage.metric}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mt-6">
                                    <span className="text-xs font-sans text-alabaster/50 uppercase tracking-widest block mb-3">
                                        Tech Stack
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedStage.tech.map((t) => (
                                            <span 
                                                key={t} 
                                                className="px-3 py-1 text-sm font-sans text-alabaster/70 border border-alabaster/20 rounded-full"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

