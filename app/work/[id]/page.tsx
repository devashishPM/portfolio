import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { projects } from "@/app/data";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id.toString() === params.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-alabaster selection:bg-charcoal selection:text-alabaster">
            <Header />
            <section className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
                <span className="text-sm font-sans font-medium text-soft-gray uppercase tracking-widest mb-4 block">
                    Case Study 0{project.id}
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8">
                    {project.title}
                </h1>

                <div className="w-full aspect-video bg-subtle-border mb-12 flex items-center justify-center text-soft-gray">
                    {/* Placeholder for future detailed imagery or video */}
                    <span className="font-sans text-sm uppercase tracking-widest">Visual: {project.visualType}</span>
                </div>

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
                        <p className="mt-8">
                            (Detailed case study content for <strong>{project.title}</strong> is currently being authored. This page dynamically loads data from the persistent project store.)
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}
