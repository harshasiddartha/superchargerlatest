"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Show navbar on home page and auth pages (sign-in, sign-up)
  const pagesWithNavbar = ["/", "/sign-in", "/sign-up"];
  const shouldShowNavbar = pagesWithNavbar.includes(pathname || "");
  
  if (shouldShowNavbar) {
    return <Navbar />;
  }
  
  return null;
}
