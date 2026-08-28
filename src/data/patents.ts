export type Patent = {
  title: string;
  inventors: string[];
  region: "US" | "KR";
  status: "Granted" | "Published";
  meta: string;   // application / publication numbers and dates
  year: number;
};

export const patents: Patent[] = [
  {
    title:
      "Human Digital Twinning Method and System of Emotional Regulation for Emotional Labor in Workplaces Using Multi-Modal Sensor Data",
    inventors: ["Uichin Lee", "Duri Lee", "Eunji Park", "Youngji Koh", "Yunjo Hahn"],
    region: "US",
    status: "Published",
    meta: "U.S. Application No. 18/212,435 (filed Jun 2023) • Pub. No. US20240202623A1 (Jun 2024) • KR counterpart: 10-2024-0092527",
    year: 2024,
  },
  {
    title:
      "Apparatus for Collecting User's Experience According to the Situation and Method for Controlling Thereof",
    inventors: ["Junhyung Kwon", "Youngji Koh", "Jieun Lim", "Uichin Lee"],
    region: "KR",
    status: "Published",
    meta: "KR Application No. 10-2023-0060070 (filed May 2023) • Pub. No. 10-2024-0162897 (Nov 2024)",
    year: 2024,
  },
  {
    title: "System and Method for Providing Shortest Evacuation Route",
    inventors: ["Sangsoo Park", "Naeun Go", "Youngji Koh", "Chaeyoon Kim", "Soohee Lee"],
    region: "KR",
    status: "Granted",
    meta: "KR Application No. 10-2018-0162774 (filed Dec 2018) • Patent No. 10-2121672 (granted Jun 2020)",
    year: 2020,
  },
];
