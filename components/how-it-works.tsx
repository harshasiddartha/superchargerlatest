import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Sparkles, BarChart3, RocketIcon } from "lucide-react";

const HOW_IT_WORKS_CARDS = [
  {
    title: "Create Your Quiz",
    description:
      "Build engaging quizzes manually or use AI to generate questions instantly. Add multiple choice questions, customize options, and set up flexible scoring systems.",
    image: "/images/hiw1.webp",
    highlight: "Create",
    icon: FileQuestion,
    step: "01",
  },
  {
    title: "AI-Powered Generation",
    description:
      "Let our advanced AI create questions based on your topic. Get context-aware, non-redundant questions that engage your audience effectively and save you time.",
    image: "/images/hiw2.webp",
    highlight: "AI-Powered",
    icon: Sparkles,
    step: "02",
  },
  {
    title: "Publish & Analyze",
    description:
      "Share your quiz with a public link and track responses in real-time. Get AI-powered insights and comprehensive analytics to understand your audience better.",
    image: "/images/hiw3.webp",
    highlight: "Publish",
    icon: BarChart3,
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
          How It Works
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl">
          Create, publish, and analyze quizzes in three simple steps. No coding or design skills needed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          {HOW_IT_WORKS_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col items-center text-center border border-gray-100 relative"
              >
                <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {card.step}
                </div>
                <div className="w-full flex justify-center mb-6">
                  <div className="relative w-64 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    {card.image ? (
                      <Image src={card.image} alt={card.title} fill className="object-contain" />
                    ) : (
                      <Icon className="h-20 w-20 text-primary/30" />
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 md:p-12 rounded-2xl border border-primary/20 w-full max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
                Ready to create your first quiz?
              </h3>
              <p className="text-gray-600 text-lg">
                Start building engaging quizzes and surveys that convert. Get AI-powered insights and grow your audience with SuperCharger.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:w-1/2 md:justify-end">
              <Link href="/sign-up">
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                  <RocketIcon className="h-5 w-5" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="bg-white border-gray-300 hover:bg-gray-50 flex items-center gap-2 px-8 py-6 text-lg font-semibold"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
