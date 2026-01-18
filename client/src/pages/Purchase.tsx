import Layout from "@/components/Layout";
import { ShoppingCart, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Purchase() {
  return (
    <Layout>
      <div className="bg-[#221F1F] text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-english tracking-wide text-[#00FF00]">PURCHASE</h1>
          <p className="text-gray-400 font-bold">購入方法</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-16">商品は以下の方法で販売しています。</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Method 1 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:border-[#00FF00] transition-colors group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00FF00]/10 transition-colors">
                  <ShoppingCart className="w-8 h-8 text-gray-600 group-hover:text-[#008800]" />
                </div>
                <h3 className="text-lg font-bold mb-2">自社ECサイト</h3>
                <p className="text-sm text-gray-500">オンラインで直接ご購入いただけます</p>
              </div>

              {/* Method 2 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:border-[#00FF00] transition-colors group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00FF00]/10 transition-colors">
                  <MapPin className="w-8 h-8 text-gray-600 group-hover:text-[#008800]" />
                </div>
                <h3 className="text-lg font-bold mb-2">イベント販売</h3>
                <p className="text-sm text-gray-500">出展イベントにて対面販売を行います</p>
              </div>

              {/* Method 3 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:border-[#00FF00] transition-colors group">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00FF00]/10 transition-colors">
                  <Users className="w-8 h-8 text-gray-600 group-hover:text-[#008800]" />
                </div>
                <h3 className="text-lg font-bold mb-2">パートナー経由</h3>
                <p className="text-sm text-gray-500">取引先・販売パートナー様よりご購入</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">現在、購入ページは準備中です</h3>
              <p className="text-gray-600 mb-8">
                公開次第、本ページにてご案内します。<br />
                最新情報はニュースページまたはInstagramをご確認ください。
              </p>
              <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed px-8 py-6 rounded-full">
                準備中
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
