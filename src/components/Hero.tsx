import { motion } from "motion/react";
import { ArrowRight, HelpCircle, Heart } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Layered Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/src/assets/images/serene_blue_sky_banner_1784009339859.jpg"
          alt="Serene Blue Sky Morning, Agape Foundation"
          className="w-full h-full object-cover scale-105 filter brightness-50 contrast-110 saturate-[0.85]"
          referrerPolicy="no-referrer"
        />
        {/* Deep, cinematic gradients for maximum contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40" />
      </div>

      {/* Decorative Golden Light Ray */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        {/* Mini established tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/30 px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-sky-300 uppercase font-semibold">
            {t("hero_est")}
          </span>
        </motion.div>

        {/* Main Header Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-none"
        >
          {t("hero_title_1")} <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-white">
            {t("hero_title_2")}
          </span>
        </motion.h1>

        {/* Romans citation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xs sm:text-sm font-mono text-sky-400/80 mt-2 tracking-widest uppercase"
        >
          {t("hero_citation")}
        </motion.p>

        {/* Core Slogan Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl font-serif text-slate-100 max-w-3xl mx-auto leading-relaxed italic"
        >
          {t("hero_slogan")}
        </motion.p>

        {/* Mission quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          {t("hero_description")}
        </motion.p>

        {/* Actions buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href="#programs"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-sky-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <span>{t("hero_btn_explore")}</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <Heart className="h-5 w-5 text-red-500 fill-current" />
            <span>{t("hero_btn_prayer")}</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => {
            document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">
            {t("hero_scroll")}
          </span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-sky-400 rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

