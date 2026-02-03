import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-lum-bg via-[#fdfbf9] to-[#eceae5]">
            {/* Animated Ambient Background */}
            <div className="absolute inset-0 z-0 opacity-40 overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--color-lum-rose)_0%,_transparent_40%)] blur-[100px] animate-pulse-slow mix-blend-multiply" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--color-lum-gold)_0%,_transparent_40%)] blur-[120px] opacity-30 animate-float mix-blend-multiply" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8 mt-16 md:mt-0">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-lum-text tracking-tight leading-[1.1]"
                >
                    Jewellery <br className="md:hidden" />
                    <span className="italic font-serif text-lum-gold ml-2 md:ml-4">Redefined</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="font-body text-lg md:text-xl text-lum-muted tracking-wide max-w-lg mx-auto leading-relaxed"
                >
                    Timeless elegance for the modern soul. Wear your story with Lumière.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a
                        href="#categories"
                        className="inline-block px-8 py-3 md:px-12 md:py-4 bg-lum-gold text-lum-text font-heading text-sm md:text-base tracking-[0.2em] uppercase rounded-full hover:bg-[#d4b479] transition-all transform hover:-translate-y-1 shadow-lum-card"
                    >
                        View Collection
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
