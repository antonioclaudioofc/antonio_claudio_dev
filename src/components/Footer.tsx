import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/antonioclaudioofc",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antonioclaudioofc/",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5598970256674?text=Oi%20Antonio%2C%20vim%20pelo%20seu%20portfolio%20e%20gostaria%20de%20conversar.",
    icon: FaWhatsapp,
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-xl font-semibold text-white">Antonio Claudio</p>
            <p className="text-sm text-slate-400">Backend Developer</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/70 text-slate-300 transition-all hover:border-emerald-400/50 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-900/30"
                  aria-label={link.label}
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-slate-500">
            © 2026 Antonio Claudio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
