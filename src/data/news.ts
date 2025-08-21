export type NewsItem = {
  date: string;   // "YYYY-MM-DD"
  title: string;
  desc: string;
  link?: string;
};

export const news: NewsItem[] = [
  {
    date: "2025-09-03",
    title: "K-Data Science Research Presentation Finalist 🏆",
    desc: "Advanced to the final round of the competition.",
    link: "https://kdatascience.kr/conference/event",
  },
  {
    date: "2025-08-01",
    title: "My First IMWUT Paper Accepted 🎉",
    desc: "Will present at Ubicomp 2025 in Finland.",
    link: "https://www.ubicomp.org/ubicomp-iswc-2025/",
  },
];
