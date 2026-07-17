import { Logo } from "./Header";
import { Mail, Phone, Youtube, ChevronUp, MapPin } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16 relative overflow-hidden">
      
      {/* Decorative ambient spots */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Logo & Slogan block (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#home" className="flex items-center space-x-3 group">
              <Logo className="h-11 w-11 text-sky-500" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-white uppercase">
                  {t("brand_name")}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                  {t("brand_sub")}
                </span>
              </div>
            </a>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {t("footer_slogan")}
            </p>

            <div className="border-l-2 border-sky-500/60 pl-4 py-0.5">
              <p className="text-slate-300 font-serif italic text-sm">
                {t("footer_citation_quote")}
              </p>
              <p className="text-[10px] font-mono text-slate-500 tracking-wider uppercase mt-1">
                {t("footer_citation_ref")}
              </p>
            </div>
          </div>

          {/* Quick links block (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
              {t("footer_nav_header")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors block">
                  {t("nav_home")}
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-white transition-colors block">
                  {t("nav_mission")}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors block">
                  {t("nav_programs")}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors block">
                  {t("nav_testimonials")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors block">
                  {t("nav_gallery")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors block">
                  {t("nav_faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct channels (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
              {t("footer_contact_header")}
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-sky-500 mt-1 flex-shrink-0" />
                <span>{t("contact_card_loc_sub")}, {language === "en" ? "Lalitpur, Nepal" : "ललितपुर, नेपाल"}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sky-500 flex-shrink-0" />
                <a href="tel:9810043570" className="hover:text-white transition-colors">
                  +977 9810043570 ({language === "en" ? "Abhishek Oza" : "अभिषेक ओझा"})
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sky-500 flex-shrink-0" />
                <a href="mailto:agapetransformationfoundation@gmail.com" className="hover:text-white transition-colors block truncate">
                  agapetransformationfoundation@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Youtube className="h-4 w-4 text-red-500 flex-shrink-0" />
                <a href="https://www.youtube.com/@jmconesimus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @jmconesimus ({language === "en" ? "Worship Sermons" : "प्रवचन र आराधना"})
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <p>© {new Date().getFullYear()} {language === "en" ? "Agape Foundation Nepal. All Rights Reserved." : "अगापे फाउन्डेसन नेपाल। सर्वाधिकार सुरक्षित।"}</p>
            <p className="text-slate-600 mt-1 italic">
              {t("footer_citation_quote")}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-slate-500 hover:text-white bg-slate-900 border border-slate-850 p-2 rounded-xl transition-all cursor-pointer"
            aria-label="Scroll to top of the page"
          >
            <span>{language === "en" ? "Top" : "माथि"}</span>
            <ChevronUp className="h-4 w-4 text-sky-500" />
          </button>
        </div>

      </div>
    </footer>
  );
}
