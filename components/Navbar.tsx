'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
                        ? 'w-[90%] md:w-[800px] glass-panel bg-[#0B0F19]/60 py-3 px-6 border-white/10'
                        : 'w-full md:w-[1000px] bg-transparent py-4 px-6 border-transparent'
                    } rounded-full border`}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                            <Image 
                                src="/logo.png" 
                                alt="DigiSenda AI Logo" 
                                width={40} 
                                height={40}
                                className="w-full h-full object-contain p-1"
                                priority
                            />
                        </div>
                        <span className="font-space font-bold tracking-tight text-white group-hover:text-ai-cyan transition-colors text-lg">
                            DigiSenda AI
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 font-mono text-base font-medium">
                        <Link href="/services" className="text-silver hover:text-white transition-colors">Servicios</Link>
                        <Link href="/about" className="text-silver hover:text-white transition-colors">Nosotros</Link>
                        <Link href="/blog" className="text-silver hover:text-white transition-colors">Blog</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex rounded-full px-6 py-2.5 text-sm font-medium text-white border border-white/10 relative overflow-hidden group magnetic-btn"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neural-blue/20 to-ai-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10">Contacto</span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-white hover:text-ai-cyan transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-[#0B0F19]/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
                    <nav className="fixed top-24 left-4 right-4 glass-panel bg-[#0B0F19]/90 rounded-3xl p-6 space-y-4">
                        <Link
                            href="/services"
                            className="block text-white hover:text-ai-cyan transition-colors font-mono text-lg py-3 border-b border-white/10"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Servicios
                        </Link>
                        <Link
                            href="/about"
                            className="block text-white hover:text-ai-cyan transition-colors font-mono text-lg py-3 border-b border-white/10"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="/blog"
                            className="block text-white hover:text-ai-cyan transition-colors font-mono text-lg py-3 border-b border-white/10"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-center bg-neural-blue text-white font-semibold rounded-full px-6 py-3 mt-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contacto
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
