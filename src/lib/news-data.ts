export type NewsCategory = 'Press Release' | 'Event' | 'Info' | 'Tech Blog';

export interface NewsItem {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  summary: string;
  imageUrl?: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    date: '2025.01.20',
    category: 'Press Release',
    title: 'AIポストラボ β版リリースのお知らせ',
    summary: 'X(旧Twitter)等のSNS運用をAIでサポートする新サービス「AIポストラボ」のβ版を公開しました。投稿文章の自動生成、最適な投稿タイミングの提案など、SNSマーケティングを効率化する機能を搭載しています。',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: '2',
    date: '2025.01.10',
    category: 'Info',
    title: 'LocalizeJapan：翻訳実績100本突破',
    summary: 'YouTube動画の翻訳・吹替サービス「LocalizeJapan」が、サービス開始から翻訳実績100本を突破しました。海外コンテンツの日本語ローカライズ需要の高まりを受け、今後もクオリティの高い翻訳サービスを提供してまいります。',
    imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '3',
    date: '2024.12.25',
    category: 'Tech Blog',
    title: 'Matterportで実現する不動産DX：3Dバーチャルツアーの可能性',
    summary: '弊社が提供する3Dバーチャルツアー制作サービスの技術的背景と、不動産業界におけるDX推進への貢献について解説します。Matterportの最新機能と活用事例をご紹介。',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2532&auto=format&fit=crop',
  },
  {
    id: '4',
    date: '2024.12.20',
    category: 'Event',
    title: '年末年始休業のお知らせ',
    summary: '誠に勝手ながら、2024年12月28日(土)～2025年1月5日(日)まで年末年始休業とさせていただきます。期間中のお問い合わせは、1月6日以降順次対応いたします。',
  },
  {
    id: '5',
    date: '2024.12.15',
    category: 'Press Release',
    title: 'Northerns合同会社 設立のお知らせ',
    summary: '「北の大地から、世界へ」をテーマに、Northerns合同会社を設立いたしました。SaaS開発、動画翻訳・ローカライズ、3Dバーチャルツアー制作、Webシステム開発を通じて、デジタルの力で地域と世界をつなぐ架け橋となります。',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
  },
  {
    id: '6',
    date: '2024.12.01',
    category: 'Tech Blog',
    title: 'Next.js 15 + Tailwind CSS 4で構築するモダンコーポレートサイト',
    summary: '本サイトの開発で採用した技術スタックについて解説します。Next.js 15の新機能、Tailwind CSS 4によるスタイリング、Framer Motionを活用したインタラクティブなアニメーション実装のノウハウを公開。',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '7',
    date: '2024.11.20',
    category: 'Info',
    title: 'CrowdPrinting：3Dプリント代行サービス開発中',
    summary: 'オンラインで簡単に3Dプリントを依頼できるプラットフォーム「CrowdPrinting」を開発中です。個人クリエイターから企業まで、幅広いニーズに対応するサービスを目指しています。',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '8',
    date: '2024.11.10',
    category: 'Info',
    title: '東京3D不動産：PoCプロジェクト進行中',
    summary: 'GoogleMaps APIを活用した3Dマップ上で不動産情報を探せるWebアプリ「東京3D不動産」のPoC（概念実証）を進めています。不動産探しの新しい体験を提供するべく、開発を進めてまいります。',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
  },
];
