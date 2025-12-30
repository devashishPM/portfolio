'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ModelData {
    id: string;
    name: string;
    shortName: string;
    problem: string;
    role: string;
    approach: string;
    metric: string;
    tech: string[];
}

const models: ModelData[] = [
    {
        id: 'asr',
        name: 'Automatic Speech Recognition',
        shortName: 'ASR',
        problem: 'Transcription accuracy issues across varying audio qualities, accents, and industry-specific terminology were limiting downstream AI capabilities.',
        role: 'Defined the core problems in the transcription engine, collaborated with MLEs on model selection, owned the evaluation framework, and shipped the production UX.',
        approach: 'Fine-tuned Conformer-based architecture with intelligent audio segmentation (10-15s chunks), multi-stage refinement pipeline, and targeted training on contact center conversations.',
        metric: '7M hours of audio processed monthly • 8-10% WER',
        tech: ['Conformer-based ASR', 'Multi-scale Speech Models (0.6B–1.1B)', 'Voice Activity Detection']
    },
    {
        id: 'redaction',
        name: 'PII/PCI Redaction',
        shortName: 'Redaction',
        problem: 'Compliance gaps with existing rule-based systems, high false positive rates, and inability to detect new entity types without manual configuration.',
        role: 'Designed the hybrid regex + zero-shot LLM approach, owned the evaluation framework, and shipped the UX for both transcript and audio redaction.',
        approach: 'Dynamic entity recognition using prompt-based architecture—new entity types can be added without model retraining. Dual-layer protection masks both text and audio.',
        metric: '97% recall on sensitive entity detection',
        tech: ['3B Parameter LLM', 'Zero-shot Entity Recognition', 'Dual-layer Audio/Text Masking']
    },
    {
        id: 'intent',
        name: 'Intent Detection',
        shortName: 'Intent',
        problem: 'Keyword-based systems failed on nuanced language, required endless manual tuning, and couldn\'t distinguish similar phrases with opposite meanings.',
        role: 'Designed the dual-model strategy for simple vs. complex intents, owned evaluation, and shipped both the UX and customer-facing configuration workflow.',
        approach: 'LLM-based classification for complex intents requiring context; Retrieve-Rerank pipeline for high-volume simple intents. Evidence highlighting for explainability.',
        metric: 'Replaced weeks of keyword tuning with set-and-forget configuration',
        tech: ['3B Parameter LLM', 'Sentence Transformer', 'Cross-encoder Reranker']
    },
    {
        id: 'summarization',
        name: 'Summarization',
        shortName: 'Summary',
        problem: 'Agents spent excessive time on after-call work, notes were inconsistent across the team, and critical details were frequently missed.',
        role: 'Drove structured output format, designed customizable summary sections, owned evaluation, and shipped the user-facing workflow.',
        approach: 'Zero-shot fine-tuned LLM generating structured, customizable summaries. Captures customer queries, solutions, commitments, and next steps in consistent format.',
        metric: 'Drastically reduced After-Call Work (ACW) time',
        tech: ['4B Small Language Model', 'Structured Output Framework', 'Domain-specific Fine-tuning']
    },
    {
        id: 'icsat',
        name: 'Inferred CSAT',
        shortName: 'iCSAT',
        problem: 'Only 5% of conversations received CSAT scores due to low survey response rates, creating massive blind spots in customer satisfaction visibility.',
        role: 'Invented the inferred CSAT methodology—defining how to combine multiple signals into a predictive satisfaction score.',
        approach: 'Combines Customer Effort Score (CES), granular sentiment analysis, and resolution detection. Validated against actual survey scores to ensure predictive accuracy.',
        metric: '0.71 correlation with actual CSAT • 100% coverage (20× lift from 5%)',
        tech: ['1B Parameter LLM', 'Transformer Encoder', 'Preference Optimization', 'Knowledge Distillation']
    },
    {
        id: 'autoqa',
        name: 'Automated Quality Assurance',
        shortName: 'AutoQA',
        problem: 'QA teams reviewed only 2-5% of calls, sampling bias missed compliance risks, and manual scoring was inconsistent across evaluators.',
        role: 'Drove rubric customization framework, designed evidence-linking for explainability, and architected the dual-LLM approach.',
        approach: 'Dual-LLM architecture: 7B model for complex evaluation, 2B model for high-volume scoring. Links every score to specific transcript evidence for coaching.',
        metric: '88% accuracy across all rubrics • 100% call coverage',
        tech: ['7B Instruction-tuned LLM', '2B Small Language Model', 'Custom Rubric Framework']
    }
];

