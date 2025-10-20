import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card.jsx";
import { Button } from "../ui/button.jsx";
import { Mail, Phone, QrCode } from "lucide-react";

const contacts = [
  {
    icon: QrCode,
    title: "微信二维码",
    desc: "微信扫码添加联系",
    qrSrc: "/wechat-qr.svg",
  },
  {
    icon: Mail,
    title: "邮箱",
    desc: "17602143402@163.com",
    action: { label: "发送邮件", href: "mailto:17602143402@163.com" },
  },
  {
    icon: Phone,
    title: "电话",
    desc: "176-0214-3402",
    action: { label: "拨打电话", href: "tel:17602143402" },
  },
];

export default function ContactGrid(){
  return (
    <section id="contact" className="py-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-brand">联系方式</h2>
          <p className="mt-2 text-muted-foreground">通过以下方式与我取得联系，期待与您交流</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contacts.map((c) => (
            <Card key={c.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <c.icon className="h-5 w-5 text-primary" />
                  <CardTitle>{c.title}</CardTitle>
                </div>
                <CardDescription>{c.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                {c.qrSrc ? (
                  <div className="flex items-center justify-center">
                    <img src={c.qrSrc} alt="wechat qr" className="h-40 w-40 rounded-md border" />
                  </div>
                ) : (
                  <Button asChild variant="gradient" className="w-full">
                    <a href={c.action.href}>{c.action.label}</a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}