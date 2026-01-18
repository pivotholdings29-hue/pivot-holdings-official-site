import Layout from "@/components/Layout";

export default function Company() {
  return (
    <Layout>
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-[#1A1A1A]">COMPANY</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">企業情報</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-sm border border-gray-100 shadow-sm">
            <dl className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Company Name</dt>
                <dd className="md:col-span-2 font-bold text-xl text-[#1A1A1A]">pivotHoldings株式会社</dd>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Reading</dt>
                <dd className="md:col-span-2 text-gray-600">ピボットホールディングス</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Representative</dt>
                <dd className="md:col-span-2 text-gray-600">代表取締役　椛島 将太</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Established</dt>
                <dd className="md:col-span-2 text-gray-600">2025年12月23日</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Corporate Number</dt>
                <dd className="md:col-span-2 font-mono text-gray-600">3011001174688</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Location</dt>
                <dd className="md:col-span-2 text-gray-600 leading-relaxed">
                  〒153-0061<br />
                  東京都目黒区中目黒1丁目1-72-504
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Business</dt>
                <dd className="md:col-span-2 space-y-3 text-gray-600">
                  <p>・飲料および食品関連商品の企画・開発・販売</p>
                  <p>・自社ブランド商品のプロデュース</p>
                  <p>・ECサイト、イベント等を通じた販売</p>
                  <p>・関連イベントの企画・運営、情報発信</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Partners</dt>
                <dd className="md:col-span-2 space-y-3 text-gray-600">
                  <p>・食品製造関連事業者</p>
                  <p>・イベント運営会社</p>
                  <p>・販売パートナー</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}
