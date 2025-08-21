// 타입은 필요시 더 확장해도 됨
export type Publication = {
  type: "Conference" | "Journal" | "Workshop" | "Poster";
  code: string;              // CHI, IMWUT, ...
  title: string;
  authors: string[];
  meta: string;
  year: number;
  href?: string;
  pdf?: string;      // 예: "/pdfs/paper.pdf"
  slides?: string;   // 예: "/slides/talk.pdf" 또는 구글슬라이드 공유 링크
};

// 학회/저널 코드 → 배지 클래스 매핑
export const venueColor: Record<string, string> = {
  CHI: "bg-rose-100 text-rose-700 border-rose-200",
  IMWUT: "bg-emerald-100 text-emerald-700 border-emerald-200",
  CSCW: "bg-amber-100 text-amber-800 border-amber-200",
  UIST: "bg-sky-100 text-sky-700 border-sky-200",
  ASSETS: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
  KSC: "bg-slate-100 text-slate-700 border-slate-200",
  VIS: "bg-indigo-100 text-indigo-700 border-indigo-200",
  IEEE: "bg-cyan-100 text-cyan-700 border-cyan-200",
};


// Publications (trimmed/beautified from CV)
export const publications: Publication[]  = [
  {
    type: "Conference",
    code: "IMWUT",
    title:
      "Home IoT for Self-tracking Emotional Wellbeing: Behavioral Patterns, Self-Reflection, and Privacy Concerns",
    authors: [
      "Youngji Koh",
      "Chanhee Lee",
      "Eunki Joung",
      "Hyunsoo Lee",
      "Uichin Lee",
    ],
    meta: "UbiComp '25 • Espoo, Finland (Oct 14–16, 2025)",
    year: 2025,
    href: "#",
    pdf: "files/publication/pdf/koh2025harnessing.pdf"
  },
  {
    type: "Conference",
    code: "CSCW",
    title:
      "‘In That Small Space with Just the Two of Us’: User Experiences with Cumpa in a Robotic Counseling Center",
    authors: [
      "Chanhee Lee",
      "Eunki Joung",
      "Youngji Koh",
      "Esther Kim",
      "Sohwi Son",
      "Sunjung Kwon",
      "Uichin Lee",
    ],
    meta: "CSCW '25 • Bergen, Norway (Oct 18–22, 2025)",
    year: 2025,
    href: "#",
    pdf: "files/publication/pdf/lee2025in.pdf"
  },
  {
    type: "Conference",
    code: "CHI",
    title:
      "Exploring Context-Aware Mental Health Self-Tracking Using Multimodal Smart Speakers in Home Environments",
    authors: ["Jieun Lim*", "Youngji Koh*", "Auk Kim", "Uichin Lee"],
    meta: "CHI '24 • Honolulu, USA (May 11–16, 2024)",
    year: 2024,
    href: "https://dl.acm.org/doi/10.1145/3613904.3642846",
    pdf: "files/publication/pdf/lim2024exploring.pdf",
    slides: "/files/publication/slides/lim2024exploring.pdf"
  },
  {
    type: "Conference",
    code: "CHI",
    title:
      "Interrupting for Microlearning: Understanding Perceptions and Interruptibility of Proactive Conversational Microlearning Services",
    authors: [
      "Minyeong Kim",
      "Jiwook Lee",
      "Youngji Koh",
      "Chanhee Lee",
      "Uichin Lee",
      "Auk Kim",
    ],
    meta: "CHI '24 • Honolulu, USA (May 11–16, 2024)",
    year: 2024,
    href: "https://dl.acm.org/doi/10.1145/3613904.3642778",
    pdf: "files/publication/pdf/kim2024interrupting.pdf"
  },
//   {
//     type: "Journal",
//     code: "IEEE",
//     title:
//       "Deep Learning-based Bug Report Summarization Using Sentence Significance Factors",
//     authors: ["Youngji Koh", "Sungwon Kang", "Seonah Lee"],
//     meta: "Applied Sciences, 2022",
//     year: 2022,
//     href: "https://www.mdpi.com/2076-3417/12/12/5854"
//   },
//   {
//     type: "Conference",
//     code: "IEEE",
//     title:
//       "Bug Report Summarization using Believability Score and Text Ranking",
//     authors: ["Youngji Koh", "Sungwon Kang", "Seonah Lee"],
//     meta: "ICAIIC 2021",
//     year: 2021,
//     href: "https://ieeexplore.ieee.org/document/9415267"
//   },
//   {
//     type: "Conference",
//     code: "KSC",
//     title:
//       "Deep Learning based bug report summarization using sentence assessment score (Best Paper)",
//     authors: ["Youngji Koh", "Sungwon Kang"],
//     meta: "KSC 2020 • Best Paper Award",
//     year: 2020,
//   },
//   {
//     type: "Workshop",
//     code: "VIS",
//     title:
//       "Data Visualization for Mental Health Monitoring in Smart Home Environment: A Case Study",
//     authors: ["Youngji Koh", "Chanhee Lee", "Yunhee Ku", "Uichin Lee"],
//     meta: "IEEE VIS 2023 • Visual Analytics in Healthcare Workshop",
//     year: 2023,
//   },
  {
    type: "Poster",
    code: "UIST",
    title:
      "LV-Linker: Supporting Fine-grained User Interaction Analyses by Linking Smartphone Log and Recorded Video Data",
    authors: ["Hansoo Lee", "Sangwook Lee", "Youngji Koh", "Uichin Lee"],
    meta: "UIST 2022",
    year: 2022,
    href: "https://dl.acm.org/doi/10.1145/3526114.3558714",
    pdf: "files/publication/pdf/lee2022lvlinker.pdf",
  },
  {
    type: "Poster",
    code: "ASSETS",
    title:
      "Supporting Object-level Exploration of Artworks by Touch for People with Visual Impairments",
    authors: ["Nahyun Kwon", "Youngji Koh", "Uran Oh"],
    meta: "ASSETS 2019",
    year: 2019,
    href: "https://dl.acm.org/doi/10.1145/3308561.3354620",
    pdf: "files/publication/pdf/kwon2019supporting.pdf"
  },
//   {
//     type: "Poster",
//     code: "KSC",
//     title:
//       "Real-time Fire Evacuation System based on Indoor Location Tracking and Route Optimization",
//     authors: [
//       "Young-Ji Koh",
//       "Naeun Go",
//       "ChaeYoon Kim",
//       "SooHee Lee",
//       "Sangsoo Park",
//     ],
//     meta: "KSC 2018 • Student Paper Merit Award",
//     year: 2018,
//   },
];
