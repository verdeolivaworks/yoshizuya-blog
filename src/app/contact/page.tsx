import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">お問い合わせ</h1>
      <p className="text-muted-foreground mb-8">
        ヨシヅヤに関するお問い合わせは以下のフォームからお送りください。
      </p>
      <ContactForm />
      <div className="mt-12 bg-yoshizuya-light rounded-lg p-6 border border-yoshizuya-mid max-w-lg">
        <h2 className="font-bold mb-2">お電話でのお問い合わせ</h2>
        <p className="text-sm text-muted-foreground">
          営業時間: 10:00〜19:00（水曜定休）<br />
          TEL: 0567-XX-XXXX
        </p>
      </div>
    </div>
  );
}
