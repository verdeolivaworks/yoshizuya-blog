export function Footer() {
  const areas = [
    "津島市", "愛西市", "稲沢市", "一宮市", "清須市", "北名古屋市",
    "名古屋市(中川区/中区/北区/緑区/港区/中村区/西区)",
    "弥富市", "桑名市", "海津市", "豊山町", "大口町", "江南市",
    "扶桑町", "犬山市", "可児市", "美濃加茂市", "御嵩町", "多治見市", "小牧市",
  ];

  return (
    <footer className="bg-yoshizuya-mid/20 border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-xs text-muted-foreground/60 text-center leading-loose max-w-2xl mx-auto mb-4">
          対応エリア：{areas.join("・")}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Yoshizuya Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
