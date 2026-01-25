import Layout from "@/components/Layout";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Thanks() {
  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white">THANK YOU</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">送信完了</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-8">
              <CheckCircle className="w-24 h-24 text-[#0066FF]" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#1A1A1A]">
              お問い合わせ・ご注文ありがとうございます
            </h2>
            <p className="text-gray-500 mb-12 leading-loose text-lg">
              フォームへの送信が完了いたしました。<br />
              内容を確認の上、担当者よりご連絡させていただきます。<br />
              今しばらくお待ちくださいませ。
            </p>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                ※自動返信メールが届かない場合は、迷惑メールフォルダをご確認いただくか、<br />
                お手数ですが再度お問い合わせください。
              </p>
              
              <div className="mt-12">
                <Link href="/">
                  <a className="inline-block bg-[#1A1A1A] text-white px-12 py-4 rounded-full font-bold hover:bg-[#0066FF] transition-colors duration-300">
                    トップページへ戻る
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
