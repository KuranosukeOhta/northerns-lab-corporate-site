"use client";

import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SupportFlowSection from "@/components/SupportFlowSection";
import CompanyProfileSection from "@/components/CompanyProfileSection";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-gray-900 selection:text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Support Flow Section */}
        <SupportFlowSection />

        {/* Latest Info Section */}
        <section id="news" className="w-full py-24 md:py-32 bg-gray-50 relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">News</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  最新情報
                </h2>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
                View All News <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid gap-8">
              {/* Featured News Item */}
              <Card className="group bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden rounded-3xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto bg-gray-200 overflow-hidden">
                    {/* Placeholder for news image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-gray-500">2025.01.14</span>
                      <span className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">Press Release</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
                      AI活用事例のご紹介
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      AI技術を活用したプロジェクトの事例や、企業のデジタル変革支援についてご紹介いたします。
                      最新の技術トレンドを取り入れたソリューションの詳細をご覧ください。
                    </p>
                    <div>
                      <span className="inline-flex items-center gap-2 text-black font-semibold border-b border-black pb-0.5 hover:pb-1 transition-all cursor-pointer">
                        Read More
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
            
            <div className="mt-8 md:hidden text-center">
               <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-semibold">
                View All News <ArrowRight className="w-4 h-4" />
              </a>
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
