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
    date: '2025.01.14',
    category: 'Press Release',
    title: 'AI活用事例：大手製造業における生産ライン最適化プロジェクト',
    summary: '独自のAIアルゴリズムを用いて、製造ラインのボトルネックを特定・解消し、生産性を20%向上させた事例をご紹介します。',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '2',
    date: '2024.12.20',
    category: 'Event',
    title: '年末年始休業のお知らせ',
    summary: '誠に勝手ながら、2024年12月28日(土)～2025年1月5日(日)まで年末年始休業とさせていただきます。',
  },
  {
    id: '3',
    date: '2024.12.10',
    category: 'Tech Blog',
    title: 'Next.js 15とServer Actionsの実践的な活用法',
    summary: '最新のNext.js機能を使った、よりセキュアで高速なアプリケーション構築のノウハウをエンジニアブログで公開しました。',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '4',
    date: '2024.11.28',
    category: 'Info',
    title: 'オフィス移転のお知らせ',
    summary: '事業拡大に伴い、本社オフィスを移転いたしました。新オフィスでは共創スペースを拡張しています。',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
  },
  {
    id: '5',
    date: '2024.11.15',
    category: 'Press Release',
    title: 'シリーズA資金調達実施のお知らせ',
    summary: 'さらなる事業成長とプロダクト開発体制の強化を目的に、総額3億円の資金調達を実施いたしました。',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: '6',
    date: '2024.10.30',
    category: 'Event',
    title: 'Tech Conference 2024に登壇します',
    summary: '国内最大級の技術カンファレンスにて、弊社CTOが「未来のAIアーキテクチャ」について講演を行います。',
    imageUrl: 'https://images.unsplash.com/photo-1544531696-2813d563c585?q=80&w=2670&auto=format&fit=crop',
  },
];

