import { motion } from 'framer-motion';

const categories = [
    { name: 'Rings', image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6a5?w=600&q=80' },
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
                            className="group cursor-pointer"
                        >
                            <div className="bg-white p-4 rounded-xl shadow-lum-card hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 relative overflow-hidden border border-transparent hover:border-lum-rose/20">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Skeleton */}
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-0 animate-fade-in"
                                        onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="font-heading text-xl text-lum-text group-hover:text-lum-gold transition-colors font-semibold">{cat.name}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
