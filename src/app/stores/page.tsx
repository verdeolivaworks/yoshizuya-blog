export default function StoresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">店舗紹介</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 border">
          <h2 className="font-bold text-lg mb-2">津島本店</h2>
          <p className="text-sm text-muted-foreground mb-1">愛知県津島市XXXX</p>
          <p className="text-sm text-muted-foreground">TEL: 0567-XX-XXXX</p>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h2 className="font-bold text-lg mb-2">西春店</h2>
          <p className="text-sm text-muted-foreground mb-1">愛知県北名古屋市XXXX</p>
          <p className="text-sm text-muted-foreground">TEL: 0568-XX-XXXX</p>
        </div>
        <div className="bg-card rounded-lg p-6 border">
          <h2 className="font-bold text-lg mb-2">名古屋店</h2>
          <p className="text-sm text-muted-foreground mb-1">愛知県名古屋市XXXX</p>
          <p className="text-sm text-muted-foreground">TEL: 052-XXX-XXXX</p>
        </div>
      </div>
      <div className="mt-8 bg-yoshizuya-light rounded-lg p-6 border border-yoshizuya-mid">
        <p className="text-sm text-muted-foreground">
          各店舗の詳細情報は追って追加予定です。詳しくは
          <a href="https://gofuku.yoshizuya.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
            公式サイト
          </a>
          をご覧ください。
        </p>
      </div>
    </div>
  );
}
