import React from "react";
import { profile } from "./data/profile";
import { news, type NewsItem } from "./data/news";
import { publications, type Publication } from "./data/publications";
import { projects } from "./data/projects";

// === Design notes ===
// Two-column layout: a left sidebar (photo, contact, interests, education)
// beside a main column (news, publications, projects). The palette is white /
// grey / charcoal with a single bronze accent. Content lives in
// src/data/*; this file only handles layout & styling.

// The page's single accent: bio links, section markers, and small flourishes.
const ACCENT = "#8a5a2b";

// ---------- Inline icons (monochrome, inherit text color) ----------
const Icon = {
  Mail: (p: any) => (
    <svg viewBox="0 0 24 24" width="15" height="15" {...p}>
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
    </svg>
  ),
  GitHub: (p: any) => (
    <svg viewBox="0 0 24 24" width="15" height="15" {...p}>
      <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-1.4-.02-2.53-.02-2.87-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.92 1.24 3.24 0 4.63-2.8 5.66-5.48 5.96.45.39.84 1.14.84 2.3 0 1.65-.02 2.97-.02 3.36 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  ),
  Scholar: (p: any) => (
    <svg viewBox="0 0 24 24" width="15" height="15" {...p}>
      <path fill="currentColor" d="M12 3 2 9l10 6 10-6-10-6Zm-6 12v2h6v-2H6Zm0 4v2h10v-2H6Z" />
    </svg>
  ),
  File: (p: any) => (
    <svg viewBox="0 0 24 24" width="15" height="15" {...p}>
      <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1 7H8V7h7v2Z" />
    </svg>
  ),
};

// ---------- Reusable bits ----------
const SideLink = ({ href, IconComp, children }: { href: string; IconComp: any; children: React.ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("mailto:") || href.startsWith("#") ? undefined : "_blank"}
    rel="noreferrer"
    className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900"
  >
    <IconComp />
    {children}
  </a>
);

const SideHead = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-3 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
    <span>{children}</span>
    <span className="h-px flex-1 bg-neutral-200" />
  </h2>
);

const Chip = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  const cls =
    "inline-flex items-center whitespace-nowrap rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-600 transition-colors hover:border-neutral-500 hover:text-neutral-900";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>
  ) : (
    <span className={cls}>{children}</span>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="transition-colors hover:text-neutral-900"
    onClick={(e) => {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}
  >
    {children}
  </a>
);

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-neutral-200 pt-9 first:border-0 first:pt-0">
      <h2 className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.18em] text-neutral-800">
        <span className="h-3.5 w-[3px] rounded-full" style={{ background: ACCENT }} />
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

const accentLink =
  "underline decoration-[#8a5a2b]/30 underline-offset-2 transition-colors hover:decoration-[#8a5a2b]";

// Display label overrides for venue tags (IMWUT papers appear at UbiComp).
const venueLabel: Record<string, string> = { IMWUT: "UbiComp" };

// Venue tags stay monochrome so they sit quietly against the rest of the page;
// the venue name itself carries the distinction.
const venueTagStyle = "bg-neutral-100 text-neutral-700 border-neutral-200";

