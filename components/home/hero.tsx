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
                <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] md:leading-[1.15] text-charcoal">
                    From optimizing chemical reactors to architecting AI platforms — I&apos;ve spent
                    a decade turning messy inputs into <span className="highlight">scalable value</span>. Currently{" "}
                    <span className="highlight-alt">building the brain</span> behind Level AI: Conversation Intelligence, 
                    Voice of Customer, agentic RAG systems, and{" "}
                    <span className="highlight">7 Core AI Models</span> that process{" "}
                    <span className="highlight-alt">millions of conversations</span>.
                </p>
            </motion.div>
        </section>
    );
}
