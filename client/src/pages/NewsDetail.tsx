import Layout from "@/components/Layout";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NewsDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* ヒーロー画像セクション */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-gray-900 overflow-hidden">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_1_c9d6b560.jpg" 
          alt="ジビエBBQの様子" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-300 font-mono">2026.04.05</span>
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold border rounded-sm tracking-wider text-white border-white bg-[#FF6B00]/80">
                  EVENT
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-md">
                【ジビエBBQ】インフルエンサー ‘食いしん坊女子 りっかちゃん’が参加！
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-12 rounded-sm border border-gray-100 shadow-sm">
            <div className="space-y-10 text-gray-700 leading-loose">
              
              {/* リード文 */}
              <div className="text-lg">
                <p className="font-bold mb-4">SNS総フォロワー約56万人を誇る大食いインフルエンサーの食いしん坊女子 りっかさんを招き、ジビエBBQを開催。</p>
                <div className="mb-6 bg-gray-50 p-4 rounded-sm border border-gray-100">
                  <p className="font-bold text-sm text-gray-500 mb-2">＠りっかちゃんのアカウントリンク</p>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://www.instagram.com/kuishinbo_joshi/" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline font-bold flex items-center gap-2">
                        <span className="w-20 inline-block text-gray-700">Instagram</span>
                        <span className="truncate">https://www.instagram.com/kuishinbo_joshi/</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@%E9%A3%9F%E3%81%84%E3%81%97%E3%82%93%E5%9D%8A%E5%A5%B3%E5%AD%90%E3%82%8A%E3%81%A3%E3%81%8B%E3%81%A1%E3%82%83%E3%82%93" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline font-bold flex items-center gap-2">
                        <span className="w-20 inline-block text-gray-700">YouTube</span>
                        <span className="truncate">https://www.youtube.com/@食いしん坊女子りっかちゃん</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@ricca_ogui" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline font-bold flex items-center gap-2">
                        <span className="w-20 inline-block text-gray-700">TikTok</span>
                        <span className="truncate">https://www.tiktok.com/@ricca_ogui</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <p>今回用意したのは、鹿肉の脚を丸々1本（約4kg）。その常識外れのボリュームを、まさかのペロリと完食。参加者も弊社の運営メンバーも、興味津々で見ていました。</p>
              </div>

              {/* 本文① */}
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A] border-l-4 border-[#0066FF] pl-4 mb-4">■ 今回の企画背景</h2>
                <p>ジビエは「硬い・臭い・難しい」といったイメージを持たれがちです。しかし本来は、適切に処理・調理すれば非常に美味しく、栄養価も高い食材。その価値を“体験として伝える”ため、今回のジビエBBQコラボを企画しました。</p>
              </div>

              {/* 本文② */}
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A] border-l-4 border-[#0066FF] pl-4 mb-4">■ 当日の様子</h2>
                <p>当日は、鹿肉の脚を丸ごと豪快に焼き上げるところからスタート。参加者全員が驚く中、りっかさんはそのボリュームを前にしても一切臆することなく、圧巻の食べっぷりを披露。結果として、約4kgの鹿肉を完食。「ジビエ＝美味しくて食べられる」というイメージをつけてくれるのではないかと思います。</p>
              </div>

              {/* 画像グリッド (当日の様子) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_5_cf12c1f2.jpg" alt="りっかちゃんと鹿肉" className="w-full h-auto rounded-sm shadow-sm object-contain" />
                </div>
                <div>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_1_c9d6b560.jpg" alt="BBQで焼かれる鹿肉" className="w-full h-auto rounded-sm shadow-sm object-contain" />
                </div>
                <div>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_4_f694d7bc.jpg" alt="参加者との様子" className="w-full h-auto rounded-sm shadow-sm object-contain" />
                </div>
                <div>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_3_ed5161a2.jpg" alt="鹿肉にかぶりつく様子" className="w-full h-auto rounded-sm shadow-sm object-contain" />
                </div>
                <div className="md:col-span-2 max-w-sm mx-auto">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_2_d20022a1.jpg" alt="Hunterドリンクと鹿肉" className="w-full h-auto rounded-sm shadow-sm object-contain" />
                </div>
              </div>

              {/* 本文③ */}
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A] border-l-4 border-[#0066FF] pl-4 mb-4">■ ジビエの本当の価値</h2>
                <p>今回のイベントで改めて見えたのは、ジビエの「ポテンシャル」です。</p>
                <ul className="list-disc pl-6 mt-4 mb-4 space-y-2 font-bold">
                  <li>高タンパク・低脂質で健康的</li>
                  <li>適切に扱えば臭みはない</li>
                  <li>体験としてのインパクトが強い</li>
                </ul>
                <p>ジビエは単なる食材ではなく、“体験価値のあるコンテンツ”として大きな可能性を持っています。</p>
              </div>

              {/* 本文④ */}
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A] border-l-4 border-[#0066FF] pl-4 mb-4">■ pH株式会社の取り組み</h2>
                <p>pH株式会社は、ジビエの価値を「体験」「ストーリー」「商品」として再構築しています。</p>
                <ul className="list-disc pl-6 mt-4 mb-4 space-y-2 font-bold">
                  <li>ジビエBBQイベントの開催</li>
                  <li>SNSによる認知拡大</li>
                  <li>食体験を高めるドリンクの開発・販売</li>
                </ul>
                <p>単なる消費ではなく、価値として広げる仕組みづくりを行っています。</p>
              </div>

              {/* まとめ */}
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">■ まとめ</h2>
                <p className="mb-4">今回のイベントは、ジビエのイメージを覆す一つの象徴的な事例となりました。</p>
                <p className="font-bold text-lg mb-4 text-[#0066FF]">「食べる」から「体験する」へ。</p>
                <p>pH株式会社はこれからも、ジビエの新たな可能性を創り続けていきます。</p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                <a href="https://www.instagram.com/gibierland/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded-sm hover:bg-[#0066FF] transition-colors text-sm w-full sm:w-auto">
                  👉 ジビエBBQの参加はこちら
                </a>
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] font-bold rounded-sm hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto">
                    👉 コラボ・取材のご相談はこちら
                  </a>
                </Link>
              </div>

            </div>
            
            <div className="mt-16 text-center">
              <Link href="/news">
                <a className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0066FF] font-bold transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  ニュース一覧へ戻る
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
