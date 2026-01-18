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
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50"></div>
              <div className="relative z-10 text-center p-8">
                <h3 className="text-4xl md:text-6xl font-bold text-gray-300 font-english tracking-widest mb-4">HUNTER</h3>
                <p className="text-gray-400">Product Image</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 border-4 border-[#00FF00] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#0066FF] rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-block px-3 py-1 bg-[#00FF00]/10 text-[#008800] font-bold rounded-full text-sm mb-6">
                Original Brand
              </div>
              <h2 className="text-4xl font-bold mb-2 font-english">Hunter</h2>
              <p className="text-xl text-gray-500 mb-8">ハンター</p>

              <div className="space-y-6 text-gray-600 leading-loose mb-10">
                <p>
                  Hunterは、食事や体験の時間を前提に設計された、自社ブランドのドリンクです。
                </p>
                <p>
                  単なる飲料ではなく、「どんな場で、誰と、どう楽しむか」まで含めて企画しています。
                  日常のひとときを、より豊かで記憶に残るものにするためのパートナーとして、
                  私たちはHunterをお届けします。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#221F1F] hover:bg-gray-800 text-white px-8 py-6 rounded-full group" disabled>
                  Hunter公式サイトへ
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Link href="/purchase">
                  <Button variant="outline" className="border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white px-8 py-6 rounded-full transition-colors">
                    購入方法を見る
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray-400">※公式サイトは現在準備中です</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
