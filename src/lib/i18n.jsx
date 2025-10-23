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

  const toggleLang = React.useCallback(() => {
    setLang((v) => (v === "zh" ? "en" : "zh"));
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}