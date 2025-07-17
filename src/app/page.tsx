import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle2, Bot, Code, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">Idea to Prototype, Fast.</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                AI時代のユーザー体験を<br />検証するデザインと開発
              </h1>
              <div className="flex items-center justify-center gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p>小さくはじめて、生成AIが必要かどうかも含めた投資効果を検証します</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <p>既存のユーザーとのハレーションを避ける、滑らかなAI体験をデザインします</p>
              </div>
              <div className="flex gap-4 justify-center pt-4">
                <Button>お問い合わせ</Button>
                <Button variant="outline">資料請求</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Briefcase className="h-8 w-8 mb-2" />
                  <CardTitle>プロダクト戦略</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>ユーザー便益とビジネスインパクトのトレードオンを考えます。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Bot className="h-8 w-8 mb-2" />
                  <CardTitle>AIワークフロー</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>AIをどう活用すべきか、AIが必要かどうかも含めて検討します。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>UI, UXデザイン</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>既存のユーザーとのハレーションを避ける、滑らかなAI体験をデザインします。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 mb-2" />
                  <CardTitle>MVP開発、検証</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>実際のサービスデータを使用した動くプロトタイプでの検証サイクルを回します。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Support Flow Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">ご支援の流れ</h2>
            {/* ... This would be a more complex component ... */}
            <p className="text-center text-gray-500">（ご支援の流れの図やコンポーネントをここに配置）</p>
          </div>
        </section>

        {/* Latest Info Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">最新の情報</h2>
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

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">よくある質問</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>最低契約期間はありますか?</AccordionTrigger>
                <AccordionContent>
                  1ヶ月ごとのご契約となります。まずは1ヶ月ご契約いただき、想定と違った場合はすぐにご解約いただくことが可能です。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>どのような支援体制になりますか?</AccordionTrigger>
                <AccordionContent>
                  プロジェクトに応じて最適なチームを編成します。Slackでの密な連携や週次の定例ミーティングを通じて、プロジェクトを推進します。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>生成AIでできそうなことを探しています。壁打ち形式での相談はできますか?</AccordionTrigger>
                <AccordionContent>
                  はい、可能です。アイデアの段階からご相談いただき、実現可能性の検討や具体的な企画立案をサポートします。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800/50">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">会社概要</h2>
            <div className="border-t">
              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <div className="col-span-1 font-semibold">会社名</div>
                <div className="col-span-2">株式会社NorthernsLab (読み方: ノーザンズラボ)</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <div className="col-span-1 font-semibold">所在地</div>
                <div className="col-span-2">〒060-0001 北海道札幌市中央区北1条西1丁目</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <div className="col-span-1 font-semibold">資本金</div>
                <div className="col-span-2">100万円</div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4 border-b">
                <div className="col-span-1 font-semibold">事業内容</div>
                <div className="col-span-2">
                  <ul className="list-disc pl-5">
                    <li>AIプロダクトの研究および開発</li>
                    <li>Webシステム開発</li>
                    <li>技術コンサルティング業務</li>
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
