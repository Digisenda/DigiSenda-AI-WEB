'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/services', label: 'Servicios' },
    { href: '/about', label: 'Nosotros' },
    { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-400 rounded-full border ${
                    scrolled
                        ? 'w-[92%] md:w-[780px] bg-[#0B0F19]/92 backdrop-blur-xl border-white/[0.09] py-2.5 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                        : 'w-[94%] md:w-[980px] bg-[#0B0F19]/85 backdrop-blur-md border-white/[0.10] py-3 px-6 shadow-[0_8px_28px_rgba(14,26,31,0.18)]'
                }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="DigiSenda AI"
                            width={180}
                            height={48}
                            className="h-10 md:h-12 w-auto object-contain brightness-110 contrast-125 group-hover:brightness-130 transition-all duration-300"
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-silver/70 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-white border border-white/[0.12] group transition-all duration-300 hover:border-white/25"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-neural-blue/20 to-ai-cyan/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10">Contacto</span>
                        </Link>
                        <Link
                            href="/services"
                            className="rounded-full px-5 py-2 text-sm font-semibold text-deep-space bg-white hover:bg-silver transition-colors duration-300"
                        >
                            Ver servicios
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-silver/70 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="fixed inset-0 bg-[#070B14]/90 backdrop-blur-2xl"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <nav className="fixed top-[4.5rem] left-4 right-4 bg-[#0D1220]/95 border border-white/[0.08] rounded-[1.5rem] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                        <div className="space-y-1 mb-5">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="flex items-center py-3.5 px-2 text-white/80 hover:text-white transition-colors font-medium text-base border-b border-white/[0.06] last:border-0"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className="block text-center bg-neural-blue hover:bg-neural-blue-light text-white font-semibold rounded-full px-6 py-3.5 transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Hablar con el equipo
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
