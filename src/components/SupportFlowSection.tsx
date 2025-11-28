import { MessageCircle, Lightbulb, Rocket, Settings } from "lucide-react";

export default function SupportFlowSection() {
  const steps = [
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "ヒアリング",
      description: "現状の課題や実現したいゴールについて、丁寧にお話を伺います。技術的な要件が固まっていなくても構いません。"
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "企画・提案",
      description: "ヒアリング内容をもとに、最適な技術選定と解決策をご提案。予算やスケジュールに合わせたプランを作成します。"
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "開発・実装",
      description: "アジャイル的なアプローチで、進捗を共有しながら開発を進めます。質の高いコードと使いやすいUIを追求します。"
    },
    {
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "運用・改善",
      description: "リリース後も継続的なサポートを提供。データの分析やユーザーのフィードバックに基づき、サービスを改善し続けます。"
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-3 sm:mb-4">Process</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            プロジェクト進行の流れ
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            お客様のビジネスゴールを共有し、伴走型のパートナーとしてプロジェクトを成功に導きます。
          </p>
        </div>

        {/* モバイル: 縦並びリスト / デスクトップ: 4カラムグリッド */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />
          
          {/* Connecting Line (Mobile) - 縦線 */}
          <div className="md:hidden absolute left-[2.75rem] top-0 bottom-0 w-0.5 bg-gray-100 -z-10" />

          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex md:flex-col items-start md:items-center md:text-center group">
                {/* Icon Container */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-0 md:mb-6 shrink-0">
                  {/* スケールするアイコン部分 */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center shadow-sm group-hover:border-gray-200 md:group-hover:scale-110 transition-all duration-300 z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-900 text-white flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  {/* 数字チップ */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-xs sm:text-sm border-2 border-white z-20">
                    {index + 1}
                  </div>
                </div>
                
                {/* テキストコンテンツ */}
                <div className="ml-4 md:ml-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed md:max-w-xs md:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

