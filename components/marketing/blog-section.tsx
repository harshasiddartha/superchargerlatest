import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "How Neuromarketing Reveals Your Customers' Subconscious Truths",
    excerpt: "When people browse a webpage, watch a video, or take a quiz, they don't consciously choose where to look. Our...",
    image: "/images/blog1.jpg",
    bg: "bg-[#FFD1D7]",
  },
  {
    title: "What to Consider Before You Give Away Your Book for Free",
    excerpt: "Giving away your book for free can be a smart move – but only if you approach it strategically.  For...",
    image: "/images/blog2.jpg",
    bg: "bg-[#FFF7B2]",
  },
  {
    title: "What Are the Best Original Research Tools to Build Authority?",
    excerpt: "If you're serious about getting more customers and standing out in a saturated industry, you need to do something different...",
    image: "/images/blog3.jpg",
    bg: "bg-[#C9D6FF]",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-20 bg-[#F8FAFC] dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4">Get inspired with our blog</h2>
        <p className="text-center text-lg text-gray-500 dark:text-gray-300 mb-12">Get a headstart on your journey with our latest updates, tips and features</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, idx) => (
            <div key={idx} className={`rounded-2xl p-6 flex flex-col items-start ${post.bg} dark:bg-gray-900`}>
              <div className="w-full flex justify-center mb-4">
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-50 dark:bg-gray-800">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 leading-snug">{post.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="#" className="text-lg font-semibold text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white hover:text-primary hover:border-primary transition flex items-center gap-2">
            Explore the Blog
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 