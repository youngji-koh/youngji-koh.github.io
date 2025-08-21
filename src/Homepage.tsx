import React from "react";
import { profile } from "./data/profile";
import { news, type NewsItem } from "./data/news";
import { publications, type Publication, venueColor } from "./data/publications";
import { projects } from "./data/projects";


// === Quick Notes ===
// - Single-file React component with Tailwind CSS classes.
// - Change ACCENT and ACCENT_SOFT to switch highlight colors.
// - Replace placeholders (e.g., Google Scholar URL) with your actual links.
// - Drop this file into src/ (e.g., src/Portfolio.tsx) and render it in main.tsx/App.tsx.

const ACCENT = "#2563eb"; // violet-600
const ACCENT_SOFT = "#dbeafe"; // violet-50

const ACCENT2 = "#0ea5e9";      // 키워드(초록)
const ACCENT2_SOFT = "#e0f2fe";

// 파일 상단 근처에 추가
const Icon = {
  Mail: (p:any) => (
    <svg viewBox="0 0 24 24" width="18" height="18" {...p}>
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2
      2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
    </svg>
  ),
  GitHub: (p:any) => (
    <svg viewBox="0 0 24 24" width="18" height="18" {...p}>
      <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58
      0-1.4-.02-2.53-.02-2.87-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74
      1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96
      0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23
      .66 1.65.24 2.87.12 3.17.77.85 1.24 1.92 1.24 3.24 0 4.63-2.8 5.66-5.48 5.96.45.39.84 1.14.84 2.3
      0 1.65-.02 2.97-.02 3.36 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  ),
  Scholar: (p:any) => (
    <svg viewBox="0 0 24 24" width="18" height="18" {...p}>
      <path fill="currentColor" d="M12 3 2 9l10 6 10-6-10-6Zm-6 12v2h6v-2H6Zm0 4v2h10v-2H6Z"/>
    </svg>
  ),
  File: (p:any) => (
    <svg viewBox="0 0 24 24" width="18" height="18" {...p}>
      <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2
      2 0 0 0 2-2V8l-6-6Zm1 7H8V7h7v2Z"/>
    </svg>
  ),
};

const LinkBtn = ({ href, children, IconComp }:{
  href:string; children:React.ReactNode; IconComp:any;
}) => (
  <a
    href={href}
    target={href.startsWith("mailto:") ? undefined : "_blank"}
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full px-4 py-2 border text-sm font-medium hover:shadow"
    style={{ borderColor: ACCENT, color: ACCENT, background: ACCENT_SOFT }}
  >
    <IconComp />
    {children}
  </a>
);

const interestIcons: Record<string, string> = {
  "IoT": "📡",
  "Wearable": "⌚",
  "Ubiquitous Computing": "🌐",
  "Mental Health": "🧠",
  "LLM": "🤖",
  "Comorbidity": "🔬",
  "Data Visualization": "📊",
  "Human-Centered Computing": "👩‍💻",  
  "Multimodal Sensing": "🔬",            
  "Mental Health & Wellbeing": "🧠",     
  "Digital Health": "💊",               
};


// ---------- UI COMPONENTS ----------
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 md:py-16">
      <h2
        className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold tracking-tight"
        style={{ color: ACCENT }}
      >
        <span className="inline-block w-2 h-6 rounded-full" style={{ background: ACCENT }} />
        {title}
      </h2>
      <div className="mt-6 md:mt-8">{children}</div>
    </section>
  );
}

function Badge({ code }: { code: string }) {
  const cls = venueColor[code] ?? "bg-gray-100 text-gray-700 border-gray-200";
  return <span className={`px-2 py-1 rounded-full text-xs border ${cls}`}>{code}</span>;
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6 bg-white hover:shadow-md transition-shadow">
      {children}
    </div>
  );
}

