import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                NorthernsLab
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                最先端の技術で、未来を創造する。
              </p>
              <Button>お問い合わせ</Button>
            </div>
          </div>
        </section>
        <Separator />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">会社概要</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  NorthernsLabは、革新的なテクノロジーと創造的なアイデアを組み合わせ、社会に新たな価値を提供します。
                </p>
              </div>
            </div>
          </div>
        </section>
        <Separator />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">事業内容</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  私たちは以下の領域で最先端のソリューションを提供します。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>AI開発</CardTitle>
                  <CardDescription>機械学習モデルの設計・開発</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>最新のAI技術を駆使し、ビジネス課題を解決するカスタムAIを開発します。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Webシステム開発</CardTitle>
                  <CardDescription>高速・高機能なWebアプリケーション</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Next.jsやTypeScriptを活用し、スケーラブルなWebシステムを構築します。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>技術コンサルティング</CardTitle>
                  <CardDescription>DX推進と技術戦略の策定</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>企業の成長を加速させるための技術的なアドバイスとサポートを提供します。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Separator />
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                お問い合わせ
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                プロジェクトのご相談、協業のご提案など、お気軽にご連絡ください。
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button type="submit" className="w-full">
                メールで問い合わせる
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 NorthernsLab Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
