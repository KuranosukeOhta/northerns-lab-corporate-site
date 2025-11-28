import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Camera, Code, MessageSquare, Printer, ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-24 md:py-32 overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent blur-sm"></div>
      
      <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-gray-400 text-gray-600">
            Our Works
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 mb-6">
            Project Highlight
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            最先端技術とクリエイティブな発想で、<br className="hidden sm:inline" />
            多様なビジネス課題を解決するプロジェクトを展開しています。
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {/* Featured Project - Large Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 group">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black text-white mb-4 group-hover:scale-110 transition-transform duration-500">
                <Camera className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">3D Visualization Services</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Matterportを活用した、没入感のある不動産・施設の3Dバーチャルツアー撮影サービス。
                  空間をデジタル化し、Web上で自由にウォークスルーできる体験を提供します。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    <span>4K高画質での空間撮影・データ化</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    <span>Googleストリートビュー連携対応</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    <span>タグ付け・計測機能の提供</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <a 
                  href="https://matterport-service-hp.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all duration-300 border-b-2 border-black pb-1"
                >
                  View Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-gray-100 group-hover:shadow-xl transition-all duration-500">
               {/* Placeholder for project image */}
               <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Camera className="w-24 h-24 text-gray-400 opacity-50" />
               </div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
          </div>

          {/* Secondary Projects - 2 Col Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Project 2 */}
            <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 flex flex-col h-full">
              <div className="mb-8 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
                   <Globe className="w-20 h-20 text-indigo-300" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white group-hover:scale-110 transition-transform duration-500">
                    <Globe className="w-6 h-6" />
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-0">Localization</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">TranslateJapan</h3>
                <p className="text-gray-600 leading-relaxed">
                  海外コンテンツの日本語ローカライズに特化した、YouTube動画の翻訳・吹き替えサービス。
                  クリエイターの世界進出と言語の壁を超えたコンテンツ流通を支援します。
                </p>
              </div>
              <div className="pt-8 mt-auto">
                <a 
                  href="https://translate-japan.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Visit Site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 flex flex-col h-full">
              <div className="mb-8 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                   <Code className="w-20 h-20 text-emerald-300" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-600 text-white group-hover:scale-110 transition-transform duration-500">
                    <Code className="w-6 h-6" />
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-0">DX Support</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Local Business DX</h3>
                <p className="text-gray-600 leading-relaxed">
                  地域企業のデジタル化を包括的にサポート。Webサイト制作からSNS運用、
                  業務効率化ツールの導入まで、スモールビジネスの成長を加速させます。
                </p>
              </div>
              <div className="pt-8 mt-auto">
                <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                  Consulting Service
                </span>
              </div>
            </div>
          </div>

          {/* Emerging Projects - 3 Col Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Project 4 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                 <Badge variant="secondary" className="bg-gray-100 text-gray-600">In Development</Badge>
              </div>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SNS投稿管理ツール</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  GitHubライクなレビューフローを取り入れた、チーム向けSNS運用管理プラットフォーム。
                  投稿の承認プロセスを効率化し、品質管理を容易にします。
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-500 overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                 <Badge variant="secondary" className="bg-gray-100 text-gray-600">In Development</Badge>
              </div>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CrowdPrinting</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  3Dプリンター所有者と印刷ニーズを持つユーザーをつなぐマッチングプラットフォーム。
                  自動見積もり機能とLINE連携で、手軽な製造依頼を実現します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

