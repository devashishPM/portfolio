import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function About() {
    return (
        <main className="min-h-screen bg-alabaster selection:bg-charcoal selection:text-alabaster">
            <Header />
            <section className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-12">
                    <span className="highlight-title">About</span>
                </h1>

                <div className="prose prose-lg prose-neutral font-sans text-soft-gray">
                    {/* Opening */}
                    <p className="text-xl md:text-2xl leading-relaxed text-charcoal font-serif">
                        I&apos;m <span className="highlight">Devashish Shrivastava</span>—a Senior AI Product Manager based in Gurugram, India. I build AI products that don&apos;t just improve workflows, but reimagine them entirely.
                    </p>

                    {/* The Path */}
                    <h3 className="font-serif text-2xl text-charcoal mt-16 mb-6">
                        <span className="highlight-title">The Path</span>
                    </h3>
                    <p>
                        I started as a Chemical Engineer from UICET Chandigarh. But EPC projects and refinery ops didn&apos;t excite me—I wanted to see tangible impact from my work.
                    </p>
                    <p>
                        I pivoted to data analysis, but quickly hit the same wall: it was hard to define the impact I was having. The numbers moved, but I wasn&apos;t sure if I was moving them.
                    </p>
                    <p>
                        Then came the break. My first company was transitioning from services to product, and they needed someone to own a new SaaS platform. My analytical background got me the role—and I discovered product management. <span className="highlight-metric">10 years later</span>, I&apos;m still hooked.
                    </p>

                    {/* What Drives Me */}
                    <h3 className="font-serif text-2xl text-charcoal mt-16 mb-6">
                        <span className="highlight-title">What Drives Me</span>
                    </h3>
                    <p className="text-charcoal">
                        <strong className="font-semibold">Customer conversations.</strong> Hearing first-hand how the products I&apos;ve built impact someone&apos;s day-to-day is incredibly rewarding. It&apos;s why I stay close to users—always.
                    </p>
                    <p className="text-charcoal">
                        <strong className="font-semibold">Simplifying complexity.</strong> I love digging into complex systems and making them simple—from a business, GTM, and customer point of view. Distilling messy problems into clear product initiatives is what I do.
                    </p>
                    <p className="text-charcoal">
                        <strong className="font-semibold">Meaningful impact.</strong> Building products that help users become better versions of themselves. Not just features—real change in how people work and live.
                    </p>

                    {/* How I Work */}
                    <h3 className="font-serif text-2xl text-charcoal mt-16 mb-6">
                        <span className="highlight-title">How I Work</span>
                    </h3>
                    <ul className="list-none pl-0 space-y-6">
                        <li className="text-charcoal">
                            <strong className="font-semibold block mb-1">Revenue is the compass.</strong>
                            <span className="text-soft-gray">The primary goal is helping the business grow by building products customers are willing to pay for—recurringly. Everything else follows.</span>
                        </li>
                        <li className="text-charcoal">
                            <strong className="font-semibold block mb-1">Team = Product.</strong>
                            <span className="text-soft-gray">A product is only as good as the team building it. I invest heavily in hiring, mentoring, and creating clarity for the people I work with.</span>
                        </li>
                        <li className="text-charcoal">
                            <strong className="font-semibold block mb-1">GTM is a lever, not a handoff.</strong>
                            <span className="text-soft-gray">Product managers who partner deeply with sales, CS, and marketing win. I treat GTM collaboration as one of the biggest levers I have.</span>
                        </li>
                    </ul>

                    {/* Why AI */}
                    <h3 className="font-serif text-2xl text-charcoal mt-16 mb-6">
                        <span className="highlight-title">Why AI</span>
                    </h3>
                    <p>
                        Typical products make incremental improvements to a user&apos;s workflow. AI is different—it reimagines the entire workflow. The scale of impact is transformative, not marginal.
                    </p>
                    <p>
                        That&apos;s what drew me deeper into AI product work: LLMs, speech recognition, RAG systems, model evaluation. I&apos;m not chasing the tech—I&apos;m chasing the outsized impact it enables.
                    </p>

                    {/* Skills */}
                    <h3 className="font-serif text-2xl text-charcoal mt-16 mb-6">
                        <span className="highlight-title">Skills</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <strong className="text-charcoal block mb-2 font-semibold">Product & Strategy</strong>
                            <span className="text-soft-gray">0→1 Development, Roadmaps & OKRs, Continuous Discovery, PRDs, Growth & GTM</span>
                        </div>
                        <div>
                            <strong className="text-charcoal block mb-2 font-semibold">AI/ML</strong>
                            <span className="text-soft-gray">LLM Productization, Prompt Engineering, NLP, ASR, RAG, Model Evaluation</span>
                        </div>
                        <div>
                            <strong className="text-charcoal block mb-2 font-semibold">Leadership</strong>
                            <span className="text-soft-gray">Cross-geo Teams, Stakeholder Alignment, Hiring & Mentoring, Executive Storytelling</span>
                        </div>
                        <div>
                            <strong className="text-charcoal block mb-2 font-semibold">Tools</strong>
                            <span className="text-soft-gray">Amplitude, Mixpanel, Figma, Productboard, Jira, Snowflake</span>
                        </div>
                    </div>

                    {/* Education */}
                    <h3 className="font-serif text-2xl text-charcoal mt-16 mb-6">
                        <span className="highlight-title">Education</span>
                    </h3>
                    <p className="text-charcoal">
                        <strong className="font-semibold">BE & MBA (Dual Degree)</strong><br />
                        University Institute of Chemical Engineering & Technology, Chandigarh<br />
                        <span className="text-soft-gray">Chemical Engineering + Marketing · 2010 — 2015</span>
                    </p>

                    {/* Outside Work */}
                    <h3 className="font-serif text-2xl text-charcoal mt-16 mb-6">
                        <span className="highlight-title">Outside Work</span>
                    </h3>
                    <p className="text-charcoal">
                        <strong className="font-semibold">Cricket.</strong> I play, I watch, I follow. All of the above.
                    </p>
                    <p className="text-charcoal">
                        <strong className="font-semibold">Coffee.</strong> Currently deep in the rabbit hole—cold brews, french press, incrementally building a home setup. Very on-brand for a PM who thinks in iterations.
                    </p>
                    <p className="text-charcoal">
                        <strong className="font-semibold">Credit cards.</strong> Points optimizer, travel hacker. Yes, I have a spreadsheet.
                    </p>

                    {/* What I'm Looking For */}
                    <div className="mt-16 pt-8 border-t border-subtle-border/50">
                        <h3 className="font-serif text-2xl text-charcoal mb-6">
                            <span className="highlight-title">What I&apos;m Looking For</span>
                        </h3>
                        <p className="text-charcoal mb-4">
                            I&apos;m open to <strong className="font-semibold">Senior PM</strong>, <strong className="font-semibold">Staff PM</strong>, and <strong className="font-semibold">Head of Product</strong> roles.
                        </p>
                        <ul className="list-none pl-0 space-y-2 text-charcoal">
                            <li className="flex items-start gap-3">
                                <span className="text-soft-gray/60 font-serif italic text-sm mt-0.5">→</span>
                                <span><strong className="font-semibold">Problems:</strong> 0→1 builds and scaling products</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-soft-gray/60 font-serif italic text-sm mt-0.5">→</span>
                                <span><strong className="font-semibold">Location:</strong> Remote or hybrid. Open to relocate.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-soft-gray/60 font-serif italic text-sm mt-0.5">→</span>
                                <span><strong className="font-semibold">Company:</strong> Stage and domain agnostic—I care about the problem.</span>
                            </li>
                        </ul>
                        <p className="text-soft-gray mt-6">
                            If that sounds like a fit, <a href="mailto:devashishshrivastava@gmail.com" className="text-charcoal underline hover:no-underline">let&apos;s talk</a>.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
