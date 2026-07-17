import { motion } from "motion/react";
import { Check, Shield, Award, Heart, Users } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { language, t, coreValuesData } = useLanguage();

  const iconsMap = [
    <Shield key="shield" className="h-6 w-6 text-sky-600" />,
    <Heart key="heart" className="h-6 w-6 text-sky-600" />,
    <Award key="award" className="h-6 w-6 text-sky-600" />,
    <Users key="users" className="h-6 w-6 text-sky-600" />
  ];

  return (
    <section id="mission" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-600 font-bold block">
                {t("about_tag")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                {t("about_title")}
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {language === "en" ? (
                <>
                  Established in <strong className="text-slate-900 font-semibold">2024</strong> in the peaceful neighborhood of Sitapakha, Hattiban (Lalitpur), the <strong className="text-slate-900 font-semibold">Agape Foundation</strong> is a dedicated faith-based community ministry and drug/alcohol restoration program. We are founded on the eternal truth that no one is beyond hope, and no chain is too strong for the saving grace of Jesus Christ.
                </>
              ) : (
                <>
                  सन् <strong className="text-slate-900 font-semibold">२०२४</strong> मा ललितपुरको हात्तीवन, सितापखाको शान्त वातावरणमा स्थापित <strong className="text-slate-900 font-semibold">अगापे फाउन्डेसन</strong> एक समर्पित विश्वासमा आधारित सामुदायिक मन्त्रालय र लागुऔषध/मदिरा पुनर्स्थापना कार्यक्रम हो। हामी यो अनन्त सत्यमा स्थापित छौं कि कोही पनि आशाभन्दा बाहिर छैन, र येशू ख्रीष्टको अनुग्रहका लागि कुनै पनि साङ्लो बलियो छैन।
                </>
              )}
            </p>

            <div className="border-l-4 border-sky-500 pl-4 py-1 bg-sky-50/50 rounded-r-lg">
              <p className="text-slate-700 italic font-serif text-base">
                {t("about_quote")}
              </p>
              <p className="text-xs font-mono text-slate-500 mt-2 uppercase tracking-wider">
                {t("about_quote_author")}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {t("about_desc_2")}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-slate-700 font-medium">
                <div className="h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-sky-600" />
                </div>
                <span className="text-sm">{t("about_check_1")}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 font-medium">
                <div className="h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-sky-600" />
                </div>
                <span className="text-sm">{t("about_check_2")}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700 font-medium">
                <div className="h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-sky-600" />
                </div>
                <span className="text-sm">{t("about_check_3")}</span>
              </div>
            </div>
          </div>

          {/* Visual card badge */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-102 blur-lg" />
            <div className="relative bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-800">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-sky-400">
                {t("about_side_tag")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-2 text-slate-100">
                {t("about_side_title")}
              </h3>
              
              <div className="mt-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 text-sky-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">{t("about_side_p1_title")}</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      {t("about_side_p1_desc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 text-sky-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">{t("about_side_p2_title")}</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      {t("about_side_p2_desc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 text-sky-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.162.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.162.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200">{t("about_side_p3_title")}</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      {t("about_side_p3_desc")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  {t("about_side_call_lead")}
                </div>
                <a
                  href="tel:9810043570"
                  className="text-sky-400 hover:text-sky-300 font-mono font-bold text-base transition-colors"
                >
                  +977 9810043570
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-600 font-bold">
              {t("values_tag")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              {t("values_title")}
            </h3>
            <p className="text-slate-500 text-sm sm:text-base">
              {t("values_desc")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValuesData.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center mb-5">
                  {iconsMap[idx] || <Check className="h-6 w-6 text-sky-600" />}
                </div>
                <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
