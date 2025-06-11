'use client';
import Image from "next/image";
import Link from "next/link";

const integrations = [
  [
    { name: "Active Campaign", logo: "/integrations/activecampaign.png" },
    { name: "Kit", logo: "/integrations/kit.png" },
    { name: "Salesforce", logo: "/integrations/salesforce.png" },
    { name: "Keap", logo: "/integrations/keap.png" },
  ],
  [
    { name: "GoHighLevel", logo: "/integrations/gohighlevel.png" },
    { name: "insightly", logo: "/integrations/insightly.png" },
    { name: "Zoom", logo: "/integrations/zoom.png" },
    { name: "customer.io", logo: "/integrations/customerio.png" },
  ],
  [
    { name: "Ontraport", logo: "/integrations/ontraport.png" },
    { name: "HubSpot", logo: "/integrations/hubspot.png" },
    { name: "Klaviyo", logo: "/integrations/klaviyo.png" },
  ],
];

const rowSpeeds = ["[animation-duration:30s]", "[animation-duration:40s]", "[animation-duration:35s]"];
const rowDirections = ["animate-marquee-ltr", "animate-marquee-rtl", "animate-marquee-ltr"];

export default function IntegrationsSection() {
  // fallback for broken images
  const handleImgError = (e: any) => {
    e.target.onerror = null;
    e.target.src = "/icons/icon.svg";
  };

  return (
    <section className="w-full py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Integrates with your<br />everyday tools</h2>
        <div className="flex flex-col gap-8 mb-10">
          {integrations.map((row, rowIdx) => (
            <div key={rowIdx} className="overflow-hidden w-full">
              <div
                className={`flex gap-6 min-w-full whitespace-nowrap group relative ${rowDirections[rowIdx]} ${rowSpeeds[rowIdx]}`}
                style={{ willChange: 'transform' }}
              >
                {[...row, ...row].map((item, idx) => (
                  <div
                    key={item.name + idx}
                    className="bg-white rounded-2xl border border-gray-200 px-10 py-7 flex items-center gap-3 min-w-[220px] shadow-sm mx-2"
                  >
                    <img src={item.logo} alt={item.name} width={40} height={40} className="object-contain" onError={handleImgError} />
                    <span className="font-medium text-gray-800 text-lg">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link href="#" className="text-lg font-semibold text-gray-900 border-b-2 border-gray-900 hover:text-primary hover:border-primary transition flex items-center gap-2">
            View all Integrations
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
      <style global>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl linear infinite;
        }
        .group:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 