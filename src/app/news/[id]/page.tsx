"use client";

import { useParams, useSearchParams } from "next/navigation";
import { NEWS_ITEMS } from "@/lib/news-data";
import ClassicEditorial from "@/components/news/article-templates/ClassicEditorial";
import ImmersiveVisual from "@/components/news/article-templates/ImmersiveVisual";
import SplitScreenStory from "@/components/news/article-templates/SplitScreenStory";
import FloatingCard from "@/components/news/article-templates/FloatingCard";
import Link from "next/link";
import { useState } from "react";

export default function NewsArticlePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  
  // 実際のデータ取得ロジック (ここでは静的データから検索)
  const item = NEWS_ITEMS.find((i) => i.id === id);

  // デザインパターンの切り替え用State
  // URLクエリパラメータ ?design=classic などで初期値を指定可能にするとなお便利
  const initialDesign = searchParams.get("design") || "classic";
  const [currentDesign, setCurrentDesign] = useState(initialDesign);

  if (!item) {
    return <div className="min-h-screen flex items-center justify-center">Article Not Found</div>;
  }

  // デザインスイッチャー (開発確認用)
  const DesignSwitcher = () => (
    <div className="fixed bottom-4 right-4 z-[100] bg-white/90 backdrop-blur shadow-2xl border border-gray-200 rounded-xl p-4 flex flex-col gap-2 w-64">
      <p className="text-xs font-bold text-gray-500 uppercase mb-1">Select Design Template</p>
      <button 
        onClick={() => setCurrentDesign("classic")}
        className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${currentDesign === "classic" ? "bg-gray-900 text-white font-bold" : "hover:bg-gray-100 text-gray-700"}`}
      >
        1. Classic Editorial
      </button>
      <button 
        onClick={() => setCurrentDesign("immersive")}
        className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${currentDesign === "immersive" ? "bg-gray-900 text-white font-bold" : "hover:bg-gray-100 text-gray-700"}`}
      >
        2. Immersive Visual
      </button>
      <button 
        onClick={() => setCurrentDesign("split")}
        className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${currentDesign === "split" ? "bg-gray-900 text-white font-bold" : "hover:bg-gray-100 text-gray-700"}`}
      >
        3. Split Screen Story
      </button>
      <button 
        onClick={() => setCurrentDesign("card")}
        className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${currentDesign === "card" ? "bg-gray-900 text-white font-bold" : "hover:bg-gray-100 text-gray-700"}`}
      >
        4. Floating Card
      </button>
    </div>
  );

  // デザインに応じたレンダリング
  const renderTemplate = () => {
    switch (currentDesign) {
      case "classic":
        return <ClassicEditorial item={item} content="" />;
      case "immersive":
        return <ImmersiveVisual item={item} content="" />;
      case "split":
        return <SplitScreenStory item={item} content="" />;
      case "card":
        return <FloatingCard item={item} content="" />;
      default:
        return <ClassicEditorial item={item} content="" />;
    }
  };

  return (
    <>
      {renderTemplate()}
      <DesignSwitcher />
    </>
  );
}

