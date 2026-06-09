import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">お問い合わせ</h1>
      <p className="text-muted-foreground mb-8">
        ヨシヅヤに関するお問い合わせは以下のフォームからお送りいただくか、お電話でご連絡ください。
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ContactForm />
        </div>
        <div>
          <div className="bg-yoshizuya-light rounded-lg p-6 border border-yoshizuya-mid">
            <h2 className="font-bold mb-3">お電話でのお問い合わせ</h2>
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">津島本店</strong><br />
              TEL: 0567-23-7111<br />
              受付時間: 10:00〜19:00
            </p>
            <p className="text-sm text-muted-foreground">
              各店舗の電話番号は<a href="/stores" className="text-primary hover:underline ml-1">店舗紹介</a>をご覧ください。
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border mt-4">
            <h2 className="font-bold mb-2">株式会社ヨシヅヤ</h2>
            <p className="text-sm text-muted-foreground">
              〒496-0851<br />
              愛知県津島市大字津島字北新開351番地<br />
              創業九十年、お客様とのふれあいを大切にしています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
