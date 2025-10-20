import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";

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
  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-brand">工作经历</h2>
          <p className="mt-2 text-muted-foreground">我的职业发展历程</p>
        </div>
        <div className="mt-10 space-y-6">
          {jobs.map((j)=> (
            <Card key={j.company} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex items-start justify-between">
                <div>
                  <CardTitle>{j.company}</CardTitle>
                  <CardDescription className="mt-1">{j.role}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{j.time}</span>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
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