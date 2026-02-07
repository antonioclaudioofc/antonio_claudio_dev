import { motion } from "motion/react";

export function Skills() {
  const skills = [
    "APIs REST",
    "Python",
    "Django",
    "FastAPI",
    "Node.js",
    "Banco de Dados (Postgres, MySQL)",
    "Docker & CI/CD",
    "Arquitetura de microserviços",
    "Cloud (AWS/GCP)",
  ];

  return (
    <motion.section
      id="skills"
      className="w-full py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="text-3xl font-bold text-white mb-6">
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              className="px-4 py-3 bg-slate-800/60 rounded-lg border border-cyan-500/10 text-slate-100 text-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
