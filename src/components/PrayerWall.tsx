import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PrayerRequest } from "../types";
import { Heart, Send, User, Check, AlertCircle, EyeOff, BookOpen, Plus } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const INITIAL_PRAYERS: PrayerRequest[] = [
  {
    id: "p1",
    name: "Elder Samuel",
    request: "Please pray for our church's community outreach in the Lalitpur outskirts. May God touch the hearts of the youth struggling in the dark corners.",
    date: "July 12, 2026",
    isAnonymous: false,
    prayerCount: 14,
    category: "General"
  },
  {
    id: "p2",
    name: "A Loving Mother",
    request: "My oldest son is transitioning into the Agape residential recovery home this week. Please pray for his courage during the physical detox and that his heart opens to Jesus.",
    date: "July 13, 2026",
    isAnonymous: true,
    prayerCount: 32,
    category: "Recovery"
  },
  {
    id: "p3",
    name: "Mentor Prabhat",
    request: "Intercede for a newly admitted brother who is facing intense emotional struggles today. Pray for absolute peace, sound sleep, and deliverance from cravings.",
    date: "July 13, 2026",
    isAnonymous: false,
    prayerCount: 19,
    category: "Healing"
  }
];

export default function PrayerWall() {
  const { language, t } = useLanguage();
  const [prayers, setPrayers] = useState<PrayerRequest[]>([]);
  const [activeTab, setActiveTab] = useState<"wall" | "submit">("wall");
  
  // Form State
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [category, setCategory] = useState<PrayerRequest["category"]>("Recovery");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  // Track which prayers the user has joined in locally
  const [joinedPrayers, setJoinedPrayers] = useState<string[]>([]);

  useEffect(() => {
    // Load existing prayers from localStorage or fallback to defaults
    const stored = localStorage.getItem("agape_prayers");
    if (stored) {
      try {
        setPrayers(JSON.parse(stored));
      } catch (e) {
        setPrayers(INITIAL_PRAYERS);
      }
    } else {
      setPrayers(INITIAL_PRAYERS);
      localStorage.setItem("agape_prayers", JSON.stringify(INITIAL_PRAYERS));
    }

    // Load user joined prayer IDs
    const storedJoined = localStorage.getItem("agape_joined_prayers");
    if (storedJoined) {
      try {
        setJoinedPrayers(JSON.parse(storedJoined));
      } catch (e) {}
    }
  }, []);

  const handleJoinPrayer = (id: string) => {
    if (joinedPrayers.includes(id)) return; // Already joined in prayer

    const updated = prayers.map((p) => {
      if (p.id === id) {
        return { ...p, prayerCount: p.prayerCount + 1 };
      }
      return p;
    });

    setPrayers(updated);
    localStorage.setItem("agape_prayers", JSON.stringify(updated));

    const updatedJoined = [...joinedPrayers, id];
    setJoinedPrayers(updatedJoined);
    localStorage.setItem("agape_joined_prayers", JSON.stringify(updatedJoined));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!request.trim()) {
      setFormError(t("prayer_error_empty") || "Please share your prayer request so we can pray for you.");
      return;
    }

    const displayName = isAnonymous ? "Anonymous" : (name.trim() || "Someone in need");

    const newRequest: PrayerRequest = {
      id: "p_" + Date.now(),
      name: displayName,
      request: request.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      isAnonymous,
      prayerCount: 1,
      category
    };

    const updated = [newRequest, ...prayers];
    setPrayers(updated);
    localStorage.setItem("agape_prayers", JSON.stringify(updated));

    // Reset Form
    setName("");
    setRequest("");
    setIsAnonymous(false);
    setIsSubmitted(true);

    // Auto-switch to wall after a brief duration
    setTimeout(() => {
      setIsSubmitted(false);
      setActiveTab("wall");
    }, 2000);
  };

  const categoryColors = {
    Healing: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    Recovery: "bg-red-500/10 text-red-400 border-red-500/20",
    Strength: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    Guidance: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    General: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };

  const getCategoryTranslation = (cat: string) => {
    switch (cat) {
      case "Recovery": return language === "en" ? "Recovery" : "पुनर्स्थापना (Recovery)";
      case "Healing": return language === "en" ? "Healing" : "निको पार्ने (Healing)";
      case "Strength": return language === "en" ? "Strength" : "बल (Strength)";
      case "Guidance": return language === "en" ? "Guidance" : "मार्गदर्शन (Guidance)";
      case "General": return language === "en" ? "General" : "सामान्य (General)";
      default: return cat;
    }
  };

  const getTranslatedRequest = (p: PrayerRequest) => {
    if (p.id === "p1") {
      return language === "en"
        ? "Please pray for our church's community outreach in the Lalitpur outskirts. May God touch the hearts of the youth struggling in the dark corners."
        : "कृपया ललितपुरको बाहिरी क्षेत्रमा हाम्रो मण्डलीको सामुदायिक आउटरिचको लागि प्रार्थना गर्नुहोस्। परमेश्वरले अन्धकार कुनाहरूमा संघर्ष गरिरहेका युवाहरूको हृदयलाई छुनुहोस्।";
    }
    if (p.id === "p2") {
      return language === "en"
        ? "My oldest son is transitioning into the Agape residential recovery home this week. Please pray for his courage during the physical detox and that his heart opens to Jesus."
        : "मेरो जेठो छोरो यस हप्ता अगापे आवासीय पुन:स्थापना गृहमा प्रवेश गर्दैछ। कृपया उसको शारीरिक डिटक्सको समयमा उसको साहसको लागि प्रार्थना गर्नुहोस् र उसको हृदय येशूतर्फ फर्कोस्।";
    }
    if (p.id === "p3") {
      return language === "en"
        ? "Intercede for a newly admitted brother who is facing intense emotional struggles today. Pray for absolute peace, sound sleep, and deliverance from cravings."
        : "आज तीव्र भावनात्मक संघर्षको सामना गरिरहेका भर्खरै भर्ना भएका एक भाइको लागि प्रार्थना गर्नुहोस्। पूर्ण शान्ति, राम्रो निद्रा, र तृष्णाबाट मुक्तिको लागि प्रार्थना गर्नुहोस्।";
    }
    return p.request;
  };

  const getTranslatedName = (p: PrayerRequest) => {
    if (p.id === "p1") {
      return language === "en" ? "Elder Samuel" : "एल्डर शमूएल";
    }
    if (p.id === "p2") {
      return language === "en" ? "A Loving Mother" : "एक प्यारी आमा";
    }
    if (p.id === "p3") {
      return language === "en" ? "Mentor Prabhat" : "मेन्टर प्रभात";
    }
    if (p.isAnonymous) {
      return t("prayer_anonymous_user");
    }
    if (p.name === "Someone in need") {
      return t("prayer_someone_in_need");
    }
    return p.name;
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-bold block">
            {t("prayer_tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            {t("prayer_title")}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t("prayer_desc")}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-2xl flex">
            <button
              onClick={() => setActiveTab("wall")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2 ${
                activeTab === "wall" 
                  ? "bg-sky-600 text-white shadow" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>{t("prayer_tab_wall")} ({prayers.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("submit")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2 ${
                activeTab === "submit" 
                  ? "bg-sky-600 text-white shadow" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>{t("prayer_tab_submit")}</span>
            </button>
          </div>
        </div>

        {/* Tabs Content */}
        <AnimatePresence mode="wait">
          {activeTab === "wall" ? (
            <motion.div
              key="wall"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {prayers.map((p) => {
                const userJoined = joinedPrayers.includes(p.id);
                return (
                  <motion.div
                    key={p.id}
                    layoutId={`prayer-card-${p.id}`}
                    className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between h-72 hover:border-slate-700/60 transition-colors"
                  >
                    <div>
                      {/* Top bar category & date */}
                      <div className="flex justify-between items-center mb-4">
                        <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${categoryColors[p.category] || categoryColors.General}`}>
                          {getCategoryTranslation(p.category)}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {p.date}
                        </span>
                      </div>

                      {/* Request Content */}
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed line-clamp-5 italic">
                        "{getTranslatedRequest(p)}"
                      </p>
                    </div>

                    {/* Bottom row actions */}
                    <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                      {/* Submitter Name */}
                      <div className="flex items-center space-x-2 text-slate-400 text-xs">
                        <User className="h-3.5 w-3.5 text-sky-500" />
                        <span className="truncate max-w-[120px] font-medium">
                          {getTranslatedName(p)}
                        </span>
                      </div>

                      {/* Prayer Counter */}
                      <button
                        onClick={() => handleJoinPrayer(p.id)}
                        className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                          userJoined 
                            ? "bg-red-500/10 text-red-400 border border-red-500/30" 
                            : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                        }`}
                        disabled={userJoined}
                        title={userJoined ? t("prayer_joined_banner") : t("prayer_btn_join")}
                      >
                        <Heart className={`h-3.5 w-3.5 ${userJoined ? "fill-current" : ""}`} />
                        <span>{userJoined ? (language === "en" ? "Praying" : "प्रार्थना गर्दै") : (language === "en" ? "Pray" : "प्रार्थना")} ({p.prayerCount})</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="submit"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="h-16 w-16 bg-sky-500/10 border border-sky-500/30 rounded-full flex items-center justify-center mx-auto text-sky-400">
                        <Check className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white">
                        {t("prayer_success_title")}
                      </h3>
                      <p className="text-slate-400 text-sm max-w-sm mx-auto">
                        {t("prayer_success_desc")}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleFormSubmit} className="space-y-6">
                      
                      {formError && (
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center space-x-3 text-red-400 text-sm">
                          <AlertCircle className="h-5 w-5 flex-shrink-0" />
                          <span>{formError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                            {t("prayer_label_name")}
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isAnonymous}
                            placeholder={isAnonymous ? (language === "en" ? "Anonymous active" : "अज्ञात सक्रिय") : (language === "en" ? "e.g. Ramesh Shrestha" : "जस्तै: रमेश श्रेष्ठ")}
                            className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500/50 rounded-xl p-3 text-sm focus:outline-none transition-colors disabled:opacity-50"
                          />
                        </div>

                        {/* Category Field */}
                        <div className="space-y-2">
                          <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                            {t("prayer_label_cat")}
                          </label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value as PrayerRequest["category"])}
                            className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500/50 rounded-xl p-3 text-sm focus:outline-none transition-colors"
                          >
                            <option value="Recovery">{language === "en" ? "Addiction Recovery" : "पुनर्स्थापना (Addiction Recovery)"}</option>
                            <option value="Healing">{language === "en" ? "Physical/Emotional Healing" : "निको पार्ने (Physical/Emotional Healing)"}</option>
                            <option value="Strength">{language === "en" ? "Strength & Deliverance" : "बल र छुटकारा (Strength & Deliverance)"}</option>
                            <option value="Guidance">{language === "en" ? "Path & Guidance" : "मार्गदर्शन (Path & Guidance)"}</option>
                            <option value="General">{language === "en" ? "General Prayer" : "सामान्य प्रार्थना (General Prayer)"}</option>
                          </select>
                        </div>
                      </div>

                      {/* Anonymous Checkbox */}
                      <div className="flex items-center space-x-3 bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                        <input
                          type="checkbox"
                          id="anonymous"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                          className="h-4 w-4 bg-slate-950 border-slate-800 rounded focus:ring-sky-500 text-sky-500 accent-sky-500"
                        />
                        <label htmlFor="anonymous" className="text-xs sm:text-sm text-slate-300 cursor-pointer flex items-center space-x-1.5">
                          <EyeOff className="h-3.5 w-3.5 text-slate-400" />
                          <span>{t("prayer_anon_post")}</span>
                        </label>
                      </div>

                      {/* Prayer Request textarea */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                          {t("prayer_label_burden")}
                        </label>
                        <textarea
                          rows={4}
                          value={request}
                          onChange={(e) => setRequest(e.target.value)}
                          placeholder={t("prayer_placeholder_burden")}
                          className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500/50 rounded-xl p-3.5 text-sm focus:outline-none transition-colors resize-none leading-relaxed"
                        />
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-base cursor-pointer"
                      >
                        <Send className="h-4 w-4" />
                        <span>{t("prayer_btn_submit")}</span>
                      </button>

                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
