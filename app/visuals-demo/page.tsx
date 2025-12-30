'use client';

import React from 'react';
import { VisualNetwork } from '@/components/visuals/VisualNetwork';
import { VisualLayers } from '@/components/visuals/VisualLayers';
import { VisualStream } from '@/components/visuals/VisualStream';
import { VisualFocus } from '@/components/visuals/VisualFocus';

export default function VisualsDemoPage() {
    return (
        <div className="min-h-screen bg-[#F4F4F0] p-8 text-[#1a1a1a] font-sans">
            <h1 className="text-4xl font-bold mb-8 text-center">Living Ink Visual System</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto h-[800px]">

                {/* VisualNetwork */}
                <div className="flex flex-col h-full border border-[#1a1a1a]/10 rounded-lg p-4 bg-white shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]/70">1. VisualNetwork (Voice of Customer)</h2>
                    <div className="flex-grow w-full h-[300px] border border-dashed border-[#1a1a1a]/20 rounded relative">
                        <VisualNetwork />
                    </div>
                    <p className="mt-2 text-sm text-[#1a1a1a]/50">Nodes drift & connect. Mouse repels.</p>
                </div>

                {/* VisualLayers */}
                <div className="flex flex-col h-full border border-[#1a1a1a]/10 rounded-lg p-4 bg-white shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]/70">2. VisualLayers (Core AI)</h2>
                    <div className="flex-grow w-full h-[300px] border border-dashed border-[#1a1a1a]/20 rounded relative">
                        <VisualLayers />
                    </div>
                    <p className="mt-2 text-sm text-[#1a1a1a]/50">3 Rings rotating organically. Opacity layers.</p>
                </div>

                {/* VisualStream */}
                <div className="flex flex-col h-full border border-[#1a1a1a]/10 rounded-lg p-4 bg-white shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]/70">3. VisualStream (Agentic RAG)</h2>
                    <div className="flex-grow w-full h-[300px] border border-dashed border-[#1a1a1a]/20 rounded relative">
                        <VisualStream />
                    </div>
                    <p className="mt-2 text-sm text-[#1a1a1a]/50">Particles flow up. Mouse X controls speed.</p>
                </div>

                {/* VisualFocus */}
                <div className="flex flex-col h-full border border-[#1a1a1a]/10 rounded-lg p-4 bg-white shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 text-[#1a1a1a]/70">4. VisualFocus (Intelligence Search)</h2>
                    <div className="flex-grow w-full h-[300px] border border-dashed border-[#1a1a1a]/20 rounded relative">
                        <VisualFocus />
                    </div>
                    <p className="mt-2 text-sm text-[#1a1a1a]/50">Chaos to Order lens. Hover to snap grid.</p>
                </div>

            </div>
        </div>
    );
}
