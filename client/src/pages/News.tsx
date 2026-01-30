import Layout from "@/components/Layout";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { newsItems, eventItems, allItems } from "@/data/newsData";

export default function News() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white">NEWS & EVENTS</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">ニュース・イベント情報</p>
        </div>
      </div>

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
              <NewsList items={allItems} onSelect={setSelectedItem} />
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
                selectedItem?.category === 'PRESS' ? 'text-[#0066FF] border-[#0066FF]' :
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
      {items.map((item) => {
        const Wrapper = item.link ? 'a' : 'div';
        const props = item.link 
          ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } 
          : { onClick: () => onSelect(item) };

        return (
          <Wrapper 
            key={item.id}
            className="block group cursor-pointer bg-white py-10 border-b border-gray-100 hover:bg-gray-50 transition-all px-6 -mx-6 rounded-sm"
            {...props}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-2">
              <div className="flex items-center gap-4 min-w-[200px]">
                <span className="text-gray-400 font-mono">{item.date}</span>
                <span className={`inline-block px-2 py-0.5 text-[10px] font-bold border rounded-sm tracking-wider ${
                  item.category === 'INFO' ? 'text-[#0066FF] border-[#0066FF]' :
                  item.category === 'EVENT' ? 'text-[#FF6B00] border-[#FF6B00]' :
                  item.category === 'PRESS' ? 'text-[#0066FF] border-[#0066FF]' :
                  'text-[#1A1A1A] border-[#1A1A1A]'
                }`}>
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#0066FF] transition-colors">
                {item.title}
              </h3>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
