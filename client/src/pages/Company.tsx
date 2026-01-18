import Layout from "@/components/Layout";

export default function Company() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-english tracking-wide">COMPANY</h1>
          <p className="text-gray-500 font-bold">企業情報</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <dl className="divide-y divide-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">会社名</dt>
                <dd className="md:col-span-2 font-medium text-lg">pivotHoldings</dd>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">カナ表記</dt>
                <dd className="md:col-span-2 font-medium">ピボットホールディングス</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">代表取締役</dt>
                <dd className="md:col-span-2 font-medium">椛島 将太</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">所在地</dt>
                <dd className="md:col-span-2 font-medium">
                  〒153-0061<br />
                  東京都目黒区中目黒1丁目1-72-504
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">法人番号</dt>
                <dd className="md:col-span-2 font-medium font-mono">3011001174688</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">設立</dt>
                <dd className="md:col-span-2 font-medium">2025年12月23日</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">事業内容</dt>
                <dd className="md:col-span-2 font-medium leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>飲料および食品関連商品の企画・開発・販売</li>
                    <li>自社ブランド商品のプロデュース</li>
                    <li>ECサイト、イベント等を通じた販売</li>
                    <li>関連イベントの企画・運営、情報発信</li>
                  </ul>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">営業所</dt>
                <dd className="md:col-span-2 font-medium">本社のみ</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-gray-50 transition-colors">
                <dt className="font-bold text-gray-500 mb-2 md:mb-0">主要取引先</dt>
                <dd className="md:col-span-2 font-medium">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>食品製造関連事業者</li>
                    <li>イベント運営会社</li>
                    <li>販売パートナー</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}
