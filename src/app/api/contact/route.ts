import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, company, service, message } = body;

    // バリデーション
    if (!fullName || !email || !service || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メール送信
    const { data, error } = await resend.emails.send({
      from: 'Northerns株式会社 <noreply@northerns.co.jp>',
      to: ['ohta.kura@gmail.com'],
      subject: `【お問い合わせ】${service}について - ${fullName}様`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Northerns株式会社 お問い合わせフォーム
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">お客様情報</h3>
            <p><strong>お名前:</strong> ${fullName}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>会社名・組織名:</strong> ${company || '未入力'}</p>
            <p><strong>ご相談サービス:</strong> ${service}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">お問い合わせ内容</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              ※ このメールは自動送信されています。<br>
              ※ 返信は通常24時間以内に行います。
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
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。ありがとうございます。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
