import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-[#1A1A1A]">CONTACT</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">お問い合わせ</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-10 md:p-16 rounded-sm border border-gray-100 shadow-xl">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="w-8 h-8 text-[#0066FF]" />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">お問い合わせフォーム</h2>
              <p className="text-gray-500 leading-loose">
                事業内容や商品に関するご質問、お仕事のご依頼など、<br />
                下記フォームよりお気軽にお問い合わせください。
              </p>
            </div>

            {/* Google Form Placeholder */}
            <div className="bg-gray-50 rounded-sm p-12 text-center border border-dashed border-gray-200">
              <p className="text-gray-500 mb-6 font-bold">Googleフォーム埋め込みエリア</p>
              <p className="text-sm text-gray-400 mb-10 leading-relaxed">
                ※実際の運用時はここにGoogleフォームのiframeタグを埋め込みます。<br />
                送信先: pivotholdings29@gmail.com
              </p>
              
              {/* Simulation of form fields */}
              <div className="max-w-md mx-auto space-y-6 text-left opacity-40 pointer-events-none select-none grayscale">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Name</label>
                  <div className="h-12 bg-white border border-gray-200 rounded-sm w-full"></div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                  <div className="h-12 bg-white border border-gray-200 rounded-sm w-full"></div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                  <div className="h-40 bg-white border border-gray-200 rounded-sm w-full"></div>
                </div>
                <div className="h-12 bg-[#0066FF] rounded-sm w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
