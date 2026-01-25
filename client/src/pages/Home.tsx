import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Instagram } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-[#1A1A1A]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
          {/* pH Balance Line Decoration */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent transform -translate-y-1/2 z-0"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#0066FF]/30 to-transparent transform -translate-x-1/2 z-0"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-white relative z-10"
            >
              人生と体験を、<br />
              ちょうどいい<span className="text-[#0066FF]">pH</span>に。
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl font-light"
            >
              pH株式会社は、飲料・食品と体験を通じて、<br />
              “転換点をつくるホールディングカンパニー”です。
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link href="/business">
                <Button className="bg-white text-[#1A1A1A] hover:bg-[#0066FF] hover:text-white px-10 py-7 rounded-sm text-lg transition-all duration-300 shadow-lg hover:shadow-[#0066FF]/20 group border-0">
                  事業内容を見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border border-white/30 text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 hover:text-white px-10 py-7 rounded-sm text-lg transition-all duration-300 bg-transparent backdrop-blur-sm">
                  商品紹介を見る
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Navigation Cards Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business Card */}
            <Link href="/business" className="group block bg-gray-50 p-10 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 h-full cursor-pointer">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-[#1A1A1A]">
                  事業内容
                  <ArrowRight className="text-gray-300 group-hover:text-[#0066FF] transition-colors transform group-hover:translate-x-1 duration-300" />
                </h3>
                <p className="text-gray-500 text-sm leading-loose">
                  飲料・食品を中心とした商品と体験の企画・開発を行っています。
                </p>
            </Link>

            {/* Products Card */}
            <Link href="/products" className="group block bg-gray-50 p-10 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 h-full cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-[#1A1A1A]">
                商品紹介
                <ArrowRight className="text-gray-300 group-hover:text-[#0066FF] transition-colors transform group-hover:translate-x-1 duration-300" />
              </h3>
              <p className="text-gray-500 text-sm leading-loose">
                食事や体験の時間を前提に設計された、自社ブランド「Hunter」のご紹介。
              </p>
            </Link>

            {/* Choco AI Card */}
            <Link href="/choco-ai" className="group block bg-blue-50 p-10 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue-100 h-full cursor-pointer">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-[#0066FF]">
                ちょこAI。
                <ArrowRight className="text-blue-300 group-hover:text-[#0066FF] transition-colors transform group-hover:translate-x-1 duration-300" />
              </h3>
              <p className="text-gray-500 text-sm leading-loose">
                AIを諦めたくない経営者のための、中小企業向けAI実装支援サービス。
              </p>
            </Link>

            {/* Purchase Card (Highlighted) */}
            <Link href="/purchase" className="group block bg-[#1A1A1A] p-10 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 h-full text-white relative overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-white">
                購入ページ
                <ArrowRight className="text-[#0066FF] group-hover:translate-x-1 transition-transform duration-300" />
              </h3>
              <p className="text-gray-400 text-sm leading-loose relative z-10">
                LINE-EC、イベント販売、パートナー経由での購入方法はこちら。
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section (Simplified) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-english tracking-wide text-[#1A1A1A]">NEWS</h2>
              <p className="text-gray-400 text-xs tracking-widest uppercase">Latest Information</p>
            </div>
            <Link href="/news">
              <Button variant="ghost" className="text-gray-500 hover:text-[#0066FF] hover:bg-transparent p-0 font-medium">
                VIEW ALL <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="space-y-0">
            <Link href="/news" className="block group cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-gray-100 group-hover:bg-gray-50 transition-colors px-6 -mx-6">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <span className="text-sm text-gray-400 font-mono">2025.12.23</span>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold text-[#0066FF] border border-[#0066FF] rounded-sm tracking-wider">INFO</span>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] group-hover:text-[#0066FF] transition-colors">
                  pH株式会社を設立し、清涼飲料水領域での事業を開始しました。
                </h3>
              </div>
            </Link>
            <Link href="/news" className="block group cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-gray-100 group-hover:bg-gray-50 transition-colors px-6 -mx-6">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <span className="text-sm text-gray-400 font-mono">2025.12.23</span>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold text-[#0066FF] border border-[#0066FF] rounded-sm tracking-wider">INFO</span>
                </div>
                <h3 className="text-lg font-medium text-[#1A1A1A] group-hover:text-[#0066FF] transition-colors">
                  自社ブランド商品の企画・開発を進行中です。
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">お問い合わせ</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto leading-loose">
            事業内容や商品に関するご質問、お仕事のご依頼など、<br />
            お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-12 py-8 text-lg rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
              お問い合わせフォームへ
            </Button>
          </Link>
          
          <div className="mt-16 pt-16 border-t border-gray-200 max-w-2xl mx-auto">
            <p className="text-sm text-gray-400 mb-8 tracking-wide">FOLLOW US</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              {/* Instagram Link */}
              <div className="flex flex-col items-center">
                <a 
                  href="https://www.instagram.com/gibierland/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-[#1A1A1A] hover:text-[#0066FF] transition-colors border-b border-[#1A1A1A] hover:border-[#0066FF] pb-1"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagramを見る
                </a>
              </div>

              {/* LINE Link */}
              <div className="flex flex-col items-center">
                <a 
                  href="https://line.me/R/ti/p/@278bzuez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-[#1A1A1A] hover:text-[#06C755] transition-colors border-b border-[#1A1A1A] hover:border-[#06C755] pb-1"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  公式LINEを見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
