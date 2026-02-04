import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-lum-bg">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                    {/* Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-8 text-center md:text-left"
                    >
                        <div className="space-y-4">
                            <span className="font-heading text-sm tracking-[0.2em] text-lum-gold uppercase">Get in Touch</span>
                            <h2 className="font-heading text-4xl md:text-5xl text-lum-text font-light leading-tight">
                                Begin Your Journey
                            </h2>
                        </div>
                        <p className="font-body text-lg text-lum-muted leading-relaxed max-w-md mx-auto md:mx-0">
                            Whether you're looking for a bespoke engagement ring or a timeless gift, our team at Hatton Garden is here to guide you personally.
                        </p>

                        <div className="hidden md:flex flex-col gap-4 pt-4">
                            <div className="flex items-center gap-4 text-lum-text">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-lum-gold">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-body text-lg">40-42 Hatton Garden, London, EC1N 8EB</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-md"
                    >
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lum-card space-y-6 text-center border border-gray-50">
                            <div className="space-y-2 mb-8">
                                <h3 className="font-heading text-2xl text-lum-text font-light">Contact Us</h3>
                                <p className="font-body text-sm text-lum-muted">We are available Mon - Sat, 10am - 6pm</p>
                            </div>

                            <a href="https://wa.me/447418604634" className="flex items-center justify-center gap-3 w-full bg-[#25c554] text-white py-4 rounded-lg font-heading tracking-widest uppercase hover:opacity-90 transition-all text-sm shadow-md shadow-green-100 hover:shadow-lg">
                                <MessageCircle size={20} />
                                WhatsApp Us
                            </a>

                            <a href="tel:+442080404675" className="flex items-center justify-center gap-3 w-full border border-lum-gold/30 text-lum-text py-4 rounded-lg font-heading tracking-widest uppercase hover:border-lum-gold hover:bg-lum-gold hover:text-white transition-all text-sm">
                                <Phone size={20} />
                                +44 20 8040 4675
                            </a>

                            <a href="mailto:info@iq2gold.co.uk" className="flex items-center justify-center gap-3 w-full border border-gray-200 text-lum-muted py-4 rounded-lg font-heading tracking-widest uppercase hover:text-lum-text hover:border-lum-text transition-all text-sm">
                                <Mail size={20} />
                                Email Us
                            </a>

                            <div className="md:hidden pt-8 mt-4 border-t border-gray-100">
                                <p className="font-body text-sm text-lum-muted mb-2">Visit our Showroom</p>
                                <p className="font-heading text-lum-text">40-42 Hatton Garden, London, EC1N 8EB</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
