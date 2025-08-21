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
    when: "Jun 2025 – Dec 2025",
    org: "Institute for ICT Planning & Evaluation (IITP)",
    brief:
      ["Designed a comorbidity-aware framework that coordinates disorder-specific agents for diagnosis and intervention planning."],
    // thumb: "🧠",
    image: "/files/project/columbus.png",
     tags: [
      "🤖 LLM Agent",
      "🧑‍💻 Human-Centered Computing",
      "🔬 Multimodal Sensing",
      "💊 Digital Health",
      "🧠 Mental Health & Wellbeing"
    ],
  },
  // {
  //   title: "Emotion Workers’ Mental Health Risk Prediction",
  //   role: "Research Assistant",
  //   when: "Apr 2022 – Dec 2025",
  //   org: "Institute for ICT Planning & Evaluation (IITP)",
  //   brief:
  //     ["Authored a survey on stress sensing & intervention; explored device+algorithm opportunities and real-world deployment."],
  //   thumb: "📊",
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
    "🤖 Machine Learning",
    "🧠 Mental Health & Wellbeing",
    "🔬 Multimodal Sensing",
    "💊 Digital Health"
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
    "📊 Data Visualization",
    "📱 IoT & Wearables",
    "🧠 Mental Health",
    "🌐 Ubiquitous Computing"
  ],
},

{
  title: "Robotic Counseling System for Mental Health Support",
  role: "Research Contributor",
  when: "Feb 2023 - Oct 2024 ",
  org: "",
  brief: [
    "Supported a two-week field study with 20 participants assessing emotional awareness, engagement, and sense of place",
  ],
  image: "/files/project/lee2025in.bmp",
  tags: [
    "🤖 Social Robots",
    "🧠 Mental Health",
    "👥 Human-Robot Interaction",
    "🌐 Digital Interventions"
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
    "🔊 Smart Speaker",
    "🧩 Context-Aware Sensing",
    "🏠 Smart Home",
    "🧑‍💻 Human-Centered Computing",
    "💊 Digital Health"
  ],
   news: [
    {
      outlet: "Yonhap News",
      title: "1인 가구 마음건강 챙기는 스마트 스피커 기술 개발",
      url: "https://www.yna.co.kr/view/AKR20240924040100063?input=1195m"
    }
  ],
},

{
  title: "Interactive Tool for Linking Smartphone Logs and Screen Video",
  role: "Research Contributor",
  when: "Sep 2021 - Feb 2022",
  org: "", // 공동연구/논문 성격이라 org는 비워두거나 Lab 이름 넣을 수도 있음
  brief: [
    "Contributed to a preliminary user study evaluating the benefits of linked navigation",
  ],
  image: "/files/project/lee2022lvlinker.png", // 스크린샷 있으면, 없으면 제거
  tags: [
    "📱 Mobile Interaction",
    "🧑‍💻 UI/UX Research",
    "🖥️ Data Visualization",
    "🔗 Log-Video Synchronization"
  ],
},

{
  title: "Accessible Art Exploration System for People with Visual Impairments",
  role: "System Prototype Development",
  when: "2018 May - 2019 May",
  brief: [
    "Developed a touchscreen-based web system prototype that enables people with visual impairments to explore 2D artworks independently",
    "Implemented object-level information (e.g., name, color, position, shape, size)",
  ],
  image: "/files/project/accessart_prototype.png", // 샘플 이미지 (없으면 제거 가능)
  tags: [
    "🎨 Accessibility",
    "🖼️ Art & Culture",
    "🌐 Web System",
    "🧑‍🦯 Visual Impairments",
    "🧑‍💻 Human-Centered Computing"
  ],
}


];