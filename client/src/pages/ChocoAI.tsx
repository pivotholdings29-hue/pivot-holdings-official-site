import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Video, FileText, Lock } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function ChocoAI() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#F0F8FF] overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 bg-[#0066FF] text-white text-sm font-bold rounded-full mb-4">
                  中小企業向けAI実装支援サービス
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6">
                  <span className="text-[#0066FF]">ちょこAI。</span>
                </h1>
                <p className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">
                  AIを諦めたくない経営者のための<br />「最後の砦」
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  「AIなんて自分には無理だ」と諦める前に、最後にここだけ試してください。<br />
                  人を増やさず、労働力を2倍にする「思考の右腕」を手に入れませんか？
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link href="/contact">
                  <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    まずは相談してみる
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/choco-ai.png" 
                alt="ちょこAI。キャラクター" 
                className="w-full max-w-md drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-0"></div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
              2026年、AI格差は「生存の差」になる
            </h2>
            <p className="text-gray-600 text-lg leading-loose">
              大企業と中小企業の生産性格差は、AI導入の有無によって5倍以上に広がろうとしています。<br />
              AIを使える企業とそうでない企業の差は、単なる「利益の差」ではなく、<br />
              市場からの退場を意味する「生存の差」になります。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                こんなお悩みありませんか？
              </h3>
              <ul className="space-y-4">
                {[
                  "AIツールを使ってみたが、結局使いこなせなかった",
                  "ITに苦手意識があり、何から始めればいいかわからない",
                  "人手不足だが、採用コストや教育コストはかけられない",
                  "事務作業や検討業務に時間を取られ、経営に集中できない"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0066FF] mb-4">
                「ちょこAI。」が解決します
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                本サービスは、高度なITスキルや専門知識を教えるスクールではありません。<br />
                過去にAIツールで挫折した方や、ITに苦手意識を持つ経営者が、<br />
                <strong className="text-[#1A1A1A] bg-yellow-100 px-1">「明日から実務で使える」</strong>ようになるための、<br />
                ハードルの低いAI導入・定着支援プログラムです。
              </p>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-[#0066FF] text-white p-3 rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A]">採用・教育コスト0円</p>
                  <p className="text-sm text-gray-600">IQ140超の「専属秘書」が24時間365日働きます</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-bold tracking-wider uppercase text-sm">Service</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">3つの「挫折させない」仕組み</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#0066FF] transition-colors duration-300">
              <div className="w-14 h-14 bg-[#0066FF]/20 text-[#0066FF] rounded-lg flex items-center justify-center mb-6">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">① 「習う」より「慣れる」<br />実務直結型・動画ライブラリ</h3>
              <p className="text-gray-400 leading-relaxed">
                難しい理論やプログラミングは一切教えません。「クレーム対応メールの作成」「議事録の要約」「求人票の作成」など、中小企業の現場で「今すぐ使える」具体的な手順だけを、短い動画で提供します。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#0066FF] transition-colors duration-300">
              <div className="w-14 h-14 bg-[#0066FF]/20 text-[#0066FF] rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">② コピペで終わる<br />「時短テンプレート」</h3>
              <p className="text-gray-400 leading-relaxed">
                AIへの指示出し（プロンプト）に悩む時間は無駄です。穴埋めするだけで高精度な回答が得られる「テンプレート」や、業務の棚卸しに特化した「専用AIツール」なども提供し、AI導入へのハードルを下げます。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-[#0066FF] transition-colors duration-300">
              <div className="w-14 h-14 bg-[#0066FF]/20 text-[#0066FF] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">③ 孤独にさせない<br />「伴走型グループコンサル」</h3>
              <p className="text-gray-400 leading-relaxed">
                週に1回、オンラインでの相談会を開催。「こんな初歩的なこと聞いていいの？」という疑問から、自社業務への具体的な応用まで、講師が画面共有しながらその場で解決します。一人で悩んで挫折する時間をゼロにします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="bg-blue-50 p-8 rounded-2xl relative overflow-hidden">
                <ShieldCheck className="w-32 h-32 text-[#0066FF]/10 absolute -bottom-4 -right-4" />
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-[#0066FF]" />
                  安心のセキュリティ対策
                </h3>
                <p className="text-gray-700 font-bold mb-4">
                  AIを安全に使う「守りの鉄則」
                </p>
                <p className="text-gray-600 leading-relaxed">
                  「AIは嘘をつく」「情報は漏れる」を前提とした運用ルールを徹底指導します。
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                会社を守るためのリスク管理も万全
              </h3>
              <p className="text-gray-600 leading-loose mb-6">
                中小企業が最も懸念する「情報漏洩」や「著作権侵害」のリスクに対し、私たちはツールを使うだけでなく「守るための鉄則」もセットで提供します。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                  機密情報を入力しないためのマスキング技術
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                  AIの嘘（ハルシネーション）を見抜くチェック体制
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                  安全な運用ルールの策定支援
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F0F8FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1A1A]">
            まずは無料相談から
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-loose">
            「自社でどう活用できるかわからない」「本当に効果があるのか不安」<br />
            そんな方は、まずはお気軽にご相談ください。<br />
            あなたの会社の課題に合わせたAI活用法をご提案します。
          </p>
          <Link href="/contact">
            <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-12 py-8 text-lg rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
              お問い合わせフォームへ
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
