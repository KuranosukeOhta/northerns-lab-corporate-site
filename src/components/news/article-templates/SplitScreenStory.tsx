"use client";

import { NewsItem } from "@/lib/news-data";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ArticleTemplateProps {
  item: NewsItem;
  content: string;
}

export default function SplitScreenStory({ item, content }: ArticleTemplateProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // 画面中央にきたセクションをアクティブにする
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visuals = [
    item.imageUrl, // 0: Main Visual
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // 1: Tech Context
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop", // 2: Team Context
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
        {/* Left Side: Sticky Visual (Desktop) / Top Visual (Mobile) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                 {visuals.map((src, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            activeSection === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {src ? (
                            <Image 
                                src={src} 
                                alt={`Visual for section ${index}`}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white/20 font-bold text-4xl">
                                NO IMAGE
                            </div>
                        )}
                        <div className="absolute inset-0 bg-black/30" />
                    </div>
                 ))}
            </div>
            
            <div className="absolute top-8 left-8 z-10">
                <Link href="/news" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </div>

            <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-sm font-mono opacity-70 mb-2">SECTION {activeSection + 1} / 3</p>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-white transition-all duration-500 ease-out"
                        style={{ width: `${((activeSection + 1) / 3) * 100}%` }}
                    />
                </div>
            </div>
        </div>

        {/* Right Side: Scrollable Content */}
        <div className="w-full md:w-1/2">
            <div className="max-w-xl mx-auto px-8 py-24 md:py-32">
                {/* Section 1 */}
                <div className="content-section min-h-[80vh] flex flex-col justify-center mb-24">
                    <span className="text-blue-600 font-bold tracking-wider text-sm mb-4">{item.category}</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        {item.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {item.summary} スプリットスクリーンレイアウトでは、テキストとビジュアルを並行して見せることができます。左側の画像は、右側のテキストのスクロール位置に合わせて切り替わります。
                    </p>
                </div>

                {/* Section 2 */}
                <div className="content-section min-h-[80vh] flex flex-col justify-center mb-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">コンテキストに合わせた視覚体験</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        このレイアウトの最大の利点は、「今なにについて話しているか」を視覚的に補強できることです。
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        例えば、製品の機能について説明しているときはその機能のスクリーンショットを、チームの哲学について語っているときはメンバーの写真を、といった具合に、読者の理解を深める画像を適切なタイミングで提示できます。
                    </p>
                </div>

                {/* Section 3 */}
                <div className="content-section min-h-[80vh] flex flex-col justify-center pb-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">論理的な構成と信頼感</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        情報が整理されて見えるため、論理的でスマートな印象を与えます。投資家向けの情報（IR）や、採用情報、技術的なケーススタディなど、信頼性が求められるコンテンツに非常に適しています。
                    </p>
                    <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors self-start">
                        お問い合わせはこちら
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

