"use client";

import { motion } from "framer-motion";

export default function FooterMarquee() {
  return (
    <div className="w-full bg-white overflow-hidden py-12 md:py-20 border-t border-gray-100 flex flex-col gap-2 md:gap-4">
      {/* 1行目: 左方向へ移動 */}
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <MarqueeRow 
          direction="left" 
          text="NORTHERNS" 
          duration={100} 
          textSize="text-[13vw] md:text-[12vw]"
        />
        <MarqueeRow 
          direction="left" 
          text="NORTHERNS" 
          duration={100} 
          textSize="text-[13vw] md:text-[12vw]"
        />
      </div>
      
      {/* 2行目: 右方向へ移動 */}
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <MarqueeRow 
          direction="right" 
          text="MEET, CONNECT, CREATE" 
          duration={75} 
          textSize="text-[6vw] md:text-[4vw]"
        />
        <MarqueeRow 
          direction="right" 
          text="MEET, CONNECT, CREATE" 
          duration={75} 
          textSize="text-[6vw] md:text-[4vw]"
        />
      </div>
    </div>
  );
}

interface MarqueeRowProps {
  direction?: "left" | "right";
  text: string;
  duration?: number;
  textSize?: string;
}

function MarqueeRow({ direction = "left", text, duration = 50, textSize = "text-[8vw] md:text-[6vw]" }: MarqueeRowProps) {
  const isLeft = direction === "left";
  
  return (
    <motion.div
      className="flex items-center whitespace-nowrap"
      initial={{ x: isLeft ? 0 : "-100%" }}
      animate={{ x: isLeft ? "-100%" : 0 }}
      transition={{ 
        repeat: Infinity, 
        ease: "linear", 
        duration: duration
      }}
    >
      {[...Array(4)].map((_, i) => {
        // 偶数・奇数でスタイルを切り替え（行によって反転）
        const isGradient = isLeft ? i % 2 === 0 : i % 2 !== 0;
        
        // グラデーションの向きを交互に変える
        // 左方向(上段): 0番目は青→橙, 2番目は橙→青
        // 右方向(下段): 1番目は橙→青, 3番目は青→橙
        const isBlueToOrange = isLeft ? i % 4 === 0 : i % 4 === 3;

        return (
          <span 
            key={i}
            className={`${textSize} font-bold leading-none tracking-tighter px-4 ${
              isGradient 
                ? `text-transparent bg-clip-text bg-gradient-to-r opacity-90 ${
                    isBlueToOrange ? "from-blue-600 to-orange-500" : "from-orange-500 to-blue-600"
                  }`
                : "text-gray-800"
            }`}
          >
            {text}
          </span>
        );
      })}
    </motion.div>
  );
}
