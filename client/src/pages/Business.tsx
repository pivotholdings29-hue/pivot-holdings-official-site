import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Business() {
  return (
    <Layout>
      <div className="relative bg-[#1A1A1A] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/business-dining.jpg" 
            alt="Business Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white"
          >
            BUSINESS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-bold tracking-widest text-sm uppercase"
          >
            事業内容
          </motion.p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold mb-12 leading-relaxed text-[#1A1A1A] text-left md:text-center"
            >
              pivotHoldingsは、「整える」という視点から、<br className="hidden md:block" />
              飲料・食品を中心とした商品と体験の企画・開発を行っています。
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-500 mb-20 leading-loose max-w-3xl mx-auto text-left md:text-center font-light"
            >
              極端に振れるのではなく、状況や場に応じて最適なバランスを設計すること。<br className="hidden md:block" />
              私たちはその考え方を、プロダクト、イベント、情報発信に落とし込み、<br className="hidden md:block" />
              日常や体験の質を高める取り組みを行っています。
            </motion.p>

            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 md:p-12 rounded-sm border border-gray-100 hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1A1A1A] group-hover:bg-[#0066FF] transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-[#1A1A1A]">
                  <span className="text-gray-200 font-english text-4xl font-bold group-hover:text-[#0066FF]/20 transition-colors">01</span>
                  商品企画・開発・販売
                </h3>
                <p className="text-gray-500 leading-loose pl-14 font-light">
                  飲料および食品関連商品の企画・開発・販売を主軸とし、ECサイトやイベントを通じて展開しています。
                  単なるモノの提供ではなく、その先にある「時間」や「体験」を豊かにする商品を開発しています。
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 md:p-12 rounded-sm border border-gray-100 hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1A1A1A] group-hover:bg-[#0066FF] transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-[#1A1A1A]">
                  <span className="text-gray-200 font-english text-4xl font-bold group-hover:text-[#0066FF]/20 transition-colors">02</span>
                  場づくり・体験設計
                </h3>
                <p className="text-gray-500 leading-loose pl-14 font-light">
                  商品単体の提供にとどまらず、イベントの企画・運営や情報発信を通じて、食や体験を軸とした場づくりにも取り組んでいます。
                  人と人がつながる瞬間や、新しい発見が生まれる空間をプロデュースします。
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-24 text-center"
            >
              <Link href="/products">
                <Button className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-12 py-8 rounded-sm shadow-none transition-all duration-300 group text-lg">
                  取り扱い商品を見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
