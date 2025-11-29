This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 環境変数の設定

お問い合わせフォームのメール送信機能を利用するには、以下の環境変数を `.env.local` に設定してください。

```env
# SendGrid API Key（SG.で始まる）
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 送信元メールアドレス（SendGridで認証済みのアドレス）
FROM_EMAIL=noreply@yourdomain.com

# 管理者メールアドレス（お問い合わせ通知の送信先）
ADMIN_EMAIL=admin@yourdomain.com
```

### SendGrid設定手順

1. [SendGrid](https://sendgrid.com/) でアカウントを作成
2. **Settings → API Keys** で API Key を発行（Mail Send 権限が必要）
3. **Settings → Sender Authentication** で送信元ドメインまたはメールアドレスを認証
4. 上記の環境変数を設定

### メール送信の仕組み

お問い合わせフォームから送信されると、以下の2通のメールが送信されます：

| 宛先 | 内容 |
|------|------|
| 管理者（ADMIN_EMAIL） | お問い合わせ詳細（氏名、メール、会社、サービス、メッセージ） |
| ユーザー（入力されたemail） | 受付確認・お礼メール（問い合わせ内容の控え付き） |

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
