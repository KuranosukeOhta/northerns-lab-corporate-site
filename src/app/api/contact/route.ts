import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

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

// サービス名を日本語に変換
function getServiceLabel(service: string): string {
  const serviceMap: Record<string, string> = {
    'new-project': '新規プロジェクトのご相談',
    'estimate': 'お見積もりのご依頼',
    'service-inquiry': 'サービスに関するご質問',
    'partnership': '協業・パートナーシップのご提案',
    'recruitment': '採用・求人について',
    'other': 'その他のお問い合わせ',
  };
  return serviceMap[service] || service;
}

// 管理者向けメールテンプレート
function createAdminEmailHtml(data: {
  fullName: string;
  email: string;
  company: string;
  service: string;
  message: string;
  clientIP: string;
}): string {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
          新規お問い合わせ
        </h1>
      </div>
      
      <div style="padding: 30px;">
        <div style="background-color: #f9fafb; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
          <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 16px; font-weight: 600;">📋 お客様情報</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 120px;">お名前</td>
              <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">メールアドレス</td>
              <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">会社名・組織名</td>
              <td style="padding: 8px 0; color: #1f2937;">${data.company || '未入力'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">ご相談内容</td>
              <td style="padding: 8px 0; color: #1f2937;">${getServiceLabel(data.service)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">送信元IP</td>
              <td style="padding: 8px 0; color: #9ca3af; font-size: 12px;">${data.clientIP}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">💬 お問い合わせ内容</h3>
          <p style="white-space: pre-wrap; line-height: 1.8; color: #374151; margin: 0; background-color: #f9fafb; padding: 20px; border-radius: 8px;">${data.message}</p>
        </div>
      </div>
      
      <div style="background-color: #f3f4f6; padding: 20px; text-align: center;">
        <p style="margin: 0; color: #6b7280; font-size: 12px;">
          このメールはWebサイトのお問い合わせフォームから自動送信されました。
        </p>
      </div>
    </div>
  `;
}

// ユーザー向け自動返信メールテンプレート
function createUserEmailHtml(data: {
  fullName: string;
  company: string;
  service: string;
  message: string;
}): string {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0 0 10px 0; font-size: 24px; font-weight: 600;">
          お問い合わせありがとうございます
        </h1>
        <p style="color: #d1d5db; margin: 0; font-size: 14px;">
          Northerns（ノーザンズ）
        </p>
      </div>
      
      <div style="padding: 40px 30px;">
        <p style="color: #374151; font-size: 16px; line-height: 1.8; margin: 0 0 25px 0;">
          ${data.fullName} 様
        </p>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.8; margin: 0 0 25px 0;">
          この度は、Northerns（ノーザンズ）へお問い合わせいただき、誠にありがとうございます。<br>
          以下の内容でお問い合わせを受け付けいたしました。
        </p>
        
        <div style="background-color: #f9fafb; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
          <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
            📋 お問い合わせ内容の控え
          </h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 120px; border-bottom: 1px solid #e5e7eb;">お名前</td>
              <td style="padding: 10px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${data.fullName}</td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">会社名</td>
              <td style="padding: 10px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${data.company}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">ご相談内容</td>
              <td style="padding: 10px 0; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${getServiceLabel(data.service)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">メッセージ:</p>
            <p style="white-space: pre-wrap; line-height: 1.8; color: #374151; margin: 0; background-color: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">${data.message}</p>
          </div>
        </div>
        
        <div style="background-color: #eff6ff; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
          <p style="color: #1e40af; font-size: 14px; line-height: 1.8; margin: 0;">
            <strong>📅 今後の流れ</strong><br>
            担当者より<strong>2〜3営業日以内</strong>にご連絡いたします。<br>
            お急ぎの場合は、このメールにご返信ください。
          </p>
        </div>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.8; margin: 0;">
          ご不明な点がございましたら、お気軽にお問い合わせください。<br>
          今後ともよろしくお願いいたします。
        </p>
      </div>
      
      <div style="background-color: #1f2937; padding: 30px; text-align: center;">
        <p style="color: #ffffff; font-size: 14px; font-weight: 600; margin: 0;">
          Northerns（ノーザンズ）
        </p>
        <p style="color: #9ca3af; font-size: 11px; margin: 15px 0 0 0;">
          ※ このメールは自動送信されています。<br>
          ※ このメールに心当たりがない場合は、お手数ですが破棄してください。
        </p>
      </div>
    </div>
  `;
}

// SESクライアントを作成
function createSESClient() {
  return new SESClient({
    region: process.env.AWS_REGION || 'ap-northeast-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
  });
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
    
    // 環境変数チェック
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      console.error('AWS認証情報が設定されていません');
      return NextResponse.json(
        { error: 'メール送信の設定が完了していません' },
        { status: 500 }
      );
    }
    
    if (!process.env.ADMIN_EMAIL) {
      console.error('ADMIN_EMAILが設定されていません');
      return NextResponse.json(
        { error: 'メール送信の設定が完了していません' },
        { status: 500 }
      );
    }
    
    if (!process.env.FROM_EMAIL) {
      console.error('FROM_EMAILが設定されていません');
      return NextResponse.json(
        { error: 'メール送信の設定が完了していません' },
        { status: 500 }
      );
    }
    
    const body = await request.json();
    const { fullName, email, company, service, message } = body;

    // 入力バリデーション
    if (!fullName || !email || !service || !message) {
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

    // SESクライアント作成
    const sesClient = createSESClient();

    // 管理者向けメール送信
    const adminEmailCommand = new SendEmailCommand({
      Source: `Northerns お問い合わせフォーム <${process.env.FROM_EMAIL}>`,
      Destination: {
        ToAddresses: [process.env.ADMIN_EMAIL],
      },
      Message: {
        Subject: {
          Data: `【お問い合わせ】${getServiceLabel(sanitizedData.service)} - ${sanitizedData.fullName}様`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: createAdminEmailHtml({
              ...sanitizedData,
              clientIP,
            }),
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: [sanitizedData.email],
    });

    // ユーザー向け自動返信メール
    const userEmailCommand = new SendEmailCommand({
      Source: `Northerns（ノーザンズ） <${process.env.FROM_EMAIL}>`,
      Destination: {
        ToAddresses: [sanitizedData.email],
      },
      Message: {
        Subject: {
          Data: '【Northerns】お問い合わせを受け付けました',
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: createUserEmailHtml(sanitizedData),
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: [process.env.ADMIN_EMAIL],
    });

    // 両方のメールを並列送信
    const results = await Promise.allSettled([
      sesClient.send(adminEmailCommand),
      sesClient.send(userEmailCommand),
    ]);

    // 結果をチェック
    const adminResult = results[0];
    const userResult = results[1];

    // 管理者メールが失敗した場合はエラー
    if (adminResult.status === 'rejected') {
      console.error('管理者メール送信エラー:', JSON.stringify(adminResult.reason, null, 2));
      return NextResponse.json(
        { error: 'メール送信に失敗しました。しばらく時間をおいてから再試行してください。' },
        { status: 500 }
      );
    }

    // ユーザーメールが失敗した場合はログに記録（管理者には届いているので成功扱い）
    if (userResult.status === 'rejected') {
      console.error('ユーザー自動返信メール送信エラー:', JSON.stringify(userResult.reason, null, 2));
      // 管理者には届いているので、ユーザーには成功として返す
    }

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。2〜3営業日以内にご返信いたします。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: `サーバーエラーが発生しました: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
