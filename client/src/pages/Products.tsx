import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
            PRODUCTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-bold tracking-widest text-sm uppercase"
          >
            商品紹介
          </motion.p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
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
                  <span className="text-sm font-normal text-gray-500 mr-2">メーカー小売希望価格</span>
                  ¥1,800
                  <span className="text-sm font-normal text-gray-500 ml-1">（税込）</span>
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
                    この活動の原点は、とてもシンプルです。「ジビエが美しい、そしておいしい。これをもっと多くの人に食べてもらいたい」という思いから、ジビエBBQを始めました。
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
        </div>
      </section>
    </Layout>
  );
}
