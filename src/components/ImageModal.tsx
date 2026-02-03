import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    altText: string;
}

export default function ImageModal({
    isOpen,
    onClose,
    imageSrc,
    altText,
}: ImageModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            // Lock body scroll
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Reset zoom when image changes or modal closes
    useEffect(() => {
        setIsZoomed(false);
    }, [imageSrc, isOpen]);

    // Close on click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;

        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setMousePosition({ x, y });
    };

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) {
            // Set initial position on click so it zooms into the click point
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setMousePosition({ x, y });
        }
        setIsZoomed(!isZoomed);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                            duration: 0.3,
                        }}
                        className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center outline-none"
                        aria-modal="true"
                        role="dialog"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white/80 hover:text-white transition-colors p-2 z-50"
                            aria-label="Close preview"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <div
                            className={`relative overflow-hidden rounded-lg shadow-2xl bg-black/5 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                            onMouseMove={handleMouseMove}
                            onClick={handleImageClick}
                        >
                            <motion.img
                                src={imageSrc}
                                alt={altText}
                                className="max-h-[85vh] w-auto object-contain block"
                                animate={{
                                    scale: isZoomed ? 2 : 1,
                                }}
                                style={{
                                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 30,
                                    // Make transformOrigin transition instant to avoid lag when panning, 
                                    // but scale transition smooth.
                                    transformOrigin: { duration: 0 }
                                }}
                            />
                        </div>

                        {!isZoomed && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/90 text-sm font-light tracking-widest uppercase bg-black/40 px-4 py-2 rounded-full backdrop-blur-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                {altText}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
