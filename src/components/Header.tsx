import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/blog" className="flex items-center gap-2">
          <Image
            src="/images/yoshizuya-logo.png"
            alt="ヨシヅヤ"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/blog" className="hover:text-primary transition-colors">
            ブログ
          </Link>
          <Link href="/stores" className="hover:text-primary transition-colors">
            店舗紹介
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
