import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import arenaManagerImg from "../assets/arena-manager.png";
import aniverlembreImg from "../assets/aniver-lembre.png";
import apiAudioForceImg from "../assets/audio-force.png";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  links?: { label: string; href: string }[];
};

const techStyles: Record<string, string> = {
  React: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  TypeScript: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  JavaScript: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Python: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Django: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  FastAPI: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Postgres: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  Prisma: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "yt-dlp": "bg-slate-500/15 text-slate-300 border-slate-500/30",
  FFmpeg: "bg-rose-500/15 text-rose-300 border-rose-500/30",
};

const getTechClass = (tech: string) =>
  techStyles[tech] ?? "bg-slate-500/15 text-slate-300 border-slate-500/30";

const projects: Project[] = [
  {
    title: "Arena Manager",
    subtitle: "Frontend + Backend",
    description:
      "Sistema de gerenciamento de arenas dividido em duas aplicações: frontend para gestão/UX e backend para API, autenticação e regras de negócio.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "Postgres"],
    image: arenaManagerImg,
    imageAlt: "Tela do Arena Manager",
    links: [
      {
        label: "Repo - Backend",
        href: "https://github.com/antonioclaudioofc/api_arena_manager",
      },
      {
        label: "Repo - Frontend",
        href: "https://github.com/antonioclaudioofc/arena_manager",
      },
      { label: "Demo", href: "https://arena-manager-azure.vercel.app/" },
    ],
  },
  {
    title: "Aniverlembre",
    subtitle: "Django",
    description:
      "Aplicação em Django para gerenciar lembretes de aniversários. ",
    tech: ["Python", "Django", "JavaScript", "Postgres"],
    image: aniverlembreImg,
    imageAlt: "Tela do Aniverlembre",
    links: [
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/aniver_lembre_replace",
      },
      { label: "Demo", href: "https://aniver-lembre.onrender.com/" },
    ],
  },
  {
    title: "API Audio Force",
    subtitle: "FastAPI",
    description:
      "Microserviço em Python + FastAPI que baixa vídeos do YouTube e converte para MP3 para transferência/uso offline.",
    tech: ["Python", "FastAPI", "yt-dlp", "FFmpeg"],
    image: apiAudioForceImg,
    imageAlt: "Tela da API Audio Force",
    links: [
      {
        label: "Repo",
        href: "https://github.com/antonioclaudioofc/api_audio_force",
      },
      {
        label: "Demo",
        href: "https://api-audio-force.vercel.app/docs",
      },
    ],
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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projetos
          </h2>
          <p className="mt-3 text-slate-300">
            Projetos mais recentes com foco em UI e performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-700/60 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-900/40 transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
            >
              <div className="w-full aspect-video bg-linear-to-br from-slate-900 via-slate-800 to-slate-700">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  className="w-full h-full object-center "
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                    {p.subtitle && (
                      <p className="text-sm text-cyan-300 mt-1">{p.subtitle}</p>
                    )}
                  </div>

                  <span className="text-xs px-2 py-1 bg-slate-800/80 rounded text-slate-200">
                    {p.tech[0]}
                  </span>
                </div>

                <p className="mt-4 text-slate-300 text-sm leading-6">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-1 rounded border ${getTechClass(
                        t,
                      )}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.links && (
                  <div className="mt-6 flex flex-wrap gap-3 items-center">
                    {p.links.map((l) => {
                      const isRepo = l.label.toLowerCase().includes("repo");
                      const isDemo = l.label.toLowerCase().includes("demo");

                      return (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm px-3 py-2 bg-slate-900/40 hover:bg-slate-600/60 text-white rounded-md transition-colors"
                        >
                          {isRepo && <FaGithub />}

                          {isDemo && <FaEarthAmericas className="text-green-700" />}

                          <span>{l.label}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
