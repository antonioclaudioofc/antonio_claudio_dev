import { motion } from "motion/react";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Arena Manager",
    subtitle: "Frontend + Backend",
    description:
      "Sistema de gerenciamento de arenas dividido em duas aplicações: frontend para gestão/UX e backend para API, autenticação e regras de negócio.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Postgres"],
    links: [
      {
        label: "Repo - Backend",
        href: "https://github.com/usuario/arena-manager-backend",
      },
      {
        label: "Repo - Frontend",
        href: "https://github.com/usuario/arena-manager-frontend",
      },
      { label: "Demo", href: "https://arena-manager.example.com" },
    ],
  },
  {
    title: "Aniverlembre",
    subtitle: "Django",
    description:
      "Aplicação em Django para gerenciar lembretes de aniversários, envio de notificações e integração com serviços de email.",
    tech: ["Python", "Django", "Celery", "Postgres"],
    links: [
      { label: "Repo", href: "https://github.com/usuario/aniverlembre" },
      { label: "Demo", href: "https://aniverlembre.example.com" },
    ],
  },
  {
    title: "YouTube to MP3",
    description:
      "Microserviço em Python + FastAPI que baixa vídeos do YouTube e converte para MP3 para transferência/uso offline.",
    tech: ["Python", "FastAPI", "yt-dlp", "FFmpeg"],
    links: [{ label: "Repo", href: "https://github.com/usuario/ytdl-to-mp3" }],
  },
];

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="w-full py-20 px-4 bg-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Projetos</h2>

        <div className="grid gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="p-6 rounded-lg bg-gradient-to-r from-slate-900/30 to-slate-800 border border-cyan-500/10 hover:shadow-lg hover:shadow-cyan-800/30 transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
            >
              <div className="md:flex md:items-start md:gap-6">
                {/* Mockup image */}
                <div className="w-full md:w-48 lg:w-56 h-40 rounded-lg overflow-hidden bg-gradient-to-br from-emerald-500 to-cyan-500 flex-shrink-0 shadow-inner">
                  <div className="w-full h-full bg-[linear-gradient(135deg,#ffffff10,transparent)] flex items-center justify-center">
                    <div className="w-24 h-12 bg-white/10 rounded-md" />
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {p.title}
                      </h3>
                      {p.subtitle && (
                        <p className="text-sm text-cyan-300 mt-1">
                          {p.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="hidden sm:flex gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 bg-slate-700/50 rounded text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-slate-300">{p.description}</p>

                  {p.links && (
                    <div className="mt-4 flex flex-wrap gap-3 items-center">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm px-3 py-2 bg-slate-900/40 hover:bg-slate-900/60 text-white rounded-md transition-colors"
                        >
                          {/* simple lucide-like icons inline */}
                          {l.label.toLowerCase().includes("repo") && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 10.5 18.1V22"></path>
                            </svg>
                          )}

                          {l.label.toLowerCase().includes("demo") ||
                            (l.label.toLowerCase().includes("demo") && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-external-link"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            ))}

                          <span>{l.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
