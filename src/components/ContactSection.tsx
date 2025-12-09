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
    <section id="contact" className="w-full py-16 sm:py-24 md:py-32 bg-white relative">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          
          {/* Left Column: Message */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-3 sm:mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-8">
              お問い合わせ
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed">
              プロジェクトのご相談、お見積もり依頼、協業のご提案など、お気軽にお問い合わせください。<br className="hidden sm:block" />
              私が、あなたのビジネスの成長をサポートします。
            </p>
            
            <div className="space-y-5 sm:space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">無料相談実施中</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    初回ヒアリングは無料です。具体的な要件が決まっていなくてもご相談いただけます。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">迅速な対応</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    通常2営業日以内に担当者よりご連絡いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white text-base min-h-[48px]"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white text-base min-h-[48px]"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white text-base min-h-[48px]"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white appearance-none cursor-pointer text-base min-h-[48px]"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">選択してください</option>
                    <option value="new-project">新規プロジェクトのご相談</option>
                    <option value="estimate">お見積もりのご依頼</option>
                    <option value="service-inquiry">サービスに関するご質問</option>
                    <option value="partnership">協業・パートナーシップのご提案</option>
                    <option value="recruitment">採用・求人について</option>
                    <option value="other">その他のお問い合わせ</option>
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
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition-all bg-white resize-none text-base"
                  placeholder="お問い合わせ内容をご記入ください"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-gray-800 active:bg-gray-900 transform hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[56px] text-base"
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
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-start sm:items-center gap-2 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
                  <span>{submitStatus.message}</span>
                </div>
              )}
              
              {submitStatus.type === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-start sm:items-center gap-2 text-sm sm:text-base">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
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

