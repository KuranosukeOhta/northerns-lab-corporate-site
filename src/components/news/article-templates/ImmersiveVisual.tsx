"use client";

import { NewsItem } from "@/lib/news-data";
import Image from "next/image";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ArticleTemplateProps {
  item: NewsItem;
  content: string;
}

export default function ImmersiveVisual({ item, content }: ArticleTemplateProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Link 
        href="/news" 
        className="fixed top-8 left-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all text-white border border-white/20"
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>

      {/* Hero Section */}
      <div ref={targetRef} className="relative h-screen w-full overflow-hidden">
        {item.imageUrl ? (
            <motion.div 
                style={{ scale }}
                className="absolute inset-0 w-full h-full"
            >
                <Image 
                    src={item.imageUrl} 
                    alt={item.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>
        ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
        )}
        
        <motion.div 
            style={{ opacity, y: textY }}
            className="absolute bottom-0 left-0 w-full p-8 md:p-24 flex flex-col items-start justify-end h-full z-10"
        >
            <span className="inline-block px-3 py-1 border border-white/30 rounded-full text-sm tracking-wider mb-6 backdrop-blur-sm">
                {item.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
                {item.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                {item.summary}
            </p>
            
            <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 bg-black">
        <div className="container mx-auto px-4 py-24 max-w-3xl">
             <div className="prose prose-invert prose-lg mx-auto">
                 <p>
                    このデザインは「没入感（Immersive）」をテーマにしています。最初の画面（ファーストビュー）で強力なビジュアルインパクトを与え、ユーザーを一気に記事の世界観に引き込みます。
                 </p>
                 <p>
                    黒背景に白文字という配色は、映画のエンドロールや高級ブランドのサイトでよく見られる手法で、コンテンツ自体に集中させる効果があります。また、画像の色味を際立たせる効果もあります。
                 </p>

                 <div className="my-12 border-l-4 border-blue-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold mb-4 text-white">視覚的なストーリーテリング</h3>
                    <p className="text-gray-300">
                        スクロールに合わせて要素が動くパララックス効果や、フェードイン・アウトのアニメーションを多用することで、静的な記事を「体験」へと昇華させています。
                    </p>
                 </div>

                 <p>
                    技術的な解説や、製品の深いコンセプトを伝えるのに適しています。読者は余計な情報に邪魔されることなく、深く思考しながら読み進めることができます。
                 </p>
             </div>
        </div>
      </div>
    </div>
  );
}

