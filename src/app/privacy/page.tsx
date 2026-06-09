import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">プライバシーポリシー</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
        <p>株式会社ヨシヅヤ（以下、「当社」）は、お客様の個人情報保護の重要性について認識し、以下のプライバシーポリシー（以下、「本ポリシー」）に従い、個人情報の適切な取り扱いに努めます。</p>

        <h2 className="text-lg font-bold text-foreground mt-6">1. 個人情報の収集について</h2>
        <p>当社は、お問い合わせフォームのご利用等にあたり、以下の個人情報を収集することがあります。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>お名前</li>
          <li>メールアドレス</li>
          <li>電話番号</li>
          <li>お問い合わせ内容</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">2. 個人情報の利用目的</h2>
        <p>当社は、お客様からいただいた個人情報を以下の目的で利用します。</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>お問い合わせへの回答・連絡</li>
          <li>商品・サービスのご案内</li>
          <li>当社サービスの改善</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">3. 個人情報の第三者提供</h2>
        <p>当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。</p>

        <h2 className="text-lg font-bold text-foreground mt-6">4. 個人情報の管理</h2>
        <p>当社は、お客様の個人情報を適切に管理し、不正アクセス・紛失・漏洩等の防止に努めます。</p>

        <h2 className="text-lg font-bold text-foreground mt-6">5. お問い合わせ</h2>
        <p>本ポリシーに関するお問い合わせは、<Link href="/contact" className="text-primary hover:underline">お問い合わせフォーム</Link>よりお願いいたします。</p>

        <p className="mt-8 text-right">以上</p>
      </div>
    </div>
  );
}
