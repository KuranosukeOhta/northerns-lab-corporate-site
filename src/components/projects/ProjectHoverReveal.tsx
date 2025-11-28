"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Globe, Code, Printer, ArrowRight, Building2, Bot, Map } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AIポストラボ",
    category: "AIを活用したSNS運用支援ツール",
    description: "X(旧Twitter)等のSNS運用をサポートするソフトウェア。AIを活用することにより投稿文章の作成をサポートします。",
    icon: <Bot className="w-12 h-12" />,
    iconSmall: <Bot className="w-6 h-6" />,
    color: "bg-blue-600",
    textColor: "text-white",
    href: "https://www.aipostlab.net/",
    devPeriod: "2025年9月〜開発中",
    type: "service"
  },
  {
    id: 2,
    title: "LocalizeJapan",
    category: "YouTube動画の翻訳・吹替サービス",
    description: "海外コンテンツの日本語ローカライズに特化した、YouTube動画の翻訳・吹き替えサービス。",
    icon: <Globe className="w-12 h-12" />,
    iconSmall: <Globe className="w-6 h-6" />,
    color: "bg-indigo-600",
    textColor: "text-white",
    href: "https://www.localizejapan.com/",
    type: "service"
  },
  {
    id: 3,
    title: "3Dバーチャルツアー制作代行",
    category: "Matterportによる空間撮影サービス",
    description: "Matterportを活用した、没入感のある不動産・施設の3Dバーチャルツアー撮影サービス。",
    icon: <Camera className="w-12 h-12" />,
    iconSmall: <Camera className="w-6 h-6" />,
    color: "bg-gray-900",
    textColor: "text-white",
    href: "https://matterport-service-hp.vercel.app/",
    type: "service"
  },
  {
    id: 4,
    title: "CrowdPrinting",
    category: "3Dプリント印刷代行プラットフォーム",
    description: "3Dプリント印刷代行サービス。オンラインで簡単に3Dプリントを依頼できるプラットフォーム。",
    icon: <Printer className="w-12 h-12" />,
    iconSmall: <Printer className="w-6 h-6" />,
    color: "bg-orange-500",
    textColor: "text-white",
    href: "https://crowdprinting.jp/",
    devPeriod: "開発中",
    type: "service"
  },
  {
    id: 5,
    title: "東京3D不動産",
    category: "3Dマップで不動産を探せるWebアプリ",
    description: "GoogleMaps APIを活用した、不動産情報を3Dビューでインタラクティブに確認可能なマップ。",
    icon: <Map className="w-12 h-12" />,
    iconSmall: <Map className="w-6 h-6" />,
    color: "bg-emerald-600",
    textColor: "text-white",
    href: "https://tokyo-3d-realestates.vercel.app/",
    devPeriod: "PoC段階",
    type: "case"
  },
  {
    id: 6,
    title: "Northerns株式会社",
    category: "自社コーポレートサイトの構築",
    description: "自社コーポレートサイトの設計・開発。Next.js + Tailwind CSSによるモダンなWebサイト。",
    icon: <Building2 className="w-12 h-12" />,
    iconSmall: <Building2 className="w-6 h-6" />,
    color: "bg-gray-800",
    textColor: "text-white",
    href: "https://northerns.vercel.app/",
    type: "case"
  },
  {
    id: 7,
    title: "Yukikaze Technology",
    category: "中高生ロボコンチームの公式HP制作",
    description: "中高生ロボコンチーム「Yukikaze Technology」公式HPの開発実績。",
    icon: <Code className="w-12 h-12" />,
    iconSmall: <Code className="w-6 h-6" />,
    color: "bg-cyan-600",
    textColor: "text-white",
    href: "https://www.yukikaze.tech/",
    type: "case"
  }
];

// 共通のプレビューカード
const PreviewCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`w-full h-full rounded-3xl overflow-hidden shadow-2xl ${project.color} relative flex items-center justify-center p-8`}
  >
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
    <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-md">
      <div className="p-4 bg-white/10 backdrop-blur-md rounded-full">
        <div className={project.textColor}>{project.icon}</div>
      </div>
      <div className={project.textColor}>
        <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
        <p className="text-base opacity-90 leading-relaxed">{project.description}</p>
      </div>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm"
      >
        View Project <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

