import Layout from "@/components/Layout";

export default function Purchase() {
  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white">PURCHASE</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">購入方法</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-[#1A1A1A]">
              ご注文フォーム
            </h2>
            <p className="text-gray-500 mb-16 leading-loose text-lg">
              pHの商品（Hunterなど）のご注文は、<br className="hidden md:block" />
              下記のご注文フォームより承っております。<br />
              必要事項をご入力の上、送信してください。
            </p>

            <div className="bg-white p-4 md:p-8 rounded-sm border border-gray-100 shadow-xl">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeC8Kup7d66TaJqN3wPKqBv-RyQ5CVUPD5szXDEGWHMoa44Zw/viewform?embedded=true" 
                width="100%" 
                height="1800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="Hunter注文フォーム"
              >
                読み込んでいます…
              </iframe>
            </div>
            
            <div className="mt-12 text-left max-w-2xl mx-auto bg-gray-50 p-8 rounded-sm">
              <h3 className="font-bold text-[#1A1A1A] mb-4">ご注文後の流れ</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">
                <li>フォームよりご注文内容を送信してください。</li>
                <li>当社より、ご注文確認メールと振込先口座（または決済URL）をご案内いたします。</li>
                <li>代金のお支払いをお願いいたします。</li>
                <li>ご入金確認後、5営業日以内に商品を発送いたします。</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
