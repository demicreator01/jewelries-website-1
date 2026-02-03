import { motion } from 'framer-motion';

const products = [
    { name: 'Pavé Diamond Band', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80' },
    { name: 'Gold Layered Chain', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
    { name: 'Sapphire Drop Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
    { name: 'Rose Gold Cuff', image: '/images/rose_gold_cuff.png' },
    { name: 'Emerald Pendant', image: '/images/emerald_pendant.png' },
    { name: 'Platinum Hoop Earrings', image: '/images/platinum_hoop_earrings.png' },
    { name: 'Diamond Tennis Bracelet', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80' },
    { name: 'Moonstone Ring', image: 'https://images.unsplash.com/photo-1603912663489-0f488219bdba?w=600&q=80' },
];

export default function TrendingCarousel() {
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
                            className="group min-w-[80vw] md:min-w-0 snap-center bg-white rounded-[10px] shadow-[0_2px_14px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.13)] border border-transparent hover:border-[rgba(201,169,110,0.4)] active:border-[rgba(201,169,110,0.5)] transition-all duration-[350ms] ease-out flex flex-col hover:-translate-y-[3px] active:scale-[0.98]"
                        >
                            {/* Image Area with 12px Padding (p-3) */}
                            <div className="p-3">
                                <div className="relative aspect-square overflow-hidden rounded-[8px] bg-gray-50/50">
                                    <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[350ms] ease-in-out"
                                        onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                                    />
                                </div>
                            </div>

                            {/* Floating Gold Divider with 24px margins (mx-6) */}
                            <div className="mx-6 h-[1px] bg-[rgba(201,169,110,0.6)] mt-2 mb-3" />

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
        </section>
    )
}