function AnchorLink({ href, children }: any) {
  return (
    <a href={href} className="hover:opacity-90" onClick={(e) => {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}>
      {children}
    </a>
  );
}



// ---------- MAIN PAGE ----------
export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 rounded-full" style={{ background: ACCENT }} />
            <span className="font-semibold tracking-tight">{profile.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <AnchorLink href="#about">About</AnchorLink>
            <AnchorLink href="#publications">Publications</AnchorLink>
            <AnchorLink href="#projects">Projects</AnchorLink>
            {/* <a href={profile.cvUrl} className="font-medium" target="_blank" rel="noreferrer">CV</a> */}
          </div>
        </nav>
      </header>

    {/* Hero / Intro */}
    <section className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16">
      <div className="grid md:grid-cols-3 gap-8 items-start">

        {/* 왼쪽 2칸: 아바타 + 텍스트 */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-6">
            {/* 프로필 아바타 */}
            <img
            src={process.env.PUBLIC_URL + "/profile.jpg"}
            alt="Youngji Koh"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover object-left shadow-lg"
            />

            {/* 인사말 + 소개 */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Hi, I’m <span style={{ color: ACCENT }}>Youngji!💫 </span>
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                PhD Candidate in the{" "}
                <a
                  href={profile.labUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-90"
                  style={{ color: "#2563eb" }}
                >
                  {profile.labName}
                </a>
                {" @KAIST."} <br />
                I am interested in designing digital health technologies to support mental wellbeing 
                through multimodal sensing & human-centered AI.
              </p>
            </div>
          </div>

          {/* 링크 버튼들 */}
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkBtn href={`mailto:${profile.email}`} IconComp={Icon.Mail}>Email</LinkBtn>
            <LinkBtn href={profile.github} IconComp={Icon.GitHub}>GitHub</LinkBtn>
            <LinkBtn href={profile.scholar} IconComp={Icon.Scholar}>Google Scholar</LinkBtn>
            <LinkBtn
              href={`#/viewer?url=${encodeURIComponent(profile.cvUrl)}&title=${encodeURIComponent("CV")}`}
              IconComp={Icon.File}
            >
              Download CV
            </LinkBtn>
          </div>

          {/* 관심사 */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">🔎 Research Interests</h4>
            <div className="flex flex-wrap">
              {profile.interests.map((it) => (
                <span
                  key={it}
                  className="inline-flex items-center rounded-full px-3 py-1 text-sm mr-2 mb-2 border"
                  style={{ background: ACCENT2_SOFT, borderColor: ACCENT2, color: ACCENT2 }}
                >
                  <span className="mr-1">{interestIcons[it] ?? "✨"}</span>
                  {it}
                </span>
              ))}
            </div>
          </div>
        </div> 

        {/* 오른쪽 1칸: Education */}
        <div className="md:col-span-1">
          <Card>
            <h3 className="font-semibold">Education</h3>
            <ul className="mt-3 space-y-3">
              {profile.education.map((e, i) => (
                <li key={i} className="text-sm">
                  <div className="font-medium">{e.degree}</div>
                  <div className="text-gray-600">{e.org}</div>
                  <div className="text-gray-500">{e.span}</div>
                  {e.note && <div className="text-gray-500">{e.note}</div>}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>

      <main className="max-w-6xl mx-auto px-4 md:px-6">
       {/* About */}
        <Section id="about" title="About">
          <Card>
            <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
              <p>
                I’m a Ph.D. candidate in the Interactive Computing Lab at KAIST. My research
                investigates human-centered, sensor-driven systems that support mental
                wellbeing. I design and evaluate digital health technologies that combine
                in the wild multimodal sensing using wearables, smartphones, and home IoT
                together with human-centered AI.
              </p>

              <p>
                Broadly, I aim to (1) model daily routines and mental states from ambient,
                longitudinal signals, (2) enable self-reflection and early risk detection,
                and (3) deliver <em>comorbidity-aware</em> interventions. I run field deployments to 
                study real-world use, informed by clinical perspectives, while paying particular 
                attention to privacy, transparency, and responsible ML.
              </p>

              <div>
                <div className="font-medium text-gray-800 mb-1">Current directions</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Multimodal sensing in the home:</strong> modeling routines, mood,
                    and context from wearables, smartphones, and IoT devices.
                  </li>
                  <li>
                    <strong>Personal informatics & visualization:</strong> interfaces that
                    help people interpret their data and act on insights.
                  </li>
                  <li>
                    <strong>LLM-based mental health care agents:</strong> LLM-based clinical agents to support 
                    mental health assessments and interventions.
                  </li>
                </ul>
              </div>

              {/* <p className="text-gray-600">
                My recent work has appeared in venues such as CHI, IMWUT/UbiComp, and CSCW.
              </p> */}
            </div>
            
          </Card>
        </Section>

        
       {/* News */}
       <Section id="news" title="Recent News">
        <div className="space-y-4">
          {news.map((item: NewsItem, idx) => (
            <div key={idx} className="flex items-start">
              {/* 날짜 (Aug 2025 형식) */}
              <div className="w-20 text-sm text-gray-500">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </div>

              {/* 본문 */}
              <div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="font-medium">{item.title}</span>
                )}
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
              ))}
          </div>
        </Section>



        {/* Publications */}
        <Section id="publications" title="Selected Publications">
          <div className="space-y-4">
            {publications.map((p: Publication, i: number) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                {/* ── 상단 메타 라인: 배지 + 연도/타입 */}
                <div className="flex flex-wrap items-center gap-3">
                  <Badge code={p.code} />
                  <div className="text-[13px] uppercase tracking-wide text-gray-500">{p.type}</div>
                  {/* <div className="ml-auto text-sm text-gray-500">{p.year}</div> */}
                </div>

                {/* 제목 (링크 가능) */}
                <div className="font-semibold mt-2">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </div>

                {/* 리소스 버튼 영역 */}
                <div className="mt-1 mb-2 flex flex-wrap items-center gap-1.5">
                  {/* PDF 버튼 - Sky tone */}
                  {p.pdf && (
                    <a
                      href={`#/viewer?url=${encodeURIComponent(p.pdf)}&title=${encodeURIComponent(p.title + " PDF")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-sky-300 bg-sky-50 px-2.5 py-0.5
                                text-xs font-medium text-sky-700 hover:bg-sky-100 transition"
                    >
                      PDF
                    </a>
                  )}

                  {/* Slides 버튼 - Indigo tone */}
                  {p.slides && (
                    <a
                      href={`#/viewer?url=${encodeURIComponent(p.slides)}&title=${encodeURIComponent(p.title + " Slides")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-indigo-300 bg-indigo-50 px-2.5 py-0.5
                                text-xs font-medium text-indigo-700 hover:bg-indigo-100 transition"
                    >
                      Slides
                    </a>
                  )}
                </div>


                {/* 저자 / 메타 */}
                <div className="text-sm text-gray-600">
                  {p.authors.map((author, idx) => {
                    // * 제거 + 소문자로 변환
                    const clean = author.replace(/\*/g, "").toLowerCase();

                    // 내가 체크할 이름들
                    const myNames = ["youngji koh", "young-ji koh"];

                    const isMe = myNames.includes(clean);

                    return (
                      <span key={idx}>
                        {isMe ? (
                          <span className="font-semibold text-sky-500">{author}</span>
                        ) : (
                          author
                        )}
                        {idx < p.authors.length - 1 && <span>, </span>}
                      </span>
                    );
                  })}

                  {/* 특정 논문일 때만 equal contribution 붙이기 */}
                  {p.title.includes("Exploring Context-Aware Mental Health") && (
                    <span className="ml-1 text-gray-500">(* equal contribution)</span>
                  )}
                </div>

              <div className="text-sm text-gray-500 mt-1">{p.meta}</div>
              </div>
            ))}
          </div>
        </Section>




        {/* Projects */}
        <Section id="projects" title="Research Projects">
          <div className="flex flex-col gap-8">
            {projects.map((prj, i) => (
  <div
    key={i}
    className="group relative rounded-2xl bg-white shadow-lg hover:shadow-xl transition overflow-hidden"
  >
    <div className="p-4 md:p-6 md:grid md:grid-cols-12 md:gap-6 items-stretch">
      {/* 왼쪽 썸네일 */}
      <div className="md:col-span-5">
        {prj.image ? (
          <div className="relative w-full aspect-[4/3] rounded-xl border border-gray-200 bg-white/70 overflow-hidden">
            <img
              src={prj.image}
              alt={prj.title}
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-6xl opacity-80 select-none">{prj.thumb}</span>
          </div>
        )}
      </div>

      {/* 오른쪽 내용 */}
      <div className="md:col-span-7 flex flex-col min-w-0">
        {/* 상단 메타 정보 */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: ACCENT, color: "#fff" }}
          >
            {prj.role}
          </span>
          <span className="text-gray-500">{prj.when}</span>
          {prj.org && (
            <>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{prj.org}</span>
            </>
          )}
        </div>

        {/* 제목 */}
        <h3 className="mt-2 text-xl md:text-2xl font-semibold leading-snug text-gray-900">
          {prj.title}
        </h3>

        {/* 불릿 설명: brief가 배열이라고 가정 */}
        {Array.isArray(prj.brief) ? (
          <ul className="mt-3 list-disc pl-5 space-y-1 text-[15px] md:text-base text-gray-700">
            {prj.brief.map((line: string, idx: number) => (
              <li key={idx}>{line.replace(/^\*+/, "").trim()}</li>
            ))}
          </ul>
        ) : (
          // brief가 문자열인 경우(옵션)
          <ul className="mt-3 list-disc pl-5 space-y-1 text-[15px] md:text-base text-gray-700">
            {(prj.brief as string)
              .split("\n")
              .map((line, idx) =>
                line.trim() ? (
                  <li key={idx}>{line.replace(/^\*+/, "").trim()}</li>
                ) : null
              )}
          </ul>
        )}

        {/* Press Coverage */}
        {prj.news?.length ? (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-800">📰 Press Coverage</h4>
            <div className="mt-1 flex flex-wrap gap-2">
              {prj.news.map((n: any, idx: number) => (
                <a
                  key={idx}
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-red-300 bg-red-50 px-2.5 py-0.5
                            text-xs font-medium text-red-700 hover:bg-red-100 transition"
                >
                  {n.outlet}
                </a>
              ))}
            </div>
          </div>
        ) : null}
            {/* 태그: brief 바로 밑으로 붙도록 */}
            {prj.tags?.length ? (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-800">🔑 Keywords</h4>
                <div className="mt-1 flex flex-wrap gap-2">
                  {prj.tags.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs rounded-full px-2 py-0.5 border"
                      style={{
                        background: "#f9fafb",
                        borderColor: ACCENT,
                        color: ACCENT,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

      </div>
    </div>

    {/* 하단 포인트 바 */}
    <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: ACCENT }} />
  </div>
))}

          </div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 py-10 text-center text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div>
            © {new Date().getFullYear()} {profile.name}. Built with ❤️ and Tailwind.
          </div>
          <div className="mt-2">
            <a href={`mailto:${profile.email}`} className="underline underline-offset-2">{profile.email}</a>
            <span className="mx-2">·</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-2">GitHub</a>
            <span className="mx-2">·</span>
            <a href={profile.scholar} target="_blank" rel="noreferrer" className="underline underline-offset-2">Google Scholar</a>
          </div>
        </div>
      </footer>

      <style>{`
        html { scroll-behavior: smooth; }
        .btn-accent { border-color: ${ACCENT}; color: ${ACCENT}; background: ${ACCENT_SOFT}; }
        .marker-accent { background: linear-gradient(120deg, ${ACCENT_SOFT}, transparent 60%); }
      `}</style>
    </div>
  );
}
