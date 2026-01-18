import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-english tracking-wide">CONTACT</h1>
          <p className="text-gray-500 font-bold">お問い合わせ</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-lg">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-[#0066FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-[#0066FF]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">お問い合わせフォーム</h2>
              <p className="text-gray-600">
                事業内容や商品に関するご質問、お仕事のご依頼など、<br />
                下記フォームよりお気軽にお問い合わせください。
              </p>
            </div>

            {/* Google Form Placeholder */}
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-dashed border-gray-300">
              <p className="text-gray-500 mb-4">Googleフォーム埋め込みエリア</p>
              <p className="text-sm text-gray-400 mb-6">
                ※実際の運用時はここにGoogleフォームのiframeタグを埋め込みます。<br />
                送信先: pivotholdings29@gmail.com
              </p>
              
              {/* Simulation of form fields */}
              <div className="max-w-md mx-auto space-y-4 text-left opacity-50 pointer-events-none select-none">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">氏名</label>
                  <div className="h-10 bg-white border border-gray-300 rounded-md w-full"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                  <div className="h-10 bg-white border border-gray-300 rounded-md w-full"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容</label>
                  <div className="h-32 bg-white border border-gray-300 rounded-md w-full"></div>
                </div>
                <div className="h-10 bg-[#0066FF] rounded-md w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
