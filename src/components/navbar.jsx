import { Button } from "./ui/button.jsx";
import { cn } from "../lib/utils";
import * as React from "react";
import { Sun, Moon, Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../lib/i18n-core.js";

// 简化后的导航项（标签使用 i18n 字典）
const navItems = [
  { id: "home", path: "/" },
  { id: "resume", path: "/resume" },
];

export default function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = React.useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  // 打印时不渲染导航（确保打印预览中无 DOM）
  const [isPrinting, setIsPrinting] = React.useState(false);
  const { t, toggleLang } = useI18n();

  // 根据当前路径判断激活状态
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isDark ? "#0b1220" : "#ffffff");
  }, [isDark]);

  // 监听打印事件与媒体查询，打印时不渲染导航
  React.useEffect(() => {
    const mql = window.matchMedia && window.matchMedia('print');
    const onChange = (e) => setIsPrinting(e.matches);
    const onBefore = () => setIsPrinting(true);
    const onAfter = () => setIsPrinting(false);

    if (mql) {
      if (mql.addEventListener) mql.addEventListener('change', onChange);
      else if (mql.addListener) mql.addListener(onChange);
    }
    window.addEventListener('beforeprint', onBefore);
    window.addEventListener('afterprint', onAfter);

    return () => {
      if (mql) {
        if (mql.removeEventListener) mql.removeEventListener('change', onChange);
        else if (mql.removeListener) mql.removeListener(onChange);
      }
      window.removeEventListener('beforeprint', onBefore);
      window.removeEventListener('afterprint', onAfter);
    };
  }, []);

  const toggleTheme = () => setIsDark((v) => !v);

  const linkClass = (path) =>
    cn(
      "transition-colors duration-200 text-[15px] font-medium rounded-full px-3 py-1 text-center",
      isActive(path)
        ? "text-white bg-gradient-to-r from-[hsl(var(--grad-from))] to-[hsl(var(--grad-to))] shadow-sm"
        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
    );

  // 打印预览期间不渲染导航 DOM
  if (isPrinting) {
    return null;
  }

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 print-hidden")}> 
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-semibold gradient-brand text-lg tracking-wide"
        >
          {t("brand.name")}
        </Link>
        
        {/* 移动端切换按钮：语言和主题 */}
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
        
        {/* 导航链接 */}
        <div className="flex items-center gap-6 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={linkClass(item.path)}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              {t(`nav.${item.id}`)}
            </Link>
          ))}
          
          {/* 桌面端切换按钮：语言和主题 */}
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