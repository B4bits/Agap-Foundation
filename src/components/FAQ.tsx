import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function FAQ() {
  const { t, faqData } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-100/60 border border-sky-200/50 px-3.5 py-1 rounded-full text-sky-800">
            <HelpCircle className="h-4 w-4" />
            <span className="text-xs font-mono uppercase tracking-wider font-bold">{t("faq_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-900">
            {t("faq_title")}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            {t("faq_desc")}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-sky-500/50 shadow-md shadow-slate-200/30" 
                    : "border-slate-200/60 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 h-8 w-8 rounded-xl flex items-center justify-center transition-all ${
                    isOpen ? "bg-sky-100 text-sky-700" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call support */}
        <div className="mt-12 text-center p-6 bg-sky-50/50 border border-sky-500/20 rounded-2xl">
          <p className="text-slate-700 text-sm">
            {t("faq_footer_text")}
          </p>
          <a
            href="tel:9810043570"
            className="inline-block text-sky-700 hover:text-sky-800 font-mono font-bold text-base sm:text-lg mt-2 transition-colors"
          >
            +977 9810043570 (Abhishek Oza)
          </a>
        </div>

      </div>
    </section>
  );
}
