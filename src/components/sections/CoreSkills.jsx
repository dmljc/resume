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
  const map = {
    React: "text-white bg-gradient-to-r from-blue-500 to-indigo-500",
    Vue: "text-white bg-gradient-to-r from-emerald-500 to-green-500",
    Three: "text-white bg-gradient-to-r from-purple-500 to-violet-600",
    Node: "text-white bg-gradient-to-r from-teal-500 to-emerald-600",
    Nest: "text-white bg-gradient-to-r from-rose-500 to-fuchsia-600",
    Mysql: "text-white bg-gradient-to-r from-sky-500 to-blue-600",
    TypeScript: "text-white bg-gradient-to-r from-indigo-500 to-purple-500",
    "Next.js": "text-white bg-gradient-to-r from-amber-400 to-orange-500",
    D2C: "text-white bg-gradient-to-r from-fuchsia-500 to-purple-600",
    "GitHub Copilot": "text-white bg-gradient-to-r from-sky-500 to-cyan-500",
    "智能代码生成": "text-white bg-gradient-to-r from-blue-500 to-violet-600",
    技术规划: "text-white bg-gradient-to-r from-teal-500 to-green-500",
    团队建设: "text-white bg-gradient-to-r from-orange-500 to-amber-500",
    项目管理: "text-white bg-gradient-to-r from-rose-500 to-pink-500",
  };
  return `${map[t] ?? "text-white bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))]"} rounded-full px-3 py-1 shadow-sm`;
};

export default function CoreSkills(){
  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-brand">核心技能</h2>
          <p className="mt-2 text-muted-foreground">深厚的技术积累和全栈开发经验</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {skills.map((s)=> (
            <Card key={s.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.desc}</CardDescription>
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