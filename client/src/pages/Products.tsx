import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, CheckCircle2, Video, FileText, Users, ShieldCheck, Lock } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Products() {
  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white"
          >
            PRODUCTS & SERVICE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-bold tracking-widest text-sm uppercase"
          >
            商品・サービス紹介
          </motion.p>
        </div>
      </div>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="hunter" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-auto p-1 bg-gray-100 rounded-full">
                <TabsTrigger 
                  value="hunter" 
                  className="py-3 md:py-4 text-sm md:text-lg font-bold rounded-full data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white transition-all"
                >
                  Hunter (ドリンク)
                </TabsTrigger>
                <TabsTrigger 
                  value="choco-ai" 
                  className="py-3 md:py-4 text-sm md:text-lg font-bold rounded-full data-[state=active]:bg-[#0066FF] data-[state=active]:text-white transition-all"
                >
                  ちょこAI。 (AI支援)
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Hunter Tab Content */}
            <TabsContent value="hunter" className="animate-in fade-in-50 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                {/* Product Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gray-100 rounded-sm aspect-square flex items-center justify-center relative overflow-hidden group border border-gray-200"
                >
                  <img 
                    src="/images/hunter-product.jpg" 
                    alt="Hunter Product" 
                    className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-full h-full border-[20px] border-white/10 pointer-events-none"></div>
                </motion.div>

                {/* Product Info */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="pl-0 lg:pl-10"
                >
                  <div className="inline-block px-3 py-1 border border-[#1A1A1A] text-[#1A1A1A] font-bold text-xs tracking-widest mb-8 uppercase">
                    Original Brand
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold mb-4 font-english text-[#1A1A1A]">Hunter</h2>
                  <p className="text-lg text-gray-400 mb-8 font-light tracking-wide">ハンター</p>

                  <div className="mb-12">
                    <p className="text-2xl font-bold text-[#1A1A1A]">
                      ¥1,667
                      <span className="text-sm font-normal text-gray-500 ml-1">（税抜）</span>
                    </p>
                    
                  </div>

                  <div className="space-y-8 text-gray-500 leading-loose mb-16 font-light">
                    <p className="font-bold text-[#1A1A1A]">
                      「肉食革命」を引き起こし、人類を進化させる。
                    </p>
                    <p>
                      Hunterは、消化を促進し、身体のコンディションを整えることで生まれた「余白」を、
                      新たな挑戦や創造的な活動へ。
                    </p>
                    <p>
                      脂の多い肉料理や、お酒を伴う食事シーンに最適な設計で、
                      あなたのパフォーマンスを最大限に引き出します。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm pt-4">
                      <li>肉料理と向き合うためのコンディションサポート</li>
                      <li>食事の時間をより豊かにするフレーバー</li>
                      <li>翌日のパフォーマンスを考えた成分設計</li>
                    </ul>
                  </div>

                  {/* Product Specs Table */}
                  <div className="mb-16 border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-6 font-english tracking-wide">SPECIFICATIONS</h3>
                    <div className="grid grid-cols-1 gap-y-4 text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-gray-100 pb-4">
                        <div className="font-bold text-gray-900">商品名</div>
                        <div className="sm:col-span-2 text-gray-600">Hunter ドリンク</div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-gray-100 pb-4">
                        <div className="font-bold text-gray-900">内容量</div>
                        <div className="sm:col-span-2 text-gray-600">
                          100ml（果汁6％）<br />
                          1箱14本入り
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-gray-100 pb-4">
                        <div className="font-bold text-gray-900">賞味期限</div>
                        <div className="sm:col-span-2 text-gray-600">製造後12か月</div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-gray-100 pb-4">
                        <div className="font-bold text-gray-900">保存方法</div>
                        <div className="sm:col-span-2 text-gray-600">
                          直射日光・高温多湿を避け、常温で保存してください。<br />
                          <span className="text-xs text-gray-400">※過熱や冷凍はしないでください。</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 border-b border-gray-100 pb-4">
                        <div className="font-bold text-gray-900">原材料名</div>
                        <div className="sm:col-span-2 text-gray-600 leading-relaxed">
                          レモン果汁（国産）、甜菜糖、水（甜菜糖由来の発酵原料を含む）、L-カルニチン、イヌリン、食物繊維、ビタミンプレミックス（ビタミンA（レチノール）、ビタミンB1、ビタミンB2、ナイアシン、ビタミンB6、葉酸、ビタミンB12、ビタミンC、ビタミンD、ビタミンE）、カフェイン、クエン酸（pH調整用）、米糠・大豆エキス培養酵素物加工食品
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 bg-gray-50 p-6 rounded-sm border border-gray-100">
                    <h4 className="font-bold text-[#1A1A1A] mb-4">ご購入について</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>1箱14本で準備していますが、1本単位から購入できます。</li>
                      <li>14本までは60サイズ、15本以上は80サイズでの発送となります。</li>
                      <li>決済方法はクレジットカード決済、銀行振込のいずれかです。</li>
                    </ul>
                    <div className="mt-4">
                      <Link href="/shipping">
                        <a className="text-sm text-[#0066FF] hover:underline flex items-center gap-1">
                          ※送料一覧はこちら <ArrowRight className="w-3 h-3" />
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <a href="https://line.me/R/ti/p/@278bzuez" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#06C755] hover:bg-[#05b34c] text-white px-10 py-7 rounded-sm transition-all duration-300 shadow-none group w-full sm:w-auto">
                        公式LINEで詳細を見る
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                    <Link href="/purchase">
                      <Button className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-10 py-7 rounded-sm transition-all duration-300 shadow-none group w-full sm:w-auto">
                        購入方法を見る
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Story Section */}
              <div className="max-w-4xl mx-auto border-t border-gray-100 pt-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1A1A1A] text-center font-english tracking-wide">STORY & VISION</h2>
                  
                  <div className="space-y-16 text-gray-600 leading-loose font-light">
                    {/* Part 1: Origin */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#0066FF]"></span>
                        活動の原点：ジビエBBQ
                      </h3>
                      <p className="mb-6">
                        この活動の原点は、とてもシンプルです。「ジビエが美味しい。これをもっと多くの人に食べてもらいたい」という思いから、ジビエBBQを始めました。
                      </p>
                      <p>
                        実際にやってみると、細かいことを気にしない、好奇心が強くて行動力のある人たちが自然と集まってきました。その雰囲気がとても面白くて、「この輪をもっと広げていきたい」と思うようになりました。
                      </p>
                    </div>

                    {/* Part 2: Hypothesis */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#0066FF]"></span>
                        正解のない「仮説」を楽しむ
                      </h3>
                      <p className="mb-6">
                        ジビエは、まだ科学的な裏付けが十分に整っていない分野だと感じています。個人的には、今のジビエの立ち位置は、サウナブームの初期にとても近いと思っています。
                        「何がいいのか」「どう入るのが正解か」など、誰もはっきり分かっていない中で、それぞれが自分の感覚や好みを堂々と語り合っていた時代です。
                      </p>
                      <p className="mb-6">
                        ジビエも今まさにその初期段階にあります。「これが正解」と決まっていないからこそ、仮説を自由に出し合うこと自体が楽しいのです。
                        例えば、「ジビエを食べると創造性が上がる気がする」といった感覚的な話も、ここでは大歓迎です。
                        鹿やイノシシが持つ、生き延びるための研ぎ澄まされたエネルギーを取り込んでいるのではないか——そんな検証できない仮説を自由に語り合えるのが、今のジビエの面白さです。
                      </p>
                    </div>

                    {/* Part 3: Drink Development */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#0066FF]"></span>
                        「消化」をテーマにしたエナジードリンク
                      </h3>
                      <p className="mb-6">
                        ジビエを広げるために、流通の中間で利益を取るビジネスではなく、周辺ビジネスを作ろうと考えました。その一つが、今回開発したドリンク「Hunter」です。
                      </p>
                      <p className="mb-6">
                        私自身、日本人をもっと肉食にしたいと思っています。肉をしっかり食べて、もっとワイルドになってほしい。ただ、日本人の体質的に、肉は重く感じやすく、消化が得意ではありません。
                        そこで、「肉を食べるときの消化を助け、元気になる」という、これまでにあまりなかったコンセプトのエナジードリンクを作りました。
                      </p>

                    </div>

                    {/* Part 4: Evolution */}
                    <div className="bg-gray-50 p-10 rounded-sm border border-gray-100">
                      <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#0066FF]"></span>
                        人類の進化
                      </h3>
                      <p className="mb-6">
                        私は、「消化」というテーマで、人類にもう一度進化が起きるのではないかと考えています。
                        かつて人類は、火を使って消化を効率化したことで活動時間を増やし、文明を発展させました。
                        今、AIによって脳の役割が変わり、時間的・精神的な余白が増えていく中で、身体のほうももう一段階進化できる余地があるのではないか。その鍵が「消化」だと考えています。
                      </p>
                      <p className="mb-6">
                        これからは、「どう楽しむか」「どう味わうか」という価値観が重要になっていきます。
                      </p>
                      <p className="font-bold text-[#1A1A1A]">
                        ジビエやこのドリンクは、その世界に入るための入り口であり、ツールです。
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Choco AI Tab Content */}
            <TabsContent value="choco-ai" className="animate-in fade-in-50 duration-500">
              <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                <div className="w-full md:w-1/2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <a href="https://lin.ee/iCvHuie" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#06C755] hover:bg-[#05b34c] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                        LINEで相談してみる
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="w-full md:w-1/2 flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src="/images/choco-ai.png" 
                    alt="ちょこAI。キャラクター" 
                    className="w-full max-w-md drop-shadow-2xl rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Problem & Solution Section */}
              <div className="bg-gray-50 p-8 md:p-12 rounded-2xl mb-24">
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6">
                    2026年、AI格差は「生存の差」になる
                  </h2>
                  <p className="text-gray-600 leading-loose">
                    大企業と中小企業の生産性格差は、AI導入の有無によって5倍以上に広がろうとしています。<br />
                    AIを使える企業とそうでない企業の差は、単なる「利益の差」ではなく、<br />
                    市場からの退場を意味する「生存の差」になります。
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
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
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-[#0066FF] mb-4">
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

              {/* Service Features */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <span className="text-[#0066FF] font-bold tracking-wider uppercase text-sm">Service</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1A1A1A]">3つの「挫折させない」仕組み</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#0066FF] transition-colors duration-300 shadow-sm">
                    <div className="w-14 h-14 bg-[#0066FF]/10 text-[#0066FF] rounded-lg flex items-center justify-center mb-6">
                      <Video className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">① 「習う」より「慣れる」<br />実務直結型・動画ライブラリ</h3>
                    <p className="text-gray-600 leading-relaxed">
                      難しい理論やプログラミングは一切教えません。「クレーム対応メールの作成」「議事録の要約」「求人票の作成」など、中小企業の現場で「今すぐ使える」具体的な手順だけを、短い動画で提供します。
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#0066FF] transition-colors duration-300 shadow-sm">
                    <div className="w-14 h-14 bg-[#0066FF]/10 text-[#0066FF] rounded-lg flex items-center justify-center mb-6">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">② コピペで終わる<br />「時短テンプレート」</h3>
                    <p className="text-gray-600 leading-relaxed">
                      AIへの指示出し（プロンプト）に悩む時間は無駄です。穴埋めするだけで高精度な回答が得られる「テンプレート」や、業務の棚卸しに特化した「専用AIツール」なども提供し、AI導入へのハードルを下げます。
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#0066FF] transition-colors duration-300 shadow-sm">
                    <div className="w-14 h-14 bg-[#0066FF]/10 text-[#0066FF] rounded-lg flex items-center justify-center mb-6">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">③ 孤独にさせない<br />「伴走型グループコンサル」</h3>
                    <p className="text-gray-600 leading-relaxed">
                      週に1回、オンラインでの相談会を開催。「こんな初歩的なこと聞いていいの？」という疑問から、自社業務への具体的な応用まで、講師が画面共有しながらその場で解決します。一人で悩んで挫折する時間をゼロにします。
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="bg-[#1A1A1A] text-white p-8 md:p-16 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                  <div className="w-full md:w-1/2">
                    <div className="bg-gray-800 p-8 rounded-2xl relative overflow-hidden border border-gray-700">
                      <ShieldCheck className="w-32 h-32 text-[#0066FF]/20 absolute -bottom-4 -right-4" />
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                        <Lock className="w-6 h-6 text-[#0066FF]" />
                        安心のセキュリティ対策
                      </h3>
                      <p className="font-bold mb-4 text-white">
                        AIを安全に使う「守りの鉄則」
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        「AIは嘘をつく」「情報は漏れる」を前提とした運用ルールを徹底指導します。
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      会社を守るためのリスク管理も万全
                    </h3>
                    <p className="text-gray-300 leading-loose mb-6">
                      中小企業が最も懸念する「情報漏洩」や「著作権侵害」のリスクに対し、私たちはツールを使うだけでなく「守るための鉄則」もセットで提供します。
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                        機密情報を入力しないためのマスキング技術
                      </li>
                      <li className="flex items-center gap-3 text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                        AIの嘘（ハルシネーション）を見抜くチェック体制
                      </li>
                      <li className="flex items-center gap-3 text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
                        安全な運用ルールの策定支援
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-24 text-center">
                <a href="https://lin.ee/iCvHuie" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#06C755] hover:bg-[#05b34c] text-white px-12 py-8 text-lg rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                    LINEでお問い合わせ
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
