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
    },
    {
        id: 'concern',
        name: 'Concern Extraction',
        shortName: 'Concerns',
        description: 'LLM generates atomic-level customer concern blurbs.',
        role: 'Defined what a "Customer Concern" captures—the problem statement explaining why the caller contacted the center.',
        approach: 'Fine-tuned LLM generates a concise blurb summarizing the exact customer issue (e.g., "Credit card timeout at checkout").',
        metric: 'One concern extracted per interaction',
        tech: ['8B Parameter LLM', 'Generative Extraction'],
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
    }
];

// Funnel stage component
function FunnelStage({ 
    stage, 
    isExpanded, 
    onClick,
    width,
    isFirst = false,
    isLast = false,
    delay = 0
}: { 
    stage: StageData; 
    isExpanded: boolean; 
    onClick: () => void;
    width: string;
    isFirst?: boolean;
    isLast?: boolean;
    delay?: number;
}) {
    return (
        <motion.button
            onClick={onClick}
            className={`
                relative py-4 px-6 transition-all duration-300
                ${isExpanded 
                    ? 'bg-alabaster/15 border-alabaster/40' 
                    : 'bg-alabaster/5 border-alabaster/15 hover:bg-alabaster/10 hover:border-alabaster/25'
                }
                border
                ${isFirst ? 'rounded-t-lg' : ''}
                ${isLast ? 'rounded-b-lg' : ''}
            `}
            style={{ width }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
        >
            <span className={`
                font-sans text-sm uppercase tracking-widest
                ${isExpanded ? 'text-alabaster font-medium' : 'text-alabaster/70'}
            `}>
                {stage.shortName}
            </span>
            {isExpanded && (
                <motion.div 
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-alabaster rounded-full"
                    layoutId="funnel-indicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                />
            )}
        </motion.button>
    );
}

// Fork output component
function ForkOutput({ 
    stage, 
    isExpanded, 
    onClick,
    side,
    delay = 0
}: { 
    stage: StageData; 
    isExpanded: boolean; 
    onClick: () => void;
    side: 'left' | 'right';
    delay?: number;
}) {
    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
        >
            {/* Fork line */}
            <div className={`
                w-px h-8 bg-gradient-to-b from-alabaster/20 to-alabaster/10
            `} />
            
            {/* Output button */}
            <motion.button
                onClick={onClick}
                className={`
                    relative py-4 px-8 rounded-lg transition-all duration-300
                    ${isExpanded 
                        ? 'bg-alabaster/15 border-alabaster/40' 
                        : 'bg-alabaster/5 border-alabaster/15 hover:bg-alabaster/10 hover:border-alabaster/25'
                    }
                    border
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="text-xs font-sans text-alabaster/40 uppercase tracking-widest block mb-1">
                    {side === 'left' ? 'Leadership' : 'Analysts'}
                </span>
                <span className={`
                    font-sans text-sm uppercase tracking-widest
                    ${isExpanded ? 'text-alabaster font-medium' : 'text-alabaster/70'}
                `}>
                    {stage.shortName}
                </span>
                {isExpanded && (
                    <motion.div 
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-alabaster rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    />
                )}
            </motion.button>
        </motion.div>
    );
}

export function VoCPipeline() {
    const [expandedStage, setExpandedStage] = useState<string | null>(null);

    const handleNodeClick = (id: string) => {
        setExpandedStage(expandedStage === id ? null : id);
    };

    const selectedStage = stages.find(s => s.id === expandedStage);

    // Funnel widths (narrowing)
    const funnelWidths = ['100%', '88%', '76%', '64%', '52%'];
    
    // Processing stages (first 5)
    const processingStages = stages.slice(0, 5);
    
    // Output stages (last 2)
    const outputStages = stages.slice(5);

    return (
        <div className="w-full">
            {/* Dark Section Container */}
            <div className="bg-charcoal py-16 px-6 -mx-6 md:-mx-12 lg:-mx-24">
                <div className="max-w-2xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-alabaster mb-4">
                            The VoC Engine
                        </h2>
                        <p className="text-alabaster/60 font-sans max-w-xl mx-auto">
                            Raw conversations refined into actionable intelligence, then delivered to the right audience.
                        </p>
                    </div>

                    {/* Funnel Visualization */}
                    <div className="flex flex-col items-center">
                        {/* Processing Funnel */}
                        {processingStages.map((stage, index) => (
                            <React.Fragment key={stage.id}>
                                <FunnelStage
                                    stage={stage}
                                    isExpanded={expandedStage === stage.id}
                                    onClick={() => handleNodeClick(stage.id)}
                                    width={funnelWidths[index]}
                                    isFirst={index === 0}
                                    isLast={index === processingStages.length - 1}
                                    delay={index * 0.1}
                                />
                                {index < processingStages.length - 1 && (
                                    <motion.div 
                                        className="w-px h-2 bg-alabaster/20"
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ delay: index * 0.1 + 0.05 }}
                                    />
                                )}
                            </React.Fragment>
                        ))}

                        {/* Fork Section */}
                        <div className="relative w-full mt-2">
                            {/* Fork connector */}
                            <svg 
                                viewBox="0 0 200 40" 
                                className="w-full max-w-xs mx-auto h-10"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <motion.path
                                    d="M 100,0 L 100,15 M 100,15 C 100,25 50,25 50,40 M 100,15 C 100,25 150,25 150,40"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.2)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                />
                            </svg>

                            {/* Fork Outputs */}
                            <div className="flex justify-center gap-8 md:gap-16">
                                <ForkOutput
                                    stage={outputStages[0]}
                                    isExpanded={expandedStage === outputStages[0].id}
                                    onClick={() => handleNodeClick(outputStages[0].id)}
                                    side="left"
                                    delay={0.6}
                                />
                                <ForkOutput
                                    stage={outputStages[1]}
                                    isExpanded={expandedStage === outputStages[1].id}
                                    onClick={() => handleNodeClick(outputStages[1].id)}
                                    side="right"
                                    delay={0.7}
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
