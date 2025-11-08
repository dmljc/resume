import * as React from "react";
const Hero = React.lazy(() => import("./components/sections/Hero.jsx"));
const CoreSkills = React.lazy(() => import("./components/sections/CoreSkills.jsx"));
const WorkTimeline = React.lazy(() => import("./components/sections/WorkTimeline.jsx"));
const Education = React.lazy(() => import("./components/sections/Education.jsx"));
const ContactGrid = React.lazy(() => import("./components/sections/ContactGrid.jsx"));
import ScrollTopButton from "./components/ScrollTopButton.jsx";
import { Sparkles, Briefcase, GraduationCap, Mail } from "lucide-react";

export default function App(){
  const [activeSection, setActiveSection] = React.useState(null);
  
  React.useEffect(() => {
    const sections = ['skills', 'experience', 'education', 'contact'];
    let rafId = null;
    const bandTop = 0.35;
    const bandBottom = 0.35;

    const pickActive = () => {
      const vh = window.innerHeight;
      const bandTopY = vh * bandTop;
      const bandBottomY = vh * (1 - bandBottom);
      const centerY = vh / 2;
      let byOverlap = { id: null, overlap: 0, distance: Infinity };
      let byTopEnter = null;
      let nearest = { id: null, distance: Infinity };
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const overlap = Math.max(0, Math.min(rect.bottom, bandBottomY) - Math.max(rect.top, bandTopY));
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - centerY);
        if (overlap > byOverlap.overlap || (overlap === byOverlap.overlap && distance < byOverlap.distance)) {
          byOverlap = { id, overlap, distance };
        }
        if (rect.top <= bandTopY) {
          byTopEnter = id;
        }
        if (distance < nearest.distance) nearest = { id, distance };
      }
      return byOverlap.overlap > 0 ? byOverlap.id : (byTopEnter || nearest.id || sections[0]);
    };

    const update = () => {
      const next = pickActive();
      if (next && next !== activeSection) setActiveSection(next);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // 初始计算，确保一开始就有选中态
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  
  return (
    <div>
      <main className="relative pt-16">
        <div id="home">
          <React.Suspense fallback={null}><Hero /></React.Suspense>
        </div>
        <section id="skills">
          <React.Suspense fallback={null}><CoreSkills /></React.Suspense>
        </section>
        <section id="experience">
          <React.Suspense fallback={null}><WorkTimeline /></React.Suspense>
        </section>
        <section id="education">
          <React.Suspense fallback={null}><Education /></React.Suspense>
        </section>
        <section id="contact">
          <React.Suspense fallback={null}><ContactGrid /></React.Suspense>
        </section>
        
        {/* 右侧模块导航 */}
        <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-40">
          {[
            { id: "skills", label: "核心技能" },
            { id: "experience", label: "工作经历" },
            { id: "education", label: "教育背景" },
            { id: "contact", label: "联系方式" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 shadow-sm ${
                activeSection === item.id 
                  ? "bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))] text-white" 
                  : "border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-muted"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (!el) return;
                setActiveSection(item.id);
                try {
                  const hash = `#${item.id}`;
                  if (location.hash !== hash) history.replaceState(null, '', hash);
                } catch (err) { void err; }
                const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
              }}
              >
              <span className="sr-only">{item.label}</span>
              {/* 使用之前的图标风格（lucide-react），并将"核心技能"恢复为几天前的样式 */}
              {item.id === 'skills' && <Sparkles size={20} strokeWidth={2} className="shrink-0" />}
              {item.id === 'experience' && <Briefcase size={20} strokeWidth={2} className="shrink-0" />}
              {item.id === 'education' && <GraduationCap size={20} strokeWidth={2} className="shrink-0" />}
              {item.id === 'contact' && <Mail size={20} strokeWidth={2} className="shrink-0" />}
            </a>
          ))}
        </div>
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Zhang Fangchao</footer>
      <ScrollTopButton />
    </div>
  );
}
