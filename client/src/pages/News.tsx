import Layout from "@/components/Layout";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/PageHeader";

// Mock Data
const newsItems = [
  {
    id: 1,
    date: "2025.12.23",
    category: "INFO",
    title: "pHを設立し、飲料・食品領域での事業を開始しました。",
    content: "2025年12月23日、pH株式会社を設立いたしました。私たちは「食と体験を起点に、ブランドと場をつくる」をミッションに掲げ、飲料・食品領域での事業を展開してまいります。今後の活動にご期待ください。"
  },
  {
    id: 2,
    date: "2025.12.23",
    category: "PRODUCT",
    title: "自社ブランド商品の企画・開発を進行中です。",
    content: "現在、第一弾となる自社ブランド商品の企画・開発を鋭意進行中です。詳細が決まり次第、本サイトおよび公式SNSにて発表させていただきます。"
  }
];

// Event items
const eventItems = [
  {
    id: 101,
    date: "2026.02.10",
    category: "EVENT",
    title: "ジビエBBQ経営者交流会",
    content: "経営者様向けのジビエBBQ交流会を開催いたします。美味しいジビエ料理を囲みながら、ビジネスやビジョンについて語り合いましょう。",
    location: "都内某所（参加者のみにお知らせします）",
    time: "18:00〜21:00"
  },
  {
    id: 102,
    date: "2026.02.19",
    category: "EVENT",
    title: "ジビエBBQ戦略共有",
    content: "今後のジビエBBQの展開や戦略について共有する会を開催します。興味のある方はぜひご参加ください。",
    location: "都内某所（参加者のみにお知らせします）",
    time: "20:00開場"
  },
  {
    id: 103,
    date: "2026.02.27",
    category: "EVENT",
    title: "通常BBQ",
    content: "定期開催のジビエBBQです。初めての方も大歓迎です。ジビエの美味しさと楽しさを体験してください。",
    location: "都内某所（参加者のみにお知らせします）",
    time: "20:00開場"
  }
];

export default function News() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  return (
    <Layout>
      <PageHeader 
        title="NEWS & EVENTS" 
        subtitle="ニュース・イベント情報" 
        imageSrc="/images/news-events.jpg"
      />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                <TabsTrigger 
                  value="all" 
                  className="rounded-full px-8 py-3 text-sm font-bold data-[state=active]:bg-[#0066FF] data-[state=active]:text-white transition-all"
                >
                  ALL
                </TabsTrigger>
                <TabsTrigger 
                  value="news" 
                  className="rounded-full px-8 py-3 text-sm font-bold data-[state=active]:bg-[#0066FF] data-[state=active]:text-white transition-all"
                >
                  NEWS
                </TabsTrigger>
                <TabsTrigger 
                  value="event" 
                  className="rounded-full px-8 py-3 text-sm font-bold data-[state=active]:bg-[#0066FF] data-[state=active]:text-white transition-all"
                >
                  EVENT
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <NewsList items={[...newsItems, ...eventItems].sort((a, b) => b.date.localeCompare(a.date))} onSelect={setSelectedItem} />
            </TabsContent>
            <TabsContent value="news" className="mt-0">
              <NewsList items={newsItems} onSelect={setSelectedItem} />
            </TabsContent>
            <TabsContent value="event" className="mt-0">
              <NewsList items={eventItems} onSelect={setSelectedItem} emptyMessage="現在予定されているイベントはありません。" />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-lg bg-white border-gray-100 p-8 rounded-sm shadow-2xl">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-gray-400 font-mono">{selectedItem?.date}</span>
              <span className={`inline-block px-2 py-0.5 text-[10px] font-bold border rounded-sm tracking-wider ${
                selectedItem?.category === 'INFO' ? 'text-[#0066FF] border-[#0066FF]' :
                selectedItem?.category === 'EVENT' ? 'text-[#FF6B00] border-[#FF6B00]' :
                'text-[#1A1A1A] border-[#1A1A1A]'
              }`}>
                {selectedItem?.category}
              </span>
            </div>
            <DialogTitle className="text-xl font-bold leading-relaxed pb-6 border-b border-gray-100 text-[#1A1A1A]">
              {selectedItem?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="text-gray-500 leading-loose pt-6 text-base font-light space-y-4">
            <p>{selectedItem?.content}</p>
            {selectedItem?.category === 'EVENT' && (
              <div className="bg-gray-50 p-6 rounded-sm mt-6 text-sm">
                <div className="grid grid-cols-[80px_1fr] gap-4 mb-2">
                  <span className="font-bold text-[#1A1A1A]">開催場所</span>
                  <span>{selectedItem.location}</span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-4">
                  <span className="font-bold text-[#1A1A1A]">開催時間</span>
                  <span>{selectedItem.time}</span>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

function NewsList({ items, onSelect, emptyMessage }: { items: any[], onSelect: (item: any) => void, emptyMessage?: string }) {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center text-gray-400 border-t border-gray-100">
        <p>{emptyMessage || "お知らせはありません。"}</p>
      </div>
    );
  }

  return (
    <div className="space-y-0 border-t border-gray-100">
      {items.map((item) => (
        <div 
          key={item.id}
          className="group cursor-pointer bg-white py-10 border-b border-gray-100 hover:bg-gray-50 transition-all px-6 -mx-6 rounded-sm"
          onClick={() => onSelect(item)}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-2">
            <div className="flex items-center gap-4 min-w-[200px]">
              <span className="text-gray-400 font-mono">{item.date}</span>
              <span className={`inline-block px-2 py-0.5 text-[10px] font-bold border rounded-sm tracking-wider ${
                item.category === 'INFO' ? 'text-[#0066FF] border-[#0066FF]' :
                item.category === 'EVENT' ? 'text-[#FF6B00] border-[#FF6B00]' :
                'text-[#1A1A1A] border-[#1A1A1A]'
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
  );
}
