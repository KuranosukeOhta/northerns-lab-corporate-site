"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NewsItem } from "@/lib/news-data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-12 sm:py-20 px-4">
      {/* センターライン */}
      <div className="absolute left-6 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2">
        <motion.div 
          style={{ height: lineHeight }}
          className="w-full bg-gray-900 origin-top"
        />
      </div>

      <div className="space-y-12 sm:space-y-24">
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
      className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 items-start md:items-center ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* タイムラインドット */}
      <div className="absolute left-6 sm:left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white border-[3px] sm:border-4 border-gray-900 rounded-full z-10 transform -translate-x-[5px] sm:-translate-x-[7px] md:-translate-x-1/2 mt-1" />

      {/* コンテンツエリア */}
      <div className={`w-full md:w-[calc(50%-2rem)] pl-10 sm:pl-12 md:pl-0 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="flex flex-col gap-2">
          <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            <span className="text-xs sm:text-sm font-mono text-gray-500">{item.date}</span>
            <span className="px-2 py-0.5 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
              {item.category}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-none">
            {item.summary}
          </p>
          
          {/* モバイル用画像 */}
          {item.imageUrl && (
            <div className="mt-3 md:hidden">
              <Link href={`/news/${item.id}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
          )}
          
          <div className={`mt-3 sm:mt-4 flex ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
            <Link 
              href={`/news/${item.id}`} 
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 active:text-gray-800 transition-colors py-2 min-h-[44px]"
            >
              Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* 画像エリア (デスクトップのみ) */}
      <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 hidden md:block`}>
         <Link href={`/news/${item.id}`}>
             {item.imageUrl ? (
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow cursor-pointer">
                    <Image 
                        src={item.imageUrl} 
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
             ) : (
                // 画像がない場合のプレースホルダー的なデザイン要素
                <div className="w-full h-full min-h-[180px] rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
                    <div className="text-center">
                        <span className="block text-4xl mb-2 font-thin opacity-20">LOGO</span>
                    </div>
                </div>
             )}
         </Link>
      </div>
    </motion.div>
  );
}
