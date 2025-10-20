import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";

const education = [
  {
    school: "西安交通大学",
    degree: "自动化科学与技术 本科",
    time: "2012 - 2016",
    desc: "系统学习自动化与控制理论，参与多个课程项目与科研实践。",
  },
];

export default function Education(){
  return (
    <section id="education" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-brand">教育背景</h2>
          <p className="mt-2 text-muted-foreground">我的学历与专业背景</p>
        </div>
        <div className="mt-10 space-y-6">
          {education.map((e)=> (
            <Card key={e.school} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex items-start justify-between">
                <div>
                  <CardTitle>{e.school}</CardTitle>
                  <CardDescription className="mt-1">{e.degree}</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">{e.time}</span>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}