import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card.jsx";

import { Button } from "../ui/button.jsx";
import { Mail, Phone, QrCode } from "lucide-react";
import { showMessage } from "../../lib/message.js";
import { useI18n } from "../../lib/i18n-core.js";

const contacts = [
  {
    icon: Phone,
    title: { zh: "电话", en: "Phone" },
    desc: "156-5718-9067",
    actionKey: "phone",
  },
  {
    icon: Mail,
    title: { zh: "邮箱", en: "Email" },
    desc: "17602143402@163.com",
    actionKey: "email",
  },
  {
    icon: QrCode,
    title: { zh: "微信号", en: "WeChat" },
    desc: "string-next",
    actionKey: "wechat"
  },
];

export default function ContactGrid(){
  const { t, lang } = useI18n();
  return (
    <section id="contact" className="pt-14 sm:pt-16 pb-20 sm:pb-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-brand">{t("contact.title")}</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">{t("contact.subtitle")}</p>
        </div>
        <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {contacts.map((c) => (
            <Card key={c.desc} className="text-card-foreground shadow-black/5 bg-card rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
              <CardHeader className="pb-4 text-center">
                <div className="flex justify-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                    <c.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-3 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{c.title[lang]}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="rounded-lg px-4 py-3 text-sm sm:text-base text-gray-700 dark:text-gray-200 text-center font-mono tracking-wide">
                  {c.desc}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="gradient"
                  className="w-full"
                  onClick={async () => {
                    try {
                      await navigator.clipboard?.writeText?.(c.desc);
                      showMessage(`${t(`contact.copy.${c.actionKey}`)}${t("contact.copy.suffix")}`, 2000, { anchorSelector: "#contact", offsetRem: 2 });
                    } catch {
                      showMessage(t("contact.copy.fail"), 2000, { anchorSelector: "#contact", offsetRem: 2 });
                    }
                  }}
                >
                  {t(`contact.copy.${c.actionKey}`)}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}