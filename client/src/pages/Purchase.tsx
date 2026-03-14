import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, Utensils, MessageCircle } from "lucide-react";

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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
                ご注文フォーム
              </h2>
              <p className="text-gray-500 leading-loose text-lg mb-4">
                お客様の区分に合わせて、下記よりフォームを選択してください。
              </p>
              <p className="text-sm text-gray-500">
                販売代理店契約、または卸でのお取引をご希望の業者様は、
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScF40i3yQ3HR9U-cYLYBiPo7YyXwL1-GKVcox1IdaRLY7xUYQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] underline hover:text-[#0052cc]">
                  お問い合わせフォーム
                </a>
                からご連絡ください。
              </p>
            </div>

            <div className="mb-16 text-left max-w-2xl mx-auto bg-gray-50 p-8 rounded-sm">
              <h3 className="font-bold text-[#1A1A1A] mb-4">ご注文後の流れ</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-600 text-sm leading-relaxed">
                <li>フォームよりご注文内容を送信してください。</li>
                <li>代金のお支払いをお願いいたします。</li>
                <li>ご入金確認後、10営業日以内に商品を発送いたします。</li>
              </ol>
            </div>

            <Tabs defaultValue="toc" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1 bg-gray-100 rounded-lg">
                <TabsTrigger 
                  value="toc" 
                  className="py-4 text-sm md:text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-[#0066FF] data-[state=active]:shadow-sm transition-all rounded-md flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden md:inline">一般のお客様</span>
                  <span className="md:hidden">一般</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="restaurant" 
                  className="py-4 text-sm md:text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-[#0066FF] data-[state=active]:shadow-sm transition-all rounded-md flex items-center justify-center gap-2"
                >
                  <Utensils className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden md:inline">業者様</span>
                  <span className="md:hidden">業者</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="tob" 
                  className="py-4 text-sm md:text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-[#0066FF] data-[state=active]:shadow-sm transition-all rounded-md flex items-center justify-center gap-2"
                >
                  <Building2 className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden md:inline">販売代理店様</span>
                  <span className="md:hidden">代理店</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="toc" className="mt-0">
                <div className="bg-white p-8 md:p-12 rounded-sm border border-gray-100 shadow-xl text-center">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">一般のお客様向け ご注文</h3>
                    <p className="text-gray-500 leading-relaxed mb-8">
                      一般のお客様のご注文は、HUNTER公式LINEにて承っております。<br />
                      下記ボタン、またはQRコードより友だち追加の上、ご注文ください。
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-8">
                    <a 
                      href="https://line.me/R/ti/p/@278bzuez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md"
                    >
                      <MessageCircle className="w-6 h-6" />
                      公式LINEで注文する
                    </a>

                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <img 
                        src="/hunter/assets/line-qr.png" 
                        alt="HUNTER 公式LINE QRコード" 
                        className="w-48 h-48 object-contain"
                      />
                      <p className="mt-2 text-xs text-gray-400 font-medium">@278bzuez</p>
                    </div>
                    
                    <p className="text-sm text-gray-400">
                      ※ スマートフォンの方はボタンをタップ、<br className="md:hidden" />PCの方はQRコードをスキャンしてください。
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="restaurant" className="mt-0">
                <div className="bg-white p-4 md:p-8 rounded-sm border border-gray-100 shadow-xl">
                  <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">業者様向け ご注文フォーム</h3>
                    <p className="text-sm text-gray-500">業者様での導入・ご購入はこちらからお願いいたします。</p>
                  </div>
                  
                  <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-md text-left">
                    <p className="text-sm text-gray-700 mb-2 font-bold">【2回目以降のご注文について】</p>
                    <p className="text-sm text-gray-600 mb-3">
                      2回目以降のご注文は、専用の発注フォームをご利用ください。
                    </p>
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeBqEJjqgu0TKfRus00n16G8RSz_tHCp6duiAXsLNYCGeP_Sg/viewform?usp=dialog" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-white bg-[#0066FF] hover:bg-[#0052cc] px-4 py-2 rounded-md transition-colors"
                    >
                      2回目以降の発注フォームはこちら
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>

                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf9T8qshRv-0Mm6lnSfKUMZiU6EGFyXSaQocDE3p0dJJDTzlg/viewform?embedded=true" 
                    width="100%" 
                    height="1800" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Hunter注文フォーム（業者）"
                  >
                    読み込んでいます…
                  </iframe>
                </div>
              </TabsContent>

              <TabsContent value="tob" className="mt-0">
                <div className="bg-white p-4 md:p-8 rounded-sm border border-gray-100 shadow-xl">
                  <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">販売代理店様向け ご注文フォーム</h3>
                    <p className="text-sm text-gray-500">お取り扱いをご希望の販売代理店様はこちらからお願いいたします。</p>
                  </div>
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLScJO2Fgps5KgJ8F2HFyVkLeVw6nONl2LrMMeczqZXIvmbO2NQ/viewform?embedded=true" 
                    width="100%" 
                    height="1800" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Hunter注文フォーム（代理店）"
                  >
                    読み込んでいます…
                  </iframe>
                </div>
              </TabsContent>
            </Tabs>
            

          </div>
        </div>
      </section>
    </Layout>
  );
}
