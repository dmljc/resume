import { Button } from "./ui/button.jsx";
import { cn } from "../lib/utils";
import * as React from "react";
import { Sun, Moon } from "lucide-react";

const items = [
  { id: "home", label: "主页" },
  { id: "skills", label: "个人技能" },
  { id: "experience", label: "工作经历" },
  { id: "contact", label: "联系方式" },
];

export default function Navbar() {
  const [active, setActive] = React.useState("home");
  const [isDark, setIsDark] = React.useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isDark ? "#0b1220" : "#ffffff");
  }, [isDark]);

  const toggleTheme = () => setIsDark((v) => !v);

  const linkClass = (id) =>
    cn(
      "transition-colors duration-200 text-[15px] font-medium",
      active === id
        ? "text-white bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))] rounded-full px-3 py-1 shadow-sm"
        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
    );

  return (
    <nav className={cn("sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60")}> 
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e)=>{e.preventDefault();scrollTo('home')}}
          className="font-semibold gradient-brand text-lg tracking-wide"
        >
          张芳朝
        </a>
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {items.map((it)=> (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e)=>{e.preventDefault();scrollTo(it.id)}}
              className={linkClass(it.id)}
              aria-current={active === it.id ? "page" : undefined}
            >
              {it.label}
            </a>
          ))}
          <Button variant="ghost" size="sm" aria-label="切换主题" onClick={toggleTheme} className="rounded-full w-8 h-8 p-0">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>
    </nav>
  );
}