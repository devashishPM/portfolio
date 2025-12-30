"use client";

import { motion, AnimatePresence } from "framer-motion";
import { VisualNetwork } from "@/components/visuals/VisualNetwork";
import { VisualLayers } from "@/components/visuals/VisualLayers";
import { VisualStream } from "@/components/visuals/VisualStream";
import { VisualFocus } from "@/components/visuals/VisualFocus";

interface ProjectVisualsProps {
    activeVisualType: string | null;
}

export function ProjectVisuals({ activeVisualType }: ProjectVisualsProps) {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
            <AnimatePresence mode="wait">
                {activeVisualType && (
                    <motion.div
                        key={activeVisualType}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        {renderVisual(activeVisualType)}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function renderVisual(type: string) {
    switch (type) {
        case "network-graph":
            return <VisualNetwork />;
        case "neural-layers":
            return <VisualLayers />;
        case "chat-stream":
            return <VisualStream />;
        case "search-focus":
            return <VisualFocus />;
        default:
            return null;
    }
}
