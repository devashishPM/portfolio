import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

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
                        I am a Senior AI Product Manager based in San Francisco, currently leading product at Level AI.
                    </p>
                    <p>
                        With a background in Computer Science and Design, I bridge the gap between technical complexity and user-centric experience. My work focuses on building intelligent tools that empower humans to achieve more.
                    </p>

                    <h3 className="font-serif text-2xl text-charcoal mt-12 mb-6">Experience</h3>
                    <ul className="list-none pl-0 space-y-6">
                        <li>
                            <strong className="block text-charcoal">Level AI</strong>
                            <span className="text-sm">Senior Product Manager (2023 - Present)</span>
                        </li>
                        <li>
                            <strong className="block text-charcoal">Google DeepMind</strong>
                            <span className="text-sm">Product Manager, Research (2021 - 2023)</span>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </main>
    );
}
