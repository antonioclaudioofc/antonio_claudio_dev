import { motion } from "motion/react";

export function About() {
  return (
    <motion.section
      className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 px-4 sm:px-6 lg:px-8 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Sobre Mim
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-6">
              Tenho experiência na construção de sistemas completos, desde o
              backend com Django, FastAPI e Flask até o frontend utilizando
              React, Next.js, TypeScript e TailwindCSS, sempre aplicando boas
              práticas, Clean Code e princípios de arquitetura de software.
            </p>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Busco desenvolver soluções escaláveis, seguras e eficientes, com
              forte atenção à organização, performance e experiência do usuário.
            </p>

            <div className="mt-8">
              <a
                href="/Antonio Claudio Teixeira Alves.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/90 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-colors"
              >
                Baixar CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-full h-80 rounded-2xl bg-linear-to-br from-emerald-400 via-cyan-400 to-blue-500 shadow-2xl overflow-hidden">
                <motion.div
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="w-full h-full bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center opacity-90"
                >
                  <div className="text-center">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 mb-4">
                      AC
                    </div>
                    <p className="text-slate-300 text-lg font-semibold">
                      Antonio Claudio
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-2xl -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