// ---------- MAIN PAGE ----------
export default function PortfolioSite() {
  const [showAllNews, setShowAllNews] = React.useState(false);
  const NEWS_PREVIEW = 3;
  const visibleNews = showAllNews ? news : news.slice(0, NEWS_PREVIEW);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-end gap-4 px-6 py-3.5">
          <div className="flex items-center gap-5 text-sm text-neutral-500">
            <NavLink href="#news">News</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </div>
        </nav>
      </header>

      <div id="top" className="mx-auto max-w-5xl px-6 py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-[15rem_1fr] md:gap-12 lg:gap-14">
          {/* ---------------- Sidebar ---------------- */}
          <aside className="space-y-7 self-start md:border-r md:border-neutral-200 md:pr-10">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <img
                src={process.env.PUBLIC_URL + "/profile.jpg"}
                alt={profile.name}
                className="h-28 w-28 rounded-full object-cover object-left ring-1 ring-neutral-200"
              />
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900">{profile.name}</h1>
              <span className="mt-2 block h-px w-10 self-center md:self-start" style={{ background: ACCENT }} />
              <p className="mt-2.5 text-sm leading-snug text-neutral-500">
                Postdoctoral Researcher
                <br />
                University of Tokyo, IIS Lab
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm md:items-start">
              <SideLink href={`mailto:${profile.email}`} IconComp={Icon.Mail}>Email</SideLink>
              <SideLink href={profile.github} IconComp={Icon.GitHub}>GitHub</SideLink>
              <SideLink href={profile.scholar} IconComp={Icon.Scholar}>Google Scholar</SideLink>
              <SideLink
                href={`#/viewer?url=${encodeURIComponent(profile.cvUrl)}&title=${encodeURIComponent("CV")}`}
                IconComp={Icon.File}
              >
                CV
              </SideLink>
            </div>

            <div>
              <SideHead>Interests</SideHead>
              <div className="flex flex-wrap gap-1.5">
                {profile.interests.map((it) => (
                  <Chip key={it}>{it}</Chip>
                ))}
              </div>
            </div>

            <div>
              <SideHead>Education</SideHead>
              <ul className="space-y-3 text-sm">
                {profile.education.map((e, i) => (
                  <li key={i}>
                    <div className="font-medium leading-snug text-neutral-900">{e.degree}</div>
                    <div className="text-neutral-600">{e.org}</div>
                    <div className="text-neutral-500">{e.span}</div>
                    {e.note && <div className="text-neutral-500">{e.note}</div>}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ---------------- Main column ---------------- */}
          <main className="min-w-0">
            {/* Bio */}
            <p className="text-[15px] leading-relaxed text-neutral-700">
              I&rsquo;m a postdoctoral researcher at the University of Tokyo&rsquo;s{" "}
              <a href="https://iis-lab.org/" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }} className={`font-medium ${accentLink}`}>IIS Lab</a>,
              working with Prof. Koji Yatani, and recently completed my Ph.D. at KAIST&rsquo;s{" "}
              <a href={profile.labUrl} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }} className={`font-medium ${accentLink}`}>Interactive Computing Lab</a>{" "}
              under Prof. Uichin Lee. My research combines multimodal sensing and human-centered
              AI to support mental health and wellbeing, and I&rsquo;m now exploring human-AI
              interaction and agentic, multi-agent systems for mental healthcare.
            </p>

            <div className="mt-10 space-y-9">
              {/* News */}
              <Section id="news" title="Latest News">
                <ul className={`space-y-4 ${showAllNews ? "max-h-96 overflow-y-auto pr-2" : ""}`}>
                  {visibleNews.map((item: NewsItem, idx) => (
                    <li key={idx} className="flex flex-col gap-1 sm:flex-row sm:gap-5">
                      <div className="flex-none text-sm font-medium sm:w-20" style={{ color: ACCENT, opacity: 0.75 }}>
                        {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                      </div>
                      <div>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-600">
                            {item.title}
                          </a>
                        ) : (
                          <span className="font-medium text-neutral-900">{item.title}</span>
                        )}
                        <p className="whitespace-pre-line text-sm text-neutral-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {news.length > NEWS_PREVIEW && (
                  <button
                    type="button"
                    onClick={() => setShowAllNews((v) => !v)}
                    className="mt-5 text-sm font-medium text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
                  >
                    {showAllNews ? "Show less" : `Show all (${news.length})`}
                  </button>
                )}
              </Section>

              {/* Publications */}
              <Section id="publications" title="Selected Publications">
                <ul className="space-y-6">
                  {publications.map((p: Publication, i: number) => (
                    <li key={i}>
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-neutral-500">
                        <span className={`rounded-full border px-2 py-0.5 font-medium ${venueTagStyle}`}>{venueLabel[p.code] ?? p.code}</span>
                        <span>{p.type}</span>
                      </div>

                      <div className="mt-1.5 font-medium leading-snug text-neutral-900">
                        {p.href ? (
                          <a href={p.href} target="_blank" rel="noreferrer" className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-600">
                            {p.title}
                          </a>
                        ) : (
                          p.title
                        )}
                      </div>

                      <div className="mt-1 text-sm text-neutral-600">
                        {p.authors.map((author, idx) => {
                          const clean = author.replace(/\*/g, "").toLowerCase();
                          const isMe = ["youngji koh", "young-ji koh"].includes(clean);
                          return (
                            <span key={idx}>
                              {isMe ? <span className="font-semibold text-neutral-900">{author}</span> : author}
                              {idx < p.authors.length - 1 && <span>, </span>}
                            </span>
                          );
                        })}
                        {p.authors.some((author) => author.includes("*")) && (
                          <span className="ml-1 text-neutral-400">(* equal contribution)</span>
                        )}
                      </div>

                      <div className="mt-1 text-sm text-neutral-500">{p.meta}</div>

                      {(p.pdf || p.slides) && (
                        <div className="mt-2 flex flex-wrap items-center gap-1.5">
                          {p.pdf && (
                            <Chip href={`#/viewer?url=${encodeURIComponent(p.pdf)}&title=${encodeURIComponent(p.title + " PDF")}`}>PDF</Chip>
                          )}
                          {p.slides && (
                            <Chip href={`#/viewer?url=${encodeURIComponent(p.slides)}&title=${encodeURIComponent(p.title + " Slides")}`}>Slides</Chip>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Projects */}
              <Section id="projects" title="Research Projects">
                <div className="space-y-9">
                  {projects.map((prj, i) => (
                    <article key={i}>
                      <h3 className="text-lg font-semibold leading-snug text-neutral-900">{prj.title}</h3>

                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500">
                        <span className="font-medium text-neutral-700">{prj.role}</span>
                        <span className="text-neutral-300">&middot;</span>
                        <span>{prj.when}</span>
                        {prj.org && (
                          <>
                            <span className="text-neutral-300">&middot;</span>
                            <span>{prj.org}</span>
                          </>
                        )}
                      </div>

                      {prj.image ? (
                        <div className="mt-3 overflow-hidden rounded-lg border border-neutral-200">
                          <img src={prj.image} alt={prj.title} className="max-h-64 w-full object-contain" loading="lazy" />
                        </div>
                      ) : prj.thumb ? (
                        <div className="mt-3 flex aspect-[16/6] w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
                          <span className="select-none text-4xl opacity-70 grayscale">{prj.thumb}</span>
                        </div>
                      ) : null}

                      {Array.isArray(prj.brief) ? (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-neutral-700">
                          {prj.brief.map((line: string, idx: number) => (
                            <li key={idx}>{line.replace(/^\*+/, "").trim()}</li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-neutral-700">
                          {(prj.brief as string).split("\n").map((line, idx) =>
                            line.trim() ? <li key={idx}>{line.replace(/^\*+/, "").trim()}</li> : null
                          )}
                        </ul>
                      )}

                      {prj.news?.length ? (
                        <div className="mt-3">
                          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Press Coverage</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {prj.news.map((n: any, idx: number) => (
                              <Chip key={idx} href={n.url}>{n.outlet}</Chip>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {prj.tags?.length ? (
                        <div className="mt-3">
                          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Keywords</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {prj.tags.map((t: string) => (
                              <Chip key={t}>{t}</Chip>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </Section>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-14 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
          <div>&copy; {new Date().getFullYear()} {profile.name}</div>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            <a href={`mailto:${profile.email}`} className="underline decoration-neutral-300 underline-offset-2 hover:text-neutral-900">{profile.email}</a>
            <span className="text-neutral-300">&middot;</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline decoration-neutral-300 underline-offset-2 hover:text-neutral-900">GitHub</a>
            <span className="text-neutral-300">&middot;</span>
            <a href={profile.scholar} target="_blank" rel="noreferrer" className="underline decoration-neutral-300 underline-offset-2 hover:text-neutral-900">Google Scholar</a>
          </div>
        </footer>
      </div>

      <style>{`html { scroll-behavior: smooth; }`}</style>
    </div>
  );
}
