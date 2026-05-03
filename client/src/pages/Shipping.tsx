import Layout from "@/components/Layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Shipping() {
  const shippingRates = [
    { region: "北海道", prefectures: "北海道", size60: "1,179円", size80: "1,415円" },
    { region: "北東北", prefectures: "青森・岩手・秋田", size60: "851円", size80: "1,097円" },
    { region: "南東北", prefectures: "宮城・山形・福島", size60: "745円", size80: "999円" },
    { region: "関東", prefectures: "東京・茨城・栃木・群馬・埼玉・千葉・神奈川・山梨", size60: "745円", size80: "999円" },
    { region: "信越", prefectures: "新潟・長野", size60: "745円", size80: "999円" },
    { region: "北陸", prefectures: "富山・石川・福井", size60: "745円", size80: "999円" },
    { region: "東海", prefectures: "岐阜・静岡・愛知・三重", size60: "745円", size80: "999円" },
    { region: "関西", prefectures: "滋賀・京都・大阪・兵庫・奈良・和歌山", size60: "851円", size80: "1,097円" },
    { region: "中国", prefectures: "鳥取・島根・岡山・広島・山口", size60: "965円", size80: "1,203円" },
    { region: "四国", prefectures: "徳島・香川・愛媛・高知", size60: "1,063円", size80: "1,301円" },
    { region: "北九州", prefectures: "福岡・佐賀・長崎・大分", size60: "1,179円", size80: "1,415円" },
    { region: "南九州", prefectures: "熊本・宮崎・鹿児島", size60: "1,179円", size80: "1,415円" },
    { region: "沖縄", prefectures: "沖縄", size60: "別途お問い合わせ", size80: "別途お問い合わせ" },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-english tracking-wide text-[#1A1A1A]">SHIPPING</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">送料について</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white p-6 md:p-12 rounded-sm border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-8 text-[#1A1A1A]">配送料金一覧</h2>
            <p className="text-gray-600 mb-8">
              配送地域とサイズに応じた送料は以下の通りです。
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead className="w-[100px] font-bold text-[#1A1A1A]">地域</TableHead>
                    <TableHead className="min-w-[200px] font-bold text-[#1A1A1A]">都道府県</TableHead>
                    <TableHead className="w-[120px] font-bold text-[#1A1A1A] text-right">60サイズ送料</TableHead>
                    <TableHead className="w-[120px] font-bold text-[#1A1A1A] text-right">80サイズ送料</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shippingRates.map((rate, index) => (
                    <TableRow key={index} className="hover:bg-gray-50/50">
                      <TableCell className="font-medium">{rate.region}</TableCell>
                      <TableCell className="text-gray-600">{rate.prefectures}</TableCell>
                      <TableCell className="text-right font-mono">{rate.size60}</TableCell>
                      <TableCell className="text-right font-mono">{rate.size80}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 space-y-2">
              <p>※ 送料はすべて税抜き表示です。</p>
              <p>※ 離島・一部地域は追加中継料がかかる場合があります。</p>
              <p>※ 商品の組み合わせや数量により、サイズが変更になる場合があります。</p>
              <p>※ 梱包サイズ：14本まで60サイズ、15本以上は80サイズとなります。</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
