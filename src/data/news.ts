export type NewsItem = {
  date: string;   // "YYYY-MM-DD"
  title: string;
  desc: string;
  link?: string;
};

export const news: NewsItem[] = [
  {
    date: "2025-01-16",
    title: "CHI Paper Accepted 🎉",
    desc: "Systematic review on stress sensing and intervention systems.\nTo be presented at CHI 2026 in Barcelona, Spain.",
  },
  {
    date: "2025-12-11",
    title: "Science Alive Promotion Award 🏆",
    desc: "Promotion Award at Science Alive (hosted by Donga Science), Daejeon.",
  },
  {
    date: "2025-12-01",
    title: "IMWUT Paper Accepted 🎉",
    desc: "Our paper, led by Hansoo Lee, was accepted to IMWUT",
  },
  {
    date: "2025-09-03",
    title: "K-Data Science Conference Award 🏆",
    desc: "Received the Creative Research Award at the K-Data Science Conference in Daegu, Korea.",
    link: "https://kdatascience.kr/conference/event",
  },
  {
    date: "2025-08-01",
    title: "My First IMWUT Paper Accepted 🎉",
    desc: "Will present at Ubicomp 2025 in Espoo, Finland.",
    link: "https://www.ubicomp.org/ubicomp-iswc-2025/",
  },
];

