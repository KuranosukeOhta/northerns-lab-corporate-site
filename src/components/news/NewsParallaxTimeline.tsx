"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NewsItem } from "@/lib/news-data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface NewsParallaxTimelineProps {
  items: NewsItem[];
}

export default function NewsParallaxTimeline({ items }: NewsParallaxTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // コンテナ全体のスクロール進捗
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 中央のラインの高さアニメーション
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-20 px-4">
      {/* センターライン */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2">
        <motion.div 
          style={{ height: lineHeight }}
          className="w-full bg-gray-900 origin-top"
        />
      </div>

      <div className="space-y-24">
        {items.map((item, index) => (
          <TimelineItem 
            key={item.id} 
            item={item} 
            index={index} 
            isLeft={index % 2 === 0} 
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index, isLeft }: { item: NewsItem, index: number, isLeft: boolean }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, y, scale }}
      className={`relative flex flex-col md:flex-row gap-8 items-center ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* タイムラインドット */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-gray-900 rounded-full z-10 transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5" />

      {/* コンテンツエリア (デスクトップでは左右交互) */}
      <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="flex flex-col gap-2">
          <div className={`flex items-center gap-3 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            <span className="text-sm font-mono text-gray-500">{item.date}</span>
            <span className="px-2 py-0.5 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
              {item.category}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            {item.summary}
          </p>
          <div className={`mt-4 flex ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            <button className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
              Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* 画像エリア (オプション) */}
      <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 hidden md:block`}>
         {item.imageUrl ? (
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
                <Image 
                    src={item.imageUrl} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>
         ) : (
            // 画像がない場合のプレースホルダー的なデザイン要素
            <div className="w-full h-full min-h-[180px] rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300">
                <div className="text-center">
                    <span className="block text-4xl mb-2 font-thin opacity-20">LOGO</span>
                </div>
            </div>
         )}
      </div>
    </motion.div>
  );
}

