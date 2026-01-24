import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white">CONTACT</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">お問い合わせ</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-4 md:p-8 rounded-sm border border-gray-100 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-[#0066FF]" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1A1A]">お問い合わせフォーム</h2>
              <p className="text-gray-500 leading-loose text-sm">
                事業内容や商品に関するご質問、お仕事のご依頼など、<br />
                下記フォームよりお気軽にお問い合わせください。
              </p>
            </div>

            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScF40i3yQ3HR9U-cYLYBiPo7YyXwL1-GKVcox1IdaRLY7xUYQ/viewform?embedded=true" 
              width="100%" 
              height="1200" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="お問い合わせフォーム"
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
