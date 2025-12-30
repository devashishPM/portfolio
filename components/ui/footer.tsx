export function Footer() {
    return (
        <footer id="contact" className="py-12 px-6 text-center">
            <p className="font-serif text-lg text-charcoal mb-2">
                Based in Gurgaon. Open to discussing the future of AI.
            </p>
            <div className="flex justify-center gap-4 text-sm font-sans text-soft-gray">
                <a href="mailto:hello@devashish.ai" className="hover:text-charcoal transition-colors">Email</a>
                <a href="https://linkedin.com/in/devashish" className="hover:text-charcoal transition-colors">LinkedIn</a>
            </div>
        </footer>
    );
}
