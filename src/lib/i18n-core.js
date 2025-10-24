import * as React from "react";

export const dict = {
  "brand.name": { zh: "张芳朝", en: "ZhangFangChao" },
  "site.title": { zh: "张芳朝 — 前端开发", en: "ZhangFangChao — Frontend Developer" },
  "nav.home": { zh: "主页", en: "Home" },
  "nav.skills": { zh: "核心技能", en: "Skills" },
  "nav.experience": { zh: "工作经历", en: "Experience" },
  "nav.education": { zh: "教育背景", en: "Education" },
  "nav.contact": { zh: "联系方式", en: "Contact" },
  "nav.toggleTheme": { zh: "切换主题", en: "Toggle Theme" },
  "nav.toggleLang": { zh: "切换语言", en: "Toggle Language" },

  "hero.greeting": { zh: "你好，我是", en: "Hi, I’m" },
  "hero.learn": { zh: "了解更多", en: "Learn More" },
  "hero.contact": { zh: "联系我", en: "Contact Me" },
  "hero.desc": {
    zh: "9 年前端开发经验（含 4 年团队管理经验)\n擅长中后台开发、重构、性能优化\n熟练掌握 React、Vue、TypeScript、ES6+\n具备 Three.js 三维开发、Nest.js 全栈开发、微信小程序开发经验",
    en: "9+ years of frontend experience (including 4 years of team leadership)\nSkilled in admin systems, refactoring, and performance optimization\nProficient in React, Vue, TypeScript, ES6+\nExperienced with Three.js (3D), Nest.js (full‑stack), and WeChat Mini Programs",
  },

  "skills.title": { zh: "核心技能", en: "Core Skills" },
  "skills.subtitle": {
    zh: "深厚的技术积累和全栈开发经验",
    en: "Strong technical background and full‑stack experience",
  },

  "education.title": { zh: "教育背景", en: "Education" },
  "education.subtitle": {
    zh: "我的学历与专业背景",
    en: "My education and major background",
  },

  "contact.title": { zh: "联系方式", en: "Contact" },
  "contact.subtitle": {
    zh: "通过以下方式与我取得联系，期待与您交流",
    en: "Get in touch via these methods; I look forward to connecting.",
  },
  // Contact actions & messages
  "contact.copy.phone": { zh: "复制电话", en: "Copy Phone" },
  "contact.copy.email": { zh: "复制邮箱", en: "Copy Email" },
  "contact.copy.wechat": { zh: "复制微信号", en: "Copy WeChat" },
  "contact.copy.fail": {
    zh: "复制失败，请重试",
    en: "Copy failed, please try again",
  },
  "contact.copy.suffix": { zh: "成功", en: " successfully" },

  "experience.title": { zh: "工作经历", en: "Experience" },
  "experience.subtitle": { zh: "我的职业发展历程", en: "My career journey" },
};

export const I18nContext = React.createContext({
  lang: "zh",
  setLang: () => {},
  toggleLang: () => {},
  t: (k) => dict[k]?.zh ?? k,
});

export const useI18n = () => React.useContext(I18nContext);
