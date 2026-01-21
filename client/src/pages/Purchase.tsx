import Layout from "@/components/Layout";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              商品は公式LINEよりご購入いただけます
            </h2>
            <p className="text-gray-500 mb-16 leading-loose text-lg">
              pHの商品（Hunterなど）は、<br className="hidden md:block" />
              現在、公式LINEアカウントを通じて販売を行っております。<br />
              友だち追加の上、メニューよりご購入手続きをお願いいたします。
            </p>

            <div className="bg-white p-12 md:p-20 rounded-sm border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <div className="w-24 h-24 bg-[#06C755] rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg animate-pulse">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Hunterドリンク公式LINE</h3>
              <p className="text-gray-500 mb-12">
                新商品情報やイベント出展情報も配信しています。<br />
                ぜひ友だち追加をお願いします。
              </p>

              <a 
                href="https://line.me/R/ti/p/@278bzuez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-[#06C755] hover:bg-[#05b34c] text-white text-xl font-bold px-16 py-8 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  LINEで友だち追加して購入
                </Button>
              </a>
              
              <p className="text-xs text-gray-400 mt-8">
                ※LINEアプリが起動します
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
