import { NewsItem } from "@/lib/news-data";
import Image from "next/image";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import Link from "next/link";

interface ArticleTemplateProps {
  item: NewsItem;
  content: string;
}

export default function ClassicEditorial({ item }: ArticleTemplateProps) {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/news" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Editorial Mode</span>
        </div>
      </div>

      <article className="pt-32 container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                    {item.category}
                </span>
                <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.date}
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 leading-tight mb-8">
                {item.title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 border-t border-b border-gray-100 py-4 max-w-xl mx-auto">
                <span className="font-medium">By Northern's Lab Editorial Team</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>5 min read</span>
            </div>
        </div>

        {/* Hero Image */}
        {item.imageUrl && (
            <div className="relative aspect-[21/9] w-full mb-16 overflow-hidden rounded-sm">
                <Image 
                    src={item.imageUrl} 
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-gray mx-auto font-sans">
          {/* Lead */}
          <p className="lead text-xl text-gray-600 mb-8 font-sans leading-relaxed">
            {item.summary}
          </p>

          {renderArticleBody(item)}
        </div>

        {/* Footer */}
        <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <div className="text-sm text-gray-500">
                Shared on {item.date}
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                <Share2 className="w-4 h-4" /> Share this article
            </button>
        </div>
      </article>
    </div>
  );
}

function renderArticleBody(item: NewsItem) {
  switch (item.id) {
    case "1":
      // AI活用事例：製造業プロジェクト
      return (
        <>
          <h2>背景と課題</h2>
          <p>
            製造ラインを持つクライアント企業では、「どこがボトルネックになっているのかが見えない」「現場ごとの勘と経験に依存している」という課題を抱えていました。
            既存システムからは一定のデータが取得できていたものの、分析・可視化の仕組みが整っておらず、改善の優先順位付けが難しい状況でした。
          </p>
          <p>
            Northerns Labは、これまでに自社サービス「AIポストラボ」や
            「LocalizeJapan」、3Dバーチャルツアー制作などで培った
            データ活用・プロダクト開発の知見を活かし、
            「現場が自分たちで改善ポイントを見つけられるダッシュボード」をゴールに据えてプロジェクトを設計しました。
          </p>

          <h2>アプローチとプロセス</h2>
          <p>
            まずは Support Flow Section でもご紹介しているフローと同様に、
            入念なヒアリングからスタートしました。工程ごとのリードタイム、
            設備ごとの稼働状況、歩留まりなど、既存システムから取得できるログを棚卸しし、
            PoC
            フェーズでは「どの指標が生産性向上に最も寄与しているか」を検証しました。
          </p>
          <p>
            そのうえで、AIモデルが自動で異常値やボトルネック候補を検知し、
            3Dマップ型のUI（自社プロジェクト「東京3D不動産」で培った表現手法）で
            ライン全体を俯瞰できるダッシュボードを実装。
            小さな改善サイクルを素早く回せるよう、週次でのレビューと改善提案もセットで提供しました。
          </p>

          <h2>成果と今後の展開</h2>
          <p>
            導入から半年で、対象ラインの生産性は約20%向上しました。
            なにより、「どこから手をつければよいか」が視覚的にわかるようになったことで、
            現場メンバーが主体的に改善アイデアを出し合う文化が生まれつつあります。
          </p>
          <p>
            Northerns Labでは、本事例で確立したアプローチを、
            SaaSプロダクトとして横展開することも視野に入れています。
            製造業に限らず、ロジスティクスや店舗運営など、
            「データはあるが活かしきれていない」領域でのご相談もお待ちしています。
          </p>
        </>
      );

    case "2":
      // 年末年始休業のお知らせ
      return (
        <>
          <h2>休業期間について</h2>
          <p>
            上記期間中は、メール・お問い合わせフォームからのお問い合わせ受付のみとなり、
            個別のご返信は休業明けの営業日以降、順次対応させていただきます。
            緊急の障害対応が必要な保守契約中のお客様については、
            契約内容に基づき、専用の連絡チャネルにてサポートいたします。
          </p>

          <h2>プロジェクト進行中のお客様へ</h2>
          <p>
            進行中の開発案件につきましては、年内のマイルストーンと
            年明けのスケジュールを事前に共有のうえで進行しております。
            休業期間中も、CI/CD や監視など自動化された仕組みにより、
            サービスの安定稼働を維持する体制を整えています。
          </p>

          <p>
            休業期間中はご不便をおかけいたしますが、チーム一同リフレッシュした状態で、
            新しい年も皆さまのプロジェクトを全力でご支援できるよう努めてまいります。
          </p>
        </>
      );

    case "3":
      // Next.js 15 と Server Actions の技術ブログ
      return (
        <>
          <h2>本記事で紹介している内容</h2>
          <p>
            記事では、弊社コーポレートサイトを例に、
            Next.js 15 と React 19、Server Actions を組み合わせた
            最新スタックの設計方針を詳しく解説しています。
            具体的には、フォーム送信やメール送信処理のサーバーサイド移行、
            Turbopack を前提としたビルド構成、Tailwind CSS
            v4 との組み合わせ方などを取り上げています。
          </p>

          <h2>なぜこの技術スタックを採用したのか</h2>
          <p>
            Northerns Lab では、自社サービス「AIポストラボ」や
            クライアントワークにおいても、長期的に保守しやすく、
            パフォーマンスの高いフロントエンド基盤が不可欠だと考えています。
            Server Actions によって API
            ルートの記述量を減らしつつ、型安全な形でビジネスロジックをまとめることで、
            小規模チームでも開発体験を大きく向上させることができました。
          </p>

          <p>
            技術ブログでは、実際のコードスニペットも交えながら、
            「まずどこから Server Actions を導入すべきか」
            「既存プロジェクトへの段階的な移行のポイント」についても触れています。
            フロントエンドの刷新をご検討中の方は、ぜひご覧ください。
          </p>
        </>
      );

    case "4":
      // オフィス移転のお知らせ
      return (
        <>
          <h2>新オフィスのコンセプト</h2>
          <p>
            Northerns Lab は「北の大地から、世界へ」というビジョンのもと、
            北海道発のテックカンパニーとして事業を展開してきました。
            今回の移転では、東京・江東区に開発拠点となる新オフィスを構え、
            クライアント企業との共創スペースを拡張しています。
          </p>

          <p>
            新オフィスには、プロダクトのアイデア出しやワークショップに適した
            コラボレーションエリアに加え、3Dバーチャルツアー撮影機材の検証スペースや、
            動画ローカライズのチェック用モニター環境など、
            当社ならではの事業ドメインに最適化した環境を整備しました。
          </p>

          <h2>今後のご来訪について</h2>
          <p>
            お打ち合わせやワークショップは、オンライン・オフラインいずれにも対応可能です。
            ご来訪をご希望の際は、コンタクトフォームまたは担当者まで事前にご連絡ください。
            引き続き、場所にとらわれない柔軟な働き方と、高品質な開発体験を両立していきます。
          </p>
        </>
      );

    case "5":
      // 資金調達のお知らせ
      return (
        <>
          <h2>資金調達の目的</h2>
          <p>
            今回のシリーズAラウンドでは、既存投資家に加えて
            新たな事業会社・VC からも出資を受け、
            自社サービス群の成長と開発体制の強化を目的とした資金を調達しました。
            特に「AIポストラボ」や「LocalizeJapan」など、
            既に市場からの反応を得ているプロダクトへの投資を加速させます。
          </p>

          <h2>今後の投資領域</h2>
          <p>
            採用面では、フルスタックエンジニアやデザイナーに加え、
            プロダクトマネージャー、テクニカルライターなど、
            少数精鋭のチームを支えるコアメンバーの採用を予定しています。
            また、3Dバーチャルツアーやマップアプリケーションのような
            空間系プロジェクトにも研究開発投資を行い、
            新たな価値提供の形を模索していきます。
          </p>

          <p>
            Northerns Lab は、資金だけに頼らず、現場に近い技術と小回りの利く開発体制を武器に、
            クライアントと共に長期的な価値を生み出すパートナーであり続けます。
          </p>
        </>
      );

    case "6":
      // カンファレンス登壇
      return (
        <>
          <h2>登壇テーマについて</h2>
          <p>
            本セッションでは、「未来のAIアーキテクチャ」というテーマのもと、
            中小規模のチームでも実践可能なモダンなAIシステム設計の考え方をお話しします。
            自社サービスやクライアントワークでの経験をもとに、
            LLM・マルチモーダルAI・3Dデータなどを組み合わせた
            実践的なアーキテクチャパターンをご紹介する予定です。
          </p>

          <h2>セッションで扱うトピック</h2>
          <ul>
            <li>小さなチームで始める MLOps・LLMOps のベストプラクティス</li>
            <li>プロトタイプから本番運用までを見据えた API / フロントエンド設計</li>
            <li>事業フェーズに応じた AI 活用ロードマップの描き方</li>
          </ul>

          <p>
            当日は、質疑応答の時間も設ける予定です。
            現在進行中のプロジェクトでお悩みの点があれば、ぜひお気軽にご質問ください。
            ご参加を心よりお待ちしております。
          </p>
        </>
      );

    default:
      // フォールバック：summary を少し掘り下げた汎用コンテンツ
      return (
        <>
          <h2>お知らせの詳細</h2>
          <p>{item.summary}</p>
        </>
      );
  }
}


