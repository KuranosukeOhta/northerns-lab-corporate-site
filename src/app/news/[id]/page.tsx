"use client";

import { useParams } from "next/navigation";
import { NEWS_ITEMS } from "@/lib/news-data";
import ClassicEditorial from "@/components/news/article-templates/ClassicEditorial";

export default function NewsArticlePage() {
  const params = useParams();
  const id = params.id as string;
  
  // 実際のデータ取得ロジック (ここでは静的データから検索)
  const item = NEWS_ITEMS.find((i) => i.id === id);

  if (!item) {
    return <div className="min-h-screen flex items-center justify-center">Article Not Found</div>;
  }

  return <ClassicEditorial item={item} content="" />;
}
