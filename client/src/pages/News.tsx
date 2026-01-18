import Layout from "@/components/Layout";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Mock Data
const newsItems = [
  {
    id: 1,
    date: "2025.12.23",
    category: "INFO",
    title: "pivotHoldingsを設立し、飲料・食品領域での事業を開始しました。",
    content: "2025年12月23日、pivotHoldings株式会社を設立いたしました。私たちは「食と体験を起点に、ブランドと場をつくる」をミッションに掲げ、飲料・食品領域での事業を展開してまいります。今後の活動にご期待ください。"
  },
  {
    id: 2,
    date: "2025.12.23",
    category: "PRODUCT",
    title: "自社ブランド商品の企画・開発を進行中です。",
    content: "現在、第一弾となる自社ブランド商品の企画・開発を鋭意進行中です。詳細が決まり次第、本サイトおよび公式SNSにて発表させていただきます。"
  }
];

export default function News() {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  return (
    <Layout>
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-[#1A1A1A]">NEWS</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">ニュース</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-0 border-t border-gray-100">
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer bg-white py-10 border-b border-gray-100 hover:bg-gray-50 transition-all px-6 -mx-6 rounded-sm"
                onClick={() => setSelectedNews(item)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-2">
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <span className="text-gray-400 font-mono">{item.date}</span>
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold border rounded-sm tracking-wider ${
                      item.category === 'INFO' 
                        ? 'text-[#0066FF] border-[#0066FF]' 
                        : 'text-[#1A1A1A] border-[#1A1A1A]'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#0066FF] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedNews} onOpenChange={(open) => !open && setSelectedNews(null)}>
        <DialogContent className="sm:max-w-lg bg-white border-gray-100 p-8 rounded-sm shadow-2xl">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-400 font-mono">{selectedNews?.date}</span>
              <span className={`inline-block px-2 py-0.5 text-[10px] font-bold border rounded-sm tracking-wider ${
                selectedNews?.category === 'INFO' 
                  ? 'text-[#0066FF] border-[#0066FF]' 
                  : 'text-[#1A1A1A] border-[#1A1A1A]'
              }`}>
                {selectedNews?.category}
              </span>
            </div>
            <DialogTitle className="text-xl font-bold leading-relaxed pb-6 border-b border-gray-100 text-[#1A1A1A]">
              {selectedNews?.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-gray-500 leading-loose pt-6 text-base font-light">
            {selectedNews?.content}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
