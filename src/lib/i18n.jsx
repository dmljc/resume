import * as React from "react";
import { I18nContext, dict } from "./i18n-core.js";



export function I18nProvider({ children }) {
  const [lang, setLang] = React.useState(() => localStorage.getItem("lang") || "zh");

  React.useEffect(() => {
    // 仅维护语言状态持久化；标题与 html lang 由路由层统一管理
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = React.useCallback((key) => {
    const entry = dict[key];
    if (!entry) return key;
    return entry[lang] ?? entry.zh;
  }, [lang]);

  const toggleLang = React.useCallback(() => {
    const nextLang = lang === "zh" ? "en" : "zh";
    // 仅更新语言与持久化；标题和 html lang 在 DynamicHead 中统一处理
    localStorage.setItem("lang", nextLang);
    setLang(nextLang);
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}