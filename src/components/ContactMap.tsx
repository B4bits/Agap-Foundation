import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, Youtube, Landmark, Check, Send, AlertCircle, Compass } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ContactMap() {
  const { language, t } = useLanguage();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Admission Question");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name.trim()) {
      setFormError(language === "en" ? "Please enter your name." : "कृपया आफ्नो नाम प्रविष्ट गर्नुहोस्।");
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setFormError(
        language === "en" 
          ? "Please provide either a phone number or email address so we can reply." 
          : "कृपया फोन नम्बर वा इमेल ठेगाना उपलब्ध गराउनुहोस् ताकि हामी जवाफ दिन सकौं।"
      );
      return;
    }
    if (!message.trim()) {
      setFormError(language === "en" ? "Please enter your message details." : "कृपया आफ्नो सन्देश विवरण प्रविष्ट गर्नुहोस्।");
      return;
    }

    const newInquiry = {
      id: "inq_" + Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject,
      message: message.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };

    // Store in localStorage
    const existing = localStorage.getItem("agape_inquiries") || "[]";
    try {
      const parsed = JSON.parse(existing);
      localStorage.setItem("agape_inquiries", JSON.stringify([newInquiry, ...parsed]));
    } catch (e) {}

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsSent(true);

    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  };

  return (
    <section id="contact-info" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-600 font-bold block">
            {t("contact_tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-900">
            {t("contact_title")}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            {t("contact_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Map Card (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">{t("contact_card_call")}</h4>
                  <a href="tel:9810043570" className="text-base sm:text-lg font-serif font-bold text-slate-900 hover:text-sky-600 transition-colors block mt-1">
                    981-0043570
                  </a>
                  <p className="text-slate-500 text-xs mt-1">{t("lead_mentor_label")}</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">{t("contact_card_email")}</h4>
                  <a href="mailto:agapetransformationfoundation@gmail.com" className="text-sm font-semibold text-slate-900 hover:text-sky-600 transition-colors block mt-1 truncate">
                    agapetransformationfoundation@gmail.com
                  </a>
                  <p className="text-slate-500 text-xs mt-1">{t("contact_card_email_sub")}</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">{t("contact_card_loc")}</h4>
                  <p className="text-slate-900 font-serif font-bold text-sm sm:text-base mt-1">
                    {t("contact_card_loc_sub")}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">{language === "en" ? "Lalitpur, Nepal" : "ललितपुर, नेपाल"}</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl flex items-start space-x-4">
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">{t("contact_card_hours")}</h4>
                  <p className="text-slate-900 font-serif font-bold text-sm sm:text-base mt-1">
                    {t("contact_card_hours_val")}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">{t("contact_card_hours_sub")}</p>
                </div>
              </div>

            </div>

            {/* Hand-drawn Map Card */}
            <div className="bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-slate-800">
                <Compass className="h-20 w-20 stroke-current animate-pulse" />
              </div>

              <div className="flex items-center space-x-2 text-sky-400 mb-4">
                <Landmark className="h-5 w-5" />
                <span className="text-xs font-mono tracking-wider uppercase font-semibold">
                  {t("contact_map_schematic")}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-4">
                {t("contact_map_sitapakha")}
              </h3>

              {/* Schematic Map Viewbox */}
              <div className="w-full h-56 bg-slate-950 rounded-2xl border border-slate-800/80 p-4 relative overflow-hidden text-[10px] font-mono tracking-tight text-slate-400 select-none">
                
                {/* Roads */}
                <svg className="absolute inset-0 w-full h-full stroke-slate-850 fill-none" strokeWidth="4">
                  {/* Godawari Highway / Main Ring Road direction */}
                  <path d="M 30 -50 L 30 250" strokeWidth="8" />
                  {/* Road heading into Hattiban Area */}
                  <path d="M 30 110 L 450 110" />
                  {/* Sitapakha local turnoff */}
                  <path d="M 280 110 L 280 250" />
                </svg>

                {/* Map Pins / Labels */}
                {/* Main highway label */}
                <div className="absolute top-4 left-4 text-slate-500 rotate-90 transform -translate-x-2">
                  {language === "en" ? "TO PATAN / GWALKO RING ROAD →" : "पाटन / ग्वार्को चक्रपथ तर्फ →"}
                </div>
                
                {/* Hattiban Area Indicator */}
                <div className="absolute top-12 right-28 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  {language === "en" ? "HATTIBAN HILLS FOREST" : "हात्तीवन पहाडी वन"}
                </div>

                {/* GEMS School Landmark */}
                <div className="absolute top-20 left-16 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded text-slate-300">
                  {language === "en" ? "🏫 GEMS School Lalitpur" : "🏫 जेम्स स्कूल ललितपुर"}
                </div>

                {/* Sitapakha Turn */}
                <div className="absolute bottom-24 left-32 text-[9px] text-slate-500">
                  {language === "en" ? "HATTIBAN ROAD" : "हात्तीवन सडक"}
                </div>

                {/* Turn arrow */}
                <div className="absolute bottom-28 left-64 text-sky-400 font-bold">
                  {language === "en" ? "SITAPAKHA ROAD ↴" : "सितापखा सडक ↴"}
                </div>

                {/* AGAPE SANCTUARY (THE Target Pin) */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-10 right-16 bg-sky-600 text-white px-3 py-2 rounded-xl border-2 border-white shadow-xl flex items-center space-x-2 font-bold text-[11px] font-sans"
                >
                  <MapPin className="h-4 w-4 fill-current text-white animate-bounce" />
                  <div className="flex flex-col">
                    <span>{t("brand_name")}</span>
                    <span className="text-[8px] font-mono tracking-tight font-normal">
                      {language === "en" ? "SITAPAKHA HOUSE" : "सितापखा भवन"}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Written Directions & Actions */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-slate-400 text-xs leading-relaxed max-w-md">
                  <strong>{t("contact_map_directions_title")}</strong> {t("contact_map_directions_desc")}
                </div>
                
                <a
                  href="https://maps.google.com/?q=Hattiban,Lalitpur,Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-5 rounded-xl border border-slate-700 hover:border-slate-600 text-xs uppercase tracking-wider transition-all"
                >
                  <Compass className="h-4 w-4 text-sky-400" />
                  <span>{t("contact_map_open_btn")}</span>
                </a>
              </div>

            </div>

            {/* Youtube Channel Plug */}
            <div className="bg-sky-50 border border-sky-200/60 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-red-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Youtube className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900">{t("contact_youtube_title")}</h4>
                  <p className="text-slate-600 text-xs mt-0.5">{t("contact_youtube_desc")}</p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@jmconesimus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>{t("contact_youtube_btn")}</span>
              </a>
            </div>

          </div>

          {/* Contact Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 p-8 rounded-3xl shadow-lg shadow-slate-100/30">
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              {t("contact_form_title")}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-6">
              {t("contact_form_desc")}
            </p>

            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="h-16 w-16 bg-emerald-100 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-slate-900">
                    {t("contact_form_success_title")}
                  </h4>
                  <p 
                    className="text-slate-600 text-xs max-w-xs mx-auto"
                    dangerouslySetInnerHTML={{ __html: t("contact_form_success_desc_html") }}
                  />
                </motion.div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  {formError && (
                    <div className="bg-red-50 border border-red-200/60 p-4 rounded-xl flex items-center space-x-3 text-red-600 text-xs">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      {t("contact_form_label_name")}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === "en" ? "e.g. Sujan Gurung" : "जस्तै: सुजन गुरुङ"}
                      className="w-full bg-white border border-slate-200 focus:border-sky-500 rounded-xl p-3 text-sm focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  {/* Contact Phone */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      {t("contact_form_label_phone")}
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 984-1234567"
                      className="w-full bg-white border border-slate-200 focus:border-sky-500 rounded-xl p-3 text-sm focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      {t("contact_form_label_email")}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sujan@gmail.com"
                      className="w-full bg-white border border-slate-200 focus:border-sky-500 rounded-xl p-3 text-sm focus:outline-none transition-all shadow-inner"
                    />
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      {t("contact_form_label_subject")}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-sky-500 rounded-xl p-3 text-sm focus:outline-none transition-all"
                    >
                      <option value="Admission Question">{t("contact_form_subj_opt1")}</option>
                      <option value="Counseling Request">{t("contact_form_subj_opt2")}</option>
                      <option value="Partnership Support">{t("contact_form_subj_opt3")}</option>
                      <option value="Worship Inquiry">{language === "en" ? "Attending Church Fellowship" : "मण्डली संगतिमा भाग लिने"}</option>
                      <option value="Other">{language === "en" ? "General Question" : "सामान्य प्रश्न"}</option>
                    </select>
                  </div>

                  {/* Message Details */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      {t("contact_form_label_detail")}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t("contact_form_placeholder_detail")}
                      className="w-full bg-white border border-slate-200 focus:border-sky-500 rounded-xl p-3 text-sm focus:outline-none transition-all shadow-inner resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm cursor-pointer mt-4"
                  >
                    <Send className="h-4 w-4" />
                    <span>{t("contact_form_btn_send")}</span>
                  </button>

                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
