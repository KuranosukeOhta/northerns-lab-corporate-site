"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, Camera, Code, MessageSquare, Printer } from "lucide-react";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('フォーム送信開始:', formData);
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      console.log('API呼び出し開始...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('APIレスポンス:', response.status, response.statusText);
      const result = await response.json();
      console.log('API結果:', result);

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // フォームをリセット
        setFormData({
          fullName: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
        // URLパラメータをクリア
        window.history.replaceState({}, document.title, window.location.pathname);
        // 問い合わせセクションの上部にスクロール
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        console.log('フォーム送信成功、リセット完了');
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || '送信に失敗しました'
        });
        console.log('フォーム送信エラー:', result.error);
      }
    } catch (error) {
      console.error('フォーム送信例外:', error);
      setSubmitStatus({
        type: 'error',
        message: 'ネットワークエラーが発生しました'
      });
    } finally {
      setIsSubmitting(false);
      console.log('フォーム送信処理完了');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <section id="projects" className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 relative z-10">
            <p className="text-center text-gray-900 text-lg py-4 font-semibold"> 
              Projects
            </p>
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
            <p className="text-center text-gray-900 text-lg py-4 font-semibold"> 
              Support Flow
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-gray-900">
              ご支援の流れ
            </h2>
            {/* ... This would be a more complex component ... */}
            <p className="text-center text-gray-600 text-lg">（ご支援の流れの図やコンポーネントをここに配置）</p>
          </div>
        </section>

        {/* Latest Info Section */}
        <section id="news" className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 relative z-10">
            <p className="text-center text-gray-900 text-lg py-4 font-semibold"> 
              Press Release
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-gray-900">
              最新情報
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

        {/* Contact Section */}
        <section id="contact" className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
            <p className="text-center text-gray-900 text-lg py-4 font-semibold"> 
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-gray-900">
              お問い合わせ
            </h2>
            
            <div className="flex flex-col items-center max-w-4xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 w-full mb-8">
                
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                      placeholder="山田太郎"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                      placeholder="example@company.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      会社名・組織名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                      placeholder="株式会社サンプル"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      ご相談サービス <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">選択してください</option>
                      <option value="translate">TranslateJapan（翻訳・吹き替え）</option>
                      <option value="3d-visualization">3D Visualization Services</option>
                      <option value="local-dx">Local Business DX</option>
                      <option value="sns-tool">SNS投稿管理ツール</option>
                      <option value="3d-printing">CrowdPrinting</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="ご相談内容やご質問を詳しくお聞かせください"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>

                  {/* 送信状態の表示 */}
                  {submitStatus.type === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-green-800 font-medium">{submitStatus.message}</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus.type === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <p className="text-red-800 font-medium">{submitStatus.message}</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
              
              {/* CTA Section */}
              <div className="bg-gray-800 rounded-2xl p-8 text-white w-full">
                <h3 className="text-2xl font-bold mb-4">お気軽にご相談ください</h3>
                <p className="text-gray-200 mb-6">
                  プロジェクトのご相談や、サービスについてのご質問など、お気軽にお問い合わせください。<br />
                  専門スタッフが丁寧にご対応いたします。
                </p>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">2~3営業日以内にご返信いたします</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="relative w-full py-16 md:py-28 overflow-hidden bg-white">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto relative z-10">
            <p className="text-center text-gray-900 text-lg py-4 font-semibold"> 
              Company Profile
            </p>
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
