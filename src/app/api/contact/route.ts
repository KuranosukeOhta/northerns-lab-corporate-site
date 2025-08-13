import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// レート制限用のメモリストア（本番環境ではRedis等を使用推奨）
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// レート制限設定
const RATE_LIMIT = {
  MAX_REQUESTS: 5, // 5分間に最大5回
  WINDOW_MS: 5 * 60 * 1000, // 5分
};

// 入力サニタイゼーション関数
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // HTMLタグを除去
    .trim()
    .substring(0, 1000); // 最大1000文字
}

// レート制限チェック
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT.WINDOW_MS });
    return true;
  }
  
  if (record.count >= RATE_LIMIT.MAX_REQUESTS) {
    return false;
  }
  
  record.count++;
  return true;
}

// IPアドレス取得
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  return forwarded?.split(',')[0] || realIP || cfConnectingIP || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    // レート制限チェック
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'リクエストが多すぎます。しばらく時間をおいてから再試行してください。' },
        { status: 429 }
      );
    }

    // デバッグ用ログ
    console.log('=== デバッグ情報開始 ===');
    console.log('Client IP:', clientIP);
    console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '設定済み' : '未設定');
    console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length);
    console.log('RESEND_API_KEY prefix:', process.env.RESEND_API_KEY?.substring(0, 10));
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEYが設定されていません');
      return NextResponse.json(
        { error: 'APIキーが設定されていません' },
        { status: 500 }
      );
    }
    
    // APIキーの形式チェック
    if (!process.env.RESEND_API_KEY.startsWith('re_')) {
      console.error('RESEND_API_KEYの形式が正しくありません。re_で始まる必要があります。');
      return NextResponse.json(
        { error: 'APIキーの形式が正しくありません' },
        { status: 500 }
      );
    }
    
    console.log('Resend初期化開始...');
    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log('Resend初期化完了');
    
    const body = await request.json();
    const { fullName, email, company, service, message, recaptchaToken } = body;

    console.log('受信したデータ:', { fullName, email, company, service, message: message?.substring(0, 50) + '...' });

    // 入力バリデーション
    if (!fullName || !email || !service || !message) {
      console.log('バリデーションエラー: 必須項目が不足');
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // 入力サニタイゼーション
    const sanitizedData = {
      fullName: sanitizeInput(fullName),
      email: email.toLowerCase().trim(),
      company: company ? sanitizeInput(company) : '',
      service: sanitizeInput(service),
      message: sanitizeInput(message)
    };

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'メールアドレスの形式が正しくありません' },
        { status: 400 }
      );
    }

    // メッセージ長チェック
    if (sanitizedData.message.length < 10) {
      return NextResponse.json(
        { error: 'お問い合わせ内容は10文字以上で入力してください' },
        { status: 400 }
      );
    }

    console.log('メール送信開始...');
    console.log('送信先:', 'ohta.kura@gmail.com');
    console.log('送信元:', 'onboarding@resend.dev');

    // メール送信
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ohta.kura@gmail.com'],
      subject: `【お問い合わせ】${sanitizedData.service}について - ${sanitizedData.fullName}様`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Northerns株式会社 お問い合わせフォーム
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">お客様情報</h3>
            <p><strong>お名前:</strong> ${sanitizedData.fullName}</p>
            <p><strong>メールアドレス:</strong> ${sanitizedData.email}</p>
            <p><strong>会社名・組織名:</strong> ${sanitizedData.company || '未入力'}</p>
            <p><strong>ご相談サービス:</strong> ${sanitizedData.service}</p>
            <p><strong>送信元IP:</strong> ${clientIP}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">お問い合わせ内容</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${sanitizedData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              ※ このメールは自動送信されています。<br>
              ※ 返信は通常24時間以内に行います。<br>
              ※ セキュリティ強化済みフォームから送信されました。
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Northerns株式会社</p>
            <p>〒060-0001 北海道札幌市中央区北1条西1丁目</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('=== Resend エラー詳細 ===');
      console.error('Resend error details:', error);
      console.error('Resend error:', JSON.stringify(error, null, 2));
      console.error('=== エラー詳細終了 ===');
      return NextResponse.json(
        { error: `メール送信に失敗しました: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    console.log('メール送信成功:', data);
    console.log('=== デバッグ情報終了 ===');
    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。ありがとうございます。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== 例外エラー詳細 ===');
    console.error('Contact API error:', error);
    console.error('Error type:', typeof error);
    console.error('Error instanceof Error:', error instanceof Error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    console.error('=== 例外エラー詳細終了 ===');
    return NextResponse.json(
      { error: `サーバーエラーが発生しました: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
