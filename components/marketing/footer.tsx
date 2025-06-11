import Link from "next/link";
import Container from "../global/container";
import Wrapper from "../global/wrapper";

const Footer = () => {
    return (
        <footer className="w-full py-16 bg-transparent dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-left mb-16">
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">PRODUCT</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li><Link href="#">How it works</Link></li>
                            <li><Link href="#">Features</Link></li>
                            <li><Link href="#">Video Demo</Link></li>
                            <li><Link href="#">Pricing</Link></li>
                            <li><Link href="#">Integrations</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">USE CASES</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li><Link href="#">Assessment/Quiz</Link></li>
                            <li><Link href="#">Profile Quiz</Link></li>
                            <li><Link href="#">Waitlists</Link></li>
                            <li><Link href="#">Mini-course</Link></li>
                            <li><Link href="#">Survey</Link></li>
                            <li><Link href="#">Webinars</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">TEMPLATES</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li><Link href="#">Wheel of Life</Link></li>
                            <li><Link href="#">Marketing Impact</Link></li>
                            <li><Link href="#">Sales Growth</Link></li>
                            <li><Link href="#">Wellbeing Scorecard</Link></li>
                            <li><Link href="#">Business Growth</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">SUPPORT</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li><Link href="#">Support Centre</Link></li>
                            <li><Link href="#">Learning Centre</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">RESOURCES</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Customer Stories</Link></li>
                            <li><Link href="#">Partner with SuperCharger</Link></li>
                            <li><Link href="#">Terms and Conditions</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 mt-8">
                    {/* Logo styled like navbar */}
                    <span className="flex items-center text-2xl font-extrabold">
                        <span className="text-black dark:text-white">s</span>
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
                    </span>
                    <p className="text-gray-500 dark:text-gray-300 text-base">© 2025 SuperCharger</p>
                    <div className="flex gap-6 mt-2">
                        <Link href="#" aria-label="Instagram"><svg className="w-6 h-6 text-gray-400 dark:text-gray-300 hover:text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg></Link>
                        <Link href="#" aria-label="YouTube"><svg className="w-6 h-6 text-gray-400 dark:text-gray-300 hover:text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.06a2.75 2.75 0 0 0-1.94 1.94A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999a2.75 2.75 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15.5v-7l6 3.5l-6 3.5z"/></svg></Link>
                        <Link href="#" aria-label="Facebook"><svg className="w-6 h-6 text-gray-400 dark:text-gray-300 hover:text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2.1c-2.8 0-5.1 2.3-5.1 5.1c0 2.8 2.3 5.1 5.1 5.1c2.8 0 5.1-2.3 5.1-5.1c0-2.8-2.3-5.1-5.1-5.1zm0 8.2c-1.7 0-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1c1.7 0 3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1zm-5.1 2.7c-2.8 0-5.1 2.3-5.1 5.1c0 2.8 2.3 5.1 5.1 5.1c2.8 0 5.1-2.3 5.1-5.1c0-2.8-2.3-5.1-5.1-5.1zm0 8.2c-1.7 0-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1c1.7 0 3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1zm10.2-8.2c-2.8 0-5.1 2.3-5.1 5.1c0 2.8 2.3 5.1 5.1 5.1c2.8 0 5.1-2.3 5.1-5.1c0-2.8-2.3-5.1-5.1-5.1zm0 8.2c-1.7 0-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1c1.7 0 3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1z"/></svg></Link>
                        <Link href="#" aria-label="LinkedIn"><svg className="w-6 h-6 text-gray-400 dark:text-gray-300 hover:text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75s1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47c-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54c3.01 0 3.57 1.98 3.57 4.56v4.75z"/></svg></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer
