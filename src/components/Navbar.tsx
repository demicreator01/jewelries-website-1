import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Collections', href: '#categories' },
        { name: 'Latest', href: '#trending' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
            )}
        >
            <div className="max-w-[1100px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-heading text-2xl md:text-3xl tracking-[0.2em] font-light text-lum-text uppercase z-50 relative">
                    Lumière
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-sans text-sm tracking-widest text-lum-text hover:text-lum-gold transition-colors uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 relative text-lum-text"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Layout Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
                            className="fixed inset-0 bg-lum-bg/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-heading text-2xl font-light text-lum-text hover:text-lum-gold transition-colors uppercase tracking-widest"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
