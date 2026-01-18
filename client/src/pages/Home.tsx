import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight text-[#1A1A1A]">
              食と体験を起点に、<br />
              <span className="relative inline-block">
                ブランドと場をつくる。
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl leading-relaxed font-light">
              pivotHoldingsは、自社ブランドを中心に、<br className="hidden md:block" />
              飲料・食品と体験を設計する会社です。
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link href="/business">
                <Button className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-10 py-7 text-lg rounded-sm shadow-none transition-all duration-300 group">
                  事業内容を見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border border-[#1A1A1A] text-[#1A1A1A] hover:bg-gray-50 px-10 py-7 text-lg rounded-sm shadow-none transition-all duration-300">
                  商品紹介を見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10"></div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Card */}
            <Link href="/business">
              <a className="group block bg-gray-50 p-10 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 h-full">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-[#1A1A1A]">
                  事業内容
                  <ArrowRight className="text-gray-300 group-hover:text-[#0066FF] transition-colors transform group-hover:translate-x-1 duration-300" />
                </h3>
                <p className="text-gray-500 text-sm leading-loose">
                  自社ブランドを起点とした商品開発と、食や体験を通じた場づくりについて。
                </p>
              </a>
            </Link>

            {/* Products Card */}
            <Link href="/products">
              <a className="group block bg-gray-50 p-10 rounded-sm hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 h-full">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-[#1A1A1A]">
                  商品紹介
                  <ArrowRight className="text-gray-300 group-hover:text-[#0066FF] transition-colors transform group-hover:translate-x-1 duration-300" />
                </h3>
                <p className="text-gray-500 text-sm leading-loose">
                  食事や体験の時間を前提に設計された、自社ブランド「Hunter」のご紹介。
                </p>
              </a>
            </Link>

            {/* Purchase Card (Highlighted) */}
            <Link href="/purchase">
              <a className="group block bg-[#1A1A1A] p-10 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 h-full text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-between text-white">
                  購入ページ
                  <ArrowRight className="text-[#0066FF] group-hover:translate-x-1 transition-transform duration-300" />
                </h3>
                <p className="text-gray-400 text-sm leading-loose relative z-10">
                  自社ECサイト、イベント販売、パートナー経由での購入方法はこちら。
                </p>
              </a>
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
            <Link href="/news">
              <a className="block group">
                <div className="flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-gray-100 group-hover:bg-gray-50 transition-colors px-6 -mx-6">
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <span className="text-sm text-gray-400 font-mono">2025.12.23</span>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold text-[#0066FF] border border-[#0066FF] rounded-sm tracking-wider">INFO</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#1A1A1A] group-hover:text-[#0066FF] transition-colors">
                    pivotHoldingsを設立し、飲料・食品領域での事業を開始しました。
                  </h3>
                </div>
              </a>
            </Link>
            <Link href="/news">
              <a className="block group">
                <div className="flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-gray-100 group-hover:bg-gray-50 transition-colors px-6 -mx-6">
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <span className="text-sm text-gray-400 font-mono">2025.12.23</span>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold text-[#0066FF] border border-[#0066FF] rounded-sm tracking-wider">INFO</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#1A1A1A] group-hover:text-[#0066FF] transition-colors">
                    自社ブランド商品の企画・開発を進行中です。
                  </h3>
                </div>
              </a>
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
            <p className="text-sm text-gray-400 mb-6 tracking-wide">FOLLOW US ON INSTAGRAM</p>
            <a 
              href="https://www.instagram.com/p/DTk72DXETGZ/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#1A1A1A] font-bold hover:text-[#0066FF] transition-colors text-lg"
            >
              <InstagramIcon />
              @pivotholdings_official
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}
