import * as React from "react";
import { I18nContext, dict } from "./i18n-core.js";



export function I18nProvider({ children }) {
  const [lang, setLang] = React.useState(() => localStorage.getItem("lang") || "zh");

  React.useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const t = React.useCallback((key) => {
    const entry = dict[key];
    if (!entry) return key;
    return entry[lang] ?? entry.zh;
  }, [lang]);

  React.useLayoutEffect(() => {
    // Update browser tab title on language change without visual delay
    document.title = t("site.title");
  }, [lang, t]);

  const toggleLang = React.useCallback(() => {
    const nextLang = lang === "zh" ? "en" : "zh";
    // Immediately update title and html lang to avoid visible delay
    document.title = dict["site.title"]?.[nextLang] ?? dict["site.title"].zh;
    document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
    localStorage.setItem("lang", nextLang);
    setLang(nextLang);
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}