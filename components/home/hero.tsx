"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="flex flex-col justify-center px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16 max-w-[1800px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl space-y-5 md:space-y-6"
            >
                <p className="font-serif text-xl md:text-3xl lg:text-4xl leading-[1.35] md:leading-[1.3] text-charcoal">
                    From optimizing chemical reactors to architecting AI platforms — I&apos;ve spent
                    a decade turning messy inputs into <span className="highlight">scalable value</span>.
                </p>
                <p className="font-serif text-xl md:text-3xl lg:text-4xl leading-[1.35] md:leading-[1.3] text-charcoal">
                    Currently{" "}
                    <span className="highlight-alt">building the brain</span> behind Level AI: Conversation Intelligence, 
                    Voice of Customer, agentic RAG systems, and{" "}
                    <span className="highlight">7 Core AI Models</span> that process{" "}
                    <span className="highlight-alt">millions of conversations</span>.
                </p>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-16 md:mt-20"
            >
                <a 
                    href="#work"
                    className="group flex flex-col items-start gap-2 cursor-pointer"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-start gap-2"
                    >
                        <span className="text-xs font-sans uppercase tracking-widest text-soft-gray group-hover:text-charcoal transition-colors">
                            Selected Work
                        </span>
                        <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1.5"
                            className="text-soft-gray group-hover:text-charcoal transition-colors"
                        >
                            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.div>
                </a>
            </motion.div>
        </section>
    );
}
