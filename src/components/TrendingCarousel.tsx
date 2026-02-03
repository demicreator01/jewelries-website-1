import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';

const products = [
    { name: 'Pavé Diamond Band', image: '/images/pave_diamond_band.png' },
    { name: 'Gold Layered Chain', image: '/images/gold_layered_chain.png' },
    { name: 'Sapphire Drop Earrings', image: '/images/sapphire_drop_earrings.png' },
    { name: 'Rose Gold Cuff', image: '/images/rose_gold_cuff.png' },
    { name: 'Emerald Pendant', image: '/images/emerald_pendant.png' },
    { name: 'Platinum Hoop Earrings', image: '/images/platinum_hoop_earrings.png' },
    { name: 'Diamond Tennis Bracelet', image: '/images/diamond_tennis_bracelet.png' },
    { name: 'Moonstone Ring', image: '/images/moonstone_ring.png' },
];

export default function TrendingCarousel() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <section id="trending" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="font-heading text-sm tracking-[0.2em] text-lum-gold uppercase">New Arrivals</span>
                    <h2 className="font-heading text-3xl md:text-4xl text-lum-text mt-4 font-light">Trending Pieces</h2>
                </motion.div>

                {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group min-w-[80vw] md:min-w-0 snap-center bg-white rounded-[10px] shadow-[0_2px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.13)] border border-transparent hover:border-[rgba(201,169,110,0.4)] active:border-[rgba(201,169,110,0.5)] transition-all duration-[350ms] ease-out flex flex-col hover:-translate-y-[3px] active:-translate-y-[2px] active:shadow-[0_6px_28px_rgba(0,0,0,0.13)]"
                        >
                            {/* Image Area with 12px Padding (p-3) */}
                            <div className="p-3">
                                <div
                                    className="relative aspect-square overflow-hidden rounded-[8px] bg-gray-50/50 cursor-zoom-in"
                                    onClick={() => setSelectedImage({ src: product.image, alt: product.name })}
                                >
                                    <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-[500ms] ease-in-out hover:scale-105"
                                        onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                                    />
                                </div>
                            </div>

                            {/* Floating Gold Divider with 16px margins (mx-4) */}
                            <div className="mx-4 h-[1px] bg-[rgba(201,169,110,0.6)] mt-2 mb-3" />

                            {/* Content Area */}
                            <div className="px-5 pb-8 pt-2 text-center flex flex-col gap-5 flex-grow">
                                <h3 className="font-serif text-lg text-lum-text font-medium leading-tight">
                                    {product.name}
                                </h3>

                                <a
                                    href="#contact"
                                    className="mt-auto self-center w-auto px-6 py-2.5 border border-lum-gold text-lum-gold font-heading text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-[6px] transition-all duration-[350ms] ease-out hover:bg-lum-gold hover:text-lum-text active:bg-lum-gold active:text-lum-text"
                                >
                                    Enquire
                                </a>
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
    )
}
