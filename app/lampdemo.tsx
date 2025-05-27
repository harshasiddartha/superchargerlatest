"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-7xl"
      >
        Start your journey <br /> with us
      </motion.h1>
      <a
        href="#get-started"
        className="mt-8 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg ring-1 ring-cyan-500/30 transition hover:scale-105 hover:from-cyan-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
      >
        Get Started
      </a>
    </LampContainer>
  );
}
