import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
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

    const linkVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + i * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: 10,
            transition: {
                delay: (navLinks.length - 1 - i) * 0.05,
                duration: 0.2,
            },
        }),
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12',
                (scrolled && !isOpen)
                    ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 py-3'
                    : 'bg-transparent py-4'
            )}
        >
            <div className="max-w-[1100px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className={cn(
                        "font-heading text-2xl md:text-3xl tracking-[0.2em] font-light uppercase z-[60] relative transition-colors duration-300",
                        // Logic: If menu open OR scrolled -> Dark Text. Else -> White Text.
                        (isOpen || scrolled) ? "text-black font-semibold" : "text-white"
                    )}
                >
                    IQ2 GOLD
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-sans text-sm tracking-widest transition-colors duration-300 uppercase relative group",
                                scrolled ? "text-lum-text" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                                scrolled ? "bg-lum-text" : "bg-white"
                            )} />
                        </a>
                    ))}
                </div>

                {/* Animated Hamburger / X Button */}
                <button
                    className="md:hidden z-[60] relative w-7 h-5 flex flex-col justify-between items-center group"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                        className={cn(
                            "block w-6 h-[2px] origin-center transition-colors duration-300",
                            (isOpen || scrolled) ? "bg-black" : "bg-white"
                        )}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className={cn(
                            "block w-6 h-[2px] transition-colors duration-300",
                            (isOpen || scrolled) ? "bg-black" : "bg-white"
                        )}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                        className={cn(
                            "block w-6 h-[2px] origin-center transition-colors duration-300",
                            (isOpen || scrolled) ? "bg-black" : "bg-white"
                        )}
                    />
                </button>

                {/* Mobile Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[55] flex flex-col items-center justify-center md:hidden bg-[#faf8f5]/98 backdrop-blur-xl"
                        >
                            <div className="flex flex-col items-center gap-2 w-full px-12">
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
                                            className="group relative block py-4 font-heading text-xl font-semibold text-black tracking-[4px] uppercase transition-colors duration-200"
                                        >
                                            {link.name}
                                            <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-8" />
                                        </a>
                                        {/* Elegant Separator */}
                                        {i < navLinks.length - 1 && (
                                            <motion.div
                                                initial={{ scaleX: 0, opacity: 0 }}
                                                animate={{ scaleX: 1, opacity: 1, transition: { delay: 0.2 + i * 0.1 } }}
                                                className="w-12 h-[1px] bg-lum-text/10 mx-auto mt-2"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
