import Layout from "@/components/Layout";
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
  return (
    <Layout>
      <PageHeader 
        title="CONTACT" 
        subtitle="お問い合わせ" 
        imageSrc="/images/contact-bg.jpg"
      />

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

            <div className="text-center">
              <a 
                href="https://docs.google.com/forms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-12 py-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 group text-lg font-bold">
                  お問い合わせフォームを開く
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <p className="text-xs text-gray-400 mt-8">
                ※Googleフォームへ移動します
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
