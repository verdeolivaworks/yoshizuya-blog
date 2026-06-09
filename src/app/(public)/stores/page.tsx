const stores = [
  { name: "津島本店", address: "愛知県津島市大字津島字北新開351番地", tel: "0567-23-7111" },
  { name: "新稲沢店", address: "愛知県稲沢市朝府町4番1号", tel: "0587-21-1121" },
  { name: "ＪＲ蟹江駅前店", address: "愛知県海部郡蟹江町桜１丁目212番地", tel: "0567-96-6711" },
  { name: "弥富店", address: "愛知県弥富市鯏裏町南前新田123番地", tel: "0567-67-4111" },
  { name: "甚目寺店", address: "あま市甚目寺五位田１２８", tel: "052-441-1111" },
  { name: "師勝店", address: "愛知県北名古屋市鹿田1929", tel: "0568-23-2111" },
  { name: "大口店", address: "愛知県丹羽郡大口町奈良子2丁目79番地", tel: "0587-95-7511" },
  { name: "可児店", address: "岐阜県可児市下恵土5750", tel: "0574-63-4711" },
  { name: "太平通り店", address: "名古屋市中川区宮脇2丁目11番地", tel: "052-354-8211" },
  { name: "清洲店", address: "愛知県清須市西市場5丁目5-3", tel: "052-401-3011" },
];

export default function StoresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">店舗紹介</h1>
      <p className="text-muted-foreground mb-8">ヨシヅヤ振袖の各店舗情報です。休業日は各店舗にお問い合わせください。</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store) => (
          <div key={store.name} className="bg-card rounded-lg p-5 border hover:shadow-sm transition-shadow">
            <h2 className="font-bold text-lg mb-2">{store.name}</h2>
            <p className="text-sm text-muted-foreground mb-1">〒 {store.address}</p>
            <p className="text-sm text-muted-foreground">TEL: {store.tel}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-yoshizuya-light rounded-lg p-6 border border-yoshizuya-mid">
        <p className="text-sm text-muted-foreground">
          詳しくは<a href="https://gofuku.yoshizuya.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">公式サイト</a>をご覧ください。
        </p>
      </div>
    </div>
  );
}
