import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";
import { Badge } from "../ui/badge.jsx";

const skills = [
  {
    title: "前端技术",
    desc: "熟悉 React、Vue、Three 等前端技术，具备复杂交互与可视化经验。",
    tags: ["React", "Vue", "Three"],
  },
  {
    title: "后端技术",
    desc: "掌握 Node、Nest 与 MySQL，具备服务端开发与数据存储经验。",
    tags: ["Node", "Nest", "Mysql"],
  },
  {
    title: "团队管理",
    desc: "丰富的技术团队管理经验，善于规划技术方向和推动团队创新。",
    tags: ["技术规划", "团队建设", "项目管理"],
  },
];

const tagClass = (t) => {
  const common = "px-3 py-1 text-white rounded-full text-sm shadow-sm";
  const bg = {
    React: "bg-gradient-to-r from-blue-500 to-indigo-500",
    Vue: "bg-gradient-to-r from-emerald-500 to-green-500",
    Three: "bg-gradient-to-r from-purple-500 to-violet-600",
    Node: "bg-gradient-to-r from-teal-500 to-emerald-600",
    Nest: "bg-gradient-to-r from-rose-500 to-fuchsia-600",
    Mysql: "bg-gradient-to-r from-sky-500 to-blue-600",
    TypeScript: "bg-gradient-to-r from-indigo-500 to-purple-500",
    "Next.js": "bg-gradient-to-r from-amber-400 to-orange-500",
    D2C: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
    "GitHub Copilot": "bg-gradient-to-r from-sky-500 to-cyan-500",
    "智能代码生成": "bg-gradient-to-r from-blue-500 to-violet-600",
    技术规划: "bg-gradient-to-r from-teal-500 to-green-500",
    团队建设: "bg-gradient-to-r from-orange-500 to-amber-500",
    项目管理: "bg-gradient-to-r from-rose-500 to-pink-500",
  };
  const fallbackBg = "bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))]";
  return `${common} ${bg[t] ?? fallbackBg}`;
};

export default function CoreSkills(){
  return (
    <section id="skills" className="pt-16 pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-brand">核心技能</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">深厚的技术积累和全栈开发经验</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skills.map((s)=> (
            <Card key={s.title} className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{s.title}</CardTitle>
                <CardDescription className="text-base text-gray-600 dark:text-gray-300 mb-4">{s.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {s.tags.map((t)=> (
                  <Badge key={t} className={tagClass(t)}>{t}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}