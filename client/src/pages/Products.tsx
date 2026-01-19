import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white"
          >
            PRODUCTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-bold tracking-widest text-sm uppercase"
          >
            商品紹介
          </motion.p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 rounded-sm aspect-square flex items-center justify-center relative overflow-hidden group border border-gray-200"
            >
              <img 
                src="/images/hunter-product.jpg" 
                alt="Hunter Product" 
                className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-full h-full border-[20px] border-white/10 pointer-events-none"></div>
            </motion.div>

            {/* Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pl-0 lg:pl-10"
            >
              <div className="inline-block px-3 py-1 border border-[#1A1A1A] text-[#1A1A1A] font-bold text-xs tracking-widest mb-8 uppercase">
                Original Brand
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-4 font-english text-[#1A1A1A]">Hunter</h2>
              <p className="text-lg text-gray-400 mb-12 font-light tracking-wide">ハンター</p>

              <div className="space-y-8 text-gray-500 leading-loose mb-16 font-light">
                <p className="font-bold text-[#1A1A1A]">
                  「肉食革命」を引き起こし、人類を進化させる。
                </p>
                <p>
                  Hunterは、現代社会で凝り固まった常識や「他人の正解」に疑問を投げかけ、
                  自らの人生を自ら狩り獲るためのエネルギーを提供します。
                </p>
                <p>
                  消化を促進し、身体のコンディションを整えることで生まれた「余白」を、
                  新たな挑戦や創造的な活動へ。
                  脂の多い肉料理や、お酒を伴う食事シーンに最適な設計で、
                  あなたのパフォーマンスを最大限に引き出します。
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm pt-4">
                  <li>肉料理と向き合うためのコンディションサポート</li>
                  <li>食事の時間をより豊かにするフレーバー</li>
                  <li>翌日のパフォーマンスを考えた成分設計</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://line.me/R/ti/p/@278bzuez" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#06C755] hover:bg-[#05b34c] text-white px-10 py-7 rounded-sm transition-all duration-300 shadow-none group w-full sm:w-auto">
                    公式LINEで詳細を見る
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Link href="/purchase">
                  <Button className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-10 py-7 rounded-sm transition-all duration-300 shadow-none group w-full sm:w-auto">
                    購入方法を見る
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
