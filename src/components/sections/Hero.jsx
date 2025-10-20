import { Button } from "../ui/button.jsx";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const desc = "5年+前端开发经验，专注中后台系统与性能优化；熟悉 React/Vue、Node/Egg、uni-app 与微信小程序，具备数据可视化经验。";
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" className="relative overflow-hidden">
      {/* 背景栅格质感覆盖 */}
      <div className="hero-grid-overlay" />
      <div className="container mx-auto max-w-7xl py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">你好，我是</h1>
          <div className="mt-2">
            <span className="text-5xl md:text-6xl font-bold gradient-text">张芳朝</span>
          </div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">{desc}</p>
          <div className="mt-8 flex gap-3">
            <Button variant="gradient" className="group" onClick={()=>scrollTo('skills')}>
              <span>了解更多</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" onClick={()=>scrollTo('contact')}>联系我</Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <div className="relative md:ml-[160px] lg:ml-[200px] xl:ml-[220px] 2xl:ml-[260px]">
            {/* 光晕 */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))] blur-2xl opacity-40" />
            {/* 头像圆卡（对齐孟健样式） */}
            <div className="relative w-72 h-72 md:w-[308px] md:h-[308px] rounded-full overflow-hidden bg-white/30 dark:bg-white/10 border border-white/80 dark:border-gray-700 shadow-xl ring-4 ring-white/60 dark:ring-gray-300/30">
              <img
                src="https://t13.baidu.com/it/u=623182183,2044352368&fm=225&app=113&f=JPEG?w=1685&h=1053&s=1E1A17CB84133DDC53CC4C380300C042"
                alt="avatar"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
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