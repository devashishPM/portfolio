import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { projects } from "@/app/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AIModelPipeline } from "@/components/work/AIModelPipeline";
import { VoCPipeline } from "@/components/work/VoCPipeline";

// Helper to split text into sentences and render with spacing
function renderSentences(text: string) {
    // Split by period followed by space (preserves periods in abbreviations)
    const sentences = text.split(/(?<=\.)\s+/).filter(s => s.trim());
    
    return sentences.map((sentence, index) => (
        <span key={index} className="block mb-3 last:mb-0">
            {sentence}
        </span>
    ));
}

interface CaseStudy {
    problem: string;
    solution: string;
    impact: string[];
    techStack: string[];
}

interface Project {
    id: number;
    title: string;
    role: string;
    category: string;
    description: string;
    visualType: string;
    isFeatured?: boolean;
    hasCaseStudy?: boolean;
    hasInteractivePipeline?: boolean;
    hasVoCPipeline?: boolean;
    caseStudy?: CaseStudy;
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = projects.find((p: Project) => p.id.toString() === params.id) as Project | undefined;

    if (!project) {
        notFound();
    }

    const hasCaseStudy = project.hasCaseStudy && project.caseStudy;

    return (
        <main className="min-h-screen bg-alabaster selection:bg-charcoal selection:text-alabaster">
            <Header />
            <section className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link 
                        href="/#work" 
                        className="text-sm font-sans text-soft-gray hover:text-charcoal transition-colors uppercase tracking-widest"
                    >
                        ← Back to Work
                    </Link>
                </div>

                {/* Header */}
                    <div className="mb-12">
                    <span className="text-sm font-sans font-semibold uppercase tracking-widest mb-4 block">
                        <span className="highlight">{project.role}</span>
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl font-sans text-soft-gray font-medium">
                        {project.category}
                    </p>
                </div>

                {hasCaseStudy ? (
                    /* Full Case Study Layout */
                    <div className="space-y-16">
                        {/* Overview */}
                        <div>
                            <p className="text-xl md:text-2xl font-serif leading-relaxed text-charcoal">
                                {project.description}
                            </p>
                        </div>

                        {/* Interactive Pipeline for Core AI Platform */}
                        {project.hasInteractivePipeline && (
                            <div>
                                <h2 className="text-sm font-sans uppercase tracking-widest mb-6">
                                    <span className="highlight-title">The AI Stack</span>
                                </h2>
                                <p className="text-lg font-sans leading-relaxed text-charcoal mb-8">
                                    Click on any model to explore the problem it solves, my role, and the technical approach.
                                </p>
                                <AIModelPipeline />
                            </div>
                        )}

                        {/* Interactive Pipeline for Voice of Customer */}
                        {(project as Project & { hasVoCPipeline?: boolean }).hasVoCPipeline && (
                            <VoCPipeline />
                        )}

                        {/* Problem */}
                        <div>
                            <h2 className="text-sm font-sans uppercase tracking-widest mb-6">
                                <span className="highlight-title">The Problem</span>
                            </h2>
                            <div className="text-lg font-sans leading-relaxed text-charcoal">
                                {renderSentences(project.caseStudy!.problem)}
                            </div>
                        </div>

                        {/* Solution */}
                        <div>
                            <h2 className="text-sm font-sans uppercase tracking-widest mb-6">
                                <span className="highlight-title">The Solution</span>
                            </h2>
                            <div className="text-lg font-sans leading-relaxed text-charcoal">
                                {renderSentences(project.caseStudy!.solution)}
                            </div>
                        </div>

                        {/* Impact */}
                        <div>
                            <h2 className="text-sm font-sans uppercase tracking-widest mb-6">
                                <span className="highlight-title">Impact</span>
                            </h2>
                            <ul className="space-y-4">
                                {project.caseStudy!.impact.map((item: string, index: number) => (
                                    <li 
                                        key={index}
                                        className="flex items-start gap-4 text-lg font-sans text-charcoal"
                                    >
                                        <span className="highlight-metric font-serif italic">0{index + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h2 className="text-sm font-sans uppercase tracking-widest mb-6">
                                <span className="highlight-title">Tech & Methods</span>
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.caseStudy!.techStack.map((tech: string, index: number) => (
                                    <span 
                                        key={index}
                                        className="px-4 py-2 bg-charcoal/10 text-charcoal font-sans text-sm font-semibold rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Simple Layout for projects without full case study */
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="col-span-1">
                            <h3 className="font-sans font-medium text-charcoal mb-4 uppercase text-xs tracking-widest">Role</h3>
                            <p className="font-sans text-soft-gray mb-8">{project.role}</p>

                            <h3 className="font-sans font-medium text-charcoal mb-4 uppercase text-xs tracking-widest">Impact</h3>
                            <p className="font-sans text-soft-gray mb-8">{project.category}</p>
                        </div>

                        <div className="col-span-2 prose prose-neutral font-sans text-soft-gray">
                            <p className="text-lg leading-relaxed text-charcoal">
                                {project.description}
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation to other projects */}
                <div className="mt-24 pt-12 border-t border-subtle-border/50">
                    <h3 className="text-sm font-sans uppercase tracking-widest mb-8">
                        <span className="highlight-title">More Work</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects
                            .filter((p: Project) => p.id !== project.id && p.hasCaseStudy)
                            .slice(0, 2)
                            .map((p: Project) => (
                                <Link 
                                    key={p.id}
                                    href={`/work/${p.id}`}
                                    className="group p-6 border border-subtle-border/50 hover:border-charcoal/30 hover:bg-charcoal/[0.02] transition-all"
                                >
                                    <span className="text-xs font-sans text-soft-gray uppercase tracking-widest font-medium">
                                        {p.role}
                                    </span>
                                    <h4 className="text-xl font-serif text-charcoal mt-2 group-hover:italic transition-all">
                                        {p.title}
                                    </h4>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return projects.map((project: { id: number }) => ({
        id: project.id.toString(),
    }));
}
