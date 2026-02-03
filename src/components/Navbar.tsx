import { useState, useEffect } from 'react';
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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const navLinks = [
        { name: 'HOME', href: '#' },
        { name: 'COLLECTIONS', href: '#categories' },
        { name: 'LATEST', href: '#trending' },
        { name: 'CONTACT', href: '#contact' },
    ];

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.15 + i * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: 20,
            transition: {
                delay: (navLinks.length - 1 - i) * 0.05,
                duration: 0.25,
            },
        }),
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
            )}
        >
            <div className="max-w-[1100px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className={cn(
                        "font-heading text-2xl md:text-3xl tracking-[0.2em] font-light uppercase z-[60] relative transition-colors duration-300",
                        isOpen ? "text-lum-text text-white" : scrolled ? "text-lum-text" : "text-white"
                    )}
                >
                    Lumière
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-sans text-sm tracking-widest transition-colors duration-300 uppercase",
                                scrolled ? "text-lum-text hover:text-lum-gold" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Animated Hamburger / X Button */}
                <button
                    className="md:hidden z-[60] relative w-7 h-5 flex flex-col justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={cn(
                            "block w-6 h-[2px] origin-center transition-colors duration-300",
                            isOpen ? "bg-lum-text bg-white" : scrolled ? "bg-lum-text" : "bg-white"
                        )}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "block w-6 h-[2px] transition-colors duration-300",
                            isOpen ? "bg-lum-text bg-white" : scrolled ? "bg-lum-text" : "bg-white"
                        )}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={cn(
                            "block w-6 h-[2px] origin-center transition-colors duration-300",
                            isOpen ? "bg-lum-text bg-white" : scrolled ? "bg-lum-text" : "bg-white"
                        )}
                    />
                </button>

                {/* Mobile Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { delay: 0.3 } }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black/30 z-40 md:hidden"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%', transition: { delay: 0.25 } }}
                                transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="fixed inset-0 z-50 flex flex-col items-center justify-center md:hidden"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(26, 18, 8, 0.15) 0%, rgba(250, 248, 245, 1) 40%, #faf8f5 100%)',
                                }}
                            >
                                <div className="flex flex-col items-center gap-1 w-full px-12">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            custom={i}
                                            variants={linkVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="w-full text-center"
                                        >
                                            <a
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group relative block py-5 font-heading text-lg font-medium text-lum-text tracking-[4px] uppercase transition-colors duration-200 active:text-lum-gold"
                                            >
                                                {/* Gold accent line on tap */}
                                                <span className="absolute left-1/2 -translate-x-1/2 bottom-3 w-0 h-[2px] bg-lum-gold transition-all duration-200 group-active:w-8" />
                                                {link.name}
                                            </a>
                                            {/* Separator */}
                                            {i < navLinks.length - 1 && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1, transition: { delay: 0.15 + i * 0.1 + 0.2 } }}
                                                    className="w-full h-[2px] bg-[rgba(201,169,110,0.2)]"
                                                />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
