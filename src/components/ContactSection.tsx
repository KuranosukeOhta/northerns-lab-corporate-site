"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
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
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        setFormData({
          fullName: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || '送信に失敗しました'
        });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: 'error',
        message: 'ネットワークエラーが発生しました'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Message */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              お問い合わせ
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              プロジェクトのご相談、お見積もり依頼、協業のご提案など、お気軽にお問い合わせください。<br />
              私たちのチームが、あなたのビジネスの成長をサポートします。
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">無料相談実施中</h4>
                  <p className="text-gray-600">
                    初回ヒアリングは無料です。具体的な要件が決まっていなくてもご相談いただけます。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">迅速な対応</h4>
                  <p className="text-gray-600">
                    通常2営業日以内に担当者よりご連絡いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white"
                    placeholder="山田 太郎"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white"
                    placeholder="株式会社〇〇"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">
                  ご相談内容 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white appearance-none cursor-pointer"
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
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>送信中...</span>
                ) : (
                  <>
                    <span>送信する</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus.type === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>{submitStatus.message}</span>
                </div>
              )}
              
              {submitStatus.type === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <span>{submitStatus.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