// ========================================
// 案A: コンパクトリスト
// ========================================
function DesignA() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="w-full py-16 bg-white border-b-4 border-dashed border-gray-300">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">案A: コンパクトリスト</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4">Selected Works</h2>
          <p className="text-gray-600 text-base">余白を縮小してコンパクトに表示</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-1">
            {projects.map((project) => {
              const isActive = activeProject.id === project.id;
              return (
                <div
                  key={project.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveProject(project)}
                >
                  <div className={`flex items-center justify-between border-b py-4 transition-colors duration-300 ${isActive ? 'border-black' : 'border-gray-200'}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`text-xs transition-colors ${isActive ? 'text-black' : 'text-gray-500'}`}>{project.category}</p>
                        {project.devPeriod && (
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}`}>
                            {project.devPeriod}
                          </span>
                        )}
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-300'}`}>
                        {project.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-32 h-[450px]">
            <AnimatePresence mode="wait">
              <PreviewCard project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// 案B: 2カラムグリッド
// ========================================
function DesignB() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="w-full py-16 bg-gray-50 border-b-4 border-dashed border-gray-300">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">案B: 2カラムグリッド</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4">Selected Works</h2>
          <p className="text-gray-600 text-base">左側を2列グリッドで一覧性を向上</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-2 gap-3">
            {projects.map((project) => {
              const isActive = activeProject.id === project.id;
              return (
                <div
                  key={project.id}
                  className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${isActive ? 'border-black bg-black text-white' : 'border-gray-200 bg-white hover:border-gray-400'}`}
                  onMouseEnter={() => setActiveProject(project)}
                >
                  <div className={`mb-2 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {project.iconSmall}
                  </div>
                  <h3 className={`text-sm font-bold mb-1 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  {project.devPeriod && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {project.devPeriod}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-32 h-[450px]">
            <AnimatePresence mode="wait">
              <PreviewCard project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// 案C: スクロールリスト
// ========================================
function DesignC() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="w-full py-16 bg-white border-b-4 border-dashed border-gray-300">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-4">案C: スクロールリスト</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4">Selected Works</h2>
          <p className="text-gray-600 text-base">固定高さでスクロール可能に</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="h-[400px] overflow-y-auto pr-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {projects.map((project) => {
              const isActive = activeProject.id === project.id;
              return (
                <div
                  key={project.id}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${isActive ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}
                  onMouseEnter={() => setActiveProject(project)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {project.iconSmall}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-bold truncate ${isActive ? 'text-black' : 'text-gray-700'}`}>
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 truncate">{project.category}</p>
                    </div>
                    {project.devPeriod && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-gray-200 text-gray-600 shrink-0">
                        {project.devPeriod}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-32 h-[400px]">
            <AnimatePresence mode="wait">
              <PreviewCard project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// 案D: タブ切り替え
// ========================================
function DesignD() {
  const [activeTab, setActiveTab] = useState<"service" | "case">("service");
  const filteredProjects = projects.filter(p => p.type === activeTab);
  const [activeProject, setActiveProject] = useState(filteredProjects[0]);

  useEffect(() => {
    const filtered = projects.filter(p => p.type === activeTab);
    setActiveProject(filtered[0]);
  }, [activeTab]);

  return (
    <section className="w-full py-16 bg-gray-50 border-b-4 border-dashed border-gray-300">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4">案D: タブ切り替え ★おすすめ</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4">Selected Works</h2>
          <p className="text-gray-600 text-base">カテゴリでタブ分けして整理</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("service")}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === "service" ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          >
            自社サービス
          </button>
          <button
            onClick={() => setActiveTab("case")}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === "case" ? 'bg-black text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          >
            開発実績
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-2">
            {filteredProjects.map((project) => {
              const isActive = activeProject.id === project.id;
              return (
                <div
                  key={project.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveProject(project)}
                >
                  <div className={`flex items-center justify-between border-b py-5 transition-colors duration-300 ${isActive ? 'border-black' : 'border-gray-200'}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`text-sm transition-colors ${isActive ? 'text-black' : 'text-gray-500'}`}>{project.category}</p>
                        {project.devPeriod && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}`}>
                            {project.devPeriod}
                          </span>
                        )}
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-300'}`}>
                        {project.title}
                      </h3>
                    </div>
                    <ArrowRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-32 h-[400px]">
            <AnimatePresence mode="wait">
              <PreviewCard project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// 案E: プレビュー縮小
// ========================================
function DesignE() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="w-full py-16 bg-white border-b-4 border-dashed border-gray-300">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full mb-4">案E: プレビュー縮小</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4">Selected Works</h2>
          <p className="text-gray-600 text-base">プレビューを小さくして左側を広く</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-1">
            {projects.map((project) => {
              const isActive = activeProject.id === project.id;
              return (
                <div
                  key={project.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveProject(project)}
                >
                  <div className={`flex items-center justify-between border-b py-4 transition-colors duration-300 ${isActive ? 'border-black' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {project.iconSmall}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className={`text-xs transition-colors ${isActive ? 'text-black' : 'text-gray-500'}`}>{project.category}</p>
                          {project.devPeriod && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}`}>
                              {project.devPeriod}
                            </span>
                          )}
                        </div>
                        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-400'}`}>
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-32 h-[350px]">
            <AnimatePresence mode="wait">
              <PreviewCard project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// メインコンポーネント
// ========================================
export default function ProjectHoverReveal() {
  return (
    <div id="projects">
      <div className="bg-gray-900 text-white py-8 text-center">
        <h1 className="text-2xl font-bold">プロジェクトセクション レイアウト比較</h1>
        <p className="text-gray-400 mt-2">スクロールして各案を比較してください</p>
      </div>
      <DesignA />
      <DesignB />
      <DesignC />
      <DesignD />
      <DesignE />
    </div>
  );
}
