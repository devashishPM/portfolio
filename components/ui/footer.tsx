export function Footer() {
    return (
        <footer id="contact" className="py-16 px-6 text-center border-t border-subtle-border/30">
            <p className="font-serif text-xl text-charcoal mb-4">
                Based in Gurugram. Open to building the <span className="highlight">future of AI</span>—anywhere.
            </p>
            <div className="flex justify-center gap-6 text-sm font-sans font-semibold text-soft-gray">
                <a href="mailto:devashish.shrivastava16@gmail.com" className="hover:text-charcoal transition-colors uppercase tracking-wider">Email</a>
                <a href="https://linkedin.com/in/devashishshrivastava" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal transition-colors uppercase tracking-wider">LinkedIn</a>
            </div>
        </footer>
    );
}
