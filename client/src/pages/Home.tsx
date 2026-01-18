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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              食と体験を起点に、<br />
              <span className="relative inline-block">
                ブランドと場をつくる。
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#00FF00]/30 -z-10 transform -rotate-1"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              pivotHoldingsは、自社ブランドを中心に、<br className="hidden md:block" />
              飲料・食品と体験を設計する会社です。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/business">
                <Button className="bg-[#221F1F] hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full group">
                  事業内容を見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-2 border-[#221F1F] text-[#221F1F] hover:bg-gray-50 px-8 py-6 text-lg rounded-full">
                  商品紹介を見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-gray-50 to-white -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00FF00]/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Business Card */}
            <Link href="/business">
              <a className="group block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#00FF00] relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#00FF00] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                  事業内容
                  <ChevronRight className="text-gray-300 group-hover:text-[#00FF00] transition-colors" />
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  自社ブランドを起点とした商品開発と、食や体験を通じた場づくりについて。
                </p>
              </a>
            </Link>

            {/* Products Card */}
            <Link href="/products">
              <a className="group block bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#00FF00] relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#00FF00] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                  商品紹介
                  <ChevronRight className="text-gray-300 group-hover:text-[#00FF00] transition-colors" />
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  食事や体験の時間を前提に設計された、自社ブランド「Hunter」のご紹介。
                </p>
              </a>
            </Link>

            {/* Purchase Card (Highlighted) */}
            <Link href="/purchase">
              <a className="group block bg-[#221F1F] p-8 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden h-full text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF00]/20 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
                <h3 className="text-xl font-bold mb-3 flex items-center justify-between text-[#00FF00]">
                  購入ページ
                  <ArrowRight className="text-[#00FF00] group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  自社ECサイト、イベント販売、パートナー経由での購入方法はこちら。
                </p>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section (Simplified) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-english tracking-wide">NEWS</h2>
              <p className="text-gray-500 text-sm">最新情報</p>
            </div>
            <Link href="/news">
              <Button variant="ghost" className="text-gray-600 hover:text-[#0066FF] hover:bg-transparent p-0">
                一覧を見る <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            <Link href="/news">
              <a className="block group">
                <div className="flex flex-col md:flex-row md:items-center gap-4 py-6 border-b border-gray-100 group-hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg">
                  <span className="text-sm text-gray-500 font-mono">2025.12.23</span>
                  <span className="inline-block px-2 py-1 text-xs font-bold text-[#0066FF] bg-[#0066FF]/10 rounded">INFO</span>
                  <h3 className="text-lg font-medium group-hover:text-[#0066FF] transition-colors">
                    pivotHoldingsを設立し、飲料・食品領域での事業を開始しました。
                  </h3>
                </div>
              </a>
            </Link>
            <Link href="/news">
              <a className="block group">
                <div className="flex flex-col md:flex-row md:items-center gap-4 py-6 border-b border-gray-100 group-hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg">
                  <span className="text-sm text-gray-500 font-mono">2025.12.23</span>
                  <span className="inline-block px-2 py-1 text-xs font-bold text-[#0066FF] bg-[#0066FF]/10 rounded">INFO</span>
                  <h3 className="text-lg font-medium group-hover:text-[#0066FF] transition-colors">
                    自社ブランド商品の企画・開発を進行中です。
                  </h3>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            事業内容や商品に関するご質問、お仕事のご依頼など、<br />
            お気軽にお問い合わせください。
          </p>
          <Link href="/contact">
            <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              お問い合わせフォームへ
            </Button>
          </Link>
          
          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">活動の様子はInstagramでも発信しています</p>
            <a 
              href="https://www.instagram.com/p/DTk72DXETGZ/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E1306C] font-bold hover:underline"
            >
              <InstagramIcon />
              Official Instagram
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
