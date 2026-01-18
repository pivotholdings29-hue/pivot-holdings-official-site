import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Business() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-english tracking-wide">BUSINESS</h1>
          <p className="text-gray-500 font-bold">事業内容</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 leading-relaxed">
              pivotHoldingsは、<br />
              自社ブランドを起点に、<br />
              <span className="bg-[#00FF00]/20 px-1">商品と体験の企画・設計</span>を行っています。
            </h2>

            <div className="space-y-12">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#00FF00]"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-[#0066FF] font-english text-2xl">01</span>
                  商品企画・開発・販売
                </h3>
                <p className="text-gray-600 leading-loose">
                  飲料および食品関連商品の企画・開発・販売を主軸とし、ECサイトやイベントを通じて展開しています。
                  単なるモノの提供ではなく、その先にある「時間」や「体験」を豊かにする商品を開発しています。
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#0066FF]"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-[#00FF00] font-english text-2xl">02</span>
                  場づくり・体験設計
                </h3>
                <p className="text-gray-600 leading-loose">
                  商品単体の提供にとどまらず、イベントの企画・運営や情報発信を通じて、食や体験を軸とした場づくりにも取り組んでいます。
                  人と人がつながる瞬間や、新しい発見が生まれる空間をプロデュースします。
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/products">
                <Button className="bg-[#221F1F] hover:bg-gray-800 text-white px-8 py-6 rounded-full group">
                  取り扱い商品を見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
