import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";
import { useI18n } from "../../lib/i18n-core.js";
import { education } from "./education.data.js";

export default function Education(){
  const { t, lang } = useI18n();
  return (
    <section id="education" className="pt-16 pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-brand">{t("education.title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("education.subtitle")}</p>
        </div>
        <div className="mt-10 space-y-6">
          {education.map((e)=> (
            <Card key={e.school.zh} className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <CardHeader className="grid grid-cols-[1fr,auto] items-start gap-x-3 pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white col-start-1 col-end-2">{e.school[lang]}</CardTitle>
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-500 whitespace-nowrap justify-self-end col-start-2 col-end-3">{e.time[lang]}</span>
                <CardDescription className="mt-1 text-base sm:text-lg text-gray-600 dark:text-gray-300 col-span-2 w-full block">{e.degree[lang]}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base leading-relaxed sm:leading-7 break-words text-gray-600 dark:text-gray-300">{e.desc[lang]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}