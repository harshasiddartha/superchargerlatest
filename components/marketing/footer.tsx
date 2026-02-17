import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full py-12 bg-transparent border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center text-2xl font-extrabold hover:opacity-80 transition-opacity">
                        <span className="text-black">s</span>
                        <span className="text-[#FFD600]">u</span>
                        <span className="text-[#00C49A]">p</span>
                        <span className="text-[#FF5C5C]">e</span>
                        <span className="text-[#0088FE]">r</span>
                        <span className="text-[#FFD600]">c</span>
                        <span className="text-[#00C49A]">h</span>
                        <span className="text-[#FF5C5C]">a</span>
                        <span className="text-[#0088FE]">r</span>
                        <span className="text-[#FFD600]">g</span>
                        <span className="text-[#00C49A]">e</span>
                        <span className="text-[#FF5C5C]">r</span>
                        <span className="ml-1 bg-[#1A2347] text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center">APP</span>
                    </Link>
                    
                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                        <Link href="#" className="hover:text-primary transition">Features</Link>
                        <Link href="#" className="hover:text-primary transition">Pricing</Link>
                        <Link href="#" className="hover:text-primary transition">Blog</Link>
                        <Link href="#" className="hover:text-primary transition">Support</Link>
                        <Link href="#" className="hover:text-primary transition">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition">Terms</Link>
                    </div>
                    
                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">© 2025 SuperCharger</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer
