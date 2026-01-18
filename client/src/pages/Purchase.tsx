import Layout from "@/components/Layout";
import { ShoppingCart, MapPin, Users } from "lucide-react";
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
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-center mb-20 font-light text-[#1A1A1A]">商品は以下の方法で販売しています。</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
              {/* Method 1 */}
              <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm text-center hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0066FF] transition-colors duration-500">
                  <ShoppingCart className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">自社ECサイト</h3>
                <p className="text-sm text-gray-500 leading-relaxed">オンラインで直接ご購入いただけます</p>
              </div>

              {/* Method 2 */}
              <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm text-center hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0066FF] transition-colors duration-500">
                  <MapPin className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">イベント販売</h3>
                <p className="text-sm text-gray-500 leading-relaxed">出展イベントにて対面販売を行います</p>
              </div>

              {/* Method 3 */}
              <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm text-center hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#0066FF] transition-colors duration-500">
                  <Users className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">パートナー経由</h3>
                <p className="text-sm text-gray-500 leading-relaxed">取引先・販売パートナー様よりご購入</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-sm p-16 text-center border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">現在、購入ページは準備中です</h3>
              <p className="text-gray-500 mb-10 leading-loose">
                公開次第、本ページにてご案内します。<br />
                最新情報はニュースページまたはInstagramをご確認ください。
              </p>
              <Button disabled className="bg-gray-200 text-gray-400 cursor-not-allowed px-10 py-7 rounded-sm shadow-none">
                COMING SOON
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
