import { motion } from "motion/react";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const contactCards = [
  {
    title: "Email",
    value: "antonioclaudioofc@gmail.com",
    href: "mailto:antonioclaudioofc@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "WhatsApp",
    value: "(98) 97025-6674",
    href: "https://wa.me/5598970256674?text=Oi%20Antonio%2C%20vim%20pelo%20seu%20portfolio%20e%20gostaria%20de%20conversar.",
    icon: FaWhatsapp,
  },
  {
    title: "LinkedIn",
    value: "@antonioclaudioofc",
    href: "https://www.linkedin.com/in/antonioclaudioofc/",
    icon: FaLinkedinIn,
  },
];

export function Contact() {
  return (
    <motion.section
      className="w-full py-20 px-4 bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Entrar em contato
          </h2>
          <p className="mt-3 text-slate-300">
            Vamos conversar sobre seu projeto.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Fale comigo</h3>

            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-700/60 bg-slate-900/70 px-4 py-4 transition-all hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-900/30"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/70 text-emerald-300 group-hover:bg-emerald-500/20">
                    <Icon className="text-xl" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">{card.title}</p>
                    <p className="text-base text-white">{card.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <form className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Me descreva sua demanda
            </h3>

            <div className="space-y-4">
              <label className="block">
                <span className="text-sm text-slate-400">Seu nome</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  className="mt-2 w-full rounded-lg border border-slate-700/60  px-4 py-2 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none bg-gray-600/60"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-400">Seu e-mail</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  className="mt-2 w-full rounded-lg border border-slate-700/60 bg-gray-600/60 px-4 py-2 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-400">Mensagem</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Descreva o que precisa"
                  className="mt-2 w-full rounded-lg border border-slate-700/60 bg-gray-600/60 px-4 py-2 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                />
              </label>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-linear-to-r from-emerald-500 to-cyan-500 px-6 py-2 text-white font-semibold transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
