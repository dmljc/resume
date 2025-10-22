import { Button } from "../ui/button.jsx";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const desc = "5年+前端开发经验，专注中后台系统与性能优化；熟悉 React/Vue、Node/Egg、uni-app 与微信小程序，具备数据可视化经验。";
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" className="relative overflow-hidden">
      {/* 背景栅格质感覆盖 */}
      <div className="hero-grid-overlay" />
      <div className="container mx-auto max-w-7xl py-16 sm:py-20 md:py-28 lg:py-32 grid gap-8 sm:gap-10 lg:gap-12 items-center lg:grid-cols-2">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">你好，我是</h1>
          <div className="mt-2">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">张芳朝</span>
          </div>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">{desc}</p>
          <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            <Button variant="gradient" className="group transform transition-transform duration-300 hover:scale-105" onClick={()=>scrollTo('skills')}>
              <span>了解更多</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="ghost"
              className="group transform transition-transform duration-300 hover:scale-105 hover:!bg-transparent border border-dashed border-[hsl(var(--grad-to))]"
              onClick={()=>scrollTo('contact')}
            >
              联系我
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative z-10 rounded-full overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80 3xl:h-96 3xl:w-96">
            <img
              src="https://t13.baidu.com/it/u=623182183,2044352368&fm=225&app=113&f=JPEG?w=1685&h=1053&s=1E1A17CB84133DDC53CC4C380300C042"
              alt="avatar"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* 底部分隔波浪 */}
      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C300,80 600,0 1200,90 L1200,120 L0,120 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}