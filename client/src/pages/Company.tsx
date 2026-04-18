import Layout from "@/components/Layout";
import { useState } from "react";

export default function Company() {
  return (
    <Layout>
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-[#1A1A1A] notranslate" translate="no">COMPANY</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">企業情報</p>
        </div>
      </div>

      {/* TEAM Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 font-english tracking-wide text-[#1A1A1A] notranslate" translate="no">TEAM</h2>
            <p className="text-gray-400 font-bold tracking-widest text-xs uppercase">チーム紹介</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
            {/* 1. Representative Card - Kabashima */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-[3/4]">
                {/* Hover Image (Background) - The one to show on hover */}
                <img 
                  src="/images/representative-nature.jpg" 
                  alt="代表取締役 椛島 将太 (Hover)" 
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                {/* Default Image (Foreground) - Fades out on hover */}
                <img 
                  src="/images/representative-business.jpg" 
                  alt="代表取締役 椛島 将太" 
                  className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">椛島 将太</h3>
                <p className="text-sm text-gray-400 font-english mb-3 notranslate" translate="no">Shota Kabashima</p>
                <p className="text-sm font-bold text-gray-600">代表取締役</p>
              </div>
            </div>

            {/* 2. Team Member Card - Honda */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-[3/4]">
                {/* Hover Image (Background) - The one to show on hover */}
                <img 
                  src="/images/honda_nature.webp" 
                  alt="営業 本田 いちご (Hover)" 
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                {/* Default Image (Foreground) - Fades out on hover */}
                <img 
                  src="/images/honda_business.webp" 
                  alt="営業 本田 いちご" 
                  className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">本田 いちご</h3>
                <p className="text-sm text-gray-400 font-english mb-3 notranslate" translate="no">Ichigo Honda</p>
                <p className="text-sm font-bold text-gray-600">営業</p>
              </div>
            </div>

            {/* 3. Team Member Card - Yano */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-sm mb-6 flex items-center justify-center bg-gray-50 aspect-[3/4]">
                {/* Hover Image (Background) - The one to show on hover */}
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/矢野_nature_ec64deea.jpg" 
                  alt="営業 矢野 智与 (Hover)" 
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                {/* Default Image (Foreground) - Fades out on hover. Using object-contain to keep original aspect ratio */}
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/矢野_ビジネス_67e0cd53.jpg" 
                  alt="営業 矢野 智与" 
                  className="w-full h-full object-contain transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0 bg-white"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">矢野 智与</h3>
                <p className="text-sm text-gray-400 font-english mb-3 notranslate" translate="no">Toshinobu Yano</p>
                <p className="text-sm font-bold text-gray-600">営業</p>
              </div>
            </div>

            {/* 4. Team Member Card - Yamagata */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-[3/4]">
                {/* Hover Image (Background) - The one to show on hover */}
                <img 
                  src="/images/yamagata_nature.webp" 
                  alt="プロジェクトマネージャー 山片 裕介 (Hover)" 
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                {/* Default Image (Foreground) - Fades out on hover */}
                <img 
                  src="/images/yamagata_business.png" 
                  alt="プロジェクトマネージャー 山片 裕介" 
                  className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">山片 裕介</h3>
                <p className="text-sm text-gray-400 font-english mb-3 notranslate" translate="no">Yusuke Yamagata</p>
                <p className="text-sm font-bold text-gray-600">プロジェクトマネージャー</p>
              </div>
            </div>

            {/* 5. Business Partner Card - Maeda */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-sm mb-6 aspect-[3/4]">
                {/* Hover Image (Background) - The one to show on hover */}
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/なる_nature_d9b00717.jpg" 
                  alt="マーケティング 前田 成穂 (Hover)" 
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                {/* Default Image (Foreground) - Fades out on hover */}
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/前田成穂_HP写真_5a8f80cb.JPG" 
                  alt="マーケティング 前田 成穂" 
                  className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">前田 成穂</h3>
                <p className="text-sm text-gray-400 font-english mb-3 notranslate" translate="no">Naruho Maeda</p>
                <p className="text-sm font-bold text-gray-600">マーケティング</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 font-english tracking-wide text-[#1A1A1A] notranslate" translate="no">OVERVIEW</h2>
            <p className="text-gray-400 font-bold tracking-widest text-xs uppercase">会社概要</p>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-sm border border-gray-100 shadow-sm">
            <dl className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1 notranslate" translate="no">Company Name</dt>
                <dd className="md:col-span-2 font-bold text-xl text-[#1A1A1A]">pH株式会社</dd>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1 notranslate" translate="no">Reading</dt>
                <dd className="md:col-span-2 text-gray-600">
                  ピーエイチカブシキガイシャ
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1 notranslate" translate="no">Representative</dt>
                <dd className="md:col-span-2 text-gray-600">代表取締役　椛島 将太</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1 notranslate" translate="no">Phone</dt>
                <dd className="md:col-span-2 text-gray-600">080-5426-6537</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1 notranslate" translate="no">Established</dt>
                <dd className="md:col-span-2 text-gray-600">2025年12月23日</dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1 notranslate" translate="no">Location</dt>
                <dd className="md:col-span-2 text-gray-600 leading-relaxed">
                  〒153-0061<br />
                  東京都目黒区中目黒1丁目1-72-504
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-100 pb-10">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1 notranslate" translate="no">Business</dt>
                <dd className="md:col-span-2 space-y-3 text-gray-600">
                  <p>・飲料および食品関連商品の企画・開発・販売</p>
                  <p>・自社ブランド商品のプロデュース</p>
                  <p>・ECサイト、イベント等を通じた販売</p>
                  <p>・関連イベントの企画・運営、情報発信</p>
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <dt className="font-bold text-gray-400 text-xs tracking-widest uppercase pt-1 notranslate" translate="no">Partners</dt>
                <dd className="md:col-span-2 space-y-3 text-gray-600">
                  <p>・食品製造関連事業者</p>
                  <p>・イベント運営会社</p>
                  <p>・販売パートナー</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}
