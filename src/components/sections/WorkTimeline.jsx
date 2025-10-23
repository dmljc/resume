import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";
import { useI18n } from "../../lib/i18n-core.js";

const jobs = [
  {
    company: "云上会展有限公司（阿里子公司）",
    role: "前端开发工程师",
    time: "2021.07 至今",
    points: [
      "负责展会管理工作台研发；Umi + React 技术栈落地。",
      "首屏性能优化，从约10s优化至约3s。",
      "国际化方案设计与落地；通用业务组件建设。",
    ],
  },
  {
    company: "杭州缙湾网络科技有限公司",
    role: "前端开发工程师",
    time: "2020.02 - 2021.06",
    points: [
      "参与后管系统与数据可视化项目开发。",
      "承担部分模块的需求分析、架构设计与实现。",
    ],
  },
  {
    company: "北京没克时代科技有限公司",
    role: "前端开发工程师",
    time: "2017.03 - 2020.02",
    points: [
      "维护公司产品前端与相关业务功能。",
    ],
  },
];

export default function WorkTimeline(){
  const { t } = useI18n();
  return (
    <section id="experience" className="pt-14 sm:pt-16 pb-20 sm:pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-brand">{t("experience.title")}</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">{t("experience.subtitle")}</p>
        </div>
        <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
          {jobs.map((j)=> (
            <Card key={j.company} className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <CardHeader className="pb-4">
                <div className="w-full">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white break-words">{j.company}</CardTitle>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <CardDescription className="text-base sm:text-lg text-gray-600 dark:text-gray-300 flex-1 min-w-0">{j.role}</CardDescription>
                    <span className="text-sm sm:text-base whitespace-nowrap text-gray-500 dark:text-gray-500">{j.time}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base leading-relaxed sm:leading-7 marker:text-gray-400 break-words text-gray-600 dark:text-gray-300">
                  {j.points.map((p)=> (<li key={p}>{p}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}