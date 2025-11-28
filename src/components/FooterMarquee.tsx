"use client";

import { motion } from "framer-motion";

export default function FooterMarquee() {
  return (
    <div className="w-full bg-white overflow-hidden py-12 md:py-20 border-t border-gray-100">
      <div className="relative flex whitespace-nowrap">
        <MarqueeText />
        <MarqueeText />
      </div>
    </div>
  );
}

function MarqueeText() {
  return (
    <motion.div
      className="flex items-center whitespace-nowrap"
      animate={{ x: "-100%" }}
      transition={{ 
        repeat: Infinity, 
        ease: "linear", 
        duration: 20 // スピード調整
      }}
    >
      <span className="text-[10vw] md:text-[8vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 px-4 opacity-90">
        NORTHERNS INC.
      </span>
      <span className="text-[10vw] md:text-[8vw] font-bold leading-none tracking-tighter text-gray-200 px-4">
        MEET, CONNECT, CREATE
      </span>
      <span className="text-[10vw] md:text-[8vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 px-4 opacity-90">
        NORTHERNS INC.
      </span>
      <span className="text-[10vw] md:text-[8vw] font-bold leading-none tracking-tighter text-gray-200 px-4">
        MEET, CONNECT, CREATE
      </span>
    </motion.div>
  );
}

