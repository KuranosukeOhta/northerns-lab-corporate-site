import { NEWS_ITEMS } from "@/lib/news-data";
import NewsMinimalList from "@/components/news/NewsMinimalList";
import NewsParallaxTimeline from "@/components/news/NewsParallaxTimeline";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      <div className="container mx-auto px-4 py-8">
        <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
            <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <header className="mb-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                News & Updates
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Northern's Labの最新情報、プレスリリース、イベント情報などをお届けします。
            </p>
        </header>

        {/* Proposal 2: Kinetic Minimal List */}
        <section className="mb-32">
            <div className="flex items-center justify-between mb-12 border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">Pattern A</span>
                    Kinetic Minimal List
                </h2>
                <p className="text-sm text-gray-500 hidden md:block">
                    Hover over items to see preview
                </p>
            </div>
            
            <NewsMinimalList items={NEWS_ITEMS} />
        </section>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-24" />

        {/* Proposal 3: Parallax Timeline */}
        <section className="mb-24">
            <div className="flex items-center justify-between mb-12 border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">Pattern B</span>
                    Parallax Timeline
                </h2>
                <p className="text-sm text-gray-500 hidden md:block">
                    Scroll to see animation
                </p>
            </div>

            <NewsParallaxTimeline items={NEWS_ITEMS} />
        </section>
      </div>
    </div>
  );
}

