"use client";

import HeroSection from "@/components/HeroSection";
import ProjectHoverReveal from "@/components/projects/ProjectHoverReveal";
import SupportFlowSection from "@/components/SupportFlowSection";
import CompanyProfileSection from "@/components/CompanyProfileSection";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NEWS_ITEMS } from "@/lib/news-data";

export default function Home() {
  // 最新のニュースを取得
  const latestNews = NEWS_ITEMS[0];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectHoverReveal />
        
        {/* Support Flow Section */}
        <SupportFlowSection />

        {/* Latest Info Section */}
        <section id="news" className="w-full py-16 sm:py-24 md:py-32 bg-gray-50 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div>
                <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-3 sm:mb-4">News</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  最新情報
                </h2>
              </div>
              <Link href="/news" className="hidden md:flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all min-h-[44px]">
                View All News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:gap-8">
              {/* Featured News Item */}
              {latestNews && (
                <Link href={`/news/${latestNews.id}`}>
                  <Card className="group bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer h-full">
                    <div className="grid md:grid-cols-2 gap-0 h-full">
                      <div className="relative aspect-video md:aspect-auto bg-gray-200 overflow-hidden min-h-[180px] sm:min-h-[250px]">
                        {latestNews.imageUrl ? (
                           <Image
                             src={latestNews.imageUrl}
                             alt={latestNews.title}
                             fill
                             className="object-cover group-hover:scale-105 transition-transform duration-700"
                           />
                        ) : (
                           <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:scale-105 transition-transform duration-700" />
                        )}
                      </div>
                      <CardContent className="p-5 sm:p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                          <span className="text-xs sm:text-sm font-medium text-gray-500">{latestNews.date}</span>
                          <span className="px-2 sm:px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">{latestNews.category}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
                          {latestNews.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-8 leading-relaxed line-clamp-3">
                          {latestNews.summary}
                        </p>
                        <div>
                          <span className="inline-flex items-center gap-2 text-black font-semibold border-b border-black pb-0.5 hover:pb-1 transition-all text-sm sm:text-base">
                            Read More
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              )}
            </div>
            
            <div className="mt-6 sm:mt-8 md:hidden text-center">
               <Link href="/news" className="inline-flex items-center gap-2 text-gray-900 font-semibold py-2 min-h-[44px]">
                View All News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <CompanyProfileSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}
