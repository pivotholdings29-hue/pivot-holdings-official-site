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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                {/* Product Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gray-100 rounded-sm aspect-square flex items-center justify-center relative overflow-hidden group border border-gray-200"
                >
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030557844/EhLXAyNGXAGtTZJF.PNG" 
                    alt="Hunter Product" 
                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
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
                  <div className="mb-10 relative">
                    
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030557844/YIKJEmfQwwjGjshS.png" 
                      alt="Hunter" 
                      className="h-24 md:h-36 object-contain relative z-10 drop-shadow-lg"
                    />
                  </div>
                  
                  <div className="mb-10">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent inline-block border-b-2 border-yellow-400 pb-1">
                      お肉を食べる時はこれ1本！
                    </h3>
                    
                  </div>

                  <div className="mb-12">
                    <p className="text-2xl font-bold text-[#1A1A1A]">
                      ¥1,800
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
                      <li>脂の多い肉料理に</li>                      
                      <li>肉料理と向き合うためのコンディションサポート</li>
                      <li>お酒や食事シーンに</li>
                      <li>忙しい毎日のサポートに</li>
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
                          100ml<br />
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
                          甜菜糖（国内製造）、レモン果汁、L-カルニチンフマル酸塩、イヌリン、ポリデキストロース、米糠・大豆エキス納豆菌発酵物加工食品 / ビタミンC、カフェイン、抽出 ビタミンE、ナイアシン、パントテン酸 Ca、ビタミンB1、ビタミンB6、ビタミンB2、ビタミンA、葉酸、ビタミンD、ビタミンB12
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 bg-gray-50 p-6 rounded-sm border border-gray-100">
                    <h4 className="font-bold text-[#1A1A1A] mb-4">ご購入について</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>1箱14本で準備していますが、一般のお客様は1本単位から購入できます。</li>
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
                        ジビエは、まだ科学的な裏付けが十分に整っていない分野だと感じています。今のジビエの立ち位置は、サウナブームの初期にとても近いと思っています。 「何がいいのか」「どう入るのが正解か」など、誰もはっきり分かっていない中で、それぞれが自分の感覚や好みを堂々と語り合っていた時代です。
                      </p>
                      <p className="mb-6">
                        ジビエも今まさにその初期段階にあります。「これが正解」と決まっていないからこそ、仮説を自由に出し合うこと自体が楽しいのです。 例えば、「ジビエを食べると創造性が上がる気がする」といった感覚的な話も、ここでは大歓迎です。 鹿やイノシシが持つ、生き延びるための研ぎ澄まされたエネルギーを取り込んでいるのではないか——そんな検証できない仮説を自由に語り合えるのが、今のジビエの面白さです。
                      </p>
                    </div>

                    {/* Part 3: Drink Concept */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#0066FF]"></span>
                        「消化」をテーマにしたエナジードリンク
                      </h3>
                      <p className="mb-6">
                        ジビエを広げるために、周辺事業から何か盛り上げることができないかと考えました。その一つが、今回開発したドリンク「Hunter」です。
                      </p>
                      <p>
                        日本人をもっと肉食にしたいと思っています。肉をしっかり食べて、もっとワイルドになってほしい。ただ、日本人の体質的に、肉は重く感じやすく、消化が得意ではありません。 そこで、「肉を食べるときの消化を助け、元気になる」という、これまでにあまりなかったコンセプトのエナジードリンクを作りました。
                      </p>
                    </div>

                    {/* Part 4: Evolution */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#0066FF]"></span>
                        人類の進化
                      </h3>
                      <p className="mb-6">
                        「消化」というテーマで、人類にもう一度進化が起きるのではないかと考えています。 かつて人類は、火を使って消化を効率化したことで活動時間を増やし、文明を発展させました。 今、AIによって脳の役割が変わり、時間的・精神的な余白が増えていく中で、身体のほうももう一段階進化できる余地があるのではないか。その鍵が「消化」だと考えています。
                      </p>
                      <p>
                        これからは、「どう楽しむか」「どう味わうか」という価値観が重要になっていきます。<br />
                        ジビエやこのドリンクは、その世界に入るための入り口であり、ツールです。
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Choco AI Tab Content */}
            <TabsContent value="choco-ai" className="animate-in fade-in-50 duration-500">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <div className="inline-block px-3 py-1 border border-[#0066FF] text-[#0066FF] font-bold text-xs tracking-widest mb-6 uppercase">
                    AI Implementation Support
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1A1A1A]">ちょこAI。</h2>
                  <p className="text-xl text-gray-500 font-light">AIを諦めたくない経営者のための最後の砦</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030557844/QovbuwVFORocZMPR.png" 
                      alt="ちょこAI。キャラクター" 
                      className="w-full max-w-md drop-shadow-2xl rounded-2xl"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold text-[#1A1A1A] leading-relaxed">
                      「AI導入、何から始めればいいかわからない」<br />
                      そんな悩みを解決します。
                    </h3>
                    <p className="text-gray-600 leading-loose">
                      世の中には高度なAIツールや難解なセミナーが溢れていますが、
                      中小企業の現場で本当に必要なのは「明日から使える」実践的なサポートです。
                    </p>
                    <p className="text-gray-600 leading-loose">
                      「ちょこAI。」は、難しい専門用語を使わず、
                      御社の業務に合わせた具体的な活用方法をご提案。
                      リスク管理から実務への定着まで、伴走型でサポートします。
                    </p>
                    
                    <div className="pt-4">
                      <a href="https://choco-ai.jp" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#0066FF] hover:bg-[#0052cc] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group text-lg">
                          サービスサイトを見る
                          <ExternalLink className="ml-2 w-5 h-5" />
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0066FF]">
                      <Video className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold mb-4 text-[#1A1A1A]">動画研修・ワークショップ</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      全社員向けの基礎研修から、部署別の実践ワークショップまで。
                      「触って覚える」を重視したカリキュラムを提供します。
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0066FF]">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold mb-4 text-[#1A1A1A]">ガイドライン策定</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      AI利用におけるリスクを洗い出し、会社ごとの実情に合わせた
                      利用ガイドラインの策定を支援します。
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0066FF]">
                      <Users className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold mb-4 text-[#1A1A1A]">伴走型サポート</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      導入後の「困った」をチャットや定例会で解決。
                      社内推進リーダーの育成も行い、自走できる組織を作ります。
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
