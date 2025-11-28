"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NewsItem } from "@/lib/news-data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface NewsMinimalListProps {
  items: NewsItem[];
}

export default function NewsMinimalList({ items }: NewsMinimalListProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const listRef = useRef<HTMLDivElement>(null);

  // マウス位置の更新
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // アクティブなアイテムの画像を取得
  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div 
      ref={listRef}
      className="relative w-full max-w-4xl mx-auto py-10" 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveId(null)}
    >
      {/* リストヘッダー */}
      <div className="grid grid-cols-12 gap-4 px-4 pb-4 text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200 mb-4">
        <div className="col-span-2 md:col-span-2">Date</div>
        <div className="col-span-3 md:col-span-2">Category</div>
        <div className="col-span-7 md:col-span-8">Title</div>
      </div>

      {/* リストアイテム */}
      <div className="flex flex-col">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`news-item-${item.id}`}
            className="group relative grid grid-cols-12 gap-4 px-4 py-6 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 items-center"
            onMouseEnter={() => setActiveId(item.id)}
          >
            <div className="col-span-2 md:col-span-2 text-sm font-mono text-gray-500 group-hover:text-gray-900 transition-colors">
              {item.date}
            </div>
            <div className="col-span-3 md:col-span-2">
              <span className="inline-block px-2 py-1 text-xs font-semibold border border-gray-200 rounded-full text-gray-600 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all">
                {item.category}
              </span>
            </div>
            <div className="col-span-7 md:col-span-8 flex justify-between items-center gap-4">
              <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-gray-900 transition-all transform group-hover:translate-x-0 translate-x-[-10px]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* フローティング画像プレビュー */}
      <AnimatePresence>
        {activeItem && activeItem.imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x - 150, // マウスを中心に
              y: mousePosition.y - 100,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="pointer-events-none fixed top-0 left-0 z-50 w-[300px] h-[200px] overflow-hidden rounded-xl shadow-2xl hidden md:block"
            style={{
                // fixed position relative to viewport needs client coordinates, 
                // but here we are using relative coordinates to the container?
                // Actually for "fixed" we should use clientX/Y directly or use "absolute" within the container.
                // Let's use absolute positioning within the relative container.
                position: 'absolute',
                top: 0,
                left: 0,
            }}
          >
            <Image
              src={activeItem.imageUrl}
              alt={activeItem.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

