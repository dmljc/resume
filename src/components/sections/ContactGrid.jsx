import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card.jsx";

import { Button } from "../ui/button.jsx";
import { Mail, Phone, QrCode } from "lucide-react";
import { showMessage } from "../../lib/message.js";

const contacts = [
  {
    icon: Phone,
    title: "电话",
    desc: "176-0214-3402",
    action: { label: "复制电话" },
  },
  {
    icon: Mail,
    title: "邮箱",
    desc: "17602143402@163.com",
    action: { label: "复制邮箱" },
  },
  {
    icon: QrCode,
    title: "微信号",
    desc: "string-next",
    action: { label: "复制微信号" }
  },
];

export default function ContactGrid(){
  return (
    <section id="contact" className="pt-16 pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-brand">联系方式</h2>
          <p className="mt-2 text-muted-foreground">通过以下方式与我取得联系，期待与您交流</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3 items-stretch">
          {contacts.map((c) => (
            <Card key={c.title} className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
              <CardHeader className="pb-4 text-center">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">{c.title}</CardTitle>
                {c.desc && !c.action && (
                  <CardDescription className="mt-2 text-base text-gray-600 dark:text-gray-300">{c.desc}</CardDescription>
                )}
              </CardHeader>
              {c.qrSrc ? (
                <CardContent className="flex-1 flex items-center justify-center">
                  <img src={c.qrSrc} alt="wechat qr" className="h-44 w-44 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm" />
                </CardContent>
              ) : (
                 <>
                   <CardContent className="flex-1">
                     <div className="rounded-lg px-4 py-3 text-base text-gray-700 dark:text-gray-200 text-center font-mono tracking-wide">
                       {c.desc}
                     </div>
                   </CardContent>
                   {c.action && (
                      <CardFooter>
                        {c.action.href ? (
                          <Button asChild variant="gradient" className="w-full">
                            <a href={c.action.href}>{c.action.label}</a>
                          </Button>
                        ) : (
                          <Button
                            variant="gradient"
                            className="w-full"
                            onClick={async () => {
                              try {
                                await navigator.clipboard?.writeText?.(c.desc);
                                showMessage(`${c.action.label}成功`, 2000, { anchorSelector: "#contact", offsetRem: 2 });
                              } catch {
                                showMessage("复制失败，请重试", 2000, { anchorSelector: "#contact", offsetRem: 2 });
                              }
                            }}
                          >
                            {c.action.label}
                          </Button>
                        )}
                      </CardFooter>
                    )}
                 </>
               )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}