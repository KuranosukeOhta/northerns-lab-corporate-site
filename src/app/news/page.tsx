import { NEWS_ITEMS } from "@/lib/news-data";
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

        {/* Main Content: Parallax Timeline */}
        <section className="mb-24">
            <NewsParallaxTimeline items={NEWS_ITEMS} />
        </section>
      </div>
    </div>
  );
}
