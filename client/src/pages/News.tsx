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
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-english tracking-wide">NEWS</h1>
          <p className="text-gray-500 font-bold">ニュース</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer bg-white p-6 rounded-xl border border-gray-100 hover:border-[#00FF00] shadow-sm hover:shadow-md transition-all"
                onClick={() => setSelectedNews(item)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                  <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                  <span className={`inline-block px-2 py-1 text-xs font-bold rounded ${
                    item.category === 'INFO' ? 'text-[#0066FF] bg-[#0066FF]/10' : 'text-[#008800] bg-[#00FF00]/10'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-[#0066FF] transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedNews} onOpenChange={(open) => !open && setSelectedNews(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-gray-500 font-mono">{selectedNews?.date}</span>
              <span className={`inline-block px-2 py-1 text-xs font-bold rounded ${
                selectedNews?.category === 'INFO' ? 'text-[#0066FF] bg-[#0066FF]/10' : 'text-[#008800] bg-[#00FF00]/10'
              }`}>
                {selectedNews?.category}
              </span>
            </div>
            <DialogTitle className="text-xl font-bold leading-relaxed pb-4 border-b border-gray-100">
              {selectedNews?.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-gray-600 leading-loose pt-4 text-base">
            {selectedNews?.content}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
