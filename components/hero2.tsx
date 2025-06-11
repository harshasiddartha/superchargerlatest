import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./global/container";
import Icons from "./global/icons2";
import { Button } from "./ui/button";
import { OrbitingCircles } from "../components/ui/orbiting-circles";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 bg-background">
            {/* User badge at the top */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full shadow bg-white border border-border absolute top-8 left-1/2 -translate-x-1/2 z-10">
                <div className="flex -space-x-2">
                    <Image src="/images/User_1.webp" alt="User 1" width={32} height={32} className="rounded-full border-2 border-white" />
                    <Image src="/images/User_2.webp" alt="User 2" width={32} height={32} className="rounded-full border-2 border-white" />
                    <Image src="/images/User_3.webp" alt="User 3" width={32} height={32} className="rounded-full border-2 border-white" />
                </div>
                <span className="text-gray-700 text-sm font-medium ml-2">9k+ users worldwide</span>
            </div>

            {/* Main content */}
            <div className="flex flex-col items-center justify-center text-center gap-y-6 mt-24">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
                    Attract, Engage, and<br />Convert Your Audience
                        </h1>
                <p className="max-w-xl mx-auto mt-2 text-lg text-center text-gray-500">
                    Create marketing funnels that deliver personalized results,<br />build trust and make sales faster than ever before.
                        </p>
                <div className="flex flex-col items-center gap-2 mt-6">
                    <Link href="#" className="w-full">
                        <Button size="lg" className="w-56 text-lg font-semibold">
                            Get Started
                            <ArrowRightIcon className="size-5 ml-2" />
                                </Button>
                            </Link>
                    <span className="text-gray-500 text-sm mt-1">Start for free. No credit card required.</span>
                    <Link href="#" className="flex items-center gap-2 text-primary font-medium text-base mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" /></svg>
                        Watch Demo
                    </Link>
                </div>
                        </div>

            {/* Dashboard image at the bottom (unchanged) */}
            <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg mt-16 max-w-6xl mx-auto">
                            <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
                            <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>
                            <div className="rounded-lg lg:rounded-[22px] border border-border bg-background">
                                <Image
                                    src="/images/dashboard.png"
                                    alt="dashboard"
                                    width={1920}
                                    height={1080}
                                    className="rounded-lg lg:rounded-[20px]"
                                />
                </div>
            </div>
        </div>
    )
};

export default Hero