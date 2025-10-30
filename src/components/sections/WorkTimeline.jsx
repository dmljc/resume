import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";
import { useI18n } from "../../lib/i18n-core.js";

const jobs = [
  {
    company: { zh: "浙江图维科技股份有限公司", en: "Zhejiang TuWei Technology Co., Ltd." },
    role: { zh: "前端小组长", en: "Frontend Team Lead" },
    time: { zh: "2022.04 至今", en: "Apr 2022 — Present" },
    points: {
      zh: [
        "负责三维工井标注项目的探索与落地；",
        "技术栈 Three.js、Vue3、TypeScript、Vite、ES6+ 等；",
        "三维项目需求分析、架构设计、性能优化，相关通用能力沉淀；",
        "牵头三维技术方向团队能力建设，​​内部技术文档沉淀；​",
      ],
      en: [
        "Led exploration and delivery of the 3D well‑labeling project;",
        "Tech stack: Three.js, Vue3, TypeScript, Vite, ES6+;",
        "Handled requirements analysis, architecture design, and performance optimization; generalized capabilities;",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ],
    },
  },
  {
    company: { zh: "云上会展有限公司【阿里子公司】", en: "Cloud Expo Co., Ltd. [Alibaba Subsidiary]" },
    role: { zh: "项目 Leader", en: "Project Leader" },
    time: { zh: "2021.07 至 2022.03", en: "Jul 2021 — Mar 2022" },
    points: {
      zh: [
        "展会工作台 首屏性能优化从约 10s 优化至约 2.5s；",
        "技术栈 React、TypeScript、Webpack、ES6+ ；",
        "主导4人规模前端小组常研发与协作管理，制定技术规范；",
      ],
      en: [
        "Optimized workbench first‑screen performance from ~10s to ~2.5s;",
        "Tech stack: React, TypeScript, Webpack, ES6+;",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ],
    },
  },
  {
    company: { zh: "杭州绿湾网络科技有限公司", en: "Hangzhou GreenBay Network Technology Co., Ltd." },
    role: { zh: "项目 Owner", en: "Project Owner" },
    time: { zh: "2020.02 - 2021.06", en: "Feb 2020 — Jun 2021" },
    points: {
      zh: [
        "通过主导重构数据治理中后台系统，为团队争取到了 3.75 的绩；",
        "技术栈 React、TypeScript、Webpack、ES6+ ；",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ],
      en: [
        "Led refactoring of data‑governance admin system, secured a team score of 3.75;",
        "Tech stack: React, TypeScript, Webpack, ES6+;",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ],
    },
  },
  {
    company: { zh: "北京汉克时代科技有限公司", en: "Beijing Hank Times Technology Co., Ltd." },
    role: { zh: "前端开发骨干", en: "Key Frontend Developer" },
    time: { zh: "2017.03 - 2020.02", en: "Mar 2017 — Feb 2020" },
    points: {
      zh: [
        "客服工作平台项目的开发与维护；",
        "技术栈 Vue2 全家桶、Element UI、Git ；",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ],
      en: [
        "Developed and maintained the customer‑service platform; owned interactions and features for both user and agent sides;",
        "Tech stack: Vue2 suite, JavaScript, ES6, Element UI;",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ],
    },
  },
];

export default function WorkTimeline(){
  const { t, lang } = useI18n();
  return (
    <section id="experience" className="pt-14 sm:pt-16 pb-20 sm:pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-brand">{t("experience.title")}</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">{t("experience.subtitle")}</p>
        </div>
        <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
          {jobs.map((j)=> (
            <Card key={j.company.zh} className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <CardHeader className="pb-4">
                <div className="w-full">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white break-words">{j.company[lang]}</CardTitle>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <CardDescription className="text-base sm:text-lg text-gray-600 dark:text-gray-300 flex-1 min-w-0">{j.role[lang]}</CardDescription>
                    <span className="text-sm sm:text-base whitespace-nowrap text-gray-500 dark:text-gray-500">{j.time[lang]}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base leading-relaxed sm:leading-7 marker:text-gray-400 break-words text-gray-600 dark:text-gray-300">
                  {j.points[lang].map((p)=> (<li key={p}>{p}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}