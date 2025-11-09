import * as React from "react";

export default function Footer({ fixed = false }) {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className={`print-hidden ${fixed ? 'fixed bottom-0 left-0 right-0' : ''} z-40 h-12 border-t bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
    >
      <div className="container mx-auto max-w-7xl h-full">
        <div className="h-full flex items-center justify-center gap-3 text-[12px] sm:text-[13px] leading-none text-gray-600 dark:text-gray-400">
          <div>© {year} Zhang Fangchao</div>
          <div className="flex items-center">
            <span className="hidden sm:inline">网站备案号：</span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="网站备案号"
              className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-2"
            >
              浙ICP备2025207551号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}