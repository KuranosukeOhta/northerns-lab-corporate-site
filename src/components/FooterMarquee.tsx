"use client";

import { motion } from "framer-motion";

export default function FooterMarquee() {
  return (
    <div className="w-full bg-white overflow-hidden py-12 md:py-20 border-t border-gray-100 flex flex-col gap-2 md:gap-4">
      {/* 1行目: 左方向へ移動 */}
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <MarqueeRow direction="left" />
        <MarqueeRow direction="left" />
      </div>
      
      {/* 2行目: 右方向へ移動 */}
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <MarqueeRow direction="right" />
        <MarqueeRow direction="right" />
      </div>
    </div>
  );
}

interface MarqueeRowProps {
  direction?: "left" | "right";
}

function MarqueeRow({ direction = "left" }: MarqueeRowProps) {
  const isLeft = direction === "left";
  
  return (
    <motion.div
      className="flex items-center whitespace-nowrap"
      initial={{ x: isLeft ? 0 : "-100%" }}
      animate={{ x: isLeft ? "-100%" : 0 }}
      transition={{ 
        repeat: Infinity, 
        ease: "linear", 
        duration: 25
      }}
    >
      <span className={`text-[8vw] md:text-[6vw] font-bold leading-none tracking-tighter px-4 opacity-90 ${
        isLeft 
          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500" 
          : "text-gray-200" // ストローク風のデザインにするのもありだが、まずは色反転でメリハリをつける
      }`}>
        NORTHERNS INC.
      </span>
      <span className={`text-[8vw] md:text-[6vw] font-bold leading-none tracking-tighter px-4 ${
        isLeft 
          ? "text-gray-200" 
          : "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600"
      }`}>
        MEET, CONNECT, CREATE
      </span>
      <span className={`text-[8vw] md:text-[6vw] font-bold leading-none tracking-tighter px-4 opacity-90 ${
        isLeft 
          ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600" 
          : "text-gray-200"
      }`}>
        NORTHERNS INC.
      </span>
      <span className={`text-[8vw] md:text-[6vw] font-bold leading-none tracking-tighter px-4 ${
        isLeft 
          ? "text-gray-200" 
          : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"
      }`}>
        MEET, CONNECT, CREATE
      </span>
    </motion.div>
  );
}
