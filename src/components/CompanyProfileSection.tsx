import { MapPin, Mail } from "lucide-react";

export default function CompanyProfileSection() {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Title & Intro */}
          <div>
            <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-3 sm:mb-4">Company</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-8">
              事業者概要
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Northerns（ノーザンズ）は、北海道札幌市で設立されたテックカンパニーです。<br className="hidden sm:block" />
              「北の大地から、世界へ」をテーマに、デジタルの力で地域と世界をつなぐ架け橋となります。
            </p>
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 inline-block w-full sm:w-auto">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="p-2.5 sm:p-3 bg-gray-100 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Head Office</p>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">東京都江東区</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-gray-100 rounded-lg shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Contact</p>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold break-all">info@northerns.co.jp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details List */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-100">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider w-full sm:w-32 shrink-0">屋号</span>
                <span className="text-sm sm:text-base text-gray-900 font-medium">Northerns（ノーザンズ）</span>
              </div>

              <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider w-full sm:w-32 shrink-0">代表者</span>
                <span className="text-sm sm:text-base text-gray-900 font-medium">太田 藏之介</span>
              </div>
              
              <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider w-full sm:w-32 shrink-0">開業</span>
                <span className="text-sm sm:text-base text-gray-900 font-medium">2025年 12月</span>
              </div>

              <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider w-full sm:w-32 shrink-0">事業内容</span>
                <div className="text-sm sm:text-base text-gray-900 font-medium space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                    <span>SaaS開発・運営</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                    <span>動画翻訳・ローカライズ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                    <span>3Dバーチャルツアー制作</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                    <span>Webサイト・システム開発</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

