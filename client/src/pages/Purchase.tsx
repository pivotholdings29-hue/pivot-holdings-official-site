import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, Utensils } from "lucide-react";

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
              <p className="text-gray-500 leading-loose text-lg">
                お客様の区分に合わせて、下記よりフォームを選択してください。
              </p>
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
                  <span className="hidden md:inline">飲食店様</span>
                  <span className="md:hidden">飲食店</span>
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
                <div className="bg-white p-4 md:p-8 rounded-sm border border-gray-100 shadow-xl">
                  <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">一般のお客様向け ご注文フォーム</h3>
                    <p className="text-sm text-gray-500">個人でのご購入はこちらからお願いいたします。</p>
                  </div>
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeC8Kup7d66TaJqN3wPKqBv-RyQ5CVUPD5szXDEGWHMoa44Zw/viewform?embedded=true" 
                    width="100%" 
                    height="1800" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Hunter注文フォーム（一般）"
                  >
                    読み込んでいます…
                  </iframe>
                </div>
              </TabsContent>

              <TabsContent value="restaurant" className="mt-0">
                <div className="bg-white p-4 md:p-8 rounded-sm border border-gray-100 shadow-xl">
                  <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">飲食店様向け ご注文フォーム</h3>
                    <p className="text-sm text-gray-500">飲食店様での導入・ご購入はこちらからお願いいたします。</p>
                  </div>
                  <iframe 
                    src="https://docs.google.com/forms/d/1sjaDvYmuZYgdrVbi33c9c5a5ERA9mL1PrR9eYRzMJ4c/viewform?embedded=true" 
                    width="100%" 
                    height="1800" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    title="Hunter注文フォーム（飲食店）"
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
            
            <div className="mt-16 text-left max-w-2xl mx-auto bg-gray-50 p-8 rounded-sm">
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
