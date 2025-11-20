import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";
import { Badge } from "../ui/badge.jsx";
import { useI18n } from "../../lib/i18n-core.js";
import { skills } from "./skills.data.js";

const tagClass = (t) => {
  const common = "px-3 py-1 text-white rounded-full text-sm shadow-sm";
  const bg = {
    React: "bg-gradient-to-r from-blue-500 to-indigo-500",
    Vue: "bg-gradient-to-r from-emerald-500 to-green-500",
    Three: "bg-gradient-to-r from-purple-500 to-violet-600",
    "Three.js": "bg-gradient-to-r from-purple-500 to-violet-600",
    Node: "bg-gradient-to-r from-teal-500 to-emerald-600",
    "Node.js": "bg-gradient-to-r from-teal-500 to-emerald-600",
    Nest: "bg-gradient-to-r from-rose-500 to-fuchsia-600",
    "Nest.js": "bg-gradient-to-r from-rose-500 to-fuchsia-600",
    Mysql: "bg-gradient-to-r from-sky-500 to-blue-600",
    MySQL: "bg-gradient-to-r from-sky-500 to-blue-600",
    TypeScript: "bg-gradient-to-r from-indigo-500 to-purple-500",
    "Next.js": "bg-gradient-to-r from-amber-400 to-orange-500",
    D2C: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
    "GitHub Copilot": "bg-gradient-to-r from-sky-500 to-cyan-500",
    "智能代码生成": "bg-gradient-to-r from-blue-500 to-violet-600",
    "微信小程序": "bg-gradient-to-r from-yellow-500 to-amber-500",
    "WeChat Mini Programs": "bg-gradient-to-r from-yellow-500 to-amber-500",
    技术规划: "bg-gradient-to-r from-teal-500 to-green-500",
    团队建设: "bg-gradient-to-r from-orange-500 to-amber-500",
    项目管理: "bg-gradient-to-r from-rose-500 to-pink-500",
    "Tech Strategy": "bg-gradient-to-r from-teal-500 to-green-500",
    "Team Building": "bg-gradient-to-r from-orange-500 to-amber-500",
    "Project Management": "bg-gradient-to-r from-rose-500 to-pink-500",
  };
  const fallbackBg = "bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))]";
  return `${common} ${bg[t] ?? fallbackBg}`;
};

export default function CoreSkills(){
  const { t, lang } = useI18n();
  return (
    <section id="skills" className="pt-14 sm:pt-16 pb-20 sm:pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-brand">{t("skills.title")}</h2>
          <p className="mt-4 text-sm sm:text-lg text-gray-600 dark:text-gray-300">{t("skills.subtitle")}</p>
        </div>
        <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s)=> (
            <Card key={s.titleKey} className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t(s.titleKey)}</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{t(s.descKey)}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {s.tags.map((tag)=> {
                  const label = typeof tag === "string" ? tag : tag[lang];
                  const key = typeof tag === "string" ? tag : tag.zh;
                  return <Badge key={key} className={tagClass(label)}>{label}</Badge>;
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}