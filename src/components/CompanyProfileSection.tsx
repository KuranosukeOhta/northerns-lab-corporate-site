import { MapPin, Building2, Globe2, Mail } from "lucide-react";

export default function CompanyProfileSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Title & Intro */}
          <div>
            <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">Company</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              会社概要
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Northerns株式会社は、北海道札幌市を拠点とするテックカンパニーです。<br />
              「北の大地から、世界へ」をテーマに、デジタルの力で地域と世界をつなぐ架け橋となります。
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-block">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Head Office</p>
                  <p className="text-gray-900 font-semibold">北海道札幌市</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Contact</p>
                  <p className="text-gray-900 font-semibold">info@northerns.co.jp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details List */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-100">
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider w-32 shrink-0">会社名</span>
                <span className="text-gray-900 font-medium">Northerns株式会社 (Northerns Inc.)</span>
              </div>
              
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider w-32 shrink-0">設立</span>
                <span className="text-gray-900 font-medium">202X年 X月</span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider w-32 shrink-0">代表者</span>
                <span className="text-gray-900 font-medium">代表取締役 大田 蔵之介</span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider w-32 shrink-0">事業内容</span>
                <div className="text-gray-900 font-medium space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span>多言語コンテンツ制作事業</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span>3D可視化・撮影事業</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span>DXコンサルティング・開発事業</span>
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

