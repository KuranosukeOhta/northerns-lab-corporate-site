import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, Camera, Code, MessageSquare, Printer } from "lucide-react";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <section id="projects" className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-gray-900">
              事業一覧
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-2 border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2 text-blue-500" />
                  <CardTitle className="text-gray-900">TranslateJapan</CardTitle>
                  <p className="text-sm text-gray-600">多言語コンテンツ制作</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-gray-800">YouTube動画の翻訳・吹き替えサービス</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 海外コンテンツの日本語ローカライズ</li>
                    <li>• 高品質な吹き替え制作</li>
                    <li>• グローバルコンテンツの日本市場展開支援</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <Camera className="h-8 w-8 mb-2 text-green-500" />
                  <CardTitle className="text-gray-900">3D Visualization Services</CardTitle>
                  <p className="text-sm text-gray-600">空間の可視化</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-gray-800">MatterPortを活用した不動産・施設の3D撮影サービス</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 関東全域対応</li>
                    <li>• 高品質な3D空間データ作成</li>
                    <li>• 不動産業界のデジタル変革をサポート</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-purple-500" />
                  <CardTitle className="text-gray-900">Local Business DX</CardTitle>
                  <p className="text-sm text-gray-600">地域企業のデジタル化</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-gray-800">地域の小規模ビジネス向けウェブ制作・SNS管理</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• HP制作保守</li>
                    <li>• SNS運用代行</li>
                    <li>• 3D技術を活用した物件紹介</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 mb-2 text-orange-500" />
                  <CardTitle className="text-gray-900">SNS投稿管理ツール</CardTitle>
                  <p className="text-sm text-gray-600">ソーシャルメディア運用効率化</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-gray-800">GitHubライクなレビューシステムを持つSNS投稿管理アプリ</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• チーム承認フロー</li>
                    <li>• 投稿スケジューリング</li>
                    <li>• 著作権チェック機能</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <Printer className="h-8 w-8 mb-2 text-red-500" />
                  <CardTitle className="text-gray-900">CrowdPrinting</CardTitle>
                  <p className="text-sm text-gray-600">3Dプリンター印刷代行</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-gray-800">3Dプリンターを活用した印刷代行サービス</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 自動見積もり機能</li>
                    <li>• プリントパートナー募集</li>
                    <li>• LINEでの依頼対応</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Support Flow Section */}
        <section className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-gray-900">
              ご支援の流れ
            </h2>
            {/* ... This would be a more complex component ... */}
            <p className="text-center text-gray-600 text-lg">（ご支援の流れの図やコンポーネントをここに配置）</p>
          </div>
        </section>

        {/* Latest Info Section */}
        <section className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-gray-900">
              最新の情報
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white border-2 border-gray-200 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="bg-gray-500 aspect-video rounded-t-lg"></div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">2025.01.14</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">仮のタイトル：AI活用事例のご紹介</h3>
                  <p className="text-gray-700">仮の説明文：AI技術を活用したプロジェクトの事例や、企業のデジタル変革支援についてご紹介いたします。具体的な内容は後日更新予定です。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-gray-900">
              会社概要
            </h2>
            <div className="border-t border-gray-300">
              <div className="grid grid-cols-3 gap-4 py-6 border-b border-gray-300">
                <div className="col-span-1 font-semibold text-gray-900">会社名</div>
                <div className="col-span-2 text-gray-700">Northerns株式会社 (読み方: ノーザンズ)</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-b border-gray-300">
                <div className="col-span-1 font-semibold text-gray-900">所在地</div>
                <div className="col-span-2 text-gray-700">〒060-0001 北海道札幌市中央区北1条西1丁目</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-b border-gray-300">
                <div className="col-span-1 font-semibold text-gray-900">資本金</div>
                <div className="col-span-2 text-gray-700">100万円</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-b border-gray-300">
                <div className="col-span-1 font-semibold text-gray-900">事業内容</div>
                <div className="col-span-2">
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>多言語コンテンツ制作</li>
                    <li>3D可視化サービス</li>
                    <li>地域企業向けDX支援</li>
                    <li>SNS管理ツール開発</li>
                    <li>3Dプリンター印刷代行</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
