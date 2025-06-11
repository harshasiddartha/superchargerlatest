import Image from "next/image";

const PERKS_CARDS = [
  {
    title: "Assessment and Quiz",
    description: "Create quizzes and assessments to capture insights and deliver personalized feedback instantly.",
    image: "/images/perk-quiz.jpg",
    bg: "bg-gradient-to-br from-[#FDF6D8] to-[#C6F5E9]",
  },
  {
    title: "Waitlist",
    description: "Build anticipation and grow your waitlist with an easy-to-use, custom landing pages and questions.",
    image: "/images/perk-waitlist.jpg",
    bg: "bg-gradient-to-br from-[#D6E7FF] to-[#F6F6FF]",
  },
  {
    title: "Webinar",
    description: "Boost attendance and ask the right questions with funnels and landing pages optimized for your next webinar.",
    image: "/images/perk-webinar.jpg",
    bg: "bg-gradient-to-br from-[#FDE6D8] to-[#E6D8FD]",
  },
  {
    title: "Video Course",
    description: "Drive sign-ups for your video course with professional, high-converting landing pages.",
    image: "/images/perk-video.jpg",
    bg: "bg-gradient-to-br from-[#FDE6D8] to-[#E6D8FD]",
  },
  {
    title: "Surveys",
    description: "Collect valuable data from your audience with our beautiful survey templates.",
    image: "/images/perk-survey.jpg",
    bg: "bg-gradient-to-br from-[#FDF6D8] to-[#C6F5E9]",
  },
  {
    title: "Profile Quiz",
    description: "Engage your audience with a fun, interactive quiz that offers key insights.",
    image: "/images/perk-profile.jpg",
    bg: "bg-gradient-to-br from-[#D6E7FF] to-[#F6F6FF]",
  },
];

const Perks = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 w-full bg-white dark:bg-gray-950">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-gray-900 dark:text-white">Launch your next</h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">Webinar</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {PERKS_CARDS.map((perk, idx) => (
          <div
            key={perk.title}
            className={`rounded-2xl shadow-lg p-6 flex flex-col items-center ${perk.bg} dark:bg-gray-900`}
          >
            <div className="w-full flex justify-center mb-4">
              <div className="relative w-56 h-40 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800">
                <Image src={perk.image} alt={perk.title} fill className="object-cover" />
              </div>
            </div>
            <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 text-center">{perk.title} <span className="inline-block align-middle">→</span></h4>
            <p className="text-gray-700 dark:text-gray-300 text-base text-center">{perk.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perks;
