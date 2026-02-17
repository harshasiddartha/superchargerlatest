"use client";

import { usePathname } from "next/navigation";
import Footer from "./marketing/footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Show footer on home page, landing page, and auth pages
  const pagesWithFooter = ["/", "/sign-in", "/sign-up", "/forgot-password"];
  const shouldShowFooter = pagesWithFooter.includes(pathname || "");
  
  if (shouldShowFooter) {
    return <Footer />;
  }
  
  return null;
}
