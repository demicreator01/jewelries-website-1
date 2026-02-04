import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Warm Gradient + Ken Burns Image */}
            <div
                className="absolute inset-0 z-0"
                style={{ background: 'linear-gradient(180deg, #2a1e0e 0%, #4a3520 30%, #6b5a3a 50%, #3d2e1a 75%, #1a1208 100%)' }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <picture>
                        <source
                            media="(max-width: 768px)"
                            srcSet="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                        />
                        <source
                            media="(min-width: 769px)"
                            srcSet="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80"
                            alt="Luxury jewellery aesthetic background"
                            width="1600"
                            height="900"
                            className="w-full h-full object-cover opacity-0 transition-opacity duration-[600ms] ease-out"
                            loading="eager"
                            fetchPriority="high"
                            onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                        />
                    </picture>
                </motion.div>
                {/* Semi-transparent dark overlay */}
                <div className="absolute inset-0 bg-black/35 z-10" />
            </div>

            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-8">
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1]"
                    >
                        Jewellery <br className="md:hidden" />
                        <span className="italic font-serif text-lum-gold ml-2 md:ml-4">Redefined</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-body text-lg md:text-xl text-white/90 tracking-wide max-w-lg mx-auto leading-relaxed"
                    >
                        Timeless elegance for the modern soul. Wear your story with IQ2 GOLD LTD.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <a
                        href="#categories"
                        className="inline-block px-8 py-3 md:px-12 md:py-4 bg-lum-gold text-lum-text font-heading text-sm md:text-base tracking-[0.2em] uppercase rounded-full hover:bg-[#d4b479] transition-all transform hover:-translate-y-1 shadow-lg"
                    >
                        View Collection
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
