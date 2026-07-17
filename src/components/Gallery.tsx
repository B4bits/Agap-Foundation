import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ZoomIn } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Gallery() {
  const { language, t, galleryData } = useLanguage();
  
  const allLabel = language === "en" ? "All" : "सबै";
  const [filter, setFilter] = useState(allLabel);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  // Auto-reset filter when language is switched to avoid empty states
  useEffect(() => {
    setFilter(allLabel);
  }, [language, allLabel]);

  // Extract unique categories from active dataset
  const categories = [allLabel, ...Array.from(new Set(galleryData.map(item => item.category)))];

  const filteredItems = filter === allLabel 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const selectedItem = galleryData.find(item => item.id === selectedImageId);

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-bold block">
            {t("gallery_tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            {t("gallery_title")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t("gallery_desc")}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === cat 
                  ? "bg-sky-600 text-white shadow-md shadow-sky-950/20 font-bold" 
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative h-72 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => setSelectedImageId(item.id)}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.85] group-hover:brightness-95"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 transition-opacity" />

                {/* Overlay details */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                  <div className="flex justify-end">
                    <span className="bg-sky-600 text-white text-[10px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-white text-xs sm:text-sm font-serif line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                    <div className="flex items-center space-x-1.5 text-sky-400 text-[11px] font-mono uppercase tracking-wider font-semibold">
                      <ZoomIn className="h-3.5 w-3.5" />
                      <span>{t("gallery_zoom_label")}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageId && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedImageId(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-3 bg-slate-900/80 border border-slate-800 hover:bg-slate-800 text-white hover:text-sky-400 rounded-full transition-colors cursor-pointer"
                onClick={() => setSelectedImageId(null)}
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                className="relative max-w-4xl w-full bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video w-full bg-black">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.caption}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-6 sm:p-8 bg-slate-950 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase font-bold">
                      {selectedItem.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {t("gallery_modal_sub")}
                    </span>
                  </div>
                  <p className="text-slate-200 text-base sm:text-lg font-serif leading-relaxed">
                    {selectedItem.caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
