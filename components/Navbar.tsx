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
                        ? 'w-[92%] md:w-[780px] bg-ink/90 backdrop-blur-xl border-bone/[0.10] py-2.5 px-5 shadow-[0_8px_32px_rgba(14,26,31,0.45)]'
                        : 'w-[94%] md:w-[980px] bg-ink/82 backdrop-blur-md border-bone/[0.09] py-3 px-6 shadow-[0_8px_28px_rgba(14,26,31,0.22)]'
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
                                className="text-bone/70 hover:text-gold-soft transition-colors duration-200 text-sm font-medium tracking-wide"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-bone/80 border border-bone/[0.15] group transition-all duration-300 hover:border-gold-soft/40 hover:text-gold-soft"
                        >
                            Contacto
                        </Link>
                        <Link
                            href="/services"
                            className="rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300"
                            style={{
                                background: '#C9A961',
                                color: '#0E1A1F',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = '#B89550')}
                            onMouseLeave={e => (e.currentTarget.style.background = '#C9A961')}
                        >
                            Ver servicios
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-bone/70 hover:text-gold-soft transition-colors"
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
                        className="fixed inset-0 bg-ink/90 backdrop-blur-2xl"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <nav className="fixed top-[4.5rem] left-4 right-4 bg-ink/95 border border-bone/[0.10] rounded-[1.5rem] p-6 shadow-[0_20px_60px_rgba(14,26,31,0.5)]">
                        <div className="space-y-1 mb-5">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="flex items-center py-3.5 px-2 text-bone/80 hover:text-gold-soft transition-colors font-medium text-base border-b border-bone/[0.07] last:border-0"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className="block text-center btn-warm-primary justify-center w-full"
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
