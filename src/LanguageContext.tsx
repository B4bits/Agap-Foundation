import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  PROGRAMS_TRANSLATED,
  TESTIMONIALS_TRANSLATED,
  GALLERY_TRANSLATED,
  CORE_VALUES_TRANSLATED,
  FAQ_TRANSLATED,
  UI_TRANSLATIONS,
  ProgramTranslation,
  TestimonialTranslation,
  GalleryItemTranslation,
  CoreValueTranslation,
  FAQTranslation
} from "./translations";

export type Language = "en" | "ne";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof UI_TRANSLATIONS) => string;
  programsData: ProgramTranslation[];
  testimonialsData: TestimonialTranslation[];
  galleryData: GalleryItemTranslation[];
  coreValuesData: CoreValueTranslation[];
  faqData: FAQTranslation[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("agape_language");
    return (saved === "en" || saved === "ne") ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("agape_language", lang);
  };

  const t = (key: keyof typeof UI_TRANSLATIONS): string => {
    const item = UI_TRANSLATIONS[key];
    if (!item) return String(key);
    return item[language] || item["en"] || String(key);
  };

  const programsData = PROGRAMS_TRANSLATED[language];
  const testimonialsData = TESTIMONIALS_TRANSLATED[language];
  const galleryData = GALLERY_TRANSLATED[language];
  const coreValuesData = CORE_VALUES_TRANSLATED[language];
  const faqData = FAQ_TRANSLATED[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        programsData,
        testimonialsData,
        galleryData,
        coreValuesData,
        faqData
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
