"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 pt-32 md:pt-40 max-w-[1800px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
            >
                <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.15] md:leading-[1.1] text-charcoal">
                    From chemical processes to neural networks, my career is defined by one
                    obsession: turning raw inputs into scalable value. I am a Senior PM at
                    Level AI, building the &apos;brain&apos; behind the platform—from Voice of
                    Customer engines to zero-trust security layers.
                </p>
            </motion.div>
        </section>
    );
}
