import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [showRole, setShowRole] = useState(false);

  const texts = ["Antonio Claudio", "Desenvolvedor Full Stack"];
  const longestText = texts.reduce((longest, text) =>
    text.length > longest.length ? text : longest,
  );
  const currentText = texts[showRole ? 1 : 0];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    const type = () => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 100);
      } else {
        timeout = setTimeout(() => {
          setShowRole((prev) => !prev);
          setDisplayedText("");
        }, 3000);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [showRole, currentText]);

  return (
    <motion.header
      className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-slate-950  pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center order-1 lg:order-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Olá, eu sou</span>
              <br />
              <span className="relative inline-flex items-center min-h-20 sm:min-h-24 lg:min-h-32">
                <span className="invisible bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {longestText}
                </span>
                <span className="absolute inset-0 bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl"
            >
              Sou desenvolvedor full stack, graduado em Ciência da Computação
              pelo IFMA, com experiência sólida em React, Next.js, Python
              (FastAPI e Django), TypeScript, Firebase e SQL. Tenho foco em
              soluções escaláveis, performance, UX/UI e integração eficiente
              entre frontend e backend.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <a
                href="https://github.com/antonioclaudioofc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-emerald-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-emerald-400/50"
              >
                <FaGithub className="text-xl text-slate-300 hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/antonioclaudioofc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-emerald-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-emerald-400/50"
              >
                <FaLinkedin className="text-xl text-slate-300 hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href="https://wa.me/5598970256674?text=Oi%20Antonio%2C%20vim%20pelo%20seu%20portfolio%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-emerald-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-emerald-400/50"
              >
                <FaWhatsapp className="text-xl text-slate-300 hover:text-emerald-400 transition-colors" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                href="#about"
                className="inline-flex px-8 py-4 bg-linear-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Conhecer meu trabalho
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-blue-400 opacity-20 blur-3xl"
              />

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-400 via-blue-500 to-cyan-500 shadow-2xl flex items-center justify-center overflow-hidden border-2 border-slate-700/30"
              >
                <div className="w-64 lg:w-80 h-64 lg:h-80 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl lg:text-7xl mb-2 text-white">
                      AC
                    </div>
                    <p className="text-slate-400 text-sm">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-emerald-400"
          >
            <FaChevronDown className="text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
