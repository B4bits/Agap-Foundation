import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, HeartHandshake, Flame, Sparkles, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Programs() {
  const { t, programsData } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="h-6 w-6 text-sky-400" />;
      case "HeartHandshake":
        return <HeartHandshake className="h-6 w-6 text-sky-400" />;
      case "Flame":
        return <Flame className="h-6 w-6 text-sky-400" />;
      case "Sparkles":
        return <Sparkles className="h-6 w-6 text-sky-400" />;
      default:
        return <ShieldAlert className="h-6 w-6 text-sky-400" />;
    }
  };

  return (
    <section id="programs" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Decorative dark background textures */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-sky-400 font-bold block">
            {t("programs_tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
            {t("programs_title")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t("programs_desc")}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programsData.map((prog, idx) => {
            const isExpanded = expandedId === prog.id;
            return (
              <motion.div
                key={prog.id}
                layoutId={`card-container-${prog.id}`}
                className={`bg-slate-950 rounded-3xl border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/40 ${
                  isExpanded ? "border-sky-500 shadow-xl shadow-sky-950/20" : "border-slate-800"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6">
                      {getIcon(prog.iconName)}
                    </div>
                    
                    {/* Badge */}
                    <span className="text-[10px] font-mono tracking-widest text-sky-400 bg-sky-500/5 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase">
                      {t("programs_core_badge")}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                    {prog.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Expandable Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="pt-4 border-t border-slate-800/80 space-y-4">
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {prog.longDescription}
                          </p>
                          
                          <div className="space-y-2.5">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                              {t("programs_includes")}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {prog.benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center space-x-2 text-slate-400 text-xs">
                                  <CheckCircle2 className="h-4 w-4 text-sky-500 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(prog.id)}
                    className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? t("programs_show_less") : t("programs_learn_more")}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  <a
                    href="#contact"
                    className="text-slate-500 hover:text-slate-300 text-xs font-mono tracking-wider uppercase transition-colors"
                  >
                    {t("programs_inquire")}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting Callout banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-500/10 via-slate-950 to-slate-950 p-8 rounded-3xl border border-slate-800 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-serif font-bold text-lg text-white">
              {t("programs_urgent_title")}
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              {t("programs_urgent_desc")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="tel:9810043570"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white font-bold px-5 py-3 rounded-xl transition-all"
            >
              <span>{t("programs_urgent_call")}</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium px-5 py-3 rounded-xl transition-all"
            >
              <span>{t("programs_urgent_write")}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
