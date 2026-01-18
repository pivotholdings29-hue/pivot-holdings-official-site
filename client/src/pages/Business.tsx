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
            <h2 className="text-2xl md:text-3xl font-bold mb-16 leading-relaxed text-[#1A1A1A]">
              pivotHoldingsは、<br />
              自社ブランドを起点に、<br />
              <span className="border-b-4 border-[#0066FF]/20 pb-1">商品と体験の企画・設計</span>を行っています。
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-10 md:p-12 rounded-sm border border-gray-100 hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1A1A1A] group-hover:bg-[#0066FF] transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-[#1A1A1A]">
                  <span className="text-gray-200 font-english text-4xl font-bold group-hover:text-[#0066FF]/20 transition-colors">01</span>
                  商品企画・開発・販売
                </h3>
                <p className="text-gray-500 leading-loose pl-14">
                  飲料および食品関連商品の企画・開発・販売を主軸とし、ECサイトやイベントを通じて展開しています。
                  単なるモノの提供ではなく、その先にある「時間」や「体験」を豊かにする商品を開発しています。
                </p>
              </div>

              <div className="bg-white p-10 md:p-12 rounded-sm border border-gray-100 hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1A1A1A] group-hover:bg-[#0066FF] transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-[#1A1A1A]">
                  <span className="text-gray-200 font-english text-4xl font-bold group-hover:text-[#0066FF]/20 transition-colors">02</span>
                  場づくり・体験設計
                </h3>
                <p className="text-gray-500 leading-loose pl-14">
                  商品単体の提供にとどまらず、イベントの企画・運営や情報発信を通じて、食や体験を軸とした場づくりにも取り組んでいます。
                  人と人がつながる瞬間や、新しい発見が生まれる空間をプロデュースします。
                </p>
              </div>
            </div>

            <div className="mt-20 text-center">
              <Link href="/products">
                <Button className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-10 py-7 rounded-sm shadow-none transition-all duration-300 group text-lg">
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
