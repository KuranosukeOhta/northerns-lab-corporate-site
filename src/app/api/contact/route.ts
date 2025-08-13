import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // デバッグ用ログ
    console.log('=== デバッグ情報開始 ===');
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
    const { fullName, email, company, service, message } = body;

    console.log('受信したデータ:', { fullName, email, company, service, message });

    // バリデーション
    if (!fullName || !email || !service || !message) {
      console.log('バリデーションエラー: 必須項目が不足');
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    console.log('メール送信開始...');
    console.log('送信先:', 'ohta.kura@gmail.com');
    console.log('送信元:', 'onboarding@resend.dev');

    // より簡単なテストメールを送信
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resendのデフォルト送信元を使用
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
