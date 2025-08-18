export type Project = {
  title: string;
  role: string;
  when: string;
  brief: string[];
  thumb?: string; // 이모지/간단 텍스트
  image?: string;
  org?: string;   // optional (없어도 오류 안남)
  tags?: string[]; // optional (없어도 오류 안남)
};

// Projects (compact summaries + role)
export const projects: Project[] = [
  {
    title:
      "Development of an Early Prediction System for Complex Diseases and the Expansion of Telemedicine",
    role: "Project Manager",
    when: "Jun 2025 – Dec 2025",
    org: "Institute for ICT Planning & Evaluation (IITP)",
    brief:
      ["Designed a comorbidity-aware framework that coordinates disorder-specific agents for diagnosis and intervention planning."],
    // thumb: "🧠",
    image: "/files/columbus.png",
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
    title:
      "Proactive Mental Health Prediction and Management in the Smart Home using Multimodal Sensing",
    role: "Project Manager",
    when: "Sep 2021 – Oct 2024",
    org: "LG Electronics",
    brief: [
      "Developed multimodal smart speaker for in-home monitoring",
      "Led in-the-wild data collection and design of personal informatics system",
      "Developed detection models for depression and anxiety",
    ],

    image: "/files/Frame 91.png",
    // thumb: "🏠",  // 이미지 대신 이모지를 쓰려면 image 빼고 thumb 사용
    tags: [
      "🧑‍💻 Human-Centered Computing",
      "🔬 Multimodal Sensing",
      "💊 Digital Health",
      "📊 Data Visualization",
      "🧠 Mental Health & Wellbeing",
      "🌐 Ubiquitous Computing"
    ],
  },

];