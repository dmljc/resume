import * as React from "react";

export const dict = {
  "brand.name": { zh: "张芳朝", en: "Zhang Fangchao" },
  "site.title": {
    zh: "张芳朝 — 前端开发",
    en: "ZhangFangChao — Frontend Developer",
  },
  "nav.home": { zh: "主页", en: "Home" },
  "nav.skills": { zh: "核心技能", en: "Core Skills" },
  "nav.experience": { zh: "工作经历", en: "Experience" },
  "nav.education": { zh: "教育背景", en: "Education" },
  "nav.contact": { zh: "联系方式", en: "Contact" },
  "nav.resume": { zh: "在线简历", en: "Online Resume" },
  "nav.toggleTheme": { zh: "切换主题", en: "Toggle Theme" },
  "nav.toggleLang": { zh: "切换语言", en: "Toggle Language" },
  // Resume filename for PDF export
  "resume.filename": {
    zh: "张芳朝-全栈偏前端-9年工作经验.pdf",
    en: "Zhang-Fangchao-Full-Stack-Frontend-leaning-9-Years-Experience.pdf",
  },

  // Resume page common actions
  "resume.download": { zh: "下载简历", en: "Download Resume" },
  "resume.print": { zh: "打印简历", en: "Print Resume" },
  "resume.pcOnly": {
    zh: "请在 PC 端查看在线简历",
    en: "Please view the online resume on a PC",
  },
  // Common profile subtitle shown on both pages
  "profile.subtitle": {
    zh: "前端开发 | 9年经验",
    en: "Frontend Developer | 9 Years Experience",
  },

  // Experience section

  // Shared advantage section (used in hero and resume page)
  "advantages.title": { zh: "个人优势", en: "Personal Strengths" },
  "advantages.label.experience": {
    zh: "【专业经验】",
    en: "[Professional Experience]",
  },
  "advantages.label.stack": { zh: "【技术体系】", en: "[Tech Stack]" },
  "advantages.label.focus": { zh: "【特色领域】", en: "[Specialized Areas]" },
  "advantages.label.highlights": {
    zh: "【项目亮点】",
    en: "[Project Highlights]",
  },
  "advantages.value.experience": {
    zh: "9 年前端开发 + 4 年团队管理",
    en: "9 years in frontend development + 4 years in team leadership",
  },
  "advantages.value.stack": {
    zh: "React、Vue、Three.js、Nest.js、TypeScript、Vite、Rollup",
    en: "React, Vue, Three.js, Nest.js, TypeScript, Vite, Rollup",
  },
  "advantages.value.focus": {
    zh: "三维可视化、中后台重构、性能优化",
    en: "3D visualization, admin‑system refactoring, performance optimization",
  },
  "advantages.value.highlights": {
    zh: "主导多个核心项目落地，提升业务效率与用户体验",
    en: "Led multiple core projects; improved business efficiency and user experience",
  },

  "hero.greeting": { zh: "你好，我是", en: "Hi, I’m" },
  "hero.learn": { zh: "了解更多", en: "Learn More" },
  "hero.contact": { zh: "联系我", en: "Contact Me" },
  "hero.desc": {
    zh: "【专业经验】：9 年前端开发 + 4 年团队管理\n【技术体系】：React、Vue、Three.js、Nest.js、TypeScript、Vite、Rollup\n【特色领域】：三维可视化、中后台重构、性能优化\n【结果导向】：主导多个核心项目落地，提升业务效率与用户体验",
    en: "Professional Experience: 9 years in frontend · 4 years in team leadership\nTech Stack: React, Vue, Three.js, Nest.js, TypeScript, Vite, Rollup\nFocus Areas: 3D visualization, admin‑system refactoring, performance optimization\nOutcome‑Driven: Led multiple core projects; improved business efficiency and user experience",
  },

  "skills.title": { zh: "核心技能", en: "Core Skills" },
  "skills.subtitle": {
    zh: "深厚的技术积累和全栈开发经验",
    en: "Strong technical background and full‑stack experience",
  },
  // Skills section subtitle
  // Shared skill category labels and descriptions
  "skills.frontend": { zh: "前端技术", en: "Frontend" },
  "skills.backend": { zh: "后端技术", en: "Backend" },
  "skills.management": { zh: "团队管理", en: "Team Leadership" },
  "skills.frontend.desc": {
    zh: "熟练掌握 React、Vue、Three.js、ES6+、TypeScript、微信小程序、AI 辅助编程 等。",
    en: "Expert: React, Vue 3, TypeScript, Three.js, ES6+; Proficient: WeChat Mini Programs, Webpack, Vite, Rollup; Familiar: Git, frontend performance optimization, cross‑platform adaptation.",
  },
  "skills.backend.desc": {
    zh: "掌握 Nest.js、Node.js、Nginx、MySQL；具备服务端开发、数据存储设计、接口设计能力。",
    en: "Proficient: Nest.js, Node.js, Nginx, MySQL; Familiar: server‑side development, data storage design, API design.",
  },
  "skills.management.desc": {
    zh: "技术规划、团队建设、项目管理、技术规范制定、内部培训赋能。",
    en: "Tech strategy, team building, project management, technical standards, internal training & enablement.",
  },

  "education.title": { zh: "教育背景", en: "Education" },
  "education.subtitle": {
    zh: "我的学历与专业背景",
    en: "My education and academic background",
  },

  "contact.title": { zh: "联系方式", en: "Contact" },
  "contact.subtitle": {
    zh: "通过以下方式与我取得联系，期待与您交流",
    en: "Get in touch via these methods; I look forward to connecting.",
  },
  // Shared contact labels
  "contact.phone": { zh: "电话", en: "Phone" },
  "contact.email": { zh: "邮箱", en: "Email" },
  "contact.wechat": { zh: "微信号", en: "WeChat" },
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
