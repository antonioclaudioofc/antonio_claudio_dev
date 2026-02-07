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
          className="flex justify-center md:justify-start relative"
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

          <div className="hidden md:flex flex-col gap-3 absolute right-full mr-4 top-1/2 -translate-y-1/2">
            <motion.a
              href="https://linkedin.com/in/usuario"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/60 hover:bg-emerald-500/20 transition-colors"
              whileHover={{ scale: 1.06 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-100"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.84-1.75-1.732 0-.892.784-1.732 1.75-1.732s1.75.84 1.75 1.732c0 .892-.784 1.732-1.75 1.732zm13.5 10.268h-3v-4.5c0-1.072-.02-2.449-1.494-2.449-1.496 0-1.726 1.168-1.726 2.375v4.574h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.562 2.837-1.562 3.035 0 3.593 1.998 3.593 4.597v5.732z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com/usuario"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/60 hover:bg-emerald-500/20 transition-colors"
              whileHover={{ scale: 1.06 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-100"
              >
                <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.901-.015 3.293 0 .32.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://instagram.com/usuario"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/60 hover:bg-emerald-500/20 transition-colors"
              whileHover={{ scale: 1.06 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-100"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.405.59.22 1.01.484 1.452.926.442.442.706.862.927 1.452.166.458.352 1.257.406 2.427.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.054 1.17-.24 1.97-.406 2.427-.221.59-.485 1.01-.927 1.452-.442.442-.862.706-1.452.927-.458.166-1.257.352-2.427.406-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.054-1.97-.24-2.427-.406-.59-.221-1.01-.485-1.452-.927-.442-.442-.706-.862-.927-1.452-.166-.458-.352-1.257-.406-2.427-.059-1.266-.071-1.646-.071-4.85s.012-3.584.071-4.85c.054-1.17.24-1.97.406-2.427.221-.59.485-1.01.927-1.452.442-.442.862-.706 1.452-.927.458-.166 1.257-.352 2.427-.406 1.266-.059 1.646-.071 4.85-.071zm0 1.838c-3.17 0-3.548.012-4.797.069-1.036.049-1.597.217-1.97.36-.5.179-.857.394-1.233.77-.376.376-.591.733-.77 1.233-.143.373-.311.934-.36 1.97-.057 1.249-.069 1.627-.069 4.797s.012 3.548.069 4.797c.049 1.036.217 1.597.36 1.97.179.5.394.857.77 1.233.376.376.733.591 1.233.77.373.143.934.311 1.97.36 1.249.057 1.627.069 4.797.069s3.548-.012 4.797-.069c1.036-.049 1.597-.217 1.97-.36.5-.179.857-.394 1.233-.77.376-.376.591-.733.77-1.233.143-.373.311-.934.36-1.97.057-1.249.069-1.627.069-4.797s-.012-3.548-.069-4.797c-.049-1.036-.217-1.597-.36-1.97-.179-.5-.394-.857-.77-1.233-.376-.376-.733-.591-1.233-.77-.373-.143-.934-.311-1.97-.36-1.249-.057-1.627-.069-4.797-.069zM12 7.162a4.838 4.838 0 1 0 0 9.676 4.838 4.838 0 0 0 0-9.676zm0 1.838a2.999 2.999 0 1 1 0 5.997 2.999 2.999 0 0 1 0-5.997zm5.844-2.965a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
