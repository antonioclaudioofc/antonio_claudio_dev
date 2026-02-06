import { motion } from "motion/react";

export function About() {
  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-16 pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <motion.div
              className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-400 via-blue-500 to-cyan-500 shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl  from-transparent to-white opacity-20"
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Olá, sou{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Desenvolvedor Backend
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Apaixonado por criar soluções robustas, escaláveis e eficientes no
            backend. Especializado em construir arquiteturas sólidas que
            suportam grandes volumes de dados e garantem performance e segurança
            nas operações.
          </motion.p>

          <motion.p
            className="text-base text-slate-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Com experiência em desenvolvimento de APIs, gerenciamento de banco
            de dados, microserviços e infraestrutura em nuvem. Sempre em busca
            de aprender e aplicar as melhores práticas da indústria.
          </motion.p>

          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
            </motion.button>

            <motion.button
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-lg hover:border-emerald-400 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-400/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contato
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
