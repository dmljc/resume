import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";
import { useI18n } from "../../lib/i18n-core.js";

const education = [
  {
    school: "西安交通大学",
    degree: "自动化科学与技术 本科",
    time: "2012 - 2016",
    desc: "系统学习自动化与控制理论，参与多个课程项目与科研实践。",
  },
];

export default function Education(){
  const { t } = useI18n();
  return (
    <section id="education" className="pt-16 pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-brand">{t("education.title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("education.subtitle")}</p>
        </div>
        <div className="mt-10 space-y-6">
          {education.map((e)=> (
            <Card key={e.school} className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <CardHeader className="flex items-start justify-between pb-4">
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{e.school}</CardTitle>
                  <CardDescription className="mt-1 text-base sm:text-lg text-gray-600 dark:text-gray-300">{e.degree}</CardDescription>
                </div>
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-500">{e.time}</span>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base leading-relaxed sm:leading-7 break-words text-gray-600 dark:text-gray-300">{e.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}