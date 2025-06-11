import Image from "next/image";

const HOW_IT_WORKS_CARDS = [
  {
    title: "Landing pages that convert",
    description:
      "Beautiful landing pages that engage your audience and convert – no coding or design skills needed.",
    image: "/images/hiw1.webp",
    highlight: "Landing pages",
  },
  {
    title: "Quizzes that engage",
    description:
      "Ask the right questions, guide your audience, and uncover meaningful insights while keeping them engaged.",
    image: "/images/hiw2.webp",
    highlight: "Quizzes",
  },
  {
    title: "Tailored results that impress",
    description:
      "Deliver tailored insights and actionable feedback to build meaningful connections with your audience at scale.",
    image: "/images/hiw3.webp",
    highlight: "Tailored results",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-white">Create. Personalize.<br />Convert.</h2>
        <p className="text-xl text-center text-gray-500 dark:text-gray-300 mb-16 max-w-2xl">
          Build data driven marketing funnels to engage and convert your audience — no coding or design skills needed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {HOW_IT_WORKS_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-900 p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800"
            >
              <div className="w-full flex justify-center mb-6">
                <div className="relative w-64 h-40 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800">
                  <Image src={card.image} alt={card.title} fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">
                <span className="font-bold">{card.highlight}</span>
                {card.title.replace(card.highlight, "")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
