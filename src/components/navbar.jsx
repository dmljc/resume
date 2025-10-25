import { Button } from "./ui/button.jsx";
import { cn } from "../lib/utils";
import * as React from "react";
import { Sun, Moon, Code2, Briefcase, BookOpen, Mail, Languages } from "lucide-react";
import { useI18n } from "../lib/i18n-core.js";

const items = [
  { id: "home", label: "主页" },
  { id: "skills", label: "核心技能" },
  { id: "experience", label: "工作经历" },
  { id: "education", label: "教育背景" },
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
  const { t, toggleLang } = useI18n();
  const [mobileAnchorTop, setMobileAnchorTop] = React.useState('calc(50svh + 80px)');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  React.useEffect(() => {
    const compute = () => {
      const avatarEl = document.getElementById('hero-avatar');
      if (!avatarEl) { setMobileAnchorTop('calc(50svh + 80px)'); return; }
      const rect = avatarEl.getBoundingClientRect();
      const topPx = rect.top + rect.height / 2; // 头像中心
      setMobileAnchorTop(`${topPx}px`);
    };
    compute();
    const onResize = () => compute();
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('orientationchange', onResize);
    let ro;
    const avatarEl = document.getElementById('hero-avatar');
    if (avatarEl && 'ResizeObserver' in window) {
      ro = new ResizeObserver(() => compute());
      ro.observe(avatarEl);
    }
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (ro) ro.disconnect();
    };
  }, []);

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

  const mobileIconMap = {
    skills: Code2,
    experience: Briefcase,
    education: BookOpen,
    contact: Mail,
  };

  return (
    <nav className={cn("sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60")}> 
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e)=>{e.preventDefault();scrollTo('home')}}
          className="font-semibold gradient-brand text-lg tracking-wide"
        >
          {t("brand.name")}
        </a>
        {/* Mobile toggles: language & theme */}
        <div className="md:hidden flex items-center gap-3 ml-auto">
          <Button
            variant="ghost"
            size="sm"
            aria-label={t("nav.toggleLang")}
            onClick={toggleLang}
            className="rounded-full w-9 h-9 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted dark:text-gray-300 dark:hover:text-gray-100 shadow-sm"
          >
            <Languages size={22} strokeWidth={2} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            aria-label={t("nav.toggleTheme")}
            onClick={toggleTheme}
            className="rounded-full w-9 h-9 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted dark:text-gray-300 dark:hover:text-gray-100 shadow-sm"
          >
            {isDark ? <Sun size={22} strokeWidth={2} /> : <Moon size={22} strokeWidth={2} />}
          </Button>
        </div>
        {/* Mobile vertical nav icons: left-centered, vertical stack */}
        <div className="md:hidden fixed left-5 -translate-y-1/2 flex flex-col items-center gap-4 z-50" style={{ top: mobileAnchorTop }}>
          {[
            "skills",
            "experience",
            "education",
            "contact"
          ].map((id) => {
            const Icon = mobileIconMap[id];
            return (
              <Button
                key={id}
                variant="ghost"
                size="sm"
                aria-label={t(`nav.${id}`)}
                title={t(`nav.${id}`)}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className={cn(
                  "rounded-full w-9 h-9 p-0 border border-gray-200 dark:border-gray-700",
                  active === id
                    ? "text-white bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))] shadow-sm border-transparent"
                    : "text-gray-700 hover:bg-muted dark:text-gray-300 dark:hover:text-gray-100"
                )}
              >
                <Icon size={22} strokeWidth={2} />
              </Button>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {items.map((it)=> (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e)=>{e.preventDefault();scrollTo(it.id)}}
              className={linkClass(it.id)}
              aria-current={active === it.id ? "page" : undefined}
            >
              {t(`nav.${it.id}`)}
            </a>
          ))}
          <Button
            variant="ghost"
            size="sm"
            aria-label={t("nav.toggleLang")}
            onClick={toggleLang}
            className="rounded-full w-8 h-8 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted dark:text-gray-300 dark:hover:text-gray-100"
          >
            <Languages size={22} strokeWidth={2} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            aria-label={t("nav.toggleTheme")}
            onClick={toggleTheme}
            className="rounded-full w-8 h-8 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted dark:text-gray-300 dark:hover:text-gray-100"
          >
            {isDark ? <Sun size={22} strokeWidth={2} /> : <Moon size={22} strokeWidth={2} />}
          </Button>
        </div>
      </div>
    </nav>
  );
}