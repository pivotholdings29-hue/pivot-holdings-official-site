export interface NewsItem {
  id: number;
  date: string;
  category: 'INFO' | 'PRODUCT' | 'EVENT' | 'PRESS';
  title: string;
  content?: string;
  link?: string; // For external links like PR Times
  imageUrl?: string; // For displaying images in the modal
  location?: string; // For events
  time?: string; // For events
}

export const newsItems: NewsItem[] = [
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
