import Image from "next/image";
import Link from "next/link";

const templates = [
  { image: "/images/temp1.webp", alt: "Template 1" },
  { image: "/images/temp2.webp", alt: "Template 2" },
  { image: "/images/temp3.webp", alt: "Template 3" },
  { image: "/images/temp4.webp", alt: "Template 4" },
  { image: "/images/temp5.webp", alt: "Template 5" },
  { image: "/images/temp6.webp", alt: "Template 6" },
  { image: "/images/temp7.webp", alt: "Template 7" },
  { image: "/images/temp8.webp", alt: "Template 8" },
];
            
export default function TemplatesSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-center mb-4 text-gray-900">Ready-to-go Templates</h2>
        <p className="text-lg text-center text-gray-500 mb-8 max-w-2xl">
          Get started in under 10 minutes with 100's of free, customizable templates designed and built by our award-winning marketing team
        </p>
        <Link href="#" className="mb-12 px-8 py-3 rounded-lg bg-[#2563eb] text-white font-semibold text-lg hover:bg-[#1d4ed8] transition flex items-center gap-2">
          View all templates
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
        <div className="w-full overflow-x-hidden">
          <div className="relative w-full">
            <div className="flex gap-8 animate-marquee-template whitespace-nowrap">
              {[...templates, ...templates].map((tpl, idx) => (
                <div key={tpl.alt + idx} className="rounded-2xl shadow-lg bg-white flex-shrink-0" style={{ width: 320 }}>
                  <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                    <Image src={tpl.image} alt={tpl.alt} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
            <style global>{`
              @keyframes marquee-template {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee-template {
                animation: marquee-template 40s linear infinite;
              }
              .animate-marquee-template:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
} 