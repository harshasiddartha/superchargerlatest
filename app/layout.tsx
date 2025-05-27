// import DeployButton from "@/components/deploy-button";
// import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
// import { ThemeSwitcher } from "@/components/theme-switcher";
// import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/marketing/footer";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SuperCharger",
  description: "The fastest way to build surveys and boost your sales funnel",
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-8 items-center font-semibold">
                    <Link href="/" className="text-lg md:text-xl">SuperCharger</Link>
                    {/* <Link href="/features" className="hover:text-foreground/70 transition">Features</Link>
                    <Link href="/pricing" className="hover:text-foreground/70 transition">Pricing</Link>
                    <Link href="/docs" className="hover:text-foreground/70 transition">Docs</Link>
                    <Link href="/contact" className="hover:text-foreground/70 transition">Contact</Link> */}
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <Link href="/signup" className="hidden md:inline-block rounded-full bg-cyan-500 px-4 py-2 text-white font-medium hover:bg-cyan-600 transition">
                      Get Started
                    </Link> */}
                    <HeaderAuth />
                  </div>
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5 w-full">
                {children}
              </div>

             <Footer/>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
