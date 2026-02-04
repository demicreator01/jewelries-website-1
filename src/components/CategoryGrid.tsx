import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';

const categories = [
    { name: 'Rings', image: '/images/category_rings.png', alt: 'Diamond and gold rings collection' },
    { name: 'Necklaces', image: '/images/gold_layered_chain.png', alt: 'Gold layered chain necklaces' },
    { name: 'Bracelets', image: '/images/diamond_tennis_bracelet.png', alt: 'Diamond tennis bracelet' },
    { name: 'Earrings', image: '/images/category_earrings.png', alt: 'Elegant gold and diamond earrings' },
    { name: 'Watches', image: '/images/category_watches.jpg', alt: 'Rolex Day-Date luxury watch on cream background' },
    { name: 'Accessories', image: '/images/category_accesories.webp', alt: 'Beige luxury handbag on studio surface' },
];

export default function CategoryGrid() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <section id="categories" className="py-20 md:py-32 bg-lum-bg">
            <div className="max-w-[1100px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <span className="font-heading text-sm tracking-[0.2em] text-lum-gold uppercase">Collections</span>
                    <h2 className="font-heading text-3xl md:text-4xl text-lum-text mt-4 font-light">Explore Categories</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group cursor-pointer relative"
                            onClick={() => setSelectedImage({ src: cat.image, alt: cat.alt })}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] md:rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-[350ms] ease-out active:scale-[0.97]">
                                {/* Image Layer */}
                                <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Skeleton */}
                                <img
                                    src={cat.image}
                                    alt={cat.alt}
                                    width="600"
                                    height="450"
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05] opacity-0"
                                    onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                                />

                                {/* Frosted Strip Layer */}
                                <div className="absolute bottom-0 left-0 w-full backdrop-blur-[10px] bg-[rgba(255,250,245,0.6)] group-hover:bg-[rgba(255,250,245,0.75)] active:bg-[rgba(255,250,245,0.85)] border-t border-[rgba(201,169,110,0.3)] group-hover:border-[rgba(201,169,110,0.6)] active:border-[rgba(201,169,110,0.7)] transition-all duration-[400ms] ease-out py-4 text-center z-10">
                                    <h3 className="font-heading text-xl text-lum-text tracking-widest font-semibold uppercase">{cat.name}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage?.src || ''}
                altText={selectedImage?.alt || ''}
            />
        </section>
    );
}
