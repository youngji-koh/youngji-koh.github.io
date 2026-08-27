export type EducationItem = {
  degree: string;
  org: string;
  span: string;
  note?: string;
};

export type Profile = {
  name: string;
  email: string;
  github: string;
  scholar: string;
  cvUrl: string;
  tagline: string;
  education: EducationItem[];
  interests: string[];
  labName?: string;
  labUrl?: string;
};

export const profile: Profile = {
  name: "Youngji Koh",
  email: "youngji@kaist.ac.kr",
  github: "https://github.com/youngji-koh",
  scholar: "https://scholar.google.com/citations?user=9YItZ30AAAAJ&hl=en&oi=ao",
  cvUrl: "/files/CV_Youngji Koh.pdf",
  labName: "Interactive Computing Lab",
  labUrl: "https://ic.kaist.ac.kr",
  tagline:
    "Ph.D. from KAIST (Interactive Computing Lab), incoming NRF Postdoctoral Fellow at the University of Tokyo (Prof. Koji Yatani's IIS Lab) — exploring digital health technologies for mental wellbeing",


  education: [
    {
      degree: "Ph.D. in School of Computing",
      org: "KAIST, Daejeon",
      span: "Sep 2021 — Aug 2026",
    //   note: "Interactive Computing Laboratory (Advisor: Prof. Uichin Lee)",
    },
    {
      degree: "M.S. in School of Computing",
      org: "KAIST, Daejeon",
      span: "Sep 2019 — Aug 2021",
    //   note: "Software Architecture Laboratory (Advisor: Prof. Sungwon Kang)",
    },
    {
      degree:
        "B.S. in Computer Science and Engineering",
      org: "Ewha Womans University, Seoul",
      span: "Mar 2015 — Aug 2019",
    },
  ],
  interests: [
    "Human-AI Interaction",
    "Agentic & Multi-Agent Systems",
    "Multimodal Sensing",
    "Mental Health & Wellbeing",
    "Digital Health"
  ],
};
