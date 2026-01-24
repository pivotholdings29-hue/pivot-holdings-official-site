import Layout from "@/components/Layout";

export default function Legal() {
  return (
    <Layout>
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-english tracking-wide text-[#1A1A1A]">LEGAL</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">特定商取引法に基づく表記</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-sm border border-gray-100 shadow-sm">
            <dl className="space-y-10">
              {/* 事業者情報 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Distributor</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">販売業者（社名）</p>
                  <p className="text-gray-600">pH株式会社</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Representative</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">代表責任者名</p>
                  <p className="text-gray-600">代表取締役　椛島 将太</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Location</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">所在地</p>
                  <p className="text-gray-600">〒153-0061 東京都目黒区中目黒1丁目1-72-504</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Contact</dt>
                <dd className="md:col-span-2 space-y-4">
                  <div>
                    <p className="font-bold text-lg text-[#1A1A1A] mb-2">電話番号</p>
                    <p className="text-gray-600">050-XXXX-XXXX（現在準備中）</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1A1A1A] mb-2">問い合わせ受付時間</p>
                    <p className="text-gray-600">平日 10:00〜17:00（土日祝除く）</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1A1A1A] mb-2">メールアドレス</p>
                    <p className="text-gray-600">pivotholdings29@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#1A1A1A] mb-2">ホームページURL</p>
                    <p className="text-gray-600">https://pivotholdings.co.jp</p>
                  </div>
                </dd>
              </div>

              {/* 商品・販売条件 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Price</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">販売価格</p>
                  <p className="text-gray-600">各商品ページに記載（表示価格は消費税込み）</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Period</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">提供期間</p>
                  <p className="text-gray-600">ご注文確認後、通常5営業日以内に発送いたします。</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Charges</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">商品代金以外の必要料金</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>送料（地域・サイズにより異なります）</li>
                    <li>銀行振込手数料（銀行振込の場合）</li>
                  </ul>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Delivery</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">引渡時期/提供時期</p>
                  <p className="text-gray-600">決済完了後（銀行振込の場合は入金確認後）、5営業日以内に発送いたします。</p>
                  <p className="text-xs text-gray-400 mt-2">※予約商品や在庫切れの場合は別途ご連絡いたします。</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Payment Timing</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">支払い時期</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>クレジットカード：ご注文時にお支払いが確定します。</li>
                    <li>銀行振込：ご注文後5日以内にお振込みください。</li>
                  </ul>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Payment Method</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">支払い方法</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>クレジットカード決済</li>
                    <li>銀行振込</li>
                  </ul>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Expiration</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">お申し込有効期限</p>
                  <p className="text-gray-600">ご注文から7日以内に入金が確認できない場合、ご注文をキャンセルとさせていただきます。</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Returns</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">返品・交換・キャンセル等</p>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      お客様都合による返品・交換・キャンセルはお受けしておりません。<br />
                      ただし、商品に欠陥がある場合や誤配送の場合は、商品到着後5日以内にご連絡いただければ、送料当社負担にて交換対応いたします。
                    </p>
                  </div>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1">Cooling Off</dt>
                <dd className="md:col-span-2">
                  <p className="font-bold text-lg text-[#1A1A1A] mb-2">クーリング・オフ</p>
                  <p className="text-gray-600">
                    通信販売にはクーリング・オフ制度の適用はございません。あらかじめご了承ください。
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}
