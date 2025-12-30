export function Footer() {
    return (
        <footer id="contact" className="py-12 px-6 text-center">
            <p className="font-serif text-lg text-charcoal mb-2">
                Based in Gurugram. Open to building the future of AI—anywhere.
            </p>
            <div className="flex justify-center gap-4 text-sm font-sans text-soft-gray">
                <a href="mailto:devashish.shrivastava16@gmail.com" className="hover:text-charcoal transition-colors">Email</a>
                <a href="https://linkedin.com/in/devashishshrivastava" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal transition-colors">LinkedIn</a>
            </div>
        </footer>
    );
}
