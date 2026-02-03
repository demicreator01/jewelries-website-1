import { motion } from 'framer-motion';

const categories = [
    { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
    { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80' },
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
    { name: 'Watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80' },
];

export default function CategoryGrid() {
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
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] md:rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-[350ms] ease-out active:scale-[0.97]">
                                {/* Image Layer */}
                                <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Skeleton */}
                                <img
                                    src={cat.image}
                                    alt={cat.name}
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
        </section>
    );
}
