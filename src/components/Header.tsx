import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Heart, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} text-sky-500 fill-none stroke-current`}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer circular crest representing eternity and unity */}
      <circle cx="50" cy="50" r="44" className="stroke-sky-500/30" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="40" strokeWidth="2" />
      
      {/* Cross rising from the mountain/foundation base */}
      <path d="M50 20 v50 M32 38 h36" strokeWidth="4.5" />
      
      {/* Foundation mountain lines representing Nepal / Lalitpur peaks */}
      <path d="M22 72 L42 55 L58 68 L78 52" strokeWidth="2" />
      <path d="M16 78 L50 63 L84 78" strokeWidth="3" />
      
      {/* ESTD. 2024 miniature details inside */}
      <path d="M40 85 Q50 90 60 85" className="stroke-sky-500/50" strokeWidth="1" />
    </svg>
  );
}

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav_home"), href: "#home" },
    { name: t("nav_mission"), href: "#mission" },
    { name: t("nav_programs"), href: "#programs" },
    { name: t("nav_testimonials"), href: "#testimonials" },
    { name: t("nav_gallery"), href: "#gallery" },
    { name: t("nav_faq"), href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
            : "bg-gradient-to-b from-black/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Branding */}
            <a href="#home" className="flex items-center space-x-3 group">
              <Logo className="h-11 w-11 transition-transform duration-500 group-hover:rotate-12" />
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg sm:text-xl tracking-tight transition-colors ${
                  isScrolled ? "text-slate-900 group-hover:text-sky-600" : "text-white group-hover:text-sky-400"
                }`}>
                  {t("brand_name")}
                </span>
                <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] transition-colors ${
                  isScrolled ? "text-slate-500" : "text-stone-400"
                }`}>
                  {t("brand_sub")}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isScrolled
                      ? "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                      : "text-stone-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Contact & Language Switch Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher Component */}
              <div className={`flex items-center space-x-1 p-1 rounded-full border transition-all text-xs font-bold ${
                isScrolled 
                  ? "bg-slate-100 border-slate-200" 
                  : "bg-black/30 border-white/10"
              }`}>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === "en"
                      ? "bg-sky-600 text-white shadow"
                      : isScrolled
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-stone-300 hover:text-white"
                  }`}
                  title="English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ne")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === "ne"
                      ? "bg-sky-600 text-white shadow"
                      : isScrolled
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-stone-300 hover:text-white"
                  }`}
                  title="नेपाली"
                >
                  ने
                </button>
              </div>

              <a
                href="tel:9810043570"
                className={`flex items-center space-x-2 transition-colors text-sm font-medium ${
                  isScrolled ? "text-slate-600 hover:text-sky-600" : "text-stone-300 hover:text-sky-400"
                }`}
              >
                <Phone className={`h-4 w-4 ${isScrolled ? "text-sky-600" : "text-sky-400"}`} />
                <span>981-0043570</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-semibold px-4 py-2 rounded-full text-sm shadow-md shadow-sky-900/20 transition-all"
              >
                <Heart className="h-4 w-4 fill-current animate-pulse" />
                <span>{t("nav_contact")}</span>
              </a>
            </div>

            {/* Mobile Actions and Burger Menu */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Language toggle for mobile header (quick swap) */}
              <button
                onClick={() => setLanguage(language === "en" ? "ne" : "en")}
                className={`p-2 rounded-lg border text-xs font-bold flex items-center space-x-1 ${
                  isScrolled 
                    ? "bg-slate-100 border-slate-200 text-slate-700" 
                    : "bg-black/30 border-white/10 text-stone-200"
                }`}
                title="Toggle Language / भाषा परिवर्तन"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{language === "en" ? "ने" : "EN"}</span>
              </button>

              <a
                href="tel:9810043570"
                className={`p-2 transition-colors ${
                  isScrolled ? "text-slate-600 hover:text-sky-600" : "text-stone-300 hover:text-sky-400"
                }`}
                aria-label="Call Agape Foundation"
              >
                <Phone className="h-5 w-5" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled
                    ? "text-slate-700 hover:text-sky-600 hover:bg-slate-100"
                    : "text-stone-300 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="bg-white border-b border-slate-200 pt-24 pb-8 px-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-4">
                {/* Language Picker in Mobile Overlay */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-sky-600" />
                    <span>Language / भाषा</span>
                  </span>
                  <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-full border border-slate-200">
                    <button
                      onClick={() => setLanguage("en")}
                      className={`px-3 py-1 text-xs rounded-full font-bold transition-all ${
                        language === "en" ? "bg-sky-600 text-white shadow" : "text-slate-600"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage("ne")}
                      className={`px-3 py-1 text-xs rounded-full font-bold transition-all ${
                        language === "ne" ? "bg-sky-600 text-white shadow" : "text-slate-600"
                      }`}
                    >
                      नेपाली
                    </button>
                  </div>
                </div>

                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-sky-600 py-2 border-b border-slate-100"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="pt-4 flex flex-col space-y-4">
                  <a
                    href="tel:9810043570"
                    className="flex items-center space-x-3 text-slate-600 hover:text-sky-600"
                  >
                    <Phone className="h-5 w-5 text-sky-600" />
                    <span className="text-base font-medium">981-0043570 ({t("lead_mentor_label").split(",")[0]})</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-5 rounded-xl shadow-lg shadow-sky-950/40 transition-all text-center"
                  >
                    <Heart className="h-5 w-5 fill-current animate-pulse" />
                    <span>{t("nav_contact")}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
