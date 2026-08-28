export type Project = {
  title: string;
  role: string;
  when: string;
  brief: string[];
  thumb?: string; // 이모지/간단 텍스트
  image?: string;
  org?: string;   // optional (없어도 오류 안남)
  tags?: string[]; // optional (없어도 오류 안남)
  news?: {
    outlet: string;
    title: string;
    url: string;
  }[]; // optional (없어도 오류 안남)
};

// Projects (compact summaries + role)
export const projects: Project[] = [
  {
    title:
      "Development of an Early Prediction System for Complex Diseases",
    role: "Lead Researcher",
    when: "Jun 2025 – Aug 2026",
    org: "Institute for ICT Planning & Evaluation (IITP)",
    brief:
      ["Designed a comorbidity-aware framework that coordinates disorder-specific agents for diagnosis and intervention planning."],
    // thumb: "",
    image: "/files/project/choral.png",
     tags: [
      "LLM Agent",
      "Human-Centered Computing",
      "Multimodal Sensing",
      "Digital Health",
      "Mental Health & Wellbeing"
    ],
  },
  // {
  //   title: "Emotion Workers’ Mental Health Risk Prediction",
  //   role: "Research Assistant",
  //   when: "Apr 2022 – Dec 2025",
  //   org: "Institute for ICT Planning & Evaluation (IITP)",
  //   brief:
  //     ["Authored a survey on stress sensing & intervention; explored device+algorithm opportunities and real-world deployment."],
  //   thumb: "",
  // },


{
  title: "AI Models for Multimodal Mental Health Prediction",
  role: "Lead Researcher",
  when: "Sep 2023 – Aug 2025",
  org: "LG Electronics",
  brief: [
    "Developed deep learning and machine learning models using IoT, mobile, and wearable data",
    "Built multimodal detection models for depression and anxiety",
    "Evaluated detection accuracy and reliability in real-world settings",
  ],
  image: "/files/project/Group 70.png",
  tags: [
    "Machine Learning",
    "Mental Health & Wellbeing",
    "Multimodal Sensing",
    "Digital Health"
  ],
},


{
  title: "IoT, Mobile, and Wearable Data Visualization for Mental Health Self-Reflection",
  role: "Lead Researcher",
  when: "May 2023 – Feb 2025",
  org: "LG Electronics",
  brief: [
    "Collected multimodal data from IoT, mobile, and wearable devices",
    "Designed and conducted user studies on data visualization",
    "Developed personal informatics dashboards for mental wellbeing",
  ],
  image: "/files/project/Group 52.png",
  tags: [
    "Data Visualization",
    "IoT & Wearables",
    "Mental Health",
    "Ubiquitous Computing"
  ],  
  news: [
    {
      outlet: "디지털타임스",
      title: "우울·스트레스 등 나의 정신건강 상태는?… 가전 내 IoT 센서로 추적",
      url: "https://www.dt.co.kr/article/12024097?ref=naver"
    },
    {
      outlet: "데일리안",
      title: "KAIST, 냉장고 사용 늘면 스트레스↑…IoT로 행동패턴 추적",
      url: "https://www.dailian.co.kr/news/view/1562105/?sc=Naver"
    },
    {
      outlet: "전자신문",
      title: "'多 스트레스시 냉장고 사용 ↑' KAIST, IoT 센서로 정신건강 읽어",
      url: "https://www.etnews.com/20251021000145"
    },
    {
      outlet: "헤럴드경제",
      title: "“나만 그런 줄 알았더니” 스트레스 많은 사람…냉장고 자주 연다",
      url: "https://biz.heraldcorp.com/article/10597559?ref=naver"
    },
    {
      outlet: "중앙일보",
      title: "“스트레스 받으면 냉장고 많이 열었다”…IoT 센서로 정신 건강 추적한다",
      url: "https://www.joongang.co.kr/article/25375559"
    },
    {
      outlet: "조선일보",
      title: "내가 냉장고를 자꾸 열었던 이유는... 극심한 스트레스 때문이었다",
      url: "https://www.chosun.com/economy/science/2025/10/21/G7B5DAJRQFEZLHPBVKZ7ITWPOE/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news"
    },
    {
      outlet: "연합뉴스",
      title: "“스트레스 많으면 냉장고 사용↑”…사물인터넷으로 측정",
      url: "https://www.yna.co.kr/view/AKR20251021033000063?input=1195m"
    },
    {
      outlet: "매일경제",
      title: "새벽만 되면 거실로 나가는 남편…몰래 따라 나가보니",
      url: "https://www.mk.co.kr/news/it/11446938"
    }
  ],
},

{
  title: "Robotic Counseling System for Mental Health Support",
  role: "Collaborator",
  when: "Feb 2023 - Oct 2024 ",
  org: "LG Electronics",
  brief: [
    "Supported a two-week field study with 20 participants assessing emotional awareness, engagement, and sense of place",
  ],
  image: "/files/project/lee2025in.bmp",
  tags: [
    "Social Robots",
    "Mental Health",
    "Human-Robot Interaction",
    "Digital Interventions"
  ],
},

{
  title: "Context-Aware Multimodal Smart Speaker for Mental Health Self-Tracking",
  role: "Lead Researcher",
  when: "Sep 2021 – Sep 2023",
  org: "LG Electronics",
  brief: [
    "Designed and developed an in-home context-aware multimodal smart speaker system",
    "Led in-the-wild deployment for continuous tracking",
    "Collected real-world behavioral and physiological data in home settings",
  ],
  image: "/files/project/smartspeaker.png",
  tags: [
    "Smart Speaker",
    "Context-Aware Sensing",
    "Smart Home",
    "Human-Centered Computing",
    "Digital Health"
  ],
news: [
  {
    "outlet": "연합뉴스",
    "title": "1인 가구 마음건강 챙기는 스마트 스피커 기술 개발",
    "url": "https://www.yna.co.kr/view/AKR20240924040100063?input=1195m"
  },
  {
    "outlet": "국민일보",
    "title": "KAIST, 1인 가구 정신건강 돕는 스마트 스피커 개발",
    "url": "https://www.kmib.co.kr/article/view.asp?arcid=0020555048"
  },
  {
    "outlet": "헤럴드경제",
    "title": "KAIST, 1인 가구 정신건강 챙기는 스마트 스피커 시스템 개발",
    "url": "https://biz.heraldcorp.com/article/3843844"
  },
  {
    "outlet": "매일경제",
    "title": "카이스트, 1인 가구 정신건강 위한 스마트 스피커 시스템 개발",
    "url": "https://www.mk.co.kr/news/it/11123474"
  },
  {
    "outlet": "이데일리",
    "title": "KAIST, 1인 가구 정신건강 돕는 '똑똑한' 스피커 시스템 개발",
    "url": "https://www.edaily.co.kr/News/Read?newsId=01902406639023400&mediaCodeNo=257&OutLnkChk=Y"
  },
  {
    "outlet": "전자신문",
    "title": "‘당신의 마음, 어떤가요?’ KAIST, 1인 가구 정신건강 자가 추적 시스템 개발",
    "url": "https://www.etnews.com/20240924000095"
  },
  {
    "outlet": "데일리안",
    "title": "“내 마음 건강 괜찮나?” KAIST, 정신건강 상태 자가 추적 시스템 개발",
    "url": "https://www.dailian.co.kr/news/view/1410044/?sc=Naver"
  }
],
},

{
  title: "Interactive Tool for Linking Smartphone Logs and Screen Video",
  role: "Collaborator",
  when: "Sep 2021 - Feb 2022",
  org: "", // 공동연구/논문 성격이라 org는 비워두거나 Lab 이름 넣을 수도 있음
  brief: [
    "Contributed to a preliminary user study evaluating the benefits of linked navigation",
  ],
  image: "/files/project/lee2022lvlinker.png", // 스크린샷 있으면, 없으면 제거
  tags: [
    "Mobile Interaction",
    "UI/UX Research",
    "Data Visualization",
    "Log-Video Synchronization"
  ],
},

{
  title: "Accessible Art Exploration System for People with Visual Impairments",
  role: "Collaborator",
  when: "2018 May - 2019 May",
  brief: [
    "Developed a touchscreen-based web system prototype that enables people with visual impairments to explore 2D artworks independently",
    "Implemented object-level information (e.g., name, color, position, shape, size)",
  ],
  image: "/files/project/accessart_prototype.png", // 샘플 이미지 (없으면 제거 가능)
  tags: [
    "Accessibility",
    "Art & Culture",
    "Web System",
    "Visual Impairments",
    "Human-Centered Computing"
  ],
}


];