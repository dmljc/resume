import Hero from "./components/sections/Hero.jsx";
import CoreSkills from "./components/sections/CoreSkills.jsx";
import WorkTimeline from "./components/sections/WorkTimeline.jsx";
import Education from "./components/sections/Education.jsx";
import ContactGrid from "./components/sections/ContactGrid.jsx";
import ScrollTopButton from "./components/ScrollTopButton.jsx";
import { Sparkles, Briefcase, GraduationCap, Mail } from "lucide-react";

export default function App(){
  return (
    <div>
      <main className="relative pt-16">
        <div id="home">
          <Hero />
        </div>
        <section id="skills">
          <CoreSkills />
        </section>
        <section id="experience">
          <WorkTimeline />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <ContactGrid />
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
              className="rounded-full w-9 h-9 flex items-center justify-center border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-muted transition-colors duration-200 shadow-sm"
              >
              <span className="sr-only">{item.label}</span>
              {/* 使用之前的图标风格（lucide-react），并将“核心技能”恢复为几天前的样式 */}
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
