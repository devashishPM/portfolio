import { Header } from "@/components/ui/header";
import { Hero } from "@/components/home/hero";
import { ProjectList } from "@/components/home/project-list";
import { Experience } from "@/components/home/experience";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster selection:bg-charcoal selection:text-alabaster">
      <Header />
      <Hero />
      <ProjectList />
      <Experience />
      <Footer />
    </main>
  );
}