export function AIModelPipeline() {
    const [expandedModel, setExpandedModel] = useState<string | null>(null);

    const handleNodeClick = (modelId: string) => {
        setExpandedModel(expandedModel === modelId ? null : modelId);
    };

    const selectedModel = models.find(m => m.id === expandedModel);

    return (
        <div className="w-full">
            {/* Pipeline Visualization */}
            <div className="relative py-12">
                {/* Main Flow Container */}
                <div className="flex flex-col items-center gap-8">
                    
                    {/* Input Node */}
                    <div className="flex items-center gap-4">
                        <div className="px-6 py-3 border-2 border-charcoal/20 rounded-full">
                            <span className="font-sans text-sm text-soft-gray uppercase tracking-widest">Audio Input</span>
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="w-px h-8 bg-charcoal/20" />

                    {/* ASR Node (Foundation) */}
                    <PipelineNode 
                        model={models[0]} 
                        isExpanded={expandedModel === 'asr'}
                        onClick={() => handleNodeClick('asr')}
                        isFoundation
                    />

                    {/* Connector Line to Redaction */}
                    <div className="w-px h-8 bg-charcoal/20" />

                    {/* Redaction Node (Compliance - must be first after ASR) */}
                    <div className="w-full max-w-md">
                        <PipelineNode 
                            model={models[1]} 
                            isExpanded={expandedModel === 'redaction'}
                            onClick={() => handleNodeClick('redaction')}
                            isFoundation
                        />
                    </div>

                    {/* Connector with Branch to parallel models */}
                    <div className="relative w-full max-w-2xl">
                        <div className="absolute left-1/2 -translate-x-1/2 w-px h-8 bg-charcoal/20" />
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-px bg-charcoal/20" />
                        {/* Branch endpoints for 4 parallel models */}
                        <div className="absolute top-8 left-[12.5%] w-px h-8 bg-charcoal/20" />
                        <div className="absolute top-8 left-[37.5%] w-px h-8 bg-charcoal/20" />
                        <div className="absolute top-8 left-[62.5%] w-px h-8 bg-charcoal/20" />
                        <div className="absolute top-8 left-[87.5%] w-px h-8 bg-charcoal/20" />
                        <div className="h-16" />
                    </div>

                    {/* Parallel Processing Models (Intent, Summary, iCSAT, AutoQA) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
                        {models.slice(2).map((model) => (
                            <PipelineNode
                                key={model.id}
                                model={model}
                                isExpanded={expandedModel === model.id}
                                onClick={() => handleNodeClick(model.id)}
                            />
                        ))}
                    </div>

                    {/* Connector with Merge */}
                    <div className="relative w-full max-w-2xl">
                        <div className="absolute top-0 left-[12.5%] w-px h-8 bg-charcoal/20" />
                        <div className="absolute top-0 left-[37.5%] w-px h-8 bg-charcoal/20" />
                        <div className="absolute top-0 left-[62.5%] w-px h-8 bg-charcoal/20" />
                        <div className="absolute top-0 left-[87.5%] w-px h-8 bg-charcoal/20" />
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-px bg-charcoal/20" />
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-charcoal/20" />
                        <div className="h-16" />
                    </div>

                    {/* Output Node - Intelligence Layer */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="px-6 py-3 border-2 border-charcoal/30 rounded-full bg-charcoal/[0.02]">
                            <span className="font-sans text-sm text-charcoal uppercase tracking-widest font-medium">Intelligence Layer</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap justify-center">
                            <span className="px-3 py-1 text-xs font-sans text-soft-gray border border-charcoal/10 rounded-full">Voice of Customer</span>
                            <span className="px-3 py-1 text-xs font-sans text-soft-gray border border-charcoal/10 rounded-full">Agentic RAG</span>
                            <span className="px-3 py-1 text-xs font-sans text-soft-gray border border-charcoal/10 rounded-full">Platform Analytics</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expanded Model Details */}
            {selectedModel && (
                <div className="animate-fadeIn">
                        <div className="mt-8 p-8 border border-charcoal/10 bg-alabaster">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="text-xs font-sans text-soft-gray uppercase tracking-widest block">
                                        Model Deep Dive
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-serif text-charcoal mt-2">
                                        {selectedModel.name}
                                    </h3>
                                </div>
                                <button 
                                    onClick={() => setExpandedModel(null)}
                                    className="p-2 text-soft-gray hover:text-charcoal transition-colors flex-shrink-0"
                                    aria-label="Close details"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M15 5L5 15M5 5l10 10" />
                                    </svg>
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-soft-gray mb-3">
                                            The Problem
                                        </h4>
                                        <p className="font-sans text-charcoal leading-relaxed">
                                            {selectedModel.problem}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-soft-gray mb-3">
                                            My Role
                                        </h4>
                                        <p className="font-sans text-charcoal leading-relaxed">
                                            {selectedModel.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-soft-gray mb-3">
                                            Approach
                                        </h4>
                                        <p className="font-sans text-charcoal leading-relaxed">
                                            {selectedModel.approach}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-soft-gray mb-3">
                                            Key Metric
                                        </h4>
                                        <p className="font-serif text-xl text-charcoal italic">
                                            {selectedModel.metric}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-soft-gray mb-3">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedModel.tech.map((t, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-3 py-1.5 bg-charcoal/5 text-charcoal font-sans text-sm rounded-full"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )}
        </div>
    );
}

interface PipelineNodeProps {
    model: ModelData;
    isExpanded: boolean;
    onClick: () => void;
    isFoundation?: boolean;
}

function PipelineNode({ model, isExpanded, onClick, isFoundation }: PipelineNodeProps) {
    return (
        <motion.button
            onClick={onClick}
            className={`
                relative group w-full
                ${isFoundation 
                    ? 'px-8 py-4 border-2' 
                    : 'px-4 py-3 border'
                }
                ${isExpanded 
                    ? 'border-charcoal bg-charcoal text-alabaster' 
                    : 'border-charcoal/30 bg-transparent text-charcoal hover:border-charcoal hover:bg-charcoal/5'
                }
                transition-all duration-200
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className={`
                font-sans text-sm uppercase tracking-wider
                ${isFoundation ? 'font-medium' : ''}
            `}>
                {model.shortName}
            </span>
            
            {/* Expand Indicator */}
            <motion.span
                className={`
                    absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full
                    ${isExpanded ? 'bg-charcoal' : 'bg-charcoal/30 opacity-0 group-hover:opacity-100'}
                    transition-opacity
                `}
                animate={{ y: isExpanded ? 4 : 0 }}
            />
        </motion.button>
    );
}

