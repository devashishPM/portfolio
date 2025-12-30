import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 bg-alabaster/80 backdrop-blur-md border-b border-charcoal/5">
            <div className="flex justify-between items-baseline max-w-[1800px] mx-auto w-full">
                <Link href="/" className="group">
                    <h1 className="font-serif text-xl md:text-2xl tracking-tight">
                        <span className="highlight">Devashish Shrivastava</span>
                    </h1>
                </Link>

                <nav className="flex gap-8 items-center">
                    {[
                        { name: "Work", href: "/#work" },
                        { name: "About", href: "/about" },
                        { name: "Contact", href: "/#contact" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-semibold hover:italic transition-all opacity-80 hover:opacity-100"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <span className="hidden md:inline-block font-sans text-xs md:text-sm tracking-wide opacity-70 ml-4">
                        Senior AI PM · <span className="highlight-metric">0→1</span> Builder
                    </span>
                </nav>
            </div>
        </header>
    );
}
