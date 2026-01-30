export interface NewsItem {
  id: number;
  date: string;
  category: 'INFO' | 'PRODUCT' | 'EVENT' | 'PRESS';
  title: string;
  content?: string;
  link?: string; // For external links like PR Times
  location?: string; // For events
  time?: string; // For events
}

export const newsItems: NewsItem[] = [
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

export const eventItems: NewsItem[] = [
  {
    id: 101,
    date: "2026.02.10",
    category: "EVENT",
    title: "ジビエBBQ経営者交流会",
    content: "経営者様向けのジビエBBQ交流会を開催いたします。美味しいジビエ料理を囲みながら、ビジネスやビジョンについて語り合いましょう。",
    location: "都内某所（参加者のみにお知らせします）",
    time: "18:00〜21:00"
  },
  {
    id: 102,
    date: "2026.02.19",
    category: "EVENT",
    title: "ジビエBBQ戦略共有",
    content: "今後のジビエBBQの展開や戦略について共有する会を開催します。興味のある方はぜひご参加ください。",
    location: "都内某所（参加者のみにお知らせします）",
    time: "20:00開場"
  },
  {
    id: 103,
    date: "2026.02.27",
    category: "EVENT",
    title: "通常BBQ",
    content: "定期開催のジビエBBQです。初めての方も大歓迎です。ジビエの美味しさと楽しさを体験してください。",
    location: "都内某所（参加者のみにお知らせします）",
    time: "20:00開場"
  }
];

export const allItems = [...newsItems, ...eventItems].sort((a, b) => b.date.localeCompare(a.date));
