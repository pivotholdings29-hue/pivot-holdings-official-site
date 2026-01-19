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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                <p>
                  「肉を否定せず、肉と共に整える」をコンセプトにした、プレミアムクラフトシロップ。
                </p>
                <p>
                  厳選されたスパイスとフルーツの調和が、食事の時間をより豊かに演出します。
                  ソーダ割りやお湯割りなど、気分やシーンに合わせて自由にお楽しみいただけます。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-gray-100 text-gray-400 px-10 py-7 rounded-sm cursor-not-allowed shadow-none border border-gray-200" disabled>
                  Hunter公式サイトへ
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Link href="/purchase">
                  <Button className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-10 py-7 rounded-sm transition-all duration-300 shadow-none group">
                    購入方法を見る
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray-400 tracking-wide">※公式サイトは現在準備中です</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
