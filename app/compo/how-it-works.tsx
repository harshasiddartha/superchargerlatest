import { Button } from "@/components/ui/button";
import { FileQuestion, Sparkles, BarChart3, RocketIcon } from "lucide-react";
import Link from "next/link";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Your Quiz",
      description: "Build engaging quizzes manually or use AI to generate questions instantly. Add multiple choice questions, customize options, and set up scoring.",
      icon: FileQuestion,
    },
    {
      number: 2,
      title: "AI-Powered Generation",
      description: "Let our AI create questions based on your topic. Get context-aware, non-redundant questions that engage your audience effectively.",
      icon: Sparkles,
    },
    {
      number: 3,
      title: "Publish & Analyze",
      description: "Share your quiz with a public link and track responses in real-time. Get AI-powered insights and analytics to understand your audience better.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">How It Works</h2>
        <p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
          Create, publish, and analyze quizzes in three simple steps. No coding or design skills needed.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="bg-primary/10 text-primary text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 md:p-12 rounded-2xl border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Ready to create your first quiz?</h2>
              <p className="text-gray-600 text-lg mb-6">
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
}