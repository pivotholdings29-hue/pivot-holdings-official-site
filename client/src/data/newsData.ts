export interface NewsItem {
  id: number;
  date: string;
  category: 'INFO' | 'PRODUCT' | 'EVENT' | 'PRESS';
  title: string;
  content?: string | React.ReactNode;
  link?: string; // For external links like PR Times
  imageUrl?: string; // For displaying images in the modal
  location?: string; // For events
  time?: string; // For events
}

export const newsItems: NewsItem[] = [
  {
    id: 5,
    date: "2026.04.05",
    category: "EVENT",
    title: "【ジビエBBQ】インフルエンサー ‘食いしん坊女子 りっかちゃん’が参加！",
    content: `
      <div className="space-y-6">
        <div>
          <p className="font-bold text-lg mb-4">SNS総フォロワー約56万人を誇る大食いインフルエンサーの食いしん坊女子 りっかさんを招き、ジビエBBQを開催。</p>
          <p className="mb-2">
            <a href="https://www.instagram.com/rikka_0301/" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">＠りっかちゃんのアカウントリンク (Instagram、TikTok、YouTube)</a>
          </p>
          <p>今回用意したのは、鹿肉の脚を丸々1本（約4kg）。その常識外れのボリュームを、まさかのペロリと完食。参加者も弊社の運営メンバーも、興味津々で見ていました。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_5_cf12c1f2.jpg" alt="りっかちゃんと鹿肉" className="w-full h-auto rounded-sm object-cover" />
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_3_ed5161a2.jpg" alt="鹿肉にかぶりつく様子" className="w-full h-auto rounded-sm object-cover" />
        </div>

        <div>
          <h4 className="font-bold text-[#1A1A1A] border-l-4 border-[#0066FF] pl-3 mb-2">■ 今回の企画背景</h4>
          <p>ジビエは「硬い・臭い・難しい」といったイメージを持たれがちです。しかし本来は、適切に処理・調理すれば非常に美味しく、栄養価も高い食材。その価値を“体験として伝える”ため、今回のジビエBBQコラボを企画しました。</p>
        </div>

        <div className="my-6">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_1_c9d6b560.jpg" alt="BBQで焼かれる鹿肉" className="w-full h-auto rounded-sm object-cover" />
        </div>

        <div>
          <h4 className="font-bold text-[#1A1A1A] border-l-4 border-[#0066FF] pl-3 mb-2">■ 当日の様子</h4>
          <p>当日は、鹿肉の脚を丸ごと豪快に焼き上げるところからスタート。参加者全員が驚く中、りっかさんはそのボリュームを前にしても一切臆することなく、圧巻の食べっぷりを披露。結果として、約4kgの鹿肉を完食。「ジビエ＝美味しくて食べられる」というイメージをつけてくれるのではないかと思います。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_4_f694d7bc.jpg" alt="参加者との様子" className="w-full h-auto rounded-sm object-cover" />
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/LINE_ALBUM_りっかちゃん掲載OK_260405_2_d20022a1.jpg" alt="Hunterドリンクと鹿肉" className="w-full h-auto rounded-sm object-cover" />
        </div>

        <div>
          <h4 className="font-bold text-[#1A1A1A] border-l-4 border-[#0066FF] pl-3 mb-2">■ ジビエの本当の価値</h4>
          <p>今回のイベントで改めて見えたのは、ジビエの「ポテンシャル」です。</p>
          <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
            <li>高タンパク・低脂質で健康的</li>
            <li>適切に扱えば臭みはない</li>
            <li>体験としてのインパクトが強い</li>
          </ul>
          <p>ジビエは単なる食材ではなく、“体験価値のあるコンテンツ”として大きな可能性を持っています。</p>
        </div>

        <div>
          <h4 className="font-bold text-[#1A1A1A] border-l-4 border-[#0066FF] pl-3 mb-2">■ pH株式会社の取り組み</h4>
          <p>pH株式会社は、ジビエの価値を「体験」「ストーリー」「商品」として再構築しています。</p>
          <ul className="list-disc pl-5 mt-2 mb-2 space-y-1">
            <li>ジビエBBQイベントの開催</li>
            <li>SNSによる認知拡大</li>
            <li>食体験を高めるドリンクの開発・販売</li>
          </ul>
          <p>単なる消費ではなく、価値として広げる仕組みづくりを行っています。</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-sm">
          <h4 className="font-bold text-[#1A1A1A] mb-2">■ まとめ</h4>
          <p>今回のイベントは、ジビエのイメージを覆す一つの象徴的な事例となりました。「食べる」から「体験する」へ。pH株式会社はこれからも、ジビエの新たな可能性を創り続けていきます。</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#1A1A1A] text-white font-bold rounded-sm hover:bg-[#0066FF] transition-colors text-sm">
            👉 ジビエBBQの参加はこちら
          </a>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1A1A1A] border border-[#1A1A1A] font-bold rounded-sm hover:bg-gray-50 transition-colors text-sm">
            👉 コラボ・取材のご相談はこちら
          </a>
        </div>
      </div>
    ` as any
  },
  {
    id: 4,
    date: "2026.03.17",
    category: "PRESS",
    title: "懸賞なび 2026年 5月号にHUNTERが掲載されました。",
    content: "白夜書房が発行する「懸賞なび」2026年5月号にて、お肉を食べるならこれ1本！「Hunter（ハンター）」が紹介されました。L-カルニチン1000mgやイヌリン600mgなどを配合し、脂の多い肉料理などの重たい食事の不安をケアし、翌朝の爽快な目覚めをサポートするエナジードリンクとして取り上げていただいております。本誌では読者プレゼント企画も実施されておりますので、ぜひご覧ください。",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030557844/9KrcnehZTR9fbMqyS3eBSa/懸賞なび_2026年5月号_103733f7.png"
  },
  {
    id: 3,
    date: "2026.01.29",
    category: "PRESS",
    title: "肉好きの常識が変わる！？次世代飲料Hunter（ハンタードリンク）誕生。エナジードリンクの力で胃もたれや消化が気になる食事をサポートし、翌朝のコンディションを維持",
    link: "https://prtimes.jp/main/html/rd/p/000000002.000176348.html"
  },
  {
    id: 1,
    date: "2025.12.23",
    category: "INFO",
    title: "pH株式会社を設立し、清涼飲料水領域での事業を開始しました。",
    content: "2025年12月23日、pH株式会社を設立いたしました。私たちは「食と体験を起点に、ブランドと場をつくる」をミッションに掲げ、飲料・食品領域での事業を展開してまいります。今後の活動にご期待ください。"
  },
  {
    id: 2,
    date: "2025.12.23",
    category: "PRODUCT",
    title: "自社ブランド商品の企画・開発を進行中です。",
    content: "現在、第一弾となる自社ブランド商品の企画・開発を鋭意進行中です。詳細が決まり次第、本サイトおよび公式SNSにて発表させていただきます。"
  }
];

export const eventItems: NewsItem[] = [];

export const allItems = [...newsItems, ...eventItems].sort((a, b) => b.date.localeCompare(a.date));
