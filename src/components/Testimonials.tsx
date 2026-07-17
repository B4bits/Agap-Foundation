import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Testimonials() {
  const { t, testimonialsData } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // If the activeIndex is out of range when language changes, reset it.
  useEffect(() => {
    if (activeIndex >= testimonialsData.length) {
      setActiveIndex(0);
    }
  }, [testimonialsData, activeIndex]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const active = testimonialsData[activeIndex] || testimonialsData[0];

  if (!active) return null;

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden relative border-t border-b border-slate-200/50">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-600 font-bold block">
            {t("test_tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-900">
            {t("test_title")}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            {t("test_desc")}
          </p>
        </div>

        {/* Dynamic testimonial slider card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active.id}-${activeIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200/70 p-6 sm:p-10 md:p-14 rounded-3xl shadow-xl shadow-slate-200/40 relative"
            >
              <div className="absolute top-8 right-8 text-sky-100">
                <Quote className="h-16 w-16 md:h-24 md:w-24 fill-current transform translate-x-3 -translate-y-3" />
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 relative z-10">
                {/* User Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-sky-500 rounded-2xl transform rotate-3" />
                  <img
                    src={active.avatarUrl}
                    alt={active.name}
                    className="relative w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl border-2 border-white shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Profile Details */}
                <div>
                  <div className="flex items-center space-x-1 text-sky-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">
                    {active.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono text-slate-500 mt-0.5">
                    <span className="text-sky-600 font-semibold uppercase">{active.role}</span>
                    <span>•</span>
                    <span>{active.year}</span>
                  </div>
                </div>
              </div>

              {/* Story Description & Beautiful Big Quote */}
              <div className="mt-8 space-y-6 relative z-10">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic text-slate-800 leading-relaxed pl-4 border-l-4 border-sky-500">
                  "{active.quote}"
                </blockquote>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {active.story}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider controls inside/overlay */}
          <div className="flex justify-between items-center mt-8 px-4">
            {/* Index indicator */}
            <div className="flex space-x-1.5">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-sky-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl shadow-md active:scale-95 transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl shadow-md active:scale-95 transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
