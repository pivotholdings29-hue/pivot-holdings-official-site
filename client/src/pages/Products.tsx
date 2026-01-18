import Layout from "@/components/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Products() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-english tracking-wide">PRODUCTS</h1>
          <p className="text-gray-500 font-bold">商品紹介</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image Placeholder */}
            <div className="bg-gray-50 rounded-sm aspect-square flex items-center justify-center relative overflow-hidden group border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white opacity-50"></div>
              <div className="relative z-10 text-center p-8">
                <h3 className="text-4xl md:text-6xl font-bold text-gray-200 font-english tracking-widest mb-4 group-hover:text-[#0066FF]/20 transition-colors duration-500">HUNTER</h3>
                <p className="text-gray-300 tracking-widest text-sm uppercase">Product Image</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-full h-full border-[20px] border-white/50 pointer-events-none"></div>
            </div>

            {/* Product Info */}
            <div className="pl-0 lg:pl-10">
              <div className="inline-block px-3 py-1 border border-[#1A1A1A] text-[#1A1A1A] font-bold text-xs tracking-widest mb-8 uppercase">
                Original Brand
              </div>
              <h2 className="text-5xl font-bold mb-2 font-english text-[#1A1A1A]">Hunter</h2>
              <p className="text-lg text-gray-400 mb-10 font-light tracking-wide">ハンター</p>

              <div className="space-y-8 text-gray-500 leading-loose mb-12 font-light">
                <p>
                  Hunterは、食事や体験の時間を前提に設計された、自社ブランドのドリンクです。
                </p>
                <p>
                  単なる飲料ではなく、「どんな場で、誰と、どう楽しむか」まで含めて企画しています。
                  日常のひとときを、より豊かで記憶に残るものにするためのパートナーとして、
                  私たちはHunterをお届けします。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-gray-200 text-gray-400 px-10 py-7 rounded-sm cursor-not-allowed shadow-none" disabled>
                  Hunter公式サイトへ
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Link href="/purchase">
                  <Button className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-10 py-7 rounded-sm transition-all duration-300 shadow-none">
                    購入方法を見る
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray-400 tracking-wide">※公式サイトは現在準備中です</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
