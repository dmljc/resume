import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";
import { useI18n } from "../../lib/i18n-core.js";
import { jobs } from "./work.data.js";

// jobs 已迁移到共享数据文件，避免在组件文件导出非组件内容。

export default function WorkTimeline(){
  const { t, lang } = useI18n();
  return (
    <section id="experience" className="pt-14 sm:pt-16 pb-20 sm:pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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