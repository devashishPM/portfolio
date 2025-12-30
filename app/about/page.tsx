import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { achievements } from "@/app/data";

export default function About() {
    return (
        <main className="min-h-screen bg-alabaster selection:bg-charcoal selection:text-alabaster">
            <Header />
            <section className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-12">
                    About
                </h1>

                <div className="prose prose-lg prose-neutral font-sans text-soft-gray">
                    <p className="text-xl leading-relaxed text-charcoal">
                        I&apos;m Devashish Shrivastava—a Senior AI Product Manager based in Gurugram, currently leading product at Level AI.
                    </p>
                    <p>
                        I started my career as a Chemical Engineer from UICET Chandigarh, one of India&apos;s premier institutes. That background taught me something fundamental: complex systems can be understood, optimized, and scaled. I hold a dual degree in Chemical Engineering and Marketing—a combination that lets me speak fluently to both engineers and GTM teams.
                    </p>
                    <p>
                        Over the past decade, I&apos;ve built products from zero, scaled platforms to thousands of daily users, and influenced $10M+ in ARR. I obsess over customer problems, move fast on 0→1, and measure everything by revenue impact.
                    </p>

                    <h3 className="font-serif text-2xl text-charcoal mt-12 mb-6">What I Do</h3>
                    <p>
                        At Level AI, I own the platform&apos;s core intelligence stack—seven AI models that power everything from speech recognition to automated quality assurance:
                    </p>
                    <ul className="list-none pl-0 space-y-2 text-charcoal">
                        <li><strong>ASR</strong> — Speech-to-text for millions of conversations</li>
                        <li><strong>Voice of Customer</strong> — LLM-powered topic classification</li>
                        <li><strong>Intent Detection</strong> — Customer goal identification</li>
                        <li><strong>Sentiment & iCSAT</strong> — Granular emotion and effort scoring</li>
                        <li><strong>Redaction</strong> — Zero-trust PII/PCI masking</li>
                        <li><strong>Summarization</strong> — Abstractive conversation summaries</li>
                        <li><strong>AutoQA</strong> — Automated quality assurance scoring</li>
                    </ul>

                    <h3 className="font-serif text-2xl text-charcoal mt-12 mb-6">What I Do Best</h3>
                    <ul className="list-none pl-0 space-y-4">
                        <li>
                            <strong className="text-charcoal">0→1 Product Development</strong>
                            <span className="block">Built Insightsfirst from MVP to 20+ enterprise customers in year one. Shipped Voice of Customer and Agentic RAG from concept to 70% customer adoption.</span>
                        </li>
                        <li>
                            <strong className="text-charcoal">Revenue-Driven PM</strong>
                            <span className="block">My work directly moves metrics: +14% POC-to-paid conversion, +18% upsell revenue, 65% feature adoption in two quarters.</span>
                        </li>
                        <li>
                            <strong className="text-charcoal">Customer Obsession</strong>
                            <span className="block">Continuous discovery loops that turned 55% CSAT into 80%. In-app surveys, weekly releases, and relentless iteration.</span>
                        </li>
                    </ul>

                    <h3 className="font-serif text-2xl text-charcoal mt-12 mb-6">Selected Achievements</h3>
                    <div className="space-y-8">
                        {achievements.map((group) => (
                            <div key={group.company}>
                                <h4 className="font-sans font-bold text-charcoal text-sm uppercase tracking-widest mb-3">
                                    {group.company}
                                </h4>
                                <ul className="list-none pl-0 space-y-2">
                                    {group.items.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-charcoal">
                                            <span className="text-soft-gray/60 font-serif italic text-sm mt-0.5">→</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <h3 className="font-serif text-2xl text-charcoal mt-12 mb-6">Experience</h3>
                    <ul className="list-none pl-0 space-y-6">
                        <li>
                            <strong className="block text-charcoal">Level AI</strong>
                            <span className="text-sm">Senior AI Product Manager (2025 — Present)</span>
                            <span className="block text-soft-gray mt-1">Own the core AI platform: ASR, VoC, Intent, Sentiment, Redaction, Summarization, AutoQA. Led 45+ cross-functional stakeholders across 3 time zones.</span>
                        </li>
                        <li>
                            <strong className="block text-charcoal">Contify</strong>
                            <span className="text-sm">Head of Product (2022 — 2025)</span>
                            <span className="block text-soft-gray mt-1">Scaled enterprise search to 5K DAUs. Built LLM content pipeline. Grew PM org from 1 to 7.</span>
                        </li>
                        <li>
                            <strong className="block text-charcoal">Analec</strong>
                            <span className="text-sm">Product Manager (2020 — 2022)</span>
                            <span className="block text-soft-gray mt-1">Instituted continuous discovery. CSAT 55% → 80%. Shipped CRM personalization with +18% usage growth.</span>
                        </li>
                        <li>
                            <strong className="block text-charcoal">Evalueserve</strong>
                            <span className="text-sm">Product Owner (2015 — 2020)</span>
                            <span className="block text-soft-gray mt-1">Built Insightsfirst from 0→1. First enterprise customer in 3 months, 20+ in year one.</span>
                        </li>
                    </ul>

                    <h3 className="font-serif text-2xl text-charcoal mt-12 mb-6">Education</h3>
                    <p className="text-charcoal">
                        <strong>BE & MBA (Dual Degree)</strong><br />
                        University Institute of Chemical Engineering & Technology, Chandigarh<br />
                        <span className="text-soft-gray">Chemical Engineering + Marketing · 2010 — 2015</span>
                    </p>

                    <h3 className="font-serif text-2xl text-charcoal mt-12 mb-6">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <strong className="text-charcoal block mb-2">Product & Strategy</strong>
                            <span className="text-soft-gray">Roadmaps & OKRs, JTBD, Continuous Discovery, PRDs, Growth & GTM, Metric Instrumentation</span>
                        </div>
                        <div>
                            <strong className="text-charcoal block mb-2">AI/ML</strong>
                            <span className="text-soft-gray">LLM Productization, Prompt Engineering & Eval, NLP, ASR, RAG Search, Experimentation</span>
                        </div>
                        <div>
                            <strong className="text-charcoal block mb-2">Leadership</strong>
                            <span className="text-soft-gray">Cross-geo Execution, Stakeholder Alignment, Hiring & Mentoring, Exec Storytelling</span>
                        </div>
                        <div>
                            <strong className="text-charcoal block mb-2">Tools</strong>
                            <span className="text-soft-gray">Amplitude, Mixpanel, Figma, Productboard, Jira, Snowflake, Elasticsearch</span>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-subtle-border/50">
                        <p className="text-charcoal">
                            Open to Senior PM, Staff PM, and Head of Product roles—remote or on-site in India or the US.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
