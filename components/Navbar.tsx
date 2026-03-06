'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
                    ? 'w-[90%] md:w-[800px] glass-panel bg-[#0B0F19]/60 py-3 px-6 border-white/10'
                    : 'w-full md:w-[1000px] bg-transparent py-4 px-6 border-transparent'
                } rounded-full border`}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neural-blue to-ai-cyan grid place-items-center">
                        <span className="text-white font-space font-bold">D</span>
                    </div>
                    <span className="font-space font-bold tracking-tight text-white group-hover:text-ai-cyan transition-colors">
                        DigiSenda AI
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 font-mono text-sm">
                    <Link href="/services" className="text-silver hover:text-white transition-colors">Servicios</Link>
                    <Link href="/about" className="text-silver hover:text-white transition-colors">Nosotros</Link>
                    <Link href="/blog" className="text-silver hover:text-white transition-colors">Blog</Link>
                </nav>

                <Link
                    href="/contact"
                    className="rounded-full px-5 py-2 text-sm font-medium text-white border border-white/10 relative overflow-hidden group magnetic-btn"
                >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neural-blue/20 to-ai-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Contacto</span>
                </Link>
            </div>
        </header>
    );
}
