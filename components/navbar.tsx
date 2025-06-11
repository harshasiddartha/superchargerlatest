import Link from "next/link";
import Image from "next/image";

export default function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-background dark:bg-gray-950 dark:border-b-gray-800">
      <div className="w-full flex justify-between items-center p-3 px-8 text-sm">
        {/* Logo */}
        <div className="flex gap-2 items-center">
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
        </div>
        {/* Nav Links */}
        <div className="flex gap-8 items-center font-medium text-base text-gray-900 dark:text-white">
          <div className="relative group">
            <button className="flex items-center gap-1">Product <svg width="12" height="8" fill="none" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
            {/* Dropdown can be added here */}
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1">Use Cases <svg width="12" height="8" fill="none" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
          </div>
          <Link href="#" className="hover:text-primary transition">Templates</Link>
          <div className="relative group">
            <button className="flex items-center gap-1">Resources <svg width="12" height="8" fill="none" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg></button>
          </div>
          <Link href="#" className="hover:text-primary transition">Pricing</Link>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-6">
          <Link href="/sign-up" className="font-medium text-black dark:text-white hover:text-primary transition">Login</Link>
          <Link href="/sign-up" className="rounded-lg bg-[#1883FF] px-6 py-2 text-white font-semibold text-base hover:bg-[#0F6CD4] transition">Get Started - It's free</Link>
        </div>
      </div>
    </nav>
  );
} 