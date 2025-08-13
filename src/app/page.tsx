import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe, Camera, Code, MessageSquare, Printer } from "lucide-react";
import VideoText from "@/components/VideoText";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-40 lg:py-48">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              
              {/* Tagline */}
              <div>
                <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">
                  From Ideas to Impact
                </span>
              </div>
              
              {/* Video Text Component */}
              <VideoText 
                text="Northerns." 
                videoSrc="/background_movie.mp4"
                className="my-12"
              />
              
              {/* Subtitle */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
                  多様なプロジェクトで<br />
                  新たな価値を創造します
                </h2>
              </div>
              
              {/* Feature Points */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p>小さく始めて、大きく育てる。複数のプロジェクトを並行して進めています</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <p>最新技術と柔軟な発想で、新しい価値を生み出します</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center pt-4">
                <Button>お問い合わせ</Button>
                <Button variant="outline">資料請求</Button>
              </div>
              
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full py-16 md:py-28 bg-gray-50 dark:bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16">事業（プロジェクト）一覧</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2 text-blue-500" />
                  <CardTitle>TranslateJapan</CardTitle>
                  <p className="text-sm text-gray-500">多言語コンテンツ制作</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">YouTube動画の翻訳・吹き替えサービス</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 海外コンテンツの日本語ローカライズ</li>
                    <li>• 高品質な吹き替え制作</li>
                    <li>• グローバルコンテンツの日本市場展開支援</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Camera className="h-8 w-8 mb-2 text-green-500" />
                  <CardTitle>3D Visualization Services</CardTitle>
                  <p className="text-sm text-gray-500">空間の可視化</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">MatterPortを活用した不動産・施設の3D撮影サービス</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 関東全域対応</li>
                    <li>• 高品質な3D空間データ作成</li>
                    <li>• 不動産業界のデジタル変革をサポート</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-purple-500" />
                  <CardTitle>Local Business DX</CardTitle>
                  <p className="text-sm text-gray-500">地域企業のデジタル化</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">地域の小規模ビジネス向けウェブ制作・SNS管理</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• HP制作保守</li>
                    <li>• SNS運用代行</li>
                    <li>• 3D技術を活用した物件紹介</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <MessageSquare className="h-8 w-8 mb-2 text-orange-500" />
                  <CardTitle>SNS投稿管理ツール</CardTitle>
                  <p className="text-sm text-gray-500">ソーシャルメディア運用効率化</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">GitHubライクなレビューシステムを持つSNS投稿管理アプリ</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• チーム承認フロー</li>
                    <li>• 投稿スケジューリング</li>
                    <li>• 著作権チェック機能</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Printer className="h-8 w-8 mb-2 text-red-500" />
                  <CardTitle>CrowdPrinting</CardTitle>
                  <p className="text-sm text-gray-500">3Dプリンター印刷代行</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">3Dプリンターを活用した印刷代行サービス</p>
                  <ul className="text-sm text-gray-600 space-y-1">
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
        <section className="w-full py-16 md:py-28">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16">ご支援の流れ</h2>
            {/* ... This would be a more complex component ... */}
            <p className="text-center text-gray-500">（ご支援の流れの図やコンポーネントをここに配置）</p>
          </div>
        </section>

        {/* Latest Info Section */}
        <section className="w-full py-16 md:py-28 bg-gray-50 dark:bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16">最新の情報</h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <div className="bg-purple-500 aspect-video rounded-t-lg"></div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">2025.01.14</p>
                  <h3 className="text-xl font-bold mb-2">18時間で作ったAIプロダクトが3日で3000人に使われた話</h3>
                  <p className="text-gray-600">C向けサービスを展開するパートナー企業からのご相談 「どうやってLLMを活用すれば良いか分からない」から始まった年末のプロトタイピングの様子をご紹介します</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="w-full py-16 md:py-28">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16">会社概要</h2>
            <div className="border-t">
              <div className="grid grid-cols-3 gap-4 py-6 border-b">
                <div className="col-span-1 font-semibold">会社名</div>
                <div className="col-span-2">Northerns株式会社 (読み方: ノーザンズ)</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-b">
                <div className="col-span-1 font-semibold">所在地</div>
                <div className="col-span-2">〒060-0001 北海道札幌市中央区北1条西1丁目</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-b">
                <div className="col-span-1 font-semibold">資本金</div>
                <div className="col-span-2">100万円</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-b">
                <div className="col-span-1 font-semibold">事業内容</div>
                <div className="col-span-2">
                  <ul className="list-disc pl-5">
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
