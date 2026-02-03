import { motion } from 'framer-motion';

const products = [
    { name: 'Pavé Diamond Band', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&h=600&q=80' },
    { name: 'Gold Layered Chain', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&h=600&q=80' },
    { name: 'Sapphire Drop Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&h=600&q=80' },
    { name: 'Rose Gold Cuff', image: '/images/rose_gold_cuff.png' },
    { name: 'Emerald Pendant', image: '/images/emerald_pendant.png' },
    { name: 'Platinum Hoop Earrings', image: '/images/platinum_hoop_earrings.png' },
    { name: 'Diamond Tennis Bracelet', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&h=600&q=80' },
    { name: 'Moonstone Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&h=600&q=80' },
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
                <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="min-w-[80vw] md:min-w-0 snap-center bg-white p-4 rounded-xl shadow-lum-card hover:shadow-lg transition-all duration-300 border border-transparent hover:border-lum-gold/20 flex flex-col"
                        >
                            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-50 mb-6">
                                <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-0 animate-fade-in"
                                    onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                                />
                            </div>
                            <div className="text-center mt-auto">
                                <h3 className="font-heading text-lg text-lum-text mb-1 font-medium">{product.name}</h3>
                                <a href="#contact" className="inline-block px-6 py-2 border border-lum-gold text-lum-gold font-heading text-xs tracking-widest uppercase rounded-full hover:bg-lum-gold hover:text-white transition-colors">
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
