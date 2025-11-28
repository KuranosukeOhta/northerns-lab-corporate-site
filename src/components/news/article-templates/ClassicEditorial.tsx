import { NewsItem } from "@/lib/news-data";
import Image from "next/image";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import Link from "next/link";

interface ArticleTemplateProps {
  item: NewsItem;
  content: string;
}

export default function ClassicEditorial({ item, content }: ArticleTemplateProps) {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/news" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Editorial Mode</span>
        </div>
      </div>

      <article className="pt-32 container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                    {item.category}
                </span>
                <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.date}
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 leading-tight mb-8">
                {item.title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 border-t border-b border-gray-100 py-4 max-w-xl mx-auto">
                <span className="font-medium">By Northern's Lab Editorial Team</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>5 min read</span>
            </div>
        </div>

        {/* Hero Image */}
        {item.imageUrl && (
            <div className="relative aspect-[21/9] w-full mb-16 overflow-hidden rounded-sm">
                <Image 
                    src={item.imageUrl} 
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-gray mx-auto font-sans">
             {/* Dummy Content Generator */}
             <p className="lead text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                {item.summary} ここはリード文が入ります。記事の要約や導入部分として、読者の興味を惹きつける重要なセクションです。
             </p>

             <p>
                本文がここから始まります。シンプルで洗練されたレイアウトにより、視線が自然と文章の開始位置に誘導され、読み始めやすくなります。
             </p>

             <p>
                テキストの読みやすさを重視し、適切な行間と文字サイズを設定しています。サイトのトーンに合わせてサンセリフ体を使用し、モダンでクリーンな印象を与え、長文でも疲れにくいデザインを目指しています。
             </p>

             <h2>セクション見出し</h2>
             <p>
                ここに詳細な内容が入ります。企業の取り組み、技術的な解説、あるいはインタビューの内容など、深い情報を提供するのに適したレイアウトです。
             </p>
             
             <blockquote>
                「引用文はこのように表示されます。重要なメッセージや発言を強調するために使用します。」
             </blockquote>

             <p>
                画像や図表を挟みながら、ストーリーを展開していきます。余白を十分に取ることで、情報の圧迫感を減らし、ゆったりとした読書体験を提供します。
             </p>
        </div>

        {/* Footer */}
        <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-500">
                Shared on {item.date}
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                <Share2 className="w-4 h-4" /> Share this article
            </button>
        </div>
      </article>
    </div>
  );
}

