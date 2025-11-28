"use client";

import { NewsItem } from "@/lib/news-data";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface ArticleTemplateProps {
  item: NewsItem;
  content: string;
}

export default function FloatingCard({ item, content }: ArticleTemplateProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="min-h-screen bg-[#f0f2f5] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
            style={{ y: y1 }}
            className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply" 
        />
        <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl mix-blend-multiply" 
        />
      </div>

      <div className="relative z-10">
        {/* Header Navigation */}
        <div className="container mx-auto px-4 pt-8 mb-12">
             <Link href="/news" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-gray-600 hover:text-black hover:shadow-md transition-all">
                <ArrowLeft className="w-5 h-5" />
             </Link>
        </div>

        <div className="container mx-auto px-4 pb-24 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Main Content Card */}
                <div className="md:col-span-8">
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg uppercase tracking-wide">
                                {item.category}
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {item.date}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            {item.title}
                        </h1>

                        {item.imageUrl && (
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-inner">
                                <Image 
                                    src={item.imageUrl} 
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="prose prose-lg prose-slate max-w-none">
                            <p className="lead font-medium text-gray-600">
                                {item.summary} フローティングカードデザインは、モダンなWebアプリケーションやダッシュボードのような親しみやすさがあります。
                            </p>
                            <p>
                                背景から独立した「カード」の中にコンテンツを収めることで、情報のまとまりが明確になります。また、全体的に角丸（Rounded Corners）やドロップシャドウを多用し、柔らかく現代的な印象を与えます。
                            </p>
                            <h3>カジュアルさと洗練</h3>
                            <p>
                                このデザインは、堅苦しさを排除しつつも、安っぽくならない絶妙なバランスを狙っています。テックブログや、社内の雰囲気を伝える記事、あるいはカジュアルなニュースに適しています。
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar Cards */}
                <div className="md:col-span-4 space-y-6 md:sticky md:top-8">
                    {/* Author Card */}
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-6 rounded-2xl shadow-lg"
                    >
                        <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Author</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden relative">
                                {/* Avatar Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Northerns Lab Team</p>
                                <p className="text-xs text-gray-500">Editorial Staff</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags Card */}
                    <motion.div 
                         initial={{ x: 20, opacity: 0 }}
                         animate={{ x: 0, opacity: 1 }}
                         transition={{ duration: 0.6, delay: 0.3 }}
                         className="bg-white p-6 rounded-2xl shadow-lg"
                    >
                        <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Related Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {['AI', 'Technology', 'Design', 'Future'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs rounded-full transition-colors cursor-pointer flex items-center gap-1">
                                    <Tag className="w-3 h-3" /> {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Share Card */}
                    <motion.div 
                         initial={{ x: 20, opacity: 0 }}
                         animate={{ x: 0, opacity: 1 }}
                         transition={{ duration: 0.6, delay: 0.4 }}
                         className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg text-white"
                    >
                        <h3 className="font-bold mb-2">Share this article</h3>
                        <p className="text-xs text-gray-400 mb-4">Spread the knowledge with your network.</p>
                        <div className="flex gap-2">
                             <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs font-bold transition-colors">Twitter</button>
                             <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs font-bold transition-colors">LinkedIn</button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}

