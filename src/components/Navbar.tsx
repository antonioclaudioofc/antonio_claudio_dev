import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || "home";
      setActiveSection(hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-slate-950/95 via-slate-950/90 to-slate-950/80 backdrop-blur-lg border-b border-emerald-500/10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <a href="#home" className="flex items-center gap-3 group">
              <motion.div
                className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-base">AC</span>
              </motion.div>
              <span className="max-sm:hidden sm:block font-bold text-base text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 group-hover:opacity-80 transition-opacity">
                Antonio Claudio
              </span>
            </a>
          </motion.div>

          <motion.div
            className="max-lg:hidden flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-slate-300 font-medium group rounded-lg overflow-hidden transition-colors duration-300 ${
                    isActive ? "text-emerald-400" : ""
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"
                    layoutId={`underline-${item.label}`}
                  />
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 to-cyan-500"
                      layoutId="activeUnderline"
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        stiffness: 380,
                        damping: 40,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.div>

          <motion.a
            href="#contact"
            className="max-lg:hidden relative px-7 py-2.5 font-semibold rounded-lg text-white overflow-hidden group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-lg" />
            <div className="absolute inset-0 bg-linear-to-r from-emerald-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Vamos conversar</span>
          </motion.a>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="max-lg:block lg:hidden relative w-12 h-12 flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-emerald-500/20 active:bg-emerald-500/30 transition-colors duration-200"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute w-6 h-0.5 bg-emerald-400 rounded-full group-hover:shadow-lg group-hover:shadow-emerald-400/50"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-emerald-400 rounded-full group-hover:shadow-lg group-hover:shadow-emerald-400/50"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-emerald-400 rounded-full group-hover:shadow-lg group-hover:shadow-emerald-400/50"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -10 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        <motion.div
          className="max-lg:block lg:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-2 bg-linear-to-b from-slate-900/50 to-slate-950/50 border-t border-emerald-500/10">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`relative block px-4 py-3 text-slate-300 font-medium rounded-lg transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "hover:bg-slate-800/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                >
                  <span className="relative z-10">{item.label}</span>

                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-emerald-400 to-cyan-500"
                      layoutId="mobileActiveIndicator"
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </motion.a>
              );
            })}
            <motion.a
              href="#contact"
              className="block w-full mt-4 px-4 py-3 bg-linear-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              Vamos conversar
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
