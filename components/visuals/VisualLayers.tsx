'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function VisualLayers() {
    return (
        <div className="w-full h-full relative flex items-center justify-center bg-transparent overflow-hidden">
            {[0, 1, 2].map((i) => {
                const size = [300, 220, 140][i];
                const opacity = [1, 0.6, 0.3][i];
                // Different durations and directions
                const duration = [20, 25, 18][i];
                const direction = i % 2 === 0 ? 1 : -1;

                return (
                    <motion.div
                        key={i}
                        className="absolute border-2 border-[#1a1a1a] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%]"
                        style={{
                            width: size,
                            height: size,
                            opacity,
                        }}
                        animate={{
                            rotate: direction * 360,
                            borderRadius: [
                                "40% 60% 70% 30% / 40% 50% 60% 50%",
                                "50% 50% 30% 70% / 50% 30% 70% 50%",
                                "30% 70% 50% 50% / 30% 50% 70% 50%",
                                "40% 60% 70% 30% / 40% 50% 60% 50%"
                            ]
                        }}
                        transition={{
                            rotate: { duration: duration, repeat: Infinity, ease: "linear" },
                            borderRadius: { duration: duration / 2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
                        }}
                    />
                )
            })}
        </div>
    )
}
