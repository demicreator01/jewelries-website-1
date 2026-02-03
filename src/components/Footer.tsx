export default function Footer() {
    return (
        <footer className="bg-white py-16 md:py-24 border-t border-gray-100 relative z-10">
            <div className="max-w-[1100px] mx-auto px-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                    <div className="space-y-6 max-w-sm text-center md:text-left">
                        <span className="font-heading text-3xl font-light text-lum-text uppercase tracking-[0.2em]">Lumière</span>
                        <p className="font-body text-sm text-lum-muted leading-relaxed">
                            Exceptional jewellery for extraordinary moments. Crafted with passion, worn with love.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-center md:text-left">
                        <div className="space-y-4">
                            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-lum-text font-bold">Trading Address</h4>
                            <ul className="space-y-2 font-body text-sm text-lum-muted">
                                <li className="leading-relaxed">
                                    40-42 Hatton Garden,<br />London, EC1N 8EB
                                </li>
                                <li className="pt-2">
                                    <a href="mailto:enquiries@lumierjewellery.co.uk" className="hover:text-lum-gold transition-colors block">enquiries@lumierjewellery.co.uk</a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-lum-text font-bold">Company Details</h4>
                            <div className="font-body text-xs text-lum-muted space-y-3 leading-relaxed">
                                <p>
                                    <span className="block text-lum-text/60 mb-1">Registered Office</span>
                                    137 Kashmir Road,<br />Leicester, LE1 2ND
                                </p>
                                <p>
                                    <span className="block text-lum-text/60 mb-1">VAT Number</span>
                                    483730181
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body text-xs text-lum-muted">
                        © {new Date().getFullYear()} Lumière Jewellery. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
