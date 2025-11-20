import * as React from "react";
import { Button } from "./ui/button.jsx";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton(){
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      // 当滚动超过 240px 时显示按钮
      setVisible(window.scrollY > 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={[
        "fixed right-8 z-50 transition-opacity", // right: 2rem
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
      ].join(" ")}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)" }}
    >
      <Button
        variant="ghost"
        size="sm"
        aria-label="返回顶部"
        title="返回顶部"
        onClick={scrollTop}
        className="rounded-full w-8 h-8 p-0 border border-gray-200 dark:border-gray-700 text-gray-700 hover:bg-muted hover:scale-105 dark:text-gray-300 dark:hover:text-gray-100 shadow-sm transition-all duration-200"
      >
        <ArrowUp size={22} strokeWidth={2} />
      </Button>
    </div>
  );
}